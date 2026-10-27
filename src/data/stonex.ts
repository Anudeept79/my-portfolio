import type { CaseStudy } from "./site";

/**
 * Factual source: the author's StoneX design files and screenshots
 * (C:\Anudeep\Mine-MA\stonex case study), the StoneX codebase's own docs
 * (roles, templates, plan canvas, reports) and git history, and the author's
 * confirmation (Oct 2026) of the migration story and status.
 *
 * Migration framing follows the git history: the author started the Flutter →
 * React Native move (6 Mar 2026) and built its foundation; the engineering team
 * carried it through iOS and release. Never "migrated it solo".
 *
 * Deliberately absent: real client and project names (the report crop leaves
 * out its header), people's names and emails, and the old demo videos, which
 * showed both.
 */
const dir = "/case-studies/stonex";

export const stonexCaseStudy: CaseStudy = {
  slug: "stonex-migration",
  title: "StoneX · Stone inspection on iPad",
  client: "StoneX — stone inspection, Dubai",
  domain: "Field Ops · Enterprise",
  year: "2025–26",
  role: "Product Design · Front-end",
  impact: "Inspectors pin defects on the floor plan, mark up photos and generate the report that gets stone replaced. In production.",
  teaser:
    "Inspectors on Dubai construction sites pin defects on the floor plan, mark up photos and generate the report a supplier acts on. I designed it end to end, then started its move to React Native.",
  accent: "blue",
  cover: `${dir}/cover.webp`,
  tools: ["Figma", "iPad / Field UX", "React Native", "Claude Code"],
  editorial: {
    headline: "Built around the report that gets stone replaced.",
    subheadline:
      "StoneX inspectors check the stone going into Dubai buildings. I designed their iPad app end to end, from paper sketches to the version in production: pin a defect on the floor plan, mark it on the photo, and generate the report a supplier acts on. Then I started the app's move from Flutter to React Native.",
    summary: [
      { label: "Role", value: "Sole product designer · flows, UI, prototype, handoff" },
      { label: "Team & time", value: "With PIPRA's engineering team · 2025, migration 2026" },
      { label: "Platform", value: "iPad and web" },
      { label: "Status", value: "In production" },
    ],
    caption: "The shipped app: inspection points pinned on the floor plan, and the report page they become. Test data.",
    coverAlt:
      "StoneX's Inspection Points screen with four numbered pins on an upper-floor plan, beside a report page showing a marble slab photo marked with red crosses and the inspector's comments.",
    navigation: [
      { id: "principle", label: "The job" },
      { id: "on-site", label: "On site" },
      { id: "decisions", label: "Decisions" },
      { id: "redesign", label: "Redesign" },
      { id: "migration", label: "Migration" },
      { id: "status", label: "Status" },
    ],
  },
  sections: [
    {
      kind: "glance",
      items: [
        {
          label: "The problem",
          text: "Every defect an inspector logs has to become a formal report before a supplier replaces anything, and that loop was slow and manual.",
        },
        {
          label: "What I did",
          text: "Designed the app from paper sketches to production, rebuilt it when the client changed direction, then started its move from Flutter to React Native with Claude Code.",
        },
        {
          label: "The result",
          text: "In production: inspectors pin each defect on the plan, mark it on the photo, and generate the branded report from the same inspection, on iPad and web.",
        },
      ],
    },
    {
      kind: "turning",
      id: "principle",
      eyebrow: "01 / The job",
      title: "The report is the product.",
      body: "StoneX inspects the stone going into Dubai buildings: marble, cladding, slabs. Every defect an inspector finds has to reach the supplier as a formal report, because that report is what gets faulty stone replaced, and getting it replaced is what StoneX is paid for. So the app was never just a way to record data. It had to produce the document that moves money and material.",
      shift: {
        from: "Can an inspector record a defect?",
        to: "Will the supplier act on this report?",
      },
    },
    {
      kind: "prose",
      id: "on-site",
      variant: "split",
      eyebrow: "02 / On site",
      title: "Used standing up, on an iPad, often in the sun.",
      body: [
        "Inspectors aren't at a desk. They're on a construction site holding a tablet, often in bright sun, often with one hand. That set the rules: an iPad-first layout, targets big enough to hit without precision, flows short enough to finish standing up, and photos captured inside the inspection rather than added afterwards.",
        "I'd never inspected stone or worked on a site, so I started from what happens before and after the screen: where the inspector stands, who reads the report, and what the report has to make happen.",
      ],
    },
    {
      kind: "prose",
      id: "paper-first",
      variant: "split",
      eyebrow: "03 / Paper first",
      title: "The flow was the hard part, so it started in pen.",
      body: "I sketched the inspection sequence on paper first: how many taps it takes to log a defect, and where the photo fits. Only once the sequence held up did it become wireframes, then iPad frames, with a color palette and style guide set early so later screens stayed consistent.",
    },
    {
      kind: "figure",
      src: `${dir}/sketches.webp`,
      wide: true,
      label: "Process",
      alt: "Five photographed notebook sketches of the inspection screens, above a row of grey iPad wireframes built from them.",
      caption: "Notebook sketches of the inspection flow, and the iPad wireframes they became (January 2025).",
    },
    {
      kind: "decisions",
      id: "decisions",
      eyebrow: "04 / Decisions",
      title: "Every screen judged by the report it produces.",
      items: [
        {
          decision: "Templates, not blank forms",
          evidence: "The same defect types come up on project after project, and an inspector on site shouldn't have to remember what to check.",
          logic: "Make templates a first-class object: build the checklist once and reuse it per project, so an inspection opens with its questions already there.",
          tradeoff: "Someone has to build a template before the first inspection can start.",
          result: "Every inspection starts from a template. Templates support nine field types and are reused across projects.",
          images: [
            {
              src: `${dir}/templates.webp`,
              label: "Shipped",
              alt: "New Inspection screen: name, project, location, due date and assignee fields on the left, and a Select a Template list on the right with one template ticked.",
              caption: "Starting an inspection: pick a template, and its questions come with it.",
            },
          ],
        },
        {
          decision: "Pin the defect on the floor plan",
          evidence: "A finding is only useful if the supplier can tell which slab, in which room, it's about.",
          logic: "Place inspection points on the project's own floor plan. Drop a pin or draw an area, and tapping it opens that point's questions and photos.",
          result: "Each finding is tied to a place on the plan, and the list beside it uses the same numbers as the pins.",
          images: [
            {
              src: `${dir}/plan.webp`,
              label: "Shipped",
              alt: "Inspection Points screen: a list of four points with Normal priority on the left, and the upper-floor plan on the right with yellow pins numbered 1 to 4.",
              caption: "Points pinned on the plan, numbered the same in the list. Test data.",
            },
          ],
        },
        {
          decision: "Mark the defect on the photo",
          evidence: "A note like “chip, lower left” is ambiguous by the time it reaches a supplier, and the report triggers a physical replacement.",
          logic: "Let the inspector mark the defect directly on the photograph, so the evidence and the claim are one image.",
          result: "The marks travel into the report, beside the inspector's comments for that slab.",
          images: [
            {
              src: `${dir}/report-page.webp`,
              label: "Shipped",
              alt: "Report page titled Slab 2, approved with comments: a marble slab photo with red crosses and numbers marking defects, and a comments box listing what to avoid.",
              caption: "A report page: the marked-up slab and the inspector's comments.",
            },
          ],
        },
        {
          decision: "Separate solo and team modes",
          evidence: "A lone inspector wants speed. A team needs roles, assignment and accountability.",
          logic: "Split the product into a single-user mode with no team controls, and a team mode with roles, so neither pays for the other's complexity.",
          tradeoff: "Two modes to design and keep consistent.",
          result: "Team mode has five roles, from Admin and Project Manager to Inspector and Document Controller, and single-user mode keeps everything else out of the way.",
        },
        {
          decision: "The report is the destination, not an export",
          evidence: "Any gap between what the inspector approves and what the supplier receives costs real money.",
          logic: "Treat the report as the product's endpoint: branded and page-formatted, with a preview that can be edited before it's sent.",
          result: "A manager picks the inspection points, generates a report they can see and edit as it will print, and exports a branded PDF.",
        },
      ],
    },
    {
      kind: "comparison",
      id: "redesign",
      eyebrow: "05 / The client changed direction",
      title: "The first version was rebuilt from the ground up.",
      body: "Partway through, the client asked for a different approach for the whole product, not a tweak. Version 1, a workspace with a project tree in the sidebar, was replaced by Version 2: a home that starts with the main tasks and their counts, and separate single-user and team modes. I've kept the replaced work here, because it's part of how the product got right.",
      uncropped: true,
      items: [
        {
          src: `${dir}/v1.webp`,
          label: "Version 1",
          alt: "Version 1 on iPad in portrait: a sidebar with search, drafts, projects, templates and reports, a workspace tree of inspections, and recently viewed project cards.",
          caption: "Version 1: projects and a workspace tree in the sidebar.",
        },
        {
          src: `${dir}/v2.webp`,
          label: "Version 2",
          alt: "Version 2 on iPad in landscape: Start New Inspection and Create New Template buttons above cards counting projects, templates and inspections.",
          caption: "Version 2: the main tasks first, with counts below.",
        },
      ],
    },
    {
      kind: "prose",
      id: "migration",
      variant: "split",
      eyebrow: "06 / One codebase",
      title: "Then I started moving it to React Native.",
      body: [
        "In 2026 my CEO asked me to bring the AI coding I'd been using on side projects into the team. StoneX was built in Flutter, and the goal was one React Native codebase for iPad and web.",
        "I started the migration with Claude Code in March 2026 and built its foundation: the design tokens and shared components, then login, the dashboard, projects, templates, users, inspections, the question form and the report screen. Because the designer was building the screens, they kept the design system they were drawn with. The engineering team took it from there through iOS and release, and the React Native version is the one in production now.",
      ],
      more: [
        {
          title: "The app in production",
          body: "A project manager's home: four starting actions and live counts.",
          images: [
            {
              src: `${dir}/home.webp`,
              label: "Shipped",
              alt: "StoneX home for a project manager: Create New Project, Create New Template, Start New Inspection and Create New User, above cards counting projects, templates, inspections, pending tasks and users.",
              caption: "Home for a project manager.",
            },
          ],
        },
      ],
    },
    {
      kind: "prose",
      id: "how-i-worked",
      variant: "split",
      eyebrow: "07 / How I worked",
      title: "Weekly reviews, from Figma to build.",
      body: "I was the only designer, working with PIPRA's engineering team and reporting to my manager. After handoff I stayed with the build: reviewing it every week, catching drift and reworking screens as feedback came in. The Figma file kept the record, page by page: wireframes, UI design, updated UI, prototype, and after feedback.",
    },
    {
      kind: "ownership",
      id: "collaboration",
      eyebrow: "08 / Collaboration",
      title: "I designed StoneX and started its migration. Engineering built and shipped it.",
      groups: [
        {
          name: "My contribution",
          items: [
            "Studying the inspection job and its report",
            "Task flows, sketches and wireframes",
            "UI for both versions, on one style guide",
            "Prototype and developer handoff",
            "Weekly build reviews",
            "React Native migration foundation, with Claude Code",
          ],
        },
        {
          name: "Engineering (PIPRA)",
          items: ["Flutter app and iDempiere backend", "Plan canvas, offline sync and PDF export", "Completing the migration through iOS and release"],
        },
        {
          name: "Client",
          items: ["Product direction", "Feedback on every round"],
        },
      ],
    },
    {
      kind: "status",
      id: "status",
      eyebrow: "09 / Status",
      title: "In production.",
      states: [
        { name: "StoneX app", status: "In production, on the React Native version", state: "production" },
        { name: "Flutter → React Native migration", status: "Shipped with the engineering team", state: "production" },
      ],
      qualification: "Status as of October 2026.",
    },
    {
      kind: "closing",
      eyebrow: "10 / Learning",
      statement:
        "A good screen can still be the wrong product. Version 1 worked, and it was replaced because the client's understanding of their own work moved. The version in production is better because the design moved with it.",
      reflection:
        "Put the flow in front of the client's inspectors earlier. Version 1 was built before the client's direction changed, and the whole UI was rebuilt; testing with the people who'd use it might have surfaced that shift sooner.",
    },
  ],
  overview:
    "I designed StoneX, an iPad and web app for stone inspectors on Dubai construction sites, from paper sketches to production, rebuilt it when the client changed direction, and started its migration from Flutter to React Native with Claude Code.",
  problem: [],
  process: [],
  solution: [],
  results: [],
  gallery: [],
};
