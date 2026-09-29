import type { CaseStudy } from "./site";

/**
 * Factual source: case-study-briefs/warepro-digital-twin.md.
 *
 * Deliberately absent (not supported by the brief): user research, usability
 * testing, adoption or business metrics, customer names, a live gesture/AI
 * feature, or any claim that the larger warehouse is fully live.
 */
const dir = "/case-studies/warepro-digital-twin";

export const wareproCaseStudy: CaseStudy = {
  slug: "warepro-digital-twin",
  title: "WarePro Digital Twin",
  client: "WarePro · PIPRA Solutions",
  domain: "Enterprise logistics · Spatial UX",
  year: "2025",
  role: "Product/UX Design · Spatial UX · Technical Prototyping",
  impact: "Making warehouse data spatially useful.",
  teaser: "A configurable spatial model for inventory, operational zones and warehouse structure.",
  accent: "blue",
  cover: `${dir}/delivery/overview.webp`,
  tools: ["React", "React Three Fiber", "Three.js", "TypeScript"],
  editorial: {
    headline: "Making warehouse data spatially useful.",
    subheadline:
      "I reframed an existing 3D warehouse from a visual upgrade into a configurable spatial model for inventory, operational zones and warehouse structure — then prototyped the experience in React, R3F and Three.js for engineering integration.",
    summary: [
      { label: "Role", value: "Product/UX Design · Spatial UX · Technical Prototyping" },
      { label: "Collaboration", value: "Product · Domain stakeholders · Frontend · Backend · Platform" },
      { label: "Status", value: "Smaller deployment in customer use · Larger warehouse in integration/validation" },
      { label: "Core shift", value: "Visual redesign → configurable spatial/data model" },
    ],
    caption: "Complex layout with a mezzanine. The larger warehouse is still in integration and validation.",
    navigation: [
      { id: "starting-point", label: "Context" },
      { id: "engineering-challenge", label: "Turning point" },
      { id: "spatial-model", label: "System" },
      { id: "product-decisions", label: "Decisions" },
      { id: "working-prototype", label: "Prototype" },
      { id: "deployment-status", label: "Status" },
    ],
  },
  sections: [
    {
      kind: "comparison",
      id: "starting-point",
      eyebrow: "01 / Starting point",
      title: "A functional twin. A visual-first assumption.",
      body: "WarePro already had a working 3D warehouse view. I started by making it look more real, before establishing what product value that would add.",
      items: [
        {
          src: `${dir}/existing/01-existing-product.png`,
          label: "Legacy",
          alt: "The existing Warehouse 3D view in the WarePro dashboard: flat blue racks with orange shelves over a pale floor, and a legend counting Empty, Partial and Occupied locations.",
          caption: "The existing twin, functional and with an occupancy legend.",
        },
        {
          src: `${dir}/iterations/02-visual-first-v1.jpg`,
          label: "Iteration",
          alt: "First visual-first iteration: a walled warehouse interior with realistic rack frames, labeled shelf positions, colored boxes, a Dispatch floor zone and a viewpoint panel.",
          caption: "My first direction: more realistic racks, spacing and environment.",
        },
      ],
    },
    {
      kind: "turning",
      id: "engineering-challenge",
      eyebrow: "02 / The engineering challenge",
      title: "Better-looking wasn’t the same as more useful.",
      body: "Senior engineering challenged the direction: the extra rendering effort didn’t create enough product value. The existing twin already worked, and customers hadn’t asked for a prettier one.",
      shift: {
        from: "How can I make the warehouse look better?",
        to: "What warehouse information becomes easier to understand when it is spatial?",
      },
    },
    {
      kind: "prose",
      id: "spatial-model",
      variant: "split",
      eyebrow: "03 / The product reframe",
      title: "From one modeled scene to a configurable system.",
      body: [
        "I studied WarePro’s product and data, warehouse structures, videos, scenarios and reference imagery, with input from the Product Manager and VP. This was domain learning, not direct user research.",
        "The redesign moved toward layout and configuration data that adapts to different warehouses and ties physical space to inventory quantity and capacity.",
      ],
      more: [
        {
          title: "Domain reference imagery",
          body: "Used to understand physical structure and layout. They are references, and aren’t presented as a customer site or plan.",
          images: [
            {
              src: `${dir}/delivery/warehouse-reference.webp`,
              label: "Reference",
              alt: "A photograph of a physical warehouse with a steel mezzanine platform above ground-level shelving.",
              caption: "Racks and a mezzanine in a physical warehouse.",
            },
            {
              src: `${dir}/delivery/layout-reference.webp`,
              label: "Reference",
              alt: "A blueprint-style isometric drawing of a warehouse with labeled loading docks, pallet racks and inventory storage zones.",
              caption: "How racks, docks and storage zones relate in a layout.",
            },
          ],
        },
      ],
    },
    {
      kind: "model",
      label: "Conceptual model",
      title: "How I framed warehouse information",
      stages: [
        { name: "Physical warehouse", note: "Levels, racks, docks, floor areas." },
        { name: "Operational structure", note: "Zones, rows, storage locations." },
        { name: "Data model", note: "Layout configuration, quantity and capacity." },
        { name: "Digital Twin", note: "A spatial view of that structure." },
      ],
      items: ["Warehouse", "Floor", "Zone", "Row", "Rack", "Shelf / Location", "SKU / Package", "Quantity / Capacity"],
      caption: "How I framed the information. Not every level is implemented as a drill-down interaction.",
    },
    {
      kind: "decisions",
      id: "product-decisions",
      eyebrow: "04 / Four product decisions",
      title: "Connecting warehouse information to space.",
      intro: "Captures are from the final experience. Results describe what they show, not validated outcomes.",
      items: [
        {
          decision: "Configurable warehouse layouts",
          evidence: "Warehouse structures differ; the complex layout adds a mezzanine and several zones.",
          logic: "Drive layouts from configuration data rather than modeling one warehouse by hand.",
          tradeoff: "Complex layouts raise information density and label overlap.",
          result: "The viewer offers Original, Large and Complex layouts; a smaller configuration and Complex are shown.",
          images: [
            {
              src: `${dir}/final/08-final-exterior.png`,
              alt: "Exterior viewpoint of a smaller warehouse configuration: a short run of labeled racks on a walled floor, with the viewpoint panel at lower left.",
              caption: "Smaller configuration.",
            },
            {
              src: `${dir}/delivery/overview.webp`,
              alt: "The complex layout from an overhead viewpoint: dense labeled rack positions in red, green and tan, a raised mezzanine at the top, and the Original, Large and Complex layout switch at top right.",
              caption: "Complex configuration.",
            },
          ],
        },
        {
          decision: "Navigate by operational destination",
          evidence: "Receiving, Dispatch, Returns and Default Zone are distinct areas of operation.",
          logic: "Offer named destinations and viewpoints so navigation doesn’t rely only on manual orbiting.",
          tradeoff: "Viewpoints orient but don’t locate an item; search → focus → location is future work.",
          result: "Named destinations sit beside Exterior, Overhead and directional views.",
          images: [
            {
              src: `${dir}/final/09-final-operational-zone.png`,
              alt: "The Receiving viewpoint active: dock doors, a short row of racks and named floor zones in one view.",
              caption: "Receiving viewpoint: racks, docks and named zones together.",
            },
          ],
        },
        {
          decision: "Make levels independently visible",
          evidence: "Ground-floor racks and mezzanine storage sit on different levels of one structure.",
          logic: "Provide All, Ground and Mezzanine visibility states.",
          tradeoff: "Isolating a floor drops context; All keeps the whole-building view.",
          result: "Ground and Mezzanine each show that level on its own.",
          images: [
            {
              src: `${dir}/delivery/ground-floor.webp`,
              alt: "Floor toggle set to Ground: only the ground-level racks are shown, with no mezzanine platform.",
              caption: "Ground selected.",
            },
            {
              src: `${dir}/delivery/mezzanine.webp`,
              alt: "Floor toggle set to Mezzanine: only the raised platform with its own racks and access ramp is shown.",
              caption: "Mezzanine selected.",
            },
          ],
        },
        {
          decision: "Connect capacity to its location",
          evidence: "The existing twin already showed occupancy; quantity and capacity belong to identifiable storage locations.",
          logic: "Show quantity and capacity on the labeled location where stock sits.",
          tradeoff: "Color alone isn’t enough: it needs accessible cues, and labels need clarity at scale.",
          result: "The captures show occupancy on labeled storage positions within racks.",
          images: [
            {
              src: `${dir}/delivery/overview.webp`,
              alt: "Detail of the complex layout: rack positions with labels such as F-RG-3-1-1, each carrying red, green or tan boxes.",
              caption: "Detail of the complex layout: labeled positions within racks.",
              zoom: { scale: 2.2, origin: "36% 79%" },
            },
          ],
        },
      ],
    },
    {
      kind: "video",
      id: "working-prototype",
      eyebrow: "05 / Working prototype",
      title: "A working experience engineering could build from.",
      body: "Using AI-assisted coding, I built the spatial experience in React, React Three Fiber, Three.js and TypeScript, giving engineering an implementation starting point beyond static concepts.",
      src: `${dir}/delivery/interaction.mp4`,
      poster: `${dir}/delivery/overview.webp`,
      controlled: true,
      badge: "Prototype",
      caption: "Recording of the working implementation navigating the complex layout.",
      more: [
        {
          title: "Integration patterns and rendering profile",
          body: [
            "Integration: the prototype supports embedding within the WarePro dashboard, window.postMessage communication with the host application, and deep links that highlight specific locations or bins.",
            "Rendering: the 3D view uses instanced rendering. Profiling showed approximately 14–22 WebGL draw calls and approximately 58–60 FPS on tested hardware/configurations. These are not guarantees for other devices, warehouse sizes or production environments, and not product outcomes.",
          ],
        },
      ],
    },
    {
      kind: "ownership",
      id: "collaboration",
      eyebrow: "06 / Collaboration",
      title: "I prototyped the experience. Engineering owned the production platform.",
      groups: [
        {
          name: "My contribution",
          items: [
            "Product/UX direction",
            "Spatial interaction design",
            "Visualization",
            "Occupancy / zone representation",
            "React / R3F / Three.js prototype",
            "AI-assisted coding",
          ],
        },
        {
          name: "Product / domain",
          items: ["Warehouse/domain knowledge", "Requirements", "Operational context"],
        },
        {
          name: "Engineering",
          items: [
            "Production WMS data",
            "Backend/database logic",
            "APIs",
            "Authentication/RBAC",
            "Infrastructure & deployment",
            "Production integration",
          ],
        },
      ],
    },
    {
      kind: "note",
      label: "Removed",
      title: "An experiment that didn’t survive",
      body: "I also built an experimental Gemini/webcam gesture-navigation interaction. It was rejected and removed, and isn’t part of the current experience. Technical possibility alone wasn’t reason enough to keep it.",
    },
    {
      kind: "status",
      id: "deployment-status",
      eyebrow: "07 / Status",
      title: "Two scales. Two deployment states.",
      states: [
        { name: "Smaller warehouse", status: "Production / customer use", state: "production" },
        { name: "Larger warehouse", status: "Integration + validation in progress", state: "in-progress" },
      ],
      qualification:
        "The substantially larger implementation is being integrated and validated against real warehouse data with the customer and team. It isn’t fully live or fully validated.",
    },
    {
      kind: "closing",
      eyebrow: "08 / Learning",
      statement:
        "I started by making the twin look better. Engineering challenged whether that added value. I ended up asking what warehouse information is easier to understand in space, and prototyping the answer deeply enough for engineering to integrate.",
      open: {
        label: "Still open · not implemented",
        text: "Information density at very large scale; search → focus → location; reducing label overlap; accessibility beyond color; stronger overview → zone → rack → item disclosure.",
      },
    },
  ],
  overview:
    "A configurable spatial representation of warehouse structures and inventory information, developed through product reframing, technical prototyping and engineering collaboration.",
  problem: [],
  process: [],
  solution: [],
  results: [],
  gallery: [],
};
