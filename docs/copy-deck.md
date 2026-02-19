# Copy Deck — davidhamel.co

> Production-ready copy for every page, section, and component. EN + DE.
> Follows the structure defined in `docs/information-architecture.md`.
>
> **Convention:** Each section shows English first, then German.
> Photo/image placeholders marked with `[IMAGE: description]`.
>
> Last updated: 2026-02-19 (v4 — Build page rewrite, Carly/Digital Partners corrections, Rootlocaly metric, llms.txt)

---

## Navigation & Shared Components

### Primary Navigation

| Element                     | EN                   | DE                    |
| --------------------------- | -------------------- | --------------------- |
| Logo/wordmark               | David Hamel          | David Hamel           |
| Nav item 1                  | About                | Über mich             |
| Nav item 2 (top-level)      | Coaching             | Coaching              |
| Nav item 3 (dropdown label) | Services             | Leistungen            |
| Nav dropdown item 1         | Product Leadership   | Produktführung        |
| Nav dropdown item 2         | Build                | Build                 |
| Nav item 4                  | Projects             | Projekte              |
| Nav item 5                  | Blog                 | Blog                  |
| Nav item 6                  | Adventures           | Abenteuer             |
| CTA button                  | Book a Call          | Gespräch buchen       |

### Footer

| Element                | EN                                              | DE                                           |
| ---------------------- | ----------------------------------------------- | -------------------------------------------- |
| Column 1 heading       | Services                                        | Leistungen                                   |
| Column 1 link 1        | Financial Coaching                              | Finanzcoaching                               |
| Column 1 link 2        | Product Leadership                              | Produktführung                               |
| Column 1 link 3        | Build                                           | Build                                        |
| Column 2 heading       | Explore                                         | Entdecken                                    |
| Column 2 link 1        | Blog                                            | Blog                                         |
| Column 2 link 2        | Projects                                        | Projekte                                     |
| Column 2 link 3        | Adventures                                      | Abenteuer                                    |
| Column 2 link 4        | About                                           | Über mich                                    |
| Column 3 heading       | Connect                                         | Kontakt                                      |
| Column 3 link 1        | Email                                           | E-Mail                                       |
| Column 3 link 2        | LinkedIn                                        | LinkedIn                                     |
| Column 3 link 3        | GitHub                                          | GitHub                                       |
| Newsletter heading     | Insights on money, building AI, and living abroad. | Impulse zu Geld, Bauen und Leben im Ausland. |
| Newsletter subtext     | Subscribe to my newsletter                         | Newsletter abonnieren                        |
| Newsletter placeholder | Your email address                              | Deine E-Mail-Adresse                         |
| Newsletter button      | Subscribe                                       | Abonnieren                                   |
| Copyright              | © 2026 David Hamel                              | © 2026 David Hamel                           |
| Legal link 1           | Imprint                                         | Impressum                                    |
| Legal link 2           | Privacy Policy                                  | Datenschutz                                  |

### Language Switcher

| Element | EN      | DE      |
| ------- | ------- | ------- |
| Label   | EN / DE | EN / DE |

---

## 1. Homepage (`/`)

### Meta

| Field                | EN                                                                                                                                                                         | DE                                                                                                                                                                                |
| -------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `<title>`            | David Hamel — Financial Planning Coach & Product Builder                                                                                                                   | David Hamel — Finanzcoach & Product Builder                                                                                                                                       |
| `<meta description>` | Financial planning coach, product leader, and builder. I help expats in Germany navigate their finances, lead product for startups, and build apps for businesses. | Finanzcoach, Produktführer und Builder. Ich helfe Expats in Deutschland bei ihren Finanzen, leite Produkte für Startups und baue Apps für Unternehmen. |

### Section 1: Hero

**EN:**

Headline:

> Financial planning coach. Product leader. Builder.

Subheadline:

> I help people navigate complex systems — financial planning for expats in Germany, product strategy for startups, and AI-native development for businesses that need to ship.

**DE:**

Headline:

> Finanzcoach. Produktführer. Builder.

Subheadline:

> Ich helfe Menschen, komplexe Systeme zu navigieren — Finanzplanung für Expats in Deutschland, Produktstrategie für Startups und KI-natives Development für Unternehmen, die liefern müssen.

### Section 2: Three-Card Routing

Three cards side-by-side that let visitors self-identify and route to the right service page.

**EN:**

Card 1:

> **Financial Coaching**
> For expat professionals in Germany navigating taxes, insurance, and investing — in plain English, with no commissions.
> [Learn more →](/coaching)

Card 2:

> **Product Leadership**
> For startups and scaleups that need senior product thinking without a full-time hire.
> [Learn more →](/product)

Card 3:

> **App & Web Builds**
> For SMBs and financial services firms that need a product person who understands their world — and builds the software.
> [Learn more →](/build)

**DE:**

Card 1:

> **Finanzcoaching**
> Für Expat-Fachkräfte in Deutschland, die Steuern, Versicherungen und Geldanlage navigieren — auf Englisch, ohne Provisionen.
> [Mehr erfahren →](/de/coaching)

Card 2:

> **Produktführung**
> Für Startups und Scaleups, die erfahrenes Produktdenken brauchen, ohne eine Vollzeitstelle zu besetzen.
> [Mehr erfahren →](/de/product)

Card 3:

> **App & Web Builds**
> Für KMU und Finanzdienstleister, die einen Produktmenschen brauchen, der ihre Branche versteht — und die Software selbst baut.
> [Mehr erfahren →](/de/build)

### Section 3: Selected Work

Section heading:

| EN            | DE                   |
| ------------- | -------------------- |
| Selected Work | Ausgewählte Projekte |

Cards (4 projects — see ProjectCard component):

**Card 1: Alba Wealth**
| Field | EN | DE |
|-------|----|----|
| Name | Alba Wealth | Alba Wealth |
| One-liner | AI-powered financial planning for expats | KI-gestützte Finanzplanung für Expats |
| Role | Founder | Gründer |
| Badge | Venture | Venture |

**Card 2: Ziggma**
| Field | EN | DE |
|-------|----|----|
| Name | Ziggma | Ziggma |
| One-liner | Portfolio management for 35,000+ investors | Portfoliomanagement für 35.000+ Anleger |
| Role | Co-Founder & COO | Co-Founder & COO |
| Metric | €1.5bn linked assets | €1,5 Mrd. verknüpfte Assets |
| Badge | Venture | Venture |

**Card 3: Porsche Digital Lab**
| Field | EN | DE |
|-------|----|----|
| Name | Porsche Digital Lab | Porsche Digital Lab |
| One-liner | Blockchain product for classic car provenance | Blockchain-Produkt für die Herkunft klassischer Autos |
| Role | Product Owner | Product Owner |
| Metric | €6.5M funding secured | €6,5 Mio. Finanzierung gesichert |
| Badge | Contract | Auftrag |

**Card 4: Digital Partners**
| Field | EN | DE |
|-------|----|----|
| Name | Digital Partners | Digital Partners |
| One-liner | IoT consulting & venture building — 30+ projects delivered | IoT-Beratung & Venture Building — 30+ Projekte umgesetzt |
| Role | Founder & CEO | Gründer & CEO |
| Metric | 7 engineers, 3 partners | 7 Entwickler, 3 Partner |
| Badge | Venture | Venture |

Link below cards:

| EN                  | DE                      |
| ------------------- | ----------------------- |
| View all projects → | Alle Projekte ansehen → |

### Section 4: Latest from the Blog

Section heading:

| EN                   | DE               |
| -------------------- | ---------------- |
| Latest from the Blog | Neueste Beiträge |

(Blog cards are dynamic — pulled from Content Collections. No static copy needed.)

Link below cards:

| EN               | DE                    |
| ---------------- | --------------------- |
| Read all posts → | Alle Beiträge lesen → |

---

## 2. About (`/about`)

### Meta

| Field                | EN                                                                                                                                                                | DE                                                                                                                                                          |
| -------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `<title>`            | About — David Hamel                                                                                                                                               | Über mich — David Hamel                                                                                                                                     |
| `<meta description>` | The story behind the financial planning coach and product builder. 15+ countries, 4 startups, a year of kitesurfing, and a lot of ocean. | Die Geschichte hinter dem Finanzcoach und Product Builder. 15+ Länder, 4 Startups, ein Jahr Kitesurfen und jede Menge Ozean. |

### Section 1: Hero / Intro

`[IMAGE: Portrait photo — warm-white background, scaled down with lg:max-w-[280px], grayscale]`

**EN:**

Headline:

> About

Opening (bullet list):

> - Grew up in Germany.
> - Traveled around the world.
> - Studied business, finance and economics.
> - Co-founded four companies.
> - Consulted on product, finance and venture building.
> - Now: financial coaching for expats, building [Alba Wealth](/projects/alba-wealth).

**DE:**

Headline:

> Über mich

Opening (bullet list):

