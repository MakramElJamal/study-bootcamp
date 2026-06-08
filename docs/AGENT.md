# Bootcamp Brain — Agent Guide

Instructions for AI agents editing this codebase.

---

## How the App Works

Static Next.js 14 site using the App Router. All 34 pages are prerendered at build time (SSG). There is no database, no API routes, no server-side state. All content is hardcoded TypeScript data files imported at build time.

The quiz is the only interactive part — it runs entirely in client-side React state (`useState`). Results are passed to the results page via URL query params (`?q0=1&q1=3...`), not localStorage or server state.

Always run `npm run build` to verify no TypeScript or ESLint errors before considering a task complete.

---

## Directory Map

| Path | What it is |
|---|---|
| `types.ts` | All TypeScript interfaces. Source of truth for data shapes. |
| `data/business/lecture{1-9}.ts` | Business track content (concepts per lecture) |
| `data/design/lecture{1-7}.ts` | Design Thinking content |
| `data/quizzes/exam{1-5}.ts` | Quiz question sets |
| `data/*/index.ts` | Barrel files that export arrays |
| `app/page.tsx` | Landing page (hero, CTAs, track attribution) |
| `app/study/page.tsx` | Track selection page |
| `app/study/[track]/page.tsx` | Lecture list for a track |
| `app/study/[track]/[lecture]/page.tsx` | Concept cards for one lecture (SSG) |
| `app/quiz/page.tsx` | Exam selection page |
| `app/quiz/[examId]/page.tsx` | Server wrapper — finds exam by ID, renders QuizClient |
| `app/quiz/[examId]/QuizClient.tsx` | `'use client'` — owns all quiz state |
| `app/quiz/[examId]/results/page.tsx` | Suspense wrapper (required for useSearchParams) |
| `app/quiz/[examId]/results/ResultsClient.tsx` | `'use client'` — reads URL params, renders score |
| `components/ConceptCard.tsx` | Renders one concept object |
| `components/Footer.tsx` | Shared footer (no "Spring 2026", no professor titles) |
| `app/globals.css` | Design system: animations, card classes, color accents |
| `tailwind.config.ts` | Custom color tokens and font-family aliases |

---

## Data Shapes

Defined in `types.ts`. Never change these without updating every lecture and exam file.

```typescript
ConceptCard { id, title, explanation, keyPoints?, example?, examTip? }
Lecture     { id, number, title, track, professor, tags, concepts[] }
QuizQuestion{ id, question, options[4], correctIndex(0-3), explanation, topic, track }
Exam        { id, title, description, isReal, questions[] }
```

`professor` exists on `Lecture` but is intentionally not rendered anywhere in the UI. Do not surface it.

---

## Routing and Static Generation

Dynamic routes use `generateStaticParams`:

- `app/study/[track]/page.tsx` → `['business', 'design']`
- `app/study/[track]/[lecture]/page.tsx` → business 1–9, design 1–7
- `app/quiz/[examId]/page.tsx` → `['exam-1' … 'exam-5']`
- `app/quiz/[examId]/results/page.tsx` → same five IDs

If you add a lecture or exam, update the corresponding `generateStaticParams` function or the new page will 404 in production.

---

## Design System

All design primitives live in `app/globals.css` and `tailwind.config.ts`. Do not inline one-off colors or animations — use the established classes.

### Color Tokens (Tailwind custom colors)
| Token | Hex | Usage |
|---|---|---|
| `background` | `#0a0a0f` | Page background |
| `indigo` (primary) | `#6366f1` | CTAs, indigo accent cards |
| `amber` | `#f59e0b` | Quiz mode, exam tips, highlights |
| `teal` | `#14b8a6` | Business track |
| `rose` | `#f43f5e` | Design Thinking track |

### CSS Classes to Use
| Class | Effect |
|---|---|
| `.glass-card` | Glassmorphism card base (bg, border, blur, hover lift) |
| `.card-teal` | Teal glow on hover |
| `.card-rose` | Rose glow on hover |
| `.card-indigo` | Indigo glow on hover |
| `.card-amber` | Amber glow on hover |
| `.accent-top-teal/rose/amber/indigo` | 2px colored top border |
| `.fade-up` | Fade-in from below on mount |
| `.stagger` | Staggered fade-up on direct children (up to 6, then all at once) |
| `.shimmer-text` | Animated gradient text (indigo → purple → pink) |
| `.float-animation` | Slow floating motion (used on background blobs) |

### Fonts
- `font-syne` → headings, numbers, titles
- `font-dm` → body, labels, metadata

Always use these aliases, not `font-sans` or raw font stacks.

---

## ESLint Rules to Know

Next.js enforces `react/no-unescaped-entities`. Apostrophes in JSX text nodes must be escaped:

```tsx
// Wrong — fails build
<p>They're here</p>

// Correct
<p>They&apos;re here</p>

// Also correct (apostrophe inside JS expression is fine)
<p>{`They're here`}</p>
<p>{"They're here"}</p>
```

This only applies to text directly in JSX, not inside `{}` expressions.

---

## What Not to Do

- **Do not add a database, API routes, or external data fetching.** All content is static TypeScript.
- **Do not use `localStorage` or cookies.** Quiz state lives in `useState`; results pass via URL params.
- **Do not render `lecture.professor`.** The field exists in the type but is intentionally hidden in the UI (removed per design decision). Professor attribution is only shown as "Based on [Name]'s lectures" on the landing and track pages.
- **Do not add "Spring 2026" anywhere.** It was deliberately removed.
- **Do not edit `data/quizzes/exam1.ts` content.** It contains the official mock exam questions verbatim. Only touch it if correcting a factual error in an answer or explanation.
- **Do not create new CSS classes in component files.** Extend `globals.css` instead.
- **Do not use `'use client'` on page files in the study route.** They are server components — `ConceptCard` receives plain data props and has no interactivity.

---

## Adding Content

### New concept card to an existing lecture

Edit the lecture file (e.g. `data/business/lecture4.ts`), add to the `concepts` array:

```typescript
{
  id: 'b4-XX',        // follow existing ID pattern: track-initial + lecture number + index
  title: '...',
  explanation: '...',
  keyPoints: ['...'],   // optional, max 4
  example: '...',       // optional
  examTip: '...',       // optional
}
```

### New lecture

1. Create the data file following the existing shape
2. Add it to the barrel `index.ts`
3. Add `{ track: 'business', lecture: 'N' }` to `generateStaticParams` in `app/study/[track]/[lecture]/page.tsx`
4. Update the lecture count displayed in `app/study/page.tsx`

### New exam question

Add to the questions array in the relevant `data/quizzes/exam{N}.ts`. Follow the `QuizQuestion` shape in `types.ts`. `correctIndex` is 0-based (0 = first option, 3 = fourth option).

---

## Build Checklist

Before finishing any task:

```bash
npm run build
```

Expected output:
- `✓ Compiled successfully`
- `✓ Generating static pages (34/34)`
- No TypeScript errors
- No ESLint errors
