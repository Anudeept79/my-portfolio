import { wareproCaseStudy } from "./warepro";
import { pigoCaseStudy } from "./pigo";
import { piErp2026CaseStudy } from "./pi-erp-2026";
import { kuyilCaseStudy } from "./kuyil";
import { stonexCaseStudy } from "./stonex";
import { myResumeAiCaseStudy } from "./myresumeai";

// ============================================================================
// SITE CONTENT — single source of truth for the whole portfolio.
// Edit facts/metrics here; every page reads from this file.
// Anything marked  // VERIFY  is drafted from the resume — confirm before sharing.
// ============================================================================

export const profile = {
  name: "Anudeep Thota",
  title: "AI Product Designer who builds in code",
  tagline: "AI Product Designer who Builds.",
  subtitle:
    "I design AI products and build them in working code, then ship them side by side with engineering — across logistics, enterprise SaaS, government and fintech.",
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
  { value: "2 years", label: "Product design + front-end code", sub: "problem → working product" },
  { value: "4", label: "US Gov projects", sub: "for Virginia State Police" },
  { value: "3", label: "Products, one design system", sub: "web · mobile · AI assistant" },
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
    items: ["Claude Code", "Cursor", "Antigravity", "Google AI Studio", "React / React Native", "TypeScript"],
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
/** A genuine capture. `label` names the stage of the work it belongs to. */
export type EvidenceItem = {
  src: string;
  /** Describes what is visible; `caption` says why it matters. */
  alt: string;
  /** Stage of the work: Legacy, Iteration, Reference, Prototype or Final. */
  label?: string;
  caption?: string;
  /** Magnifies a detail in the thumbnail only; the enlarged view always shows the whole capture. */
  zoom?: { scale: number; origin: string };
  /** A portrait phone capture: shown near native width instead of stretched to fill. */
  phone?: boolean;
};

/** Secondary material, collapsed until asked for. */
export type DetailItem = { title: string; body: string | string[]; images?: EvidenceItem[] };

export type CaseSection = { id?: string } & (
  // ---- editorial blocks (used by case studies that set `editorial`)
  // `uncropped` shows each capture whole instead of cropping the pair to one ratio
  | { kind: "comparison"; eyebrow?: string; title: string; body: string; items: EvidenceItem[]; uncropped?: boolean }
  // the 30-second version: problem, what I did, result
  | { kind: "glance"; items: { label: string; text: string }[] }
  // before → after numbers, read at a glance
  | {
      kind: "stats";
      eyebrow?: string;
      title: string;
      intro?: string;
      items: { from?: string; value: string; label: string }[];
      note?: string;
      /** evidence for the numbers, set beside them; the numbers then stack in one column */
      image?: EvidenceItem;
    }
  // a flow told as numbered phone captures, read left to right
  | { kind: "sequence"; eyebrow?: string; title: string; intro?: string; items: EvidenceItem[] }
  // field research: photos from the visit, then what was seen → what the product does about it
  | {
      kind: "field";
      eyebrow?: string;
      title: string;
      intro?: string;
      photos?: EvidenceItem[];
      findings: { saw: string; did: string }[];
      /** column headings for findings; defaults to "On the floor" / "In the product" */
      labels?: [string, string];
      note?: string;
    }
  // interface copy, old line → new line, by where it appears
  | { kind: "rewrites"; eyebrow?: string; title: string; intro?: string; items: { where: string; before: string; after: string }[] }
  | { kind: "turning"; eyebrow: string; title: string; body: string; shift?: { from: string; to: string } }
  | {
      kind: "model";
      label: string;
      title: string;
      stages: { name: string; note: string }[];
      items: string[];
      caption: string;
    }
  | { kind: "ownership"; eyebrow?: string; title: string; groups: { name: string; items: string[] }[] }
  | {
      kind: "status";
      eyebrow?: string;
      title: string;
      states: { name: string; status: string; state: "production" | "in-progress" }[];
      qualification: string;
    }
  | { kind: "note"; label?: string; title: string; body: string }
  | {
      kind: "closing";
      eyebrow?: string;
      statement: string;
      /** What I'd do differently, grounded in what actually happened. */
      reflection?: string;
      open?: { label: string; text: string };
    }
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
  // `variant: "split"` sets the heading beside the copy; `more` adds collapsed supporting detail
  | { kind: "prose"; eyebrow?: string; title?: string; body: string | string[]; variant?: "split"; more?: DetailItem[] }
  // the line worth stopping on
  | { kind: "quote"; text: string; attribution?: string }
  // a boxed realisation — the turn in the story
  | { kind: "insight"; eyebrow?: string; title: string; body: string }
  | { kind: "bullets"; eyebrow?: string; title?: string; items: string[] }
  // `phone` constrains portrait mobile captures to a handset-sized column so
  // they aren't upscaled past their native width (and rendered blurry)
  | { kind: "figure"; src: string; caption?: string; wide?: boolean; phone?: boolean; alt?: string; label?: string }
  | { kind: "figures"; items: { src: string; caption?: string }[]; phone?: boolean }
  // an inline muted/looping clip of the product actually running. In an editorial
  // study, giving it a `title` sets it beside its copy, with `more` collapsed beneath.
  | {
      kind: "video";
      controlled?: boolean;
      poster?: string;
      src: string;
      caption?: string;
      badge?: string;
      wide?: boolean;
      phone?: boolean;
      eyebrow?: string;
      title?: string;
      body?: string | string[];
      more?: DetailItem[];
    }
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
      intro?: string;
      // `evidence` + `result` opt an item into the editorial row (Evidence → Decision → Trade-off → Result);
      // `images` sets the capture(s) that support it beside the reasoning
      items: {
        decision: string;
        logic: string;
        tradeoff?: string;
        evidence?: string;
        result?: string;
        images?: EvidenceItem[];
        /** Stack a pair of wide, short captures instead of setting them side by side. */
        stack?: boolean;
        /** Set the captures full width below the reasoning, so a detailed before/after pair stays readable. */
        wide?: boolean;
      }[];
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
    }
);

