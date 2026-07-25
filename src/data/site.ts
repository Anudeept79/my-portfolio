// ============================================================================
// SITE CONTENT — single source of truth for the whole portfolio.
// Edit facts/metrics here; every page reads from this file.
// Anything marked  // VERIFY  is drafted from the resume — confirm before sharing.
// ============================================================================

export const profile = {
  name: "Anudeep Thota",
  title: "AI Product Designer · Full-Stack Builder",
  tagline: "AI Product Designer who Builds.",
  subtitle:
    "I take AI products from first problem to shipped production code — the design and the build, solo — across fintech, government, logistics and SaaS.",
  location: "Hyderabad, India",
  availability: "Open to Product / AI Design roles — worldwide",
  email: "Anudeept79@gmail.com",
  phone: "+91 8008891918",
  resumeUrl: "/Anudeep_Thota_Resume.pdf",
  socials: {
    linkedin: "https://www.linkedin.com/in/anudeep-thota-76595a102",
    x: "https://x.com/anudeept79",
    contra: "https://contra.com/anudeep_thota_9ltvhyvz",
    github: "https://github.com/Anudeept79",
    dribbble: "",
  },
};

export const stats = [
  { value: "10+", label: "Apps shipped", sub: "production-grade" },
  { value: "1y 10m", label: "Owning design end-to-end", sub: "problem → code" },
  { value: "4", label: "US Gov projects", sub: "for Virginia State Police" },
  { value: "100%", label: "Design → production", sub: "solo, no handoff" },
];

// Trust signals — the fast-scan credibility row under the hero.
export const trust = [
  "AI Excellence Award — 2025",
  "US Gov clients (Virginia State Police & High Court)",
  "Mentored by an Amazon UX Designer",
  "Every project shipped with CEO / VP sign-off",
];

// AI-native + design + build toolkit, grouped.
export const toolkit = [
  {
    group: "Product Design",
    items: [
      "UX Research",
      "Information Architecture",
      "Design Systems",
      "Hi-Fi Prototyping",
      "Usability Testing",
      "3D / Spatial Design",
    ],
  },
  {
    group: "AI & Build",
    items: [
      "Antigravity",
      "Kiro",
      "Google AI Studio",
      "Amazon Q",
      "Cursor",
      "Claude",
      "v0 / Bolt / Lovable",
      "React Native",
    ],
  },
  {
    group: "Design Tools",
    items: ["Figma", "Figma Make", "Framer", "Webflow", "Adobe XD"],
  },
  {
    group: "Video & Creative",
    items: ["Google Veo 3", "Google Flow", "ElevenLabs", "Kling", "Premiere Pro"],
  },
];

export type CaseStudy = {
  slug: string;
  title: string;
  client: string;
  domain: string;
  year: string;
  role: string;
  // one-line impact headline shown on the card + top of the case study
  impact: string;
  // short teaser for the featured grid
  teaser: string;
  // accent for the card (tailwind color token)
  accent: string;
  // gate this study behind an access code (shareable, not real security)
  locked?: boolean;
  cover: string; // /work/<slug>/cover.jpg  (placeholder for now)
  video?: string; // optional inline demo video (autoplays muted on the page)
  // optional book-flip before/after comparison shown on the case-study page
  compare?: { before: string; after: string };
  tools: string[];
  // full case-study body
  overview: string;
  // narrative chapters rendered after the overview (e.g. "How it started")
  story?: { title: string; body: string }[];
  problem: string[];
  process: {
    title: string;
    body: string;
    image?: string;
    imageCaption?: string;
  }[];
  // decision → the reasoning behind it (the "why" a recruiter reads for)
  decisions?: { decision: string; logic: string }[];
  // visual legend explaining a colour system used in the product
  colorLogic?: {
    note: string;
    scale: { hex: string; range: string; meaning: string }[];
  };
  // closing evidence — a clip shown in Solution & outcome. `badge` overrides the
  // status pill (defaults to "Shipped — in production"); use an honest label like
  // "Delivered build" for anything that isn't a confirmed production deployment.
  proof?: { video: string; caption: string; badge?: string };
  solution: string[];
  results: { metric: string; label: string }[];
  gallery: { src: string; caption: string }[];
};

