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
    "nav.coaching": "Coaching",
    "nav.services": "Services",
    "nav.services.product": "Product Leadership",
    "nav.services.build": "Build",
    "nav.projects": "Projects",
    "nav.blog": "Blog",
    "nav.adventures": "Adventures",
    "nav.cta": "Book a Call",

    // Footer
    "footer.col1.heading": "Services",
    "footer.col1.coaching": "Financial Coaching",
    "footer.col1.product": "Product Leadership",
    "footer.col1.build": "Build",
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
    "projects.heading": "What I've built.",
    "projects.subheading":
      "Ventures, products, and consulting engagements spanning fintech, automotive, proptech, and IoT. Eight years of building things that ship.",
    "projects.allProjects": "All Projects",
    "projects.viewFullPortfolio": "View full portfolio",

    // About
    "about.title": "About \u2014 David Hamel",
    "about.description":
      "The story behind the financial planning coach and product builder. From Rotterdam to San Francisco to Berlin \u2014 via 15+ countries, 4 startups, and a lot of ocean.",
    "about.heading": "About",
    "about.whatIBelieve": "What I believe",
    "about.background": "Background",

    // Coaching
    "coaching.title":
      "Financial Coaching for Expats in Germany \u2014 David Hamel",
    "coaching.description":
      "Independent, fee-based financial planning for English-speaking professionals in Germany. No commissions, no conflicts of interest. Book a free consultation.",

    // Product Leadership
    "product.title": "Product Leadership \u2014 David Hamel",
    "product.description":
      "Senior product leadership, without the full-time hire. Fractional CPO, product strategy, and roadmapping for startups and scaleups.",

    // Build
    "build.title": "Build \u2014 David Hamel",
    "build.description":
      "I understand your business \u2014 and I build the software. AI-native app and web development for SMBs and financial services firms.",

    // Adventures
    "adventures.title": "Adventures \u2014 David Hamel",
    "adventures.description":
      "Surf, dive, travel. Photos from 15+ countries and a life spent in the ocean.",
    "adventures.heading": "Adventures",
    "adventures.subheading":
      "When I'm not building or coaching, I'm in the ocean.",
    "adventures.all": "All",
    "adventures.surf": "Surf",
    "adventures.freedive": "Freedive",
    "adventures.kite": "Kite",
    "adventures.snow": "Snow",
    "adventures.travel": "Travel",

    // Contact
    "contact.title": "Contact \u2014 David Hamel",
    "contact.description":
      "Book a free consultation or get in touch. Financial coaching for expats, product leadership for startups, app and web builds for businesses.",
    "contact.heading": "Let's talk.",
    "contact.subheading":
      "Whether you need financial coaching, product leadership, or someone to build your next project \u2014 the first conversation is free.",
    "contact.calendlyHeading": "Book a 30-minute consultation",
    "contact.directHeading": "Or reach me directly",
    "contact.calendlyPlaceholder": "Calendly booking will be available soon.",

    // Newsletter CTA (reusable)
    "newsletter.heading": "Insights on money, building, and living abroad.",
    "newsletter.subtext":
      "I write about expat finance, product building, and designing a life on your own terms. No spam, no fluff \u2014 just honest thinking.",
    "newsletter.placeholder": "Your email address",
    "newsletter.button": "Subscribe",

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
    "nav.coaching": "Coaching",
    "nav.services": "Leistungen",
    "nav.services.product": "Produktf\u00fchrung",
    "nav.services.build": "Build",
    "nav.projects": "Projekte",
    "nav.blog": "Blog",
    "nav.adventures": "Abenteuer",
    "nav.cta": "Gespr\u00e4ch buchen",

    // Footer
    "footer.col1.heading": "Leistungen",
    "footer.col1.coaching": "Finanzcoaching",
    "footer.col1.product": "Produktf\u00fchrung",
    "footer.col1.build": "Build",
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
    "footer.newsletter.heading":
      "Impulse zu Geld, Bauen und Leben im Ausland.",
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
    "blog.subheading":
      "Gedanken \u00fcber Geld, Bauen und Leben im Ausland.",
    "blog.readAll": "Alle Beitr\u00e4ge lesen",
    "blog.minRead": "Min. Lesezeit",
    "blog.latestHeading": "Neueste Beitr\u00e4ge",

    // Projects
    "projects.viewAll": "Alle Projekte ansehen",
    "projects.selectedWork": "Ausgew\u00e4hlte Projekte",
    "projects.heading": "Was ich gebaut habe.",
    "projects.subheading":
      "Ventures, Produkte und Beratungsprojekte in Fintech, Automotive, Proptech und IoT. Acht Jahre lang Dinge gebaut, die live gehen.",
    "projects.allProjects": "Alle Projekte",
    "projects.viewFullPortfolio": "Gesamtes Portfolio ansehen",

    // About
    "about.title": "\u00dcber mich \u2014 David Hamel",
    "about.description":
      "Die Geschichte hinter dem Finanzcoach und Product Builder. Von Rotterdam \u00fcber San Francisco nach Berlin \u2014 \u00fcber 15+ L\u00e4nder, 4 Startups und jede Menge Ozean.",
    "about.heading": "\u00dcber mich",
    "about.whatIBelieve": "Woran ich glaube",
    "about.background": "Hintergrund",

    // Coaching
    "coaching.title":
      "Finanzcoaching f\u00fcr Expats in Deutschland \u2014 David Hamel",
    "coaching.description":
      "Unabh\u00e4ngige, honorarbasierte Finanzplanung f\u00fcr englischsprachige Fachkr\u00e4fte in Deutschland. Keine Provisionen, keine Interessenkonflikte. Kostenloses Erstgespr\u00e4ch buchen.",

    // Product Leadership
    "product.title": "Produktf\u00fchrung \u2014 David Hamel",
    "product.description":
      "Erfahrene Produktf\u00fchrung, ohne die Vollzeitstelle. Fractional CPO, Produktstrategie und Roadmapping f\u00fcr Startups und Scaleups.",

    // Build
    "build.title": "Build \u2014 David Hamel",
    "build.description":
      "Ich verstehe dein Gesch\u00e4ft \u2014 und ich baue die Software. KI-natives App- und Web-Development f\u00fcr KMU und Finanzdienstleister.",

    // Adventures
    "adventures.title": "Abenteuer \u2014 David Hamel",
    "adventures.description":
      "Surfen, Tauchen, Reisen. Fotos aus 15+ L\u00e4ndern und einem Leben im Ozean.",
    "adventures.heading": "Abenteuer",
    "adventures.subheading":
      "Wenn ich nicht baue oder coache, bin ich im Ozean.",
    "adventures.all": "Alle",
    "adventures.surf": "Surfen",
    "adventures.freedive": "Tauchen",
    "adventures.kite": "Kite",
    "adventures.snow": "Snow",
    "adventures.travel": "Reisen",

    // Contact
    "contact.title": "Kontakt \u2014 David Hamel",
    "contact.description":
      "Buche ein kostenloses Erstgespr\u00e4ch oder nimm Kontakt auf. Finanzcoaching f\u00fcr Expats, Produktf\u00fchrung f\u00fcr Startups, App- und Web-Builds f\u00fcr Unternehmen.",
    "contact.heading": "Lass uns sprechen.",
    "contact.subheading":
      "Ob du Finanzcoaching brauchst, Produktf\u00fchrung oder jemanden, der dein n\u00e4chstes Projekt baut \u2014 das erste Gespr\u00e4ch ist kostenlos.",
    "contact.calendlyHeading": "Buche ein 30-min\u00fctiges Gespr\u00e4ch",
    "contact.directHeading": "Oder schreib mir direkt",
    "contact.calendlyPlaceholder":
      "Calendly-Buchung wird bald verf\u00fcgbar sein.",

    // Newsletter CTA (reusable)
    "newsletter.heading": "Impulse zu Geld, Bauen und Leben im Ausland.",
    "newsletter.subtext":
      "Ich schreibe \u00fcber Expat-Finanzen, Produktentwicklung und ein selbstbestimmtes Leben. Kein Spam, kein Blabla \u2014 ehrliche Gedanken.",
    "newsletter.placeholder": "Deine E-Mail-Adresse",
    "newsletter.button": "Abonnieren",

    // Pillar labels
    "pillar.expat-money-mastery": "Expat-Finanzen",
    "pillar.systems-and-money": "Systeme & Geld",
    "pillar.building-alba": "Building Alba",
    "pillar.freedom-by-design": "Freedom by Design",
    "pillar.practitioners-edge": "Practitioner's Edge",
  },
} as const;
