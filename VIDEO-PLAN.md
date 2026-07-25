# Portfolio video recording guide

Four flagship case studies, each with up to two video slots. This guide is everything you need to record, compress, and ship them.

---

## Golden rules (every single clip)

- **Muted + autoplay + loops forever** → keep it **short (10–25s)**. If it feels long, it's too long.
- **No voiceover — ever.** Audio is stripped. All meaning lives in **on-screen text chips**, plain English.
- **Chips = 3–5 words, upper third.** The chip IS the narration — if it reads like a transcribed sentence, cut it down. Author chips in the **upper third** (see control-bar rule below), never a 12-word line held for 3s.
- **The player shows native controls.** The case-study `<video>` elements render the browser's **native control bar along the bottom** plus a visible scrubber. Two consequences: (1) never place a chip in the lower third — the control bar covers it on hover; keep chips clear of the bottom ~48px. (2) The scrubber undercuts the invisible loop. Cleaner fix if you're editing code: **drop the `controls` attribute** (the life-band `MediaCard` already autoplays muted+loop with no controls) — then the loop is truly seamless.
- **Clean, invisible loop.** First frame = last frame. Hold ~1s static at both ends, cursor parked in the same spot. Never cut mid-scroll or mid-transition.
- **No personal / browser chrome.** Hide bookmarks, extensions, tabs, URL bar. Kill OS notifications (Focus Assist / DND), cursor trails, personal status-bar info.
- **Scrub-test for recruiters.** Assume someone watches for 3 seconds on mute. It must read instantly.

## Two slots per study

| Slot | Field | File | Badge |
|---|---|---|---|
| **Hero** (top of case study) | `cs.video` | `demo.mp4` | blue-pulse **LIVE DEMO** |
| **Proof** (Solution & outcome) | `cs.proof` | `proof.mp4` | green **SHIPPED — IN PRODUCTION** (now overridable via `cs.proof.badge`) |

> **The proof badge overclaims unless it's true.** The proof slot renders a green status pill. It now supports a per-study `badge` label (`cs.proof.badge`), defaulting to **"Shipped — in production"**. For any proof that is **not** a confirmed production deployment (US Gov Figma-Make build; Golden Suisse if it's staging/demo), you have two honest options:
> 1. **Leave `cs.proof` unset** (recommended) — the hero carries the study.
> 2. **Set an honest `badge`** like `"Delivered build"` or `"Live backend · demo"`.
>
> An empty proof slot is always better than a badge that overclaims.

---

## Record in this order

**Heroes first — each one carries its whole study on its own.**

