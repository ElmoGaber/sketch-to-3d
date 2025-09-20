"use client"

import type React from "react"

import { useState, useRef } from "react"
import Image from "next/image"
import { useLanguage } from "@/contexts/language-context"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Upload, X, Loader2, Check, AlertTriangle, ImageIcon } from "lucide-react"

export default function UploadSection() {
  const { t } = useLanguage()
  const [file, setFile] = useState<File | null>(null)
  const [preview, setPreview] = useState<string | null>(null)
  const [isDragging, setIsDragging] = useState(false)
  const [isProcessing, setIsProcessing] = useState(false)
  const [progress, setProgress] = useState(0)
  const [error, setError] = useState<string | null>(null)
  const [success, setSuccess] = useState(false)
  const fileInputRef = useRef<HTMLInputElement>(null)

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault()
    setIsDragging(true)
  }

  const handleDragLeave = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault()
    setIsDragging(false)
  }

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault()
    setIsDragging(false)

    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFile(e.dataTransfer.files[0])
    }
  }

  const handleFileInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      handleFile(e.target.files[0])
    }
  }

  const handleFile = (file: File) => {
    // Check if file is an image
    if (!file.type.match("image.*")) {
      setError("Please upload an image file (PNG, JPG, JPEG, etc.)")
      return
    }

    // Check file size (max 5MB)
    if (file.size > 5 * 1024 * 1024) {
      setError("File size should not exceed 5MB")
      return
    }

    setError(null)
    setFile(file)
    setSuccess(false)

    // Create preview
    const reader = new FileReader()
    reader.onload = (e) => {
      setPreview(e.target?.result as string)
    }
    reader.readAsDataURL(file)
  }

  const clearFile = () => {
    setFile(null)
    setPreview(null)
    setSuccess(false)
    if (fileInputRef.current) {
      fileInputRef.current.value = ""
    }
  }

  const processSketch = () => {
    if (!file) return

    setIsProcessing(true)
    setProgress(0)
    setSuccess(false)

    // Simulate processing with progress updates
    const interval = setInterval(() => {
      setProgress((prev) => {
        const newProgress = prev + 5
        if (newProgress >= 100) {
          clearInterval(interval)
          setTimeout(() => {
            setIsProcessing(false)
            setSuccess(true)
            // Here you would normally handle the actual result
          }, 500)
          return 100
        }
        return newProgress
      })
    }, 300)
  }

  return (
    <div className="space-y-6">
      <Card className="border-2 border-primary/10 shadow-lg">
        <CardContent className="p-6">
          <div
            className={`border-2 border-dashed rounded-lg transition-colors ${
              isDragging ? "border-primary bg-primary/10" : "border-muted-foreground/30 hover:border-primary/50"
            } ${preview ? "pt-4" : "py-10"}`}
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            onDrop={handleDrop}
          >
            {preview ? (
              <div className="space-y-4">
                <div className="flex justify-between items-center mb-2 px-4">
                  <h3 className="font-medium">{t("upload.preview")}</h3>
                  <Button variant="ghost" size="icon" onClick={clearFile} aria-label="Remove uploaded image">
                    <X className="h-4 w-4" />
                  </Button>
                </div>
                <div className="relative aspect-square max-h-[300px] overflow-hidden rounded-md mx-auto">
                  <img
                    src={preview || "/placeholder.svg"}
                    alt="Sketch preview"
                    className="object-contain w-full h-full"
                  />
                  {success && (
                    <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                      <div className="bg-background p-4 rounded-lg text-center">
                        <div className="mx-auto w-12 h-12 rounded-full bg-green-100 dark:bg-green-900 flex items-center justify-center mb-3 animate-bounce">
                          <Check className="h-6 w-6 text-green-600 dark:text-green-400" />
                        </div>
                        <p className="font-medium">Processing Complete!</p>
                        <p className="text-sm text-muted-foreground mt-1">View results in the tabs</p>
                      </div>
                    </div>
                  )}
                </div>
                <p className="text-sm text-muted-foreground truncate text-center px-4">
                  {file?.name} ({(file?.size / 1024).toFixed(1)} KB)
                </p>
              </div>
            ) : (
              <div className="text-center relative">
                <div className="absolute inset-0 flex items-center justify-center opacity-20">
                  <Image
                    src="/images/sketch-placeholder.jpg"
                    alt="Sketch placeholder"
                    width={300}
                    height={300}
                    className="object-contain max-w-full max-h-full"
                  />
                </div>
                <div className="relative z-10">
                  <div className="mx-auto h-20 w-20 text-muted-foreground flex items-center justify-center bg-muted rounded-full relative group">
                    <Upload className="h-10 w-10 group-hover:scale-110 transition-transform duration-300" />
                    <div className="absolute inset-0 rounded-full border-2 border-dashed border-muted-foreground/30 animate-[spin_10s_linear_infinite]"></div>
                    <div className="absolute inset-2 rounded-full border-2 border-dashed border-muted-foreground/20 animate-[spin_15s_linear_infinite_reverse]"></div>
                  </div>
                  <div className="mt-4">
                    <p className="text-sm font-medium">
                      {t("upload.dropzone")}{" "}
                      <button
                        type="button"
                        className="text-primary hover:text-primary/90 focus:outline-none relative group"
                        onClick={() => fileInputRef.current?.click()}
                      >
                        {t("upload.browse")}
                        <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300"></span>
                      </button>
                    </p>
                    <p className="mt-1 text-xs text-muted-foreground">{t("upload.formats")}</p>
                  </div>
                </div>
              </div>
            )}
            <input
              ref={fileInputRef}
              type="file"
              className="sr-only"
              accept="image/*"
              onChange={handleFileInput}
              aria-label="Upload sketch"
            />
          </div>
        </CardContent>
      </Card>

      {error && (
        <Alert variant="destructive">
          <AlertTriangle className="h-4 w-4 mr-2" />
          <AlertDescription>{error}</AlertDescription>
        </Alert>
      )}

      {isProcessing ? (
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <Loader2 className="h-4 w-4 animate-spin text-primary" />
            <p className="text-sm font-medium">
              {progress < 30
                ? "Analyzing sketch..."
                : progress < 60
                  ? "Generating realistic image..."
                  : "Creating 3D model..."}
            </p>
          </div>
          <div className="h-2 bg-muted rounded-full overflow-hidden relative">
            <div
              className="h-full bg-primary rounded-full transition-all duration-300 relative"
              style={{ width: `${progress}%` }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-primary/50 to-primary"></div>
              <div className="absolute top-0 right-0 bottom-0 w-4 bg-primary-foreground/20 animate-[pulse_1.5s_infinite]"></div>
            </div>
          </div>
        </div>
      ) : (
        <Button
          className="w-full relative overflow-hidden group"
          size="lg"
          disabled={!file || isProcessing}
          onClick={processSketch}
        >
          <span className="relative z-10 flex items-center">
            <ImageIcon className="mr-2 h-4 w-4" />
            {t("upload.process")}
          </span>
          <span className="absolute inset-0 bg-primary-foreground/10 translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-300"></span>
        </Button>
      )}

      <div className="text-sm text-muted-foreground bg-muted p-3 rounded-lg border border-border">
        <p>
          <span className="font-medium">{t("upload.privacy")}</span>
        </p>
      </div>
    </div>
  )
}
