import type { CaseStudy } from "./site";

/**
 * Factual source: case-study-briefs/pigo.md (from the PiGo review artifacts,
 * Oct 2026, and the author's confirmation of role and status), and the
 * author's account and photos of the Oct 2026 visit to a customer's warehouse.
 *
 * Deliberately absent: customer or tenant names (masked in every capture; in
 * the visit photos the customer's brand and its staff's faces are blurred),
 * people's names, interview counts, adoption or business metrics, and any
 * claim that the author built PiGo's backend.
 */
const dir = "/case-studies/pigo";

export const pigoCaseStudy: CaseStudy = {
  slug: "pigo",
  title: "PiGo Mobile Platform",
  client: "PiGo · PIPRA Solutions",
  domain: "Logistics & maintenance · Mobile",
  year: "2026",
  role: "Product Design · Front-end Engineering",
  impact: "One role-based mobile app for warehouse and maintenance teams, where every scan and action answers back.",
  teaser: "WarePro's operator app moved into PiGo: one configurable mobile app for warehouse and maintenance roles.",
  accent: "blue",
  cover: `${dir}/cover.webp`,
  tools: ["React", "TypeScript", "Atlassian Design System"],
  related: [
    { href: "/work/warepro-mobile", label: "The earlier WarePro Mobile redesign" },
    { href: "/work/pi-erp-platform-ux", label: "PI-ERP in 2026: role-based UX at scale" },
  ],
  editorial: {
    headline: "Field work that answers back.",
    subheadline:
      "I designed and built the front end of PiGo, PIPRA's mobile app for warehouse and maintenance teams. It moved the WarePro operator app into one role-based platform, where every scan and action says what happened and what to do next.",
    summary: [
      { label: "Role", value: "Product design · React / TypeScript front end" },
      { label: "Team & time", value: "Only designer, with engineering · about a month (Oct 2026)" },
      { label: "Apps", value: "WarePro · Maintenance · Quality Inspector" },
      { label: "Status", value: "In customer use" },
    ],
    caption: "Real PiGo screens: the WarePro home and a scan on sample data, and a work order's actions on live data.",
    coverAlt:
      "Three PiGo phone screens: the WarePro supervisor home, a scan confirmed with “Added · 1 of 2”, and a work order's More actions sheet.",
    navigation: [
      { id: "starting-point", label: "Context" },
      { id: "field", label: "Field research" },
      { id: "the-bet", label: "The bet" },
      { id: "principle", label: "Principle" },
      { id: "scan-flow", label: "Scanning" },
      { id: "product-decisions", label: "Decisions" },
      { id: "platform", label: "Platform" },
      { id: "status", label: "Status" },
    ],
  },
  sections: [
    {
      kind: "glance",
      items: [
        { label: "The problem", text: "Warehouse work ran through a launcher of near-identical apps, maintenance roles needed field apps of their own, and failed actions didn't say what went wrong." },
        { label: "What I did", text: "Studied the work on a customer's warehouse floor, proposed PiGo, one configurable app for every warehouse and maintenance role, designed it, and built its React front end." },
        { label: "The result", text: "In customer use: WarePro, Maintenance and Quality Inspector in one app, where every scan and action says what happened and what to do next." },
      ],
    },
    {
      kind: "comparison",
      id: "starting-point",
      eyebrow: "01 / Starting point",
      title: "Separate apps for every job.",
      body: "WarePro's handheld app opened on a launcher of near-identical mini-apps. PiGo replaces it with one mobile app for warehouse and maintenance teams: sign in once, choose a role, and see only the apps that role uses.",
      items: [
        {
          src: `${dir}/legacy-launcher.webp`,
          label: "Legacy",
          phone: true,
          alt: "The previous WarePro handheld launcher: a blue header with a greeting, and a grid of app tiles that all use the same box icon.",
          caption: "Before: one tile per app, every tile the same icon. Name masked.",
        },
        {
          src: `${dir}/wp-home-supervisor.webp`,
          label: "Final",
          phone: true,
          alt: "PiGo's WarePro home for a supervisor: Receiving, Quality check, Put away and Pick list tiles, with More actions below.",
          caption: "PiGo, supervisor: the warehouse apps this role uses.",
        },
        {
          src: `${dir}/wp-home-labour.webp`,
          label: "Final",
          phone: true,
          alt: "PiGo's WarePro home for a labour role: only the Put away and Pick list tiles.",
          caption: "PiGo, labour: only Put away and Pick list.",
        },
      ],
    },
    {
      kind: "field",
      id: "field",
      eyebrow: "02 / On the floor",
      title: "Every step, with the people who do it.",
      intro:
        "In October 2026 I visited a customer's warehouse with the PIPRA team and the CEO. I interviewed the people who run it and worked through their daily tasks with them, from receiving to put-away, picking and dispatch: how stock is arranged on the racks, how an order is picked, and how it's checked and packed. The aim was an app the floor team could pick up quickly.",
      photos: [
        {
          src: `${dir}/field/floor-team.webp`,
          alt: "The author with PIPRA colleagues and the CEO in the customer's warehouse, talking among stacked cartons.",
          caption: "With the PIPRA team and the CEO on the warehouse floor.",
        },
        {
          src: `${dir}/field/racks.webp`,
          alt: "The author in a narrow aisle between tall steel racks of boxed products, looking along a shelf; product branding blurred.",
          caption: "Studying how stock is arranged, rack by rack.",
        },
        {
          src: `${dir}/field/order-sheet.webp`,
          alt: "A warehouse worker holding a printed order sheet talks with the author; the worker's face and company logo are blurred.",
          caption: "A picker walks me through the paper order sheet.",
        },
        {
          src: `${dir}/field/paper-picking.webp`,
          alt: "Over-the-shoulder view: a worker picks items into an open carton while someone checks a printed order and handwritten notes on a clipboard; documents blurred.",
          caption: "Picking into a carton while the order is checked off on paper.",
        },
        {
          src: `${dir}/field/packing.webp`,
          alt: "A worker opens a large empty carton to show the author how it's packed; the faces of the worker and a bystander are blurred.",
          caption: "At packing: how a carton is made up for dispatch.",
        },
        {
          src: `${dir}/field/floor-interview.webp`,
          alt: "The author and a PIPRA colleague talk with a staff member holding a notebook and papers, whose face is blurred.",
          caption: "Asking the floor team about their daily tasks.",
        },
      ],
      note: "I'm in the black T-shirt. The customer's brand and its staff's faces are blurred.",
      findings: [
        {
          saw: "Each step belongs to different people: some receive, some put away, some pick and pack. Each person needs only their own tasks, and where to do them.",
          did: "Each role lands on only its own apps. A labour role sees just Put away and Pick list, so there's less to learn on day one.",
        },
        {
          saw: "Stock is found by its rack and shelf, so a pick is only right if it comes from the right place.",
          did: "The locator is scanned as well as the product, and a wrong locator is refused with the right one named.",
        },
        {
          saw: "Orders were checked off on paper, so knowing which product left which rack, and spotting stock that went missing, depended on handwritten notes.",
          did: "Every item is scanned against the order and its rack as it's picked (“1 of 2”). Extras are refused and nothing counts twice, so each pick is on record.",
        },
        {
          saw: "Hands are full with a carton, a sheet or a scanner, and there's little time to read a screen.",
          did: "Every scan answers with a sound, a color and one sentence that says what to do next.",
        },
      ],
    },
    {
      kind: "decisions",
      id: "the-bet",
      eyebrow: "03 / The bet",
      title: "One app, configured for each role.",
      items: [
        {
          decision: "One configurable app, not an app per job",
          evidence:
            "WarePro's launcher had a separate app per step (five for assembly alone, all with the same icon), and seven maintenance roles each needed a field app of their own.",
          logic:
            "I proposed one app where a role's settings decide its apps and tiles, and lists, actions, icons and colors are described in configuration. Warehouse roles reuse the app checkboxes they already had.",
          tradeoff:
            "Configuration becomes part of the design, so a wrong value is a UX bug: a KPI that counted the wrong status and two tiles sharing an icon both came from configuration. I turned rules like “one icon per action” into automated tests.",
          result:
            "One app runs WarePro, Maintenance and Quality Inspector, with a home for each of seven maintenance roles, on phone, tablet and desktop.",
        },
      ],
    },
    {
      kind: "model",
      label: "Simplified",
      title: "How a role becomes a home screen",
      stages: [
        { name: "Sign in", note: "Tenant, role and organization, chosen once." },
        { name: "Role", note: "The role's settings decide its apps and tiles." },
        { name: "Configuration", note: "Lists, actions, icons and colors are described on the server." },
        { name: "PiGo", note: "Draws them on phone, tablet and desktop, in the tenant's brand." },
      ],
      items: ["Tenant", "Role", "App", "Home", "List", "Record", "Action"],
      caption:
        "A simplified view of how a screen reaches the user. The server configuration, APIs and business rules belong to engineering.",
    },
    {
      kind: "turning",
      id: "principle",
      eyebrow: "04 / The principle",
      title: "Catch the mistake at the shelf, not at save.",
      body: "On the floor, a picker has a scanner in one hand and stock in the other. If a wrong label is only refused when they press Save, they walk back to the shelf. So in PiGo every scan answers right away, with a sound, a color and a sentence that says what to do next.",
      shift: {
        from: "Does the flow reach the end?",
        to: "Does the person know what just happened, without looking twice?",
      },
    },
    {
      kind: "sequence",
      id: "scan-flow",
      eyebrow: "05 / Picking, scan by scan",
      title: "Every scan answers back.",
      intro:
        "From PiGo's order-to-dispatch walkthrough on sample data. Refusals say why and what to do, and nothing is counted twice or dropped silently.",
      items: [
        {
          src: `${dir}/scan-01-wrong.webp`,
          phone: true,
          alt: "Scan screen with a red message: this label isn't on your pick list, or it's already picked. Check the product and scan again.",
          caption: "Wrong label: a double low buzz and a red message. Nothing is counted.",
        },
        {
          src: `${dir}/scan-02-good.webp`,
          phone: true,
          alt: "Green message “Added Hydroxychloroquine sulfate · 1 of 2”; that product's row is outlined, with its progress bar half full.",
          caption: "Good label: a short beep, “1 of 2”, and the list scrolls to that product.",
        },
        {
          src: `${dir}/scan-03-too-many.webp`,
          phone: true,
          alt: "Red message: all 2 Hydroxychloroquine sulfate are already scanned. Scan a different product.",
          caption: "One too many: refused at the shelf, not at save.",
        },
        {
          src: `${dir}/scan-04-removed.webp`,
          phone: true,
          alt: "Scan list after a mis-scan was removed: Acyclovir back to 0 of 1 and the total quantity back to 2.",
          caption: "A mis-scan comes off with one tap: Acyclovir is back to 0 of 1.",
        },
        {
          src: `${dir}/scan-05-leave.webp`,
          phone: true,
          alt: "Dialog: Leave without saving? 2 scanned labels aren't saved yet. Leaving drops them. Cancel or Leave.",
          caption: "Back asks first, so scans are never lost silently.",
        },
        {
          src: `${dir}/scan-06-locator.webp`,
          phone: true,
          alt: "Scan locator step with a red message: A-L-2-6-1 isn't a Dispatch locator. Scan the Dispatch locator.",
          caption: "Wrong locator: the message names the right one.",
        },
      ],
    },
    {
      kind: "decisions",
      id: "product-decisions",
      eyebrow: "06 / Four decisions from review rounds",
      title: "Make the next step obvious.",
      intro:
        "Before screens come from the first end-to-end run on live data; after screens show the same app after the fixes. Tenant names are masked.",
      items: [
        {
          decision: "One clear next step",
          evidence: "On a work order, five actions were all marked primary. Five blue buttons wrapped and pushed “…” off the screen.",
          logic: "Give each state one main action, and put the rest one tap away in a More actions sheet, with the actions available now listed first.",
          tradeoff: "Less common actions are one tap further away.",
          result: "“Sign off my work” is the single main button. Send back and Safety hold sit apart at the bottom of the sheet.",
          stack: true,
          images: [
            {
              src: `${dir}/wo-actions-before.webp`,
              label: "Before",
              alt: "Work order action bar before: Pause and four wrapping blue buttons (Sign off my work, Approve work, Safety approve, Close work order), with the more button squeezed to the edge.",
              caption: "Before: five primary buttons.",
            },
            {
              src: `${dir}/wo-actions-after.webp`,
              label: "After",
              alt: "Work order action bar after: one blue Sign off my work button and a More button.",
              caption: "After: one main action, the rest in “…”.",
            },
          ],
        },
        {
          decision: "One icon, one meaning",
          evidence:
            "In review, the CEO pointed out repeated icons: Approve work and Safety approve were both a ticked circle, and Send back and Safety hold were both a crossed circle. A follow-up check found more.",
          logic:
            "Give every action that can appear together its own icon, and color by seriousness: Send back is amber because the work can be redone, Safety hold is red because it stops the work.",
          tradeoff:
            "Icons are stored in each tenant's configuration, so the update had to leave alone any icon an admin had already changed.",
          result:
            "A test now fails if two work order actions shown together share an icon. The audit covered 39 actions, 69 home cards and 56 navigation items, and all 128 WarePro home combinations.",
          images: [
            {
              src: `${dir}/icons-before.webp`,
              label: "Before",
              phone: true,
              alt: "More actions sheet before: repeated ticked-circle, crossed-circle and box icons, with Send back and Safety hold both red.",
              caption: "Before.",
            },
            {
              src: `${dir}/icons-after.webp`,
              label: "After",
              phone: true,
              alt: "More actions sheet after: a different icon for each action, Send back in amber and Safety hold in red.",
              caption: "After.",
            },
          ],
        },
        {
          decision: "No dead ends on a field device",
          evidence: "Home showed Pick and Cycle count tiles that opened a “Coming soon” page.",
          logic: "Show only tiles that have a working screen behind them, with the same rule in every app.",
          tradeoff: "Features still in progress stay invisible until they are built.",
          result: "Home shows four working quick actions, and WarePro's Stock check and Inventory move follow the same rule.",
          images: [
            {
              src: `${dir}/home-before.webp`,
              label: "Before",
              phone: true,
              alt: "Maintenance home before: quick actions including Pick and Cycle count; tenant and user names masked.",
              caption: "Before: two tiles led to “Coming soon”.",
            },
            {
              src: `${dir}/home-after.webp`,
              label: "After",
              phone: true,
              alt: "Maintenance home after: four quick actions, Scan barcode, Receive, Inspect and Create work order; tenant and user names masked.",
              caption: "After: four tiles, all working.",
            },
          ],
        },
        {
          decision: "Data a person can read",
          evidence: "Dates read “2026-10-11 14:17:57.337575”, and filters were eight bare date boxes under capital-letter headings.",
          logic: "Show dates in the phone's own format, and give each date filter presets: Any time, Today, This week, This month, plus Overdue for end dates.",
          tradeoff: "A custom range now takes one extra tap, because the From and To boxes appear only when asked for.",
          result: "Dates read “22 Sept 2026, 2:17 pm”. Filters are 44px chips, and an active filter shows as a named chip, such as “Planned start: This week”.",
          images: [
            {
              src: `${dir}/filters-before.webp`,
              label: "Before",
              phone: true,
              alt: "Filter sheet before: eight empty date boxes under four capitalized headings.",
              caption: "Before.",
            },
            {
              src: `${dir}/filters-after.webp`,
              label: "After",
              phone: true,
              alt: "Filter sheet after: Any time, Today, This week, This month and Custom range chips for each date, plus Overdue for planned end.",
              caption: "After.",
            },
          ],
        },
      ],
    },
    {
      kind: "prose",
      id: "platform",
      variant: "split",
      eyebrow: "07 / Every device, every brand",
      title: "Phone first, not phone only.",
      body: [
        "PiGo is designed at phone size first. On tablets and desktops, side navigation replaces the bottom bar and records use the extra width.",
        "Each tenant's brand reaches PiGo from the same settings as the web app, and brand colors that would fail contrast are darkened automatically.",
        "An accessibility pass found no automated violations on ten PiGo screens. The phone header buttons grew from 20px to 44px touch targets, and the selected filter chip went from 4.4:1 to 5.6:1 contrast.",
      ],
      more: [
        {
          title: "Desktop layout",
          body: "The same app in a desktop browser: navigation, task list and work order side by side. Tenant name masked.",
          images: [
            {
              src: `${dir}/desktop-work-order.webp`,
              label: "Final",
              alt: "PiGo on desktop: navy side navigation, a filtered task list and the work order detail with warning banners and a Sign off my work button; tenant name masked.",
              caption: "Desktop: side navigation, list and record side by side.",
            },
          ],
        },
      ],
    },
    {
      kind: "prose",
      id: "how-i-worked",
      variant: "split",
      eyebrow: "08 / How I worked",
      title: "Evidence first, every round.",
      body: [
        "I was the only designer, working with engineering over about a month, starting with the warehouse visit. Each round ended in a review page: every screen captured from the running app, before and after, so the CEO and engineers could comment next to the exact screen. One field-test review covered 87 screens across three apps.",
        "Rules that matter in the field became automated tests, such as one icon per action and the colors of risky actions, so a later change can't quietly undo them. I used AI-assisted coding throughout and checked every change in the running app before review.",
      ],
    },
    {
      kind: "ownership",
      id: "collaboration",
      eyebrow: "09 / Collaboration",
      title: "I designed and built the front end. Engineering owned the platform behind it.",
      groups: [
        {
          name: "My contribution",
          items: [
            "Field research at a customer's warehouse",
            "Product & interaction design",
            "Visual design on Atlassian Design System tokens",
            "React / TypeScript front end",
            "UI rules as automated tests",
            "Review rounds with before/after evidence",
            "AI-assisted coding",
          ],
        },
        {
          name: "Product / leadership",
          items: ["Warehouse & maintenance workflows", "Requirements & priorities", "CEO and product review"],
        },
        {
          name: "Engineering",
          items: ["iDempiere backend & REST APIs", "Warehouse & maintenance business rules", "Tenant & seed data", "Deployment & infrastructure"],
        },
      ],
    },
    {
      kind: "status",
      id: "status",
      eyebrow: "10 / Status",
      title: "Where PiGo is today.",
      states: [
        { name: "PiGo", status: "In customer use", state: "production" },
        { name: "Packing step and pick assignment", status: "Planned, not built yet", state: "in-progress" },
      ],
      qualification:
        "Some fixes depend on server-side changes owned by other teams, such as names for status codes that are missing from the server's list.",
    },
    {
      kind: "closing",
      eyebrow: "11 / Learning",
      statement:
        "On a warehouse floor, an app is judged in the second after a scan. Most of this work wasn't adding screens. It was making each one say what happened and what to do next.",
      reflection:
        "Run the first end-to-end test on live data sooner. Sample data hid what the live run surfaced: raw codes and IDs instead of names, and actions that failed on real records.",
      open: {
        label: "Still open · not implemented",
        text: "A packing step and pick assignment in WarePro; names instead of raw IDs on a few records; a Quality Inspector list filtered to the inspections that are due.",
      },
    },
  ],
  overview:
    "PiGo is PIPRA's role-based mobile app for warehouse and maintenance teams. I designed and built its front end, moving the WarePro operator app into one platform where every scan and action answers back.",
  problem: [],
  process: [],
  solution: [],
  results: [],
  gallery: [],
};
