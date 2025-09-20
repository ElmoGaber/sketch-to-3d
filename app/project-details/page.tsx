"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { useLanguage } from "@/contexts/language-context"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, Database, Cpu, Brain, Lightbulb, Layers, Network } from "lucide-react"

export default function ProjectDetailsPage() {
  const { t } = useLanguage()
  const [activeTab, setActiveTab] = useState("datasets")

  // Datasets information
  const datasets = [
    {
      id: 1,
      name: "CUHK Face Sketch Database (CUFS)",
      description:
        "This dataset includes images of real faces and their corresponding sketches, which helps train models to convert sketches into realistic images.",
      image: "/images/datasets/cufs.jpg",
      samples: 1800,
      year: 2011,
      categories: ["Faces", "Portraits"],
      source: "Chinese University of Hong Kong",
    },
    {
      id: 2,
      name: "TU-Berlin Sketch Dataset",
      description:
        "This dataset contains 20,000 hand-drawn sketches of 250 different categories and is used to train models to understand and convert sketches into colored images.",
      image: "/images/datasets/tu-berlin.jpg",
      samples: 20000,
      year: 2012,
      categories: ["Objects", "Animals", "Vehicles", "Buildings"],
      source: "Technical University of Berlin",
    },
    {
      id: 3,
      name: "Sketchy Database",
      description:
        "This dataset includes 75,000 sketches associated with 12,500 images and is used to train models to convert sketches into realistic images.",
      image: "/images/datasets/sketchy.jpg",
      samples: 75000,
      year: 2016,
      categories: ["Objects", "Scenes", "Characters"],
      source: "Carnegie Mellon University",
    },
    {
      id: 4,
      name: "QuickDraw Dataset",
      description:
        "A collection of 50 million drawings across 345 categories, contributed by players of the game 'Quick, Draw!'. Used for sketch recognition and generation.",
      image: "/images/datasets/quickdraw.jpg",
      samples: 50000000,
      year: 2017,
      categories: ["Doodles", "Simple Sketches", "Objects"],
      source: "Google Creative Lab",
    },
  ]

  // Models information
  const models = [
    {
      id: 1,
      name: "pix2pix",
      description:
        "A model based on generative adversarial networks (GANs) to transform images from one type to another, such as converting sketches to photorealistic images.",
      image: "/images/models/pix2pix.jpg",
      type: "GAN",
      year: 2016,
      features: ["Image-to-image translation", "Paired data training", "Conditional GAN"],
      creators: ["Phillip Isola", "Jun-Yan Zhu", "Tinghui Zhou", "Alexei A. Efros"],
    },
    {
      id: 2,
      name: "CycleGAN",
      description:
        "A model used to transform images between different domains without the need for matching pairs of images in the dataset, making it suitable for converting sketches to color images.",
      image: "/images/models/cyclegan.jpg",
      type: "GAN",
      year: 2017,
      features: ["Unpaired image translation", "Cycle consistency loss", "Domain adaptation"],
      creators: ["Jun-Yan Zhu", "Taesung Park", "Phillip Isola", "Alexei A. Efros"],
    },
    {
      id: 3,
      name: "Deep Image Analogy",
      description:
        "A model that uses deep neural networks to find similarities between images, helping to convert sketches to photorealistic images.",
      image: "/images/models/deep-image-analogy.jpg",
      type: "CNN",
      year: 2017,
      features: ["Visual attribute transfer", "Semantic correspondence", "Hierarchical matching"],
      creators: ["Jing Liao", "Yuan Yao", "Lu Yuan", "Gang Hua", "Sing Bing Kang"],
    },
    {
      id: 4,
      name: "SketchyGAN",
      description:
        "A generative adversarial network specifically designed for sketch-to-image synthesis with multi-scale refinement and attention mechanisms.",
      image: "/images/models/sketchygan.jpg",
      type: "GAN",
      year: 2018,
      features: ["Multi-scale refinement", "Attention mechanism", "Class conditioning"],
      creators: ["Wengling Chen", "James Hays"],
    },
  ]

  // Workflow steps
  const workflowSteps = [
    {
      id: 1,
      title: "Data Collection & Preprocessing",
      description:
        "Gathering sketch-image pairs from various datasets and preprocessing them to ensure consistent format, size, and quality.",
      icon: <Database className="h-8 w-8 text-primary" />,
    },
    {
      id: 2,
      title: "Model Training",
      description:
        "Training the selected models on the preprocessed datasets, optimizing parameters to achieve the best sketch-to-image conversion results.",
      icon: <Cpu className="h-8 w-8 text-primary" />,
    },
    {
      id: 3,
      title: "Image Generation",
      description: "Using the trained models to generate realistic images from user-provided sketches in real-time.",
      icon: <Lightbulb className="h-8 w-8 text-primary" />,
    },
    {
      id: 4,
      title: "3D Model Creation",
      description:
        "Converting the generated 2D images into 3D models using depth estimation and 3D reconstruction techniques.",
      icon: <Layers className="h-8 w-8 text-primary" />,
    },
    {
      id: 5,
      title: "Refinement & Optimization",
      description:
        "Refining the 3D models to ensure accuracy, detail, and performance optimization for interactive viewing.",
      icon: <Network className="h-8 w-8 text-primary" />,
    },
  ]

  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto mb-16">
        <div className="flex items-center mb-8">
          <Link
            href="/"
            className="inline-flex items-center text-sm font-medium text-muted-foreground hover:text-primary transition-colors mr-4"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Link>
          <h1 className="text-3xl md:text-4xl font-bold">Project Details</h1>
        </div>

        <div className="relative rounded-xl overflow-hidden h-64 md:h-80 mb-8">
          <Image src="/images/project-details-hero.jpg" alt="Project Details" fill className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent flex items-center">
            <div className="p-8 max-w-2xl">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">The Science Behind Sketch to 3D</h2>
              <p className="text-white/90">
                Explore the datasets, models, and technologies that power our sketch-to-3D conversion platform.
              </p>
            </div>
          </div>
        </div>

        <Tabs defaultValue="datasets" value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-8">
            <TabsTrigger value="datasets">Datasets</TabsTrigger>
            <TabsTrigger value="models">Models</TabsTrigger>
            <TabsTrigger value="workflow">Workflow</TabsTrigger>
          </TabsList>

          {/* Datasets Tab */}
          <TabsContent value="datasets" className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {datasets.map((dataset) => (
                <Card key={dataset.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="relative h-48">
                    <Image src={dataset.image || "/placeholder.svg"} alt={dataset.name} fill className="object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                      <div className="p-4">
                        <h3 className="text-xl font-bold text-white">{dataset.name}</h3>
                      </div>
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <div className="flex flex-wrap gap-2 mb-4">
                      {dataset.categories.map((category, index) => (
                        <Badge key={index} variant="secondary">
                          {category}
                        </Badge>
                      ))}
                    </div>
                    <p className="text-muted-foreground mb-4">{dataset.description}</p>
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <p className="font-medium">Samples</p>
                        <p className="text-muted-foreground">{dataset.samples.toLocaleString()}</p>
                      </div>
                      <div>
                        <p className="font-medium">Year</p>
                        <p className="text-muted-foreground">{dataset.year}</p>
                      </div>
                      <div className="col-span-2">
                        <p className="font-medium">Source</p>
                        <p className="text-muted-foreground">{dataset.source}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Models Tab */}
          <TabsContent value="models" className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {models.map((model) => (
                <Card key={model.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="relative h-48">
                    <Image src={model.image || "/placeholder.svg"} alt={model.name} fill className="object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                      <div className="p-4">
                        <h3 className="text-xl font-bold text-white">{model.name}</h3>
                      </div>
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <div className="flex items-center gap-2 mb-4">
                      <Badge>{model.type}</Badge>
                      <span className="text-sm text-muted-foreground">{model.year}</span>
                    </div>
                    <p className="text-muted-foreground mb-4">{model.description}</p>
                    <div className="mb-4">
                      <p className="font-medium mb-2">Key Features</p>
                      <ul className="list-disc pl-5 text-sm text-muted-foreground">
                        {model.features.map((feature, index) => (
                          <li key={index}>{feature}</li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <p className="font-medium mb-1">Creators</p>
                      <p className="text-sm text-muted-foreground">{model.creators.join(", ")}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Workflow Tab */}
          <TabsContent value="workflow" className="mt-0">
            <Card>
              <CardHeader>
                <CardTitle>Our Sketch-to-3D Workflow</CardTitle>
                <CardDescription>
                  The process of converting a simple sketch into a detailed 3D model involves several sophisticated
                  steps
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="relative">
                  {/* Vertical line connecting steps */}
                  <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-muted"></div>

                  <div className="space-y-8">
                    {workflowSteps.map((step, index) => (
                      <div key={step.id} className="relative pl-12">
                        {/* Step number circle */}
                        <div className="absolute left-0 top-0 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                          <span className="text-primary font-medium">{index + 1}</span>
                        </div>

                        <div className="flex items-start">
                          <div className="mr-4 p-2 bg-primary/10 rounded-lg">{step.icon}</div>
                          <div>
                            <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                            <p className="text-muted-foreground">{step.description}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="mt-8">
              <Card>
                <CardHeader>
                  <CardTitle>Technical Architecture</CardTitle>
                  <CardDescription>
                    Our system architecture combines multiple models and processing pipelines
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="relative h-80 rounded-lg overflow-hidden">
                    <Image
                      src="/images/technical-architecture.jpg"
                      alt="Technical Architecture"
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="bg-background/80 backdrop-blur-sm p-6 rounded-lg max-w-md text-center">
                        <Brain className="h-12 w-12 text-primary mx-auto mb-4" />
                        <h3 className="text-xl font-bold mb-2">Neural Network Pipeline</h3>
                        <p className="text-muted-foreground">
                          Our system uses a sophisticated pipeline of neural networks, each specialized for different
                          aspects of the sketch-to-3D conversion process.
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>

      {/* Call to Action */}
      <div className="max-w-7xl mx-auto mt-16">
        <div className="bg-muted rounded-xl p-8 md:p-12">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Ready to Try It Yourself?</h2>
            <p className="text-muted-foreground mb-8">
              Experience the power of our sketch-to-3D technology firsthand. Upload your sketch and see it transform
              into a realistic 3D model.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link href="/#try-it">Try It Now</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/team">Meet Our Team</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