export const caseStudies: CaseStudy[] = [
  // -------------------------------------------------------------- WarePro 3D
  {
    slug: "warepro-digital-twin",
    title: "A living 3D digital twin you can command with your hands",
    client: "WarePro (PIPRA Solutions — flagship product)",
    domain: "Logistics · 3D / Spatial AI",
    year: "2025",
    role: "Lead Product Designer & Builder",
    impact:
      "Turned spreadsheet-driven warehouse ops into a real-time 3D twin — with Gemini-powered gesture and voice control.",
    teaser:
      "A web-native 3D smart warehouse with a glassmorphic UI and Gemini Live multimodal AI — designed and built end-to-end.",
    accent: "blue",
    cover: "/work/warepro-digital-twin/cover.jpg",
    video: "/work/warepro-digital-twin/demo.mp4",
    compare: {
      before: "/redesigns/warepro-before.png",
      after: "/redesigns/warepro-after.png",
    },
    tools: ["React Three Fiber", "Three.js", "Gemini Live API", "Tailwind", "Antigravity"],
    overview:
      "WarePro is PIPRA's flagship logistics product. Managers were reasoning about a physical warehouse through dry tables and a legacy 3D view nobody used — no spatial sense of where anything actually was. I rebuilt it as a web-native digital twin that maps live occupancy onto the real racks and zones, then integrated Google's Gemini Live API so floor managers can drive it hands-free. Design philosophy: spatial clarity through modern aesthetics.",
    story: [
      {
        title: "How it started",
        body: "WarePro already had a 3D view — the kind you get when data is handed straight to a renderer. A blinding orange grid seen from a drone, every rack shouting the same colour, a legend bolted to the corner to explain what the space itself couldn't. Managers glanced at it once and went back to their spreadsheets. As the lead designer on PIPRA's flagship, I took the rebuild end-to-end: the research, the design system, the 3D scene — and the code.",
      },
      {
        title: "What I extracted",
        body: "Before touching pixels I sat with the people who actually run the floor and watched how they work. Three truths kept surfacing — managers think in zones and bin addresses, they work standing up, and they only ever look for exceptions. Those three sentences became the spec: every decision below traces back to one of them.",
      },
    ],
    problem: [
      "Managers think in zones and bin addresses — “A-L-2-3” — not in table rows.",
      "They work standing on the floor, tablet in one hand — not seated at a desk with a mouse.",
      "They never read inventory; they scan for exceptions — what's full, and what's about to be.",
    ],
    process: [
      {
        title: "Audited the old twin",
        body: "I started by naming exactly why nobody used it. Every rack shouted the same orange whether it held one pallet or a hundred; the camera dropped you at floor level with no way home; and the meaning lived in a corner legend instead of in the space. The rebuild had to invert all three.",
        image: "/work/warepro-digital-twin/process-old-ui.png",
        imageCaption:
          "The old twin — one colour for everything, a lost camera, and a legend doing the space's job.",
      },
      {
        title: "Started from the real building's blueprint",
        body: "Instead of an idealised diagram, I sketched the actual WarePro warehouse — pallet racks, loading docks, storage zones — and mapped every bin with the same “A-L-2-3” addresses managers already speak, rendered as labels in space so the twin talks their language.",
        image: "/work/warepro-digital-twin/process-blueprint.jpg",
        imageCaption:
          "The blueprint — the twin's geometry traced from the real floor: racks, docks, zones.",
      },
      {
        title: "Built the scene system",
        body: "The blueprint became geometry. Procedural materials drawn at runtime, environment lighting, fog for depth, softened cargo geometry — and every rack carrying its own bin address, so the space reads physical and stays legible at warehouse scale.",
        image: "/work/warepro-digital-twin/process-scene.jpg",
        imageCaption:
          "Version 1 of the scene — labelled racks, zone markings, guided viewpoints and the first environment controls.",
      },
      {
        title: "Designed navigation & the overlay",
        body: "One-click guided viewpoints — Exterior, Receiving, Dispatch, Front, Back — glide a constrained camera between strategic angles, while the frosted-glass UI floats above the scene without ever hiding it.",
      },
      {
        title: "Layered in the AI",
        body: "Wired Gemini Live with function calling: the app streams the manager's camera to the model, and gestures or voice map to real actions — switch view, adjust lighting — no hands on a mouse.",
      },
      {
        title: "Shipped it with engineering",
        body: "Integrated the twin with live occupancy data alongside the engineering team and delivered a working product — not a prototype and a prayer.",
        image: "/work/warepro-digital-twin/process-shipped.png",
        imageCaption:
          "The finished floor — dock doors with live status lights, zone grids, and occupancy running on real data.",
      },
    ],
    decisions: [
      {
        decision: "React Three Fiber — not a game engine",
        logic: "Unity would have meant installs, licences and a second codebase. R3F keeps the twin web-native: one React state tree drives both the 2D UI and the 3D scene, and it opens in a browser tab in seconds.",
      },
      {
        decision: "Procedural textures instead of image files",
        logic: "Rack uprights, perforations and wire decking are drawn with the Canvas API at runtime — high-fidelity detail at zero network cost, so the twin loads fast on warehouse Wi-Fi.",
      },
      {
        decision: "Guided viewpoints instead of free-roam",
        logic: "Free 3D navigation disorients non-technical users — the fastest way to lose a manager is to drop them in a void. Named viewpoints move the camera for them, and hard constraints make it impossible to clip through a floor or zoom into nothing.",
      },
      {
        decision: "A dark scene with a frosted-glass overlay",
        logic: "Operators watch these screens across whole shifts — a near-black environment cuts eye strain and lets the occupancy colours do the talking. Panels float in frosted glass so context behind them never disappears.",
      },
      {
        decision: "Gemini Live for hands-free control",
        logic: "Floor managers hold tablets and clipboards; mouse-first interaction dies on the floor. Streaming the camera to Gemini and mapping function calls to gestures and voice turns the twin from a viewing tool into an assistant.",
      },
    ],
    colorLogic: {
      note: "The colour lives on the cargo itself — not in a corner legend. Because managers scan for exceptions, the scale maps to urgency: green recedes, amber warns, red fires against the dark scene. One glance down an aisle answers the only question that matters — where can this pallet go?",
      scale: [
        {
          hex: "#4ade80",
          range: "1–50%",
          meaning: "Space available — safe to route inbound stock here.",
        },
        {
          hex: "#c19a6b",
          range: "51–99%",
          meaning: "Nearing capacity — re-slot before it blocks the flow.",
        },
        {
          hex: "#f87171",
          range: "100%",
          meaning: "Full — nothing more fits; action required.",
        },
      ],
    },
    solution: [
      "A real-time 3D twin where occupancy maps directly onto physical racks and zones.",
      "Hands-free control — point or speak, and Gemini Live switches views and adjusts the scene.",
      "Guided viewpoints that make 3D navigable for non-technical staff.",
      "Web-native performance: no installs, no game engine, procedural textures at zero network cost.",
      "Integrated into the production WarePro app with the engineering team — not a standalone demo.",
    ],
    proof: {
      video: "/work/warepro-digital-twin/proof.mp4",
      caption:
        "The twin running inside the production WarePro app — integrated, live, and in managers' hands.",
    },
    results: [
      { metric: "Hands-free", label: "gesture + voice control via Gemini Live" },
      { metric: "Real-time", label: "occupancy on a spatial twin" },
      { metric: "0 installs", label: "fully web-native — runs in the browser" },
    ],
    gallery: [
      { src: "/work/warepro-digital-twin/01.png", caption: "Guided viewpoints — one-click camera transitions" },
      { src: "/work/warepro-digital-twin/02.png", caption: "Traffic-light occupancy on rack-level cargo" },
      { src: "/work/warepro-digital-twin/03.png", caption: "Dock doors with live status — receiving to returns" },
    ],
  },

  // -------------------------------------------------------------- StoneX
  {
    slug: "stonex-migration",
    title: "Owning a codebase: Flutter → React Native, solo, with AI",
    client: "StoneX (Dubai)",
    domain: "Enterprise · Full-stack",
    year: "2025",
    role: "Product Designer → Full-Stack Owner",
    impact:
      "Designed it, then took full ownership of the codebase and migrated it solo — ahead of schedule.",
    teaser:
      "Designed the app in Figma, then migrated the entire codebase from Flutter to React Native solo using AI — and built the corporate site front-to-back.",
    accent: "blue",
    cover: "/work/stonex-migration/cover.jpg",
    compare: {
      before: "/redesigns/stonex-before.jpg",
      after: "/redesigns/stonex-after.jpg",
    },
    tools: ["Figma", "React Native", "Antigravity", "Full-stack"],
    overview:
      "I originally designed the full StoneX app in Figma; developers built it in Flutter. When the codebase needed to move to React Native, I took full ownership and migrated it solo using Antigravity — then built the complete Dubai corporate website, frontend and backend. Delivered ahead of schedule; CEO and VP confirmed successful output.",
    problem: [
      "The product was designed in Figma and built in Flutter — but needed to live on React Native.",
      "A migration like this normally needs a dedicated engineering team and weeks of runway.",
      "Design and engineering ownership were split, slowing every decision.",
    ],
    process: [
      {
        title: "Full ownership",
        body: "Rather than hand off, I took ownership of the codebase end-to-end so design intent survived the migration intact.",
      },
      {
        title: "Antigravity-powered migration",
        body: "Used Antigravity to translate Flutter patterns into React Native, screen by screen, keeping the design system consistent.",
      },
      {
        title: "Building the corporate site",
        body: "Built the full Dubai corporate website — frontend and backend — so the brand and product shipped together.",
      },
    ],
    solution: [
      "A complete Flutter → React Native migration delivered by one person.",
      "A full corporate website (frontend + backend) for the Dubai entity.",
      "Design fidelity preserved because the designer owned the build.",
    ],
    results: [
      { metric: "Solo", label: "migration, no eng team" },
      { metric: "Ahead", label: "of schedule" },
      { metric: "CEO + VP", label: "confirmed success" },
    ],
    gallery: [
      { src: "/work/stonex-migration/01.jpg", caption: "Original Figma designs" },
      { src: "/work/stonex-migration/02.jpg", caption: "React Native build" },
      { src: "/work/stonex-migration/03.jpg", caption: "Dubai corporate website" },
    ],
  },

  // -------------------------------------------------------------- Golden Suisse
  {
    slug: "golden-suisse-fintech",
    title: "Three fintech apps for a live gold-trading platform",
    client: "Golden Suisse",
    domain: "Fintech · Trading",
    year: "2025",
    role: "Product Designer & Builder",
    impact:
      "Designed & shipped 3 responsive apps for a live gold platform — CEO praised the delivery speed.",
    teaser:
      "Investor, Trader and Admin — three fully responsive fintech products for a live gold-trading platform, with backend live and confirmed by leadership.",
    accent: "gold",
    cover: "/work/golden-suisse-fintech/cover.jpg",
    tools: ["Figma", "Antigravity", "Live backend APIs", "Fintech UX"],
    overview:
      "Golden Suisse runs a live gold-trading platform. I designed and shipped three fully responsive products — an Investor app, a Trader app, and an Agency & Admin panel — built with Antigravity and wired to live backend APIs, each with the clarity and trust that money movement demands. Backend went live and was confirmed by CEO and VP; the CEO personally praised the delivery speed.",
    problem: [
      "A live trading platform needs three distinct experiences — invest, trade, administer — that still feel like one product.",
      "Fintech interfaces carry high stakes: ambiguity around real money erodes trust instantly.",
      "Speed mattered — the platform was going live.",
    ],
    process: [
      {
        title: "One system, three products",
        body: "Built a shared design system so Investor, Trader and the Agency & Admin panel stayed coherent while serving very different users.",
      },
      {
        title: "Designing for trust under pressure",
        body: "Prioritized legible numbers, unambiguous states, and clear confirmation for every money-moving action.",
      },
      {
        title: "Responsive by default",
        body: "Shipped all three fully responsive so investors and traders got the same clarity on any device.",
      },
    ],
    solution: [
      "Investor app — approachable, trust-forward entry into gold.",
      "Trader app — dense, fast, information-rich for active users.",
      "Agency & Admin panel — full operational control for the internal team.",
    ],
    results: [
      { metric: "3 apps", label: "Investor · Trader · Admin" },
      { metric: "Live", label: "backend confirmed by leadership" },
      { metric: "CEO", label: "praised delivery speed" },
    ],
    gallery: [
      { src: "/work/golden-suisse-fintech/01.jpg", caption: "Investor app" },
      { src: "/work/golden-suisse-fintech/02.jpg", caption: "Trader app" },
      { src: "/work/golden-suisse-fintech/03.jpg", caption: "Agency & Admin panel" },
    ],
  },

  // -------------------------------------------------------------- US Gov (VSP)
  {
    slug: "us-gov-platforms",
    title: "A seal-order review console for the Virginia State Police",
    client: "Virginia State Police · Criminal Records",
    domain: "Civic Tech · Government",
    year: "2026",
    role: "Product Designer",
    impact:
      "Match a court's seal order to the right person's record — field by field — before anything gets sealed. Three directions in days; the team chose the one I refined into the final build.",
    teaser:
      "A gov case-review interface for sealing criminal records: three UI directions explored in days, refined with the client's feedback into the chosen final build. Access-gated — synthetic test data only.",
    accent: "blue",
    locked: true,
    cover: "/work/us-gov-platforms/cover.jpg",
    tools: ["Figma Make", "Design System", "Interaction Design", "Civic UX"],
    overview:
      "When a Virginia court orders a criminal record sealed, an analyst at the State Police has to do something deceptively hard: match that single court order to the exact right person across the state's criminal-history data, confirm every identifier lines up, and only then seal the record — because sealing the wrong person's history, or missing a match, is a legal error you can't undo. I designed the case-review interface that decision runs through, working under my senior designer, Madhavi Soma. In Figma Make, I explored three distinct directions in a matter of days, folded in the feedback that came back, and refined the chosen one into the final build. Every record shown here is synthetic test data.",
    story: [
      {
        title: "How it started",
        body: "The review still ran through a dense, legacy criminal-history screen — rows of CCN, DCN and OTN identifiers an analyst had to cross-check by eye against the paper court order. Nothing on screen told them whether a candidate record actually matched the person named in the order; they held two documents side by side and compared strings. On a task where a wrong match seals the wrong life, “compare it carefully” isn't a safeguard — the interface has to be.",
      },
      {
        title: "What I reframed",
        body: "The analyst isn't reading a record — they're answering one question, field by field: does this court order match this person? So the interface had to do the comparison for them — surface each candidate, mark every field that matches and every field that doesn't, and make the act of sealing deliberate and logged. That single reframe drove all three directions.",
      },
    ],
    problem: [
      "The real task is a field-by-field match — CCN, DCN, OTN, disposition — not “read the record”.",
      "A wrong match is unrecoverable: seal the wrong person and you've hidden the wrong history.",
      "Analysts were comparing identifier strings by eye across two documents — slow and error-prone.",
      "It's a government record: every match needs an audit trail — who selected it, and when.",
    ],
    process: [
      {
        title: "Mapped the sealing rules and the match fields",
        body: "Before any UI, I pinned down exactly which fields decide a match — CCN, DCN, OTN and disposition — and the states a record moves through: pending review → matched → locked and sealed. Those rules became the skeleton every direction hung on.",
      },
      {
        title: "Direction 1 — the Valor Portal",
        body: "A light, document-style layout: a Court Case Summary up top, candidate matches below. I introduced semantic match labels — Fingerprint Match, Name-Only Match, Alias Match — so an analyst reads the strength of each candidate instantly, and per-field green/red highlighting so a single mismatched DCN can't hide in a row of numbers.",
        image: "/work/us-gov-platforms/iteration-1.jpg",
        imageCaption:
          "Direction 1 — semantic match labels and per-field highlighting on a document-style layout.",
      },
      {
        title: "Direction 2 — the VSP Judicial system",
        body: "I re-grounded the interface in VSP's own judicial identity: a calmer purple system, the court order set clearly against each potential match, and the disposition mapping made explicit. Less “database”, more “considered judicial decision”. This is the direction the client responded to.",
        image: "/work/us-gov-platforms/iteration-2.jpg",
        imageCaption:
          "Direction 2 — the judicial-purple system, the court order weighed against each potential match.",
      },
      {
        title: "Direction 3 — the Match Console",
        body: "I pushed a power-user direction to see how far the system could scale: a dense match console with toggles, an explicit sealing rule spelled out, and keyboard-first review for analysts working through volume. It defined the ceiling — and confirmed the middle direction was the right call.",
        image: "/work/us-gov-platforms/iteration-3.jpg",
        imageCaption:
          "Direction 3 — a dense, keyboard-first console for high-volume review.",
      },
      {
        title: "The chosen direction, refined with feedback",
        body: "The client picked the Judicial direction. I folded in every note: Created Date and SSN added, DOB / Sex / Race / SID columns, a plain-English Disposition Description, per-field ✓ / ✗ match pills, a Hold → Matched → Unlocked status flow, and a Supervisor Queue with Submit Review and Finalize Seal actions — the version at the top of this page.",
      },
    ],
    decisions: [
      {
        decision: "Semantic match labels, not a match score",
        logic: "“Fingerprint Match” tells an analyst why to trust a candidate and what evidence backs it; a raw percentage makes them guess. The label carries the reasoning, not just the confidence.",
      },
      {
        decision: "Per-field ✓ / ✗ pills instead of one row-level status",
        logic: "The sealing decision is made field by field, so the verification has to be field by field. A single “matched” row hides the one red DCN that should stop everything; a field-level breakdown surfaces it.",
      },
      {
        decision: "Disposition description, not just the code",
        logic: "Showing “Nolle Prossed” instead of a raw disposition code removes a lookup and a chance to misread — the analyst reads meaning, not a key they have to translate in their head.",
      },
      {
        decision: "A staged sealing action — Hold → Matched → Finalize",
        logic: "An irreversible legal action should never be one click. The status flow forces an explicit confirmation, and a supervisor queue puts a second set of eyes on it before any record is sealed.",
      },
      {
        decision: "Masked SSNs and synthetic data throughout",
        logic: "The interface handles some of the most sensitive data a state holds. Masking identifiers by default and designing only against test records keeps that sensitivity respected from the first pixel.",
      },
    ],
    colorLogic: {
      note: "The whole interface exists so an analyst never has to compare two identifier strings by eye. The system does the comparison and colours the result — green where a field matches the court order, red where it doesn't — against VSP's judicial purple. The colour isn't decoration; it's the verification, done for you.",
      scale: [
        {
          hex: "#16a34a",
          range: "Match",
          meaning: "This field matches the court order exactly — safe to seal on.",
        },
        {
          hex: "#dc2626",
          range: "No match",
          meaning: "This field differs — the candidate isn't a clean match; stop and check.",
        },
        {
          hex: "#7c3aed",
          range: "VSP",
          meaning: "The judicial-purple system colour — identity, headers and the primary sealing actions.",
        },
      ],
    },
    // NOTE: no before/after flip yet — that needs the real legacy CCH screenshot
    // as the honest "before". Framing my own iteration-1 as the "old UI" would
    // mislead. Drop the legacy screen into the VSP folder to wire it up.
    solution: [
      "A case-review interface that does the field-by-field match for the analyst — every candidate, every identifier, marked match or no-match.",
      "Three distinct directions delivered in days, so the client could choose from real options instead of a single take.",
      "A staged, auditable sealing flow — Hold → Matched → Finalize — with a supervisor queue for a second review.",
      "The chosen Judicial direction refined into a complete, interactive build in Figma Make.",
    ],
    results: [
      { metric: "3 directions", label: "designed & delivered in days for a faster decision" },
      { metric: "Field-level", label: "match verification — not a manual string check" },
      { metric: "Audit-ready", label: "every match selection logged with reviewer & time" },
    ],
    gallery: [],
  },

  // -------------------------------------------------------------- VSP CCH (US Gov #2)
  // PII PRE-PUBLISH: legacy-*.jpg must be the SCRUBBED copies — crop/blur every real
  // name, DOB, SID, FBI number, the signed-in username, and the .gov URL bar before
  // publish (the `compare.before` renders publicly). Access-gating is NOT a substitute.
  {
    slug: "vsp-criminal-history",
    title: "Redesigning the densest record in the Virginia State Police's system",
    client: "Virginia State Police · Criminal History (CCH)",
    domain: "Civic Tech · Government",
    year: "2026",
    role: "Product Designer",
    impact:
      "A redesign that answers density by making a mountain of data navigable, disclosable, and comparable rather than by removing it — while preserving the transaction model of a two-decade-old system of record.",
    teaser:
      "One person, nine names, ten bookings — a legacy criminal-history record made navigable without simplifying the data away.",
    accent: "blue",
    locked: true,
    cover: "/work/vsp-criminal-history/cover.jpg",
    compare: {
      before: "/work/vsp-criminal-history/legacy-01.jpg",
      after: "/work/vsp-criminal-history/final-record-dark.jpg",
    },
    tools: ["Figma Make", "Design System", "Information Architecture", "Civic UX"],
    overview:
      "On my second project with the Virginia State Police, working under senior designer Madhavi Soma, I redesigned the interface a Criminal Records analyst uses to maintain a person's entire criminal-history record inside the state system of record. This is the densest screen I've ever worked on: one individual can carry nine name variants, five identifications, and ten arrest bookings that each branch into offenses and then dispositions. The catch is that none of that data can be “designed away” — every field has to stay editable through the same “Desired Action” transaction a two-decade-old system of record depends on. So I didn't chase simplicity; I chased legibility. I gave the analyst a left-hand navigation tree to orient inside a record, progressive disclosure to expand or collapse the whole thing at will, a compare mode to reconcile near-duplicate names side by side, and status-lifecycle pills to read a record's state at a glance — across both a dark and a light theme. The data stays whole; the mountain just becomes navigable.",
    story: [
      {
        title: "How it started",
        body: "The legacy CCH is a workhorse from the mid-2000s — a blue-and-gray enterprise web app where an analyst manages a person's criminal-history record through a single cramped accordion. Every section — SID, names, arrest bookings, correctional bookings, identifications, physical characteristics, fingerprints, place of birth, residences, firearm-rights restoration — is stacked flat, with no hierarchy to tell you where you are in a record that can run to dozens of entries. The forms are dense, multi-panel grids (SID, III, NICS, CCH, Corrections, ICE) packed with coded dropdowns — III Status, NICS Status, Adult IFFS, DOC Status, ICE Status — that assume you already speak the system's private language. Everything hangs off one “Desired Action” dropdown per record: Apply to CHR, Remove, Cancel, Redetermine IFS, Block Name. It works, but it fights the person using it. There's no search-first way in, no way to compare two near-identical records, and no way to tell at a glance whether a record is active, purged, merged, or expunged. Watching that, I realized the analyst's real burden was never the transaction — it was finding the right record, holding a huge one in their head, and spotting the duplicates hiding inside it.",
      },
      {
        title: "What I reframed",
        body: "The instinct with a screen this dense is to strip it back, but here the data is the job — you can't simplify away nine names when reconciling those nine names is the work. So I reframed the goal with Madhavi: don't reduce the record — give it structure. Make a huge record navigable, its sections openable on demand, and its duplicates directly comparable, while keeping the system of record intact. The core move was a left-hand record-navigation tree with live count badges, so the analyst can see the whole shape of a record — Names[9], Identifications[5], Arrest Bookings[10] — and jump straight to any node. Stakeholders pushed back that with this many rows they still needed to actually get to the detail, so I added Expand All / Collapse All, a “1 / 11 open” section-progress readout, and keyboard shortcuts — see everything, see nothing, or move fast. For the reconciliation problem I built a compare mode: select two or more names, IDs, or records and open them side by side with colored dot markers to resolve variants directly. Search-first entry with a two-field floor, masked SSNs in lists, and status-lifecycle pills carry the same principle up front. And underneath all of it the legacy “Desired Action” workflow survives untouched — expand any row and the full edit form, audit fields, and Submit / Reset are right there. We worked it through low- and high-fidelity iterations, in dark and light themes, and delivered it as an interactive build.",
      },
    ],
    problem: [
      "I need to find the exact right person before I do anything, not browse a flat form — so the way in has to start with search, and require enough fields that I don't pull up the wrong human by accident.",
      "A single record is too big to hold in my head; before I touch any one part I need to see its whole shape — how many names, IDs, bookings — and know where I am inside it.",
      "The same person keeps showing up as slightly different names — nine variants on one record — and my real job is spotting and reconciling those duplicates, which means putting them side by side, not scrolling past them.",
      "I have to read a record's lifecycle state — active, purged, merged, expunged, newly assigned — at a glance, while every coded field stays fully editable through the “Desired Action” workflow the system of record runs on.",
    ],
    process: [
      {
        title: "Started in low fidelity — structure before style",
        body: "Before any pixels, I gray-boxed the whole record in low fidelity to settle the hard question: how does one person's entire criminal history fit on a single screen without becoming the legacy wall of panels? Working under senior designer Madhavi Soma, I used lo-fi deliberately to argue about organization, not color — where the analyst lands, what's primary, and whether a mountain of data could be given a shape at all before anyone fell in love with a look.",
        image: "/work/vsp-criminal-history/lofi-01.jpg",
        imageCaption:
          "Low-fidelity blocking — proving the record's structure holds before any visual design goes on top of it.",
      },
      {
        title: "The core decision — a left record-nav tree",
        body: "One person is nine names, five identifications, ten arrest bookings, each booking nesting down through offenses and dispositions. Flat, that is exactly the legacy system's failure. So the pivotal move was a collapsible left navigation tree that turns the record into an outline — Overview, Source Data, Criminal Lifecycle — with a live count badge on every node (Names 9, Identifications 5, Physical Characteristics 3). The analyst can read what the record contains, and where they are inside it, before opening a single section.",
        image: "/work/vsp-criminal-history/iteration-01.jpg",
        imageCaption:
          "The iteration that set the direction — a record-nav tree with live count badges, giving a dense record an outline.",
      },
      {
        title: "Stakeholder pushback: “we have to get to the details”",
        body: "When we walked the tree past stakeholders, the note back was sharp and correct: this is a data-driven record, and the job is getting to the details — all of them, fast, on demand. A tidy outline you have to click through eleven separate times isn't a win when you're reconciling a record under time pressure. That feedback reframed the interaction entirely — orientation wasn't enough on its own; the analyst needed bulk control over how much of the record was exposed at once.",
        image: "/work/vsp-criminal-history/iteration-02.jpg",
        imageCaption:
          "Reworking the record around the feedback — sections gain counts and controls so the analyst can reach everything, not just navigate to it.",
      },
      {
        title: "Progressive disclosure with bulk controls",
        body: "The answer was to make disclosure a first-class control. A sections toolbar with Expand All / Collapse All (everything or nothing in one action), a live “1 / 11 open” progress readout and bar so you can feel how much of the record is exposed, and visible keyboard shortcuts (Ctrl+Shift+E to expand, Ctrl+Shift+C to collapse) for analysts who live on the keyboard. Every accordion keeps its count, and the deepest object — arrest booking → offense → disposition, three levels down — stays reachable without ever losing the thread back to the top.",
        image: "/work/vsp-criminal-history/final-arrest-nested.jpg",
        imageCaption:
          "The payoff of disclosure — an arrest booking opened three levels deep to its offenses and dispositions, and still legible.",
      },
      {
        title: "Compare mode for the analyst's real task",
        body: "The actual work here isn't reading a record top to bottom; it's reconciling variants — nine name spellings on one person, duplicate IDs, near-identical bookings. So I added Compare: select two or more rows and open them side by side with colored dot markers — “Comparing 2 names,” “Comparing 2 IDs” — to judge duplicates directly against each other in place, instead of scrolling between them and holding the differences in your head. It targets the exact decision the density forces on the analyst.",
      },
      {
        title: "High fidelity, in dark and light",
        body: "With the interaction settled, Madhavi and I took it to high fidelity as one system in two full themes — dark navy and light. Each carries the sticky identity bar (SID, FBI, name, status), the status-lifecycle pills — Active, Purged, Merged, Expunged, Newly Assigned — that let an analyst read a record's state at a glance, and the search-first entry with its two-field floor. Same tree, same disclosure controls, same components, two skins, so the system reads consistently whichever theme is running. We delivered it as an interactive Figma Make build with synthetic test data; deployment status sits with VSP.",
        image: "/work/vsp-criminal-history/final-record-light.jpg",
        imageCaption:
          "The record detail in the light theme — the same tree, disclosure controls and status pills as the dark build, one system in two skins.",
      },
    ],
    decisions: [
      {
        decision: "A left RECORD NAV tree, not a longer scroll",
        logic: "One person can carry 9 names, 5 IDs, 10 bookings — a flat record buries the analyst the moment it loads. A persistent tree with live count badges per node answers “where am I and how much is here” before you touch anything, and turns a wall of data into a place you can navigate. This was the core iteration of the whole redesign.",
      },
      {
        decision: "Expand All / Collapse All, a “1 / 11 open” progress readout, and keyboard shortcuts",
        logic: "Stakeholders were blunt: with this many rows, they needed to actually get to the details. So control became explicit — see everything or nothing in one action, a progress bar tells you how much of the record is open, and Ctrl+Shift+E / C keep an expert's hands on the keyboard. Progressive disclosure isn't decoration here; it's how you survive the density.",
      },
      {
        decision: "Compare mode — open 2+ rows side by side",
        logic: "An analyst's real job on this screen is reconciliation: which of these 9 names is the same person, which ID is the duplicate. Making them expand rows one at a time and hold the differences in their head is where errors happen. Selecting rows to compare them directly, with colored dot markers, puts the variants next to each other so the decision is read, not remembered.",
      },
      {
        decision: "Preserve the legacy “Desired Action → Submit” transaction model",
        logic: "This is a two-decade-old system of record, and the per-record Desired Action (Apply, Remove, Cancel, Redetermine, Block Name) is the contract the whole workflow runs on. Reinventing it would have meant retraining every analyst and re-proving every transaction. The redesign kept the exact model and only made it legible — the muscle memory survives, the friction doesn't.",
      },
      {
        decision: "Search-first entry with a two-field-minimum guardrail",
        logic: "The legacy app dropped you straight into a dense record with no front door. Leading with search matches how an analyst actually starts — find the person, then work. The “enter at least two fields” floor is a quiet guardrail: it stops a one-letter query from returning half the state and forces enough specificity to land on the right record.",
      },
      {
        decision: "SID status lifecycle pills on every result row",
        logic: "Whether a record is Active, Purged, Merged, Expunged, or Newly Assigned changes what you're allowed to do with it — and in the old system you had to open it to find out. A color-coded pill states the record's legal lifecycle state at a glance, so the analyst triages the results table before committing to a single click.",
      },
      {
        decision: "SSN masked in lists, revealed only in the detail view",
        logic: "This interface handles some of the most sensitive data a state holds. A results table is a shoulder-surfable, screenshot-prone surface, so identifiers stay masked (***-**-8822) there and show in full only inside the record you've deliberately opened. Least-exposure by default — the analyst never has to remember to protect it.",
      },
      {
        decision: "Two full themes — dark navy and light",
        logic: "The record is used across very different lighting, so rather than pick one, I built the same system in two themes — dark navy and light — so it stays legible in either. It doubles as a stress test: proving the component set and information hierarchy hold under a full re-skin, not just in the theme they were born in.",
      },
    ],
    colorLogic: {
      note: "SID status pills let an analyst read a record's lifecycle state at a glance — in the results table and on the sticky identity bar — before opening or editing anything.",
      scale: [
        {
          hex: "#2563eb",
          range: "New",
          meaning: "Newly assigned — a SID just issued; the record is created but not yet fully built out.",
        },
        {
          hex: "#16a34a",
          range: "Active",
          meaning: "Live record in good standing — safe to view and edit.",
        },
        {
          hex: "#6b7280",
          range: "Merged",
          meaning: "Folded into another SID; retained for lineage but no longer the primary record.",
        },
        {
          hex: "#9f5f5f",
          range: "Expunged",
          meaning: "Sealed or removed by court order (e.g. 19.2-389.3); held visually apart from an active record — handle under restriction.",
        },
        {
          hex: "#dc2626",
          range: "Purged",
          meaning: "Removed from the active system — a terminal state.",
        },
      ],
    },
    solution: [
      "A left-hand record tree with live count badges — Names (9), Identifications (5), Arrest Bookings (10) — so an analyst always knows where they are inside a massive record.",
      "Progressive disclosure built for control: Expand All / Collapse All, a “1 / 11 open” section-progress readout with a progress bar, and visible keyboard shortcuts (Ctrl+Shift+E / Ctrl+Shift+C).",
      "Compare mode that opens two or more names, IDs, or records side-by-side with colored-dot markers — built for the analyst's real task of reconciling duplicate and variant records.",
      "Search-first entry with a two-field minimum guardrail, masked SSNs in result lists, and at-a-glance SID-status lifecycle pills (Active, Purged, Merged, Expunged, Newly Assigned).",
      "Three-level master-detail for arrest bookings (booking → offense → disposition) that keeps every field editable through the legacy “Desired Action” workflow — delivered in full dark and light themes.",
    ],
    results: [
      {
        metric: "Time-to-locate",
        label: "The bet: search-first entry and a count-badge tree get an analyst to the right record faster than the legacy flat form — VSP's to measure, not yet evaluated.",
      },
      {
        metric: "Reconciliation errors",
        label: "The bet: setting variants side by side cuts mismatch errors versus holding nine near-identical names in memory — measurable once deployed.",
      },
      {
        metric: "Task time, 3 levels deep",
        label: "The bet: bulk disclosure reaches booking → offense → disposition detail faster than the legacy accordion — deployment and evaluation sit with VSP.",
      },
    ],
    gallery: [
      {
        src: "/work/vsp-criminal-history/final-search.jpg",
        caption: "Record Search — search-first entry with a two-field guardrail; SSNs masked and SID-status pills in the results table.",
      },
      {
        src: "/work/vsp-criminal-history/final-record-dark.jpg",
        caption: "Record detail, dark theme — the left record-nav tree with live count badges and the sticky identity bar.",
      },
      {
        src: "/work/vsp-criminal-history/final-record-light.jpg",
        caption: "The same record in the light theme — one system, two skins.",
      },
      {
        src: "/work/vsp-criminal-history/final-arrest-nested.jpg",
        caption: "Arrest booking three levels deep — booking → offense → disposition — every field still editable.",
      },
      {
        src: "/work/vsp-criminal-history/iteration-01.jpg",
        caption: "The core iteration — the record-nav tree with live count badges that gave the record its outline.",
      },
    ],
  },
];

