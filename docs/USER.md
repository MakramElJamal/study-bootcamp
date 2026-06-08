# Bootcamp Brain — User Guide

A study tool for the HTU Entrepreneurship Bootcamp course built by Makram ElJamal.

---

## What It Is

Bootcamp Brain is a Next.js web app with two modes:

- **Study Mode** — concept cards for every lecture in both course tracks, with key points, examples, and exam tips
- **Quiz Mode** — 5 MCQ exams (Exam 1 is the real course mock; Exams 2–5 are generated practice)

It covers two tracks:
| Track | Lectures | Based on |
|---|---|---|
| Business | 9 | Zaid Maaytah's lectures |
| Design Thinking | 7 | Fayzeh Abuhaltam's lectures |

---

## Running Locally

```bash
# Install dependencies
npm install

# Start development server
npm run dev
# → open http://localhost:3000

# Check for build errors
npm run build
```

Node 18+ required.

---

## Project Structure

```
study-bootcamp/
│
├── app/                        # Next.js App Router pages
│   ├── page.tsx                # Landing page
│   ├── layout.tsx              # Root layout (fonts, metadata)
│   ├── globals.css             # Global styles + design system classes
│   │
│   ├── study/
│   │   ├── page.tsx            # Track selection (Business vs Design)
│   │   └── [track]/
│   │       ├── page.tsx        # Lecture list for a track
│   │       └── [lecture]/
│   │           └── page.tsx    # Concept cards for one lecture
│   │
│   └── quiz/
│       ├── page.tsx            # Exam selection (5 exams)
│       └── [examId]/
│           ├── page.tsx        # Server wrapper for quiz
│           ├── QuizClient.tsx  # Client component — quiz UI + state
│           └── results/
│               ├── page.tsx            # Suspense wrapper
│               └── ResultsClient.tsx   # Score + answer review
│
├── components/
│   ├── ConceptCard.tsx         # Single study concept card
│   ├── LectureNav.tsx          # Prev/Next lecture navigation
│   ├── QuizQuestion.tsx        # One MCQ question UI
│   ├── ProgressBar.tsx         # Quiz progress bar
│   ├── ScoreCard.tsx           # Final score ring + emoji feedback
│   └── Footer.tsx              # Site-wide footer
│
├── data/
│   ├── business/
│   │   ├── lecture1.ts – lecture9.ts   # Business track content
│   │   └── index.ts                    # Exports businessLectures array
│   ├── design/
│   │   ├── lecture1.ts – lecture7.ts   # Design Thinking content
│   │   └── index.ts                    # Exports designLectures array
│   └── quizzes/
│       ├── exam1.ts – exam5.ts         # Exam question sets
│       └── index.ts                    # Exports exams array
│
├── types.ts                    # TypeScript interfaces (Lecture, ConceptCard, Exam, QuizQuestion)
│
└── course-references/          # Original lecture materials (not served to users)
    ├── Business/               # Raw lecture markdown files
    ├── Design-thinking/        # Raw lecture markdown files
    └── Multiple Choice Exam - Mock.md   # Source for Exam 1
```

---

## The Two Modes

### Study Mode

Navigate: Home → Study Mode → pick a track → pick a lecture → scroll through concept cards.

Each card can have:
- **Explanation** — plain-language summary
- **Key Points** — up to 4 bullets
- **Example** — real-world analogy (amber highlight)
- **Exam Tip** — exam-critical fact (amber callout with ⚡)

### Quiz Mode

Navigate: Home → Quiz Mode → pick an exam → answer one question at a time.

- After confirming your answer you see whether you were right and why
- No going back — answers lock in
- Results page shows your score, emoji feedback, and a full review of every question

Score thresholds:
| Score | Message |
|---|---|
| 90–100% | 🏆 You're a founder already. |
| 70–89% | 🔥 Solid. A few gaps to close. |
| 50–69% | 📚 Keep grinding. You're getting there. |
| < 50% | 💀 Back to the study cards, legend. |

**Note:** The practice exams are not structured like the actual course exam. They have no case studies or calculation prompts — they exist to test whether you know the concepts.

---

## Deploying to Vercel

This is a static Next.js site — deploy it in one step:

```bash
# Install Vercel CLI if needed
npm i -g vercel

# Deploy
vercel
```

Or connect the GitHub repo at [vercel.com](https://vercel.com) and it auto-deploys on every push to `main`.

No environment variables or database needed.

---

## Updating Content

All content lives in `data/`. No code changes needed for content-only edits.

### Edit a concept card

Open the relevant lecture file, e.g. `data/business/lecture4.ts`, find the concept object by its `id` or `title`, and edit the fields directly.

### Add a concept to an existing lecture

Add a new object to the `concepts` array in the lecture file:

```typescript
{
  id: 'b4-new-concept',
  title: 'Your Concept Title',
  explanation: '2–4 sentences in plain language.',
  keyPoints: ['Point one', 'Point two'],
  example: 'Optional real-world analogy.',
  examTip: 'Optional exam-critical fact.',
}
```

### Add a new lecture

1. Create `data/business/lecture10.ts` (or `data/design/lecture8.ts`) following the same shape as existing files
2. Add it to the `index.ts` barrel in that folder
3. Update `generateStaticParams` in `app/study/[track]/[lecture]/page.tsx` to include the new number
4. Update the lecture count display in `app/study/page.tsx`

### Edit exam questions

Open `data/quizzes/exam2.ts` (or whichever exam). Each question has:
```typescript
{
  id: 'e2-q01',
  question: 'The question text',
  options: ['Option A', 'Option B', 'Option C', 'Option D'],
  correctIndex: 0,          // 0 = A, 1 = B, 2 = C, 3 = D
  explanation: 'Why this answer is correct.',
  topic: 'BMC',
  track: 'business',        // 'business' | 'design' | 'both'
}
```

Do not edit `exam1.ts` — it contains the official mock exam questions exactly as provided.

---

## Tech Stack

| Tool | Version | Purpose |
|---|---|---|
| Next.js | 14.2 | Framework (App Router, SSG) |
| React | 18 | UI |
| TypeScript | 5 | Type safety |
| Tailwind CSS | 3.4 | Styling |
| Syne | Google Font | Display headings |
| DM Sans | Google Font | Body text |
