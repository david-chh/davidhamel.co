# Copy Deck — davidhamel.co

> Production-ready copy for every page, section, and component. EN + DE.
> Follows the structure defined in `docs/information-architecture.md`.
>
> **Convention:** Each section shows English first, then German.
> Photo/image placeholders marked with `[IMAGE: description]`.
>
> Last updated: 2026-02-17 (v2 — Three-service split)

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
| Column 1 link 4        | Book a Call                                     | Gespräch buchen                              |
| Column 2 heading       | Explore                                         | Entdecken                                    |
| Column 2 link 1        | Blog                                            | Blog                                         |
| Column 2 link 2        | Projects                                        | Projekte                                     |
| Column 2 link 3        | Adventures                                      | Abenteuer                                    |
| Column 2 link 4        | About                                           | Über mich                                    |
| Column 3 heading       | Connect                                         | Kontakt                                      |
| Column 3 link 1        | Email                                           | E-Mail                                       |
| Column 3 link 2        | LinkedIn                                        | LinkedIn                                     |
| Column 3 link 3        | GitHub                                          | GitHub                                       |
| Newsletter heading     | Insights on money, building, and living abroad. | Impulse zu Geld, Bauen und Leben im Ausland. |
| Newsletter subtext     | No spam. Unsubscribe anytime.                   | Kein Spam. Jederzeit abbestellbar.           |
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

### Section 3: Who I Am

`[IMAGE: Headshot — professional but approachable, natural light]`

**EN:**

> I'm David — an independent financial planning coach and product builder based in Berlin. I've lived and worked across 15+ countries, built fintech products used by tens of thousands of people, and led product teams at places like Porsche Digital Lab.
>
> Today I coach expats through the German financial system, provide product leadership to startups, and build apps and websites for businesses — with a particular focus on fintech and financial services.

Link: More about me →

**DE:**

> Ich bin David — unabhängiger Finanzcoach und Product Builder in Berlin. Ich habe in über 15 Ländern gelebt und gearbeitet, Fintech-Produkte für Zehntausende Nutzer gebaut und Produktteams unter anderem beim Porsche Digital Lab geleitet.
>
> Heute coache ich Expats durch das deutsche Finanzsystem, biete Startups Produktführung und baue Apps und Websites für Unternehmen — mit besonderem Fokus auf Fintech und Finanzdienstleistungen.

Link: Mehr über mich →

### Section 4: Selected Work

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
| One-liner | IoT consulting & venture building — 27 projects delivered | IoT-Beratung & Venture Building — 27 Projekte umgesetzt |
| Role | Founder & CEO | Gründer & CEO |
| Metric | 7 engineers, 3 partners | 7 Entwickler, 3 Partner |
| Badge | Venture | Venture |

Link below cards:

| EN                  | DE                      |
| ------------------- | ----------------------- |
| View all projects → | Alle Projekte ansehen → |

### Section 5: Latest from the Blog

Section heading:

| EN                   | DE               |
| -------------------- | ---------------- |
| Latest from the Blog | Neueste Beiträge |

(Blog cards are dynamic — pulled from Content Collections. No static copy needed.)

Link below cards:

| EN               | DE                    |
| ---------------- | --------------------- |
| Read all posts → | Alle Beiträge lesen → |

### Section 6: Newsletter Signup

**EN:**

Heading:

> Insights on money, building, and living abroad.

Subtext:

> I write about expat finance, product building, and designing a life on your own terms. No spam, no fluff — just honest thinking.

Placeholder: Your email address
Button: Subscribe →

**DE:**

Heading:

> Impulse zu Geld, Bauen und Leben im Ausland.

Subtext:

> Ich schreibe über Expat-Finanzen, Produktentwicklung und ein selbstbestimmtes Leben. Kein Spam, kein Blabla — ehrliche Gedanken.

Placeholder: Deine E-Mail-Adresse
Button: Abonnieren →

---

## 2. About (`/about`)

### Meta

| Field                | EN                                                                                                                                                                | DE                                                                                                                                                          |
| -------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `<title>`            | About — David Hamel                                                                                                                                               | Über mich — David Hamel                                                                                                                                     |
| `<meta description>` | The story behind the financial planning coach and product builder. From Rotterdam to San Francisco to Berlin — via 15+ countries, 4 startups, and a lot of ocean. | Die Geschichte hinter dem Finanzcoach und Product Builder. Von Rotterdam über San Francisco nach Berlin — über 15+ Länder, 4 Startups und jede Menge Ozean. |

