"use client"

import { createContext, useContext, useState, type ReactNode } from "react"

type Language = "en" | "ar"

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => string
}

const translations = {
  en: {
    // Navigation
    "nav.home": "Home",
    "nav.services": "Services",
    "nav.portfolio": "Portfolio",
    "nav.team": "Team",
    "nav.contact": "Contact",
    "nav.about": "About",

    // Hero Section
    "hero.title": "Codan Web - Creative Digital Solutions",
    "hero.subtitle":
      "We are a team of creatives specializing in website design and development using the latest AI-powered technologies. We help companies and startups build a strong online presence and achieve digital success at the lowest price and highest quality.",
    "hero.getStarted": "Get Started",
    "hero.viewPortfolio": "View Portfolio",
    "hero.contactUs": "Contact Us",

    // Services
    "services.title": "Our Services",
    "services.webDesign": "Web Design",
    "services.webDesignDesc": "Modern, responsive designs that captivate your audience and drive conversions.",
    "services.webDev": "Web Development",
    "services.webDevDesc": "Full-stack development using cutting-edge technologies and AI integration.",
    "services.ecommerce": "E-commerce Solutions",
    "services.ecommerceDesc": "Complete online store solutions with payment integration and inventory management.",
    "services.seo": "SEO Optimization",
    "services.seoDesc": "Boost your online visibility with our advanced SEO strategies and techniques.",
    "services.maintenance": "Website Maintenance",
    "services.maintenanceDesc": "Keep your website running smoothly with our ongoing support and updates.",
    "services.consulting": "Digital Consulting",
    "services.consultingDesc": "Strategic guidance to help you make the right digital decisions for your business.",

    // Portfolio
    "portfolio.title": "Our Portfolio",
    "portfolio.subtitle": "Discover some of our recent projects and success stories",
    "portfolio.viewProject": "View Project",
    "portfolio.liveDemo": "Live Demo",

    // Team
    "team.title": "Meet Our Team",
    "team.subtitle": "Creative professionals dedicated to your digital success",

    // Contact
    "contact.title": "Get In Touch",
    "contact.subtitle":
      "Ready to start your next project? Let's discuss how we can help you achieve your digital goals.",
    "contact.name": "Name",
    "contact.email": "Email",
    "contact.message": "Message",
    "contact.send": "Send Message",
    "contact.info": "Contact Information",
    "contact.location": "Location",
    "contact.phone": "Phone",

    // Footer
    "footer.description":
      "Codan Web specializes in creating exceptional digital experiences through innovative web design and development.",
    "footer.quickLinks": "Quick Links",
    "footer.services": "Services",
    "footer.contact": "Contact Info",
    "footer.rights": "© 2024 Codan Web. All rights reserved.",
  },
  ar: {
    // Navigation
    "nav.home": "الرئيسية",
    "nav.services": "الخدمات",
    "nav.portfolio": "أعمالنا",
    "nav.team": "الفريق",
    "nav.contact": "اتصل بنا",
    "nav.about": "من نحن",

    // Hero Section
    "hero.title": "كودان ويب - حلول رقمية إبداعية",
    "hero.subtitle":
      "نحن فريق من المبدعين متخصصون في تصميم وتطوير المواقع باستخدام أحدث التقنيات المدعومة بالذكاء الاصطناعي. نساعد الشركات والشركات الناشئة في بناء حضور قوي على الإنترنت وتحقيق النجاح الرقمي بأقل سعر وأعلى جودة.",
    "hero.getStarted": "ابدأ الآن",
    "hero.viewPortfolio": "عرض الأعمال",
    "hero.contactUs": "اتصل بنا",

    // Services
    "services.title": "خدماتنا",
    "services.webDesign": "تصميم المواقع",
    "services.webDesignDesc": "تصاميم حديثة ومتجاوبة تجذب جمهورك وتزيد التحويلات.",
    "services.webDev": "تطوير المواقع",
    "services.webDevDesc": "تطوير شامل باستخدام أحدث التقنيات وتكامل الذكاء الاصطناعي.",
    "services.ecommerce": "حلول التجارة الإلكترونية",
    "services.ecommerceDesc": "حلول متاجر إلكترونية كاملة مع تكامل الدفع وإدارة المخزون.",
    "services.seo": "تحسين محركات البحث",
    "services.seoDesc": "عزز ظهورك على الإنترنت باستراتيجيات SEO المتقدمة.",
    "services.maintenance": "صيانة المواقع",
    "services.maintenanceDesc": "حافظ على موقعك يعمل بسلاسة مع الدعم والتحديثات المستمرة.",
    "services.consulting": "الاستشارات الرقمية",
    "services.consultingDesc": "إرشاد استراتيجي لمساعدتك في اتخاذ القرارات الرقمية الصحيحة.",

    // Portfolio
    "portfolio.title": "أعمالنا",
    "portfolio.subtitle": "اكتشف بعض مشاريعنا الحديثة وقصص النجاح",
    "portfolio.viewProject": "عرض المشروع",
    "portfolio.liveDemo": "عرض مباشر",

    // Team
    "team.title": "تعرف على فريقنا",
    "team.subtitle": "محترفون مبدعون مكرسون لنجاحك الرقمي",

    // Contact
    "contact.title": "تواصل معنا",
    "contact.subtitle": "مستعد لبدء مشروعك القادم؟ دعنا نناقش كيف يمكننا مساعدتك في تحقيق أهدافك الرقمية.",
    "contact.name": "الاسم",
    "contact.email": "البريد الإلكتروني",
    "contact.message": "الرسالة",
    "contact.send": "إرسال الرسالة",
    "contact.info": "معلومات الاتصال",
    "contact.location": "الموقع",
    "contact.phone": "الهاتف",

    // Footer
    "footer.description": "كودان ويب متخصصة في إنشاء تجارب رقمية استثنائية من خلال تصميم وتطوير المواقع المبتكرة.",
    "footer.quickLinks": "روابط سريعة",
    "footer.services": "الخدمات",
    "footer.contact": "معلومات الاتصال",
    "footer.rights": "© 2024 كودان ويب. جميع الحقوق محفوظة.",
  },
}

export const languages = {
  en: {
    code: "en" as const,
    name: "English",
    nativeName: "English",
  },
  ar: {
    code: "ar" as const,
    name: "Arabic",
    nativeName: "العربية",
  },
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("en")

  const t = (key: string): string => {
    return translations[language][key as keyof (typeof translations)[typeof language]] || key
  }

  return <LanguageContext.Provider value={{ language, setLanguage, t }}>{children}</LanguageContext.Provider>
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}
