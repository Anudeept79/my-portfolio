import type { CaseStudy } from "./site";

/**
 * Factual source: the Kuyil redesign walkthrough (PA-483, Oct 2026: 14 screens
 * and states, 12 micro-flows, the design language and the pending server work),
 * case-study-briefs/pi-erp-2026.md, and the author's confirmation that the
 * redesign is live. Every capture is the walkthrough's own render of the
 * running build, on the demo tenant.
 *
 * Deliberately absent: customer or tenant names, people's names, user research,
 * usage or business metrics, and any claim that the author built the chat
 * server, the AI or its data queries.
 */
const dir = "/case-studies/kuyil";

export const kuyilCaseStudy: CaseStudy = {
  slug: "kuyil-ai-assistant",
  title: "Kuyil · AI assistant for PI-ERP",
  client: "Kuyil · PIPRA Solutions",
  domain: "AI assistant · Enterprise SaaS",
  year: "2026",
  role: "Product Design · Front-end build",
  impact: "Every Kuyil answer shows where its data came from, and every failure says what happened and what to do next.",
  teaser: "Redesigning an ERP's AI assistant so people can check its answers, act on them, and still trust it when something goes wrong.",
  accent: "blue",
  cover: `${dir}/cover.webp`,
  tools: ["React", "TypeScript", "Atlassian Design System", "MCP"],
  related: [
    { href: "/work/pi-erp-platform-ux", label: "PI-ERP: role-based UX at scale" },
    { href: "/work/pigo", label: "PiGo mobile platform" },
  ],
  editorial: {
    headline: "An AI assistant you can check.",
    subheadline:
      "Kuyil answers questions about live PI-ERP data: overdue work orders, stock, receipts. I redesigned it and built the new chat front end, so every answer shows where its data came from, every failure says what happened, and the assistant shares one design system with the web app and PiGo.",
    summary: [
      { label: "Role", value: "Product design · front-end build (React, TypeScript)" },
      { label: "Team & time", value: "Only designer, with the chat-server engineers · Oct 2026" },
      { label: "Scope", value: "14 screens and states · 12 micro-flows" },
      { label: "Status", value: "Live in PI-ERP" },
    ],
    caption: "An answer with its data card and record links, and the same chat in PI-ERP's 420 × 600 window. Demo data.",
    coverAlt:
      "Kuyil answering “Which work orders are overdue?” with a Results card (Table and Chart, copy, download), Open in PiERP record chips and a follow-up chip, beside the same answer in the narrow chat window as one card per record.",
    navigation: [
      { id: "starting-point", label: "Context" },
      { id: "principle", label: "Principle" },
      { id: "trust", label: "Trust" },
      { id: "states", label: "States" },
      { id: "writing", label: "Writing" },
      { id: "system", label: "System" },
      { id: "status", label: "Status" },
    ],
  },
  sections: [
    {
      kind: "glance",
      items: [
        {
          label: "The problem",
          text: "Answers gave no source, a failure only said “I'm sorry, I encountered an error”, a “Clear” button with a trash icon deleted nothing, and a green dot stayed on even when Kuyil couldn't connect.",
        },
        {
          label: "What I did",
          text: "Redesigned all 14 screens and states and built the new chat front end: a data card, a source on every answer, honest failure, waiting and offline states, and one design system with PiGo and the web app.",
        },
        {
          label: "The result",
          text: "Live in PI-ERP. Every data answer names its source, time and row count, records open in PI-ERP in one click, and no state is left to a bare spinner or a generic apology.",
        },
      ],
    },
    {
      kind: "comparison",
      id: "starting-point",
      eyebrow: "01 / Starting point",
      title: "Answers you had to take on faith.",
      body: "Kuyil turns a question like “Which work orders are overdue?” into a query on live PI-ERP data. The old answer was a plain table with raw dates, five rows under “Showing 28 records”, and nothing to say where the data came from. Now the data sits in its own card with Table and Chart views, Copy and CSV, long tables fold behind Show more, and the records in the answer open in PI-ERP.",
      uncropped: true,
      items: [
        {
          src: `${dir}/answer-before.webp`,
          label: "Before",
          alt: "Kuyil before: an answer in a bordered bubble with a plain table of work orders, ISO dates, status codes like DR and MW, “Showing 28 records”, a Clear button with a trash icon and a green status dot.",
          caption: "Before. Same demo data in both, drawn from the running build.",
        },
        {
          src: `${dir}/answer-after.webp`,
          label: "After",
          alt: "Kuyil after: the answer as readable text, a Results card with a count of 28, Table and Chart, copy and download, Open in PiERP record chips, Copy, Read aloud and Translate, and a follow-up chip above the message box.",
          caption: "After. The data card, record links and actions under every answer.",
        },
      ],
    },
    {
      kind: "turning",
      id: "principle",
      eyebrow: "02 / The principle",
      title: "If people act on an answer, they need to check it first.",
      body: "People act on Kuyil's answers: which jobs to chase, which products to reorder. And an AI answer can be wrong. So the goal wasn't a friendlier chat. It was an answer you can verify and act on, and a screen that's honest about what it knows in every state, including the bad ones.",
      shift: {
        from: "Did Kuyil answer?",
        to: "Can I check this answer, and act on it?",
      },
    },
    {
      kind: "decisions",
      id: "trust",
      eyebrow: "03 / Trust",
      title: "Show the source, admit the limits.",
      intro: "Three decisions that make an answer something you can check.",
      items: [
        {
          decision: "A source on every answer",
          evidence: "Answers came with no source, so there was no way to tell where a number came from or how fresh it was.",
          logic:
            "A source line under every data answer says where the data came from, when, and how many rows. Records in the answer become Open in PiERP chips, and the message box carries “Kuyil can make mistakes. Check the info.”",
          tradeoff: "Inline [1][2] citations need chat-server work, so the source is per answer, not per sentence.",
          result: "Every data answer can be traced to its source and time, and any record in it is one click from PI-ERP.",
          images: [
            {
              src: `${dir}/source-after.webp`,
              label: "After",
              alt: "The Results card in Table view, sorted by Status, and in Chart view as horizontal bars per asset, each with the line “From the knowledge graph · live data as of 04:57 PM · 28 rows”.",
              caption: "Table or chart, with the same source line under both.",
            },
          ],
        },
        {
          decision: "Say what failed, and keep the question",
          evidence: "A failure only said “I'm sorry, I encountered an error while processing your request. Please check the connection and try again.”, whatever the cause.",
          logic:
            "Show the server's real reason, keep the question, and offer the next step: Try again resends it, Edit question puts it back in the box. Copy, Read aloud and Translate are hidden on a failure, because there's nothing to act on.",
          result:
            "A failure now reads, for example: “Kuyil couldn't answer that. Kuyil is not configured — ask your administrator to set it up in the LLM Configuration window. Your question is kept.”",
          images: [
            {
              src: `${dir}/failed-before.webp`,
              label: "Before",
              alt: "Failed answer before: a generic apology asking the user to check the connection.",
              caption: "Before: the same apology for every failure.",
            },
            {
              src: `${dir}/failed-after.webp`,
              label: "After",
              alt: "Failed answer after: “Kuyil couldn't answer that” with the reason, Try again and Edit question.",
              caption: "After: the reason, and two ways forward.",
            },
          ],
        },
        {
          decision: "Be honest about saved answers",
          evidence: "Past chats are saved as text only, so a reopened answer can show numbers that are no longer true. ERP data moves.",
          logic: "Label a reopened answer “Saved answer. The data may have changed since.” and offer Ask again for live data, which runs the question fresh in the same chat.",
          tradeoff: "Keeping tables in reopened chats needs server work, so saved answers show text only.",
          result: "An old answer is never mistaken for live data, and fresh data is one click away.",
          images: [
            {
              src: `${dir}/reopen-after.webp`,
              label: "After",
              alt: "A reopened chat: the answer text with a note “Saved answer. The data may have changed since.” and an Ask again for live data button.",
              caption: "A reopened answer says it's saved, and offers live data.",
            },
          ],
        },
      ],
    },
    {
      kind: "decisions",
      id: "states",
      eyebrow: "04 / Waiting and failing",
      title: "Design the states the old screen left to chance.",
      intro: "Waiting for an answer and losing the connection happen every day. Each state now says what's going on and what you can do.",
      items: [
        {
          decision: "Show the work while Kuyil thinks",
          evidence: "While answering, Kuyil showed a spinner and “Retrieving data...”. Past about three seconds, a bare spinner feels broken.",
          logic:
            "Three named steps with ticks (understanding the question, getting data from PI-ERP, writing the answer) and a seconds counter. Send becomes Stop, in the same place, so one button has one meaning at a time.",
          tradeoff: "Stop only stops the waiting: the server still finishes its query, because there's no cancel API yet.",
          result: "You can see progress and stop a slow answer, and the chat notes “You stopped this answer” with Ask again.",
          images: [
            {
              src: `${dir}/thinking-before.webp`,
              label: "Before",
              alt: "Waiting before: a small “Retrieving data...” spinner under the question.",
              caption: "Before: a spinner, however long it takes.",
            },
            {
              src: `${dir}/thinking-after.webp`,
              label: "After",
              alt: "Waiting after: “Kuyil working · 4s” with three steps, the first ticked, and a Stop button where Send was.",
              caption: "After: named steps, seconds, and Stop.",
            },
          ],
        },
        {
          decision: "Show the connection only when it's wrong",
          evidence: "A green dot stayed on in the header, even while the screen said “Unable to connect”.",
          logic:
            "Show nothing when the connection is fine. When it drops, a banner explains with Retry now, earlier answers stay readable, and the disabled message box says why: “Waiting for connection…”.",
          result: "The only connection state on screen is one that needs you, and a disabled box always explains itself.",
          images: [
            {
              src: `${dir}/offline-before.webp`,
              label: "Before",
              alt: "Offline before: the header's green dot still on while the empty screen says Unable to connect, with a Retry button.",
              caption: "Before: “connected” and “unable to connect” at once.",
            },
            {
              src: `${dir}/offline-after.webp`,
              label: "After",
              alt: "Offline after: an amber banner “Kuyil is not connected” with Retry now, the earlier answer still readable, and the message box reading “Waiting for connection…”.",
              caption: "After: one honest banner; answers stay readable.",
            },
          ],
        },
      ],
    },
    {
      kind: "comparison",
      eyebrow: "05 / Inside PI-ERP",
      title: "The same assistant in a 420 × 600 window.",
      body: "The floating Kuyil button in PI-ERP opens a narrow window. The old layout squeezed the conversation into a sliver beside a full sidebar. Now the sidebar starts as a 38px icon rail, tables become one card per record instead of scrolling sideways, and every action is still there.",
      items: [
        {
          src: `${dir}/bubble-before.webp`,
          label: "Before",
          phone: true,
          alt: "Narrow window before: a full sidebar takes half the width, the header wraps word by word, and the table is cut off at the right edge.",
          caption: "Before: the sidebar takes half the window.",
        },
        {
          src: `${dir}/bubble-after.webp`,
          label: "After",
          phone: true,
          alt: "Narrow window after: an icon rail, then the answer with one card per work order, Show more, and the full message box.",
          caption: "After: one card per record.",
        },
      ],
    },
    {
      kind: "rewrites",
      id: "writing",
      eyebrow: "06 / Writing",
      title: "Every line says what will happen.",
      intro: "In an AI product, the words set expectations. Each line now says what a control does, or why something can't happen yet.",
      items: [
        { where: "Header action", before: "“Clear” with a trash icon (it never deleted anything)", after: "“New chat” at the top of the sidebar" },
        { where: "New chat title", before: "None", after: "“Untitled chat” until the first question names it" },
        { where: "Connection", before: "Green dot, always on", after: "Nothing when fine; “Connecting to Kuyil…” in the message box; an offline banner with Retry now" },
        { where: "Failed answer", before: "“I'm sorry, I encountered an error…”", after: "“Kuyil couldn't answer that”, the reason, Try again and Edit question" },
        { where: "Long table", before: "“Showing 28 records”", after: "Show more / Show less" },
        {
          where: "Below the message box",
          before: "“Press Enter to send • Try asking about delayed orders…”",
          after: "“Enter to send · Shift + Enter for a new line” and “Kuyil can make mistakes. Check the info.”",
        },
        { where: "Sidebar footer", before: "None", after: "“Info comes from your PiERP data.”" },
        { where: "Your question, on hover", before: "No actions", after: "Copy · Ask again" },
        { where: "Search, nothing found", before: "No search", after: "“No results”" },
      ],
    },
    {
      kind: "decisions",
      id: "system",
      eyebrow: "07 / Built like the rest of the product",
      title: "One design system, and ready before the server.",
      items: [
        {
          decision: "The same tokens and icons as PiGo and the web app",
          evidence: "Kuyil had its own look: raw color values, a generic icon library, and a fixed blue that ignored the tenant's brand.",
          logic:
            "Move Kuyil onto the Atlassian Design System tokens, type ramp and icon names that PiGo and the PI-ERP web UI use. Icons are copied path for path from PiGo, and the few PiGo doesn't have are drawn in the same 24px, 2px-stroke style.",
          result:
            "No raw colors or generic icons left in the chat, and Kuyil takes the tenant's brand from the same Appearance & Branding setting as the web app and PiGo.",
          images: [
            {
              src: `${dir}/start-before.webp`,
              label: "Before",
              alt: "Start screen before: a logo, “How can I help?” and one suggested question in a blue pill, with a green status dot and a Clear button.",
              caption: "Before: one suggestion and its own visual style.",
            },
            {
              src: `${dir}/start-after.webp`,
              label: "After",
              alt: "Start screen after: “How can I help today?” with six suggested questions grouped by work orders, inventory, orders and receiving, an Untitled chat in the sidebar, and the shared design tokens.",
              caption: "After: six starting points by area, on the shared tokens.",
            },
          ],
        },
        {
          decision: "Build ahead of the server, and switch on by itself",
          evidence: "Chats couldn't be renamed or deleted, and the chat server had no tools for either yet.",
          logic:
            "Build Rename and Delete in full but hidden, and show them the moment the server lists the two tools. Delete always confirms and names the chat, with Cancel focused so Enter never deletes by accident.",
          result: "No front-end release is needed when the server is ready, and the server contract is written down for its owners.",
          images: [
            {
              src: `${dir}/delete-confirm.webp`,
              label: "Built · hidden",
              alt: "Delete chat confirmation naming the chat “How many work orders are open?”, saying it can't be undone, with Cancel focused and a red Delete button.",
              caption: "The delete confirmation names the chat, and Cancel has focus.",
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
      title: "One review page, every state.",
      body: [
        "I was the only designer, working with the engineers who own Kuyil's chat server. The review page showed all 14 screens and states before and after, with the same demo data in both panes so the only difference was the design, drawn to scale from the running build. Twelve micro-flows showed what the person does at each step and what the screen says back.",
        "I built the front end in React and TypeScript with AI-assisted coding: formatting for dates, CSV and record links, a shared icon set in place of the generic library, and components for the answer, the data card, the sidebar and the thinking steps. Anything that needed the server went to its owners as a written contract instead of a workaround.",
      ],
    },
    {
      kind: "ownership",
      id: "collaboration",
      eyebrow: "09 / Collaboration",
      title: "I designed Kuyil and built its chat front end. Engineering owns the server and the AI underneath.",
      groups: [
        {
          name: "My contribution",
          items: [
            "UX and UI for 14 screens and states",
            "Interface writing",
            "Chat front end in React and TypeScript",
            "Answer layout, data card, source line and actions",
            "Design tokens and the shared icon set",
          ],
        },
        {
          name: "Engineering",
          items: ["Kuyil's chat server and its tools", "Data queries and the knowledge graph", "LLM configuration", "Deployment and infrastructure"],
        },
      ],
    },
    {
      kind: "status",
      id: "status",
      eyebrow: "10 / Status",
      title: "Where it stands.",
      states: [
        { name: "Kuyil redesign", status: "Live in PI-ERP", state: "production" },
        { name: "Rename and Delete", status: "Built; appears when the chat server offers it", state: "in-progress" },
      ],
      qualification: "Status as of late October 2026.",
    },
    {
      kind: "closing",
      eyebrow: "11 / Learning",
      statement:
        "Trust in an AI assistant isn't one feature. It's every state telling the truth: where the answer came from, how old it is, what went wrong, and what you can do next.",
      reflection:
        "Agree the server contract first. Stop can't cancel a query, and Rename and Delete wait behind a switch, because the front end was designed before the server had those APIs. Settling the contract on day one would have let them ship together.",
      open: {
        label: "Next · needs chat-server work",
        text: "Answer feedback, regenerate, inline [1][2] citations, keeping tables when a past chat is reopened, and a real cancel for Stop.",
      },
    },
  ],
  overview:
    "In 2026 I redesigned Kuyil, PI-ERP's AI assistant, and built its new chat front end: every answer names its source and time, failures say what happened and what to do next, and Kuyil shares one design system with the PI-ERP web app and PiGo.",
  problem: [],
  process: [],
  solution: [],
  results: [],
  gallery: [],
};
