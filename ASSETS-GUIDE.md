# 📸 Your Portfolio Content Guide

Everything you need to fill this portfolio with real screenshots, videos, and
copy — plus how to tell each story the way abroad recruiters want to read it.

The site is already **live-shaped**: every image slot shows a branded
placeholder until you drop the real file in. Nothing breaks while you fill it.

---

## 1. Exactly where each file goes

Just drop files with these **exact names** into these folders. They appear
automatically — no code changes needed.

### Your photo

```
public/anudeep.jpg          ← your portrait (portrait/vertical, ~1200×1500px)
```

### Résumé

```
public/Anudeep_Thota_Resume.pdf   ← already added ✅ (replace anytime)
```

### The 4 featured case studies

Each project folder needs **1 cover + 3 gallery images**:

| Project | Folder | Files to add |
|---|---|---|
| WarePro 3D Digital Twin | `public/work/warepro-digital-twin/` | `cover.jpg` `01.jpg` `02.jpg` `03.jpg` |
| StoneX Migration | `public/work/stonex-migration/` | `cover.jpg` `01.jpg` `02.jpg` `03.jpg` |
| Golden Suisse Fintech | `public/work/golden-suisse-fintech/` | `cover.jpg` `01.jpg` `02.jpg` `03.jpg` |
| US Gov Platforms | `public/work/us-gov-platforms/` | `cover.jpg` `01.jpg` `02.jpg` `03.jpg` |

- **cover.jpg** = the hero shot of that project (16:9-ish looks best).
- **01/02/03.jpg** = the 3 gallery shots. Their captions live in
  `src/data/site.ts` — edit the `caption` text to match what you show.

