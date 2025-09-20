"use client"

import { useState, useRef, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useLanguage } from "@/contexts/language-context"
import {
  Code,
  Palette,
  ShoppingCart,
  Search,
  Settings,
  Users,
  ArrowRight,
  ExternalLink,
  Mail,
  Phone,
  MapPin,
  CheckCircle,
} from "lucide-react"

export default function HomePage() {
  const { t } = useLanguage()
  const [isVisible, setIsVisible] = useState(false)
  const heroRef = useRef<HTMLElement>(null)
  const servicesRef = useRef<HTMLElement>(null)
  const portfolioRef = useRef<HTMLElement>(null)
  const teamRef = useRef<HTMLElement>(null)
  const contactRef = useRef<HTMLElement>(null)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const services = [
    {
      icon: Palette,
      title: t("services.webDesign"),
      description: t("services.webDesignDesc"),
      color: "bg-blue-500",
    },
    {
      icon: Code,
      title: t("services.webDev"),
      description: t("services.webDevDesc"),
      color: "bg-green-500",
    },
    {
      icon: ShoppingCart,
      title: t("services.ecommerce"),
      description: t("services.ecommerceDesc"),
      color: "bg-purple-500",
    },
    {
      icon: Search,
      title: t("services.seo"),
      description: t("services.seoDesc"),
      color: "bg-orange-500",
    },
    {
      icon: Settings,
      title: t("services.maintenance"),
      description: t("services.maintenanceDesc"),
      color: "bg-red-500",
    },
    {
      icon: Users,
      title: t("services.consulting"),
      description: t("services.consultingDesc"),
      color: "bg-indigo-500",
    },
  ]

  const portfolioProjects = [
    {
      title: "Modern Fashion E-commerce",
      description: "Complete online fashion store with AI-powered recommendations",
      image: "/modern-fashion-ecommerce.png",
      tags: ["E-commerce", "React", "AI", "Payment Integration"],
      demoUrl: "#",
      codeUrl: "#",
    },
    {
      title: "Restaurant Management System",
      description: "Full-stack restaurant management with order tracking and analytics",
      image: "/restaurant-dashboard-orders.png",
      tags: ["Dashboard", "Node.js", "Real-time", "Analytics"],
      demoUrl: "#",
      codeUrl: "#",
    },
    {
      title: "Corporate Business Website",
      description: "Professional corporate website with CMS and SEO optimization",
      image: "/professional-corporate-website.png",
      tags: ["Corporate", "CMS", "SEO", "Responsive"],
      demoUrl: "#",
      codeUrl: "#",
    },
    {
      title: "Real Estate Platform",
      description: "Property listing platform with advanced search and filters",
      image: "/real-estate-listings.png",
      tags: ["Real Estate", "Search", "Maps", "Filters"],
      demoUrl: "#",
      codeUrl: "#",
    },
    {
      title: "Educational Learning Platform",
      description: "Online learning platform with video streaming and progress tracking",
      image: "/educational-learning-platform.png",
      tags: ["Education", "Video", "Progress", "Interactive"],
      demoUrl: "#",
      codeUrl: "#",
    },
    {
      title: "Healthcare Management System",
      description: "Patient management system with appointment scheduling",
      image: "/healthcare-patient-management-system.png",
      tags: ["Healthcare", "Scheduling", "Database", "Security"],
      demoUrl: "#",
      codeUrl: "#",
    },
  ]

  const teamMembers = [
    {
      name: "Momen Tarek",
      role: "Frontend & UI/UX Engineer",
      image: "/placeholder.svg?height=300&width=300&text=Momen+Tarek",
      skills: ["React", "UI/UX Design", "TypeScript", "Figma"],
      bio: "Frontend specialist with expertise in modern UI/UX design and user experience optimization.",
    },
    {
      name: "Ezzat Yehia",
      role: "Backend Engineer",
      image: "/placeholder.svg?height=300&width=300&text=Ezzat+Yehia",
      skills: ["Node.js", "Database Design", "API Architecture", "Security"],
      bio: "Backend engineer focused on building scalable and secure server-side applications.",
    },
    {
      name: "Moaz Awad",
      role: "API Developer & DevOps Engineer",
      image: "/placeholder.svg?height=300&width=300&text=Moaz+Awad",
      skills: ["API Development", "DevOps", "Cloud Services", "CI/CD"],
      bio: "Full-stack engineer specializing in API development and DevOps infrastructure management.",
    },
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section
        ref={heroRef}
        className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900" />
        <div className="absolute inset-0 bg-grid-pattern opacity-5" />

        <div
          className={`relative z-10 text-center max-w-5xl mx-auto transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="mb-8">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-200 text-sm font-medium mb-6">
              <CheckCircle className="w-4 h-4 mr-2" />
              AI-Powered Web Solutions
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent">
              {t("hero.title")}
            </h1>
            <p className="text-xl sm:text-2xl text-muted-foreground mb-8 max-w-4xl mx-auto leading-relaxed">
              {t("hero.subtitle")}
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button
              size="lg"
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 text-lg"
            >
              {t("hero.getStarted")}
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button size="lg" variant="outline" className="px-8 py-3 text-lg bg-transparent">
              {t("hero.viewPortfolio")}
            </Button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-3xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">50+</div>
              <div className="text-muted-foreground">Projects Completed</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-600 mb-2">100%</div>
              <div className="text-muted-foreground">Client Satisfaction</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600 mb-2">24/7</div>
              <div className="text-muted-foreground">Support Available</div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" ref={servicesRef} className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">{t("services.title")}</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We offer comprehensive web solutions tailored to your business needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-2">
                <CardContent className="p-6">
                  <div
                    className={`w-12 h-12 rounded-lg ${service.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <service.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                  <p className="text-muted-foreground">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" ref={portfolioRef} className="py-16 px-4 sm:px-6 lg:px-8 bg-muted">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">{t("portfolio.title")}</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">{t("portfolio.subtitle")}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {portfolioProjects.map((project, index) => (
              <Card key={index} className="group overflow-hidden hover:shadow-xl transition-all duration-300">
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-4 left-4 right-4">
                      <div className="flex gap-2">
                        <Button size="sm" variant="secondary" asChild>
                          <Link href={project.demoUrl}>
                            <ExternalLink className="w-4 h-4 mr-1" />
                            {t("portfolio.liveDemo")}
                          </Link>
                        </Button>
                        <Button size="sm" variant="secondary" asChild>
                          <Link href={project.codeUrl}>{t("portfolio.viewProject")}</Link>
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                  <p className="text-muted-foreground mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, tagIndex) => (
                      <Badge key={tagIndex} variant="secondary" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" ref={teamRef} className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">{t("team.title")}</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">{t("team.subtitle")}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <Card key={index} className="text-center group hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6">
                  <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center shadow-lg">
                    <Users className="w-12 h-12 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold mb-1">{member.name}</h3>
                  <p className="text-blue-600 font-medium mb-3">{member.role}</p>
                  <p className="text-sm text-muted-foreground mb-4">{member.bio}</p>
                  <div className="flex flex-wrap gap-1 justify-center">
                    {member.skills.map((skill, skillIndex) => (
                      <Badge key={skillIndex} variant="outline" className="text-xs">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" ref={contactRef} className="py-16 px-4 sm:px-6 lg:px-8 bg-muted">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">{t("contact.title")}</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">{t("contact.subtitle")}</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card>
              <CardContent className="p-8">
                <form className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                      {t("contact.name")}
                    </label>
                    <Input id="name" placeholder="Your name" />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      {t("contact.email")}
                    </label>
                    <Input id="email" type="email" placeholder="your@email.com" />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2">
                      {t("contact.message")}
                    </label>
                    <Textarea id="message" placeholder="Tell us about your project..." rows={5} />
                  </div>
                  <Button
                    type="submit"
                    className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                  >
                    {t("contact.send")}
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <div className="space-y-8">
              <Card>
                <CardContent className="p-8">
                  <h3 className="text-xl font-semibold mb-6">{t("contact.info")}</h3>
                  <div className="space-y-4">
                    <div className="flex items-center">
                      <MapPin className="w-5 h-5 text-blue-600 mr-3" />
                      <div>
                        <p className="font-medium">{t("contact.location")}</p>
                        <p className="text-muted-foreground">Mansoura, Egypt</p>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <Phone className="w-5 h-5 text-blue-600 mr-3" />
                      <div>
                        <p className="font-medium">{t("contact.phone")}</p>
                        <p className="text-muted-foreground">+20 10 60477678</p>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <Mail className="w-5 h-5 text-blue-600 mr-3" />
                      <div>
                        <p className="font-medium">{t("contact.email")}</p>
                        <p className="text-muted-foreground">codan.web1@gmail.com</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-8">
                  <h3 className="text-xl font-semibold mb-4">Why Choose Codan Web?</h3>
                  <ul className="space-y-3">
                    <li className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-600 mr-3" />
                      <span>AI-powered solutions</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-600 mr-3" />
                      <span>Competitive pricing</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-600 mr-3" />
                      <span>24/7 support</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-600 mr-3" />
                      <span>Fast delivery</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
