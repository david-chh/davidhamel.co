export interface ProjectData {
  slug: string;
  name: string;
  tagline: { en: string; de: string };
  oneLiner: { en: string; de: string };
  role: { en: string; de: string };
  period: string;
  badge: { en: string; de: string };
  metric?: { en: string; de: string };
  location?: string;
  type: { en: string; de: string };
  overview: { en: string; de: string };
  metrics?: { value: string; label: { en: string; de: string } }[];
  whatIDid: { en: string; de: string };
  techStack?: string;
}

export const projects: ProjectData[] = [
  {
    slug: "alba-wealth",
    name: "Alba Wealth",
    tagline: {
      en: "AI-powered financial planning for expats in Germany.",
      de: "KI-gestützte Finanzplanung für Expats in Deutschland.",
    },
    oneLiner: {
      en: "AI-powered financial planning for expats in Germany",
      de: "KI-gestützte Finanzplanung für Expats in Deutschland",
    },
    role: { en: "Founder", de: "Gründer" },
    period: "2025 – present",
    badge: { en: "Venture", de: "Venture" },
    metric: { en: "Active", de: "Aktiv" },
    location: "Berlin",
    type: { en: "Own venture", de: "Eigenes Venture" },
    overview: {
      en: "Alba Wealth is an AI-powered financial planning platform I'm building for English-speaking expats in Germany. It models your full financial life — income, expenses, tax, insurance, investments, pension — and helps you make better decisions with data instead of guesswork.\n\nThe platform combines personal financial coaching with AI tools that run scenarios, identify gaps, and generate actionable plans. It's the tool I wish had existed when I moved to Germany and couldn't find honest, independent financial guidance.",
      de: "Alba Wealth ist eine KI-gestützte Finanzplanungsplattform, die ich für englischsprachige Expats in Deutschland baue. Sie modelliert dein gesamtes finanzielles Leben — Einkommen, Ausgaben, Steuern, Versicherungen, Investitionen, Rente — und hilft dir, bessere Entscheidungen auf Basis von Daten zu treffen statt auf Vermutungen.\n\nDie Plattform verbindet persönliches Finanzcoaching mit KI-Tools, die Szenarien durchspielen, Lücken identifizieren und umsetzbare Pläne erstellen. Es ist das Tool, das ich mir gewünscht hätte, als ich nach Deutschland zog und keine ehrliche, unabhängige Finanzberatung finden konnte.",
    },
    metrics: [
      {
        value: "2025",
        label: { en: "Active since", de: "Aktiv seit" },
      },
      {
        value: "AI",
        label: { en: "Native tech stack", de: "Nativer Tech Stack" },
      },
      {
        value: "1:1",
        label: { en: "Coaching + platform", de: "Coaching + Plattform" },
      },
    ],
    whatIDid: {
      en: "Everything. Product strategy, UX design, full-stack development, financial modeling, customer research, and coaching. This is a solo founder venture where I build the product and serve the clients simultaneously — using the direct feedback from coaching to improve the platform.",
      de: "Alles. Produktstrategie, UX-Design, Full-Stack-Entwicklung, Finanzmodellierung, Kundenforschung und Coaching. Dies ist ein Solo-Founder-Venture, bei dem ich das Produkt baue und gleichzeitig die Kunden betreue — und das direkte Feedback aus dem Coaching nutze, um die Plattform zu verbessern.",
    },
    techStack: "Next.js · TypeScript · Tailwind · Claude AI · Supabase · Vercel",
  },
  {
    slug: "ziggma",
    name: "Ziggma",
    tagline: {
      en: "Portfolio management for smarter retail investors.",
      de: "Portfoliomanagement für klügere Privatanleger.",
    },
    oneLiner: {
      en: "Portfolio management platform for retail investors",
      de: "Portfoliomanagement-Plattform für Privatanleger",
    },
    role: { en: "Co-Founder & COO", de: "Co-Founder & COO" },
    period: "2023 – 2024",
    badge: { en: "Venture", de: "Venture" },
    metric: {
      en: "35k users · €1.5bn linked",
      de: "35.000 Nutzer · €1,5 Mrd. verknüpft",
    },
    location: "Berlin",
    type: { en: "Own venture", de: "Eigenes Venture" },
    overview: {
      en: "Ziggma is a portfolio management SaaS for retail investors, offering algorithmic stock analysis and portfolio tracking. As Co-Founder and COO, I was responsible for fundraising, product strategy, operations, and business intelligence.\n\nWe built a cloud-based, API-intensive B2C wealth app that grew to 35,000 users with €1.5 billion in linked assets and €10,000 in monthly recurring revenue.",
      de: "Ziggma ist eine Portfoliomanagement-SaaS für Privatanleger mit algorithmischer Aktienanalyse und Portfolio-Tracking. Als Co-Founder und COO war ich verantwortlich für Fundraising, Produktstrategie, Operations und Business Intelligence.\n\nWir bauten eine cloudbasierte, API-intensive B2C-Wealth-App, die auf 35.000 Nutzer mit €1,5 Milliarden verknüpften Assets und €10.000 monatlich wiederkehrendem Umsatz wuchs.",
    },
    metrics: [
      { value: "35k", label: { en: "Users", de: "Nutzer" } },
      {
        value: "€1.5bn",
        label: { en: "Linked assets", de: "Verknüpfte Assets" },
      },
      { value: "€10k", label: { en: "MRR", de: "MRR" } },
    ],
    whatIDid: {
      en: "Co-founded and led operations as COO. Responsible for fundraising, product strategy, business intelligence, and day-to-day operations. Developed the product roadmap, managed partnerships, and built the data pipeline infrastructure.",
      de: "Mitgegründet und als COO operativ geleitet. Verantwortlich für Fundraising, Produktstrategie, Business Intelligence und Tagesgeschäft. Produktroadmap entwickelt, Partnerschaften gemanagt und Datenpipeline-Infrastruktur aufgebaut.",
    },
  },
  {
    slug: "porsche-digital-lab",
    name: "Porsche Digital Lab",
    tagline: {
      en: "Blockchain app for classic car provenance. €6.5M in funding.",
      de: "Blockchain-App für Klassiker-Herkunft. €6,5 Mio. Finanzierung.",
    },
    oneLiner: {
      en: "Blockchain product for classic car provenance",
      de: "Blockchain-Produkt für Klassiker-Herkunft",
    },
    role: { en: "Product Owner", de: "Product Owner" },
    period: "2018",
    badge: { en: "Contract", de: "Auftrag" },
    metric: {
      en: "€6.5M funding · Team of 12",
      de: "€6,5 Mio. Funding · Team von 12",
    },
    location: "Berlin",
    type: {
      en: "Contract (via Digital Partners)",
      de: "Auftrag (über Digital Partners)",
    },
    overview: {
      en: "At Porsche Digital Lab, I led a blockchain-based product for documenting classic car provenance — creating a digital identity and verified history for collector vehicles. I took the project from prototype to full product, helped secure €6.5 million in funding, and built and managed a team of 12 engineers and designers.",
      de: "Beim Porsche Digital Lab leitete ich ein Blockchain-basiertes Produkt zur Dokumentation der Herkunft klassischer Autos — eine digitale Identität und verifizierte Geschichte für Sammlerfahrzeuge. Ich führte das Projekt vom Prototyp zum fertigen Produkt, half bei der Sicherung von €6,5 Millionen Finanzierung und baute ein Team von 12 Entwicklern und Designern auf.",
    },
    metrics: [
      {
        value: "€6.5M",
        label: { en: "Funding secured", de: "Finanzierung gesichert" },
      },
      {
        value: "12",
        label: {
          en: "Team size",
          de: "Teamgröße",
        },
      },
      {
        value: "1",
        label: {
          en: "Prototype → Product",
          de: "Prototyp → Produkt",
        },
      },
    ],
    whatIDid: {
      en: "Served as Product Owner. Validated and scaled the prototype to a full product. Led hiring and managed the engineering and design team. Defined the product roadmap, ran sprint planning, and coordinated with Porsche Digital stakeholders to align the product vision with the broader digital strategy.",
      de: "Product Owner. Prototyp validiert und zum vollen Produkt skaliert. Einstellungen geleitet und das Engineering- und Design-Team gemanagt. Produkt-Roadmap definiert, Sprint Planning durchgeführt und mit Porsche Digital-Stakeholdern koordiniert, um die Produktvision mit der übergreifenden Digitalstrategie abzustimmen.",
    },
  },
  {
    slug: "derisk",
    name: "DeRisk",
    tagline: {
      en: "Systemic risk analytics for the world's largest asset managers.",
      de: "Systemische Risikoanalyse für die größten Vermögensverwalter der Welt.",
    },
    oneLiner: {
      en: "Systemic risk analytics for institutional investors",
      de: "Systemische Risikoanalyse für institutionelle Investoren",
    },
    role: { en: "Co-Founder & CEO", de: "Co-Founder & CEO" },
    period: "2021 – 2022",
    badge: { en: "Venture", de: "Venture" },
    metric: {
      en: "NBIM · Barings · CCLA",
      de: "NBIM · Barings · CCLA",
    },
    location: "London / Berlin",
    type: { en: "Own venture", de: "Eigenes Venture" },
    overview: {
      en: "DeRisk was a SaaS platform for institutional investors to manage portfolio relationships and systemic risks. We built a financial research and shareholder engagement tool and piloted it with some of the world's largest asset managers — including NBIM (Norway's sovereign wealth fund), Barings, and CCLA — together overseeing more than €1.5 trillion in assets under management.",
      de: "DeRisk war eine SaaS-Plattform für institutionelle Investoren zur Verwaltung von Portfolio-Beziehungen und systemischen Risiken. Wir bauten ein Tool für Finanzforschung und Shareholder Engagement und pilotierten es mit einigen der größten Vermögensverwalter der Welt — darunter NBIM (Norwegens Staatsfonds), Barings und CCLA — die zusammen über €1,5 Billionen an verwaltetem Vermögen betreuen.",
    },
    metrics: [
      {
        value: "€1.5T+",
        label: { en: "AUM represented", de: "AUM vertreten" },
      },
      {
        value: "3",
        label: { en: "Pilot clients", de: "Pilotkunden" },
      },
      {
        value: "SaaS",
        label: { en: "Enterprise platform", de: "Enterprise-Plattform" },
      },
    ],
    whatIDid: {
      en: "Co-founded and led as CEO. Responsible for product strategy, go-to-market, and business development. Designed the platform architecture, led institutional sales conversations, and managed the product development process from zero to pilot.",
      de: "Mitgegründet und als CEO geleitet. Verantwortlich für Produktstrategie, Go-to-Market und Business Development. Plattformarchitektur entworfen, institutionelle Vertriebsgespräche geführt und den Produktentwicklungsprozess von Null bis zum Piloten gemanagt.",
    },
  },
  {
    slug: "digital-partners",
    name: "Digital Partners",
    tagline: {
      en: "My first company. Six years of IoT consulting and venture building.",
      de: "Mein erstes Unternehmen. Sechs Jahre IoT-Beratung und Venture Building.",
    },
    oneLiner: {
      en: "IoT consulting & venture building for industrial clients",
      de: "IoT-Beratung & Venture Building für Industriekunden",
    },
    role: { en: "Founder & CEO", de: "Gründer & CEO" },
    period: "2015 – 2022",
    badge: { en: "Venture", de: "Venture" },
    metric: {
      en: "27 projects · 10-person team",
      de: "27 Projekte · 10-köpfiges Team",
    },
    location: "Berlin / San Francisco",
    type: { en: "Own venture", de: "Eigenes Venture" },
    overview: {
      en: "Digital Partners was a digital strategy and venture building consultancy I founded right out of university. We helped industrial clients adopt IT and IoT solutions, operating across Germany, the USA, and the Middle East.\n\nOver six years, we executed 27 projects for clients including Viessmann, Porsche, and Körber. I built a team of seven engineers and three consulting partners, and the company evolved from a B2B matching platform for Industry 4.0 into a full consulting practice — which led directly to engagements like Porsche Digital Lab.",
      de: "Digital Partners war eine Digital-Strategie- und Venture-Building-Beratung, die ich direkt nach dem Studium gründete. Wir halfen Industriekunden bei der Einführung von IT- und IoT-Lösungen und waren in Deutschland, den USA und dem Mittleren Osten tätig.\n\nÜber sechs Jahre führten wir 27 Projekte für Kunden wie Viessmann, Porsche und Körber durch. Ich baute ein Team aus sieben Entwicklern und drei Beratungspartnern auf, und das Unternehmen entwickelte sich von einer B2B-Matching-Plattform für Industrie 4.0 zu einer vollständigen Beratungspraxis — die direkt zu Engagements wie dem Porsche Digital Lab führte.",
    },
    metrics: [
      {
        value: "27",
        label: { en: "Projects delivered", de: "Projekte umgesetzt" },
      },
      {
        value: "10",
        label: { en: "Team members", de: "Teammitglieder" },
      },
      {
        value: "6",
        label: { en: "Years of operation", de: "Jahre Betrieb" },
      },
    ],
    whatIDid: {
      en: "Founded and led the company. Responsible for strategy, business development, client relationships, hiring, and operations. Sourced and managed technology partnerships, led client workshops, and oversaw project delivery across industries including automotive, manufacturing, and mechanical engineering.",
      de: "Gegründet und geleitet. Verantwortlich für Strategie, Business Development, Kundenbeziehungen, Einstellungen und Operations. Technologiepartnerschaften aufgebaut und gemanagt, Kundenworkshops geleitet und Projektdurchführung in Branchen wie Automotive, Fertigung und Maschinenbau verantwortet.",
    },
  },
  {
    slug: "buena",
    name: "Buena",
    tagline: {
      en: "Automating rental contracts from 5% to 100%.",
      de: "Mietvertragsautomatisierung von 5% auf 100%.",
    },
    oneLiner: {
      en: "Proptech marketplace — automated rental contract generation",
      de: "Proptech-Marktplatz — automatisierte Mietvertragserstellung",
    },
    role: { en: "Senior Product Manager", de: "Senior Product Manager" },
    period: "2020",
    badge: { en: "Contract", de: "Auftrag" },
    metric: {
      en: "<5% → 100% automation",
      de: "<5% → 100% Automatisierung",
    },
    location: "Berlin",
    type: { en: "Contract", de: "Auftrag" },
    overview: {
      en: "Buena (Home HT GmbH) was building an online marketplace for tenants and landlords. I came on as Senior Product Manager to automate their core workflow — rental contract generation — which at the time worked for less than 5% of cases. I rebuilt the process to handle 100% of contract scenarios and established agile processes for a development team of nine.",
      de: "Buena (Home HT GmbH) baute einen Online-Marktplatz für Mieter und Vermieter. Ich kam als Senior Product Manager, um den Kern-Workflow — die Mietvertragserstellung — zu automatisieren, die damals in weniger als 5% der Fälle funktionierte. Ich habe den Prozess so umgebaut, dass 100% der Vertragsvarianten abgedeckt werden, und agile Prozesse für ein neunköpfiges Entwicklungsteam eingeführt.",
    },
    metrics: [
      {
        value: "100%",
        label: { en: "Contract automation", de: "Vertragsautomatisierung" },
      },
      {
        value: "9",
        label: { en: "Dev team size", de: "Entwicklerteam" },
      },
    ],
    whatIDid: {
      en: "Led the product function. Mapped the existing contract generation workflow, identified failure points, and redesigned the system to handle all edge cases. Introduced agile development processes, established the product roadmap, and worked closely with engineering to ship weekly.",
      de: "Produktfunktion geleitet. Bestehenden Vertragserstellungs-Workflow analysiert, Fehlerquellen identifiziert und das System neu designt. Agile Entwicklungsprozesse eingeführt, Produkt-Roadmap aufgebaut und eng mit dem Engineering zusammengearbeitet, um wöchentlich zu liefern.",
    },
  },
  {
    slug: "carly",
    name: "Carly",
    tagline: {
      en: "25% more conversions through product-led sales.",
      de: "25% mehr Conversions durch produktgeführten Vertrieb.",
    },
    oneLiner: {
      en: "Car diagnostics e-commerce — sales funnel optimization",
      de: "KFZ-Diagnose E-Commerce — Vertriebstrichter-Optimierung",
    },
    role: { en: "Product Manager", de: "Product Manager" },
    period: "2020",
    badge: { en: "Contract", de: "Auftrag" },
    metric: { en: "+25% conversion", de: "+25% Conversion" },
    location: "Munich",
    type: { en: "Contract", de: "Auftrag" },
    overview: {
      en: "Carly (Carly Connected Car / Carly Solutions GmbH) builds car diagnostics tools for consumers. I joined as Product Manager to improve online sales performance. I built a new web funnel that increased purchase conversion by 25%, established an agile product organization, and set up their analytics and business intelligence infrastructure.",
      de: "Carly (Carly Connected Car / Carly Solutions GmbH) baut KFZ-Diagnosetools für Endkunden. Ich kam als Product Manager, um die Online-Vertriebsleistung zu verbessern. Ich baute einen neuen Web-Funnel, der die Kaufkonversion um 25% steigerte, etablierte eine agile Produktorganisation und richtete die Analytics- und Business-Intelligence-Infrastruktur ein.",
    },
    metrics: [
      {
        value: "+25%",
        label: { en: "Purchase conversion", de: "Kaufkonversion" },
      },
    ],
    whatIDid: {
      en: "Led product for the e-commerce function. Designed and built a new purchase funnel, analyzed user behavior data to identify drop-off points, and implemented changes that increased conversion by 25%. Established the agile product organization and built the analytics stack (BI setup, event tracking, funnel analysis).",
      de: "Produkt für die E-Commerce-Funktion geleitet. Neuen Kauftrichter designed und gebaut, Nutzerverhalten analysiert, Abbruchpunkte identifiziert und Änderungen umgesetzt, die die Konversion um 25% steigerten. Agile Produktorganisation etabliert und Analytics-Stack aufgebaut (BI-Setup, Event-Tracking, Funnel-Analyse).",
    },
  },
  {
    slug: "impactive",
    name: "Impactive",
    tagline: {
      en: "Strategy consulting for institutional shareholder engagement.",
      de: "Strategieberatung für institutionelles Shareholder Engagement.",
    },
    oneLiner: {
      en: "Institutional shareholder engagement platform",
      de: "Institutionelle Shareholder-Engagement-Plattform",
    },
    role: { en: "Venture Consultant", de: "Venture Consultant" },
    period: "2023",
    badge: { en: "Contract", de: "Auftrag" },
    metric: {
      en: "Strategy & business dev",
      de: "Strategie & Business Development",
    },
    location: "London",
    type: { en: "Contract", de: "Auftrag" },
    overview: {
      en: "Impactive Tech builds a SaaS platform for institutional investors to manage asset management stewardship and shareholder engagement. I consulted on product strategy and business development, helping shape the platform's positioning and growth approach for the institutional investor market.",
      de: "Impactive Tech baut eine SaaS-Plattform für institutionelle Investoren zur Verwaltung von Asset-Management-Stewardship und Shareholder Engagement. Ich beriet zu Produktstrategie und Business Development und half bei der Positionierung und Wachstumsstrategie für den institutionellen Investorenmarkt.",
    },
    whatIDid: {
      en: "Advised on strategy and business development. Worked with the founding team to refine the product positioning for institutional buyers, developed the go-to-market strategy, and contributed to business development efforts targeting asset managers and institutional investors.",
      de: "Strategie- und Business-Development-Beratung. Mit dem Gründerteam die Produktpositionierung für institutionelle Käufer verfeinert, Go-to-Market-Strategie entwickelt und zu Business-Development-Aktivitäten für Vermögensverwalter und institutionelle Investoren beigetragen.",
    },
  },
  {
    slug: "rootlocaly",
    name: "Rootlocaly",
    tagline: {
      en: "A side project built with AI — from idea to live app.",
      de: "Ein Nebenprojekt, gebaut mit KI — von der Idee zur Live-App.",
    },
    oneLiner: {
      en: "Local discovery platform — AI-native build showcase",
      de: "Lokale Entdeckungsplattform — KI-nativer Build-Showcase",
    },
    role: { en: "Builder", de: "Builder" },
    period: "2025",
    badge: { en: "Side Project", de: "Nebenprojekt" },
    metric: { en: "Vibe coded", de: "Vibe coded" },
    type: { en: "Side project", de: "Nebenprojekt" },
    overview: {
      en: "Rootlocaly is a local discovery platform I built as a side project to learn AI-native development workflows. It's a showcase of what's possible when you combine product thinking with tools like Claude Code — going from idea to deployed app in days, not months.\n\nThis project demonstrates the same approach I use for client builds: fast iteration, modern stack, product-first thinking.",
      de: "Rootlocaly ist eine lokale Entdeckungsplattform, die ich als Nebenprojekt gebaut habe, um KI-native Entwicklungsworkflows zu lernen. Es ist ein Showcase dessen, was möglich ist, wenn man Produktdenken mit Tools wie Claude Code verbindet — von der Idee zur deployed App in Tagen, nicht Monaten.\n\nDieses Projekt zeigt denselben Ansatz, den ich für Kunden-Builds verwende: schnelle Iteration, moderner Stack, produktzuerst-Denken.",
    },
    whatIDid: {
      en: "Designed and built the entire application from scratch using AI-native development tools. Concept, UX, full-stack development, and deployment — all done solo using Claude Code.",
      de: "Die gesamte Anwendung von Grund auf mit KI-nativen Entwicklungstools designed und gebaut. Konzept, UX, Full-Stack-Entwicklung und Deployment — alles solo mit Claude Code.",
    },
  },
];

export function getProjectBySlug(slug: string): ProjectData | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getAdjacentProjects(
  slug: string,
): { prev: ProjectData | undefined; next: ProjectData | undefined } {
  const index = projects.findIndex((p) => p.slug === slug);
  return {
    prev: index > 0 ? projects[index - 1] : undefined,
    next: index < projects.length - 1 ? projects[index + 1] : undefined,
  };
}