### Section 1: Hero / Intro

`[IMAGE: Full or half-width headshot — different from homepage, more personal/candid]`

**EN:**

Headline:

> About

Opening:

> I grew up in a small town in northern Germany. It was a great place to be a kid — but I always knew there was a bigger world out there.
>
> So as soon as I could, I left to find it.

**DE:**

Headline:

> Über mich

Opening:

> Ich bin in einer Kleinstadt in Norddeutschland aufgewachsen. Es war ein toller Ort zum Aufwachsen — aber ich wusste immer, dass es eine größere Welt da draußen gibt.
>
> Also bin ich losgezogen, sobald ich konnte.

### Section 2: The Story

**EN:**

> I spent a year kitesurfing, surfing, and exploring — from Egypt to Brazil, Argentina to Fiji, Thailand to New Zealand. Traveling through so many countries showed me one thing clearly: international business, economics, and finance are the systems that shape our global world. Understanding how those systems work is what pulled me in — and what I decided to study.
>
> I studied International Business Administration at Rotterdam School of Management, graduated Cum Laude, then completed my MSc in Finance and Investments — with semesters at EDHEC in Nice and SMU in Singapore. After a stint in commodities trade finance at ABN Amro in Amsterdam, I knew I wanted to build things — not analyze them from a desk.
>
> So I started my first company. [Digital Partners](/projects/digital-partners) was a digital strategy and IoT consulting firm. Over six years, we executed 27 projects for industrial clients like Viessmann, Porsche, and Körber, building a team of seven engineers and three consulting partners across Berlin and San Francisco. During that time, I also took on product roles at [Porsche Digital Lab](/projects/porsche-digital-lab) — where I led a blockchain product for classic car provenance and helped secure €6.5M in funding — and at [Carly](/projects/carly) and [Buena](/projects/buena), where I built sales funnels and automated contract workflows.
>
> In late 2021, I joined Antler's Entrepreneur in Residence program in Berlin. That's where the idea for [DeRisk](/projects/derisk) crystallized — a platform for institutional investors to manage portfolio relationships and systemic risk. We built the product and piloted it with asset managers overseeing more than €1.5 trillion, including NBIM, Barings, and CCLA.
>
> After DeRisk, I joined [Ziggma](/projects/ziggma) as Co-Founder and COO — a portfolio management platform for retail investors that was already gaining traction. We grew it to 35,000 users and €1.5 billion in linked assets. During that period, I also consulted for [Impactive](/projects/impactive) on strategy for their institutional shareholder engagement platform.
>
> But here's what I kept noticing: the people around me — smart, well-earning professionals — had no idea what to do with their money. Especially the expats. The German financial system is complex, opaque, and overwhelmingly in German. Most advisors earn commissions, which means they're incentivized to sell you products, not solve your problems.
>
> I decided to change that. I became an independent, fee-based financial planning coach and started building [Alba Wealth](/projects/alba-wealth) — an AI-powered planning tool — because I believe technology can make good financial planning accessible to everyone, not just the wealthy.
>
> Today, I split my time between coaching expat clients one-on-one and building the tools I wish had existed when I was figuring this out myself.
>
> When I'm not working on money, I'm most likely in the ocean.

**DE:**