// Compact grid — the rest of the work, listed not deep-dived.
export const moreWork = [
  {
    title: "PI-ERP Platform",
    domain: "SaaS · ERP",
    blurb:
      "Unified ERP combining MRO, PI Edge & HRMS as plugin modules, with a custom UI plugin system for switching design-system styles dynamically.",
  },
  {
    title: "WarePro Dashboard & App",
    domain: "Logistics",
    blurb:
      "Redesigned the full WarePro dashboard + mobile app for warehouse workers. Simplified complex flows for older, non-tech users — working prototype in 4 hours.",
  },
  {
    title: "Kerala EV & Tissue Culture",
    domain: "Civic Tech · Gov",
    blurb:
      "Government EV-station prototype delivered in 4 hours + redesigned the Kerala Tissue Culture dashboard, with a full AI concept video (Veo 3, ElevenLabs).",
  },
  {
    title: "AI EdTech Platform",
    domain: "Founder · EdTech",
    blurb:
      "Founder & sole designer/builder of an AI-native personalised learning platform. Prototype complete, CEO-backed.",
  },
  {
    title: "Form Builder & HR Portal",
    domain: "Internal Tools",
    blurb:
      "Designed and built an internal Form Builder and HR Portal at PIPRA — both launching soon.",
  },
  {
    title: "AI Camera Control System",
    domain: "AI · Logistics",
    blurb:
      "AI-powered warehouse camera control system integrated into WarePro for spatial navigation and monitoring.",
  },
];