> - Aufgewachsen in Deutschland.
> - Um die Welt gereist.
> - BWL, Finanzen und VWL studiert.
> - Vier Unternehmen mitgegründet.
> - Beratung in Produkt, Finanzen und Venture Building.
> - Heute: Finanzcoaching für Expats, Aufbau von [Alba Wealth](/de/projects/alba-wealth).

### Section 2: The Story

Note: The new narrative focuses on independence, travel, curiosity about finance, entrepreneurship journey from consulting to fintech to coaching + AI. It does NOT mention specific project names or KPIs in the story body. Project links are only in the hero bullet list.

**EN:**

> Ever since I was a teenager, I wanted to explore and be independent. It just felt natural to go travel after finishing high school. I taught kitesurfing to fund the road, and spent a year moving through Egypt, Brazil, New Zealand, and wherever the waves were good.
>
> Traveling also made me realize how important financial freedom was. So, after seeing how connected the world really is, I was drawn to international business. A year into studying, it became obvious that money is the system running everything. It shapes incentives, distributes power, connects economies. At the same time, I got hooked on entrepreneurship and technology, because there seemed to be an unlimited number of unsolved problems in the economy.
>
> I studied in Rotterdam, with semesters in Nice and Singapore, then joined a bank in commodities trade finance. I loved the scale of global banking, but I was too curious to find out if I could build something from scratch.
>
> In 2016, everyone was talking about how technology would disrupt industry. So I started a consulting firm to help industrial companies adopt digital technology. I wanted to see the nuts and bolts of the industrial world up close, something I would have missed if I had jumped straight into finance.
>
> When Covid put business on hold, I started exploring fintech again. The climate crisis was being hotly discussed in financial services, but most solutions were inefficient greenwashing. As someone who's always lived close to the ocean, the topic was personal. I got deep into corporate governance and shareholder engagement as a tool for real change, first building a platform for institutional investors, then co-founding a portfolio management company for retail investors.
>
> After two years deep in personal finance, I saw something bigger. People didn't just lack good investment tools. There were fundamental flaws in how the entire financial advice industry operates, costing people their financial independence.
>
> This coincided with the rise of AI, opening vast new possibilities for how personal finance could actually work.
>
> That's where I am today. I run an independent financial coaching practice for internationals in Germany and Portugal, and I'm building a financial planning AI that takes care of your personal financial life.
>
> When I'm not working on money, I'm most likely in the ocean.

**DE:**

> Schon als Teenager wollte ich die Welt erkunden und unabhängig sein. Nach dem Abitur war es für mich selbstverständlich, erst einmal reisen zu gehen. Ich finanzierte mir die Reise als Kitesurflehrer und verbrachte ein Jahr in Ägypten, Brasilien, Neuseeland und überall dort, wo die Wellen gut waren.
>
> Das Reisen zeigte mir auch, wie wichtig finanzielle Freiheit ist. Als ich sah, wie vernetzt die Welt wirklich ist, zog es mich zum internationalen Business. Schon nach einem Jahr Studium wurde klar: Geld ist das System, das alles antreibt. Es formt Anreize, verteilt Macht, verbindet Volkswirtschaften. Gleichzeitig packte mich die Begeisterung für Unternehmertum und Technologie, weil es eine scheinbar unbegrenzte Zahl ungelöster Probleme in der Wirtschaft gab.
>
> Ich studierte in Rotterdam, mit Semestern in Nizza und Singapur, und ging dann zu einer Bank im Commodities Trade Finance. Ich liebte die Dimension des globalen Bankgeschäfts, aber ich war zu neugierig herauszufinden, ob ich etwas von Grund auf selbst aufbauen konnte.
>
> 2016 sprach jeder davon, wie Technologie die Industrie verändern würde. Also gründete ich eine Beratungsfirma, um Industrieunternehmen bei der Einführung digitaler Technologie zu unterstützen. Ich wollte die Mechanismen der Industriewelt aus der Nähe sehen, etwas, das mir entgangen wäre, wenn ich direkt in die Finanzwelt eingestiegen wäre.
>
> Als Covid das Geschäft zum Stillstand brachte, begann ich, Fintech erneut zu erkunden. Die Klimakrise wurde in der Finanzbranche heiß diskutiert, aber die meisten Lösungen waren ineffizientes Greenwashing. Als jemand, der immer nah am Ozean gelebt hat, war das Thema persönlich. Ich vertiefte mich in Corporate Governance und Shareholder Engagement als Werkzeug für echten Wandel, baute zuerst eine Plattform für institutionelle Investoren und gründete dann ein Portfoliomanagement-Unternehmen für Privatanleger mit.
>
> Nach zwei Jahren tief im Bereich Personal Finance erkannte ich etwas Größeres. Den Menschen fehlten nicht nur gute Anlagetools. Es gab grundlegende Mängel in der gesamten Finanzberatungsbranche, die Menschen ihre finanzielle Unabhängigkeit kosteten.
>
> Das fiel zusammen mit dem Aufstieg von KI, der völlig neue Möglichkeiten eröffnete, wie Personal Finance tatsächlich funktionieren könnte.
>
> Hier stehe ich heute. Ich betreibe eine unabhängige Finanzcoaching-Praxis für Internationals in Deutschland und Portugal und baue eine Finanzplanungs-KI, die sich um alle Aspekte deines persönlichen Finanzlebens kümmert.
>
> Wenn ich nicht an Geld arbeite, bin ich höchstwahrscheinlich im Ozean.

### Section 3: What I Believe

**EN:**

Heading:

> What I believe

> **Independence** — Your advisor should work for you, not for the company whose product they're selling. I charge a flat fee. No commissions, no product-binding.
>
> **Transparency** — I'm clear about fees, clear about trade-offs, and clear about what I don't know. Financial planning shouldn't feel like a black box.
>
> **Systems Thinking** — Your finances aren't isolated decisions. Tax, investment, insurance, retirement, and lifestyle all connect. I look at the full picture.
>
> **Freedom by Design** — The point of financial planning is freedom — to live where you want, work how you want, and spend time on what matters. The plan serves the life, not the other way around.
>
> **Active Living** — I believe in building a life worth planning for. Travel, adventure, and health aren't afterthoughts — they're the reason we do this.

**DE:**

Heading:

> Woran ich glaube

> **Unabhängigkeit** — Dein Berater sollte für dich arbeiten, nicht für das Unternehmen, dessen Produkte er verkauft. Ich berechne ein festes Honorar. Keine Provisionen, keine Produktbindung.
>
> **Transparenz** — Ich bin klar bei Gebühren, klar bei Abwägungen und klar bei dem, was ich nicht weiß. Finanzplanung sollte sich nicht wie eine Blackbox anfühlen.
>
> **Systemdenken** — Deine Finanzen sind keine Einzelentscheidungen. Steuern, Investitionen, Versicherung, Rente und Lebensstil hängen zusammen. Ich schaue auf das große Ganze.
>
> **Freedom by Design** — Das Ziel von Finanzplanung ist Freiheit — zu leben, wo du willst, zu arbeiten, wie du willst, und Zeit für das zu haben, was zählt. Der Plan dient dem Leben, nicht umgekehrt.
>
> **Aktives Leben** — Ich glaube daran, ein Leben aufzubauen, für das es sich zu planen lohnt. Reisen, Abenteuer und Gesundheit sind keine Nebensache — sie sind der Grund, warum wir das hier machen.

### Section 4: Background (Languages, Education & University Logos)

**EN:**

Heading:

> Background

> **Languages:** German · English · French · Spanish
>
> **Education:** BSc International Business Administration & MSc Finance and Investments, Rotterdam School of Management (Cum Laude). Exchanges at EDHEC Business School (Nice) and SMU (Singapore).

University logos row: RSM (`/logos/rsm.png`), EDHEC (`/logos/edhec.png`), SMU (`/logos/smu.png`) — displayed as grayscale, h-8.

**DE:**

Heading:

> Hintergrund

> **Sprachen:** Deutsch · Englisch · Französisch · Spanisch
>
> **Ausbildung:** BSc International Business Administration & MSc Finance and Investments, Rotterdam School of Management (Cum Laude). Auslandssemester an der EDHEC Business School (Nizza) und SMU (Singapur).

University logos row: Same as EN.

---

## 3. Financial Coaching (`/coaching`)

### Meta

| Field                | EN                                                                                                                                                           | DE                                                                                                                                                                         |
| -------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `<title>`            | Financial Coaching for Expats in Germany — David Hamel                                                                                                       | Finanzcoaching für Expats in Deutschland — David Hamel                                                                                                                     |
| `<meta description>` | Independent, fee-based financial planning for English-speaking professionals in Germany. No commissions, no conflicts of interest. Book a free consultation. | Unabhängige, honorarbasierte Finanzplanung für englischsprachige Fachkräfte in Deutschland. Keine Provisionen, keine Interessenkonflikte. Kostenloses Erstgespräch buchen. |

### Section 1: Hero

**EN:**

Headline:

> Take control of your finances in Germany.

Subheadline:

> Independent, fee-based financial coaching for English-speaking professionals. No commissions, no complexity, no German required.

CTA:

> Book a Free Consultation →

**DE:**

Headline:

> Nimm deine Finanzen in Deutschland in die Hand.

Subheadline:

> Unabhängiges, honorarbasiertes Finanzcoaching für englischsprachige Fachkräfte. Keine Provisionen, keine Komplexität — auch auf Englisch.

CTA:

> Kostenloses Erstgespräch buchen →

### Section 2: The Problem

**EN:**

Heading:

> The problem with financial advice in Germany

> You earn well. You're building a career. But your money sits in a savings account earning nothing — because the German financial system feels impossible to navigate.
>
> The tax code is in German. Insurance options are overwhelming. Most advisors earn commissions on the products they sell, which means their incentives aren't aligned with yours.
>
> And if you're an expat? You have additional layers of complexity — cross-border tax obligations, pension transfers, investment accounts in multiple countries, and no idea how long you'll actually stay.

**DE:**

Heading:

> Das Problem mit Finanzberatung in Deutschland

> Du verdienst gut. Du baust deine Karriere auf. Aber dein Geld liegt auf einem Sparkonto und bringt nichts — weil das deutsche Finanzsystem sich nicht navigieren lässt.
>
> Das Steuerrecht ist auf Deutsch. Versicherungsoptionen sind überwältigend. Die meisten Berater verdienen Provisionen an den Produkten, die sie verkaufen, was bedeutet, dass ihre Anreize nicht mit deinen übereinstimmen.
>
> Und als Expat? Dann kommen zusätzliche Ebenen hinzu — grenzüberschreitende Steuerpflichten, Rentenübertragungen, Anlagekonten in mehreren Ländern und keine Ahnung, wie lange du tatsächlich bleibst.

### Section 3: How I Help

**EN:**

Heading:

> How I help

Step 1:

> **Understand** — We map your full financial picture: income, expenses, assets, liabilities, insurance, taxes, and goals. Everything in plain English.

Step 2:

> **Plan** — I build you a clear, actionable plan tailored to your life in Germany. No jargon, no product-pushing — just honest analysis and practical steps.

Step 3:

> **Implement** — I guide you through execution. Which accounts to open, which insurance to keep or cancel, how to start investing. You stay in control — I make sure you know what you're doing and why.

**DE:**

Heading:

> Wie ich helfe

Schritt 1:

> **Verstehen** — Wir erfassen dein gesamtes Finanzbild: Einkommen, Ausgaben, Vermögen, Verbindlichkeiten, Versicherungen, Steuern und Ziele. Alles verständlich erklärt.

Schritt 2:

> **Planen** — Ich erstelle einen klaren, umsetzbaren Plan, der auf dein Leben in Deutschland zugeschnitten ist. Kein Fachjargon, kein Produktverkauf — ehrliche Analyse und praktische Schritte.

Schritt 3:

> **Umsetzen** — Ich begleite dich bei der Umsetzung. Welche Konten eröffnen, welche Versicherungen behalten oder kündigen, wie du anfängst zu investieren. Du behältst die Kontrolle — ich sorge dafür, dass du weißt, was du tust und warum.

### Section 4: What Makes This Different

**EN:**

Heading:

> Why me

> **Fee-based, not commission-based** — I charge a flat fee for my coaching. I don't earn commissions on products. My only incentive is that you understand your finances well enough to make decisions yourself.
>
> **Expat perspective** — I've lived in 15+ countries. I understand cross-border complexity firsthand, not from a textbook.
>
> **Technology-powered** — I'm building Alba Wealth, an AI-powered financial planning platform. My clients benefit from tools I've built myself.
>
> **Systems thinking** — I don't sell you one product. I look at the full picture — tax, insurance, investment, pension, lifestyle — and how they connect.

**DE:**

Heading:

> Warum ich

> **Honorarbasis, nicht Provisionsbasis** — Ich berechne ein festes Honorar für mein Coaching. Ich verdiene keine Provisionen an Produkten. Mein einziger Anreiz ist, dass du deine Finanzen gut genug verstehst, um selbst Entscheidungen zu treffen.
>
> **Expat-Perspektive** — Ich habe in über 15 Ländern gelebt. Ich verstehe grenzüberschreitende Komplexität aus eigener Erfahrung, nicht aus dem Lehrbuch.
>
> **Technologiegestützt** — Ich baue Alba Wealth, eine KI-gestützte Finanzplanungsplattform. Meine Kunden profitieren von Tools, die ich selbst entwickelt habe.
>
> **Systemdenken** — Ich verkaufe dir nicht ein Produkt. Ich schaue auf das große Ganze — Steuern, Versicherung, Geldanlage, Rente, Lebensstil — und wie alles zusammenhängt.

### Section 5: Alba Wealth

`[IMAGE: Alba Wealth product screenshot or logo]`

**EN:**

Heading:

> Built with Alba Wealth

> I'm building Alba Wealth — an AI-powered financial planning platform designed for people like you. It models your financial life, runs scenarios, and helps you make better decisions with data, not guesswork.
>
> My coaching clients get early access to tools I'm building for everyone.

Link: Learn more about Alba Wealth → (external: alba-wealth.com)

**DE:**

Heading:

> Gebaut mit Alba Wealth

> Ich baue Alba Wealth — eine KI-gestützte Finanzplanungsplattform, die für Menschen wie dich entwickelt wurde. Sie modelliert dein finanzielles Leben, simuliert Szenarien und hilft dir, bessere Entscheidungen auf Basis von Daten zu treffen, nicht von Vermutungen.
>
> Meine Coaching-Kunden erhalten frühzeitigen Zugang zu den Tools, die ich für alle baue.

Link: Mehr über Alba Wealth erfahren → (extern: alba-wealth.com)

### Section 6: Who It's For

**EN:**

Heading:

> Is this for you?

> This coaching is for you if:
>
> - You recently moved to Germany and feel overwhelmed by the financial system
> - You earn well but aren't sure you're saving or investing correctly
> - You want to understand German tax, pension, and insurance — in English
> - You're looking for independent advice without commission conflicts
> - You're planning to stay in Germany long-term, or you're not sure yet — and that uncertainty affects your financial decisions

**DE:**

Heading:

> Ist das etwas für dich?

> Dieses Coaching ist für dich, wenn:
>
> - Du kürzlich nach Deutschland gezogen bist und das Finanzsystem dich überfordert
> - Du gut verdienst, aber nicht sicher bist, ob du richtig sparst oder investierst
> - Du Steuern, Rente und Versicherungen in Deutschland auf Englisch verstehen willst
> - Du unabhängige Beratung ohne Provisionskonflikte suchst
> - Du planst, langfristig in Deutschland zu bleiben, oder noch nicht sicher bist — und diese Unsicherheit deine Finanzentscheidungen beeinflusst

### Section 7: CTA / Calendly

**EN:**

Heading:

> Ready to take the first step?

Subtext:

> Book a free 30-minute consultation. We'll talk about your situation, and I'll tell you honestly whether I can help.

`[CALENDLY EMBED]`

Alternative:

> Prefer email? Reach me at hello@davidhamel.co

**DE:**

Heading:

> Bereit für den ersten Schritt?

Subtext:

> Buche ein kostenloses 30-Minuten-Erstgespräch. Wir sprechen über deine Situation, und ich sage dir ehrlich, ob ich helfen kann.

`[CALENDLY EMBED]`

Alternative:

> Lieber per E-Mail? Schreib mir an hello@davidhamel.co

---

## 4. Product Leadership (`/product`)

### Meta

| Field                | EN                                                                                                                                                                   | DE                                                                                                                                                                             |
| -------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `<title>`            | Product Leadership — David Hamel                                                                                                                                     | Produktführung — David Hamel                                                                                                                                                   |
| `<meta description>` | Fractional product leadership for startups and scaleups. 8+ years building products at Porsche, Ziggma, and fintech ventures. Strategy, roadmapping, and execution. | Fraktionale Produktführung für Startups und Scaleups. 8+ Jahre Produktentwicklung bei Porsche, Ziggma und Fintech-Ventures. Strategie, Roadmapping und Umsetzung.             |

### Section 1: Hero

**EN:**

Headline:

> Senior product leadership, on contract.

Subheadline:

> I've led product at ventures that reached 35,000 users, secured €6.5M in funding, and served institutional clients managing over €1.5 trillion.

CTA:

> Book a Discovery Call →

**DE:**

Headline:

> Erfahrene Produktführung, auf Vertragsbasis.

Subheadline:

> Ich habe Produkte bei Ventures geleitet, die 35.000 Nutzer erreichten, €6,5 Mio. Finanzierung sicherten und institutionelle Kunden mit über €1,5 Billionen betreuten.

CTA:

> Discovery Call buchen →

### Section 2: When This Works

**EN:**

Heading:

> When to bring me in

