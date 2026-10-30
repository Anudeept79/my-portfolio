import type { CaseStudy } from "./site";

/**
 * Factual source: case-study-briefs/pi-erp-2026.md (from the PI-ERP review
 * artifacts, Oct 2026, and the author's confirmation of role and status).
 *
 * PIPRA One is the product's name since October 2026 (formerly PI-ERP); earlier
 * captures show the old name. The loading, form and brand work comes from the
 * author's October 2026 review pages. Those PRs are merged into the sprint
 * branch, so the status block says merged, not live. The alert and AWS captures
 * are not used: they show a tenant name and account details.
 *
 * Deliberately absent: customer or tenant names (cropped out or masked in every
 * capture), people's names, user research, adoption or business metrics, and
 * any claim that the author built iDempiere core or the module logic.
 */
const dir = "/case-studies/pi-erp-2026";

export const piErp2026CaseStudy: CaseStudy = {
  slug: "pi-erp-platform-ux",
  title: "PIPRA One · Role-based UX at scale",
  client: "PIPRA One · PIPRA Solutions",
  domain: "Enterprise SaaS · UX at scale",
  year: "2026",
  role: "Product Design · UX Engineering",
  impact: "Every role lands on its own work, and every screen says how urgent it is and what to do next, across 774 screens, PiGo and Kuyil.",
  teaser: "Making a multi-product ERP role-based, readable, keyboard-accessible and on-brand for every tenant.",
  accent: "blue",
  cover: `${dir}/cover.webp`,
  tools: ["iDempiere", "Atlassian Design System", "React", "axe-core"],
  related: [
    { href: "/work/pi-erp-design-system", label: "The 2025 visual restyle, when it was PI-ERP" },
    { href: "/work/pigo", label: "PiGo mobile platform" },
    { href: "/work/kuyil-ai-assistant", label: "Kuyil AI assistant, the full redesign" },
  ],
  editorial: {
    headline: "An ERP that tells each person what needs them.",
    subheadline:
      "PIPRA One, formerly PI-ERP, has 774 screens, seven maintenance roles, warehouse roles and several tenants. I designed and implemented the UX layer that lands each role on its own work, shows how urgent it is and what to do next, and holds every screen to one design system: on the web, in PiGo and in the Kuyil assistant.",
    summary: [
      { label: "Role", value: "Product design · UX engineering (theme, configuration, renderer)" },
      { label: "Team & time", value: "Only designer, with engineering · about a month (Oct 2026)" },
      { label: "Scope", value: "774 web screens · PiGo · Kuyil" },
      { label: "Status", value: "Live · web, PiGo and Kuyil" },
    ],
    caption: "A technician's dashboard on the web, and the same design system on PiGo. Tenant names masked.",
    coverAlt:
      "A PIPRA One technician dashboard showing the technician's own maintenance widgets, beside a PiGo phone home with an attention banner and KPIs; tenant names masked.",
    navigation: [
      { id: "starting-point", label: "Context" },
      { id: "principle", label: "Principle" },
      { id: "urgency", label: "Urgency" },
      { id: "quality", label: "Quality" },
      { id: "loading", label: "Loading" },
      { id: "design-system", label: "Design system" },
      { id: "kuyil", label: "Kuyil" },
      { id: "status", label: "Status" },
    ],
  },
  sections: [
    {
      kind: "glance",
      items: [
        { label: "The problem", text: "Every role landed on the same crowded Home, urgency was invisible, and the web app failed keyboard and tablet use." },
        { label: "What I did", text: "Designed and implemented the UX layer: role landing, one severity language, a 774-screen accessibility and responsive sweep, and one brand setting across products." },
        { label: "The result", text: "Seven roles land on their own work, automated accessibility violations fell from 286 to 15, and tenant branding went from seven setup steps to upload and save." },
      ],
    },
    {
      kind: "comparison",
      id: "starting-point",
      eyebrow: "01 / Starting point",
      title: "The first screen showed everything except the person's work.",
      body: "Each maintenance role landed on about 30 widgets from every module (warehouse, edge devices, marketplace, chat), most of them empty for that tenant. A planner's own work started about 1,250px down the page, and some roles couldn't log in at all. Now each role lands on its own work, set up through configuration alone, with no change to the ERP core.",
      uncropped: true,
      items: [
        {
          src: `${dir}/role-before.webp`,
          label: "Before",
          alt: "Planner Home before: the first screen is filled with large empty My Work cards; none of the planner's maintenance work is visible.",
          caption: "Before: a planner's first screen, with none of their own work.",
        },
        {
          src: `${dir}/role-after.webp`,
          label: "After",
          alt: "Planner Home after: empty cards shrunk to one line, then upcoming preventive maintenance with due dates and overdue maintenance with Preventive, Inspection and Emergency lozenges.",
          caption: "After: the planner's own work and its urgency come first.",
        },
      ],
    },
    {
      kind: "turning",
      id: "principle",
      eyebrow: "02 / The principle",
      title: "Every screen answers: what's affected, how bad, what next.",
      body: "The tickets asked for severity, blocked stock and the next decision to be obvious. I turned that into one checklist every screen was held to: clear meaning, severity at a glance, a next action, urgent work first, calm empty states, one design system, and safe for every tenant's brand.",
      shift: {
        from: "Is the information somewhere on the screen?",
        to: "Can this person tell what needs them, in a few seconds?",
      },
    },
    {
      kind: "figure",
      src: `${dir}/excursion-header.webp`,
      wide: true,
      alt: "Warehouse excursion header: HIGH_TEMP with Critical and Held in quarantine lozenges, an amber Breach in progress banner, Blocked Qty 47 and Blocked Items 3 in red, and a stepper from Open to Decided.",
      caption:
        "The principle on one screen: how bad (Critical), what's stuck (47 units, 3 items) and what happens next (the decision opens once the breach clears).",
    },
    {
      kind: "decisions",
      id: "urgency",
      eyebrow: "03 / The right work, at the right urgency",
      title: "Show urgency, and only where a decision is made.",
      intro: "Verified role by role on a demo tenant, on the web and on PiGo.",
      items: [
        {
          decision: "Land each role on its own work",
          evidence: "Seven maintenance roles existed but couldn't log in to a tenant, and every role saw the same Home.",
          logic: "Map each role to the widgets for its work, and hide other modules for those roles only. Warehouse roles follow WarePro's own app checkboxes, so no new roles were needed.",
          tradeoff: "The left menu still lists every module; a role-specific menu is a follow-up.",
          result: "Seven maintenance roles, the warehouse roles and Admin verified, with eight new warehouse widgets from receiving to dispatch. Configuration only, reusable per tenant.",
        },
        {
          decision: "Urgency on the first screen",
          evidence:
            "Counts were bare, statuses were codes like IP and MW, dates were missing, and a five-row limit could cut an Emergency job off its card.",
          logic:
            "One severity language (Emergency solid red, Critical red, waiting or overdue amber), plus due and raised dates, status names, Emergency first, and empty widgets shrunk to one line.",
          tradeoff: "At most one lozenge column per list, so some states stay plain text.",
          result: "All seven roles reviewed on 14 screens, web and PiGo: 49 improvements, with no feature, label or button removed.",
          images: [
            {
              src: `${dir}/urgency-after.webp`,
              label: "After",
              alt: "Supervisor dashboard: Jobs Awaiting Approval with amber days-waiting counts from 20 to 22, and Escalated Alerts with red Alert and amber Approval lozenges and raised dates.",
              caption: "Supervisor: how long each job has waited, and which escalations are alerts.",
            },
          ],
        },
        {
          decision: "Color only where a decision is made",
          evidence: "The first version colored the Severity, Status and Hold Status cells of a list. Across many rows it read as noise.",
          logic:
            "Keep lists plain: only Severity is a lozenge. Color lives on the record header and the board cards, and each color has one meaning (Danger, Warning, Info, Success), written into the UI standard for other teams.",
          tradeoff: "The list is quieter than the first version, so lower-severity states stand out less.",
          result: "Lozenge and banner text at 5.2:1 to 7.1:1 contrast (the gate is 4.5:1), from design tokens only.",
          stack: true,
          images: [
            {
              src: `${dir}/excursion-list-rejected.webp`,
              label: "Rejected",
              alt: "Rejected iteration: an excursion list with colored Severity, Status and Hold Status cells, with red review marks drawn over it.",
              caption: "Rejected: three colored columns (the red marks are review notes).",
            },
            {
              src: `${dir}/excursion-list-final.webp`,
              label: "Final",
              alt: "Final excursion list: only the Severity column carries lozenges (Critical, Emergency, Warning); the other columns are plain text.",
              caption: "Final: Severity is the only colored column.",
            },
          ],
        },
      ],
    },
    {
      kind: "stats",
      id: "quality",
      eyebrow: "04 / Quality across every screen",
      title: "Measured on all 774 screens, not a sample.",
      intro:
        "Every screen reachable from the menu was opened and checked for accessibility and at seven browser widths, and each of the 22 web roles was checked with its own login.",
      items: [
        { from: "286", value: "15", label: "Automated WCAG violations on eight key screens" },
        { from: "0", value: "165 / 165", label: "Tab stops with a visible focus ring" },
        { from: "188", value: "27", label: "Text below 4.5:1 contrast, across 643 screens" },
        { value: "0", label: "Keyboard traps across 774 screens" },
        { value: "97 · 42 · 0%", label: "Screens clean at 1280+, 1024 and 768px, before the responsive fixes" },
        { value: "0.00–0.02%", label: "Desktop pixel change from the responsive fixes" },
      ],
      note: "Checked with axe-core and keyboard walks against WCAG 2.1 AA. The issues left are core iDempiere markup and other teams' plugins.",
    },
    {
      kind: "decisions",
      items: [
        {
          decision: "Keyboard first, mouse unchanged",
          evidence:
            "The left menu tree couldn't take focus, so no window could be opened without a mouse, and none of 152 non-text tab stops showed a focus ring.",
          logic: "Turn the menu into a keyboard tree with one tab stop, and show the design system's focus ring on keyboard focus only.",
          tradeoff: "Desktop toolbar icons under 24px were reported, not resized, because the desktop layout stays as it is.",
          result: "Arrow keys and Enter open any window from the menu, Escape closes popups and returns focus, and toolbar buttons respond to Enter and Space.",
          images: [
            {
              src: `${dir}/menu-before.webp`,
              label: "Before",
              phone: true,
              alt: "Menu before: after pressing Down from the menu search, focus stays in the search box.",
              caption: "Before: Down does nothing.",
            },
            {
              src: `${dir}/menu-after.webp`,
              label: "After",
              phone: true,
              alt: "Menu after: the Partner Relations row shows a blue focus ring after pressing Down.",
              caption: "After: arrow keys move a visible focus.",
            },
          ],
        },
        {
          decision: "Fix tablet and phone without touching desktop",
          evidence: "97% of screens were clean at 1280px and wider, 42% at 1024px, and none at 768px. Six shared layout problems caused most of it.",
          logic: "Fix the six shared problems once, following the design system's web-app behavior, and apply the fixes only below 1024px.",
          tradeoff: "Problems that only appear on desktop are logged, not changed.",
          result: "With the fixes, desktop and laptop screens stay pixel-identical (0.00–0.02% difference) while tablet and phone layouts reflow.",
          images: [
            {
              src: `${dir}/responsive-before.webp`,
              label: "Before",
              phone: true,
              alt: "Technician dashboard at phone width before: the desktop layout squeezed into a narrow column with wrapped, truncated table cells.",
              caption: "Before, at 390px.",
            },
            {
              src: `${dir}/responsive-after.webp`,
              label: "Fixed",
              phone: true,
              alt: "Technician dashboard at phone width with the fix: a readable Technician Dashboard heading and a jobs table with priority lozenges.",
              caption: "With the fix, at 390px.",
            },
          ],
        },
      ],
    },
    {
      kind: "stats",
      id: "loading",
      eyebrow: "05 / Waiting",
      title: "A loading state only where someone is waiting.",
      intro:
        "The old loader blanketed the whole app on any click that took over 0.35 s, then stayed until background requests went quiet. I measured it against the new one on the same machine and data, and checked how web apps with a sidebar and many open views handle this (Emergent, Fresha, Lyssna and Hex; Qatalog's full-screen blur was what to avoid).",
      items: [
        { from: "4.4 s", value: "0 ms", label: "Spinner left on screen after the window had already opened, worst case" },
        { from: "0.35 s", value: "47–148 ms", label: "First feedback after clicking a menu item" },
        { value: "None", label: "Loaders on tab switch, close, save and buttons inside popups" },
      ],
      note: "Measured on a local build with the same data. Timings vary with server load.",
    },
    {
      kind: "decisions",
      items: [
        {
          decision: "Show the wait in the window that's loading",
          evidence: "Sales Order was on screen at 3.2 s, but the blanket lifted at 7.5 s because widgets and polling kept resetting its timer. Until then every click was swallowed.",
          logic: "Only opening a window gets a loader. The new tab appears at once with the window's name, its spinner sits in that window's place, and it goes the moment the real tab arrives, not when the network goes quiet.",
          tradeoff: "Big windows don't build any faster: the browser still freezes for 2–4 s, which is the ERP core. The loader just stopped adding to it.",
          result: "Menu, header and other tabs stay usable while a window opens, so planners can keep working in another one.",
          wide: true,
          images: [
            {
              src: `${dir}/loading-open-before.webp`,
              label: "Before",
              alt: "Before: a dark blanket over the whole app, including the sidebar and header, with a Processing box in the middle.",
              caption: "Before: the whole app blanketed, clicks blocked.",
            },
            {
              src: `${dir}/loading-open-after.webp`,
              label: "After",
              alt: "After: a Business Partner tab with a small spinner, the content area plain with a small spinner and the window's name, and the sidebar and header unchanged.",
              caption: "After: only the new window's place shows it's loading.",
            },
          ],
        },
        {
          decision: "Let the pressed button show the wait",
          evidence: "Pressing Continue on the role screen turned the whole screen dark, and the gap before the desktop could be a blank page.",
          logic: "Login and Continue show a spinner inside the pressed button and leave the page alone. A wrong password makes the button usable again 0.4 s after the answer.",
          tradeoff: "Slow actions inside a window, like Save or Delete, still show the old Processing card. That's the next ticket.",
          result: "From sign-in to the dashboard's first load, one small spinner and no dark screen.",
          wide: true,
          images: [
            {
              src: `${dir}/loading-continue-before.webp`,
              label: "Before",
              alt: "Before: a dark full screen with a Processing box after pressing Continue.",
              caption: "Before: the screen goes dark.",
            },
            {
              src: `${dir}/loading-continue-after.webp`,
              label: "After",
              alt: "After: the role selection page unchanged, with a spinner inside the Continue button.",
              caption: "After: the button shows the wait.",
            },
          ],
        },
        {
          decision: "Say nothing when nothing is worth saying",
          evidence: "Testers reported a spinner starting behind popups: pressing OK in a Find dialog blanketed the app for 3.3 s.",
          logic: "The loader never reacts to buttons. A request that's really slow, over 0.5 s, shows one small box, and only one indicator shows at a time. I considered skeleton screens and deferred them: a window can be a form, a list, a board or a dialog, so a generic skeleton would often be wrong.",
          tradeoff: "Tab switch and close show nothing, as requested, even though they can freeze for 1–2 s on heavy windows.",
          result: "Search results, tab switches and record moves just appear.",
          wide: true,
          images: [
            {
              src: `${dir}/loading-popup-before.webp`,
              label: "Before",
              alt: "Before: a Business Partner record under a dark blanket with a Processing box after pressing OK in the Find dialog.",
              caption: "Before: a blanket on a search button.",
            },
            {
              src: `${dir}/loading-popup-after.webp`,
              label: "After",
              alt: "After: the same Business Partner record with no blanket and no spinner.",
              caption: "After: the result just appears.",
            },
          ],
        },
      ],
    },
    {
      kind: "decisions",
      id: "design-system",
      eyebrow: "06 / One design system, every product",
      title: "One brand, one color language, everywhere.",
      intro: "The web app, PiGo and Kuyil now read the same design tokens and the same tenant brand.",
      items: [
        {
          decision: "Keep the priority color, and make it readable",
          evidence:
            "The restyle replaced the calendar popup's amber button with the standard blue. In review, the CEO asked to keep the priority color, and to show status names instead of codes like DR.",
          logic:
            "I recommended a standard button with the priority shown in a band and a lozenge. The CEO chose the priority-colored button, so I kept it and picked the text color per priority until every pair passed contrast.",
          tradeoff: "A red button can read as “delete”, which the standard button avoided.",
          result: "All eight priority colors pass 4.5:1: amber went from 3.2:1 to 9.2:1, and status reads “Drafted” instead of “DR”.",
          images: [
            {
              src: `${dir}/popup-before.webp`,
              label: "Before",
              alt: "Calendar popup before: an amber Open Record button with white text, and status shown as DR.",
              caption: "Before: white on amber (3.2:1), status DR.",
            },
            {
              src: `${dir}/popup-after.webp`,
              label: "After",
              alt: "Calendar popup after: an amber Open Record button with dark text, and status shown as Drafted.",
              caption: "After: dark on amber (9.2:1), status Drafted.",
            },
          ],
        },
        {
          decision: "One brand setting for every product",
          evidence:
            "Tenant colors disappeared after Change Role, PiGo kept a one-time copy of the primary color, Kuyil used a fixed blue, and a logo needed four hand-made configuration records.",
          logic:
            "One Appearance & Branding record drives the web app, the role screen, PiGo and Kuyil, and colors that would fail contrast are darkened automatically (text 4.5:1, borders 3:1).",
          tradeoff: "Before sign-in the tenant is unknown, so the first login page keeps the PIPRA One brand.",
          result: "Upload a logo and save, and it's live everywhere. 36 checks passed and none failed, across four tenants.",
        },
        {
          decision: "One product name on every screen",
          evidence: "The product is now PIPRA One, but the web app still said PiERP and iDempiere in the header, sign-in page, browser tab and About box.",
          logic: "Set the PIPRA One logo and title as the System default, not a hard-coded image, with the bird alone as the tab icon because a full logo is too wide at 16 px.",
          tradeoff: "A tenant's own logo and title still win, so not every customer sees the PIPRA One name.",
          result: "Sign-in, header, browser tab and About all say PIPRA One, and white-labelling still works.",
          images: [
            {
              src: `${dir}/brand-signin.webp`,
              label: "After",
              alt: "Sign-in form with the PIPRA One logo above Hi, Welcome, with User ID, Password and Language fields and a Login button.",
              caption: "The sign-in page under the new name.",
            },
          ],
        },
        {
          decision: "Fix the alignment rule, not one screen",
          evidence: "On two-column forms, a checkbox or button placed in the label column sits off the grid and its text wraps.",
          logic: "Start them in the field column, as the form standard says, and cap buttons at the field width. Only positions changed; labels and rules stayed the same.",
          tradeoff: "This lines forms up but doesn't restructure them, so long forms are still long.",
          result: "95 fields moved across 31 windows.",
          wide: true,
          images: [
            {
              src: `${dir}/form-before.webp`,
              label: "Before",
              alt: "Before: a Sales Order form where the Taken in the field checkbox sits in the label column and its text wraps onto two lines.",
              caption: "Before: the checkbox wraps in the label column.",
            },
            {
              src: `${dir}/form-after.webp`,
              label: "After",
              alt: "After: the same form with Taken in the field on one line, lined up with the fields above.",
              caption: "After: it lines up with the fields above.",
            },
          ],
        },
        {
          decision: "One alert for one error",
          evidence: "The ERP core reports one refused save or delete up to three times in the same answer, each cut to a different length.",
          logic: "Treat copies of a message as one, keep the most complete, and hide the rest before the browser draws them. It applies to every window.",
          result: "One alert per refusal, checked on a real refused Delete, including on a browser slowed six times.",
        },
      ],
    },
    {
      kind: "comparison",
      id: "kuyil",
      eyebrow: "07 / Kuyil, the AI assistant",
      title: "Answers you can check.",
      body: "Kuyil answers questions about PIPRA One data. Its answers gave no source, and a failure only said “I'm sorry, I encountered an error”. The redesign moves Kuyil onto the same tokens and icons as PiGo and the web app. Every answer names its source and time, records open in PIPRA One, and data sits in a card with table and chart views, copy and CSV. A failed answer says what happened, with Try again and Edit question. The full redesign has its own case study.",
      uncropped: true,
      items: [
        {
          src: `${dir}/kuyil-before.webp`,
          label: "Before",
          alt: "Kuyil before: a chat answer with a plain table, raw dates and status codes, a Clear button with a trash icon and an always-green status dot.",
          caption: "Before. Drawn from the running build.",
        },
        {
          src: `${dir}/kuyil-after.webp`,
          label: "After",
          alt: "Kuyil after: the answer with a Results card (Table and Chart toggle, copy, download), record links that open in the ERP, Copy, Read aloud and Translate actions, and a follow-up chip.",
          caption: "After. Drawn from the running build.",
        },
      ],
    },
    {
      kind: "prose",
      id: "how-i-worked",
      variant: "split",
      eyebrow: "08 / How I worked",
      title: "A review page for every ticket.",
      body: [
        "I was the only designer, working with engineering over about a month of sprints. Each ticket ended in a review page with live before-and-after captures, the checklist, findings with an owner for each, and the decisions still needed. Problems outside my scope went to their owners instead of being patched around.",
        "Every change was configuration or a shared component, never a one-off: migrations ran twice against a real database before deploy, and checks confirmed no hard-coded record IDs and no raw color values.",
      ],
    },
    {
      kind: "ownership",
      id: "collaboration",
      eyebrow: "09 / Collaboration",
      title: "I designed and implemented the UX layer. Module teams owned the logic underneath.",
      groups: [
        {
          name: "My contribution",
          items: [
            "UX direction and the screen checklist",
            "Design tokens and the color rules",
            "Theme, screen configuration and renderer changes",
            "Accessibility and responsive audits of 774 screens",
            "Loading states and sign-in behaviour",
            "PiGo and Kuyil front-end updates",
            "AI-assisted coding and automated checks",
          ],
        },
        {
          name: "Product / leadership",
          items: ["CEO and product review", "Ticket goals and acceptance criteria", "Rollout approval per tenant"],
        },
        {
          name: "Engineering & module owners",
          items: ["iDempiere core", "Maintenance, warehouse and edge-device logic and data", "Kuyil's chat server", "Deployment and infrastructure"],
        },
      ],
    },
    {
      kind: "status",
      id: "status",
      eyebrow: "10 / Status",
      title: "Where each part stands.",
      states: [
        { name: "Role landing & dashboards", status: "Live", state: "production" },
        { name: "Tenant branding", status: "Live", state: "production" },
        { name: "Board views & calendar", status: "Live", state: "production" },
        { name: "Accessibility & responsive", status: "Live", state: "production" },
        { name: "Kuyil redesign", status: "Live", state: "production" },
        { name: "PIPRA One name, loading states, form alignment, one alert per error", status: "Merged into the release branch, October 2026", state: "in-progress" },
      ],
      qualification: "Status as of late October 2026.",
    },
    {
      kind: "closing",
      eyebrow: "11 / Learning",
      statement:
        "A product with 774 screens doesn't improve one screen at a time. It improves when every screen keeps the same few promises: show me my work, tell me how bad it is, give me the next step, and work for every keyboard, screen size and brand.",
      reflection:
        "Write the shared rules first. The severity colors and the screen checklist came after the first role dashboards were set up, so those dashboards had to be reviewed a second time.",
      open: {
        label: "Still open · not implemented",
        text: "The pressed button or toolbar icon showing the wait for slow actions inside a window (Save, Delete, New); a view of which orders an asset breakdown delays; role-specific menus; the first login page in the tenant's brand; Kuyil feedback, regenerate and inline citations, which need server work.",
      },
    },
  ],
  overview:
    "In 2026 I designed and implemented the UX layer that makes PIPRA One (formerly PI-ERP) role-based: each role lands on its own work, every screen shows urgency and the next step, and the web app, PiGo and Kuyil share one design system and one tenant brand.",
  problem: [],
  process: [],
  solution: [],
  results: [],
  gallery: [],
};
