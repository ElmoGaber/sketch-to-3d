"use client"

import { useState } from "react"
import Image from "next/image"
import { useLanguage } from "@/contexts/language-context"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Facebook, Linkedin, Github, Mail, Code, Palette, Users, Zap } from "lucide-react"

interface TeamMember {
  id: number
  name: string
  role: string
  bio: string
  image: string
  skills: string[]
  social: {
    facebook?: string
    linkedin?: string
    github?: string
    email?: string
  }
}

export default function TeamPage() {
  const { t } = useLanguage()
  const [activeFilter, setActiveFilter] = useState("all")

  // Team members data for Codan Web
  const teamMembers: TeamMember[] = [
    {
      id: 1,
      name: "Ahmed Hassan",
      role: "Founder & Lead Developer",
      bio: "Full-stack developer with 8+ years of experience in web development and AI integration. Passionate about creating innovative digital solutions.",
      image: "/placeholder.svg?height=300&width=300&text=Ahmed+Hassan",
      skills: ["React", "Node.js", "Python", "AI/ML", "DevOps"],
      social: {
        linkedin: "#",
        github: "#",
        email: "ahmed@codanweb.com",
      },
    },
    {
      id: 2,
      name: "Sara Mohamed",
      role: "UI/UX Designer",
      bio: "Creative designer specializing in user experience and modern web design. Expert in creating beautiful, functional interfaces.",
      image: "/placeholder.svg?height=300&width=300&text=Sara+Mohamed",
      skills: ["Figma", "Adobe XD", "Sketch", "Prototyping", "User Research"],
      social: {
        linkedin: "#",
        email: "sara@codanweb.com",
      },
    },
    {
      id: 3,
      name: "Omar Ali",
      role: "Frontend Developer",
      bio: "Frontend specialist with expertise in modern JavaScript frameworks and responsive design. Focused on performance and user experience.",
      image: "/placeholder.svg?height=300&width=300&text=Omar+Ali",
      skills: ["React", "Vue.js", "TypeScript", "CSS3", "Animation"],
      social: {
        github: "#",
        linkedin: "#",
        email: "omar@codanweb.com",
      },
    },
    {
      id: 4,
      name: "Fatima Nour",
      role: "Backend Developer",
      bio: "Backend engineer with strong experience in server-side technologies and database management. Expert in API development and cloud services.",
      image: "/placeholder.svg?height=300&width=300&text=Fatima+Nour",
      skills: ["Node.js", "Python", "MongoDB", "PostgreSQL", "AWS"],
      social: {
        github: "#",
        linkedin: "#",
        email: "fatima@codanweb.com",
      },
    },
    {
      id: 5,
      name: "Mahmoud Tarek",
      role: "Digital Marketing Specialist",
      bio: "Digital marketing expert specializing in SEO, social media marketing, and online brand building. Helps clients achieve digital success.",
      image: "/placeholder.svg?height=300&width=300&text=Mahmoud+Tarek",
      skills: ["SEO", "Google Ads", "Social Media", "Analytics", "Content Marketing"],
      social: {
        facebook: "#",
        linkedin: "#",
        email: "mahmoud@codanweb.com",
      },
    },
    {
      id: 6,
      name: "Nada Khaled",
      role: "Project Manager",
      bio: "Experienced project manager ensuring smooth project delivery and client satisfaction. Expert in agile methodologies and team coordination.",
      image: "/placeholder.svg?height=300&width=300&text=Nada+Khaled",
      skills: ["Project Management", "Agile", "Scrum", "Client Relations", "Quality Assurance"],
      social: {
        linkedin: "#",
        email: "nada@codanweb.com",
      },
    },
  ]

  const roles = ["all", "Developer", "Designer", "Marketing", "Management"]

  const filteredMembers =
    activeFilter === "all"
      ? teamMembers
      : teamMembers.filter((member) => member.role.toLowerCase().includes(activeFilter.toLowerCase()))

  const stats = [
    { icon: <Users className="h-8 w-8" />, value: "50+", label: "Happy Clients" },
    { icon: <Code className="h-8 w-8" />, value: "100+", label: "Projects Completed" },
    { icon: <Zap className="h-8 w-8" />, value: "5+", label: "Years Experience" },
    { icon: <Palette className="h-8 w-8" />, value: "24/7", label: "Support Available" },
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-50 via-indigo-50 to-purple-50 dark:from-blue-900/20 dark:via-indigo-900/20 dark:to-purple-900/20 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-[10%] left-[5%] w-64 h-64 bg-blue-400/10 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
          <div
            className="absolute top-[20%] right-[10%] w-72 h-72 bg-purple-400/10 rounded-full mix-blend-multiply filter blur-3xl animate-blob"
            style={{ animationDelay: "2s" }}
          ></div>
          <div
            className="absolute bottom-[10%] left-[35%] w-80 h-80 bg-indigo-400/10 rounded-full mix-blend-multiply filter blur-3xl animate-blob"
            style={{ animationDelay: "4s" }}
          ></div>
        </div>

        <div className="relative max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            <span className="gradient-text">{t("team.title")}</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-12">{t("team.subtitle")}</p>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center p-4 bg-primary/10 rounded-full mb-4 text-primary">
                  {stat.icon}
                </div>
                <div className="text-3xl font-bold mb-2">{stat.value}</div>
                <div className="text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Members Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-background">
        <div className="max-w-7xl mx-auto">
          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {roles.map((role) => (
              <Button
                key={role}
                variant={activeFilter === role ? "default" : "outline"}
                onClick={() => setActiveFilter(role)}
                className="capitalize"
              >
                {role === "all" ? "All Team" : role}
              </Button>
            ))}
          </div>

          {/* Team Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredMembers.map((member) => (
              <Card key={member.id} className="overflow-hidden group hover:shadow-xl transition-all duration-300">
                <div className="relative h-64 bg-gradient-to-r from-blue-500 to-indigo-600 flex items-center justify-center overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-600/30 to-indigo-600/30 group-hover:from-blue-600/50 group-hover:to-indigo-600/50 transition-all duration-500"></div>

                  {/* Animated background elements */}
                  <div className="absolute inset-0 opacity-20">
                    <div
                      className="absolute top-1/4 left-1/4 w-16 h-16 bg-white/20 rounded-full animate-ping"
                      style={{ animationDuration: "3s" }}
                    ></div>
                    <div
                      className="absolute bottom-1/4 right-1/4 w-12 h-12 bg-white/20 rounded-full animate-ping"
                      style={{ animationDuration: "4s", animationDelay: "1s" }}
                    ></div>
                  </div>

                  <div className="relative z-10 transform transition-transform duration-500 group-hover:scale-110">
                    <div className="h-40 w-40 rounded-full overflow-hidden border-4 border-white shadow-lg">
                      <Image
                        src={member.image || "/placeholder.svg"}
                        alt={member.name}
                        width={160}
                        height={160}
                        className="h-full w-full object-cover"
                      />
                    </div>
                  </div>
                </div>

                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-2">{member.name}</h3>
                  <p className="text-primary font-medium mb-4">{member.role}</p>
                  <p className="text-muted-foreground mb-6 text-sm">{member.bio}</p>

                  {/* Skills */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {member.skills.map((skill) => (
                      <Badge key={skill} variant="secondary" className="text-xs">
                        {skill}
                      </Badge>
                    ))}
                  </div>

                  {/* Social Links */}
                  <div className="flex justify-center space-x-4">
                    {member.social.facebook && (
                      <a
                        href={member.social.facebook}
                        className="text-muted-foreground hover:text-primary transition-colors transform hover:scale-110 transition-transform duration-300"
                      >
                        <Facebook className="h-5 w-5" />
                      </a>
                    )}
                    {member.social.linkedin && (
                      <a
                        href={member.social.linkedin}
                        className="text-muted-foreground hover:text-primary transition-colors transform hover:scale-110 transition-transform duration-300"
                      >
                        <Linkedin className="h-5 w-5" />
                      </a>
                    )}
                    {member.social.github && (
                      <a
                        href={member.social.github}
                        className="text-muted-foreground hover:text-primary transition-colors transform hover:scale-110 transition-transform duration-300"
                      >
                        <Github className="h-5 w-5" />
                      </a>
                    )}
                    {member.social.email && (
                      <a
                        href={`mailto:${member.social.email}`}
                        className="text-muted-foreground hover:text-primary transition-colors transform hover:scale-110 transition-transform duration-300"
                      >
                        <Mail className="h-5 w-5" />
                      </a>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Work With Us?</h2>
          <p className="text-xl text-muted-foreground mb-8">
            Let's discuss your project and see how our team can help you achieve your digital goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <a href="#contact">Start Your Project</a>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <a href="mailto:codan.web1@gmail.com">Send Us an Email</a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