> - You have an engineering team but no senior product leader
> - You need a product strategy and roadmap — not just a backlog manager
> - You're preparing for a fundraise, launch, or pivot and need product clarity
> - Your team is shipping features but you're not sure they're the right features

Heading:

> When this is NOT the right fit

> - You need someone full-time and embedded 5 days a week
> - You're looking for a project manager or scrum master
> - You need someone to manage an outsourced dev team I haven't built
> - You want a strategy deck without hands-on execution

**DE:**

Heading:

> Wann du mich brauchst

> - Du hast ein Engineering-Team, aber keine erfahrene Produktführung
> - Du brauchst eine Produktstrategie und Roadmap — nicht nur einen Backlog-Manager
> - Du bereitest eine Finanzierungsrunde, einen Launch oder Pivot vor und brauchst Produktklarheit
> - Dein Team liefert Features, aber du bist nicht sicher, ob es die richtigen sind

Heading:

> Wann es NICHT passt

> - Du brauchst jemanden in Vollzeit, 5 Tage die Woche
> - Du suchst einen Projektmanager oder Scrum Master
> - Du brauchst jemanden, der ein externes Dev-Team managt, das ich nicht aufgebaut habe
> - Du willst ein Strategiedeck ohne Hands-on-Umsetzung

### Section 3: What You Get

**EN:**

Heading:

> What you get

> - **Product strategy and roadmapping** — Where to focus, what to build, in what order
> - **Team coaching and process design** — Sprint structure, rituals, and decision-making frameworks
> - **Technical architecture guidance** — Stack decisions, build-vs-buy, scalability planning
> - **Stakeholder alignment** — Translate between business, design, and engineering
> - **Go-to-market support** — Positioning, launch planning, success metrics

**DE:**

Heading:

> Was du bekommst

> - **Produktstrategie und Roadmapping** — Worauf fokussieren, was bauen, in welcher Reihenfolge
> - **Teamcoaching und Prozessdesign** — Sprint-Struktur, Rituale und Entscheidungsrahmen
> - **Technische Architekturberatung** — Stack-Entscheidungen, Build-vs-Buy, Skalierungsplanung
> - **Stakeholder-Alignment** — Übersetzen zwischen Business, Design und Engineering
> - **Go-to-Market-Support** — Positionierung, Launch-Planung, Erfolgsmetriken

### Section 4: Track Record

Section heading:

| EN           | DE           |
| ------------ | ------------ |
| Track record | Track Record |

(3-4 ProjectCards — Focus on: Porsche Digital Lab, Ziggma, DeRisk, Buena)

Link:

| EN                    | DE                           |
| --------------------- | ---------------------------- |
| View full portfolio → | Gesamtes Portfolio ansehen → |

### Section 5: How I Work

**EN:**

Heading:

> How I work

Step 1:

> **Assess** — I spend the first 1-2 weeks understanding your product, team, market, and customers. No assumptions, no playbook. I learn your context first.

Step 2:

> **Align** — We define the product strategy, roadmap, and success metrics together. I align stakeholders and make sure everyone is working toward the same outcome.

Step 3:

> **Execute** — I embed with your team and ship. Sprint planning, reviews, and hands-on product work, not just advice from a distance.

**DE:**

Heading:

> Wie ich arbeite

Schritt 1:

> **Verstehen** — In den ersten 1-2 Wochen lerne ich dein Produkt, Team, den Markt und deine Kunden kennen. Keine Annahmen, kein Standardansatz. Ich verstehe zuerst deinen Kontext.

Schritt 2:

> **Ausrichten** — Wir definieren gemeinsam Produktstrategie, Roadmap und Erfolgsmetriken. Ich bringe Stakeholder auf eine Linie und stelle sicher, dass alle auf dasselbe Ziel hinarbeiten.

Schritt 3:

> **Umsetzen** — Ich arbeite in deinem Team mit und liefere. Sprint Planning, Reviews und praktische Produktarbeit, nicht nur Ratschlage aus der Ferne.

_FAQ section removed. Engagement structure box removed._

### Section 6: CTA

No heading. Button + email only (centered, flex-col layout). Same pattern as Build page.

**EN:**

CTA: Let's Talk →

Alternative: Or email me at hello@davidhamel.co

**DE:**

CTA: Lass uns sprechen →

Alternative: Oder schreib mir an hello@davidhamel.co

---

## 5. Build Services (`/build`)

### Meta

| Field                | EN                                                                                                                                                                       | DE                                                                                                                                                                                        |
| -------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `<title>`            | AI Building — David Hamel                                                                                                                                                | AI Building — David Hamel                                                                                                                                                                 |
| `<meta description>` | Custom software is now viable for problems that were never worth solving before. AI-native development with product judgment for SMBs and financial services firms. | Individuelle Software ist jetzt fuer Probleme realisierbar, die sich vorher nie gelohnt haben. KI-natives Development mit Produkterfahrung fuer KMU und Finanzdienstleister. |

### Section 1: Hero

**EN:**

Headline:

> Custom software is now viable for problems that were never worth solving before.

Subheadline:

> AI-native development has made it possible to build production-grade software at a fraction of the traditional cost and timeline. The hard part is no longer building. It's knowing what to build, making it operational, and keeping it secure. I bring eight years of product experience to make sure we build something that actually works for your business.

No CTA button in hero. CTA at bottom of page only.

**DE:**

Headline:

> Individuelle Software ist jetzt fur Probleme realisierbar, die sich vorher nie gelohnt haben.

Subheadline:

> KI-natives Development macht es moglich, produktionsreife Software zu einem Bruchteil der traditionellen Kosten und Zeit zu bauen. Das Schwierige ist nicht mehr das Bauen. Es ist zu wissen, was sich zu bauen lohnt, es betriebsbereit zu machen und es sicher zu halten. Ich bringe acht Jahre Produkterfahrung mit, damit wir etwas bauen, das fur dein Geschaft tatsachlich funktioniert.

### Section 2: Why This Matters Now

Two-column layout. No section heading.

**EN:**

Column 1:

> **Software used to be expensive. Now it's not.**
>
> AI-native development means a single experienced builder can ship what used to require a team of five. That changes the math: internal tools, workflow automation, customer-facing apps, and AI agents are now worth building for use cases that were previously too small or too niche.

Column 2:

> **But building fast without building right creates risk.**
>
> The bottleneck has moved. It's no longer "can we build this?" It's "should we build this, and will it actually work?" Poorly scoped software wastes money. AI agents that work 99% of the time but fail on edge cases create liability. Unsecured setups in regulated industries create real problems. The value isn't in the code. It's in the judgment around it.

**DE:**

Column 1:

> **Software war teuer. Das hat sich geandert.**
>
> KI-natives Development bedeutet, dass ein einzelner erfahrener Builder liefern kann, wofur fruher ein Team von funf notig war. Das verandert die Rechnung: Interne Tools, Workflow-Automatisierung, kundenorientierte Apps und KI-Agenten lohnen sich jetzt fur Anwendungsfalle, die bisher zu klein oder zu nischig waren.

Column 2:

> **Aber schnell bauen ohne richtig zu bauen schafft Risiken.**
>
> Der Engpass hat sich verschoben. Die Frage ist nicht mehr "Konnen wir das bauen?" sondern "Sollten wir das bauen, und wird es tatsachlich funktionieren?" Schlecht definierte Software verschwendet Geld. KI-Agenten, die 99% der Zeit funktionieren, aber bei Grenzfallen versagen, schaffen Haftung. Unsichere Setups in regulierten Branchen schaffen echte Probleme. Der Wert liegt nicht im Code. Er liegt im Urteilsvermogen drum herum.

### Section 3: What I Build

Streamlined to 2 categories (was 4). No tech stack box.

**EN:**

Heading:

> What I build

> **Custom applications** — Web apps, SaaS platforms, internal tools, dashboards. For problems where off-the-shelf software doesn't fit and the ROI justifies a custom build.
>
> **AI agents and automation** — Autonomous agents that handle workflows, process documents, answer questions, and integrate with your existing systems. Built for reliability in production, not just demos.

**DE:**

Heading:

> Was ich baue

> **Individuelle Applikationen** — Web-Apps, SaaS-Plattformen, interne Tools, Dashboards. Fur Probleme, bei denen Standardsoftware nicht passt und der ROI einen individuellen Build rechtfertigt.
>
> **KI-Agenten und Automatisierung** — Autonome Agenten, die Workflows abwickeln, Dokumente verarbeiten, Fragen beantworten und sich in deine bestehenden Systeme integrieren. Gebaut fur Zuverlassigkeit in Produktion, nicht nur fur Demos.

### Section 4: How I Work

Reframed as Scope, Build, Ship & Support (emphasis on scoping as differentiator).

**EN:**

Heading:

> How I work

Step 1:

> **Scope** — We figure out if this is worth building. I ask the hard questions: What problem are we solving? What does success look like? What are the risks? Most projects fail because they skip this step, not because the code was bad.

Step 2:

> **Build** — I design and develop using AI-native tools. This means faster delivery and lower cost than traditional development, but with human review of every line. I don't ship code I don't understand.