1. **StoneX hero** — study has **zero media on disk**; the page currently renders the **designed placeholder skeleton** (window-chrome + dashboard mock — degrades gracefully, nothing looks broken, but there's no real media). Highest-leverage single asset.
2. **US Gov VSP hero** — study has **no video file and no `video` field** (this is a *create*, not a fix); most distinctive case in the portfolio; live Figma Make build is recordable today.
3. **WarePro hero** — re-record the bloated 42.7s tour as a tight 18s loop in the dense **"Complex"** scene. (Proof already exists and is good — just keep it.)
4. **Golden Suisse hero** — study has **no video** and under-sells next to WarePro; three apps fully recordable now.

**Then proofs (conditional / lower urgency):**

5. **Golden Suisse proof** — the buy → confirm → settle flow (staging/demo — see honesty note).
6. **StoneX proof** — only if the corporate site is genuinely public/live.
7. **US Gov VSP proof** — **default: LEAVE EMPTY** (it overlaps the hero + carries the badge/PII liability). Ship only if re-scoped — see that section.
8. **WarePro proof** — already shipped; just do a privacy check + optional loop polish.

---

## Universal compress + install step

**ffmpeg is already bundled** — it ships inside `node_modules/ffmpeg-static/` after `npm install`. No separate install needed.

Record RAW at 1920-wide / 30–60fps, **burn caption chips in over the RAW in a quick editor** (CapCut / Clipchamp / DaVinci / Premiere), *then* compress. Run from the project root:

```
node_modules/ffmpeg-static/ffmpeg.exe -y -i RAW.mp4 -vf "scale=1600:-2" -c:v libx264 -crf 28 -pix_fmt yuv420p -an public/work/<slug>/demo.mp4
```

- Swap `<slug>` and `demo.mp4`/`proof.mp4` per clip (slugs below).
- `-an` **strips audio** (that's why all meaning must be on-screen text).
- Target **< 3 MB**; 18s at crf 28 lands well under that.
- **Verify each output actually loops in-browser before shipping.**

**Handoff shortcut — read this carefully:** ffmpeg only rescales and strips audio. **It does NOT and cannot add captions.** If you hand off a RAW that has no chips burned in, compression produces a muted, text-less, meaningless clip — the exact failure this whole guide exists to prevent. So either:
- **Drop a RAW that already has the on-screen chips burned in**, and tell me — I'll compress it, write it to the right `public/work/<slug>/` path, and wire up `site.ts`; **or**
- Drop the chip-less RAW **plus the chip text + timings**, and say so explicitly, so the captions get added before compression rather than lost.

---

## 1) WarePro — 3D Digital Twin
`slug: warepro-digital-twin` · **Priority: HIGH**

- **Recordable today:** Yes — every named viewpoint, labelled bins, traffic-light colours, and the dense **"Complex"** scene are all live in the web app. Straight screen-recording job.
- **Already on disk:** `proof.mp4` (good, keep). Current `demo.mp4` is 42.7s, non-looping, uses the sparse early scene → **re-record**.
- **Verify the viewpoint button labels in the running app before scripting.** The guided viewpoints are documented as **Exterior · Receiving · Dispatch · Front · Back** — there is no "Right" or "Overhead". Use the exact labels the app actually shows.
- **Don't fake:** the Gemini gesture/voice "command with your hands" wow. Capture it **only** if it runs cleanly live; otherwise leave it to the written case study.

### Hero — `demo.mp4` · 18s
`public/work/warepro-digital-twin/demo.mp4`

| # | Time | Action | On-screen text (upper third) |
|---|---|---|---|
| 1 | 0:00–0:03 | **Exterior** wide of the full floor in the dense **"Complex"** scene — aisles glowing green/amber/red. Mouse still. | `Live occupancy · green/amber/red` |
| 2 | 0:03–0:07 | Click **Front** — camera glides into an aisle; labelled racks + traffic-light pallets read down the row. | `Guided viewpoints — one click` |
| 3 | 0:07–0:11 | Click **Receiving** — glide to dock-door wall; status dots + "Receiving" zone light up. | `Receiving — live dock status` |
| 4 | 0:11–0:15 | Click **Dispatch** — clean full-aisle read; colour alone tells capacity. | `Where can this pallet go?` |
| 5 | 0:15–0:18 | Click back to the **exact** starting **Exterior** viewpoint. Hold ~1s, mouse still, chips faded. | *(none — matches frame 1)* |

- **Loop tip:** The camera is deterministic — the last click returns to the identical opening framing. **But the occupancy colours may be live:** a rack that ticks green→amber during the 18s makes first-frame ≠ last-frame even with the camera parked. Record against a **frozen/seeded scene** (or a stretch with no colour changes), and **eyeball the colours at both ends before shipping**.
- **Gotchas:** Start in the **dense** scene (not sparse). Bin labels render **mirrored** from **Back** and some steep angles — keep to **Front / Receiving / Dispatch** where text reads correctly. Leave the viewpoint panel in (real UI + free on-screen text). Max 4–5 hops, 16–20s.

### Proof — `proof.mp4` · 15s — **KEEP AS-IS**
`public/work/warepro-digital-twin/proof.mp4`

- Already correct: 15.3s, production login → dashboard → embedded twin, honest. **Resist over-editing.**
- **Privacy check (must do):** top-right shows a real customer account (`Santosh@Vino Lights…`). Confirm the client is OK being named, or **blur/crop** that string before it stays public. Masked password dots are fine.
- Optional loop polish: keep the login/version beat brief (~1.5–2s) or re-cut to bookend both ends inside the dashboard. Don't remove the version-number frame — it's the strongest "this is real" signal.

---

## 2) StoneX — Flutter → React Native migration
`slug: stonex-migration` · **Priority: HIGH — do first**

- **Recordable today:** running RN build (emulator/device capture), original Figma frames (you authored them), and the live Dubai corporate site.
- **Current state:** zero media on disk — the page renders the **designed placeholder skeleton** (not a broken frame). **Also create** `cover.jpg` (the hero `<video>` poster) in the same pass — with autoplay+muted the poster barely shows, so a missing file is a harmless 404 fallback rather than a visible break, but it's still worth exporting the parity frame while you're there.
- **Data hygiene:** financial firm — scrub/dummy real balances, positions, account numbers, client names before recording.

### Hero — `demo.mp4` · 18s
`public/work/stonex-migration/demo.mp4`

| # | Time | Action | On-screen text (upper third) |
|---|---|---|---|
| 1 | 0–3 | RN app home/dashboard on a clean device frame; gentle scroll shows it's alive, then settles. | `Designed in Figma, shipped in RN` |
| 2 | 3–8 | Tap through two signature screens with native transitions (list → detail). | `Flutter → React Native. Solo.` |
| 3 | 8–14 | Live screen slides to one half; the **identical Figma frame** slides into the other; alignment wipe shows they line up. | `Figma ↔ build — pixel-for-pixel` |
| 4 | 14–18 | Split collapses back to the app; navigate home; settle at the exact start position. | `No design drift` |

- **Loop tip:** Start and end on the same home screen at the same scroll position; hold 4–6 static frames at both ends.
- **Gotchas:** Export `cover.jpg` from the parity frame **this pass**. Parity beat only lands if Figma ↔ screen genuinely match — pick the strongest screen. Neutral status bar (no carrier/notifications/personal time).

### Proof — `proof.mp4` · 14s — **ship only if the site is truly live/public**
`public/work/stonex-migration/proof.mp4` · caption: *"The StoneX Dubai corporate site — front-end and back-end, built solo and running in production."*

| # | Time | Action | On-screen text (upper third) |
|---|---|---|---|
| 1 | 0–3 | Land at top of the live corporate site — hero fully rendered, held briefly. | `StoneX Dubai — corporate site` |
| 2 | 3–9 | Smooth auto-scroll through 2–3 real sections + one live interaction (nav hover / menu open). | `Front-end + back-end — solo` |
| 3 | 9–12 | One backend-backed element working (contact form success state) with **dummy input**. | `Live in production` |
| 4 | 12–14 | Scroll back to hero, settle at the exact start frame. | `Designed, built & shipped by one` |

- **Loop tip:** Constant scroll velocity; end on a static hero, never mid-scroll.
- **Honesty:** The badge says **IN PRODUCTION** and can't be softened by caption. If the site is behind login, on staging, or undeployed → **leave `cs.proof` unset** (or set an honest `badge`). Don't expose real endpoints/admin URLs/internal data.

---

## 3) Golden Suisse — three fintech apps (live gold-trading)
`slug: golden-suisse-fintech` · **Priority: HIGH** — recommend both slots filled.

- **Recordable now:** all three responsive apps (Investor / Trader / Admin) run against a live/test backend. Net-new captures — folder is currently empty.
- **Hard rule:** seeded **DEMO account** only — fabricated-but-realistic numbers, no real names, balances, counterparties, or order IDs (real production platform).
- Do **not** add a third clip — responsiveness folds into the hero's final beat.

### Hero — `demo.mp4` · 18s
`public/work/golden-suisse-fintech/demo.mp4`

| # | Time | Action | On-screen text (upper third) |
|---|---|---|---|
| 1 | 0:00–0:03 | Investor dashboard **already settled** — portfolio value + gold price at rest, small `LIVE` dot. Mouse still. | `INVESTOR — approachable gold` |
| 2 | 0:03–0:07 | Light interaction — holdings, allocation, gold-price chart ticking. | `Live gold price · real holdings` |
| 3 | 0:07–0:11 | Crossfade to **Trader** — dense real-time dashboard, ticker, order book, sparklines. | `TRADER — dense, real-time` |
| 4 | 0:11–0:15 | Crossfade to **Agency & Admin** — operational tables, approvals queue, controls. | `ADMIN — operational control` |
| 5 | 0:15–0:18 | Snap one app into a **mobile viewport** (same layout, responsive), crossfade back to the **settled Investor** dashboard. | `One system — fully responsive` |

- **Loop tip — pick ONE opening, don't do both.** For a clean invisible loop, **open and close on the settled Investor dashboard** (frame 1 = frame 5, no count-up). If you specifically want the value **count-up-from-0** as an opener, accept and label it as a **deliberate non-seamless restart** — a first frame at 0 can never equal a settled last frame. The default table above chooses the clean loop.
- **Gotchas:** Hold each app only ~3–4s. Keep a fixed-corner app-name chip so it reads as one continuous carousel. ~300–400ms crossfades. The mobile beat must be the **same product resized**, never a different mock.

### Proof — `proof.mp4` · 15s
`public/work/golden-suisse-fintech/proof.mp4`
caption (staging/demo): *"A live buy order — reviewed, explicitly confirmed, and settled on the live backend using a seeded demo account."*

| # | Time | Action | On-screen text (upper third) |
|---|---|---|---|
| 1 | 0:00–0:03 | Order-entry: type a buy amount; live price + computed total update as you type. | `Buy gold — amount × live price` |
| 2 | 0:03–0:06 | Review card (amount, price, fee, total) with explicit **Confirm purchase**; cursor hovers. | `Explicit review first` |
| 3 | 0:06–0:09 | Highlighted click on **Confirm** → processing/loading state (spinner, disabled). | `One deliberate confirmation` |
| 4 | 0:09–0:12 | Backend returns success — green check / toast with reference + confirmed total. | `Confirmed by the backend` |
| 5 | 0:12–0:15 | Portfolio updates; new holding animates in; return to resting dashboard. | `Balance updated instantly` |

- **Resolve production-vs-staging before you record.** The badge and any "production backend" wording must match the actual data source:
  - **If staging/demo** (the expected case per the hard rule): caption must **not** say "production backend" — say **"live backend, demo account,"** and set an honest `badge` (e.g. `"Live backend · demo"`) or leave `cs.proof` unset.
  - **If genuinely production**: then it can't be the demo-account / fabricated-order clip — don't move real money or expose a real order ID to make the badge true.
- **Loop tip:** Bookend on the dashboard; let the success toast fully fade before the loop point; don't trim the confirm step so tight it reads as skipped.
- **Gotchas:** Test/staging backend + demo account only — never a real money movement or real order ID. Cursor/click highlight ON so the confirm press is unmistakable. Don't speed-ramp the confirm — the deliberateness IS the proof.

---

## 4) US Gov — VSP seal-order review console
`slug: us-gov-platforms` · **Priority: HIGH** — most distinctive case in the portfolio.

- **This is a CREATE, not a fix.** There is currently **no video file and no `video` field**. `public/work/us-gov-platforms/` holds only `cover.jpg` + `iteration-1/2/3.jpg`. You must **(1) record and write a new `public/work/us-gov-platforms/demo.mp4`, and (2) add `video: "/work/us-gov-platforms/demo.mp4"` to this case object in `src/data/site.ts`.**
- **Recordable today:** live interactive Figma Make build behind the access gate (**code 9191**). Purple Judicial console, masked SSN, green/red match pills, Hold→Matched→Unlocked status, Finalize Seal / Submit Review / Supervisor Queue — all real and screen-recordable.
- **Verify in a dry run** which actions are actually wired. Where an action isn't interactive, fall back to a deliberate **cursor tour** (hover/scroll/rest) — reads just as well on a muted loop and loops cleaner.
- **Synthetic / masked data only.** Every record must be a test record; SSN stays masked. Record **only after** the gate — never film code entry. Keep the test identity consistent.

> **PII — applies to BOTH clips.** The build renders **real-looking government identities**: subject/analyst names, and audit fields containing a `…@vsp.virginia.gov` reviewer email (plausibly a real named analyst / your senior designer's identity). **Do not hold, zoom on, or feature any real `@vsp.virginia.gov` address or named identity.** Mask/blur the reviewer email — local-part *and* domain — the same way the SSN is masked, or replace it with an obviously synthetic reviewer string. Add "no unmasked email/identity in frame" to the PII frame-check for the **hero as well as** the proof.

### Hero — `demo.mp4` · 18s
`public/work/us-gov-platforms/demo.mp4` (new file — none exists yet)

| # | Time | Action | On-screen text (upper third, 3–5 words) |
|---|---|---|---|
| 1 | 0:00–0:03 | Full console at top: 'VSP Judicial' header, 'Seal Order Court Case Detail View', metadata panel with masked SSN. Cursor parked top-left. | `Seal the EXACT right person` |
| 2 | 0:03–0:06 | Cursor to **Subject Record** row; rest on green 'Subject Status: Verified'; identifiers register. | `The court order's subject` |
| 3 | 0:06–0:11 | Slow scroll through **Potential Matches (3)** — per-field green ✓ / red ✗ pills wash across the rows. | `Every field — green vs red` |
| 4 | 0:11–0:14 | Hover a single **red ✗** field (e.g. a mismatched DCN) — hold so the mismatch is unmissable. | `One red field = no match` |
| 5 | 0:14–0:17 | Pan to top-right status (Hold→Matched→Unlocked) + purple **Finalize Seal**; cursor rests on it, **no click**. | `Staged & gated — never one click` |
| 6 | 0:17–0:18 | Scroll back to the exact shot-1 framing; cursor returns; tooltip cleared; caption faded. | *(none — matches frame 1)* |

- **Loop tip:** First = last frame — top-of-page view, metadata panel visible, cursor top-left, no dropdown/tooltip/modal open. Reserve the final ~1s to scroll up and settle.
- **Gotchas:** Do **not** actually click Finalize Seal if it mutates state irreversibly — resting is enough. **PII frame-check before publishing.** 60fps for smooth cursor motion, presentation/full-screen browser, Focus Assist on.

### Proof — `proof.mp4` · 13s — **DEFAULT: LEAVE `cs.proof` EMPTY**
`public/work/us-gov-platforms/proof.mp4`

> **Default to empty.** The hero already carries the staging/gating story (its frame 5 rests on the exact Hold→Matched→Finalize gating). A proof that re-tours the *same* governance controls is filler, and it stacks two liabilities: the badge on a **delivered Figma Make build** (not a confirmed VSP deployment), and the `@vsp.virginia.gov` audit-field PII. **Leave `cs.proof` unset.**
>
> **Only ship it if all three are true:** (1) it's **re-scoped to show something the hero doesn't** — e.g. the full **supervisor review round-trip** (submit → Supervisor Queue → second-reviewer action); **and** (2) the reviewer email + any named identity are **masked/blurred or synthetic**; **and** (3) the badge is honest (`cs.proof` unset, or an honest `badge` like `"Delivered build"`). A caption alone does **not** fix the badge.

If and only if you meet that bar, record a **non-mutating** version of the round-trip:

| # | Time | Action | On-screen text (upper third, 3–5 words) |
|---|---|---|---|
| 1 | 0:00–0:03 | Tight framing on the bottom action bar + footer counter; cursor rests on **Submit Review**; Reviewed / Not Reviewed tally visible. | `Not one person's click` |
| 2 | 0:03–0:07 | Follow the submit into the **Supervisor Queue** — the item appears for a second reviewer. | `Routed to a supervisor` |
| 3 | 0:07–0:10 | Supervisor view: the second set of eyes before anything seals; cursor rests (no trigger). | `A second set of eyes` |
| 4 | 0:10–0:12 | Metadata/audit panel: hold on 'Match Selected By' + 'Match Selected Date' — **email masked/synthetic**. | `Every seal is logged` |
| 5 | 0:12–0:13 | Settle back to shot-1 framing; cursor returned; caption faded. | *(none — matches frame 1)* |

- **Loop tip:** Record as a **non-mutating cursor tour / round-trip** — reset to the opening state before the clip ends. Don't leave a dropdown flipped or a review finalized.
- **Gotchas:** Keep it **tightly framed** on the supervisor round-trip (zoom with Ctrl +) so it reads as clearly *different* from the hero. **Mask the reviewer email (local-part + domain)** before it's ever in frame.

---

## Final checklist

**Per clip, before you compress:**
- [ ] Length 10–25s (heroes ~18s, proofs ~13–15s)
- [ ] Loops invisibly (first frame = last frame; ~1s static hold at both ends; cursor parked; live-data colours/values identical at both ends)
- [ ] Every message is an **on-screen text chip, 3–5 words, in the UPPER third** (clear of the native control bar; no reliance on audio)
- [ ] No browser chrome, bookmarks, extensions, tabs, or URL bar
- [ ] OS notifications off (Focus Assist / DND); no cursor trails
- [ ] Synthetic/demo data only — no real PII, balances, client names, account strings, order IDs, **or unmasked emails/identities** (US Gov: mask `@vsp.virginia.gov` on **both** clips)
- [ ] Proof badge honest: any non-production proof either has `cs.proof` unset or an honest `badge` label
- [ ] Compressed with the bundled ffmpeg (`-an`, scale 1600, crf 28) → **< 3 MB**
- [ ] Played back in-browser to confirm the loop is clean

**Per study, wiring in `src/data/site.ts`:**
- [ ] **WarePro** — overwrite `demo.mp4` (dense scene, verified viewpoint labels); keep `proof.mp4`; **privacy-check** the customer account string
- [ ] **StoneX** — add `video:` + `proof:` block; create `cover.jpg` (parity frame); ship proof only if the site is truly live
- [ ] **Golden Suisse** — set `cs.video` + `cs.proof`; create `cover.jpg`; make caption/badge/data source **agree** (staging → "live backend, demo account", not "production")
- [ ] **US Gov VSP** — **create** `demo.mp4` **and add the missing `video:` field**; proof **default LEFT EMPTY** unless re-scoped + PII-masked + badge fixed

**Aspirational (only if it runs cleanly, honestly, live):**
- [ ] WarePro **Gemini gesture/voice** hero — capture only if reliable; must show the trigger on-screen (gesture inset or transcript chip) since audio is muted. If flaky → leave it out.

Drop a RAW capture **with its chips already burned in** (or with the chip text + timings alongside it) and tell me — I'll compress it, place it at the right `public/work/<slug>/` path, and wire up `site.ts`.