> Ich habe ein Jahr lang gekitesurft, gesurft und die Welt erkundet — von Ägypten über Brasilien, Argentinien bis Fidschi, Thailand bis Neuseeland. Das Reisen durch so viele Länder hat mir eines klar gezeigt: Internationales Business, Volkswirtschaft und Finanzen sind die Systeme, die unsere globale Welt formen. Zu verstehen, wie diese Systeme funktionieren, hat mich gepackt — und das wollte ich studieren.
>
> Ich studierte International Business Administration an der Rotterdam School of Management, schloss mit Cum Laude ab und machte dann meinen MSc in Finance and Investments — mit Semestern an der EDHEC in Nizza und der SMU in Singapur. Nach einer Zeit im Commodities Trade Finance bei ABN Amro in Amsterdam wusste ich: Ich will Dinge bauen — nicht vom Schreibtisch aus analysieren.
>
> Also gründete ich mein erstes Unternehmen. [Digital Partners](/projects/digital-partners) war eine Beratung für digitale Strategie und IoT. Über sechs Jahre haben wir 27 Projekte für Industriekunden wie Viessmann, Porsche und Körber umgesetzt und ein Team aus sieben Entwicklern und drei Beratungspartnern in Berlin und San Francisco aufgebaut. In dieser Zeit übernahm ich auch Produktrollen beim [Porsche Digital Lab](/projects/porsche-digital-lab) — wo ich ein Blockchain-Produkt für die Herkunftsdokumentation klassischer Autos leitete und €6,5 Mio. Finanzierung mitgesichert habe — sowie bei [Carly](/projects/carly) und [Buena](/projects/buena), wo ich Vertriebstrichter baute und Vertragsworkflows automatisierte.
>
> Ende 2021 nahm ich am Entrepreneur in Residence-Programm von Antler in Berlin teil. Dort entstand die Idee für [DeRisk](/projects/derisk) — eine Plattform für institutionelle Investoren zur Verwaltung von Portfolio-Beziehungen und systemischen Risiken. Wir bauten das Produkt und pilotierten es mit Vermögensverwaltern, die über €1,5 Billionen betreuen, darunter NBIM, Barings und CCLA.
>
> Nach DeRisk stieg ich bei [Ziggma](/projects/ziggma) als Co-Founder und COO ein — eine Portfoliomanagement-Plattform für Privatanleger, die bereits Fahrt aufgenommen hatte. Wir wuchsen auf 35.000 Nutzer und €1,5 Milliarden verknüpfte Assets. Parallel beriet ich [Impactive](/projects/impactive) bei der Strategie für ihre institutionelle Shareholder-Engagement-Plattform.
>
> Aber was mir immer wieder auffiel: Die Menschen um mich herum — kluge, gut verdienende Fachkräfte — hatten keine Ahnung, was sie mit ihrem Geld anfangen sollten. Besonders die Expats. Das deutsche Finanzsystem ist komplex, undurchsichtig und überwiegend auf Deutsch. Die meisten Berater verdienen Provisionen, was bedeutet, dass sie einen Anreiz haben, dir Produkte zu verkaufen, nicht deine Probleme zu lösen.
>
> Ich beschloss, das zu ändern. Ich wurde unabhängiger, honorarbasierter Finanzcoach und begann, [Alba Wealth](/projects/alba-wealth) zu bauen — ein KI-gestütztes Planungstool — weil ich glaube, dass Technologie gute Finanzplanung für alle zugänglich machen kann, nicht nur für Wohlhabende.
>
> Heute teile ich meine Zeit zwischen dem persönlichen Coaching von Expat-Kunden und dem Bau der Tools, die ich mir selbst gewünscht hätte, als ich das alles noch herausfinden musste.
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

### Section 4: Languages & Education

**EN:**

Heading:

> Background

> **Languages:** German · English · French · Spanish
>
> **Education:** BSc International Business Administration & MSc Finance and Investments, Rotterdam School of Management (Cum Laude). Exchanges at EDHEC Business School (Nice) and SMU (Singapore).

**DE:**

Heading:

> Hintergrund

> **Sprachen:** Deutsch · Englisch · Französisch · Spanisch
>
> **Ausbildung:** BSc International Business Administration & MSc Finance and Investments, Rotterdam School of Management (Cum Laude). Auslandssemester an der EDHEC Business School (Nizza) und SMU (Singapur).

### Section 5: CTA

**EN:**

> **Need financial coaching?** I help English-speaking professionals in Germany navigate taxes, insurance, investing, and retirement planning — in plain language, with no conflicts of interest.
>
> [Financial Coaching →](/coaching)
>
> **Need product leadership?** I embed with your team part-time to define strategy, build roadmaps, and ship. Eight years of product experience at ventures and startups.
>
> [Product Leadership →](/product)
>
> **Need something built?** I combine product thinking with AI-native development to build apps and websites for businesses — from first brief to live product.
>
> [Build Services →](/build)

**DE:**