Step 3:

> **Ship & Support** — We launch, measure, and iterate. If your product needs ongoing development, I'm available for that too.

**DE:**

Heading:

> Wie ich arbeite

Schritt 1:

> **Scope** — Wir klaren, ob sich das Bauen lohnt. Ich stelle die harten Fragen: Welches Problem losen wir? Wie sieht Erfolg aus? Was sind die Risiken? Die meisten Projekte scheitern, weil sie diesen Schritt uberspringen, nicht weil der Code schlecht war.

Schritt 2:

> **Build** — Ich designe und entwickle mit KI-nativen Tools. Das bedeutet schnellere Lieferung und geringere Kosten als traditionelles Development, aber mit menschlicher Prufung jeder Zeile. Ich shippe keinen Code, den ich nicht verstehe.

Schritt 3:

> **Ship & Support** — Wir launchen, messen und iterieren. Wenn dein Produkt laufende Weiterentwicklung braucht, bin ich auch dafur verfugbar.

### Section 5: Why This Works

3 cards (replaced "Why me not an agency" 6 cards).

**EN:**

Heading:

> Why this works

> **Product thinking, not just code** — Everyone can build fast now. The scarce skill is knowing what's worth building. I've spent eight years leading product at fintech startups and financial services companies. I scope before I build, and I'll tell you if something isn't worth building.
>
> **One person, full context** — No handoffs between a PM, designer, and developer. I hold the full picture from strategy to deployment. That means fewer misunderstandings and faster iteration.
>
> **Built for production, not for demos** — AI-generated code needs experienced review. I treat security, error handling, and maintainability as requirements, not afterthoughts. Especially important if you operate in a regulated industry.

**DE:**

Heading:

> Warum das funktioniert

> **Produktdenken, nicht nur Code** — Jeder kann jetzt schnell bauen. Die knappe Kompetenz ist zu wissen, was sich zu bauen lohnt. Ich habe acht Jahre Produkte bei Fintech-Startups und Finanzdienstleistern geleitet. Ich definiere den Scope vor dem Bauen, und ich sage dir, wenn sich etwas nicht lohnt.
>
> **Eine Person, voller Kontext** — Kein Hin und Her zwischen PM, Designer und Entwickler. Ich halte das Gesamtbild von Strategie bis Deployment. Das bedeutet weniger Missverstandnisse und schnellere Iteration.
>
> **Gebaut fur Produktion, nicht fur Demos** — KI-generierter Code braucht erfahrene Prufung. Ich behandle Sicherheit, Fehlerbehandlung und Wartbarkeit als Anforderungen, nicht als Nachgedanken. Besonders wichtig, wenn du in einer regulierten Branche arbeitest.

### Section 6: Selected Work

Section heading:

| EN            | DE                   |
| ------------- | -------------------- |
| Selected work | Ausgewählte Projekte |

(3 ProjectCards: Alba Wealth, Rootlocaly, Digital Partners)

Link:

| EN                    | DE                           |
| --------------------- | ---------------------------- |
| View full portfolio → | Gesamtes Portfolio ansehen → |

### Section 7: CTA

No heading. Button + email only (centered, flex-col layout).

**EN:**

CTA: Let's Talk →

Alternative: Or email me at hello@davidhamel.co

**DE:**

CTA: Lass uns sprechen →

Alternative: Oder schreib mir an hello@davidhamel.co

_Removed from previous version: hero CTA button, tech stack box, pricing section, FAQ section, "Why me not an agency" (6 cards replaced with "Why this works" 3 cards). Term "vibe coding" no longer used anywhere; replaced with "AI-native build"._

---

## 6. Projects Grid (`/projects`)

### Meta

| Field                | EN                                                                                                                                          | DE                                                                                                                                                |
| -------------------- | ------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------- |
| `<title>`            | Projects — David Hamel                                                                                                                      | Projekte — David Hamel                                                                                                                            |
| `<meta description>` | 8+ years of ventures, products, and consulting. From fintech platforms to industrial IoT to blockchain — what I've built, led, and learned. | 8+ Jahre Ventures, Produkte und Beratung. Von Fintech-Plattformen über Industrial IoT bis Blockchain — was ich gebaut, geleitet und gelernt habe. |

### Section 1: Hero

**EN:**

Headline:

> What I've built.

Subheadline:

> Ventures, products, and consulting engagements spanning fintech, automotive, proptech, and IoT. Eight years of building things that ship.

**DE:**

Headline:

> Was ich gebaut habe.

Subheadline:

> Ventures, Produkte und Beratungsprojekte in Fintech, Automotive, Proptech und IoT. Acht Jahre lang Dinge gebaut, die live gehen.

### Project Cards (all 9)

**Alba Wealth**
| Field | EN | DE |
|-------|----|----|
| Name | Alba Wealth | Alba Wealth |
| Description | AI-powered financial planning for expats in Germany | KI-gestützte Finanzplanung für Expats in Deutschland |
| Role | Founder | Gründer |
| Period | 2025 – present | 2025 – heute |
| Badge | Venture | Venture |
| Metric | Active | Aktiv |

**Ziggma**
| Field | EN | DE |
|-------|----|----|
| Name | Ziggma | Ziggma |
| Description | Portfolio management platform for retail investors | Portfoliomanagement-Plattform für Privatanleger |
| Role | Co-Founder & COO | Co-Founder & COO |
| Period | 2023 – 2024 | 2023 – 2024 |
| Badge | Venture | Venture |
| Metric | 35k users · €1.5bn linked | 35.000 Nutzer · €1,5 Mrd. verknüpft |

**Porsche Digital Lab**
| Field | EN | DE |
|-------|----|----|
| Name | Porsche Digital Lab | Porsche Digital Lab |
| Description | Blockchain product for classic car provenance | Blockchain-Produkt für Klassiker-Herkunft |
| Role | Product Owner | Product Owner |
| Period | 2018 | 2018 |
| Badge | Contract | Auftrag |
| Metric | €6.5M funding · Team of 12 | €6,5 Mio. Funding · Team von 12 |

**DeRisk**
| Field | EN | DE |
|-------|----|----|
| Name | DeRisk | DeRisk |
| Description | Systemic risk analytics for institutional investors | Systemische Risikoanalyse für institutionelle Investoren |
| Role | Co-Founder & CEO | Co-Founder & CEO |
| Period | 2021 – 2022 | 2021 – 2022 |
| Badge | Venture | Venture |
| Metric | NBIM · Barings · CCLA | NBIM · Barings · CCLA |

**Digital Partners**
| Field | EN | DE |
|-------|----|----|
| Name | Digital Partners | Digital Partners |
| Description | IoT consulting & venture building for industrial clients | IoT-Beratung & Venture Building für Industriekunden |
| Role | Founder & CEO | Gründer & CEO |
| Period | 2015 – 2022 | 2015 – 2022 |
| Badge | Venture | Venture |
| Metric | 30+ projects · 10-person team | 30+ Projekte · 10-köpfiges Team |

**Buena**
| Field | EN | DE |
|-------|----|----|
| Name | Buena | Buena |
| Description | Proptech marketplace — automated rental contract generation | Proptech-Marktplatz — automatisierte Mietvertragserstellung |
| Role | Senior Product Manager | Senior Product Manager |
| Period | 2020 | 2020 |
| Badge | Contract | Auftrag |
| Metric | <5% → 100% automation | <5% → 100% Automatisierung |

**Carly**
| Field | EN | DE |
|-------|----|----|
| Name | Carly | Carly |
| Description | Car diagnostics e-commerce — sales funnel optimization | KFZ-Diagnose E-Commerce — Vertriebstrichter-Optimierung  |
| Role | Product Manager | Product Manager |
| Period | 2020 | 2020 |
| Badge | Contract | Auftrag |
| Metric | +25% conversion | +25% Conversion |

**Impactive**
| Field | EN | DE |
|-------|----|----|
| Name | Impactive | Impactive |
| Description | Institutional shareholder engagement platform | Institutionelle Shareholder-Engagement-Plattform |
| Role | Venture Consultant | Venture Consultant |
| Period | 2023 | 2023 |
| Badge | Contract | Auftrag |
| Metric | Strategy & business dev | Strategie & Business Development |

**Rootlocaly**
| Field | EN | DE |
|-------|----|----|
| Name | Rootlocaly | Rootlocaly |
| Description | Local discovery platform — AI-native build showcase | Lokale Entdeckungsplattform — KI-nativer Build-Showcase |
| Role | Builder | Builder |
| Period | 2025 | 2025 |
| Badge | Side Project | Nebenprojekt |
| Metric | AI-native build | KI-nativer Build |

---

## 7. Individual Project Pages (`/projects/[slug]`)

### Template Meta Pattern

