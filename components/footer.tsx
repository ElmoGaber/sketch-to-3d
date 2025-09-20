"use client"

import Link from "next/link"
import { useLanguage } from "@/contexts/language-context"
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from "lucide-react"

export default function Footer() {
  const { t } = useLanguage()

  return (
    <footer className="bg-muted py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="relative rounded-lg overflow-hidden bg-gradient-to-br from-blue-600 to-indigo-700 flex items-center justify-center w-10 h-10 shadow-lg">
                <div className="text-white font-bold text-lg">C</div>
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-lg leading-tight">
                  <span className="text-foreground">Codan</span>
                  <span className="text-blue-600">Web</span>
                </span>
                <span className="text-muted-foreground text-xs leading-tight">Digital Solutions</span>
              </div>
            </div>
            <p className="text-muted-foreground mb-4">{t("footer.description")}</p>
            <div className="flex space-x-4">
              <a href="#" aria-label="Facebook" className="text-muted-foreground hover:text-primary">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" aria-label="Twitter" className="text-muted-foreground hover:text-primary">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" aria-label="Instagram" className="text-muted-foreground hover:text-primary">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" aria-label="LinkedIn" className="text-muted-foreground hover:text-primary">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">{t("footer.quickLinks")}</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-muted-foreground hover:text-primary">
                  {t("nav.home")}
                </Link>
              </li>
              <li>
                <Link href="#services" className="text-muted-foreground hover:text-primary">
                  {t("nav.services")}
                </Link>
              </li>
              <li>
                <Link href="#portfolio" className="text-muted-foreground hover:text-primary">
                  {t("nav.portfolio")}
                </Link>
              </li>
              <li>
                <Link href="/team" className="text-muted-foreground hover:text-primary">
                  {t("nav.team")}
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">{t("footer.services")}</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary">
                  {t("services.webDesign")}
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary">
                  {t("services.webDev")}
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary">
                  {t("services.ecommerce")}
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary">
                  {t("services.seo")}
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">{t("footer.contact")}</h3>
            <ul className="space-y-2">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 mr-2 text-muted-foreground mt-0.5" />
                <span className="text-muted-foreground">Mansoura, Egypt</span>
              </li>
              <li className="flex items-start">
                <Phone className="h-5 w-5 mr-2 text-muted-foreground mt-0.5" />
                <span className="text-muted-foreground">+20 10 60477678</span>
              </li>
              <li className="flex items-start">
                <Mail className="h-5 w-5 mr-2 text-muted-foreground mt-0.5" />
                <span className="text-muted-foreground">codan.web1@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-border pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-muted-foreground mb-4 md:mb-0">{t("footer.rights")}</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
