import type { CaseStudy } from "./site";

/**
 * Factual source: the author's account and research notes (as written in the
 * earlier version of this study), checked against the product's own code in
 * C:\Anudeep\Mine-MA\AI Resume App (system prompt, fresher form, loading steps,
 * error and success screens, ₹49 / ₹199 pricing, 7-day local save) and the
 * live site on 2026-10-27.
 *
 * Every screen is a capture of the real build with a fictional candidate
 * ("Meera Iyer"); the AI call was answered locally, so nothing was generated
 * on the author's account. Crops leave out the landing page's counter and the
 * loading screen's quotes, which aren't real usage data.
 *
 * Deliberately absent: usage, conversion or revenue numbers (there are no
 * analytics), fixes the code doesn't show, and how the AI call is wired.
 */
const dir = "/case-studies/myresumeai";

export const myResumeAiCaseStudy: CaseStudy = {
  slug: "myresumeai",
  title: "MyResumeAI · AI resume builder",
  client: "MyResumeAI — personal product",
  domain: "AI Product · Founder",
  year: "2026",
  role: "Founder · Product Design · Build",
  impact: "One input gives you an ATS-safe resume, a cover letter and a LinkedIn About. Researched, designed and built solo in about a week; live with paid downloads.",
  teaser:
    "My own AI product: one input gives you an ATS-safe resume, cover letter and LinkedIn About, written inside rules I researched. Designed and built solo in about a week.",
  accent: "blue",
  cover: `${dir}/cover.webp`,
  tools: ["Claude API", "React + Vite", "Razorpay", "Antigravity"],
  editorial: {
    headline: "The first reader of a resume isn't a person.",
    subheadline:
      "MyResumeAI is my own AI product. Before a recruiter sees a resume, an applicant tracking system has to read it, and most nicely designed resumes fail that step. I researched what gets through, then designed and built a tool that writes the resume, cover letter and LinkedIn About inside those rules.",
    summary: [
      { label: "Role", value: "Founder · research, product design, AI prompt, build" },
      { label: "Team & time", value: "Solo · about a week (March 2026)" },
      { label: "Platform", value: "Web, mobile first" },
      { label: "Status", value: "Live at myresumeai.org, paid downloads" },
    ],
    caption: "The results screen with its score and checklist, and the payment drawer that opens over the finished resume. Fictional candidate.",
    coverAlt:
      "MyResumeAI's results screen: an ATS score of 74 with a checklist and a resume preview for a fictional frontend developer, beside a payment drawer offering all three documents for ₹49.",
    navigation: [
      { id: "starting-point", label: "Context" },
      { id: "principle", label: "Insight" },
      { id: "research", label: "Research" },
      { id: "decisions", label: "Decisions" },
      { id: "audit", label: "Audit" },
      { id: "status", label: "Status" },
    ],
  },
  sections: [
    {
      kind: "glance",
      items: [
        {
          label: "The problem",
          text: "Job seekers spend hours on resumes that look good and get filtered out, because applicant tracking software can't read multi-column, graphic-heavy layouts, and nobody tells them.",
        },
        {
          label: "What I did",
          text: "Researched what gets through, then designed and built a tool that writes all three documents inside those rules, shows its working as a checklist, and asks for money only after you've seen the result.",
        },
        {
          label: "The result",
          text: "Live at myresumeai.org with ₹49 downloads. Built solo in about a week, then audited screen by screen after launch.",
        },
      ],
    },
    {
      kind: "prose",
      id: "starting-point",
      variant: "split",
      eyebrow: "01 / Where it started",
      title: "I kept writing the same resume by hand.",
      body: [
        "Friends, cousins and roommates would send me their resume before an application that mattered, and I'd do the same manual work every time: rewrite the summary, restructure the sections, and guess at what would survive on the other side. My roommate was one of them. He got shortlisted on the resume I wrote and was placed.",
        "The people around me had already done the work: two hours in Canva, careful colors, a layout they were proud of. Then thirty applications and no callbacks, and they assumed they weren't good enough.",
      ],
    },
    {
      kind: "turning",
      id: "principle",
      eyebrow: "02 / The insight",
      title: "It's a parsing problem, not a writing problem.",
      body: "Before a recruiter opens a resume, an applicant tracking system parses it. Multi-column layouts, graphics and icons, the things that make a resume look designed, are exactly what break that parse. My friends weren't being rejected; their resumes weren't being read. So the product had to fix the structure first and the writing second.",
      shift: {
        from: "How do I make this resume look good?",
        to: "Can software read this before a person does?",
      },
    },
    {
      kind: "stats",
      id: "research",
      eyebrow: "03 / Research",
      title: "Three sources, one answer.",
      intro: "I didn't want the product built on instinct, so I checked the structure question from several directions before designing anything.",
      items: [
        { value: "~1,000", label: "resumes from people hired at top tech companies, read for structure, not content" },
        { value: "5", label: "resume builders used end to end, with their output run through ATS checkers" },
        { value: "15+", label: "informal conversations with freshers about what they'd tried and what happened" },
        { value: "3", label: "tracking systems' parsing behavior checked: Taleo, Workday and SuccessFactors" },
      ],
      note: "Cross-checked against a published resume guide by a senior technology director with a recruiting background. The interviews were informal, in my own network.",
    },
    {
      kind: "field",
      labels: ["The research found", "So the product"],
      eyebrow: "What it told me",
      title: "Every finding became a rule in the product.",
      findings: [
        {
          saw: "Single-column, plain-text resumes with standard headings got through. The graphic templates were missing from the successful set.",
          did: "Offers exactly one format: single-column, text-based, one A4 page.",
        },
        {
          saw: "People blamed their experience for zero callbacks, never the file format.",
          did: "Shows a score and a checklist that names each structural rule, so the cause is visible.",
        },
        {
          saw: "Freshers froze at the experience section, not because they'd done nothing, but because nobody had shown them how to phrase it.",
          did: "Changes the form for freshers and turns plain project notes into resume bullets.",
        },
        {
          saw: "Every affordable tool optimized for looks; every ATS-safe option was generic, priced for other markets, or manual.",
          did: "Free to try, ₹49 to download all three documents.",
        },
      ],
    },
    {
      kind: "decisions",
      id: "decisions",
      eyebrow: "04 / Decisions",
      title: "Make the rules visible, and earn the payment.",
      items: [
        {
          decision: "One format, no template gallery",
          evidence: "Every competitor sells choice: dozens of templates and colors. Multi-column and graphic layouts are the ones that fail parsing.",
          logic: "Ship exactly one template, single-column and black on white. More options would only mean more ways to fail silently, and more decisions for someone who arrived anxious.",
          tradeoff: "People who want a visually designed resume will go elsewhere.",
          result: "Every export is a single-column, text-based PDF on one A4 page.",
        },
        {
          decision: "Show the working, not just a score",
          evidence: "A bare number tells someone they failed without telling them why.",
          logic: "Show each structural rule as a checklist item next to the score, and turn the gap into the next step.",
          result: "A missing job description reads “Add job description for +20 ATS points”, so the score says what to do next.",
          images: [
            {
              src: `${dir}/results.webp`,
              label: "Shipped",
              alt: "Results screen: a score of 74 with “Good — add a job description to reach 94”, six ticked checklist items, one open item worth +20 points, and the resume preview below.",
              caption: "The score comes with its checklist and the next step. Fictional candidate.",
            },
          ],
        },
        {
          decision: "Free to see it, pay only to take it",
          evidence: "A student deciding whether to spend ₹49 on an unknown tool needs to see it work first.",
          logic: "Generate all three documents, show the score and the full resume for free, and ask for payment only at download, with the finished resume still visible behind the drawer.",
          tradeoff: "Generation costs me money for everyone who doesn't pay.",
          result: "₹49 downloads all three documents; ₹199 a month covers unlimited versions.",
          images: [
            {
              src: `${dir}/payment.webp`,
              label: "Shipped",
              alt: "Payment drawer over the dimmed results: “Download your resume”, ₹49 one-time, a Pay button for UPI, card or netbanking, and Review my resume again.",
              caption: "The drawer opens over a resume that's already finished.",
            },
          ],
        },
        {
          decision: "Write the form for freshers",
          evidence: "A fresher facing a field labelled “Work Experience” feels the product isn't for them.",
          logic: "When someone picks Fresher / 0 years, the field becomes “Your Projects or College Activities”, with a final-year project and a hackathon as the example. The model is told never to invent experience for freshers.",
          result: "The people who need the tool most see their own situation in the form.",
          images: [
            {
              src: `${dir}/fresher.webp`,
              alt: "Form field labelled “Your Projects or College Activities” with an Improve with AI button, containing a description of a canteen app and a hackathon, and a word-count hint.",
              caption: "The experience field after choosing Fresher / 0 years.",
            },
          ],
        },
        {
          decision: "Design the wait",
          evidence: "Generation takes long enough that a spinner would feel broken to someone already anxious about a job.",
          logic: "Show six named steps that tick off as the work progresses, and if the network is slow, a reassuring message after 20 seconds instead of silence.",
          result: "The wait reads as progress: analysing, matching keywords, writing each document, and a final check.",
          images: [
            {
              src: `${dir}/loading.webp`,
              label: "Shipped",
              alt: "Loading screen: “MyResumeAI is crafting your resume”, with six steps from Analysing your experience to Running final quality check, the first ticked and the second in progress.",
              caption: "Six named steps instead of a spinner.",
            },
          ],
        },
        {
          decision: "No account, no database",
          evidence: "A signup wall is where an anxious first-time visitor leaves.",
          logic: "Ask for nothing before the result. The browser keeps the last resume for seven days, so a returning visitor picks up where they left off.",
          tradeoff: "Nothing syncs across devices, and clearing the browser clears the history.",
          result: "From the landing page to a finished resume with nothing to sign up for.",
        },
      ],
    },
    {
      kind: "comparison",
      eyebrow: "05 / Three documents, one input",
      title: "The same story everywhere a recruiter looks.",
      uncropped: true,
      body: "A resume on its own is a commodity, and ₹49 feels like a lot for one document. The same input also produces a cover letter and a LinkedIn About, in one generation, so the candidate's story stays consistent and the price covers three things they need.",
      items: [
        {
          src: `${dir}/cover-letter.webp`,
          label: "Cover letter",
          alt: "Cover Letter tab: a three-paragraph letter addressed to the Hiring Manager from the fictional candidate.",
          caption: "Cover letter: three paragraphs, under 180 words.",
        },
        {
          src: `${dir}/linkedin.webp`,
          label: "LinkedIn About",
          alt: "LinkedIn About tab: a first-person profile summary that opens with a project the candidate built.",
          caption: "LinkedIn About: first person, opening with a hook.",
        },
      ],
    },
    {
      kind: "spec",
      eyebrow: "06 / The AI",
      title: "Rules the model writes inside",
      lines: [
        "One fixed resume layout and section order, one A4 page, 600 words at most",
        "Never include an empty section, and never write N/A or “Not provided”",
        "Freshers: focus on projects, academics and skills; never invent experience",
        "If there's a job description, use its exact keywords throughout",
        "Every bullet starts with a strong action verb, four bullets per role at most",
        "Cover letter: three paragraphs, under 180 words; LinkedIn About: first person, under 150",
      ],
      caption:
        "The people this is for often don't know how to write a strong bullet, which is why they need it. So the model doesn't freestyle: it writes inside the structure the research produced, and the checklist on the results screen shows those same rules to the user.",
    },
    {
      kind: "prose",
      id: "how-i-built",
      variant: "split",
      eyebrow: "07 / How I built it",
      title: "I wrote the product before I built it.",
      body: "I wrote the whole product as a specification first: every screen, each field's behavior, the motion, the color reasoning and the AI's rules. Then I directed an AI coding agent to build the screens one at a time, reviewing and correcting each before moving on. The spec was the real work; a vague brief would have produced a generic product.",
    },
    {
      kind: "rewrites",
      id: "audit",
      eyebrow: "08 / After launch",
      title: "I audited my own product, and it scored 71.",
      intro: "Shipping isn't finishing. I scored every screen against my own standards: the wait (90) and the payment drawer (84) came out strongest, and the endings came out weakest.",
      items: [
        { where: "Success screen · 61", before: "The moment of highest satisfaction ended in silence: no share, no next step.", after: "A share prompt, and a clear next step to unlimited versions." },
        { where: "Error screen · 55", before: "A dead end that didn't tell people their form was kept.", after: "Says the form data is saved, so trying again costs nothing." },
        { where: "Results screen · 68", before: "The download button, the most important control, could scroll off-screen on mobile.", after: "Next: keep it pinned on small screens." },
      ],
    },
    {
      kind: "ownership",
      id: "collaboration",
      eyebrow: "09 / Ownership",
      title: "A solo product, end to end.",
      groups: [
        {
          name: "My contribution",
          items: ["Research and positioning", "Product and interaction design", "The AI's rules and prompt", "Front end, PDF export and payments", "Pricing and launch", "Post-launch audit"],
        },
        {
          name: "Tools and services",
          items: ["Claude API for generation", "An AI coding agent for the build", "Razorpay for payments"],
        },
      ],
    },
    {
      kind: "status",
      id: "status",
      eyebrow: "10 / Status",
      title: "Live.",
      states: [
        { name: "MyResumeAI", status: "Live at myresumeai.org, with paid downloads", state: "production" },
        { name: "Product analytics", status: "Not set up yet", state: "in-progress" },
      ],
      qualification: "Status as of October 2026.",
    },
    {
      kind: "closing",
      eyebrow: "11 / Learning",
      statement:
        "The research was the product. The AI only writes well because it writes inside rules that came from looking at what actually gets read, and the interface earns trust by showing those rules instead of hiding them.",
      reflection:
        "I shipped the product before the measurement. There are no analytics yet, so every change after launch came from my own judgement rather than evidence. An hour of setup on day one would have told me more than a week of guessing. I also kept polishing before showing anyone, when a rough version could have been in front of people on day two.",
      open: {
        label: "Next",
        text: "Analytics for the whole funnel; a pinned download button on mobile; and asking the candidate for real numbers, or marking any figure the AI suggests for them to confirm, so nothing on their resume is something they can't back up.",
      },
    },
  ],
  overview:
    "MyResumeAI is my own AI product: one input gives you an ATS-safe resume, a cover letter and a LinkedIn About, written inside rules I researched. I designed and built it solo in about a week, and it's live with paid downloads.",
  problem: [],
  process: [],
  solution: [],
  results: [],
  gallery: [],
};