// The Lab — experiments, prototypes, side builds & archived work.
export const lab = [
  {
    title: "AI EdTech Platform",
    tag: "Founder · Prototype",
    blurb:
      "An AI-native personalised learning platform — my founder project. Prototype complete and CEO-backed.",
    accent: "blue",
  },
  {
    title: "Background Removal Web App",
    tag: "Personal build · In production",
    blurb:
      "Built solo with Antigravity to replace a paid tool for the team. Actively used in production today.",
    accent: "blue",
  },
  {
    title: "Kerala EV Station App",
    tag: "Civic · 4-hour prototype",
    blurb:
      "A working government EV-charging locator prototype, designed and built in 4 hours for a stakeholder pitch.",
    accent: "blue",
  },
  {
    title: "AI Concept Film — Kerala",
    tag: "Veo 3 · ElevenLabs · Premiere",
    blurb:
      "A full AI-generated concept video produced solo — Google Veo 3 visuals, ElevenLabs voice, edited in Premiere.",
    accent: "gold",
  },
  {
    title: "Form Builder",
    tag: "Internal tool · Launching",
    blurb:
      "A drag-and-drop form builder for PIPRA, designed and built front-to-back. Launching soon.",
    accent: "blue",
  },
  {
    title: "3D Warehouse Simulator",
    tag: "Experiment · Spatial",
    blurb:
      "A standalone 3D warehouse simulator for planning and onboarding — a spin-off from the WarePro digital twin.",
    accent: "blue",
  },
];

