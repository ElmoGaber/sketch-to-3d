"use client"

import { motion } from "framer-motion"
import { Brush, Image, CuboidIcon as Cube } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"

export default function ProcessingSteps() {
  const { t } = useLanguage()

  const steps = [
    {
      icon: <Brush className="h-10 w-10 text-primary" />,
      title: t("how.step1.title"),
      description: t("how.step1.desc"),
    },
    {
      icon: <Image className="h-10 w-10 text-primary" />,
      title: t("how.step2.title"),
      description: t("how.step2.desc"),
    },
    {
      icon: <Cube className="h-10 w-10 text-primary" />,
      title: t("how.step3.title"),
      description: t("how.step3.desc"),
    },
  ]

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-950">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          {t("how.title")}
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              className="bg-white dark:bg-gray-900 rounded-lg shadow-md overflow-hidden relative"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="h-48 overflow-hidden relative">
                <div className="w-full h-full bg-gray-200 dark:bg-gray-800 flex items-center justify-center">
                  {index === 0 ? (
                    <img src="/images/upload-sketch.jpg" alt="Upload Sketch" className="w-full h-full object-cover" />
                  ) : index === 1 ? (
                    <img
                      src="/images/ai-processing.jpg"
                      alt="AI Image Generation"
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <img src="/images/3d-model.jpg" alt="3D Model Generation" className="w-full h-full object-cover" />
                  )}
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-4">
                  <div className="inline-flex items-center justify-center p-3 bg-primary rounded-full">{step.icon}</div>
                </div>
              </div>
              <div className="p-6 text-center">
                <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">{step.title}</h3>
                <p className="text-gray-600 dark:text-gray-400">{step.description}</p>
              </div>
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2 z-10">
                  <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M16 8L28 20L16 32"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-gray-300 dark:text-gray-700"
                    />
                  </svg>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