> Tip: `.jpg`, `.png`, and `.webp` all work. If you use PNG, either rename it to
> `cover.jpg` (browsers don't care about the extension mismatch) or tell me and
> I'll switch the paths. **`.webp` is best** — same quality, ~70% smaller.

### The Before → After band (home page "Redesigns")

Each redesign needs a **before** and an **after** screenshot in `public/redesigns/`:

| Redesign | Before file | After file |
|---|---|---|
| PI-ERP UI | `erp-before.jpg` | `erp-after.jpg` |
| WarePro Dashboard | `warepro-before.jpg` | `warepro-after.jpg` |
| Kerala Dashboard | `kerala-before.jpg` | `kerala-after.jpg` |
| StoneX App | `stonex-before.jpg` | `stonex-after.jpg` |

- **before** = the original/old design you inherited (dig up an old screenshot,
  even a rough one — it's the contrast that sells the story).
- **after** = your redesigned version. Same crop/zoom as the before, so the
  comparison is fair. Captions live in `src/data/site.ts` (`redesigns` array).
- Until you add them, they show as a flat grey "before" vs a clean accent
  "after" mock — the story reads even with no images.

### Your photo (About)

```
public/anudeep.jpg          ← portrait (until then, a gold "AT" monogram shows)
```

### Hero photo wall (right side of the homepage hero)

Drop **4 photos** into `public/hero/` — a staggered "wall" (until then, camera
placeholders show). Mix of shapes looks best:

```
public/hero/1.jpg   ← tall (portrait 3:4)
public/hero/2.jpg   ← square
public/hero/3.jpg   ← square
public/hero/4.jpg   ← tall (portrait 3:4)
```
Use crisp, on-brand shots (you at work, design close-ups, a talk, a team moment).

### The Lab (experiments page — /lab)

Optional covers in `public/lab/` (filename = kebab-case of the title), e.g.
`ai-edtech-platform.jpg`, `background-removal-web-app.jpg`,
`kerala-ev-station-app.jpg`. Until added, product-mock placeholders show.

### The "Life outside the pixels" band (photos + videos that loop)

Drop these into `public/life/` — the horizontal loop auto-fills. **Both images
and short videos work** (videos autoplay, muted, on loop). Mix them freely.

| Slot | File | Best shape |
|---|---|---|
| Dance (on stage) | `dance-01.jpg` | portrait |
| Team | `team-01.jpg` | landscape |
| Dance (clip) | `dance-02.mp4` | portrait video |
| Travel | `travel-01.jpg` | landscape |
| Design event | `event-01.jpg` | square |
| Travel | `travel-02.jpg` | portrait |
| Team (clip) | `team-02.mp4` | landscape video |
| Community | `event-02.jpg` | landscape |

- Want more or fewer tiles, or different labels? Edit the `life` array in
  `src/data/site.ts` — each entry is `{ type, src, label, aspect }`.
- **Keep videos short (5–12s) and under ~4 MB** (compress with Handbrake) — the
  band loops them silently, so no audio needed.
- The card shape is set by `aspect` (`portrait` / `landscape` / `square`), so
  crop your media to match for a clean fit.

---

## 2. How to capture great screenshots

**Golden rule:** recruiters spend ~10 seconds per project. Every image must
communicate *something* on its own.

### Setup (do this once)
- Capture at **2× / Retina** resolution so it looks crisp on big monitors.
- Windows: `Win + Shift + S` (Snipping Tool) → drag the exact region.
- For Figma: right-click frame → **Copy as PNG**, or Export at **2x**.
- Keep a **consistent aspect ratio** per project (all landscape, or all mobile).

### What to shoot (per project — aim for 4 images)
1. **The "money" screen** → the single most impressive view. This is `cover.jpg`.
2. **A real flow** → 2–3 screens showing a task getting done (before → after).
3. **The system** → your design system, components, or the 3D/data view.
4. **Context** → the app on a device, or a dashboard full of real data.

### Make them look premium (free tools)
- **Mockup frames:** put screens inside a browser/phone frame using
  [shots.so](https://shots.so), [screenshot.rocks](https://screenshot.rocks),
  or [Cleanmock]. Add a subtle background — never a bare screenshot.
- **Annotate sparingly:** one arrow or one label max. Let the work speak.
- **Dark backgrounds** match this site's theme — use near-black (#0e1014).

### For WarePro (3D) specifically
- A screen recording of the 3D twin rotating >>> any still image. Record it,
  then either export a poster frame as `cover.jpg`, or tell me and I'll add a
  **video slot** so the twin plays inline. That one will stop recruiters cold.

---

## 3. How to record project videos

A 20–40 second clip per flagship project (WarePro, StoneX) massively raises
credibility — it proves the thing is *real and working*.

### Recording
- **Windows Game Bar:** `Win + G` → record the screen. Or use
  [OBS Studio] (free) / [Loom] for a quick share link.
- Keep it **short (20–40s)**, **silent or lightly narrated**, **no dead time**.
- Show a *task completing*: open → do the thing → result. That's the story.
- Record at **1080p**, then compress with [Handbrake] or
  [freeconvert.com](https://www.freeconvert.com/video-compressor) so the file is
  **under ~5 MB** (big videos kill load speed).

### Where videos go
- Save as e.g. `public/work/warepro-digital-twin/demo.mp4`.
- Tell me which projects have a video and I'll wire an inline autoplay-muted
  player into those case studies (looks incredible in the gallery).

---

## 4. How great UX storytelling actually works
### (what got designers into Google / Uber / Stripe / abroad companies)

Every featured case study on your site already follows this proven structure.
When you refine the copy in `src/data/site.ts`, keep to it:

**1. Lead with IMPACT, not process.**
Recruiters scan the first line for business value.
> ❌ "This is a warehouse management project I worked on."
> ✅ "Turned a spreadsheet-driven warehouse into a real-time 3D twin managers
>    can walk through." ← *this is what your `impact:` field already says.*

**2. Problem → Role → Process → Solution → Impact.**
This is the skeleton recruiters are trained to look for:
- **Problem** — the real user + business pain (with a stake: money, time, trust).
- **Your role** — what *you* did vs. the team. Be honest and specific.
- **Process** — 3–4 key decisions and the *trade-offs* you made. This is where
  senior designers separate from juniors: show judgment, not just steps.
- **Solution** — what you shipped.
- **Impact** — numbers if you have them; if not, use direction ("CEO praised
  delivery speed", "shipped ahead of schedule", "backend live, confirmed").

**3. Show thinking, not just pretty screens.**
For each project, answer: *What was hard? What did you decide, and why?*
That single paragraph is worth more than 5 more mockups.

**4. AI-specific signals (huge for AI Product Designer roles).**
Where true, weave in:
- How you handled **AI uncertainty / mistakes gracefully** in the UX.
- **Ethical trade-offs** you weighed (privacy vs. personalization, speed vs.
  accuracy).
- **Cross-functional collaboration** — you + engineering + leadership.
- Your unique wedge: **you design AND ship the code.** Say it plainly. Almost no
  design portfolio can claim "zero engineering dependency, production code."

**5. Depth over breadth.**
3–5 deep case studies beat 10 thumbnails. You have 4 deep + a "More work" grid —
that's the right shape. Don't dilute it.

### Numbers to hunt for (ask your CEOs/clients if you can)
Even rough ones transform a case study:
- Time saved / delivery time cut (you have this — "prototype in 4 hours").
- Anything measurable: users, transactions, error reduction, adoption.
- If you truly have none, **direction words work**: faster, ahead of schedule,
  first-ever, CEO-confirmed, launched.

---

## 5. Your fill-in checklist

- [ ] Add `public/anudeep.jpg` (portrait)
- [ ] WarePro: cover + 3 gallery (+ a 3D demo video if possible)
- [ ] StoneX: cover + 3 gallery (before/after of the migration is gold)
- [ ] Golden Suisse: cover + 3 gallery (Investor / Trader / Admin)
- [ ] US Gov: cover + 3 gallery (blur anything confidential!)
- [ ] Read every `// VERIFY` note in `src/data/site.ts` and correct facts
- [ ] Add your real LinkedIn / Dribbble / GitHub in `profile.socials`
- [ ] Sanity-check the résumé PDF is the version you want public

> ⚠️ **US Gov work:** double-check you're allowed to show it publicly, and blur
> any sensitive data / real records. When unsure, show the design system and
> generic flows rather than live screens.

---

## 6. How to run & deploy

```bash
npm run dev      # local preview at http://localhost:3000
npm run build    # production build (already passing ✅)
```

**Deploy (free):** push to GitHub → import into [Vercel](https://vercel.com) →
it auto-detects Next.js → live in ~1 minute with a free `*.vercel.app` URL.
Add a custom domain later (you already own domains via Namecheap).

When you've added your images and edited the copy, tell me and I'll do a final
polish pass + help you deploy.