| Field                | EN pattern                                        | DE pattern                                   |
| -------------------- | ------------------------------------------------- | -------------------------------------------- |
| `<title>`            | [Project] — David Hamel                           | [Projekt] — David Hamel                      |
| `<meta description>` | [One sentence about the project and David's role] | [Ein Satz über das Projekt und Davids Rolle] |

### 6a. Alba Wealth (`/projects/alba-wealth`)

`[IMAGE: Alba Wealth product screenshot or interface mockup]`

**EN:**

Headline: Alba Wealth
Tagline: AI-powered financial planning for expats in Germany.

Metadata:

> Founder · 2025 – present · Own venture · Berlin

Overview:

> Alba Wealth is an AI-powered financial planning platform I'm building for English-speaking expats in Germany. It models your full financial life — income, expenses, tax, insurance, investments, pension — and helps you make better decisions with data instead of guesswork.
>
> The platform combines personal financial coaching with AI tools that run scenarios, identify gaps, and generate actionable plans. It's the tool I wish had existed when I moved to Germany and couldn't find honest, independent financial guidance.

Key metrics:

> - Active development since January 2025
> - AI-native tech stack (Next.js, Claude, TypeScript)
> - Combines coaching practice with technology platform

What I do:

> Everything. Product strategy, UX design, full-stack development, financial modeling, customer research, and coaching. This is a solo founder venture where I build the product and serve the clients simultaneously — using the direct feedback from coaching to improve the platform.

Tech:

> Next.js · TypeScript · Tailwind · Claude AI · Supabase · Vercel

**DE:**

Headline: Alba Wealth
Tagline: KI-gestützte Finanzplanung für Expats in Deutschland.

Metadaten:

> Gründer · 2025 – heute · Eigenes Venture · Berlin

Überblick:

> Alba Wealth ist eine KI-gestützte Finanzplanungsplattform, die ich für englischsprachige Expats in Deutschland baue. Sie modelliert dein gesamtes finanzielles Leben — Einkommen, Ausgaben, Steuern, Versicherungen, Investitionen, Rente — und hilft dir, bessere Entscheidungen auf Basis von Daten zu treffen statt auf Vermutungen.
>
> Die Plattform verbindet persönliches Finanzcoaching mit KI-Tools, die Szenarien durchspielen, Lücken identifizieren und umsetzbare Pläne erstellen. Es ist das Tool, das ich mir gewünscht hätte, als ich nach Deutschland zog und keine ehrliche, unabhängige Finanzberatung finden konnte.

Kennzahlen:

> - In aktiver Entwicklung seit Januar 2025
> - KI-nativer Tech Stack (Next.js, Claude, TypeScript)
> - Verbindet Coaching-Praxis mit Technologieplattform

Was ich mache:

> Alles. Produktstrategie, UX-Design, Full-Stack-Entwicklung, Finanzmodellierung, Kundenforschung und Coaching. Dies ist ein Solo-Founder-Venture, bei dem ich das Produkt baue und gleichzeitig die Kunden betreue — und das direkte Feedback aus dem Coaching nutze, um die Plattform zu verbessern.

Tech:

> Next.js · TypeScript · Tailwind · Claude AI · Supabase · Vercel

---

### 6b. Ziggma (`/projects/ziggma`)

`[IMAGE: Ziggma dashboard screenshot or logo]`

**EN:**

Headline: Ziggma
Tagline: Portfolio management for smarter retail investors.

Metadata:

> Co-Founder & COO · 2023 – 2024 · Own venture · Berlin

Overview:

> Ziggma is a portfolio management SaaS for retail investors, offering algorithmic stock analysis and portfolio tracking. As Co-Founder and COO, I was responsible for fundraising, product strategy, operations, and business intelligence.
>
> We built a cloud-based, API-intensive B2C wealth app that grew to 35,000 users with €1.5 billion in linked assets and €10,000 in monthly recurring revenue.

Key metrics:

> - 35,000 users
> - €1.5bn in linked assets
> - €10k MRR
> - Cloud-based, API-intensive platform

What I did:

> Co-founded and led operations as COO. Responsible for fundraising, product strategy, business intelligence, and day-to-day operations. Developed the product roadmap, managed partnerships, and built the data pipeline infrastructure.

**DE:**

Headline: Ziggma
Tagline: Portfoliomanagement für klügere Privatanleger.

Metadaten:

> Co-Founder & COO · 2023 – 2024 · Eigenes Venture · Berlin

Überblick:

> Ziggma ist eine Portfoliomanagement-SaaS für Privatanleger mit algorithmischer Aktienanalyse und Portfolio-Tracking. Als Co-Founder und COO war ich verantwortlich für Fundraising, Produktstrategie, Operations und Business Intelligence.
>
> Wir bauten eine cloudbasierte, API-intensive B2C-Wealth-App, die auf 35.000 Nutzer mit €1,5 Milliarden verknüpften Assets und €10.000 monatlich wiederkehrendem Umsatz wuchs.

Kennzahlen:

> - 35.000 Nutzer
> - €1,5 Mrd. verknüpfte Assets
> - €10.000 MRR
> - Cloudbasierte, API-intensive Plattform

Was ich gemacht habe:

> Mitgegründet und als COO operativ geleitet. Verantwortlich für Fundraising, Produktstrategie, Business Intelligence und Tagesgeschäft. Produktroadmap entwickelt, Partnerschaften gemanagt und Datenpipeline-Infrastruktur aufgebaut.

---

### 6c. DeRisk (`/projects/derisk`)

**EN:**

Headline: DeRisk
Tagline: Systemic risk analytics for the world's largest asset managers.

Metadata:

> Co-Founder & CEO · 2021 – 2022 · Own venture · London / Berlin

Overview:

> DeRisk was a SaaS platform for institutional investors to manage portfolio relationships and systemic risks. We built a financial research and shareholder engagement tool and piloted it with some of the world's largest asset managers — including NBIM (Norway's sovereign wealth fund), Barings, and CCLA — together overseeing more than €1.5 trillion in assets under management.

Key metrics:

> - Pilot clients: NBIM, Barings, CCLA
> - > €1.5 trillion AUM represented
> - Enterprise SaaS for institutional investors

What I did:

> Co-founded and led as CEO. Responsible for product strategy, go-to-market, and business development. Designed the platform architecture, led institutional sales conversations, and managed the product development process from zero to pilot.

**DE:**

Headline: DeRisk
Tagline: Systemische Risikoanalyse für die größten Vermögensverwalter der Welt.

Metadaten:

> Co-Founder & CEO · 2021 – 2022 · Eigenes Venture · London / Berlin

Überblick:

> DeRisk war eine SaaS-Plattform für institutionelle Investoren zur Verwaltung von Portfolio-Beziehungen und systemischen Risiken. Wir bauten ein Tool für Finanzforschung und Shareholder Engagement und pilotierten es mit einigen der größten Vermögensverwalter der Welt — darunter NBIM (Norwegens Staatsfonds), Barings und CCLA — die zusammen über €1,5 Billionen an verwaltetem Vermögen betreuen.

Kennzahlen:

> - Pilotkunden: NBIM, Barings, CCLA
> - > €1,5 Billionen AUM vertreten
> - Enterprise SaaS für institutionelle Investoren

Was ich gemacht habe:

> Mitgegründet und als CEO geleitet. Verantwortlich für Produktstrategie, Go-to-Market und Business Development. Plattformarchitektur entworfen, institutionelle Vertriebsgespräche geführt und den Produktentwicklungsprozess von Null bis zum Piloten gemanagt.

---

### 6d. Digital Partners (`/projects/digital-partners`)

**EN:**

Headline: Digital Partners
Tagline: My first company. Six years of IoT consulting and venture building.

Metadata:

> Founder & CEO · 2015 – 2022 · Own venture · Berlin / San Francisco

Overview:

> Digital Partners was a digital strategy and venture building consultancy I founded right out of university. We helped industrial clients adopt IT and IoT solutions, operating across Germany, the USA, and the Middle East.
>
> Over six years, we executed 30+ projects for clients including Viessmann, Porsche, and Körber. I built a team of seven engineers and three consulting partners, and the company evolved from a B2B matching platform for Industry 4.0 into a full consulting practice — which led directly to engagements like Porsche Digital Lab.

Key metrics:

> - 30+ IT/IoT projects delivered
> - Clients: Viessmann, Porsche, Körber
> - Team: 7 engineers + 3 consulting partners
> - Offices: Berlin + San Francisco
> - 6 years of operation

What I did:

> Founded and led the company. Responsible for strategy, business development, client relationships, hiring, and operations. Sourced and managed technology partnerships, led client workshops, and oversaw project delivery across industries including automotive, manufacturing, and mechanical engineering.

**DE:**

Headline: Digital Partners
Tagline: Mein erstes Unternehmen. Sechs Jahre IoT-Beratung und Venture Building.

Metadaten:

> Gründer & CEO · 2015 – 2022 · Eigenes Venture · Berlin / San Francisco

Überblick:

> Digital Partners war eine Digital-Strategie- und Venture-Building-Beratung, die ich direkt nach dem Studium gründete. Wir halfen Industriekunden bei der Einführung von IT- und IoT-Lösungen und waren in Deutschland, den USA und dem Mittleren Osten tätig.
>
> Über sechs Jahre führten wir 30+ Projekte für Kunden wie Viessmann, Porsche und Körber durch. Ich baute ein Team aus sieben Entwicklern und drei Beratungspartnern auf, und das Unternehmen entwickelte sich von einer B2B-Matching-Plattform für Industrie 4.0 zu einer vollständigen Beratungspraxis — die direkt zu Engagements wie dem Porsche Digital Lab führte.

Kennzahlen:

> - 30+ IT/IoT-Projekte umgesetzt
> - Kunden: Viessmann, Porsche, Körber
> - Team: 7 Entwickler + 3 Beratungspartner
> - Büros: Berlin + San Francisco
> - 6 Jahre Betrieb

Was ich gemacht habe:

> Gegründet und geleitet. Verantwortlich für Strategie, Business Development, Kundenbeziehungen, Einstellungen und Operations. Technologiepartnerschaften aufgebaut und gemanagt, Kundenworkshops geleitet und Projektdurchführung in Branchen wie Automotive, Fertigung und Maschinenbau verantwortet.

---

### 6e. Porsche Digital Lab (`/projects/porsche-digital-lab`)

**EN:**

Headline: Porsche Digital Lab
Tagline: Blockchain app for classic car provenance. €6.5M in funding.

Metadata:

> Product Owner · 2018 · Contract (via Digital Partners) · Berlin

Overview:

> At Porsche Digital Lab, I led a blockchain-based product for documenting classic car provenance — creating a digital identity and verified history for collector vehicles. I took the project from prototype to full product, helped secure €6.5 million in funding, and built and managed a team of 12 engineers and designers.

Key metrics:

> - €6.5M funding secured
> - Team of 12 (engineering + design)
> - Prototype → full product
> - Blockchain-based digital identity for classic cars

What I did:

> Served as Product Owner. Validated and scaled the prototype to a full product. Led hiring and managed the engineering and design team. Defined the product roadmap, ran sprint planning, and coordinated with Porsche Digital stakeholders to align the product vision with the broader digital strategy.

**DE:**

Headline: Porsche Digital Lab
Tagline: Blockchain-App für Klassiker-Herkunft. €6,5 Mio. Finanzierung.

Metadaten:

> Product Owner · 2018 · Auftrag (über Digital Partners) · Berlin

Überblick:

> Beim Porsche Digital Lab leitete ich ein Blockchain-basiertes Produkt zur Dokumentation der Herkunft klassischer Autos — eine digitale Identität und verifizierte Geschichte für Sammlerfahrzeuge. Ich führte das Projekt vom Prototyp zum fertigen Produkt, half bei der Sicherung von €6,5 Millionen Finanzierung und baute ein Team von 12 Entwicklern und Designern auf.

Kennzahlen:

> - €6,5 Mio. Finanzierung gesichert
> - Team von 12 (Engineering + Design)
> - Prototyp → fertiges Produkt
> - Blockchain-basierte digitale Identität für Oldtimer

Was ich gemacht habe:

> Product Owner. Prototyp validiert und zum vollen Produkt skaliert. Einstellungen geleitet und das Engineering- und Design-Team gemanagt. Produkt-Roadmap definiert, Sprint Planning durchgeführt und mit Porsche Digital-Stakeholdern koordiniert, um die Produktvision mit der übergreifenden Digitalstrategie abzustimmen.

---

### 6f. Buena (`/projects/buena`)

**EN:**

Headline: Buena
Tagline: Automating rental contracts from 5% to 100%.

Metadata:

> Senior Product Manager · 2020 · Contract · Berlin

Overview:

> Buena (Home HT GmbH) was building an online marketplace for tenants and landlords. I came on as Senior Product Manager to automate their core workflow — rental contract generation — which at the time worked for less than 5% of cases. I rebuilt the process to handle 100% of contract scenarios and established agile processes for a development team of nine.

Key metrics:

> - Contract automation: <5% → 100%
> - Development team of 9
> - Agile processes established from scratch

What I did:

> Led the product function. Mapped the existing contract generation workflow, identified failure points, and redesigned the system to handle all edge cases. Introduced agile development processes, established the product roadmap, and worked closely with engineering to ship weekly.

**DE:**

Headline: Buena
Tagline: Mietvertragsautomatisierung von 5% auf 100%.

Metadaten:

> Senior Product Manager · 2020 · Auftrag · Berlin

Überblick:

> Buena (Home HT GmbH) baute einen Online-Marktplatz für Mieter und Vermieter. Ich kam als Senior Product Manager, um den Kern-Workflow — die Mietvertragserstellung — zu automatisieren, die damals in weniger als 5% der Fälle funktionierte. Ich habe den Prozess so umgebaut, dass 100% der Vertragsvarianten abgedeckt werden, und agile Prozesse für ein neunköpfiges Entwicklungsteam eingeführt.

Kennzahlen:

> - Vertragsautomatisierung: <5% → 100%
> - Entwicklungsteam von 9
> - Agile Prozesse von Grund auf etabliert

Was ich gemacht habe:

> Produktfunktion geleitet. Bestehenden Vertragserstellungs-Workflow analysiert, Fehlerquellen identifiziert und das System neu designt. Agile Entwicklungsprozesse eingeführt, Produkt-Roadmap aufgebaut und eng mit dem Engineering zusammengearbeitet, um wöchentlich zu liefern.

---

### 6g. Carly (`/projects/carly`)

**EN:**

Headline: Carly
Tagline: 25% more conversions through product-led sales.

Metadata:

> Product Manager · 2020 · Contract · Munich

Overview:

> Carly (Carly Connected Car / Carly Solutions GmbH) builds car diagnostics tools for consumers. I joined as Product Manager to improve online sales performance. I built a new web funnel that increased sales conversion by 25%, established an agile product organization, and set up their analytics and business intelligence infrastructure.

Key metrics:

> - +25% sales conversion
> - Agile product org created
> - Analytics & BI infrastructure from scratch

What I did:

> Led product for the e-commerce function. Designed and built a new sales funnel, analyzed user behavior data to identify drop-off points, and implemented changes that increased conversion by 25%. Established the agile product organization and built the analytics stack (BI setup, event tracking, funnel analysis).

**DE:**

Headline: Carly
Tagline: 25% mehr Conversions durch produktgeführten Vertrieb.

Metadaten:

> Product Manager · 2020 · Auftrag · München

Überblick:

> Carly (Carly Connected Car / Carly Solutions GmbH) baut KFZ-Diagnosetools für Endkunden. Ich kam als Product Manager, um die Online-Vertriebsleistung zu verbessern. Ich baute einen neuen Web-Funnel, der die Kaufkonversion um 25% steigerte, etablierte eine agile Produktorganisation und richtete die Analytics- und Business-Intelligence-Infrastruktur ein.

Kennzahlen:

> - +25% Kaufkonversion
> - Agile Produktorganisation aufgebaut
> - Analytics- & BI-Infrastruktur von Grund auf

Was ich gemacht habe:

> Produkt für die E-Commerce-Funktion geleitet. Neuen Kauftrichter designed und gebaut, Nutzerverhalten analysiert, Abbruchpunkte identifiziert und Änderungen umgesetzt, die die Konversion um 25% steigerten. Agile Produktorganisation etabliert und Analytics-Stack aufgebaut (BI-Setup, Event-Tracking, Funnel-Analyse).

---

### 6h. Impactive (`/projects/impactive`)

**EN:**

Headline: Impactive
Tagline: Strategy consulting for institutional shareholder engagement.

Metadata:

> Venture Consultant · 2023 · Contract · London

Overview:

> Impactive Tech builds a SaaS platform for institutional investors to manage asset management stewardship and shareholder engagement. I consulted on product strategy and business development, helping shape the platform's positioning and growth approach for the institutional investor market.

What I did:

> Advised on strategy and business development. Worked with the founding team to refine the product positioning for institutional buyers, developed the go-to-market strategy, and contributed to business development efforts targeting asset managers and institutional investors.

**DE:**

Headline: Impactive
Tagline: Strategieberatung für institutionelles Shareholder Engagement.

Metadaten:

> Venture Consultant · 2023 · Auftrag · London

Überblick:

> Impactive Tech baut eine SaaS-Plattform für institutionelle Investoren zur Verwaltung von Asset-Management-Stewardship und Shareholder Engagement. Ich beriet zu Produktstrategie und Business Development und half bei der Positionierung und Wachstumsstrategie für den institutionellen Investorenmarkt.

Was ich gemacht habe:

> Strategie- und Business-Development-Beratung. Mit dem Gründerteam die Produktpositionierung für institutionelle Käufer verfeinert, Go-to-Market-Strategie entwickelt und zu Business-Development-Aktivitäten für Vermögensverwalter und institutionelle Investoren beigetragen.

---

### 6i. Rootlocaly (`/projects/rootlocaly`)