> **Brauchst du Finanzcoaching?** Ich helfe englischsprachigen Fachkräften in Deutschland bei Steuern, Versicherungen, Geldanlage und Altersvorsorge — in klarer Sprache, ohne Interessenkonflikte.
>
> [Finanzcoaching →](/de/coaching)
>
> **Brauchst du Produktführung?** Ich arbeite in Teilzeit in deinem Team, um Strategie zu definieren, Roadmaps zu erstellen und zu liefern. Acht Jahre Produkterfahrung bei Ventures und Startups.
>
> [Produktführung →](/de/product)
>
> **Brauchst du einen Builder?** Ich verbinde Produktdenken mit KI-nativem Development, um Apps und Websites für Unternehmen zu bauen — vom ersten Briefing bis zum Live-Produkt.
>
> [Build Services →](/de/build)

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

> Prefer email? Reach me at david.ch.hamel@gmail.com

**DE:**

Heading:

> Bereit für den ersten Schritt?

Subtext:

> Buche ein kostenloses 30-Minuten-Erstgespräch. Wir sprechen über deine Situation, und ich sage dir ehrlich, ob ich helfen kann.

`[CALENDLY EMBED]`

Alternative:

> Lieber per E-Mail? Schreib mir an david.ch.hamel@gmail.com

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

> Senior product leadership, without the full-time hire.

Subheadline:

> I've led product at ventures that reached 35,000 users, secured €6.5M in funding, and served institutional clients managing over €1.5 trillion. I bring that experience to your team — part-time, without the overhead.

CTA:

> Book a Discovery Call →

**DE:**

Headline:

> Erfahrene Produktführung, ohne die Vollzeitstelle.

Subheadline:

> Ich habe Produkte bei Ventures geleitet, die 35.000 Nutzer erreichten, €6,5 Mio. Finanzierung sicherten und institutionelle Kunden mit über €1,5 Billionen betreuten. Diese Erfahrung bringe ich in dein Team — in Teilzeit, ohne den Overhead.

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

Engagement structure:

> Typically 1-2 days per week, 3+ month engagements. Retainer-based, scoped to your needs.

**DE:**

Heading:

> Was du bekommst

> - **Produktstrategie und Roadmapping** — Worauf fokussieren, was bauen, in welcher Reihenfolge
> - **Teamcoaching und Prozessdesign** — Sprint-Struktur, Rituale und Entscheidungsrahmen
> - **Technische Architekturberatung** — Stack-Entscheidungen, Build-vs-Buy, Skalierungsplanung
> - **Stakeholder-Alignment** — Übersetzen zwischen Business, Design und Engineering
> - **Go-to-Market-Support** — Positionierung, Launch-Planung, Erfolgsmetriken

Engagement-Struktur:

> Typischerweise 1-2 Tage pro Woche, ab 3 Monaten. Retainer-basiert, auf deine Bedürfnisse zugeschnitten.

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

> **Assess** — I spend the first 1-2 weeks understanding your product, team, market, and customers. No assumptions, no playbook — I learn your context first.

Step 2:

> **Align** — We define the product strategy, roadmap, and success metrics together. I align stakeholders and make sure everyone is working toward the same outcome.

Step 3:

> **Execute** — I embed with your team and ship. Sprint planning, reviews, and hands-on product work — not just advice from a distance.

FAQ:

> **What does a typical engagement look like?**
> 1-2 days per week, embedded with your team. I attend standups, lead planning, review work, and make product decisions alongside you. Most engagements run 3-6 months.
>
> **How is this different from a consultant?**
> A consultant writes a report and leaves. I embed with your team and ship alongside them. I'm accountable for outcomes, not deliverables.
>
> **What's the time commitment?**
> Flexible. Some clients need 1 day per week, others 2-3. We scope it based on what you actually need.

**DE:**

Heading:

> Wie ich arbeite

Schritt 1:

> **Verstehen** — In den ersten 1-2 Wochen lerne ich dein Produkt, Team, den Markt und deine Kunden kennen. Keine Annahmen, kein Standardansatz — ich verstehe zuerst deinen Kontext.

Schritt 2:

> **Ausrichten** — Wir definieren gemeinsam Produktstrategie, Roadmap und Erfolgsmetriken. Ich bringe Stakeholder auf eine Linie und stelle sicher, dass alle auf dasselbe Ziel hinarbeiten.

Schritt 3:

> **Umsetzen** — Ich arbeite in deinem Team mit und liefere. Sprint Planning, Reviews und praktische Produktarbeit — nicht nur Ratschläge aus der Ferne.

FAQ:

> **Wie sieht ein typisches Engagement aus?**
> 1-2 Tage pro Woche, eingebettet in dein Team. Ich nehme an Standups teil, leite Plannings, reviewe Arbeit und treffe Produktentscheidungen gemeinsam mit dir. Die meisten Engagements laufen 3-6 Monate.
>
> **Wie unterscheidet sich das von Beratung?**
> Ein Berater schreibt einen Report und geht. Ich arbeite in deinem Team mit und liefere gemeinsam. Ich bin verantwortlich für Ergebnisse, nicht für Deliverables.
>
> **Was ist der Zeitaufwand?**
> Flexibel. Manche Kunden brauchen 1 Tag pro Woche, andere 2-3. Wir definieren den Umfang basierend auf dem, was du tatsächlich brauchst.

### Section 6: CTA

**EN:**

Heading:

> Let's talk about your product.

Subtext:

> Book a free discovery call. We'll discuss your product challenges and I'll tell you honestly whether I'm the right fit.

CTA: Book a Discovery Call →

Alternative: Or email me at david.ch.hamel@gmail.com

**DE:**

Heading:

> Lass uns über dein Produkt sprechen.

Subtext:

> Buche ein kostenloses Discovery Call. Wir besprechen deine Produktherausforderungen und ich sage dir ehrlich, ob ich der richtige bin.

CTA: Discovery Call buchen →

Alternative: Oder schreib mir an david.ch.hamel@gmail.com

---

## 5. Build Services (`/build`)

### Meta

| Field                | EN                                                                                                                                                                    | DE                                                                                                                                                                                |
| -------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `<title>`            | App & Website Development — David Hamel                                                                                                                               | App- & Website-Entwicklung — David Hamel                                                                                                                                          |
| `<meta description>` | Product thinking + AI-native development. I build apps and websites for SMBs and financial services firms — from first brief to live product. One person, end-to-end. | Produktdenken + KI-natives Development. Ich baue Apps und Websites für KMU und Finanzdienstleister — vom ersten Briefing bis zum Live-Produkt. Eine Person, von A bis Z.          |

### Section 1: Hero

**EN:**

Headline:

> I understand your business. And I build the software.

Subheadline:

> Most developers build what you tell them to. I start with the problem. Eight years of fintech product experience means I understand your domain — and I use AI-native development to ship in weeks, not months.

CTA:

> Let's Talk About Your Project →

**DE:**

Headline:

> Ich verstehe dein Geschäft. Und ich baue die Software.

Subheadline:

> Die meisten Entwickler bauen, was man ihnen sagt. Ich fange beim Problem an. Acht Jahre Fintech-Produkterfahrung bedeuten, dass ich deine Branche verstehe — und ich nutze KI-natives Development, um in Wochen statt Monaten zu liefern.

CTA:

> Lass uns über dein Projekt sprechen →

### Section 2: How I Work

**EN:**

Heading:

> How I work

Step 1:

> **Discovery** — We define what to build and why. I ask the questions a product leader asks: Who is this for? What problem does it solve? How will you know it's working? This phase ensures we build the right thing — not just a thing.

Step 2:

> **Build** — I design and develop the product using modern, production-grade tools. AI-native development means I ship faster than a traditional dev team — without cutting corners on quality.

Step 3:

> **Launch & Evolve** — We put it in front of real users and iterate. I don't build and disappear. The optional monthly retainer keeps your product evolving — new features, content updates, performance improvements.

**DE:**

Heading:

> Wie ich arbeite

Schritt 1:

> **Discovery** — Wir definieren, was wir bauen und warum. Ich stelle die Fragen, die ein Produktverantwortlicher stellt: Für wen ist das? Welches Problem löst es? Woran erkennen wir, dass es funktioniert? Diese Phase stellt sicher, dass wir das Richtige bauen — nicht einfach nur etwas.

Schritt 2:

> **Build** — Ich designe und entwickle das Produkt mit modernen, produktionsreifen Tools. KI-natives Development bedeutet, ich liefere schneller als ein traditionelles Dev-Team — ohne Abstriche bei der Qualität.

Schritt 3:

> **Launch & Weiterentwicklung** — Wir bringen es vor echte Nutzer und iterieren. Ich baue nicht und verschwinde. Der optionale monatliche Retainer hält dein Produkt am Wachsen — neue Features, Content-Updates, Performance-Verbesserungen.