export const process = [
  {
    step: "01",
    title: "Frame the real problem",
    body: "Research and get to the actual user and business problem before touching pixels.",
  },
  {
    step: "02",
    title: "Design the system",
    body: "Information architecture, flows, and a design system — coherent and reusable.",
  },
  {
    step: "03",
    title: "Prototype fast with AI",
    body: "Use an AI-first workflow to move from idea to high-fidelity, testable prototype in hours.",
  },
  {
    step: "04",
    title: "Ship the working code",
    body: "Build and deliver production code — zero engineering dependency, CEO/VP sign-off.",
  },
];

// Awards & recognition — the gold-highlighted credibility list.
export const awards = [
  "AI Excellence Award — PIPRA Solutions, 2025",
  "Dependable Award — mentored by Anudeep Ayyagaari, UX Designer at Amazon",
  "Google UX Design Certificate — Coursera",
  "Product Design Career Accelerator — GrowthSchool",
  "4-Hour Designathon — Lollypop Design Studio",
];

// Before → after: real products I redesigned. Powers the home comparison band.
export const redesigns = [
  {
    name: "PI-ERP UI",
    accent: "blue",
    before: "/redesigns/erp-before.jpg",
    after: "/redesigns/erp-after.jpg",
    beforeCaption: "Inconsistent modules, heavy visual debt across MRO, PI Edge & HRMS.",
    afterCaption:
      "One unified design system with a custom plugin UI switcher — consistency across every module.",
  },
  {
    name: "WarePro 3D Twin",
    accent: "blue",
    before: "/redesigns/warepro-before.png",
    after: "/redesigns/warepro-after.png",
    beforeCaption: "The legacy twin — harsh colours, a disorienting aerial view, and cryptic legends.",
    afterCaption: "The rebuilt twin — legible zones, guided cameras, traffic-light occupancy at a glance.",
  },
  {
    name: "Kerala Dashboard",
    accent: "blue",
    before: "/redesigns/kerala-before.jpg",
    after: "/redesigns/kerala-after.jpg",
    beforeCaption: "A dated government tissue-culture web app.",
    afterCaption: "A clean, modern civic dashboard — plus a full AI concept video.",
  },
  {
    name: "StoneX App",
    accent: "blue",
    before: "/redesigns/stonex-before.jpg",
    after: "/redesigns/stonex-after.jpg",
    beforeCaption: "Built in Flutter by devs — design drift from the original Figma.",
    afterCaption: "Rebuilt solo in React Native — pixel-true to the intended design.",
  },
];

