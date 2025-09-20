"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/contexts/language-context"
import { ChevronRight, Scale, Gavel, FileText } from "lucide-react"
import Logo from "./logo"

export default function HeroSection() {
  const { t } = useLanguage()

  // Animation variants
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  return (
    <section className="relative py-20 px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center text-center min-h-[90vh]">
      {/* Background with judicial theme */}
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-blue-50 to-indigo-50 dark:from-gray-900 dark:to-indigo-950">
        <div className="absolute inset-0 bg-[url('/placeholder.svg?height=100&width=100')] bg-repeat opacity-5"></div>
      </div>

      {/* Floating elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-[15%] left-[10%] w-16 h-16 md:w-24 md:h-24"
          animate={{
            y: [0, -15, 0],
            rotate: [0, 5, 0],
          }}
          transition={{
            duration: 6,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
          }}
        >
          <div className="w-full h-full flex items-center justify-center bg-primary/20 rounded-full p-4">
            <Gavel className="w-full h-full text-primary" />
          </div>
        </motion.div>

        <motion.div
          className="absolute top-[25%] right-[15%] w-20 h-20 md:w-32 md:h-32"
          animate={{
            y: [0, 20, 0],
            rotate: [0, -8, 0],
          }}
          transition={{
            duration: 7,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
            delay: 1,
          }}
        >
          <div className="w-full h-full flex items-center justify-center bg-primary/20 rounded-full p-4">
            <Scale className="w-full h-full text-primary" />
          </div>
        </motion.div>

        <motion.div
          className="absolute bottom-[20%] left-[20%] w-16 h-16 md:w-28 md:h-28"
          animate={{
            y: [0, 15, 0],
            rotate: [0, 10, 0],
          }}
          transition={{
            duration: 8,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
            delay: 2,
          }}
        >
          <div className="w-full h-full flex items-center justify-center bg-primary/20 rounded-full p-4">
            <FileText className="w-full h-full text-primary" />
          </div>
        </motion.div>
      </div>

      <motion.div
        className="relative z-10 max-w-5xl mx-auto"
        initial="hidden"
        animate="visible"
        variants={staggerContainer}
      >
        <motion.div className="mb-8 mx-auto" variants={fadeIn}>
          <Logo size="lg" />
        </motion.div>

        <motion.h1
          className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6"
          variants={fadeIn}
        >
          <span className="text-primary">{t("hero.title").split(" ").slice(0, 1).join(" ")}</span>{" "}
          {t("hero.title").split(" ").slice(1).join(" ")}
        </motion.h1>

        <motion.p className="text-xl text-gray-700 dark:text-gray-300 mb-8 max-w-3xl mx-auto" variants={fadeIn}>
          {t("hero.subtitle")}
        </motion.p>

        <motion.div className="flex flex-col sm:flex-row gap-4 justify-center" variants={fadeIn}>
          <Link href="#upload">
            <Button size="lg" className="px-6 py-6 text-lg group">
              {t("hero.tryButton")}
              <ChevronRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </Link>
          <Link href="#tutorial">
            <Button variant="outline" size="lg" className="px-6 py-6 text-lg">
              {t("hero.learnButton")}
            </Button>
          </Link>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{
          y: [0, 10, 0],
          opacity: [0.3, 1, 0.3],
        }}
        transition={{
          duration: 2,
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "loop",
        }}
      >
        <div className="w-8 h-12 rounded-full border-2 border-gray-400 dark:border-gray-600 flex justify-center items-start p-1">
          <motion.div
            className="w-1 h-2 bg-gray-400 dark:bg-gray-600 rounded-full"
            animate={{
              y: [0, 8, 0],
            }}
            transition={{
              duration: 2,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "loop",
            }}
          />
        </div>
      </motion.div>
    </section>
  )
}
