"use client"

import { useState } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { PencilRuler, Upload, Settings, Download, HelpCircle } from "lucide-react"

export default function TutorialSection() {
  const [activeTab, setActiveTab] = useState("basics")

  const tutorials = {
    basics: [
      {
        title: "Creating Effective Sketches",
        icon: <PencilRuler className="h-5 w-5" />,
        description:
          "Learn how to create sketches that work best with our AI system. Clear lines and good contrast will yield the best results.",
      },
      {
        title: "Uploading Your Sketch",
        icon: <Upload className="h-5 w-5" />,
        description:
          "Drag and drop your sketch or use the file browser. We accept PNG, JPG, and JPEG formats up to 5MB.",
      },
      {
        title: "Adjusting Settings",
        icon: <Settings className="h-5 w-5" />,
        description: "Fine-tune the AI processing parameters to get the exact style and detail level you want.",
      },
      {
        title: "Downloading Results",
        icon: <Download className="h-5 w-5" />,
        description: "Save your generated images and 3D models in various formats for use in other applications.",
      },
    ],
    advanced: [
      {
        title: "Understanding the AI Process",
        icon: <HelpCircle className="h-5 w-5" />,
        description:
          "Dive deeper into how our AI transforms sketches into realistic images using deep learning models.",
      },
      {
        title: "3D Model Manipulation",
        icon: <HelpCircle className="h-5 w-5" />,
        description: "Learn advanced techniques for interacting with and modifying your 3D models.",
      },
      {
        title: "Optimizing Your Sketches",
        icon: <HelpCircle className="h-5 w-5" />,
        description: "Advanced tips for preparing sketches that will generate the most detailed and accurate results.",
      },
      {
        title: "Batch Processing",
        icon: <HelpCircle className="h-5 w-5" />,
        description: "Process multiple sketches at once to create collections of related images and models.",
      },
    ],
    tips: [
      {
        title: "Use Clear Outlines",
        icon: <HelpCircle className="h-5 w-5" />,
        description: "Sketches with clear, defined outlines work best with our AI system.",
      },
      {
        title: "Add Shading Hints",
        icon: <HelpCircle className="h-5 w-5" />,
        description: "Simple shading in your sketch helps the AI understand depth and form.",
      },
      {
        title: "Include Details",
        icon: <HelpCircle className="h-5 w-5" />,
        description: "The more details in your sketch, the more realistic the final image and 3D model will be.",
      },
      {
        title: "Experiment with Styles",
        icon: <HelpCircle className="h-5 w-5" />,
        description: "Try different sketch styles to see how they affect the AI-generated results.",
      },
    ],
  }

  return (
    <section id="tutorial" className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">How to Use Our Platform</h2>

        <Tabs defaultValue="basics" value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-8">
            <TabsTrigger value="basics">Basics</TabsTrigger>
            <TabsTrigger value="advanced">Advanced</TabsTrigger>
            <TabsTrigger value="tips">Tips & Tricks</TabsTrigger>
          </TabsList>

          {Object.entries(tutorials).map(([key, items]) => (
            <TabsContent key={key} value={key} className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {items.map((item, index) => (
                  <Card key={index}>
                    <CardHeader className="flex flex-row items-center gap-4 pb-2">
                      <div className="p-2 bg-primary/10 rounded-full text-primary">{item.icon}</div>
                      <div>
                        <CardTitle className="text-xl">{item.title}</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-base">{item.description}</CardDescription>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  )
}
