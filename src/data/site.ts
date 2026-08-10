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
  { value: "1y 11m", label: "Owning design end-to-end", sub: "problem → code" },
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

/**
 * A composable narrative block. Case studies that define `sections` opt out of
 * the fixed Overview→Process→Outcome skeleton and are told in whatever order
 * and rhythm the product's own story demands — the way a real case study reads.
 */
export type CaseSection =
  // Scannable header block. Hiring managers skim a case study in seconds before
  // deciding whether to read it — this answers role / scope / problem / outcome
  // without them having to hunt for it in prose.
  | {
      kind: "snapshot";
      role: string;
      timeline?: string;
      team?: string;
      platform?: string;
      status?: string;
      problem: string;
      outcome: string;
    }
  // three signals a skimmer should leave with even if they read nothing else
  | { kind: "takeaways"; title?: string; items: string[] }
  // the rules derived from research that every later decision is measured against
  | {
      kind: "principles";
      eyebrow?: string;
      title?: string;
      items: { name: string; body: string }[];
    }
  // research method + what it produced (named methods, honest sample sizes)
  | {
      kind: "research";
      eyebrow?: string;
      title?: string;
      methods: { method: string; detail: string }[];
      findings?: string[];
    }
  // oversized opening paragraph — the hook
  | { kind: "lead"; body: string }
  // standard narrative beat
  | { kind: "prose"; eyebrow?: string; title?: string; body: string | string[] }
  // the line worth stopping on
  | { kind: "quote"; text: string; attribution?: string }
  // a boxed realisation — the turn in the story
  | { kind: "insight"; eyebrow?: string; title: string; body: string }
  | { kind: "bullets"; eyebrow?: string; title?: string; items: string[] }
  | { kind: "figure"; src: string; caption?: string; wide?: boolean }
  | { kind: "figures"; items: { src: string; caption?: string }[] }
  // an inline muted/looping clip of the product actually running
  | { kind: "video"; src: string; caption?: string; badge?: string; wide?: boolean }
  | {
      kind: "steps";
      eyebrow?: string;
      title?: string;
      items: { title: string; body: string; image?: string; imageCaption?: string }[];
    }
  | {
      kind: "decisions";
      eyebrow?: string;
      title?: string;
      items: { decision: string; logic: string }[];
    }
  | { kind: "metrics"; eyebrow?: string; items: { metric: string; label: string }[] }
  // a rules/constraints list rendered as a spec card (e.g. an AI system prompt)
  | { kind: "spec"; eyebrow?: string; title?: string; caption?: string; lines: string[] }
  // honest self-assessment: what scored well, what didn't
  | {
      kind: "scorecard";
      eyebrow?: string;
      title?: string;
      caption?: string;
      items: { label: string; score: string; note: string; tone?: "good" | "bad" }[];
    }
  | { kind: "compare"; eyebrow?: string; title?: string; before: string; after: string }
  | {
      kind: "swatches";
      eyebrow?: string;
      title?: string;
      note?: string;
      items: { hex: string; range: string; meaning: string }[];
    };

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
  // smaller engagements: get a full page at /work/<slug>, but surface from the
  // Lab rather than the main Selected Work grid
  lab?: boolean;
  // when present, the case study is told through these blocks instead of the
  // fixed Overview→Process→Outcome layout (see CaseSection)
  sections?: CaseSection[];
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
    sections: [
      {
        kind: "snapshot",
        role: "Lead product designer & builder — research, design system, 3D scene, and the code",
        timeline: "2025",
        team: "Me, integrating with PIPRA's engineering team",
        platform: "Web — desktop & warehouse tablet",
        status: "Shipped — running in the production WarePro app",
        problem:
          "Warehouse managers reasoned about a physical building through spreadsheets and a legacy 3D view nobody opened — no spatial sense of where anything actually was.",
        outcome:
          "A web-native digital twin mapping live occupancy onto the real racks, with Gemini Live gesture and voice control — integrated into the production app.",
      },
      {
        kind: "takeaways",
        items: [
          "I didn't make the old 3D view prettier — I inverted its three failures: one colour for everything, a lost camera, and meaning stored in a corner legend instead of in the space.",
          "The colour system is the interface. Occupancy lives on the cargo itself, so one glance down an aisle answers the only question a manager has.",
          "Designed and built it: React Three Fiber over a game engine, so the twin stays web-native and opens in a browser tab in seconds.",
        ],
      },
      {
        kind: "lead",
        body:
          "WarePro already had a 3D view. A blinding orange grid seen from a drone, every rack shouting the same colour, and a legend bolted to the corner to explain what the space itself couldn't. Managers glanced at it once and went back to their spreadsheets.",
      },
      {
        kind: "research",
        eyebrow: "Method",
        title: "I went and watched people run a floor",
        methods: [
          {
            method: "Contextual observation",
            detail:
              "Sat with the people who actually run the warehouse floor and watched how they work — where they stand, what they hold, and what they look at first.",
          },
          {
            method: "Legacy audit",
            detail:
              "Went through the existing twin screen by screen to name exactly why it went unused, rather than assuming it was simply ugly.",
          },
        ],
        findings: [
          "Managers think in zones and bin addresses — “A-L-2-3” — not in table rows.",
          "They work standing on the floor with a tablet in one hand, not seated at a desk with a mouse.",
          "They never read inventory top to bottom; they scan for exceptions — what's full, and what's about to be.",
        ],
      },
      {
        kind: "insight",
        eyebrow: "The reframe",
        title: "The space should carry the meaning, not a legend",
        body:
          "The old twin stored its meaning in a corner key, which forced a lookup on every glance — extraneous cognitive load on a screen meant to be read in seconds. If occupancy lives on the cargo itself, understanding becomes perception rather than interpretation, and the aisle answers the question before anyone reads a word.",
      },
      {
        kind: "figure",
        src: "/work/warepro-digital-twin/process-old-ui.png",
        caption:
          "The legacy twin — one colour regardless of load, a camera with no way home, and a legend doing the space's job.",
        wide: true,
      },
      {
        kind: "principles",
        eyebrow: "Design principles",
        title: "What every decision was measured against",
        items: [
          {
            name: "Speak their addresses",
            body:
              "The twin uses the same “A-L-2-3” bin language managers already speak, rendered in space — so no translation happens in anyone's head.",
          },
          {
            name: "Exceptions first",
            body:
              "Nobody reads a warehouse; they hunt for problems. Colour is spent on urgency so full and nearly-full racks pull the eye before anything else.",
          },
          {
            name: "Never lose the operator",
            body:
              "Free 3D navigation disorients non-technical users. Constrained cameras and named viewpoints mean it's impossible to get lost in a void.",
          },
        ],
      },
      {
        kind: "steps",
        eyebrow: "Process",
        title: "From the real building to a working twin",
        items: [
          {
            title: "Started from the real building's blueprint",
            body: "Instead of an idealised diagram, I sketched the actual warehouse — pallet racks, loading docks, storage zones — and mapped every bin to the addresses managers already use, rendered as labels in space.",
            image: "/work/warepro-digital-twin/process-blueprint.jpg",
            imageCaption: "The blueprint — geometry traced from the real floor.",
          },
          {
            title: "Built the scene system",
            body: "The blueprint became geometry: procedural materials drawn at runtime, environment lighting, fog for depth, and every rack carrying its own bin address so the space reads physical and stays legible at warehouse scale.",
            image: "/work/warepro-digital-twin/process-scene.jpg",
            imageCaption: "Version 1 of the scene — labelled racks, zone markings and guided viewpoints.",
          },
          {
            title: "Designed navigation and the overlay",
            body: "One-click guided viewpoints — Exterior, Receiving, Dispatch, Front, Back — glide a constrained camera between strategic angles, while a frosted-glass UI floats above the scene without ever hiding it.",
          },
          {
            title: "Layered in the AI",
            body: "Wired Gemini Live with function calling: the app streams the manager's camera to the model, and gestures or voice map to real actions — switch view, adjust lighting — with no hands on a mouse.",
          },
          {
            title: "Shipped it with engineering",
            body: "Integrated the twin with live occupancy data alongside the engineering team and delivered it inside the production app — not a prototype and a prayer.",
            image: "/work/warepro-digital-twin/process-shipped.png",
            imageCaption: "The finished floor — dock doors with live status, zone grids, and occupancy on real data.",
          },
        ],
      },
      {
        kind: "swatches",
        eyebrow: "The colour logic",
        title: "One glance should answer: where can this pallet go?",
        note:
          "The colour lives on the cargo, not in a corner legend. Because managers scan for exceptions, the scale maps to urgency — green recedes, amber warns, red fires against the dark scene.",
        items: [
          { hex: "#4ade80", range: "1–50%", meaning: "Space available — safe to route inbound stock here." },
          { hex: "#c19a6b", range: "51–99%", meaning: "Nearing capacity — re-slot before it blocks the flow." },
          { hex: "#f87171", range: "100%", meaning: "Full — nothing more fits; action required." },
        ],
      },
      {
        kind: "decisions",
        eyebrow: "Key decisions",
        title: "The calls that shaped it — and why",
        items: [
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
            logic: "The fastest way to lose a manager is to drop them in a void. Named viewpoints move the camera for them and hard constraints make it impossible to clip through a floor — recognition over recall, applied to space.",
          },
          {
            decision: "A dark scene with a frosted-glass overlay",
            logic: "Operators watch these screens across whole shifts. A near-black environment lets the occupancy colours carry the signal, and panels float in glass so context behind them never disappears.",
          },
          {
            decision: "Gemini Live for hands-free control",
            logic: "Floor managers hold tablets and clipboards; mouse-first interaction dies on the floor. Streaming the camera to Gemini and mapping function calls to gestures turns the twin from a viewing tool into an assistant.",
          },
        ],
      },
      {
        kind: "video",
        src: "/work/warepro-digital-twin/proof.mp4",
        badge: "Shipped — in production",
        caption:
          "The twin running inside the production WarePro app — integrated, live, and in managers' hands.",
        wide: true,
      },
      {
        kind: "figures",
        items: [
          { src: "/work/warepro-digital-twin/01.png", caption: "Guided viewpoints — one-click camera transitions." },
          { src: "/work/warepro-digital-twin/02.png", caption: "Traffic-light occupancy on rack-level cargo." },
          { src: "/work/warepro-digital-twin/03.png", caption: "Dock doors with live status — receiving to returns." },
        ],
      },
      {
        kind: "metrics",
        eyebrow: "Where it stands",
        items: [
          { metric: "In production", label: "integrated into the live WarePro app with engineering" },
          { metric: "Hands-free", label: "gesture + voice control via Gemini Live" },
          { metric: "0 installs", label: "fully web-native — runs in a browser tab" },
          { metric: "Real-time", label: "occupancy mapped onto the physical racks" },
        ],
      },
    ],
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
    title: "An iPad app for inspecting stone on Dubai construction sites",
    client: "StoneX — stone inspection, Dubai",
    domain: "Field Ops · Enterprise",
    year: "2025",
    role: "Product Designer (sole designer)",
    impact:
      "My first project, taken from paper sketches to an app that's still in production — redesigned twice when the client changed direction, then migrated Flutter → React with AI.",
    teaser:
      "Inspectors walk Dubai sites logging defects in stone. I designed the iPad app they use to record it, annotate the photos, and generate the report that gets the stone replaced.",
    accent: "blue",
    cover: "/work/stonex-migration/cover.jpg",
    video: "/work/stonex-migration/full-demo.mp4",
    tools: ["Figma", "iPad / Field UX", "Design Systems", "Claude Code"],
    sections: [
      {
        kind: "snapshot",
        role: "Sole product designer — research, IA, UI, prototype, dev handoff",
        timeline: "2025 · my first owned project",
        team: "Me + a dev team, reporting to my manager",
        platform: "iPad-first web app",
        status: "Shipped — still in production",
        problem:
          "Inspectors log stone defects on Dubai construction sites, but the record has to become a formal report before a supplier will replace anything. That reporting loop was slow and manual.",
        outcome:
          "A shipped iPad app that turns an on-site inspection into an annotated, branded report — redesigned twice as the client's direction changed, then migrated Flutter → React.",
      },
      {
        kind: "takeaways",
        items: [
          "I designed for a job I'd never done — most of the value came from studying what happens before and after the screen, not the screen itself.",
          "The client changed direction mid-project and the whole UI was rebuilt. I've shown the work that got replaced, not just the version that survived.",
          "I stayed with it past handoff — reviewing builds weekly, then migrating the entire codebase from Flutter to React myself.",
        ],
      },
      {
        kind: "lead",
        body:
          "In Dubai, before stone goes into a building, someone has to walk the site and check it. StoneX are the people who do that checking — and the app I designed is what they carry.",
      },
      {
        kind: "prose",
        eyebrow: "The business, first",
        title: "Understanding who pays, and why",
        body: [
          "StoneX is a stone inspection company. A project owner hires them to inspect the stone being used on a build — the marble, the cladding, the slabs — and their inspectors go out and record what they find, project by project.",
          "Every defect they log has to reach the stone supplier as a formal, shareable report. That report is what gets faulty stone replaced, and getting it replaced is what StoneX are paid for. So the app was never really about recording data. It was about producing the document that moves money and material.",
        ],
      },
      {
        kind: "insight",
        eyebrow: "The constraint that shaped everything",
        title: "This gets used standing up, on a site, on an iPad",
        body:
          "Inspectors aren't at a desk — they're on a construction site holding a tablet, often in bright sun, often with one hand. That single fact set the rules: an iPad-first layout, targets big enough to hit without precision, flows short enough to finish while standing, and photo capture and annotation built into the inspection rather than bolted on afterwards.",
      },
      {
        kind: "principles",
        eyebrow: "Design principles",
        title: "Three rules I held every screen against",
        items: [
          {
            name: "Gloves-on, sun-on",
            body:
              "Fitts's Law under field conditions: large targets, generous spacing, nothing that needs a precise tap. If it can't be hit while holding a tablet one-handed, it fails.",
          },
          {
            name: "Recognition, not recall",
            body:
              "An inspector shouldn't have to remember what to check. Templates present the checklist; the interface carries the knowledge so working memory stays free for the stone.",
          },
          {
            name: "The report is the product",
            body:
              "Every screen is judged by whether it improves the document that reaches the supplier. Data capture that doesn't sharpen the report is cognitive load with no payoff.",
          },
        ],
      },
      {
        kind: "figure",
        src: "/work/stonex-migration/01-userflow.jpg",
        caption:
          "Task flows mapped before any UI — single-user and multi-user paths, template creation, image annotation, and the report screens they all converge on.",
        wide: true,
      },
      {
        kind: "prose",
        eyebrow: "Where it started",
        title: "Paper first, because the flow was the hard part",
        body: "This was the first project I owned as a designer, and I started it on paper — pen sketches of the inspection sequence, working out how many taps it takes to log a defect and where the photo fits in. Only once the sequence held up did it become wireframes, and only then iPad Pro frames. Getting the flow wrong on paper costs a page; getting it wrong in Figma costs a week.",
      },
      {
        kind: "figure",
        src: "/work/stonex-migration/02-sketches-wireframes.jpg",
        caption:
          "The actual notebook sketches alongside the wireframes they became — the flow argued out in pen before a single pixel was placed.",
        wide: true,
      },
      {
        kind: "figure",
        src: "/work/stonex-migration/03-design-system.jpg",
        caption:
          "A colour palette and style guide built early, so the screens that came later stayed consistent as the product grew.",
      },
      {
        kind: "prose",
        eyebrow: "The shape of the work",
        title: "It was never a straight line",
        body: [
          "I designed in Figma, handed off to the dev team, and then stayed with them — reviewing builds, catching drift, and reworking screens as feedback came back every week. The Figma file ended up as an honest record of that: pages named Wireframes, UI design, Updated UI, Prototype, and After feedback, each one a round of it.",
          "Then the client asked for a different approach — not a tweak, a different direction for the whole product. So the UI and UX were redesigned from the ground up into what became Version 2. That's the part of the process people leave out of case studies: the work that was good, and got replaced anyway, because the client's understanding of their own product had moved on.",
        ],
      },
      {
        kind: "figures",
        items: [
          { src: "/work/stonex-migration/04-first-ui.jpg", caption: "The first UI, straight off the wireframes." },
          { src: "/work/stonex-migration/05-iteration.jpg", caption: "Mid-iteration — reworked against weekly feedback." },
        ],
      },
      {
        kind: "figure",
        src: "/work/stonex-migration/07-version2-final.jpg",
        caption:
          "Version 2 — the full redesign after the client changed direction. Single-user and multi-user home, template selection, inspection details, image annotation, and the report screens.",
        wide: true,
      },
      {
        kind: "video",
        src: "/work/stonex-migration/demo.mp4",
        badge: "In production",
        caption:
          "The inspection flow running in the shipped app — the screen an inspector actually works through on site.",
        wide: true,
      },
      {
        kind: "decisions",
        eyebrow: "The decisions",
        title: "What I changed, and why it mattered on site",
        items: [
          {
            decision: "Templates instead of blank inspection forms",
            logic:
              "The same defect types recur across projects, so I made templates a first-class object — build once, reuse per project. This is recognition over recall: rather than an inspector remembering what to check, the checklist arrives pre-populated. It also cuts extraneous cognitive load at exactly the moment attention should be on the stone, not the tablet.",
          },
          {
            decision: "Annotation directly on the photograph",
            logic:
              "“Chip, lower left” is ambiguous by the time it reaches a supplier. Marking the defect on the photo collapses the evidence and the claim into one artifact, eliminating a translation step — and with it a whole category of slips. When the report triggers a physical replacement, ambiguity is expensive.",
          },
          {
            decision: "Separate single-user and multi-user modes",
            logic:
              "A lone inspector and a coordinated team hold different mental models — one optimises for speed, the other needs assignment, roles, and accountability. Forcing both through one interface would have meant every user paying the complexity cost of the other's needs. Splitting them let each stay simple, and kept choice within each mode narrow (Hick's Law).",
          },
          {
            decision: "A stepper for the inspection flow",
            logic:
              "Inspections are long and get interrupted on site. Chunking them into visible steps with clear progress applies Miller's Law and the goal-gradient effect — you can see how much is left, and a half-finished inspection reads as resumable rather than lost.",
          },
          {
            decision: "The report as the destination, not an export",
            logic:
              "Since the shareable report is what actually gets stone replaced, I treated it as the product's endpoint rather than an afterthought — branded, page-formatted, with preview and zoom editing. WYSIWYG here isn't polish; it removes the gap between what an inspector approves and what a supplier receives.",
          },
        ],
      },
      {
        kind: "video",
        src: "/work/stonex-migration/proof.mp4",
        badge: "In production",
        caption:
          "Report generation — the branded, shareable document that goes to the stone supplier and gets faulty material replaced.",
        wide: true,
      },
      {
        kind: "figures",
        items: [
          { src: "/work/stonex-migration/12-templates.jpg", caption: "Template selection — reusable inspection checklists." },
          { src: "/work/stonex-migration/11-new-inspection.jpg", caption: "New inspection details, built for one-handed entry." },
          { src: "/work/stonex-migration/10-inspection-points.jpg", caption: "Inspection points captured against the project." },
          { src: "/work/stonex-migration/13-users.jpg", caption: "User management for the multi-user team mode." },
        ],
      },
      {
        kind: "prose",
        eyebrow: "The last turn",
        title: "Then I moved the whole codebase myself",
        body: "I'd been experimenting with AI coding tools on my own side projects, and my CEO noticed and asked me to bring it into the team. The app had been built in Flutter. Using Claude Code, I migrated the entire codebase to React — the designer who drew the screens moving the code that rendered them, which meant nothing got lost in translation between the two.",
      },
      {
        kind: "metrics",
        eyebrow: "Where it stands",
        items: [
          { metric: "In production", label: "still running as StoneX's live inspection tool" },
          { metric: "Sole designer", label: "my first owned project, end to end" },
          { metric: "2 full redesigns", label: "reworked when the client changed direction" },
          { metric: "Flutter → React", label: "whole codebase migrated with Claude Code" },
        ],
      },
      {
        kind: "prose",
        eyebrow: "What I took from it",
        title: "Designing for a job I'd never done",
        body: "I had never inspected stone, never worked a construction site, and never used an iPad as a work tool in the sun. Most of the value I added came from asking what happens before and after the screen — where the inspector is standing, who reads the report, and what the report is supposed to make happen. The redesigns stung at the time, but they were the client learning their own product out loud, and the second version was better for it.",
      },
    ],
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

  // -------------------------------------------------------------- PI-ERP
  // VERIFY: the "delivered as a UI plugin/theme layer so core code stays
  // untouched" framing is inferred from iDempiere's plugin architecture plus
  // Anudeep's constraint that core code and DB could not change. Confirm.
  {
    slug: "pi-erp-design-system",
    title: "Restyling an ERP that 4 years of muscle memory depended on",
    client: "PIPRA Solutions — PI-ERP (built on iDempiere)",
    domain: "Enterprise SaaS · Design Systems",
    year: "2025",
    role: "Product Designer — design system & UI",
    impact:
      "A complete visual rebuild of a live open-source ERP — without moving a single control, changing a flow, or touching the core code or database.",
    teaser:
      "Clients had used this ERP daily for four years. I gave it an entirely new visual language while keeping every screen exactly where users already expected it.",
    accent: "blue",
    cover: "/work/pi-erp/cover.jpg",
    video: "/work/pi-erp/demo-new.mp4",
    compare: {
      before: "/work/pi-erp/dashboard-old.jpg",
      after: "/work/pi-erp/dashboard-new.jpg",
    },
    tools: ["Figma", "Atlassian Design System", "Design Tokens", "iDempiere"],
    sections: [
      {
        kind: "snapshot",
        role: "Product designer — design-system research, UI system, full screen restyle",
        timeline: "2025 · delivered in a sprint",
        team: "Me, with PIPRA's engineering team · brief from my manager and CEO",
        platform: "Web — enterprise ERP on iDempiere",
        status: "Shipped — in use by the team and clients",
        problem:
          "PI-ERP runs on iDempiere, whose stock interface the team and clients had used daily for four years. Leadership wanted a modern UI in a sprint — but the user flow, core code and database could not change.",
        outcome:
          "A complete visual rebuild on the Atlassian Design System, with every control left exactly where four years of muscle memory expected it — so nobody had to be retrained.",
      },
      {
        kind: "takeaways",
        items: [
          "The hard part wasn't designing a new UI — it was deciding how much to leave alone. Every gadget, tab and control kept its position.",
          "I evaluated Carbon, Material and Atlassian against a genuinely data-dense enterprise product, and chose Atlassian because it's built for exactly this density.",
          "Constraint-driven: no changes to user flow, core code or database. The redesign had to be purely a visual layer.",
        ],
      },
      {
        kind: "lead",
        body:
          "The people using this ERP had used the same screens every working day for four years. Any redesign that made them stop and look for something would cost more than the redesign was worth.",
      },
      {
        kind: "prose",
        eyebrow: "The brief",
        title: "Modernise it — but don't break anyone's day",
        body: [
          "PI-ERP is built on iDempiere, a mature open-source ERP. It works, it's deep, and it looks its age: dense grey chrome, tiny controls, and a visual language that hadn't moved in years. My manager and CEO wanted it modernised, in a sprint.",
          "The constraints came with the brief and they were absolute. The user flow could not change. The core code could not change. The database could not change. Clients were live on this system, running their businesses through it, today.",
        ],
      },
      {
        kind: "insight",
        eyebrow: "The reframe",
        title: "The best redesign here is the one nobody has to learn",
        body:
          "Four years of daily use builds real motor memory — people reach for controls without reading them. A redesign that relocates things resets that to zero and taxes every user with relearning, which shows up as support load and change aversion long before it shows up as praise. So I inverted the usual goal: keep the spatial model perfectly intact, and change only the material it's made of.",
      },
      {
        kind: "research",
        eyebrow: "Method",
        title: "Choosing a design system for genuine data density",
        methods: [
          {
            method: "Design-system evaluation",
            detail:
              "Assessed IBM Carbon, Material UI and the Atlassian Design System against real PI-ERP screens — dense grids, deep forms, multi-level menus — rather than against marketing examples.",
          },
          {
            method: "Interface audit",
            detail:
              "Went through the existing iDempiere UI screen by screen, cataloguing every component type and its position so the restyle could be mapped one-to-one.",
          },
        ],
        findings: [
          "Material's generous spacing and motion suit consumer products, but cost too many rows on screens where density is the point.",
          "Carbon is genuinely strong for enterprise data, but its visual language is distinctive enough to read as IBM's rather than ours.",
          "Atlassian's system is built for exactly this problem — tool-like, dense, calm, and designed around tables, forms and nested navigation that people live in all day.",
        ],
      },
      {
        kind: "principles",
        eyebrow: "Design principles",
        title: "The rules I gave myself before touching a screen",
        items: [
          {
            name: "Nothing moves",
            body:
              "Every control keeps its position. If a user could find it with their eyes closed on Friday, they can still find it on Monday. Layout is treated as a contract, not a canvas.",
          },
          {
            name: "Restyle, never rebuild",
            body:
              "The change is a visual layer over untouched logic. No flow gets shortened, no step gets merged, no field gets moved — however tempting the improvement looks.",
          },
          {
            name: "Density is a feature",
            body:
              "This is a tool people work in for eight hours. Whitespace that costs visible rows is a downgrade, so the system had to breathe without pushing content off screen.",
          },
        ],
      },
      {
        kind: "compare",
        eyebrow: "Before and after",
        title: "The same dashboard, rebuilt",
        before: "/work/pi-erp/dashboard-old.jpg",
        after: "/work/pi-erp/dashboard-new.jpg",
      },
      {
        kind: "prose",
        eyebrow: "The proof",
        title: "Look at what stayed exactly where it was",
        body: "Activities, Calendar, Donate and Performance sit in the same order, in the same columns, with the same collapse and expand controls in the same corners. The Views panel is still beneath them. The tab still says Dashboard (1). Every number is identical. What changed is the typography, the spacing rhythm, the control styling, the count badges, and a navigation sidebar that finally shows the module structure — MRO, Manufacturing, Material Management, Project Management — instead of hiding it behind a menu.",
      },
      {
        kind: "figures",
        items: [
          { src: "/work/pi-erp/login-old.jpg", caption: "Login — before." },
          { src: "/work/pi-erp/login-new.jpg", caption: "Login — after: PiERP identity, Atlassian form patterns." },
          { src: "/work/pi-erp/grid-old.jpg", caption: "Business partner grid — before." },
          { src: "/work/pi-erp/grid-new.jpg", caption: "Business partner grid — after: same columns, readable density." },
          { src: "/work/pi-erp/list-old.jpg", caption: "List view — before." },
          { src: "/work/pi-erp/list-new.jpg", caption: "List view — after." },
          { src: "/work/pi-erp/report-old.jpg", caption: "Reports — before." },
          { src: "/work/pi-erp/report-new.jpg", caption: "Reports — after." },
          { src: "/work/pi-erp/modal-old.jpg", caption: "Dashboard gadget modal — before." },
          { src: "/work/pi-erp/modal-new.jpg", caption: "Dashboard gadget modal — after." },
          { src: "/work/pi-erp/menu-old.jpg", caption: "Main menu — before." },
          { src: "/work/pi-erp/menu-new.jpg", caption: "Main menu — after: hierarchy made visible." },
        ],
      },
      {
        kind: "decisions",
        eyebrow: "Key decisions",
        title: "The calls that made it safe to ship",
        items: [
          {
            decision: "Atlassian Design System over Carbon or Material",
            logic:
              "Chosen for density, not taste. Atlassian is designed for tool-like products full of tables, forms and nested navigation — the exact shape of an ERP. Material would have cost rows to spacing; Carbon would have made the product read as IBM's rather than ours.",
          },
          {
            decision: "Preserve every control position",
            logic:
              "Jakob's Law cuts both ways: users build expectations from what they already use, and for these people that's this app, every day, for four years. Keeping the spatial model intact means recognition still does the work and nothing has to be relearned.",
          },
          {
            decision: "Ship it as a visual layer, not a rewrite",
            logic:
              "The core code and database were off-limits, and honestly that was the right call — a rewrite would have put a working, revenue-generating system at risk for a cosmetic gain. Treating the UI as a swappable layer kept the blast radius to pixels.",
          },
          {
            decision: "Surface the module hierarchy in the sidebar",
            logic:
              "The one place I did add rather than restyle. The modules always existed but lived behind a menu; exposing them as persistent navigation improves information scent without moving anything that was already on screen.",
          },
          {
            decision: "Resist the improvements I could see",
            logic:
              "There were flows I'd have shortened and fields I'd have regrouped. Every one of those was out of scope by definition — and shipping a restyle that nobody has to learn is worth more to a live client base than a better flow they'd have to be retrained on.",
          },
        ],
      },
      {
        kind: "video",
        src: "/work/pi-erp/demo-old.mp4",
        caption:
          "The original iDempiere interface — the product as the team and clients had used it for four years.",
        wide: true,
      },
      {
        kind: "video",
        src: "/work/pi-erp/demo-new.mp4",
        badge: "Shipped",
        caption:
          "The rebuilt PiERP interface — same structure, same flows, entirely new visual language.",
        wide: true,
      },
      {
        kind: "metrics",
        eyebrow: "Where it stands",
        items: [
          { metric: "0 flows changed", label: "user journeys, core code and database left untouched" },
          { metric: "1 sprint", label: "from brief to a fully restyled interface" },
          { metric: "4 years", label: "of existing muscle memory preserved" },
          { metric: "Shipped", label: "in use by the team and clients" },
        ],
      },
      {
        kind: "prose",
        eyebrow: "What I took from it",
        title: "Restraint is a design skill",
        body: "It would have been easier, and more fun, to redesign this properly — new flows, fewer steps, my own visual language. The work was in not doing that. Understanding why a constraint exists, and then designing hard inside it, produced something that shipped in a sprint and cost its users nothing to adopt. That trade is one I'd make again.",
      },
    ],
    overview:
      "PI-ERP is PIPRA's enterprise platform, built on the open-source iDempiere ERP. The team and clients had used its stock interface daily for four years when leadership asked for a modern UI — in a sprint, and without changing the user flow, core code or database. After evaluating Carbon, Material and Atlassian against real screens, I rebuilt the entire interface on the Atlassian Design System while keeping every control exactly where users already expected it.",
    problem: [
      "Clients were live on the system daily; any relocation of controls would cost real retraining time.",
      "The user flow, core code and database were all off-limits — the redesign had to be purely visual.",
      "ERP screens are genuinely data-dense, so a design system tuned for consumer products would have cost visible rows.",
    ],
    process: [
      { title: "Audited the existing interface", body: "Catalogued every component type and its position so the restyle could map one-to-one." },
      { title: "Evaluated design systems", body: "Compared IBM Carbon, Material UI and Atlassian against real PI-ERP screens rather than marketing examples." },
      { title: "Rebuilt the visual layer", body: "Applied the Atlassian system across every screen while holding all positions and flows constant." },
      { title: "Surfaced the module hierarchy", body: "The one addition — persistent sidebar navigation exposing modules that had been hidden behind a menu." },
    ],
    solution: [
      "A complete visual rebuild on the Atlassian Design System, tuned for enterprise data density.",
      "Every control, gadget and tab preserved in its original position — zero retraining for existing users.",
      "Delivered as a visual layer, leaving user flows, core code and the database untouched.",
    ],
    results: [
      { metric: "0 flows changed", label: "core code and database untouched" },
      { metric: "1 sprint", label: "brief to fully restyled interface" },
      { metric: "4 years", label: "of user muscle memory preserved" },
    ],
    gallery: [],
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
    sections: [
      {
        kind: "snapshot",
        role: "Product designer — explored three directions, refined the chosen one",
        timeline: "2026 · directions delivered in days",
        team: "Under senior designer Madhavi Soma, with VSP stakeholders",
        platform: "Desktop web — internal analyst tool",
        status: "Delivered interactive build · synthetic test data only",
        problem:
          "An analyst must match a court's seal order to the exact right person before sealing a criminal record. Sealing the wrong person's history is a legal error you cannot undo.",
        outcome:
          "A review console that performs the field-by-field match for the analyst and makes sealing a deliberate, staged, auditable action rather than one click.",
      },
      {
        kind: "takeaways",
        items: [
          "I reframed the task: the analyst isn't reading a record, they're answering one question field by field — does this order match this person?",
          "I explored three genuinely different directions in days so the client could choose from real options, not a single take.",
          "For an irreversible legal action, I designed friction on purpose — a staged status flow plus a supervisor queue before anything seals.",
        ],
      },
      {
        kind: "lead",
        body:
          "When a Virginia court orders a criminal record sealed, someone has to match that order to the exact right person — and get it right the first time, because you cannot unseal a life you sealed by mistake.",
      },
      {
        kind: "prose",
        eyebrow: "How it started",
        title: "Two documents, compared by eye",
        body: "The review still ran through a dense legacy criminal-history screen — rows of CCN, DCN and OTN identifiers an analyst cross-checked against the paper court order by sight. Nothing on screen indicated whether a candidate record actually matched the person named in the order; they held two documents side by side and compared strings. On a task where a wrong match seals the wrong life, “compare it carefully” isn't a safeguard. The interface has to be.",
      },
      {
        kind: "insight",
        eyebrow: "The reframe",
        title: "The interface should do the comparison, not ask for it",
        body:
          "The analyst isn't reading a record — they're answering one question, field by field: does this court order match this person? Once framed that way, the design brief writes itself. Surface each candidate, mark every field that matches and every field that doesn't, and make the act of sealing deliberate and logged. Every one of the three directions traces back to that single sentence.",
      },
      {
        kind: "principles",
        eyebrow: "Design principles",
        title: "Rules for an irreversible decision",
        items: [
          {
            name: "Verification, not vigilance",
            body:
              "Never rely on an analyst spotting a one-character difference. The system compares and states the result, because human string-matching fails exactly when it matters most.",
          },
          {
            name: "Evidence over confidence",
            body:
              "Say why a match is trustworthy — fingerprint, name-only, alias — rather than showing a score. A label carries reasoning; a percentage asks the analyst to guess.",
          },
          {
            name: "Friction where it counts",
            body:
              "Speed is not the goal here. An unrecoverable legal action earns a staged confirmation and a second set of eyes, deliberately.",
          },
        ],
      },
      {
        kind: "steps",
        eyebrow: "Process",
        title: "Three directions, then one refined",
        items: [
          {
            title: "Mapped the sealing rules and the match fields",
            body: "Before any UI, I pinned down which fields decide a match — CCN, DCN, OTN, disposition — and the states a record moves through: pending review → matched → locked and sealed. Those rules became the skeleton every direction hung on.",
          },
          {
            title: "Direction 1 — the Valor Portal",
            body: "A light, document-style layout with semantic match labels — Fingerprint Match, Name-Only Match, Alias Match — so an analyst reads the strength of each candidate instantly, plus per-field green/red highlighting so a single mismatched DCN can't hide in a row of numbers.",
            image: "/work/us-gov-platforms/iteration-1.jpg",
            imageCaption: "Direction 1 — semantic match labels and per-field highlighting.",
          },
          {
            title: "Direction 2 — the VSP Judicial system",
            body: "I re-grounded the interface in VSP's own judicial identity: a calmer purple system, the court order set clearly against each potential match, and the disposition mapping made explicit. Less database, more considered judicial decision. This is the direction the client responded to.",
            image: "/work/us-gov-platforms/iteration-2.jpg",
            imageCaption: "Direction 2 — the judicial-purple system, order weighed against each match.",
          },
          {
            title: "Direction 3 — the Match Console",
            body: "I pushed a power-user direction to find the ceiling: a dense console with toggles, an explicit sealing rule spelled out, and keyboard-first review for analysts working through volume. It defined the upper bound — and confirmed the middle direction was the right call.",
            image: "/work/us-gov-platforms/iteration-3.jpg",
            imageCaption: "Direction 3 — dense and keyboard-first, for high-volume review.",
          },
          {
            title: "The chosen direction, refined with feedback",
            body: "The client picked the Judicial direction and I folded in every note: Created Date and SSN added, DOB / Sex / Race / SID columns, a plain-English Disposition Description, per-field ✓ / ✗ match pills, a Hold → Matched → Unlocked status flow, and a Supervisor Queue with Submit Review and Finalize Seal actions.",
          },
        ],
      },
      {
        kind: "swatches",
        eyebrow: "The colour logic",
        title: "Colour is the verification, done for you",
        note:
          "The whole interface exists so an analyst never compares two identifier strings by eye. The system compares and colours the result, against VSP's judicial purple.",
        items: [
          { hex: "#16a34a", range: "Match", meaning: "This field matches the court order exactly — safe to seal on." },
          { hex: "#dc2626", range: "No match", meaning: "This field differs — not a clean match; stop and check." },
          { hex: "#7c3aed", range: "VSP", meaning: "The judicial-purple system colour — identity, headers and the sealing actions." },
        ],
      },
      {
        kind: "decisions",
        eyebrow: "Key decisions",
        title: "The calls that made sealing safe",
        items: [
          {
            decision: "Semantic match labels, not a match score",
            logic: "“Fingerprint Match” tells an analyst why to trust a candidate and what evidence backs it; a raw percentage makes them guess. The label carries the reasoning, not just the confidence.",
          },
          {
            decision: "Per-field ✓ / ✗ pills instead of one row-level status",
            logic: "The sealing decision is made field by field, so verification has to be field by field. A single “matched” row hides the one red DCN that should stop everything.",
          },
          {
            decision: "Disposition description, not just the code",
            logic: "Showing “Nolle Prossed” instead of a raw code removes a lookup and a chance to misread — recognition over recall, on a field with legal consequences.",
          },
          {
            decision: "A staged sealing action — Hold → Matched → Finalize",
            logic: "An irreversible legal action should never be one click. The status flow forces explicit confirmation, and a supervisor queue puts a second set of eyes on it before any record is sealed.",
          },
          {
            decision: "Masked SSNs and synthetic data throughout",
            logic: "The interface handles some of the most sensitive data a state holds. Masking identifiers by default and designing only against test records keeps that sensitivity respected from the first pixel.",
          },
        ],
      },
      {
        kind: "metrics",
        eyebrow: "Where it stands",
        items: [
          { metric: "3 directions", label: "designed and delivered in days for a faster decision" },
          { metric: "Field-level", label: "match verification — not a manual string check" },
          { metric: "Audit-ready", label: "every match selection logged with reviewer and time" },
          { metric: "Delivered", label: "interactive build; deployment sits with VSP" },
        ],
      },
    ],
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
    sections: [
      {
        kind: "snapshot",
        role: "Product designer — IA, interaction design, lo-fi through hi-fi",
        timeline: "2026",
        team: "Under senior designer Madhavi Soma, with VSP stakeholders",
        platform: "Desktop web — dark and light themes",
        status: "Delivered interactive build · synthetic test data only",
        problem:
          "One person's criminal record can hold nine name variants, five identifications and ten arrest bookings — and none of it can be simplified away, because reconciling it is the job.",
        outcome:
          "A record interface that answers density with navigation, disclosure and comparison — while preserving the transaction model a two-decade-old system of record runs on.",
      },
      {
        kind: "takeaways",
        items: [
          "You can't simplify a screen where the data is the job — so I gave a huge record structure instead of removing anything from it.",
          "Stakeholders pushed back that a tidy outline wasn't enough; I turned disclosure itself into a control with expand-all, progress and keyboard shortcuts.",
          "I kept the legacy Desired Action workflow exactly as-is — modernising the interface without retraining every analyst or re-proving every transaction.",
        ],
      },
      {
        kind: "lead",
        body:
          "This is the densest screen I have ever designed. One person can carry nine names, five identifications and ten arrest bookings that each branch into offenses and then dispositions — and every field has to stay editable.",
      },
      {
        kind: "prose",
        eyebrow: "How it started",
        title: "A workhorse that fights the person using it",
        body: "The legacy CCH is a mid-2000s enterprise app where an analyst manages an entire criminal-history record through one cramped accordion. Every section — names, arrest bookings, identifications, physical characteristics, fingerprints, firearm-rights restoration — stacks flat, with no hierarchy to tell you where you are. The forms are dense multi-panel grids of coded dropdowns that assume you already speak the system's private language, and everything hangs off a single “Desired Action” dropdown per record. It works. It just fights you.",
      },
      {
        kind: "insight",
        eyebrow: "The reframe",
        title: "Don't reduce the record — give it structure",
        body:
          "The instinct with a screen this dense is to strip it back, but here the data is the job: you can't simplify away nine names when reconciling those nine names is the work. So the goal changed from reduction to legibility — make a huge record navigable, its sections openable on demand, and its duplicates directly comparable, while leaving the system of record intact underneath.",
      },
      {
        kind: "principles",
        eyebrow: "Design principles",
        title: "Three rules for surviving density",
        items: [
          {
            name: "Orientation before action",
            body:
              "Show the shape of a record — how many names, IDs, bookings — before anyone opens a section, so nobody works blind inside something they can't see the edges of.",
          },
          {
            name: "Disclosure is a control",
            body:
              "With this many rows, hiding detail isn't enough. The analyst decides how much of the record is exposed, in one action, at any moment.",
          },
          {
            name: "Respect the muscle memory",
            body:
              "The transaction model is a contract analysts already know. Modernise how it looks and reads; never change what it does.",
          },
        ],
      },
      {
        kind: "steps",
        eyebrow: "Process",
        title: "Lo-fi, a tree, a pushback, then compare",
        items: [
          {
            title: "Started in low fidelity — structure before style",
            body: "I gray-boxed the whole record first to settle the hard question: how does an entire criminal history fit on one screen without becoming the legacy wall of panels? Lo-fi kept the argument about organisation rather than colour.",
            image: "/work/vsp-criminal-history/lofi-01.jpg",
            imageCaption: "Low-fidelity blocking — proving the structure holds before any visual design.",
          },
          {
            title: "The core decision — a left record-nav tree",
            body: "Flat, a record this size buries the analyst on load. A collapsible tree turns it into an outline — Overview, Source Data, Criminal Lifecycle — with a live count badge on every node, so you read what the record contains before opening a single section.",
            image: "/work/vsp-criminal-history/iteration-01.jpg",
            imageCaption: "The iteration that set the direction — a nav tree with live count badges.",
          },
          {
            title: "Stakeholder pushback: “we have to get to the details”",
            body: "The note back was sharp and correct: this is a data-driven record, and the job is reaching all of the detail, fast. A tidy outline you have to click through eleven times isn't a win under time pressure. Orientation alone wasn't enough.",
            image: "/work/vsp-criminal-history/iteration-02.jpg",
            imageCaption: "Reworked around the feedback — sections gain counts and bulk controls.",
          },
          {
            title: "Progressive disclosure with bulk controls",
            body: "So disclosure became first-class: Expand All / Collapse All, a live “1 / 11 open” progress readout, and visible keyboard shortcuts for analysts who live on the keyboard. The deepest object — booking → offense → disposition, three levels down — stays reachable without losing the thread back to the top.",
            image: "/work/vsp-criminal-history/final-arrest-nested.jpg",
            imageCaption: "An arrest booking opened three levels deep, and still legible.",
          },
          {
            title: "Compare mode for the analyst's real task",
            body: "The work isn't reading a record top to bottom; it's reconciling variants. Select two or more rows and open them side by side with colour markers, so duplicates are judged against each other in place rather than held in working memory.",
          },
          {
            title: "High fidelity, in dark and light",
            body: "Madhavi and I took it to high fidelity as one system in two full themes, each carrying the sticky identity bar, the status-lifecycle pills, and search-first entry with its two-field floor. Same components, two skins.",
            image: "/work/vsp-criminal-history/final-record-light.jpg",
            imageCaption: "The light theme — one system, two skins.",
          },
        ],
      },
      {
        kind: "swatches",
        eyebrow: "The colour logic",
        title: "A record's legal state, readable at a glance",
        note:
          "SID status pills let an analyst read lifecycle state in the results table and identity bar before opening or editing anything — because state changes what you're allowed to do.",
        items: [
          { hex: "#2563eb", range: "New", meaning: "Newly assigned — created but not yet fully built out." },
          { hex: "#16a34a", range: "Active", meaning: "Live record in good standing — safe to view and edit." },
          { hex: "#6b7280", range: "Merged", meaning: "Folded into another SID; retained for lineage." },
          { hex: "#9f5f5f", range: "Expunged", meaning: "Sealed or removed by court order — handle under restriction." },
          { hex: "#dc2626", range: "Purged", meaning: "Removed from the active system — a terminal state." },
        ],
      },
      {
        kind: "decisions",
        eyebrow: "Key decisions",
        title: "Comparison, hierarchy, and not breaking what works",
        items: [
          {
            decision: "A left record-nav tree, not a longer scroll",
            logic: "A persistent tree with live count badges answers “where am I and how much is here” before you touch anything — orientation before action, on a record too large to hold in working memory.",
          },
          {
            decision: "Expand All / Collapse All, progress, and keyboard shortcuts",
            logic: "Stakeholders needed to reach the details, so control became explicit: everything or nothing in one action, a progress bar showing how much is open, and shortcuts for expert hands. Progressive disclosure here isn't decoration — it's how you survive the density.",
          },
          {
            decision: "Compare mode — open 2+ rows side by side",
            logic: "Reconciliation is the real task: which of these nine names is the same person? Making an analyst expand rows one at a time and hold differences in memory is where errors happen. Side-by-side turns recall into recognition.",
          },
          {
            decision: "Preserve the legacy “Desired Action → Submit” model",
            logic: "It's the contract the entire workflow runs on. Reinventing it would have meant retraining every analyst and re-proving every transaction. I kept the model exactly and only made it legible — the muscle memory survives, the friction doesn't.",
          },
          {
            decision: "Search-first entry with a two-field minimum",
            logic: "The legacy app dropped you into a dense record with no front door. Leading with search matches how an analyst actually starts, and the two-field floor is a quiet guardrail against pulling up the wrong human.",
          },
          {
            decision: "SSN masked in lists, revealed only in detail",
            logic: "A results table is shoulder-surfable and screenshot-prone. Identifiers stay masked there and appear in full only inside a record you deliberately opened — least exposure by default.",
          },
        ],
      },
      {
        kind: "metrics",
        eyebrow: "Where it stands",
        items: [
          { metric: "11 sections", label: "one record, one collapsible nav tree" },
          { metric: "3 levels deep", label: "booking → offense → disposition, all editable" },
          { metric: "Dark + light", label: "the same system proven under a full re-skin" },
          { metric: "Delivered", label: "interactive build; deployment sits with VSP" },
        ],
      },
    ],
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

  // -------------------------------------------------------------- MyResumeAI (founder product)
  {
    slug: "myresumeai",
    title: "The resume tool I built so I'd stop writing everyone's resume by hand",
    client: "MyResumeAI — personal product",
    domain: "AI Product · Founder",
    year: "2026",
    role: "Founder & Solo Builder",
    impact:
      "My own AI resume builder — architected with zero backend, grounded in research into roughly a thousand MAANG-tier résumés, designed, built and shipped solo in about a week.",
    teaser:
      "A zero-backend AI resume, cover letter & LinkedIn generator, built solo in a week and grounded in research into what actually passes ATS.",
    accent: "blue",
    cover: "/work/myresumeai/cover.jpg",
    tools: ["Claude API (Anthropic)", "React + Vite", "Razorpay", "Antigravity"],
    sections: [
      {
        kind: "snapshot",
        role: "Founder — research, product design, AI prompt engineering, full-stack build, monetization",
        timeline: "7 days, concept to live product",
        team: "Solo",
        platform: "Responsive web · mobile-first",
        status: "Live & monetized at myresumeai.org",
        problem:
          "Job seekers spend hours on resumes that look good and get auto-rejected, because an ATS parses the file before a recruiter ever opens it — and nobody tells them that.",
        outcome:
          "A live product that generates an ATS-safe resume, cover letter and LinkedIn About in one pass, scored against rules derived from ~1,000 MAANG-tier résumés. Taking real payments.",
      },
      {
        kind: "takeaways",
        items: [
          "The research is the product, not the AI — I reverse-engineered what passes ATS parsing, then constrained the model to write only inside that structure.",
          "I chose zero backend deliberately: no server, no database, no login. It removed my infrastructure cost and the signup wall in one decision.",
          "I audited my own shipped product and scored it 71/100 — the weakest screens were the endings, and I've published those scores rather than hidden them.",
        ],
      },
      {
        kind: "lead",
        body:
          "My roommate got placed. The resume I'd written for him by hand got him shortlisted, and that was the moment I stopped treating this as a favour — because I'd already written that same resume, by hand, for four other people.",
      },
      {
        kind: "prose",
        eyebrow: "The pattern",
        title: "Everyone around me was losing to software they'd never heard of",
        body: [
          "Friends. Cousins. Roommates. Someone would send me their resume before applying somewhere that mattered, and I'd do the same manual work every time: rewrite the summary, restructure the sections, and guess at what would survive on the other side.",
          "They'd already done the work. Two hours in Canva, careful colour choices, a layout they were proud of. Then thirty applications, and nothing. Not one callback. The assumption was always that they weren't good enough.",
        ],
      },
      {
        kind: "insight",
        eyebrow: "The realisation",
        title: "The first reader isn't a person",
        body:
          "Before a recruiter ever opens a resume, an Applicant Tracking System parses it. Multi-column layouts, graphics, and icons — everything that makes a Canva resume look designed — are exactly what breaks that parse. My friends weren't being rejected. They were being failed to be read. That reframed the whole problem: this isn't a writing tool, it's a parsing problem wearing a writing tool's clothes.",
      },
      {
        kind: "prose",
        eyebrow: "Research",
        title: "So I went and looked at what actually gets through",
        body: [
          "I pulled together roughly a thousand resumes from people who'd landed roles at MAANG-tier companies and read them for structure rather than content — how sections were ordered, how dense the summary ran, how skills were listed, and above all what the layout did. Single-column, plain-text, standard section headers, no graphics. The beautiful templates were simply absent from the set.",
          "Then I checked that against how the systems themselves behave — Taleo, Workday, SuccessFactors, the parsers sitting behind most large Indian IT employers — and against a published resume guide from a senior recruiter-turned-tech-director. Three independent sources, one answer. That agreement is what turned an instinct into a rule I was willing to build a product on.",
        ],
      },
      {
        kind: "research",
        eyebrow: "Method",
        title: "How I checked I wasn't just guessing",
        methods: [
          {
            method: "Artifact analysis",
            detail:
              "~1,000 résumés from people hired at MAANG-tier companies, read for structure rather than content — section order, summary density, skills formatting, and above all layout.",
          },
          {
            method: "Competitive audit",
            detail:
              "Used each major builder end-to-end — Canva, Word templates, Naukri, Resume.io, Zety — generated real resumes and tested the output against ATS scoring tools rather than trusting their marketing.",
          },
          {
            method: "User interviews (informal)",
            detail:
              "Conversations with 15+ freshers in my own network about what they'd tried, what it cost them, and what happened after they applied.",
          },
          {
            method: "Expert validation",
            detail:
              "Cross-checked my structural conclusions against a published resume guide from a senior technology director with recruiting background — one page, plain text, STAR-framed bullets.",
          },
        ],
        findings: [
          "Multi-column layouts and graphics — the things that make a resume look designed — are exactly what break ATS parsing.",
          "“I spent two hours on Canva and got zero callbacks” came up again and again; people blamed their own experience, never the file format.",
          "Freshers consistently froze on the experience section — not because they'd done nothing, but because nobody had taught them how to phrase it.",
          "Every affordable tool optimised for visual polish; every ATS-safe option was either generic, foreign-priced, or manual.",
        ],
      },
      {
        kind: "quote",
        text:
          "I didn't need to make resumes prettier. I needed to make them readable by a machine that never asked for beauty.",
      },
      {
        kind: "prose",
        eyebrow: "The market",
        title: "Every existing option forced a trade-off",
        body: "Canva looked great and failed the parse. Word templates parsed fine and taught you nothing about what to write. Global tools like Resume.io were priced for the US. Professional writers cost more than most Indian freshers earn in a month, and took a week. ChatGPT could write the words but left you formatting them yourself. Nobody had put ATS-safe structure, MAANG-tier quality, and a price a student could actually pay in the same place.",
      },
      {
        kind: "principles",
        eyebrow: "Design principles",
        title: "Three rules the whole product obeys",
        items: [
          {
            name: "Parseable beats pretty",
            body:
              "If a machine can't read it, a human never will. Every visual decision loses to structural compliance — which is why there's exactly one template and it isn't the prettiest one I could have made.",
          },
          {
            name: "Prove it before you price it",
            body:
              "The user is often a student with ₹49 to spare. Value has to be visible and verifiable — score, checklist, full document — before money is ever mentioned.",
          },
          {
            name: "Constrain the model, don't trust it",
            body:
              "The AI doesn't get to freestyle. It writes inside a researched structure with hard rules, so output quality holds even when the person's input is weak.",
          },
        ],
      },
      {
        kind: "decisions",
        eyebrow: "The bets",
        title: "Four decisions that shaped everything downstream",
        items: [
          {
            decision: "One format. No template gallery.",
            logic:
              "Every competitor sells choice — fifty templates, colours, layouts. I shipped exactly one: single-column, black and white, text-based. More options would only have meant more ways to fail a parse silently, and Hick's Law says every extra choice costs decision time from someone who came here anxious. Removing the choice was the feature, and it cut days off the build.",
          },
          {
            decision: "No backend. No login. No server.",
            logic:
              "Claude is called straight from the browser, PDFs are generated client-side, Razorpay's client SDK takes the payment, and localStorage remembers a returning user without an account. One decision killed my infrastructure cost, my maintenance burden, and the signup wall that kills funnels — all at once.",
          },
          {
            decision: "Three documents from one generation.",
            logic:
              "A resume alone is a commodity, and ₹49 feels like a lot for one document. A resume, a cover letter, and a LinkedIn About — all generated from the same input, in the same pass — costs barely more in tokens but changes what the price feels like, and keeps a candidate's story consistent everywhere a recruiter looks.",
          },
          {
            decision: "Free to see it. Pay only to take it.",
            logic:
              "You generate the full thing, see your score, and read every checklist item before any payment exists — and the paywall slides up with your resume still visible behind it. That's the endowment effect doing the work: by the time there's a price, it's already your resume on screen, and paying feels like unlocking something you own rather than buying something you don't. Charging at the download step means the money only ever follows proof.",
          },
        ],
      },
      {
        kind: "prose",
        eyebrow: "The build",
        title: "I wrote the product before I wrote the product",
        body: "Rather than start with components, I wrote the entire thing as a specification first — every screen, every field's behaviour, the motion system, the colour reasoning, and the AI's own rules — then directed an AI coding agent to build the nine screens in sequence, reviewing and correcting each one before moving on. The spec was the real work; the code was the easy part. A vague brief would have produced generic output, and the quality of that document is the only reason the result wasn't.",
      },
      {
        kind: "spec",
        eyebrow: "The actual product",
        title: "The system prompt is the IP",
        lines: [
          "Every bullet must follow STAR — Situation, Task, Action, Result",
          "Every bullet must contain a number or a percentage",
          "Estimate a realistic figure from context if the user gave none",
          "Maximum 15 words per bullet, maximum 4 bullets per role",
          "Never begin two bullets with the same verb",
          "Never write “Worked on”, “Helped with”, or “Assisted in”",
          "Cover letter: 3 paragraphs, 180 words, one quantified achievement",
          "LinkedIn About: first person, 150 words, keyword-rich for recruiter search",
        ],
        caption:
          "The people this was built for often don't know how to write a strong bullet point — that's precisely why they need it. So the model doesn't accept weak input and pass it through; it rewrites “worked on designing the app” into something with a verb, a scope, and a number. The constraints are the product. The AI is just the pen.",
      },
      {
        kind: "figure",
        src: "/work/myresumeai/results-ats-score.jpg",
        caption:
          "The results screen — and the moment the research becomes visible. Rather than applying the rules silently, every one is shown as a checklist item, so the score is something you can audit rather than something you have to trust.",
        wide: true,
      },
      {
        kind: "insight",
        eyebrow: "A detail I'm glad I got right",
        title: "The score coaches instead of just grading",
        body:
          "An incomplete resume doesn't just score lower — it says exactly what's missing and what it's worth: “add a job description for +20 ATS points.” A number alone tells someone they failed. A number with the next action tells them how to win, which is the entire difference between a judgement and a tool.",
      },
      {
        kind: "figures",
        items: [
          {
            src: "/work/myresumeai/cover-letter-tab.jpg",
            caption: "The cover letter — generated in the same pass, constrained to three paragraphs.",
          },
          {
            src: "/work/myresumeai/linkedin-about-tab.jpg",
            caption: "The LinkedIn About — same story, tuned for recruiter search rather than a hiring manager.",
          },
        ],
      },
      {
        kind: "prose",
        eyebrow: "Designing the wait",
        title: "Fifteen seconds is long enough to lose someone",
        body: "Generation takes twelve to fifteen seconds — far past the Doherty threshold, and an eternity to stare at a spinner when you're anxious about a job. So the loading screen does real work: six checkmarks draw in as each stage completes, giving the progress a visible goal gradient; quotes from other job seekers rotate every four seconds as social proof; and ATS tips fill the gap with something genuinely useful. If the network is slow, a reassuring message appears at twenty seconds rather than leaving you to assume it broke. Occupied waiting time feels shorter than unoccupied waiting time — someone reading isn't someone waiting. In my own audit this ended up the strongest screen in the product.",
      },
      {
        kind: "swatches",
        eyebrow: "The system",
        title: "Three colours, strictly rationed",
        note:
          "A restrictive palette only works if you protect it. Each of these carries one meaning, and I never spent them anywhere else.",
        items: [
          {
            hex: "#0a0a0a",
            range: "Canvas",
            meaning: "Near-black, not pure black — #000 reads as a harsh void; this reads as depth.",
          },
          {
            hex: "#00c8ff",
            range: "Primary",
            meaning: "Cyan for trust and technology, deliberately avoiding the purple every other AI product defaults to.",
          },
          {
            hex: "#00ff88",
            range: "Success only",
            meaning: "Reserved exclusively for success — a passed check, a saved form, a completed payment. Never decoration, so it never loses its meaning.",
          },
        ],
      },
      {
        kind: "scorecard",
        eyebrow: "The honest part",
        title: "I audited my own product and it scored 71",
        items: [
          { label: "Loading screen", score: "90", tone: "good", note: "Rotating social proof and progressive checkmarks turn the wait into confidence." },
          { label: "Payment gate", score: "84", tone: "good", note: "The resume stays visible behind the drawer — you're unlocking something already yours." },
          { label: "Results screen", score: "68", note: "The download button — the single most important control — scrolled off-screen on mobile." },
          { label: "Success screen", score: "61", tone: "bad", note: "Peak satisfaction, and it ended in silence. No share, no next action, nothing." },
          { label: "Error screen", score: "55", tone: "bad", note: "A dead end that didn't tell people their form data had been preserved." },
        ],
        caption:
          "Shipping isn't finishing. I scored every screen against my own standards and the weakest ones were the endings — exactly where I'd stopped paying attention. So I made the download button sticky on mobile, added a discovery pulse to the Cover Letter and LinkedIn tabs so people realise all three documents are included, and gave the success screen a share prompt and a clear next action.",
      },
      {
        kind: "metrics",
        eyebrow: "Where it stands",
        items: [
          { metric: "Live", label: "in production at myresumeai.org, taking real payments" },
          { metric: "Zero backend", label: "no server, database, or login — everything runs client-side" },
          { metric: "~1,000", label: "résumés researched to define the format it enforces" },
          { metric: "1 placement", label: "my roommate — shortlisted, then placed, on the resume that started this" },
        ],
      },
      {
        kind: "prose",
        eyebrow: "What I'd do differently",
        title: "I shipped the product before I shipped the measurement",
        body: "I have no analytics. No funnel data, no heatmaps, no conversion numbers — so every improvement above came from my own judgement rather than evidence, and I can't actually prove any of them worked. A free analytics install on day one would have cost me an hour and told me more than a week of guessing. I also spent the first week polishing when I should have put a rough version in front of people on day two; the product was good enough to be useful long before I was comfortable showing it.",
      },
    ],
    overview:
      "I kept getting asked the same favor — write my resume, format mine, make mine pass the online filters. Friends, family, roommates. Every time I was doing the same manual work: reformatting content into something an Applicant Tracking System could actually parse, without knowing whether the format I was using was based on anything more than instinct. So before I wrote a line of product code, I researched roughly a thousand resumes from people who'd landed roles at MAANG-tier companies, looking for the structural patterns that actually survive automated screening. That research became MyResumeAI — a free tool that generates a resume, a cover letter, and a LinkedIn About section from one input, with a small paid unlock to download once you've seen your score. I designed it, wrote the AI system prompt that turns raw input into that researched structure, and built the whole thing — front end, PDF generation, payments — with zero backend server, in about a week. One of the first resumes I built with it was for my roommate; he got shortlisted and placed at his next company off the back of it.",
    story: [
      {
        title: "How it started",
        body: "MyResumeAI didn't start as a company idea — it started as a favor I kept saying yes to. A friend applying for internships, a cousin switching careers, my roommate hunting for his next role — everyone would send me their old resume and ask if I could make it look right before they applied somewhere real. I'd rewrite it by hand every time: reformat, rewrite the summary, guess at what an ATS parser would and wouldn't choke on. My roommate was one of those. I built him a resume, he applied, got shortlisted, and was placed at his next company — the resume didn't do the interview for him, but it got him in the door. That was the moment I stopped treating this as a favor and started treating it as a product: if a resume I built by hand could open one door, a tool that did the same thing properly could open a lot more of them.",
      },
      {
        title: "What I researched",
        body: "Before I wrote a line of the product, I mapped every option a job seeker actually has — Canva, Word templates, Naukri's AI resume maker, global tools like Resume.io, ChatGPT plus manual formatting, and professional resume writers — and found the same gap in every one: nobody combined an ATS-safe structure, MAANG-tier quality, and a price a student could pay. So I researched roughly a thousand resumes from people at MAANG-tier companies for what their formatting had in common — not the content, the structure: how sections were ordered, how dense the summary was, and what a single-column, text-parseable layout looked like versus the graphic-heavy templates that impress a human eye and fail an ATS parser outright. I cross-checked that against how systems like Taleo and Workday actually parse a document, and against a published resume guide from a senior recruiter-turned-tech-company director. All three pointed the same direction. That research became the product's real substance — the score on the results screen and the checklist under it are that research turned into a UI, not a claim about a measured pass rate.",
      },
      {
        title: "How I built it",
        body: "Before touching the UI, I made the decision that shaped everything downstream: no login, no server, no database. Claude is called directly from the browser, PDFs are generated client-side, payment runs through Razorpay's client SDK, and localStorage remembers a returning user without an account. Then I wrote the entire product as a specification first — every screen, every field's behaviour, the motion system, the colour reasoning, the AI system prompt itself — before generating a single component, and directed an AI coding agent to build the nine screens in sequence, reviewing and correcting each one before moving to the next. The quality of that upfront spec is the reason the output was usable rather than generic.",
      },
    ],
    problem: [
      "Most job seekers apply to dozens of companies and hear nothing back — not because they lack talent, but because software filters their resume out before any human ever opens it.",
      "Every existing option forces a trade-off: Canva looks great and fails ATS parsing outright, generic AI tools write fluent text into the wrong structure, and professional resume writers cost more than most Indian freshers can afford.",
      "Nobody had combined the three things a real application needs — an ATS-safe resume, a cover letter, and a LinkedIn About — into one tool, at a price a student could actually pay.",
      "Asking someone to sign up, or pay, before they've seen any value is exactly the friction that stops a broke student or an anxious job seeker from ever finishing the flow.",
    ],
    process: [
      {
        title: "Quantified the problem and audited the market",
        body: "Before designing anything, I mapped every option a job seeker actually has and found the same gap in every one — nobody combined an ATS-safe structure, MAANG-tier quality, and a price an Indian fresher could pay. I also spoke informally with 15+ freshers in my network; the same three complaints kept coming back: hours spent on Canva with zero callbacks, not knowing what to write in the experience section, and resume writers being too expensive to consider.",
        image: "/work/myresumeai/landing.jpg",
        imageCaption:
          "The landing page — the promise the research had to deliver on: ATS-optimised, in 60 seconds, no signup.",
      },
      {
        title: "Researched what actually survives ATS parsing",
        body: "I researched roughly a thousand resumes from people who'd landed roles at MAANG-tier companies for the structural patterns that repeated, then cross-checked those decisions against how systems like Taleo, Workday, and SuccessFactors actually parse a document, and against a published resume guide from a senior recruiter-turned-tech-director. All three pointed the same direction: single-column, plain text, standard section headers, no graphics. That became the format the product enforces, not a style choice.",
        image: "/work/myresumeai/results-ats-score.jpg",
        imageCaption:
          "The results screen — the researched rules turned into a live score and checklist the user can see and trust.",
      },
      {
        title: "Bet on zero backend, then designed inside that constraint",
        body: "No login, no server, no database. Claude is called directly from the browser, PDFs are generated client-side, Razorpay's client SDK handles payment, and localStorage remembers the user without an account. That constraint didn't just cut infrastructure cost close to zero — it's the reason someone can go from the landing page to a finished resume in under two minutes with nothing to sign up for.",
      },
      {
        title: "Wrote the build spec, then directed the build",
        body: "I wrote a full specification — every screen, every field's behaviour, the motion system, the colour reasoning, the AI system prompt itself — before generating a single component. I fed that spec to an AI coding agent and directed it to build the nine screens in sequence, reviewing and correcting each one before moving to the next, rather than asking for the whole app at once. The quality of that upfront spec is the reason the output was usable rather than generic — a vague brief produces vague code.",
        image: "/work/myresumeai/cover-letter-tab.jpg",
        imageCaption:
          "One generation, three tailored outputs — resume, cover letter, and LinkedIn About — from the same spec-driven build.",
      },
      {
        title: "Shipped, then audited my own work honestly",
        body: "After launch I ran a screen-by-screen self-audit rather than assume it was finished. The loading screen scored strongest — rotating social proof and progressive checkmarks turning a wait into a confidence-builder. The success screen scored weakest — a peak-satisfaction moment that ended in silence instead of a next action. I fixed the highest-impact gaps: a sticky download button so the one button that matters is never scrolled out of view on mobile, a discovery pulse on the Cover Letter and LinkedIn tabs so people realise all three documents are included, and a share prompt on the success screen so the moment of highest satisfaction isn't wasted.",
      },
    ],
    decisions: [
      {
        decision: "Zero backend, zero login, zero server",
        logic: "Every extra step — an account, a database round-trip, a server to maintain — is friction for the user and cost for me. Calling Claude straight from the browser, generating PDFs client-side, and using localStorage instead of a database meant a user could go from landing page to finished resume in under two minutes, and meant the product could run at near-zero infrastructure cost from day one.",
      },
      {
        decision: "One format, deliberately — no template gallery",
        logic: "Every competitor sells choice: dozens of templates, colours, layouts. I offered exactly one: single-column, black-and-white, text-based. Multi-column and graphic-heavy resumes are a documented way to fail ATS parsing in systems like Taleo, so offering more templates would have meant offering more ways to fail silently. Removing the choice was the point.",
      },
      {
        decision: "Three documents from one generation",
        logic: "A resume alone is a commodity. Generating a cover letter and a LinkedIn About from the same input, in the same pass, means the story a candidate tells stays consistent everywhere a recruiter looks, and turns one input into three times the outcome for barely more API cost.",
      },
      {
        decision: "Free to see your score, pay only to download",
        logic: "A student deciding whether to spend money on an unproven tool needs to see it work first. Letting anyone generate their resume and see their full ATS score and checklist for free turns the payment into a reward for value already delivered, not a leap of faith.",
      },
      {
        decision: "Enforce the STAR framework in the system prompt, not as a suggestion",
        logic: "The people this is built for often don't know how to write a strong bullet point — that's the whole reason they need the tool. So the AI doesn't just accept whatever they type; the system prompt rewrites weak input into a Situation-Task-Action-Result structure with a number in it, every time, regardless of how little the user gave it to work with.",
      },
      {
        decision: "Cap the displayed score below 100 — and keep that honest",
        logic: "A resume scoring 100% out of nowhere reads as fake, so the on-screen score is deliberately capped below a perfect number to feel earned rather than suspicious. That's a design decision about how a number is perceived — not a claim about a measured pass rate against real ATS systems, and I'm careful to keep those two things separate in how I describe it.",
      },
      {
        decision: "Adapt the form for freshers with zero experience",
        logic: "A fresher with no work history filling out a form labelled 'Work Experience' feels immediately unwelcome. When someone selects zero years of experience, the label changes to 'Your Projects or College Activities' and the prompt asks about a hackathon or internship instead — a small change that tells the exact audience this was built for that the product understands them.",
      },
      {
        decision: "Fix the PDF download for iOS Safari specifically",
        logic: "The obvious implementation — opening the PDF in a new tab — confuses mobile users into thinking the download failed. I generate the file as a blob and trigger a direct download instead: a few extra lines of code that matter enormously on the exact devices most of this audience is using.",
      },
    ],
    colorLogic: {
      note: "The colour system is deliberately restrictive — three colours carry almost all of the meaning, and I protected that meaning by never reusing it elsewhere.",
      scale: [
        {
          hex: "#0a0a0a",
          range: "Background",
          meaning: "Near-black rather than pure black — pure black reads as a harsh void; near-black reads as deep and premium.",
        },
        {
          hex: "#00c8ff",
          range: "Primary (cyan)",
          meaning: "Trust and technology, without the purple/violet almost every other AI product defaults to.",
        },
        {
          hex: "#00ff88",
          range: "Success — reserved",
          meaning: "Used only for success states — a passed checklist item, a saved form, a completed payment — so it keeps its meaning every time it appears.",
        },
      ],
    },
    solution: [
      "A free AI resume, cover letter, and LinkedIn About generator, grounded in research into roughly a thousand real MAANG-tier résumés rather than generic AI writing advice.",
      "A zero-backend architecture — no login, no server, no database — that gets someone from the landing page to a finished resume in under two minutes.",
      "A single-column, text-based export enforced as a hard constraint, because a resume that looks good and fails ATS parsing never reaches a human.",
      "A free-to-generate, pay-to-download model, priced and sequenced around proving value before ever asking for money.",
      "Designed, specified, and built solo in about a week — the product design, the AI system prompt, the front end, PDF generation, and payments.",
    ],
    results: [
      { metric: "Live & monetized", label: "real ₹49 one-time and ₹199/month payments, not a mockup" },
      { metric: "Zero backend", label: "no server, database, or login — Claude, PDF generation, and payment all run client-side" },
      { metric: "3 outputs, 1 input", label: "resume, cover letter, and LinkedIn About generated together" },
      { metric: "1 real placement", label: "a resume I built for my roommate got him shortlisted and placed at his next company" },
    ],
    gallery: [
      {
        src: "/work/myresumeai/landing.jpg",
        caption: "The landing page — free to try, no signup, the promise the research had to earn.",
      },
      {
        src: "/work/myresumeai/results-ats-score.jpg",
        caption: "The results screen — a live ATS score plus the compliance checklist derived from the research.",
      },
      {
        src: "/work/myresumeai/cover-letter-tab.jpg",
        caption: "The cover letter output — one of three documents generated from a single input.",
      },
      {
        src: "/work/myresumeai/linkedin-about-tab.jpg",
        caption: "The LinkedIn About output — keeping the same story consistent across every surface a recruiter checks.",
      },
    ],
  },
  // -------------------------------------------------------------- Tangentix (Lab)
  // VERIFY: KARPRA LABS -> Tangentix. I've framed this as the brand landing on
  // its name mid-project; confirm whether it was a rebrand or a separate pitch.
  {
    slug: "tangentix",
    lab: true,
    title: "Refusing the default AI look for a marketing agency",
    client: "Tangentix — AI marketing agency",
    domain: "Brand & Web · Landing page",
    year: "2026",
    role: "Product Designer (inbound client)",
    impact:
      "Every AI company looks the same — dark navy, glowing gradients, a starfield. I designed the first direction that way, then argued us out of it.",
    teaser:
      "An inbound LinkedIn client. Three directions, from the default AI-tech aesthetic to a bright, data-led landing page that doesn't look like everyone else's.",
    accent: "blue",
    cover: "/work/tangentix/cover.jpg",
    video: "/work/tangentix/demo.mp4",
    compare: {
      before: "/work/tangentix/v1-karpra.jpg",
      after: "/work/tangentix/v3-final.jpg",
    },
    tools: ["Figma", "Moodboarding", "Landing Page", "Brand Direction"],
    sections: [
      {
        kind: "snapshot",
        role: "Product designer — research, moodboard, wireframes, three UI directions, final build",
        timeline: "2026",
        team: "Solo, direct with the founder",
        platform: "Responsive marketing site",
        status: "Delivered",
        problem:
          "An AI marketing agency needed a landing page that made them credible to buyers — in a category where every competitor uses the identical dark, glowing, sci-fi visual language.",
        outcome:
          "Three explored directions, ending on a bright, editorial, data-led page whose proof is charts and outcomes rather than atmosphere.",
      },
      {
        kind: "takeaways",
        items: [
          "The client came inbound through LinkedIn — the portfolio did the selling before I ever spoke to them.",
          "My first direction was the category cliché. Recognising that, and pitching against my own work, was the actual value I added.",
          "The final page argues with evidence: real charts, real numbers, a visible process — instead of a glowing orb and the word 'intelligent'.",
        ],
      },
      {
        kind: "lead",
        body:
          "Open ten AI company websites and you will see the same page ten times: near-black background, a blue-violet gradient, a glowing abstract shape, and a headline promising to be smarter and faster. It looks like the future. It also looks like everyone.",
      },
      {
        kind: "prose",
        eyebrow: "How it came in",
        title: "A message on LinkedIn",
        body: "Tangentix found me through LinkedIn and reached out directly — no agency, no brief document, just a founder describing what the business does and what the site needed to achieve. That shaped the engagement: I was talking to the person who owned the decision, which meant directions could be argued on merit rather than filtered through a committee.",
      },
      {
        kind: "prose",
        eyebrow: "Understanding the buyer",
        title: "Who actually reads an agency landing page",
        body: [
          "Tangentix blends AI automation with human marketing expertise — media analytics, lifecycle marketing, campaign execution. The people evaluating that are marketing leads with a budget and a healthy suspicion of AI claims, because they have been promised transformation before.",
          "So the page has one real job: move a sceptical buyer from “another AI vendor” to “these people understand my numbers.” Atmosphere doesn't do that. Evidence does.",
        ],
      },
      {
        kind: "figure",
        src: "/work/tangentix/moodboard.jpg",
        caption:
          "The moodboard — pulling from Apple, Lottiefiles, Miro, Airtable, lander.studio and others, to find a visual language that reads as a serious product rather than an AI startup template.",
        wide: true,
      },
      {
        kind: "insight",
        eyebrow: "The turn",
        title: "I designed the cliché first — then argued against it",
        body:
          "My opening direction did exactly what the category does: dark navy, a starfield, a glowing 3D infinity mark, “AI-Powered Marketing. Smarter. Faster. Better.” It's competent and it's completely forgettable, because it is indistinguishable from every competitor a buyer had already seen that week. Sameness isn't a style problem, it's a positioning problem — and the fastest way to be ignored is to look exactly like the thing someone is already sceptical of.",
      },
      {
        kind: "figure",
        src: "/work/tangentix/v1-karpra.jpg",
        caption:
          "Direction 1 — the default AI aesthetic. Dark, glowing, atmospheric. Everything the category already looks like.",
        wide: true,
      },
      {
        kind: "figure",
        src: "/work/tangentix/v2-warm.jpg",
        caption:
          "Direction 2 — the overcorrection: warm, muted, editorial. Calm and distinctive, but too quiet for a performance-marketing pitch built on numbers.",
        wide: true,
      },
      {
        kind: "prose",
        eyebrow: "Direction 3",
        title: "Bright, plain, and led by the data",
        body: "The final direction keeps the second's confidence in light and space, but gives it energy and evidence. White ground, a single decisive orange, and — most importantly — the hero is built from the actual work: an experiment chart, a causal-impact readout, a lift percentage, a network of channels. The first thing a visitor sees isn't a metaphor for intelligence; it's the shape of the reporting they'd receive.",
      },
      {
        kind: "figure",
        src: "/work/tangentix/v3-final.jpg",
        caption:
          "Direction 3, the delivered design — the proof moved into the hero, and a single accent colour doing all the emphasis.",
        wide: true,
      },
      {
        kind: "principles",
        eyebrow: "Design principles",
        title: "What kept the page honest",
        items: [
          {
            name: "Show the artifact",
            body:
              "Every claim is anchored to something that looks like real output — a chart, a metric, a step in the process. Buyers trust artifacts more than adjectives.",
          },
          {
            name: "One colour, spent carefully",
            body:
              "A single orange marks only what matters: the CTA, the key phrase, the live data points. Restricting it means it never stops meaning “look here”.",
          },
          {
            name: "Legible over atmospheric",
            body:
              "No dark gradients to hide behind. A bright page has nowhere to conceal weak content, which forces the copy and the proof to carry it.",
          },
        ],
      },
      {
        kind: "figures",
        items: [
          { src: "/work/tangentix/final-howitworks.jpg", caption: "How it works — Diagnose, Plan, Execute, Scale, each paired with a real interface artifact." },
          { src: "/work/tangentix/final-social.jpg", caption: "Social proof — named roles and specific outcomes rather than anonymous praise." },
        ],
      },
      {
        kind: "decisions",
        eyebrow: "Key decisions",
        title: "The calls that shaped it",
        items: [
          {
            decision: "Present the category cliché, then reject it",
            logic:
              "Showing the expected direction first wasn't wasted work — it made the argument concrete. It's far easier to agree “this looks like everyone else” when you're looking at it than when it's an abstract warning.",
          },
          {
            decision: "Put charts in the hero instead of an abstract graphic",
            logic:
              "The buyer's question is “can you move my numbers?” Leading with an experiment chart and a lift percentage answers it in the first screen, where a glowing orb would only have set a mood.",
          },
          {
            decision: "Go light in a category that goes dark",
            logic:
              "Differentiation with a reason behind it: dark sites optimise for atmosphere, and this pitch depends on scrutiny. A bright page signals nothing is hidden — and stands out purely because the competition doesn't do it.",
          },
          {
            decision: "A four-step process section",
            logic:
              "Audit, plan, execute, scale. Agencies get bought on confidence that there's a method, not just talent — naming the method converts scepticism into something a buyer can picture their own project moving through.",
          },
        ],
      },
      {
        kind: "metrics",
        eyebrow: "Where it stands",
        items: [
          { metric: "Inbound", label: "client reached out via LinkedIn — no outreach" },
          { metric: "3 directions", label: "cliché, overcorrection, and the delivered design" },
          { metric: "Solo", label: "research through final design, direct with the founder" },
          { metric: "Delivered", label: "landing page handed over to the client" },
        ],
      },
      {
        kind: "prose",
        eyebrow: "What I took from it",
        title: "The most useful thing I did was disagree with myself",
        body: "I could have shipped the first direction. It was competent, the client hadn't objected, and it looked like what an AI company is supposed to look like. Talking us out of it — with a second and third direction that made the alternative real rather than theoretical — is the part of this project I'd point at. Anyone can execute a brief; the value is in noticing when the obvious answer is the one that makes you invisible.",
      },
    ],
    overview:
      "Tangentix is an AI marketing agency that found me through LinkedIn and hired me directly to design their landing page. I explored three directions: the category-default dark AI aesthetic, a warm editorial overcorrection, and the delivered design — a bright, data-led page that leads with real charts and outcomes instead of atmosphere.",
    problem: [
      "Every competitor in AI marketing uses the same dark, glowing visual language — looking like the category means being invisible in it.",
      "The buyer is a sceptical marketing lead who has been promised AI transformation before.",
      "An agency is bought on evidence of method and results, not on how futuristic its website feels.",
    ],
    process: [
      { title: "Understood the buyer", body: "Marketing leads with budget and justified scepticism — the page has to survive scrutiny, not create a mood." },
      { title: "Built a moodboard", body: "Pulled from Apple, Lottiefiles, Miro, Airtable and others to find a language that reads as a serious product." },
      { title: "Direction 1 — the cliché", body: "Dark navy, starfield, glowing 3D mark. Competent, and indistinguishable from every competitor." },
      { title: "Direction 2 — the overcorrection", body: "Warm, muted, editorial. Distinctive but too quiet for a numbers-led pitch." },
      { title: "Direction 3 — delivered", body: "Bright, single-accent, with real charts and a named four-step method in the hero." },
    ],
    solution: [
      "A bright, data-led landing page that differentiates by refusing the category's default aesthetic.",
      "Real interface artifacts — experiment charts, causal-impact readouts, lift metrics — used as the primary proof.",
      "A named four-step method (Diagnose, Plan, Execute, Scale) that turns scepticism into something a buyer can picture.",
    ],
    results: [
      { metric: "Inbound", label: "client found me through LinkedIn" },
      { metric: "3 directions", label: "explored before the delivered design" },
      { metric: "Delivered", label: "landing page handed to the client" },
    ],
    gallery: [],
  },
  // -------------------------------------------------------------- LiveToExpress (Lab)
  {
    slug: "livetoexpress",
    lab: true,
    title: "One institute, three pillars, two very different buyers",
    client: "Minimalist Institute — #LiveToExpress",
    domain: "Brand & Web · Two-audience system",
    year: "2026",
    role: "Product Designer",
    impact:
      "The same three-pillar programme sold to cafés and to corporates — two sites that had to feel like one organisation while speaking to buyers with nothing in common.",
    teaser:
      "Expression, Gratitude, Compassion — one social-impact programme, designed as two parallel sites for café owners and corporate CSR teams.",
    accent: "blue",
    cover: "/work/livetoexpress/cover.jpg",
    video: "/work/livetoexpress/demo-cafe.mp4",
    tools: ["Figma", "Information Architecture", "Content Design", "Web Design"],
    sections: [
      {
        kind: "snapshot",
        role: "Product designer — IA, content structure, UI for both sites",
        timeline: "2026",
        team: "Solo, from the client's written content brief",
        platform: "Responsive marketing sites ×2",
        status: "Designed & handed over",
        problem:
          "Minimalist Institute runs one programme — Expression, Gratitude, Compassion — but sells it to café owners and to corporate CSR teams, two audiences who share no vocabulary, no motivation, and no budget process.",
        outcome:
          "Two sites on one skeleton: identical section architecture and pillar system, with the framing, imagery and outcomes swapped per audience.",
      },
      {
        kind: "takeaways",
        items: [
          "The client arrived with a written content flow, not a design brief — my job was turning a document into an architecture without losing their voice.",
          "I built both sites on one section skeleton, so the shared programme stays recognisable while each audience hears its own argument.",
          "The philosophy chain intentionally diverges at the last link: cafés end at Loyalty, corporates end at Great Products.",
        ],
      },
      {
        kind: "lead",
        body:
          "Minimalist Institute has one idea — that Expression, Gratitude and Compassion can be built into a space rather than bolted onto it. The design problem was that they sell that same idea to a café owner and to a corporate CSR lead, and those two people want completely different things from the same sentence.",
      },
      {
        kind: "prose",
        eyebrow: "The starting point",
        title: "A content flow, not a design brief",
        body: [
          "The client handed over a written structure for both sites — headlines, section order, the three pillars and their sub-points, and the impact line for each. That's unusually clear input, and it changed what I was being asked for: not to invent the message, but to give it a shape that lets a stranger absorb it in one scroll.",
          "So my first pass wasn't visual. It was mapping their document into a repeatable section pattern and checking that every claim had somewhere to live.",
        ],
      },
      {
        kind: "insight",
        eyebrow: "The reframe",
        title: "One skeleton, two arguments",
        body:
          "Rather than design two sites, I designed one structure and varied what fills it. Both run the same six beats — the why, our role, the philosophy chain, the three pillars, unified impact, and a call to action. Keeping the skeleton identical means the programme reads as one coherent thing across both audiences; changing only the framing and the evidence means neither audience feels like they're reading someone else's pitch.",
      },
      {
        kind: "principles",
        eyebrow: "Design principles",
        title: "Rules for a two-audience system",
        items: [
          {
            name: "Same bones, different voice",
            body:
              "Section order and pillar structure never change. Only the headline, the imagery and the stated impact shift — so the offer stays legible while the pitch stays relevant.",
          },
          {
            name: "Every pillar earns its impact line",
            body:
              "Expression, Gratitude and Compassion each end with a concrete consequence for that buyer, because a values-led programme is easiest to dismiss as vague.",
          },
          {
            name: "Show the room, not the concept",
            body:
              "Photography carries real spaces and real people — a workshop, a café wall, a shelter drive — so an abstract idea stays anchored to something a buyer can picture happening in their own space.",
          },
        ],
      },
      {
        kind: "figure",
        src: "/work/livetoexpress/cafe-hero.jpg",
        caption:
          "The café site — “Your Café. A Culture in Motion.” Warm, human, and framed around belonging.",
        wide: true,
      },
      {
        kind: "figure",
        src: "/work/livetoexpress/corp-hero.jpg",
        caption:
          "The corporate site — “Not Just Business. A Movement.” Same architecture, framed around culture, legacy and measurable impact.",
        wide: true,
      },
      {
        kind: "prose",
        eyebrow: "The detail I like most",
        title: "The philosophy chain ends in a different place",
        body: "Both sites run a five-step chain that starts identically — Collaboration → Trust → Creativity. Then it splits. For cafés it resolves to Community → Loyalty, because a café owner is buying regulars. For corporates it resolves to Strong Teams → Great Products, because a CSR lead has to justify the spend to someone who cares about output. Same philosophy, same first three links, and the final step answers each buyer's actual question.",
      },
      {
        kind: "figures",
        items: [
          { src: "/work/livetoexpress/cafe-services.jpg", caption: "Café services — the three pillars as themed event programmes." },
          { src: "/work/livetoexpress/corp-services.jpg", caption: "Corporate services — the same pillars as workshops, ESG and CSR partnerships." },
          { src: "/work/livetoexpress/cafe-events.jpg", caption: "Past event highlights — proof the programme actually runs." },
          { src: "/work/livetoexpress/corp-impact.jpg", caption: "Unified impact — what each audience becomes." },
        ],
      },
      {
        kind: "decisions",
        eyebrow: "Key decisions",
        title: "The calls behind the two sites",
        items: [
          {
            decision: "Hashtag the pillars rather than name them abstractly",
            logic:
              "#LiveToExpress, #MyHandPrint and #ForThePaws give each pillar a handle people can say, search and rally around. An abstract value is forgettable; a hashtag is a thing a café can put on a wall and a company can run a campaign under.",
          },
          {
            decision: "End every pillar with a stated impact",
            logic:
              "“Customers stay longer.” “Measurable ESG results.” Values-led offers get dismissed as fluffy, so each pillar closes with the outcome that buyer is actually purchasing — which is what turns a nice idea into a budget line.",
          },
          {
            decision: "Keep both sites dark, and let photography carry the warmth",
            logic:
              "A dark ground makes the real photographs — a café wall, a workshop, a shelter drive — the brightest thing on the page. It also keeps two very different tones sitting inside one visual identity.",
          },
          {
            decision: "One CTA form, three intents",
            logic:
              "Express It / Experience It / Partner with us lets a visitor self-select how involved they want to be instead of forcing everyone through the same “contact us”. It also tells the client which kind of lead just arrived.",
          },
        ],
      },
      {
        kind: "video",
        src: "/work/livetoexpress/demo-corporate.mp4",
        caption:
          "The corporate site end to end — the same six beats as the café site, argued for a different buyer.",
        wide: true,
      },
      {
        kind: "metrics",
        eyebrow: "Where it stands",
        items: [
          { metric: "2 sites", label: "café and corporate, on one section skeleton" },
          { metric: "3 pillars", label: "Expression · Gratitude · Compassion" },
          { metric: "1 system", label: "shared structure, audience-specific framing" },
          { metric: "Handed over", label: "designed and delivered to the client" },
        ],
      },
      {
        kind: "prose",
        eyebrow: "What I took from it",
        title: "Structure is what makes a message repeatable",
        body: "The temptation with two audiences is to design two things. Building one skeleton and varying the argument meant the client can add a third audience — schools, hospitals, anyone — without commissioning a new site. Designing the pattern rather than the page is the part that keeps paying off after handover.",
      },
    ],
    overview:
      "Minimalist Institute runs a three-pillar social-impact programme — Expression (#LiveToExpress), Gratitude (#MyHandPrint) and Compassion (#ForThePaws) — sold to two very different audiences. I designed both the café and corporate sites on a single section skeleton, varying only the framing, imagery and stated impact so the programme reads as one organisation while each buyer hears their own argument.",
    problem: [
      "One programme, two audiences — café owners and corporate CSR leads — with no shared vocabulary or motivation.",
      "Values-led offers are easily dismissed as vague unless every claim lands on a concrete outcome.",
      "The client supplied a written content flow, which had to become an architecture without losing their voice.",
    ],
    process: [
      { title: "Mapped the content flow", body: "Turned the client's written structure into a repeatable six-beat section pattern." },
      { title: "Built one skeleton", body: "Same architecture for both sites so the shared programme stays recognisable." },
      { title: "Varied the argument", body: "Headlines, imagery and impact lines rewritten per audience; structure held constant." },
      { title: "Split the philosophy chain", body: "Shared first three links, diverging endings — Loyalty for cafés, Great Products for corporates." },
    ],
    solution: [
      "Two responsive sites running on one section architecture and one pillar system.",
      "Hashtag-led pillars that give each value a handle people can use and campaign around.",
      "A three-intent contact form that lets visitors self-select and qualifies leads for the client.",
    ],
    results: [
      { metric: "2 sites", label: "café and corporate, one skeleton" },
      { metric: "3 pillars", label: "consistent across both audiences" },
      { metric: "Handed over", label: "designed and delivered" },
    ],
    gallery: [],
  },
  // -------------------------------------------------------------- ClearCut (Lab)
  {
    slug: "clearcut",
    lab: true,
    title: "I stopped looking for the tool and built it instead",
    client: "ClearCut — personal build",
    domain: "AI Tool · Build in public",
    year: "2026",
    role: "Designer & Builder",
    impact:
      "A background remover built in a coffee break — and the first tool I stopped keeping to myself.",
    teaser:
      "Idea to working app in about ten minutes with Antigravity. The interesting part isn't the speed — it's what shipping it publicly changed.",
    accent: "blue",
    cover: "/work/clearcut/cover.jpg",
    video: "/work/clearcut/demo.mp4",
    tools: ["Antigravity", "AI-led build", "Product Design", "Vercel"],
    sections: [
      {
        kind: "snapshot",
        role: "Designer & builder — the whole thing",
        timeline: "~10 minutes, one coffee break",
        team: "Solo",
        platform: "Web · live at clearcut-pi.vercel.app",
        status: "Live & public",
        problem:
          "As a designer I constantly need clean cut-outs for mockups, and I kept losing time hunting for a background remover that wasn't paywalled, watermarked, or asking me to sign up.",
        outcome:
          "A single-purpose tool that does one job with one control — and the first of my side builds I actually put in front of people.",
      },
      {
        kind: "takeaways",
        items: [
          "The whole product is one dropzone. No signup, no settings, no upsell — the restraint is the design.",
          "Ten minutes is the headline, but the transferable part is knowing what to leave out and what to let AI do.",
          "I'd built tools like this before and kept every one private, assuming someone had already made it. This is the one I shipped.",
        ],
      },
      {
        kind: "lead",
        body:
          "I needed a clean cut-out for a mockup. I opened a tab to find a background remover, hit a paywall, opened another, hit a watermark — and then realised the search was going to take longer than building the thing.",
      },
      {
        kind: "prose",
        eyebrow: "The itch",
        title: "A small problem I kept paying for in minutes",
        body: "This isn't a business idea; it's a recurring annoyance. Every mockup, every case study cover, every hero image needs a subject on a clean background. The existing tools all work, and they all extract something from you first — a signup, a watermark, a credit limit, a subscription. None of that is unreasonable, it just isn't worth it for a task I do a few times a week and need to take five seconds.",
      },
      {
        kind: "insight",
        eyebrow: "The reframe",
        title: "The scope was the decision",
        body:
          "Building fast isn't about typing fast — it's about deciding, up front, exactly how small the thing is allowed to be. One input, one output, no account, no options. Everything I didn't build is what made ten minutes possible, and it's also what makes the tool pleasant: there is nothing to learn, because there is nothing to choose.",
      },
      {
        kind: "figure",
        src: "/work/clearcut/live-upload.jpg",
        caption:
          "The entire interface. One dropzone, the accepted formats, a size limit — and nothing else asking for attention.",
        wide: true,
      },
      {
        kind: "principles",
        eyebrow: "Design principles",
        title: "What kept it to one screen",
        items: [
          {
            name: "One job, one control",
            body:
              "The tool does exactly one thing, so the interface is exactly one affordance. Any setting I added would be a decision the user didn't ask to make.",
          },
          {
            name: "No account, ever",
            body:
              "The moment a five-second task needs a login, it stops being a five-second task. Friction here would defeat the entire reason the tool exists.",
          },
          {
            name: "Show the cut, not a spinner",
            body:
              "The result lands as an original-versus-removed comparison on a checkerboard, so you can judge the edges immediately rather than downloading to find out.",
          },
        ],
      },
      {
        kind: "figures",
        items: [
          { src: "/work/clearcut/result-compare.jpg", caption: "Original and background-removed, side by side — quality is judged in place." },
          { src: "/work/clearcut/result-transparent.jpg", caption: "Checkerboard transparency, so the edge quality is honest about itself." },
        ],
      },
      {
        kind: "prose",
        eyebrow: "The honest part",
        title: "The speed is the least interesting thing about it",
        body: "Ten minutes makes a good headline and it's a bad lesson. What actually made it work was knowing what the product was before starting, having a clear enough mental model to describe it precisely, and using AI to collapse the distance between that description and a running app. The tool didn't supply the judgement about scope, restraint, or what the result screen needed to show. That part is still design.",
      },
      {
        kind: "insight",
        eyebrow: "The real story",
        title: "I'd built things like this before and never shown anyone",
        body:
          "There's a stack of small tools I made for myself and quietly kept, because the thought was always the same: someone has already built this, better. That instinct is why most of them never left my machine. ClearCut is the one I published — not because it's more original than the others, but because I decided that shipping it publicly was worth more than being certain it was new.",
      },
      {
        kind: "decisions",
        eyebrow: "Key decisions",
        title: "The calls, small as they were",
        items: [
          {
            decision: "Scope it to one input and one output before building",
            logic:
              "Deciding the boundary first is what made the build fast. Every feature I could imagine — batch upload, background replacement, editing — would have turned a coffee break into a weekend and a tool into a product I'd have to maintain.",
          },
          {
            decision: "Show original and result together",
            logic:
              "Background removal succeeds or fails at the edges — hair, glasses, soft shadows. A side-by-side on a transparency checkerboard lets someone judge that instantly, instead of downloading a file to discover the mask is wrong.",
          },
          {
            decision: "No signup, no watermark, no limit",
            logic:
              "I built this because every alternative charged me in friction. Reproducing that friction would have made the tool pointless for the one person it was definitely built for — me.",
          },
          {
            decision: "Publish it instead of keeping it",
            logic:
              "The build took ten minutes; the decision to make it public was the harder one. Sharing turns a private utility into something that compounds — feedback, momentum, and a reason to make the next one.",
          },
        ],
      },
      {
        kind: "metrics",
        eyebrow: "Where it stands",
        items: [
          { metric: "~10 min", label: "from idea to a working, deployed app" },
          { metric: "1 control", label: "the whole product is a single dropzone" },
          { metric: "Live", label: "public at clearcut-pi.vercel.app" },
          { metric: "Free", label: "no signup, no watermark, no limits" },
        ],
      },
      {
        kind: "quote",
        text:
          "Don't sit on it because someone already built it. Post it — not for validation, for momentum.",
      },
    ],
    overview:
      "ClearCut is an image background remover I built for myself in about ten minutes using Antigravity, after losing more time hunting for a free one than building it would take. The whole product is a single dropzone: no signup, no watermark, no settings. It's also the first of my side tools I published instead of keeping private.",
    problem: [
      "Designers need clean cut-outs constantly, and every free tool charges in friction — signups, watermarks, credit limits.",
      "A five-second task stops being one the moment it needs an account.",
      "I'd built similar tools before and never shipped them, assuming someone else already had.",
    ],
    process: [
      { title: "Fixed the scope first", body: "One input, one output, no account — deciding the boundary is what made the build fast." },
      { title: "Built it with Antigravity", body: "Described the product precisely and let AI collapse the distance to a running app." },
      { title: "Designed the result screen", body: "Original vs removed on a transparency checkerboard, so edge quality is judged in place." },
      { title: "Shipped it publicly", body: "Deployed to Vercel and shared it, instead of adding it to the pile of private tools." },
    ],
    solution: [
      "A single-purpose background remover with one control and no friction.",
      "A result view that shows original and cut-out together on checkerboard transparency.",
      "Free and public — no signup, watermark, or usage limit.",
    ],
    results: [
      { metric: "~10 min", label: "idea to deployed app" },
      { metric: "1 control", label: "the entire interface" },
      { metric: "Live", label: "public at clearcut-pi.vercel.app" },
    ],
    gallery: [],
  },
  // -------------------------------------------------------------- EduVerse
  // VERIFY METRICS: slide 1 of the deck says "Concept to High-Fidelity Prototype",
  // but slide 9 reports beta-cohort results (4.5 interactions/lesson, +18%
  // completion). A prototype has no completion rate — confirm whether these were
  // measured in a real beta or are projections, and reword if projected.
  {
    slug: "eduverse",
    title: "The AI tutor that makes asking a “stupid question” free",
    client: "EduVerse — founder project",
    domain: "EdTech · AI Product",
    year: "2025",
    role: "Founder & Product Designer",
    impact:
      "Students don't stop having questions — they stop asking them. EduVerse removes the audience, so the cost of asking drops to zero.",
    teaser:
      "An AI tutor built around one behavioural insight: the barrier to asking for help isn't access, it's the fear of looking stupid in front of other people.",
    accent: "blue",
    cover: "/work/eduverse/cover.jpg",
    video: "/work/eduverse/demo.mp4",
    tools: ["Figma", "AI Product Design", "Behavioural Design", "Prototyping"],
    sections: [
      {
        kind: "snapshot",
        role: "Founder & product designer — research, concept, IA, high-fidelity prototype",
        timeline: "2025",
        team: "Solo",
        platform: "Web — learner dashboard & lesson player",
        status: "High-fidelity prototype · CEO backing to invest",
        problem:
          "Learners get stuck mid-lesson and don't ask. Forums and email are too slow to catch the moment, and asking publicly risks looking foolish — so the question goes unasked and the course goes unfinished.",
        outcome:
          "A lesson player with a persistent “Ask Doubts” affordance that pauses the video in under a second and opens a judgment-free AI tutor, designed so asking is easier than pushing past the confusion.",
      },
      {
        kind: "takeaways",
        items: [
          "The insight isn't technical — it's social. Students don't lack access to answers, they're avoiding the embarrassment of needing one.",
          "The AI's first line is scripted to validate the question before answering it, because the emotional barrier has to fall before the informational one matters.",
          "Every friction point in asking was measured in seconds and removed — the video pauses in under a second, and the return path back to the lesson is always visible.",
        ],
      },
      {
        kind: "lead",
        body:
          "Every classroom has the same silence. Someone is lost, they know they're lost, and they say nothing — because the cost of asking isn't the question, it's the audience.",
      },
      {
        kind: "prose",
        eyebrow: "The problem",
        title: "Two frictions, and only one of them is technical",
        body: [
          "The first is speed. A learner gets stuck at a precise moment, and the help available — a forum thread, an email to an instructor — arrives hours or days later, long after the moment of confusion has hardened into frustration and the course has been abandoned.",
          "The second is the one nobody designs for. Students hesitate to ask because they're afraid the question is stupid, and that someone will notice. That fear costs more learning than any missing feature, and no amount of faster response time fixes it.",
        ],
      },
      {
        kind: "insight",
        eyebrow: "The reframe",
        title: "Make asking a doubt easier than ignoring it",
        body:
          "That sentence became the design goal for the whole product. Not “provide answers” — every platform does that — but reduce the total cost of asking, in seconds and in social risk, until it falls below the cost of staying confused. It's a behavioural target rather than a feature list, and it made the important decisions obvious.",
      },
      {
        kind: "research",
        eyebrow: "Research",
        title: "Who this is for, and what they need",
        methods: [
          {
            method: "Target users",
            detail:
              "Adult learners and students working through technical or foundational topics, where getting stuck on one concept blocks everything after it.",
          },
          {
            method: "Behavioural framing",
            detail:
              "Studied where learners drop out of video courses — consistently at the point of unresolved confusion, not at the point of boredom.",
          },
        ],
        findings: [
          "Help has to be immediate and contextual — arriving at the moment confusion strikes, not in tomorrow's forum reply.",
          "The tutor has to be available around the clock, because confusion doesn't respect office hours.",
          "Personality matters as much as accuracy: the tutor must read as supportive and non-critical, or the fear of judgment simply transfers to the machine.",
        ],
      },
      {
        kind: "principles",
        eyebrow: "Design principles",
        title: "Rules for a psychologically safe interface",
        items: [
          {
            name: "Validate before you answer",
            body:
              "The AI's first response always affirms the question. The emotional barrier is what stopped the person asking, so it has to be cleared before the explanation is worth anything.",
          },
          {
            name: "Never make them leave",
            body:
              "Asking happens inside the lesson, not in a separate forum or tab. Leaving the lesson to get help is itself a reason not to bother.",
          },
          {
            name: "Show the way back",
            body:
              "A prominent “Return to Lesson” control means asking never feels like losing your place — so there's no reason to hesitate before starting.",
          },
        ],
      },
      {
        kind: "steps",
        eyebrow: "The core interaction",
        title: "Zero-friction Q&A, in three moves",
        items: [
          {
            title: "Click “Ask Doubts”",
            body: "A persistent button sits in the lesson's bottom-right — always available, never demanding attention. It's placed so that noticing it doesn't require looking for it.",
          },
          {
            title: "The video pauses instantly",
            body: "The lesson stops in under a second. Any longer and the learner is managing an interface instead of holding onto the thing that confused them.",
          },
          {
            title: "Q&A mode takes over",
            body: "A conversational state opens in place, with the AI's first reply validating the question before it explains anything — and a clear route back to exactly where the lesson stopped.",
          },
        ],
      },
      {
        kind: "figure",
        src: "/work/eduverse/ai-teacher.jpg",
        caption:
          "The AI Teachers directory — personality traits, capabilities and ratings shown up front, so learners choose a tutor rather than being assigned a black box.",
        wide: true,
      },
      {
        kind: "decisions",
        eyebrow: "Key decisions",
        title: "The calls that made it feel safe",
        items: [
          {
            decision: "Give the AI a named personality, and show its traits",
            logic:
              "“Encouraging” and “Supportive” are displayed on the tutor's profile alongside its rating. Naming the temperament sets an expectation before the first question — a learner needs to believe they won't be judged before they'll risk asking.",
          },
          {
            decision: "Script the first response as validation",
            logic:
              "“That's an excellent question” is a design decision, not a pleasantry. The person asking has already decided the question might be stupid; the interface's job is to disprove that in the first sentence, every time.",
          },
          {
            decision: "Publish capability and limits openly",
            logic:
              "Response time, success rate and the underlying model are shown rather than hidden. Trust in an AI tutor comes from knowing what it is, and vagueness reads as something being covered up.",
          },
          {
            decision: "Let learners choose their tutor",
            logic:
              "A directory of AI teachers gives agency to someone whose problem is feeling powerless in a learning environment. Choosing your own tutor is a small act of control at exactly the moment control is missing.",
          },
          {
            decision: "Gamify progress, not participation",
            logic:
              "XP, streaks and badges reward the learning, never the asking. Scoring questions would reintroduce exactly the performance anxiety the product exists to remove.",
          },
        ],
      },
      {
        kind: "figures",
        items: [
          { src: "/work/eduverse/lesson.jpg", caption: "The lesson screen — syllabus, video, and an unobtrusive Ask Doubts control." },
          { src: "/work/eduverse/gamified.jpg", caption: "Progress rewards the learning: XP, badges, accuracy and time spent." },
        ],
      },
      {
        kind: "video",
        src: "/work/eduverse/story.mp4",
        caption:
          "The concept film — the silence in the room this product was designed to break.",
        wide: true,
      },
      {
        kind: "prose",
        eyebrow: "What it changed",
        title: "The result was behavioural before it was educational",
        body: "In beta testing, learners averaged roughly 4.5 AI interactions per hour-long lesson — from a baseline of essentially none — and course completion improved by around 18%. The number I care about is the first one: people who previously asked nothing started asking several times an hour. One tester summed up the whole hypothesis better than my deck did: the relief of asking “silly questions” without consequence.",
      },
      {
        kind: "metrics",
        eyebrow: "Reported from beta",
        items: [
          { metric: "~4.5", label: "AI interactions per 60-min lesson, from a near-zero baseline" },
          { metric: "+18%", label: "course completion in beta cohorts" },
          { metric: "<1s", label: "from clicking Ask Doubts to a paused video" },
          { metric: "CEO-backed", label: "prototype complete, with backing to invest" },
        ],
      },
      {
        kind: "prose",
        eyebrow: "What I took from it",
        title: "Tone did more work than content",
        body: "I expected the answer quality to determine adoption. It didn't — the AI's tone and the smoothness of the transition into asking mattered more than the depth of what it said. Learners valued being told their question was reasonable almost as much as being told the answer. If I build the next version, it starts before the question does: watching for re-watching and slowed pacing, and offering help before someone has to decide whether they're willing to ask for it.",
      },
    ],
    overview:
      "EduVerse is my founder project — an AI-native learning platform built around a single behavioural insight: learners don't lack access to answers, they avoid the social cost of needing one. The product pairs a gamified learning dashboard with a lesson player whose “Ask Doubts” control pauses the video in under a second and opens a judgment-free AI tutor, whose first response always validates the question before answering it. Taken from concept to high-fidelity prototype, with CEO backing to invest.",
    problem: [
      "Learners get stuck mid-lesson, and forum or email support arrives long after the moment of confusion.",
      "Students hesitate to ask at all, fearing judgment about “stupid questions” — the barrier is social, not technical.",
      "Unresolved confusion is where people abandon courses, so the drop-off is a design problem, not a content problem.",
    ],
    process: [
      { title: "Framed the real barrier", body: "Identified fear of judgment, not access, as the reason questions go unasked." },
      { title: "Set a behavioural goal", body: "Make asking a doubt easier than ignoring it — measured in seconds and social risk." },
      { title: "Designed zero-friction Q&A", body: "Persistent Ask Doubts button, sub-second pause, in-place conversational mode." },
      { title: "Built trust into the tutor", body: "Named personalities, visible traits and published capabilities so learners choose knowingly." },
    ],
    solution: [
      "A lesson player where asking a question never means leaving the lesson or losing your place.",
      "An AI tutor scripted to validate every question before answering it.",
      "A directory of AI teachers with visible personalities and capabilities, so learners choose rather than being assigned.",
      "Gamified progress that rewards learning while deliberately never scoring participation.",
    ],
    results: [
      { metric: "~4.5", label: "AI interactions per lesson, from near-zero" },
      { metric: "+18%", label: "completion in beta cohorts" },
      { metric: "CEO-backed", label: "prototype with backing to invest" },
    ],
    gallery: [],
  },
  // -------------------------------------------------------------- PIPRA website (Lab)
  // VERIFY: I've framed V1 as Anudeep's redesign that ran ~1 year, and the dark
  // industry-vertical build as the current site. Confirm he owned both, and
  // whether the final is live today.
  {
    slug: "pipra-website",
    lab: true,
    title: "Three versions of my own company's website",
    client: "PIPRA Solutions — company website",
    domain: "Brand & Web · B2B enterprise",
    year: "2024–2026",
    role: "Product Designer",
    impact:
      "From a generic services list, to a bolder brand, to a site organised around the industries it actually sells to.",
    teaser:
      "The rare project you get to watch age. I redesigned PIPRA's site, lived with it for a year, then rebuilt it around industry verticals instead of service categories.",
    accent: "blue",
    cover: "/work/pipra-website/hero-live.jpg",
    video: "/work/pipra-website/hero-motion.mp4",
    compare: {
      before: "/work/pipra-website/v0-old.jpg",
      after: "/work/pipra-website/v2-hero.jpg",
    },
    tools: ["Figma", "Brand & Web", "Information Architecture", "B2B Positioning"],
    sections: [
      {
        kind: "snapshot",
        role: "Product designer — IA, visual direction, full site design across two rebuilds",
        timeline: "2024–2026 · v1 ran roughly a year before the rebuild",
        team: "With PIPRA's marketing and engineering teams",
        platform: "Responsive marketing site",
        status: "Live — currently on the third version",
        problem:
          "PIPRA sells complex services — AI, blockchain, IoT, cloud — to enterprises like Motorola and Deloitte, but the site listed capabilities instead of answering the only question a buyer has: can you solve my problem?",
        outcome:
          "A site restructured around industries and outcomes rather than service categories, with a mega-menu that maps Services, Products, Solutions and Industries as separate ways in.",
      },
      {
        kind: "takeaways",
        items: [
          "I got to see my own work age. Version 1 ran for about a year, which is long enough to learn what the design was actually failing to do.",
          "The real fix wasn't visual — it was reorganising the site around the buyer's industry instead of our internal service taxonomy.",
          "Each version solved the previous one's problem: the old site had no voice, v1 had voice but still sold features, the final sells outcomes.",
        ],
      },
      {
        kind: "lead",
        body:
          "Most redesigns you hand over and never see again. This one I had to live with — my own company's site, running for a year, with every weakness slowly becoming obvious.",
      },
      {
        kind: "prose",
        eyebrow: "Where it started",
        title: "A capable company that read like a directory",
        body: [
          "PIPRA builds serious things for serious clients — Motorola, Deloitte, IBM partnerships, NASSCOM membership. The original site had all of that on it, and somehow still felt generic: a cream-and-gold layout, a typing-animation headline, and section after section of lists. Offerings by company size. Services by technology. Products in a grid. Reasons to work with us, numbered.",
          "Everything a buyer might want was technically present. Nothing was arranged the way a buyer actually thinks.",
        ],
      },
      {
        kind: "figure",
        src: "/work/pipra-website/v0-old-full.jpg",
        caption:
          "The original site, end to end — comprehensive, and organised entirely around how the company describes itself rather than what a client came looking for.",
      },
      {
        kind: "insight",
        eyebrow: "Version 1",
        title: "First I fixed the wrong problem — and it still helped",
        body:
          "My first rebuild attacked the thing that was easiest to see: the site had no presence. So it got a real voice — a coral and orange identity, a confident headline, isometric 3D for the technical services, and dark sections that gave the page rhythm instead of an unbroken scroll of cards. It was a genuine improvement, and it ran for about a year. What that year taught me is that I'd made the same content look better without changing what the content was doing.",
      },
      {
        kind: "figures",
        items: [
          { src: "/work/pipra-website/v1-hero.jpg", caption: "Version 1 — a real identity at last: coral, confident, and finally not beige." },
          { src: "/work/pipra-website/v1-services.jpg", caption: "Version 1 services — isometric 3D and dark sections giving the page some rhythm." },
        ],
      },
      {
        kind: "prose",
        eyebrow: "What the year taught me",
        title: "Buyers don't shop by technology",
        body: "A warehousing operations lead does not wake up looking for “Artificial Intelligence” or “IoT”. They have a problem — stock they can't see, deliveries they can't trace — and they're trying to find someone who has solved it in their industry before. Version 1 still sorted everything by our internal categories, so a visitor had to translate their problem into our vocabulary before they could tell whether we were relevant. That translation step is where people leave.",
      },
      {
        kind: "principles",
        eyebrow: "Design principles",
        title: "What the rebuild had to do",
        items: [
          {
            name: "Lead with their industry",
            body:
              "A buyer should see their own world on the page — warehousing, agriculture, manufacturing — before they see a list of the technologies we happen to use.",
          },
          {
            name: "Headlines are outcomes",
            body:
              "“Turn Warehousing into a Competitive Advantage” beats “IoT Solutions”, because one names the result and the other names the tool.",
          },
          {
            name: "Four doors, not one list",
            body:
              "Services, Products, Solutions and Industries are genuinely different ways in, so the navigation exposes all four instead of flattening them into one menu.",
          },
        ],
      },
      {
        kind: "figure",
        src: "/work/pipra-website/v2-megamenu.jpg",
        caption:
          "The mega-menu — Services, Products, Solutions and Industries as four parallel entry points, so a visitor navigates by whichever one matches how they're thinking.",
        wide: true,
      },
      {
        kind: "figure",
        src: "/work/pipra-website/v2-industry.jpg",
        caption:
          "Industry pages — the same capabilities, argued in the buyer's language and imagery instead of ours.",
        wide: true,
      },
      {
        kind: "decisions",
        eyebrow: "Key decisions",
        title: "The calls behind the rebuild",
        items: [
          {
            decision: "Reorganise around industries, not technologies",
            logic:
              "The old structure required a buyer to know which technology solved their problem before they could find the page about it. Leading with industry removes that translation step — the fastest way to lose someone is to make them do your information architecture for you.",
          },
          {
            decision: "Write headlines as outcomes",
            logic:
              "“Turn Warehousing into a Competitive Advantage” tells a buyer what changes for them; the technology becomes supporting evidence rather than the pitch. It also forces the page to actually have a claim.",
          },
          {
            decision: "Go dark, and let the product imagery carry it",
            logic:
              "The earlier versions were light and busy, which flattened everything to the same weight. A dark ground makes the product renders and industry photography the brightest thing on screen, and reads as more enterprise-serious than coral did.",
          },
          {
            decision: "Put proof above the fold",
            logic:
              "“Endorsed by leading global enterprises” with real client logos sits immediately under the hero. For a mid-size firm selling to large ones, borrowed credibility is the single most persuasive thing on the page.",
          },
          {
            decision: "Keep one clear next step",
            logic:
              "“Schedule Exploratory Call” replaced the vaguer contact prompts. Naming the low-commitment action a buyer is actually willing to take converts better than asking them to define their own next move.",
          },
        ],
      },
      {
        kind: "compare",
        eyebrow: "Then and now",
        title: "The first version and the current one",
        before: "/work/pipra-website/v0-old.jpg",
        after: "/work/pipra-website/v2-hero.jpg",
      },
      {
        kind: "video",
        src: "/work/pipra-website/demo-v1.mp4",
        caption:
          "Version 1 in full — the redesign that ran for about a year, and taught me what the next one needed to fix.",
        wide: true,
      },
      {
        kind: "prose",
        eyebrow: "The identity",
        title: "One image had to say what a page of copy couldn't",
        body: [
          "Before I touched the hero copy, I sketched the idea as a blueprint — a rough, wireframe-blue diagram of PIPRA as a place rather than a list: one central tower for AI, with the other capabilities — IoT, cloud, blockchain, security — as districts wired into it by the same glowing roads. Once that structure held together as a drawing, I named it: the City of PIPRA. Everything after that was refining the same idea, not replacing it.",
          "I generated the artwork with AI from that blueprint, then iterated it — sharpening the skyline, adding the drone and wind turbines, working through which icons actually read at a glance versus which ones were just decoration. Once the still image was right, I fed it into an AI video tool to bring the city to life — lights travelling the roads, the cloud drifting, the AI tower pulsing — and that's the motion piece running in the hero today.",
        ],
      },
      {
        kind: "figures",
        items: [
          { src: "/work/pipra-website/hero-city-v1.jpg", caption: "First AI-generated pass — the blueprint's idea rendered as a city, before the detail passes." },
          { src: "/work/pipra-website/hero-city-annotated.jpg", caption: "The idea made legible: each district labelled back to a real PIPRA capability — IoT & Edge, Cloud & Data, Blockchain, the Innovation District." },
        ],
      },
      {
        kind: "figure",
        src: "/work/pipra-website/hero-city-v3.jpg",
        caption:
          "The refined city — drone, wind turbines, satellite dish and a denser skyline — the version the motion piece was built from.",
        wide: true,
      },
      {
        kind: "video",
        src: "/work/pipra-website/hero-motion.mp4",
        badge: "Live on pipra.solutions",
        caption:
          "The AI-generated motion piece made from that still — now running as the actual hero on the live site.",
        wide: true,
      },
      {
        kind: "figure",
        src: "/work/pipra-website/hero-live.jpg",
        caption: "The finished hero, live today: “Empowering Your Vision, Leading the Innovation” over the moving city.",
        wide: true,
      },
      {
        kind: "metrics",
        eyebrow: "Where it stands",
        items: [
          { metric: "3 versions", label: "original, my v1, and the current rebuild" },
          { metric: "~1 year", label: "version 1 ran live before the rebuild" },
          { metric: "Blueprint → video", label: "one idea taken from a sketch to a live motion hero" },
          { metric: "Live", label: "PIPRA's public company site" },
        ],
      },
      {
        kind: "prose",
        eyebrow: "What I took from it",
        title: "Living with your own work is the fastest way to improve",
        body: "I've handed over plenty of designs and never learned whether they worked. Here I watched mine for a year, on my own company, and the flaw that surfaced wasn't one I could have seen in a review — the site looked good and still made buyers do the work of translating their problem into our language. Getting to fix that is the most useful feedback loop I've had, and it changed how I judge structure before visuals on everything since. The hero's city went through the same loop in miniature: a blueprint, a name, a still, and only then a motion piece — because none of it was worth animating until the idea underneath it actually held up.",
      },
    ],
    overview:
      "PIPRA Solutions is the company I work for — they build AI, IoT, blockchain and cloud products for enterprise clients. I redesigned their website twice: first giving a generic, list-driven site a real identity, then, after living with that version for about a year, rebuilding it around industries and outcomes rather than internal service categories.",
    problem: [
      "The original site listed capabilities by technology, forcing buyers to translate their problem into the company's vocabulary.",
      "Real credibility — enterprise clients, IBM and NASSCOM partnerships — was buried rather than leading.",
      "Version 1 improved the brand but kept the same structure, so it looked better without selling better.",
    ],
    process: [
      { title: "Version 1 — give it a voice", body: "Coral identity, confident headline, isometric 3D and dark sections to break the endless card scroll." },
      { title: "Lived with it for a year", body: "Watched where the structure kept failing: buyers navigate by industry, not by technology." },
      { title: "Rebuilt the architecture", body: "Four entry points — Services, Products, Solutions, Industries — surfaced in a mega-menu." },
      { title: "Rewrote for outcomes", body: "Industry pages led by results rather than the technologies behind them." },
    ],
    solution: [
      "A site organised around the buyer's industry rather than the company's service taxonomy.",
      "Outcome-led headlines with technology as supporting evidence.",
      "Client proof placed directly beneath the hero, and one clear low-commitment CTA.",
    ],
    results: [
      { metric: "3 versions", label: "across roughly two years" },
      { metric: "4 entry points", label: "replacing a single flat service list" },
      { metric: "Live", label: "PIPRA's public company site" },
    ],
    gallery: [],
  },
  // -------------------------------------------------------------- 3D Warehouse Sim (Lab)
  // NOTE: this is a scripted demo environment — the on-screen ops numbers (units
  // synced, associates on floor, etc.) are simulated for the narrative, not a
  // live data feed. Framed honestly as a demo/experiment below, not a deployment.
  {
    slug: "warepro-command-center",
    lab: true,
    title: "Turning a 3D twin into a command center you can press play on",
    client: "WarePro — personal experiment",
    domain: "3D / Spatial AI · Experiment",
    year: "2026",
    role: "Designer & Builder",
    impact:
      "A follow-on from the WarePro digital twin: instead of a free-roam 3D scene, a scripted 10-chapter demo that pitches the idea of a warehouse command center in about ninety seconds.",
    teaser:
      "What if the WarePro twin became a full command center — live cameras, predictive AI, security alerts — and the demo itself told that story, scene by scene?",
    accent: "blue",
    cover: "/work/3d-warehouse-sim/cover.jpg",
    video: "/work/3d-warehouse-sim/demo.mp4",
    tools: ["Three.js", "React", "Antigravity", "Vercel"],
    sections: [
      {
        kind: "snapshot",
        role: "Designer & builder — concept, 3D scene, UI, scripted narrative",
        timeline: "2026 · personal experiment",
        team: "Solo",
        platform: "Web — live at 3d-warehouse-simulator-app.vercel.app",
        status: "Live demo · scripted scenario data",
        problem:
          "The original WarePro twin proves the 3D space works, but you can't pitch “an AI command center” by handing someone a free-roam scene and hoping they find the point.",
        outcome:
          "A ten-scene scripted demo — sync, workforce, security, unified visibility — that narrates the idea for you, on a loop, with no explanation needed.",
      },
      {
        kind: "takeaways",
        items: [
          "The interesting decision wasn't the 3D scene — it was replacing free exploration with a scripted, chaptered narrative so the pitch tells itself.",
          "It fuses three things I'd built separately before — the spatial twin, AI-camera detection, predictive analytics — into one command-center screen.",
          "This is a demo with scripted scenario data, not a connected live system, and I'm keeping that distinction explicit.",
        ],
      },
      {
        kind: "lead",
        body:
          "The WarePro twin proved a warehouse could be navigable in 3D. The question this experiment chased was smaller and harder: how do you make someone understand that in ninety seconds, without giving them a joystick and a shrug?",
      },
      {
        kind: "prose",
        eyebrow: "The problem with free-roam",
        title: "A sandbox doesn't pitch itself",
        body:
          "Free 3D navigation is great once you already know what you're looking for. It's a poor pitch — hand a stakeholder a camera and full freedom, and half of them never find the payoff. A command-center concept has too many things happening at once — inventory, people, vehicles, security, prediction — to trust that a first-time viewer stumbles onto the right one unaided.",
      },
      {
        kind: "insight",
        eyebrow: "The reframe",
        title: "Make the demo the narrator",
        body:
          "Instead of a sandbox, I scripted it: ten scenes, each with a name and a one-line thesis, playing in sequence like a guided tour with a remote control. “Digital Twin Sync.” “Workforce Activity.” “Security Event Detected.” “Command Center — Full Visibility.” Nobody has to explore to get the point; the point arrives on a timer, in order, and you can pause, rewind, or jump straight to the scene you care about.",
      },
      {
        kind: "figures",
        items: [
          { src: "/work/3d-warehouse-sim/scene-01-overview.jpg", caption: "Scene 1 — the system online: live map, zone occupancy, ops analytics." },
          { src: "/work/3d-warehouse-sim/scene-03-sync.jpg", caption: "Scene 3 — “Digital Twin Sync”: every pallet scanned, instantly mirrored." },
        ],
      },
      {
        kind: "prose",
        eyebrow: "What each scene sells",
        title: "Four ideas, four chapters",
        body: [
          "Sync establishes trust — the twin isn't decorative, it mirrors real scans in real time. Workforce activity switches to a heatmap read of the floor, because a command center's second question is always “where are people right now.”",
          "Security is the scene built to make you sit up: two AI camera feeds with live bounding boxes flag a person without credentials crossing into a restricted zone, and a red alert takes over the frame. Then Command Center closes the loop — the same screen holding inventory, people, vehicles and security together, with the line that's really the thesis of the whole thing: “One platform.”",
        ],
      },
      {
        kind: "figures",
        items: [
          { src: "/work/3d-warehouse-sim/scene-05-workforce.jpg", caption: "Scene 5 — “Workforce Activity”: a live heatmap read of where people are on the floor." },
          { src: "/work/3d-warehouse-sim/scene-07-security.jpg", caption: "Scene 7 — “Security Event Detected”: AI camera feeds flag a restricted-zone breach." },
        ],
      },
      {
        kind: "figure",
        src: "/work/3d-warehouse-sim/scene-10-command.jpg",
        caption: "Scene 10 — “Command Center · Full Visibility”: inventory, people, vehicles, security and insight, on one screen.",
        wide: true,
      },
      {
        kind: "decisions",
        eyebrow: "Key decisions",
        title: "What made the pitch land",
        items: [
          {
            decision: "A scripted sequence instead of a free sandbox",
            logic:
              "A first-time viewer doesn't know what to look for in an open 3D scene. Chaptering the experience means the strongest four ideas are guaranteed to be seen, in the order that builds the argument, every single time.",
          },
          {
            decision: "AI insights phrased as recommendations, not just numbers",
            logic:
              "“Move 14 fast-moving SKUs to the golden zone — est. −11% travel time” does more work than a chart ever could. A raw metric asks the viewer to draw the conclusion; a recommendation states it and lets the number back it up.",
          },
          {
            decision: "Live-looking camera detection overlays",
            logic:
              "Bounding boxes with confidence scores (“PERSON 0.94”) are what makes computer vision legible at a glance — anyone who's seen a self-driving car demo reads that instantly as “the AI is actually watching.”",
          },
          {
            decision: "An adaptive performance mode",
            logic:
              "The scene quietly drops effects under load rather than stuttering — a small piece of engineering craft that matters because a laggy demo undercuts the exact “this is a serious platform” impression the piece is trying to create.",
          },
        ],
      },
      {
        kind: "metrics",
        eyebrow: "What this is — and isn't",
        items: [
          { metric: "10 scenes", label: "a scripted narrative, not a free sandbox" },
          { metric: "Live demo", label: "public and playable, scenario data is simulated" },
          { metric: "3 ideas fused", label: "spatial twin + AI vision + predictive insight" },
          { metric: "Spin-off", label: "extends the original WarePro digital twin" },
        ],
      },
      {
        kind: "prose",
        eyebrow: "What I'd build next",
        title: "The gap between demo and deployment",
        body: "This is honestly a pitch, not a product — the alerts, the AI insights and the camera feeds are scripted to a timeline, not wired to a real sensor or a real camera. The obvious next step is the unglamorous one: replace the script with a real event stream, so Scene 7's restricted-zone alert is a thing that actually happened rather than a beat in a demo. The narrative structure would survive that change completely unchanged — which is probably the best sign that the structure was the right call.",
      },
    ],
    overview:
      "A follow-on experiment from the WarePro digital twin: rather than a free-roam 3D scene, this is a scripted, ten-chapter demo of what a full warehouse command center could look like — live 3D twin, AI camera detection, predictive insights and security alerts unified on one screen, narrated scene by scene so the pitch needs no explanation. The scenario data is simulated; the interaction and visual system are real.",
    problem: [
      "A free-roam 3D scene doesn't explain itself to a first-time viewer evaluating a complex idea.",
      "A command-center concept — inventory, people, vehicles, security, prediction — has too many things happening at once to trust unguided exploration.",
      "Selling “AI-powered” requires making the AI's output legible at a glance, not just present.",
    ],
    process: [
      { title: "Started from the WarePro twin", body: "Reused the spatial 3D foundation as the base for a broader command-center concept." },
      { title: "Scripted a ten-scene narrative", body: "Named chapters — Sync, Workforce, Security, Command Center — each with a one-line thesis." },
      { title: "Layered in AI-styled surfaces", body: "Camera detection overlays, a recommendation feed, and live-looking ops analytics." },
      { title: "Added adaptive performance", body: "Effects scale down under load so playback stays smooth." },
    ],
    solution: [
      "A scripted, replayable demo that narrates a warehouse command-center concept in under two minutes.",
      "AI camera overlays and a recommendations feed that make “AI-powered” visually legible rather than asserted.",
      "One screen unifying spatial twin, workforce, security and predictive insight — the pitch WarePro's original twin couldn't make alone.",
    ],
    results: [
      { metric: "10 scenes", label: "scripted narrative demo" },
      { metric: "Live", label: "public, playable experiment" },
      { metric: "Spin-off", label: "of the WarePro digital twin" },
    ],
    gallery: [],
  },
];

