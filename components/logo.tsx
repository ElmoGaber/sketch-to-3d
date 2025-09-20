"use client"

import { cn } from "@/lib/utils"
import { motion } from "framer-motion"
import { CuboidIcon as Cube3d, ScaleIcon as Scales } from "lucide-react"

interface LogoProps {
  className?: string
  size?: "sm" | "md" | "lg"
  animated?: boolean
}

export default function Logo({ className, size = "md", animated = true }: LogoProps) {
  const sizes = {
    sm: { width: 32, height: 32, fontSize: "text-xs", titleSize: "text-base" },
    md: { width: 48, height: 48, fontSize: "text-sm", titleSize: "text-xl" },
    lg: { width: 64, height: 64, fontSize: "text-base", titleSize: "text-2xl" },
  }

  const logoWidth = sizes[size].width
  const logoHeight = sizes[size].height
  const fontSize = sizes[size].fontSize
  const titleSize = sizes[size].titleSize

  return (
    <div className={cn("flex items-center gap-2", className)}>
      <div
        className="relative rounded-full overflow-hidden bg-gradient-to-br from-purple-600 to-blue-600 flex items-center justify-center"
        style={{ width: logoWidth, height: logoHeight }}
      >
        {animated ? (
          <>
            <motion.div
              className="absolute inset-0 bg-gradient-to-tr from-purple-500/30 to-blue-600/30"
              initial={{ opacity: 0.5 }}
              animate={{
                opacity: [0.5, 0.8, 0.5],
                scale: [1, 1.05, 1],
              }}
              transition={{
                duration: 3,
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "loop",
              }}
            />
            <motion.div
              className="absolute inset-0 flex items-center justify-center"
              animate={{
                rotate: [0, 360],
              }}
              transition={{
                duration: 20,
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "loop",
                ease: "linear",
              }}
            >
              <div className="absolute top-0 left-0 w-full h-full">
                <div className="absolute top-0 left-1/2 w-1 h-1 rounded-full bg-white/40 transform -translate-x-1/2" />
                <div className="absolute top-1/4 right-0 w-1 h-1 rounded-full bg-white/40" />
                <div className="absolute bottom-0 left-1/2 w-1 h-1 rounded-full bg-white/40 transform -translate-x-1/2" />
                <div className="absolute top-1/4 left-0 w-1 h-1 rounded-full bg-white/40" />
              </div>
            </motion.div>
          </>
        ) : null}

        <div className="relative z-10 flex items-center justify-center">
          <motion.div
            initial={{ opacity: 1 }}
            animate={
              animated
                ? {
                    scale: [1, 1.05, 1],
                  }
                : {}
            }
            transition={{
              duration: 2,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "loop",
            }}
          >
            <Cube3d className="text-white" style={{ width: logoWidth * 0.5, height: logoHeight * 0.5 }} />
          </motion.div>
          <motion.div
            className="absolute"
            initial={{ opacity: 1 }}
            animate={
              animated
                ? {
                    scale: [1, 0.95, 1],
                  }
                : {}
            }
            transition={{
              duration: 2,
              delay: 0.5,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "loop",
            }}
          >
            <Scales className="text-white/90" style={{ width: logoWidth * 0.4, height: logoHeight * 0.4 }} />
          </motion.div>
        </div>

        {/* Decorative elements */}
        <div className="absolute inset-0 bg-gradient-to-br from-transparent to-black/20 rounded-full" />
        <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-white/20 rounded-full blur-sm" />
      </div>

      <div className="flex flex-col">
        <span className={cn("font-bold leading-tight", titleSize)}>
          <span className="text-gray-900 dark:text-white">Judicial</span>
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-blue-600">3D</span>
        </span>
        <span className={cn("text-muted-foreground leading-tight", fontSize)}>Sketch to Reality</span>
      </div>
    </div>
  )
}