export type CaseStudy = {
  slug: string;
  /** Other case studies about the same product, linked from the header. */
  related?: { href: string; label: string }[];
  editorial?: {
    headline: string;
    subheadline: string;
    summary: { label: string; value: string }[];
    caption: string;
    /** Describes the hero image (the cover) for screen readers and the enlarged view. */
    coverAlt: string;
    navigation: { id: string; label: string }[];
  };
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

/**
 * The case studies that lead the homepage, in order. Everything else that
 * isn't a Lab entry is listed compactly under "More case studies".
 */
export const featuredSlugs = [
  "warepro-digital-twin",
  "kuyil-ai-assistant",
  "pigo",
  "pi-erp-platform-ux",
  "myresumeai",
  "stonex-migration",
];

export const caseStudies: CaseStudy[] = [
  wareproCaseStudy,
  pigoCaseStudy,

  // -------------------------------------------------------------- StoneX
  stonexCaseStudy,

  piErp2026CaseStudy,
  kuyilCaseStudy,

  // -------------------------------------------------------------- PI-ERP
  // VERIFY: the "delivered as a UI plugin/theme layer so core code stays
  // untouched" framing is inferred from iDempiere's plugin architecture plus
  // Anudeep's constraint that core code and DB could not change. Confirm.
  {
    slug: "pi-erp-design-system",
    related: [{ href: "/work/pi-erp-platform-ux", label: "PI-ERP in 2026: role-based UX at scale" }],
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
  myResumeAiCaseStudy,
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
  // -------------------------------------------------------------- WarePro Mobile
  {
    slug: "warepro-mobile",
    related: [{ href: "/work/pigo", label: "PiGo: the app this design grew into" }],
    title: "Five apps with the same icon, rebuilt as one",
    client: "WarePro (PIPRA Solutions)",
    domain: "Logistics · Mobile",
    year: "2026",
    role: "Product Designer",
    impact:
      "WarePro's handheld app was a launcher full of near-identical apps. I rebuilt the whole operator side — receiving through dispatch — as one system on the Atlassian Design System.",
    teaser:
      "The operator side of WarePro: nine flows covering the whole inbound-to-outbound chain, rebuilt so a picker can run them one-handed while holding a scanner.",
    accent: "blue",
    cover: "/work/warepro-mobile/cover.jpg",
    video: "/work/warepro-mobile/flow-full.mp4",
    compare: {
      before: "/work/warepro-mobile/old-ui-launcher.jpg",
      after: "/work/warepro-mobile/screen-putaway.jpg",
    },
    tools: ["Figma", "Atlassian Design System", "Mobile UX", "Design Systems"],
    sections: [
      {
        kind: "snapshot",
        role: "Product designer — research, flows, component library, UI across all modules",
        timeline: "2026",
        team: "With PIPRA's WarePro product and engineering teams",
        platform: "Android handhelds · warehouse scanners",
        status: "Redesign delivered",
        problem:
          "The app opened on a “Select your app” launcher where five assembly apps shared one identical icon. Inside, screens showed raw unlabelled IDs to operators working one-handed with a scanner, where a mis-read becomes a real inventory error.",
        outcome:
          "Nine flows rebuilt as one system on the Atlassian Design System — task-first instructions, a single status grammar, and guards that stop invalid work before it's submitted.",
      },
      {
        kind: "takeaways",
        items: [
          "The original wasn't one app — it was a launcher of separate apps, several of which were visually indistinguishable from each other.",
          "The unit of design here is a task, not a screen: every flow states the next physical action before it shows any data.",
          "A mis-scan isn't a UI bug, it's stock that exists in the system but not on the shelf — so consistency is a safety feature, not a style preference.",
        ],
      },
      {
        kind: "lead",
        body:
          "Open the old WarePro app and the first thing you get isn't work — it's a menu. “Select your app.” Five tiles for assembly alone: Pick, Assembled, QC, Box Packing, Carton Packing. Every one of them the same orange box with the same green tick.",
      },
      {
        kind: "figure",
        src: "/work/warepro-mobile/old-ui-launcher.jpg",
        phone: true,
        caption:
          "The original launcher. Five different jobs, one identical icon — the label is the only thing distinguishing them, so the icon does no work at all.",
      },
      {
        kind: "prose",
        eyebrow: "What was actually wrong",
        title: "It had grown into a folder of apps, not a product",
        body: [
          "Each warehouse job had been shipped as its own mini-app, and the launcher was how they were held together. Different roles saw different grids, so there wasn't even one consistent home screen to learn — and because every tile reused the same generic icon, choosing the right one meant reading every label, every time.",
          "Inside, the screens had the same problem in miniature. A manufacturing list showed “80078 · 1000134 · 1000001” with nothing labelling which number was the order, the part, or the location. Titles truncated mid-word. Detail screens were bare label-and-value tables with no hierarchy, so the ordered quantity looked exactly as important as the internal location code. Filters lived in a tab bar pinned to the bottom of the screen, far from the list they controlled.",
        ],
      },
      {
        kind: "insight",
        eyebrow: "The reframe",
        title: "Design the task, not the screen",
        body:
          "The desktop instinct is to present data and let the user decide what to do with it. On a warehouse floor that's backwards — the operator already knows which job they're on; what they need is the next physical action. So every flow now leads with the instruction and puts the data underneath: “Task 3 of 4,” then “1. GO TO THIS BIN — A1-02,” then the item. The screen tells you where to walk before it tells you what you're carrying.",
      },
      {
        kind: "figure",
        src: "/work/warepro-mobile/screen-putaway.jpg",
        phone: true,
        caption:
          "Putaway, redesigned — progress state, then the bin at the largest type on screen, then the item, then the single scan action.",
      },
      {
        kind: "prose",
        eyebrow: "Process",
        title: "Understanding, then components, then screens",
        body: [
          "I worked it in that order in Figma — an Understanding page mapping how each job actually runs, then a component and variables library (cards, tabs, buttons, status bar, the WarePro colour ramp), and only then the screens. Building the pieces first is what let nine modules end up speaking the same language instead of nine separate visual dialects.",
          "The receiving and manufacturing list screens each went through a dozen-plus iterations before they settled. I annotated the reasoning directly on the canvas as I went, so the decisions were arguable with the product team rather than just asserted.",
        ],
      },
      {
        kind: "quote",
        text:
          "Segmented tabs on top give easy navigation — most users have used that kind of interaction before, so it won't confuse them while using it.",
        attribution: "From my design annotations in the Figma file",
      },
      {
        kind: "principles",
        eyebrow: "Design principles",
        title: "Three rules for a device held in one hand",
        items: [
          {
            name: "Emphasise what matters first",
            body:
              "Every card leads with the information the operator actually scans for — the order, the quantity, the status — and demotes internal codes. Readability by hierarchy, not by making everything bigger.",
          },
          {
            name: "Use patterns they already know",
            body:
              "Segmented tabs on top, search where search always is, a familiar card list. Novelty costs nothing to design and a great deal to learn on a shift.",
          },
          {
            name: "Say the next action",
            body:
              "Instructions are numbered steps — “1. Scan Location Barcode.” The operator should never infer what the app expects from them next.",
          },
        ],
      },
      {
        kind: "prose",
        eyebrow: "The system",
        title: "Why Atlassian, again",
        body: "I'd already put PI-ERP on the Atlassian Design System for its density under enterprise data, and the reasoning applies harder here. Warehouse screens are lists of states — orders, batches, shipments, bins — and Atlassian's lozenge and card patterns are built for exactly that, without the generous consumer spacing that would cost visible rows on a small screen. Sharing it across both products also means a PIPRA operator moving between desktop and handheld isn't learning two visual languages.",
      },
      {
        kind: "figures",
        phone: true,
        items: [
          { src: "/work/warepro-mobile/screen-receiving.jpg", caption: "Receiving — purchase orders with completion percentages and unit counts, not bare IDs." },
          { src: "/work/warepro-mobile/screen-inventory.jpg", caption: "Inventory — filter tabs moved to the top, for the two states anyone actually searches for." },
          { src: "/work/warepro-mobile/screen-qc.jpg", caption: "Quality check — a scan queue with pass/fail per batch, and a submit that stays disabled until an inspection exists." },
          { src: "/work/warepro-mobile/screen-dispatch.jpg", caption: "Dispatch — shipments sorted by readiness, with the authorise action only on the one that's ready." },
        ],
      },
      {
        kind: "decisions",
        eyebrow: "Key decisions",
        title: "The calls that protect the count",
        items: [
          {
            decision: "Collapse the launcher into flows",
            logic:
              "Five near-identical tiles is a choice the operator shouldn't have to make. Reorganising around the actual chain of work — receive, put away, check, pack, dispatch — means the app reflects the shift rather than the org chart of how it was built.",
          },
          {
            decision: "Label every number, kill the bare IDs",
            logic:
              "“80078 · 1000134 · 1000001” is only readable to someone who already memorised the schema. Every value now carries its field, because the person reading it is holding a box and hasn't got working memory to spare.",
          },
          {
            decision: "Move filters from the bottom bar to segmented tabs on top",
            logic:
              "Filters belong next to what they filter. Putting them directly above the list — a pattern operators have met in every other app they use — removes the gap between choosing a state and seeing it applied.",
          },
          {
            decision: "Disable submit until the work is real",
            logic:
              "Submit QC Report, Execute Transfer and Process Return all start disabled and enable only once items are genuinely scanned in. Preventing an empty submission is far cheaper than reconciling a phantom one against physical stock later.",
          },
          {
            decision: "Offer the alternative at the point of failure",
            logic:
              "“Bin is full? Suggest alternative” sits right on the putaway screen. The moment someone hits a physical blocker is exactly when they improvise and put stock somewhere the system doesn't know about — so the recovery path has to be in reach before that happens.",
          },
          {
            decision: "A persistent scan trigger in a fixed position",
            logic:
              "Scanning is the most repeated action across all nine modules, so it gets the same floating control in the same place everywhere. Positional consistency matters more than elegance when someone performs an action hundreds of times a shift.",
          },
        ],
      },
      {
        kind: "video",
        src: "/work/warepro-mobile/flow-receiving.mp4",
        phone: true,
        caption: "Receiving — purchase order to pre-receive checklist to scan.",
      },
      {
        kind: "video",
        src: "/work/warepro-mobile/flow-qc.mp4",
        phone: true,
        caption: "Quality check — building an inspection queue, then passing or failing each batch.",
      },
      {
        kind: "video",
        src: "/work/warepro-mobile/flow-dispatch.mp4",
        phone: true,
        caption: "Dispatch — the end of the chain: authorise a ready shipment and release it.",
      },
      {
        kind: "metrics",
        eyebrow: "Scope",
        items: [
          { metric: "9 flows", label: "receiving, putaway, inventory, QC, packing, dispatch, transfer, returns, sales orders" },
          { metric: "1 system", label: "one component library replacing a folder of separate apps" },
          { metric: "One-handed", label: "designed around thumb reach and a scanner in the other hand" },
          { metric: "Delivered", label: "full mobile redesign handed to the product team" },
        ],
      },
      {
        kind: "prose",
        eyebrow: "What I took from it",
        title: "Consistency is a safety feature here",
        body: "On a marketing site, an inconsistent component is an aesthetic problem. In a warehouse app it's a mis-scan — and a mis-scan is stock that exists in the system but not on the shelf. Giving nine modules one status grammar, one scan position and one instruction format wasn't tidiness. It was the cheapest available way to reduce the number of decisions someone has to make while holding a heavy box.",
      },
    ],
    overview:
      "WarePro's mobile app is the operator counterpart to the desktop digital twin — the tool used by the people physically moving stock. It had grown into a launcher of separate mini-apps, several sharing an identical icon, with screens that showed raw unlabelled IDs. I rebuilt all nine flows — receiving, putaway, inventory, quality check, packing, dispatch, transfer, returns and sales orders — as one system on the Atlassian Design System, structured around one-handed use with a scanner.",
    problem: [
      "The app opened on a launcher of separate mini-apps, five of which shared the same generic icon.",
      "Screens showed raw unlabelled IDs, truncated titles, and flat label-value tables with no hierarchy.",
      "Operators work one-handed with a scanner, on the move, with frequent interruptions — and a mis-scan becomes a real inventory discrepancy.",
    ],
    process: [
      { title: "Mapped how each job actually runs", body: "An Understanding page in Figma covering the full inbound-to-outbound chain." },
      { title: "Built components before screens", body: "Cards, tabs, buttons, status bar and colour ramp first, so nine modules share one language." },
      { title: "Iterated with the reasoning on the canvas", body: "Receiving and manufacturing list each went through a dozen-plus versions, annotated as I went." },
      { title: "Standardised on Atlassian DS", body: "Reused the system already adopted for PI-ERP, chosen for list and status density." },
    ],
    solution: [
      "One system replacing a launcher of near-identical apps.",
      "Task-first screens that state the next physical action before showing data.",
      "Labelled fields, top segmented tabs, and a single status grammar across all nine flows.",
      "Guards against invalid work — disabled submissions and in-context recovery at the point of failure.",
    ],
    results: [
      { metric: "9 flows", label: "the full inbound-to-outbound chain" },
      { metric: "1 design system", label: "Atlassian DS, shared with PI-ERP" },
      { metric: "Delivered", label: "handed to the WarePro product team" },
    ],
    gallery: [],
  },
  // -------------------------------------------------------------- K-DISC Tissue Culture (Lab)
  {
    slug: "kdisc-tissue-culture",
    lab: true,
    title: "A government lab dashboard that read like a database dump",
    client: "K-DISC — Kerala Development & Innovation Strategic Council",
    domain: "Civic Tech · Government",
    year: "2026",
    role: "Product Designer",
    impact:
      "Redesigned the Kerala state government's tissue-culture traceability dashboard — from a generic admin-panel template dumping raw sensor tables into a system built around six production stages and the people running them.",
    teaser:
      "A live Kerala state government dashboard tracking plant tissue-culture production, rebuilt from a raw-data admin template into a system anyone on the programme can actually read.",
    accent: "blue",
    cover: "/work/kdisc-tissue-culture/cover.jpg",
    compare: {
      before: "/work/kdisc-tissue-culture/old-dashboard.jpg",
      after: "/work/kdisc-tissue-culture/new-dashboard.jpg",
    },
    tools: ["Figma", "Civic UX", "Data Visualisation", "Dashboard Design"],
    sections: [
      {
        kind: "snapshot",
        role: "Product designer — redesign of the production dashboard",
        timeline: "2026",
        team: "With PIPRA's team, for K-DISC / Biotechnology & Model Floriculture Center",
        platform: "Web — internal government dashboard",
        status: "Redesign delivered",
        problem:
          "The live dashboard at tissueculture.kdisc.kerala.gov.in was a generic admin-panel template — plain pie charts, dense raw sensor tables, and orange accent bars with no meaning behind them.",
        outcome:
          "A dashboard organised around the six real production stages and the people running them, with sensor data shown as scannable status cards instead of raw tables.",
      },
      {
        kind: "takeaways",
        items: [
          "This is real, live government infrastructure — a state programme tracking plant tissue-culture production from lab to field, not a concept exercise.",
          "The old dashboard was a template with data poured into it; the redesign is organised around six real production stages — Initiation, Callusing, Multiplication, Elongation, Rooting, Hardening.",
          "The clearest single win: rows of raw IoT temperature and humidity readings became compact status cards you can read in one pass down a shift.",
        ],
      },
      {
        kind: "lead",
        body:
          "K-DISC runs a real state programme: tracking plant tissue cultures through a lab pipeline, in growth rooms wired with temperature and humidity sensors, all the way to field collection. The dashboard that ran it looked like an admin template nobody had customised.",
      },
      {
        kind: "figure",
        src: "/work/kdisc-tissue-culture/old-dashboard.jpg",
        caption:
          "The live dashboard as it stood — captured directly from tissueculture.kdisc.kerala.gov.in. A generic admin sidebar, plain pie charts, and no visual hierarchy between a headline number and a device log.",
        wide: true,
      },
      {
        kind: "prose",
        eyebrow: "What was actually wrong",
        title: "A template with data poured into it",
        body: [
          "Nothing on the old dashboard was broken — every number was real and current. The problem was that it read like the default screen of whatever admin-panel framework it was built on: a collapsible “Favourites” sidebar, orange accent bars on every card regardless of what the card meant, and plain filled pie charts with no centre total to anchor the eye.",
          "The worst offender was the IoT section. Average temperature, humidity, per-device readings, light status, battery — all of it as raw table rows. “OverHeat” and “LessHumidity” sat in the same red as an error message, with no way to tell at a glance which growth room actually needed attention right now.",
        ],
      },
      {
        kind: "figure",
        src: "/work/kdisc-tissue-culture/old-iot-tables.jpg",
        caption:
          "The old IoT section — four separate raw tables for temperature, humidity, device status and light status, with no summary above them.",
        wide: true,
      },
      {
        kind: "insight",
        eyebrow: "The reframe",
        title: "Organise around the six stages, not around the sensors",
        body:
          "A tissue culture moves through six defined stages on its way from a lab sample to a plantable sucker: Initiation, Callusing, Multiplication, Elongation, Rooting, Hardening. That's the actual mental model of everyone using this system — a technician, a field officer, a programme manager all think in stages, not in database tables. So the redesign puts stage-wise distribution and rejection history front and centre, with the sensor data demoted to supporting status, not the headline.",
      },
      {
        kind: "figure",
        src: "/work/kdisc-tissue-culture/new-iot-sensors.jpg",
        caption:
          "The same IoT data and the same six stages, redesigned — sensors as compact status cards, stage distribution as a single readable row instead of four separate tables.",
        wide: true,
      },
      {
        kind: "principles",
        eyebrow: "Design principles",
        title: "Three rules for a civic data dashboard",
        items: [
          {
            name: "Summarise before you tabulate",
            body:
              "Every data section leads with a scannable summary — a status card, a stage count — before any raw table. A table is for someone who already knows what they're looking for; a summary is for everyone else.",
          },
          {
            name: "Colour only where it means something",
            body:
              "The old dashboard used the same orange bar on every card type. The redesign spends colour deliberately — green for on-track, amber and red reserved for what actually needs a person's attention.",
          },
          {
            name: "Match the navigation to the job, not the database",
            body:
              "The sidebar is organised by task — Culture Production, Batch Production, Growth Room Report, Plant Tag Reports — mirroring how a technician or field officer actually describes their day, not the underlying table names.",
          },
        ],
      },
      {
        kind: "figures",
        items: [
          { src: "/work/kdisc-tissue-culture/new-stages.jpg", caption: "IoT sensors as status cards, and stage-wise culture distribution as a single readable row." },
          { src: "/work/kdisc-tissue-culture/entry-screen.jpg", caption: "The branded entry screen — both the Kerala state emblem and the K-DISC identity, carried through to the app itself." },
        ],
      },
      {
        kind: "decisions",
        eyebrow: "Key decisions",
        title: "Widget by widget, against the old style",
        items: [
          {
            decision: "A donut with a centre total and a percentage legend, not a plain filled pie",
            logic:
              "The old “First visit” chart was a solid pie with a colour key underneath — you had to match colours to a legend and estimate proportions yourself. The redesign prints the total (“110”) in the donut's centre and states each share as a percentage (Completed 60%, Pending 10%, Rejected 20%) directly under its own dot. The headline number and the breakdown are both handed to you, not inferred.",
          },
          {
            decision: "One IoT reading per IoT card, not one row in a six-column table",
            logic:
              "The old IoT table forced a left-to-right scan across Room, Temperature, Humidity, Temp Status, Humidity Status, Battery and Time just to answer “is C1 fine?” The redesigned card puts the room, the live temperature, humidity and light state on one face — “16°C · C1 · Humidity/30% · Lights OFF 10H” — so that single question is answered without scanning a row.",
          },
          {
            decision: "Stage names as column headers over big numbers, not a dense data table",
            logic:
              "Stage-wise culture distribution reads as six wide columns — Initiation, Callusing, Multiplication, Elongation, Rooting, Hardening — each with one large number underneath. No table borders, no repeated row chrome. It reads like a row of KPIs, because that's what it actually is to the person checking it.",
          },
          {
            decision: "Keep room-by-stage detail in a real table, but make it a table again",
            logic:
              "Not every view should be de-tabled — “Medium bottles by room” genuinely is a matrix (5 rooms × 5 stages), so it stays a table. The decision was giving it clean row separation, aligned numerals, and a bold room label per row, instead of the cramped, low-contrast grid the old dashboard used for the same kind of data.",
          },
          {
            decision: "Bar charts get gridlines, readable labels and a hover tooltip with the exact figure",
            logic:
              "The old “User wise TCT Performance” chart had unlabeled axes and username labels like “TCT@pipra” that didn't read as a person. The redesign gives every user a real name (Muthu, Srikanth, Mahindra), adds horizontal gridlines so bar heights are comparable at a glance, and puts the exact number behind a hover — “Muthu · 44,058 · Total” — so the chart works both as an at-a-glance comparison and as a precise lookup.",
          },
          {
            decision: "Keep the government identity, not a generic template skin",
            logic:
              "The Kerala state emblem and the K-DISC mark carry real institutional trust. Rather than replace the branding with a generic dashboard look, the redesign kept it visible — including on the app's own entry screen — so the system still reads as official.",
          },
          {
            decision: "Task-based navigation instead of table-based navigation",
            logic:
              "Renaming and regrouping the sidebar around what a user is trying to do — production, reports, users — instead of what table the data happens to live in removes a translation step between the job and the interface.",
          },
        ],
      },
      {
        kind: "metrics",
        eyebrow: "Where it stands",
        items: [
          { metric: "6 stages", label: "Initiation through Hardening, the real production pipeline" },
          { metric: "Live", label: "government dashboard, real production data" },
          { metric: "Government client", label: "K-DISC · Biotechnology & Model Floriculture Center" },
          { metric: "Delivered", label: "redesign handed over" },
        ],
      },
      {
        kind: "prose",
        eyebrow: "What I took from it",
        title: "Civic dashboards fail quietly",
        body: "Nobody complains loudly about a confusing government dashboard the way they would about a broken consumer app — they just work around it, or stop trusting the numbers. The old dashboard wasn't wrong, it was just unreadable at the speed the job actually moves at. Redesigning around the six real stages instead of the underlying tables is the same lesson as everywhere else in this portfolio: design the task, not the data model.",
      },
    ],
    overview:
      "K-DISC (Kerala Development and Innovation Strategic Council) runs a state tissue-culture traceability programme with the Biotechnology & Model Floriculture Center, tracking plant cultures through six production stages across growth rooms wired with IoT sensors. The live dashboard was a generic admin-panel template — raw sensor tables, plain pie charts, and no visual hierarchy. I redesigned it around the programme's real six-stage production model, turning raw device tables into scannable status cards.",
    problem: [
      "The live government dashboard read as an unstyled admin template, not a purpose-built tool.",
      "IoT sensor data was shown as four separate raw tables with no summary.",
      "Navigation and layout followed the underlying database structure instead of how technicians and field officers actually describe their work.",
    ],
    process: [
      { title: "Audited the live system", body: "Captured the dashboard as it actually runs at tissueculture.kdisc.kerala.gov.in." },
      { title: "Mapped the real production model", body: "Six stages — Initiation, Callusing, Multiplication, Elongation, Rooting, Hardening — as the organising structure." },
      { title: "Redesigned the data layer", body: "Raw sensor tables became status cards; plain pies became donuts with centre totals." },
      { title: "Kept the institutional identity", body: "Retained the Kerala state emblem and K-DISC branding throughout, including the app's entry screen." },
    ],
    solution: [
      "A dashboard organised around the programme's six real production stages.",
      "IoT sensor data shown as scannable status cards instead of raw device tables.",
      "Donut charts with centre totals, and colour spent only where it signals something actionable.",
      "Task-based navigation that matches how technicians and field officers describe their work.",
    ],
    results: [
      { metric: "6 stages", label: "the real production pipeline, made the organising structure" },
      { metric: "Live", label: "government dashboard, real production data" },
      { metric: "Delivered", label: "redesign handed to K-DISC / PIPRA" },
    ],
    gallery: [],
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
    cover: "/work/pipra-website/hero-live.jpg",
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
    title: "WarePro Command Center",
    tag: "Experiment · Spatial AI",
    blurb:
      "A scripted, ten-scene demo imagining WarePro's twin as a full command center — live cameras, predictive AI, security alerts — that narrates itself instead of asking you to explore.",
    accent: "blue",
    href: "/work/warepro-command-center",
    cover: "/work/3d-warehouse-sim/cover.jpg",
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
    title: "Golden Suisse — 3 fintech apps",
    tag: "Fintech · Live platform",
    blurb:
      "Investor, Trader and Agency & Admin — three responsive products for a live gold-trading platform, sharing one design system and wired to live backend APIs. Backend confirmed live by CEO and VP.",
    accent: "gold",
  },
  {
    title: "K-DISC Tissue Culture Dashboard",
    tag: "Kerala govt · Dashboard redesign",
    blurb:
      "The live Kerala state dashboard tracking plant tissue-culture production, redesigned from a raw-data admin template into a system built around the programme's six real production stages.",
    accent: "blue",
    href: "/work/kdisc-tissue-culture",
    cover: "/work/kdisc-tissue-culture/cover.jpg",
  },
  {
    title: "Kerala EV Station App",
    tag: "Civic · 4-hour prototype",
    blurb:
      "A working subsidy portal prototype for KSEB's EV charging scheme — station registration, eligibility and applications — designed and built in 4 hours for a stakeholder pitch.",
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
    title: "Build it, ship it with engineering",
    body: "Working front-end code that engineering can build on, reviewed with product leadership before it ships.",
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

// Social proof. Only feedback Anudeep has confirmed these people gave, polished
// for reading. Never add a quote someone didn't actually say.
export const testimonials = [
  {
    quote:
      "On PI-ERP and PiGo, Anudeep took the work from design all the way to a live product — owning design and development instead of handing over mockups and waiting. That's exactly the ownership I want to encourage.",
    name: "Ajit Kumar",
    role: "CEO, PIPRA Solutions",
    accent: "blue",
  },
  {
    quote:
      "Anudeep picked up AI quickly and gave our developers real competition — designing and building side by side with the dev team, and delivering the product on time.",
    name: "Satyendra Singh",
    role: "VP, PIPRA Solutions",
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