### Section 3: What I Build

**EN:**

Heading:

> What I build

> - **Web applications and SaaS platforms** — Customer-facing products, dashboards, internal tools
> - **Marketing websites and landing pages** — Fast, modern sites that convert
> - **AI-powered features and integrations** — Chatbots, document processing, intelligent workflows
> - **Internal tools and dashboards** — Data visualization, admin panels, operational tools

Tech:

> Built on production-grade stacks: Astro, Next.js, React, Tailwind, TypeScript, Supabase, Vercel.

**DE:**

Heading:

> Was ich baue

> - **Web-Applikationen und SaaS-Plattformen** — Kundenprodukte, Dashboards, interne Tools
> - **Marketing-Websites und Landing Pages** — Schnelle, moderne Websites, die konvertieren
> - **KI-gestützte Features und Integrationen** — Chatbots, Dokumentenverarbeitung, intelligente Workflows
> - **Interne Tools und Dashboards** — Datenvisualisierung, Admin-Panels, Operations-Tools

Tech:

> Gebaut auf produktionsreifen Stacks: Astro, Next.js, React, Tailwind, TypeScript, Supabase, Vercel.

### Section 4: Why Me — Not an Agency

**EN:**

Heading:

> Why me — not an agency

> **Domain expertise** — I've built fintech products for eight years. I understand financial services, compliance considerations, and how to build user trust. A generic agency would spend weeks learning what I already know.
>
> **Product + Code in one person** — You get a product strategist who writes the code himself. No telephone game between a PM, a designer, and a developer.
>
> **AI-native development** — I use tools like Claude Code for faster delivery than traditional development. Same quality, less time, lower cost.
>
> **Transparent pricing** — Fixed build fee. No hourly billing, no scope creep surprises. You know exactly what you're paying for before we start.
>
> **Ongoing relationship** — The optional monthly retainer keeps your product evolving. Hosting, content updates, new features, performance improvements — all handled.
>
> **Direct access** — You work with me. Not a junior developer. Not a project manager. Me.

**DE:**

Heading:

> Warum ich — nicht eine Agentur

> **Branchenexpertise** — Ich baue seit acht Jahren Fintech-Produkte. Ich verstehe Finanzdienstleistungen, Compliance-Anforderungen und wie man Nutzervertrauen aufbaut. Eine generische Agentur würde Wochen brauchen, um zu lernen, was ich bereits weiß.
>
> **Produkt + Code in einer Person** — Du bekommst einen Produktstrategen, der den Code selbst schreibt. Kein Stille-Post-Spiel zwischen PM, Designer und Entwickler.
>
> **KI-natives Development** — Ich nutze Tools wie Claude Code für schnellere Umsetzung als traditionelles Development. Gleiche Qualität, weniger Zeit, geringere Kosten.
>
> **Transparente Preise** — Fester Build-Preis. Keine Stundenabrechnung, keine Scope-Creep-Überraschungen. Du weißt genau, wofür du bezahlst, bevor wir anfangen.
>
> **Laufende Beziehung** — Der optionale monatliche Retainer hält dein Produkt am Wachsen. Hosting, Content-Updates, neue Features, Performance-Verbesserungen — alles abgedeckt.
>
> **Direkter Kontakt** — Du arbeitest mit mir. Nicht mit einem Junior-Entwickler. Nicht mit einem Projektmanager. Mit mir.

### Section 5: Selected Work

Section heading:

| EN            | DE                   |
| ------------- | -------------------- |
| Selected work | Ausgewählte Projekte |

(3-4 ProjectCards — Focus on: Alba Wealth, Rootlocaly, Digital Partners, davidhamel.co itself)

Link:

| EN                    | DE                           |
| --------------------- | ---------------------------- |
| View full portfolio → | Gesamtes Portfolio ansehen → |

### Section 6: Pricing

**EN:**

> Fixed build fee + optional monthly retainer. No hourly billing, no surprises.
>
> Every project starts with a free discovery call where we scope the work together. You get a clear quote before we start.

**DE:**

> Festpreis für den Build + optionaler monatlicher Retainer. Keine Stundenabrechnung, keine Überraschungen.
>
> Jedes Projekt beginnt mit einem kostenlosen Discovery Call, in dem wir den Umfang gemeinsam definieren. Du bekommst ein klares Angebot, bevor wir starten.