// Social proof — front-loaded credibility (Garima-style).
// DRAFT quotes grounded in real facts — replace with real verbatim quotes when you can.
export const testimonials = [
  {
    quote:
      "The delivery speed genuinely impressed us — and the backend went live exactly as promised.",
    name: "CEO",
    role: "Golden Suisse",
    accent: "blue",
  },
  {
    quote:
      "He took full ownership from Figma all the way to shipped React Native code. We confirmed the output ourselves.",
    name: "CEO & VP",
    role: "StoneX, Dubai",
    accent: "blue",
  },
  {
    quote:
      "I found Anudeep through his portfolio and had him build two US government platforms independently. He delivered.",
    name: "Senior Product Designer",
    role: "US client",
    accent: "blue",
  },
  {
    quote: "Dependable, with genuine first-principles thinking.",
    name: "Anudeep Ayyagaari",
    role: "UX Designer at Amazon — my mentor",
    accent: "gold",
  },
];

// Horizontal life band — photos + videos that loop. Drop real files in public/life/.
// aspect: "portrait" | "landscape" | "square"  ·  type: "image" | "video"
export const life = [
  { type: "image", src: "/life/dance-01.jpg", label: "On stage", aspect: "portrait" },
  { type: "image", src: "/life/team-01.jpg", label: "Team", aspect: "landscape" },
  { type: "video", src: "/life/dance-02.mp4", label: "Performing", aspect: "portrait" },
  { type: "image", src: "/life/travel-01.jpg", label: "Travel", aspect: "landscape" },
  { type: "image", src: "/life/event-01.jpg", label: "Design Days", aspect: "square" },
  { type: "image", src: "/life/travel-02.jpg", label: "Travel", aspect: "portrait" },
  { type: "video", src: "/life/team-02.mp4", label: "Collab", aspect: "landscape" },
  { type: "image", src: "/life/event-02.jpg", label: "Community", aspect: "landscape" },
] as const;

// Beyond work — the human layer recruiters remember.
export const personal = [
  "Competitive dancer — choreographed & performed since school, with multiple wins.",
  "Active member of the Figma Community, Hyderabad.",
  "Design Days regular — Microsoft, SAP, ServiceNow, Salesforce & Lollypop events.",
  "Travel enthusiast — I draw creative inspiration from new cultures and places.",
];
