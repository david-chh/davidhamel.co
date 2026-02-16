export const languages = {
  en: "English",
  de: "Deutsch",
} as const;

export const defaultLang = "en" as const;

export type Lang = keyof typeof languages;

export const ui = {
  en: {
    // Navigation
    "nav.about": "About",
    "nav.services": "Services",
    "nav.services.coaching": "Financial Coaching",
    "nav.services.build": "Product & Build",
    "nav.projects": "Projects",
    "nav.blog": "Blog",
    "nav.adventures": "Adventures",
    "nav.cta": "Book a Call",

    // Footer
    "footer.col1.heading": "Services",
    "footer.col1.coaching": "Financial Coaching",
    "footer.col1.build": "Product & Build",
    "footer.col1.cta": "Book a Call",
    "footer.col2.heading": "Explore",
    "footer.col2.blog": "Blog",
    "footer.col2.projects": "Projects",
    "footer.col2.adventures": "Adventures",
    "footer.col2.about": "About",
    "footer.col3.heading": "Connect",
    "footer.col3.email": "Email",
    "footer.col3.linkedin": "LinkedIn",
    "footer.col3.github": "GitHub",
    "footer.newsletter.heading":
      "Insights on money, building, and living abroad.",
    "footer.newsletter.subtext": "No spam. Unsubscribe anytime.",
    "footer.newsletter.placeholder": "Your email address",
    "footer.newsletter.button": "Subscribe",
    "footer.copyright": "\u00a9 2026 David Hamel",
    "footer.imprint": "Imprint",
    "footer.privacy": "Privacy Policy",

    // Shared
    "shared.readMore": "Read more",
    "shared.viewAll": "View all",
    "shared.backToTop": "Back to top",

    // Blog
    "blog.heading": "Writing",
    "blog.subheading": "Thoughts on money, building, and living abroad.",
    "blog.readAll": "Read all posts",
    "blog.minRead": "min read",
    "blog.latestHeading": "Latest from the Blog",

    // Projects
    "projects.viewAll": "View all projects",
    "projects.selectedWork": "Selected Work",

    // Pillar labels
    "pillar.expat-money-mastery": "Expat Money",
    "pillar.systems-and-money": "Systems & Money",
    "pillar.building-alba": "Building Alba",
    "pillar.freedom-by-design": "Freedom by Design",
    "pillar.practitioners-edge": "Practitioner's Edge",
  },
  de: {
    // Navigation
    "nav.about": "\u00dcber mich",
    "nav.services": "Leistungen",
    "nav.services.coaching": "Finanzcoaching",
    "nav.services.build": "Product & Build",
    "nav.projects": "Projekte",
    "nav.blog": "Blog",
    "nav.adventures": "Abenteuer",
    "nav.cta": "Gespr\u00e4ch buchen",

    // Footer
    "footer.col1.heading": "Leistungen",
    "footer.col1.coaching": "Finanzcoaching",
    "footer.col1.build": "Product & Build",
    "footer.col1.cta": "Gespr\u00e4ch buchen",
    "footer.col2.heading": "Entdecken",
    "footer.col2.blog": "Blog",
    "footer.col2.projects": "Projekte",
    "footer.col2.adventures": "Abenteuer",
    "footer.col2.about": "\u00dcber mich",
    "footer.col3.heading": "Kontakt",
    "footer.col3.email": "E-Mail",
    "footer.col3.linkedin": "LinkedIn",
    "footer.col3.github": "GitHub",
    "footer.newsletter.heading": "Impulse zu Geld, Bauen und Leben im Ausland.",
    "footer.newsletter.subtext": "Kein Spam. Jederzeit abbestellbar.",
    "footer.newsletter.placeholder": "Deine E-Mail-Adresse",
    "footer.newsletter.button": "Abonnieren",
    "footer.copyright": "\u00a9 2026 David Hamel",
    "footer.imprint": "Impressum",
    "footer.privacy": "Datenschutz",

    // Shared
    "shared.readMore": "Weiterlesen",
    "shared.viewAll": "Alle ansehen",
    "shared.backToTop": "Nach oben",

    // Blog
    "blog.heading": "Blog",
    "blog.subheading": "Gedanken \u00fcber Geld, Bauen und Leben im Ausland.",
    "blog.readAll": "Alle Beitr\u00e4ge lesen",
    "blog.minRead": "Min. Lesezeit",
    "blog.latestHeading": "Neueste Beitr\u00e4ge",

    // Projects
    "projects.viewAll": "Alle Projekte ansehen",
    "projects.selectedWork": "Ausgew\u00e4hlte Projekte",

    // Pillar labels
    "pillar.expat-money-mastery": "Expat-Finanzen",
    "pillar.systems-and-money": "Systeme & Geld",
    "pillar.building-alba": "Building Alba",
    "pillar.freedom-by-design": "Freedom by Design",
    "pillar.practitioners-edge": "Practitioner's Edge",
  },
} as const;
