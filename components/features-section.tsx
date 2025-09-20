import { Zap, Shield, Smartphone, Eye, RotateCw, Download } from "lucide-react"

export default function FeaturesSection() {
  const features = [
    {
      icon: <Zap className="h-6 w-6" />,
      title: "Fast Processing",
      description: "Advanced AI models optimized for speed with cloud-based GPUs.",
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Secure & Private",
      description: "Your sketches and generated content are processed securely.",
    },
    {
      icon: <Smartphone className="h-6 w-6" />,
      title: "Responsive Design",
      description: "Works seamlessly on desktop, tablet, and mobile devices.",
    },
    {
      icon: <Eye className="h-6 w-6" />,
      title: "High Quality Results",
      description: "Photorealistic images and detailed 3D models with fine details.",
    },
    {
      icon: <RotateCw className="h-6 w-6" />,
      title: "Interactive 3D",
      description: "Rotate, zoom, and inspect your 3D models from any angle.",
    },
    {
      icon: <Download className="h-6 w-6" />,
      title: "Easy Export",
      description: "Download your images and 3D models in various formats.",
    },
  ]

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">Key Features</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="inline-flex items-center justify-center p-2 bg-primary/10 rounded-full mb-4 text-primary">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">{feature.title}</h3>
              <p className="text-gray-600 dark:text-gray-400">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