### Section 7: CTA

**EN:**

Heading:

> Let's talk about your project.

Subtext:

> Tell me what you need built. We'll have a free discovery call, I'll scope the work, and you'll get a clear quote — no obligation.

CTA: Let's Talk →

Alternative: Or email me at david.ch.hamel@gmail.com

**DE:**

Heading:

> Lass uns über dein Projekt sprechen.

Subtext:

> Sag mir, was du brauchst. Wir machen einen kostenlosen Discovery Call, ich definiere den Umfang und du bekommst ein klares Angebot — unverbindlich.

CTA: Lass uns sprechen →

Alternative: Oder schreib mir an david.ch.hamel@gmail.com

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
| Metric | 27 projects · 10-person team | 27 Projekte · 10-köpfiges Team |

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
| Description | Car diagnostics e-commerce — sales funnel optimization | KFZ-Diagnose E-Commerce — Vertriebstrichter-Optimierung |
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
| Metric | Vibe coded | Vibe coded |

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
> Over six years, we executed 27 projects for clients including Viessmann, Porsche, and Körber. I built a team of seven engineers and three consulting partners, and the company evolved from a B2B matching platform for Industry 4.0 into a full consulting practice — which led directly to engagements like Porsche Digital Lab.

Key metrics:

> - 27 IT/IoT projects delivered
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
> Über sechs Jahre führten wir 27 Projekte für Kunden wie Viessmann, Porsche und Körber durch. Ich baute ein Team aus sieben Entwicklern und drei Beratungspartnern auf, und das Unternehmen entwickelte sich von einer B2B-Matching-Plattform für Industrie 4.0 zu einer vollständigen Beratungspraxis — die direkt zu Engagements wie dem Porsche Digital Lab führte.

Kennzahlen:

> - 27 IT/IoT-Projekte umgesetzt
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

> Carly (Carly Connected Car / Carly Solutions GmbH) builds car diagnostics tools for consumers. I joined as Product Manager to improve online sales performance. I built a new web funnel that increased purchase conversion by 25%, established an agile product organization, and set up their analytics and business intelligence infrastructure.

Key metrics:

> - +25% purchase conversion
> - Agile product org created
> - Analytics & BI infrastructure from scratch

What I did:

> Led product for the e-commerce function. Designed and built a new purchase funnel, analyzed user behavior data to identify drop-off points, and implemented changes that increased conversion by 25%. Established the agile product organization and built the analytics stack (BI setup, event tracking, funnel analysis).

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

### Newsletter CTA (bottom of page)

Same as homepage Section 5.

---

## 9. Blog Post Template (`/blog/[slug]`)

### Author Bio (bottom of every post)

**EN:**

> **David Hamel** is an independent financial planning coach, product leader, and builder based in Berlin. He coaches expats through German finances, leads product for startups, and builds apps for businesses.

Link: More about David →

**DE:**

> **David Hamel** ist unabhängiger Finanzcoach, Produktführer und Builder in Berlin. Er coacht Expats durch das deutsche Finanzsystem, leitet Produkte für Startups und baut Apps für Unternehmen.

Link: Mehr über David →

### Newsletter CTA (inline)

**EN:**

> Liked this post? I write about expat finance, product building, and living abroad. Subscribe to get new posts by email.

**DE:**

> Hat dir dieser Beitrag gefallen? Ich schreibe über Expat-Finanzen, Produktentwicklung und Leben im Ausland. Abonniere, um neue Beiträge per E-Mail zu erhalten.

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

Subheadline:

> When I'm not building or coaching, I'm in the ocean.

**DE:**

Headline:

> Abenteuer

Subheadline:

> Wenn ich nicht baue oder coache, bin ich im Ozean.

### Category Labels

| EN     | DE      |
| ------ | ------- |
| Surf   | Surfen  |
| Dive   | Tauchen |
| Travel | Reisen  |
| All    | Alle    |

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

> Email: david.ch.hamel@gmail.com
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

> E-Mail: david.ch.hamel@gmail.com
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
E-Mail: david.ch.hamel@gmail.com

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
| Homepage "Who I Am"      | Professional headshot, natural light, approachable | **Yes**              | **High** |
| About hero               | Different headshot or candid photo                 | **Yes**              | **High** |
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