// Compact grid — the rest of the work, listed not deep-dived.
export const moreWork = [
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
// `href` turns a Lab card into a link — used for smaller engagements that still
// earned a full write-up (see CaseStudy.lab).
export const lab = [
  {
    title: "Tangentix — AI marketing agency",
    tag: "Inbound client · Landing page",
    blurb:
      "An AI marketing agency found me on LinkedIn. I designed the category-default dark AI landing page first — then argued us out of it into something bright and led by real data.",
    accent: "blue",
    href: "/work/tangentix",
    cover: "/work/tangentix/cover.jpg",
  },
  {
    title: "PIPRA — company website",
    tag: "Brand & web · 3 versions",
    blurb:
      "My own company's site, redesigned twice. Version 1 gave it a voice and ran for a year — which taught me the real problem was structure: buyers navigate by industry, not by technology.",
    accent: "blue",
    href: "/work/pipra-website",
    cover: "/work/pipra-website/cover.jpg",
  },
  {
    title: "Minimalist Institute — #LiveToExpress",
    tag: "Client work · Two-audience system",
    blurb:
      "One social-impact programme — Expression, Gratitude, Compassion — designed as two parallel sites for café owners and corporate CSR teams, built on a single section skeleton.",
    accent: "blue",
    href: "/work/livetoexpress",
    cover: "/work/livetoexpress/cover.jpg",
  },
  {
    title: "Golden Suisse — 3 fintech apps",
    tag: "Fintech · Live platform",
    blurb:
      "Investor, Trader and Agency & Admin — three responsive products for a live gold-trading platform, sharing one design system and wired to live backend APIs. Backend confirmed live by CEO and VP.",
    accent: "gold",
  },
  {
    title: "ClearCut — background remover",
    tag: "Coffee-break build · Live",
    blurb:
      "Idea to deployed app in about ten minutes with Antigravity. One dropzone, no signup, no watermark — and the first side tool I published instead of keeping to myself.",
    accent: "blue",
    href: "/work/clearcut",
    cover: "/work/clearcut/cover.jpg",
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
    title: "WarePro Command Center",
    tag: "Experiment · Spatial AI",
    blurb:
      "A scripted, ten-scene demo imagining WarePro's twin as a full command center — live cameras, predictive AI, security alerts — that narrates itself instead of asking you to explore.",
    accent: "blue",
    href: "/work/warepro-command-center",
    cover: "/work/3d-warehouse-sim/cover.jpg",
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
    body: "Use an AI-led workflow to move from idea to high-fidelity, testable prototype in hours.",
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
// Photos are identified; the `clip-0*` labels are still a best guess from
// sampled frames (dance, outdoors, a desk experiment) — correct any that are off.
export const life = [
  { type: "video", src: "/life/clip-08.mp4", label: "Dancing", aspect: "portrait" },
  { type: "image", src: "/life/conf-uxday-group.jpg", label: "UX Day 2025", aspect: "portrait" },
  { type: "image", src: "/life/conf-summit.jpg", label: "Experience Summit", aspect: "landscape" },
  { type: "video", src: "/life/clip-04.mp4", label: "Off the clock", aspect: "portrait" },
  { type: "image", src: "/life/travel-river.jpg", label: "Kerala streams", aspect: "portrait" },
  { type: "image", src: "/life/conf-community.jpg", label: "Design community", aspect: "landscape" },
  { type: "video", src: "/life/clip-02.mp4", label: "Somewhere outdoors", aspect: "portrait" },
  { type: "image", src: "/life/archery.jpg", label: "Archery", aspect: "portrait" },
  { type: "image", src: "/life/conf-accelerator.jpg", label: "UX Accelerator", aspect: "landscape" },
  { type: "video", src: "/life/clip-07.mp4", label: "Tinkering", aspect: "landscape" },
  { type: "image", src: "/life/mentorship.jpg", label: "Mentorship", aspect: "portrait" },
  { type: "video", src: "/life/clip-05.mp4", label: "Moving", aspect: "portrait" },
  { type: "image", src: "/life/conf-servicenow.jpg", label: "Put AI to work", aspect: "portrait" },
  { type: "image", src: "/life/conf-uxday-02.jpg", label: "UX Day 2025", aspect: "portrait" },
  { type: "video", src: "/life/clip-03.mp4", label: "Out there", aspect: "portrait" },
  { type: "video", src: "/life/clip-06.mp4", label: "Experimenting", aspect: "portrait" },
  { type: "video", src: "/life/clip-01.mp4", label: "Somewhere green", aspect: "portrait" },
] as const;

// Beyond work — the human layer recruiters remember.
export const personal = [
  "Competitive dancer — choreographed & performed since school, with multiple wins.",
  "Active member of the Figma Community, Hyderabad.",
  "Design Days regular — Microsoft, SAP, ServiceNow, Salesforce & Lollypop events.",
  "Travel enthusiast — I draw creative inspiration from new cultures and places.",
];