**EN:**

Headline: Rootlocaly
Tagline: A side project built with AI — from idea to live app.

Metadata:

> Builder · 2025 · Side project

Overview:

> Rootlocaly is a local events discovery platform I built as a side project to learn AI-native development workflows. It's a showcase of what's possible when you combine product thinking with tools like Claude Code — going from idea to deployed app in days, not months.
>
> This project demonstrates the same approach I use for client builds: fast iteration, modern stack, product-first thinking.

What I did:

> Designed and built the entire application from scratch using AI-native development tools. Concept, UX, full-stack development, and deployment — all done solo using Claude Code.

**DE:**

Headline: Rootlocaly
Tagline: Ein Nebenprojekt, gebaut mit KI — von der Idee zur Live-App.

Metadaten:

> Builder · 2025 · Nebenprojekt

Überblick:

> Rootlocaly ist eine lokale Event-Entdeckungsplattform, die ich als Nebenprojekt gebaut habe, um KI-native Entwicklungsworkflows zu lernen. Es ist ein Showcase dessen, was möglich ist, wenn man Produktdenken mit Tools wie Claude Code verbindet — von der Idee zur deployed App in Tagen, nicht Monaten.
>
> Dieses Projekt zeigt denselben Ansatz, den ich für Kunden-Builds verwende: schnelle Iteration, moderner Stack, produktzuerst-Denken.

Was ich gemacht habe:

> Die gesamte Anwendung von Grund auf mit KI-nativen Entwicklungstools designed und gebaut. Konzept, UX, Full-Stack-Entwicklung und Deployment — alles solo mit Claude Code.

---

### Project Page Navigation (all project pages)

| Element      | EN                             | DE                                   |
| ------------ | ------------------------------ | ------------------------------------ |
| Back link    | ← All Projects                 | ← Alle Projekte                      |
| Next project | Next: [Project Name] →         | Nächstes: [Projektname] →            |
| CTA heading  | Want to work together?         | Zusammenarbeiten?                    |
| CTA text     | Let's talk about your project. | Lass uns über dein Projekt sprechen. |
| CTA button   | Book a Call →                  | Gespräch buchen →                    |

---

## 8. Blog Listing (`/blog`)

### Meta

| Field                | EN                                                                                                  | DE                                                                                                              |
| -------------------- | --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- |
| `<title>`            | Blog — David Hamel                                                                                  | Blog — David Hamel                                                                                              |
| `<meta description>` | Writing on expat finance, product building, AI development, and designing a life on your own terms. | Texte über Expat-Finanzen, Produktentwicklung, KI-Development und die Gestaltung eines selbstbestimmten Lebens. |

### Hero

**EN:**

Headline:

> Writing

Subheadline:

> Thoughts on money, building, and living abroad.

**DE:**

Headline:

> Blog

Subheadline:

> Gedanken über Geld, Bauen und Leben im Ausland.

### Pillar Filter Labels

| EN                  | DE                  |
| ------------------- | ------------------- |
| All                 | Alle                |
| Expat Money         | Expat-Finanzen      |
| Systems & Money     | Systeme & Geld      |
| Building Alba       | Building Alba       |
| Freedom by Design   | Freedom by Design   |
| Practitioner's Edge | Practitioner's Edge |

_Newsletter CTA section removed. Newsletter signup only lives in the footer._

---

## 9. Blog Post Template (`/blog/[slug]`)

### Author Bio (bottom of every post)

**EN:**

> **David Hamel** is an independent financial planning coach, product leader, and builder based in Germany and Portugal. He coaches expats through German finances, leads product for startups, and builds apps for businesses.

Link: More about David →

**DE:**

> **David Hamel** ist unabhängiger Finanzcoach, Produktführer und Builder in Deutschland und Portugal. Er coacht Expats durch das deutsche Finanzsystem, leitet Produkte für Startups und baut Apps für Unternehmen.

Link: Mehr über David →

_Inline newsletter CTA section removed. Newsletter signup only lives in the footer._

### Navigation

| Element         | EN              | DE                   |
| --------------- | --------------- | -------------------- |
| Previous        | ← Previous post | ← Vorheriger Beitrag |
| Next            | Next post →     | Nächster Beitrag →   |
| Related heading | Related posts   | Ähnliche Beiträge    |

---

## 10. Adventures (`/adventures`)

### Meta

| Field                | EN                                                                           | DE                                                                       |
| -------------------- | ---------------------------------------------------------------------------- | ------------------------------------------------------------------------ |
| `<title>`            | Adventures — David Hamel                                                     | Abenteuer — David Hamel                                                  |
| `<meta description>` | Surf, dive, travel. Photos from 15+ countries and a life spent in the ocean. | Surfen, Tauchen, Reisen. Fotos aus 15+ Ländern und einem Leben im Ozean. |

### Hero

**EN:**

Headline:

> Adventures

(No subtitle)

**DE:**

Headline:

> Abenteuer

(No subtitle)

### Category Labels

| EN       | DE        |
| -------- | --------- |
| All      | Alle      |
| Surf     | Surf      |
| Freedive | Freedive  |
| Kite     | Kite      |
| Snow     | Snow      |
| Travel   | Travel    |

---

## 11. Contact (`/contact`)

### Meta

| Field                | EN                                                                                                              | DE                                                                                                                          |
| -------------------- | --------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------- |
| `<title>`            | Contact — David Hamel                                                                                           | Kontakt — David Hamel                                                                                                       |
| `<meta description>` | Book a free consultation or get in touch. Financial coaching for expats, product leadership for startups, app development for businesses. | Buche ein kostenloses Erstgespräch oder nimm Kontakt auf. Finanzcoaching für Expats, Produktführung für Startups, App-Entwicklung für Unternehmen. |

### Content

**EN:**

Headline:

> Let's talk.

Subheadline:

> Whether you need financial coaching, product leadership, or someone to build your next project — the first conversation is free.

Calendly heading:

> Book a 30-minute consultation

Direct contact heading:

> Or reach me directly

> Email: hello@davidhamel.co
> LinkedIn: linkedin.com/in/david-hamel-11baa841

**DE:**

Headline:

> Lass uns sprechen.

Subheadline:

> Ob du Finanzcoaching brauchst, Produktführung oder jemanden, der dein nächstes Projekt baut — das erste Gespräch ist kostenlos.

Calendly heading:

> Buche ein 30-minütiges Gespräch

Direct contact heading:

> Oder schreib mir direkt

> E-Mail: hello@davidhamel.co
> LinkedIn: linkedin.com/in/david-hamel-11baa841

---

## 12. Legal Pages

### Impressum (`/impressum`)

(German-only, required by law. Content depends on final business registration details.)

```
Impressum

David Hamel
[Geschäftsadresse]
[Stadt, PLZ]

Telefon: +49 176 982 440 76
E-Mail: hello@davidhamel.co

[Umsatzsteuer-Identifikationsnummer, wenn vorhanden]
[Zuständige Aufsichtsbehörde, wenn zutreffend]

Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV:
David Hamel
[Adresse wie oben]
```

### Datenschutz (`/datenschutz`)

(German legal requirement. Key sections to cover:)

- Verantwortlicher (David Hamel, Kontaktdaten)
- Hosting (Vercel, Inc.)
- Analytics (Umami Cloud — no cookies, no personal data, GDPR-compliant)
- Newsletter (Resend — email address stored for newsletter delivery, opt-out anytime)
- Calendly (embedded scheduling — link to Calendly's privacy policy)
- Contact form (data processing for inquiry handling)
- Rights of data subjects (access, deletion, correction, objection)

(Full legal text to be drafted or generated based on final service setup.)

---

## Photo Shot List

Summary of all images needed across the site. Gather these after copy is finalized.

| Location                 | Description                                        | Required             | Priority |
| ------------------------ | -------------------------------------------------- | -------------------- | -------- |
| Homepage hero            | Could be text-only or subtle background texture    | Optional             | Low      |
| About hero               | Portrait photo, warm-white bg, grayscale, lg:max-w-[280px] | **Yes**     | **High** |
| About story (inline)     | 1-2 photos from travels/working life (optional)    | Optional             | Medium   |
| Coaching hero            | Could be text-only or lifestyle shot               | Optional             | Medium   |
| Alba Wealth project page | Product screenshot or interface mockup             | **Yes**              | **High** |
| Ziggma project page      | Dashboard screenshot or product visual             | Nice to have         | Medium   |
| Porsche project page     | Porsche Digital Lab logo or product visual         | Nice to have         | Medium   |
| Other project pages      | Company logos or product screenshots               | Nice to have         | Low      |
| Adventures               | 10-20 personal photos (surf, dive, travel)         | **Yes** (for launch) | **High** |
| Blog post images         | Per-post hero images                               | Per post             | Ongoing  |

**Minimum for launch:** 2 headshots + 10 adventure photos + 1 Alba Wealth screenshot = 13 images.

---

_This copy deck is the source of truth for all website text. Update it when copy changes are made._
