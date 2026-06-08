# Entrepreneurship Bootcamp Study App — CLAUDE.md

## Project Overview

Build a **Next.js web app** called **"Bootcamp Brain"** — a fun, engaging study tool for Makram ElJamal's Entrepreneurship Bootcamp exam at Al-Hussein Technical University (HTU).

The app covers two course tracks:
- **Business Track** (Prof. Zaid Maaytah — 8 lectures)
- **Design Thinking Track** (Prof. Fayzeh Abuhaltam — 7 lectures)

It has two modes: **Study Mode** (concept cards per lecture) and **Quiz Mode** (5 MCQ exams with self-grading).

---

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS
- **Deployment**: Vercel (optimize for it — no heavy server-side deps)
- **No database needed** — all content is hardcoded as JS/TS data files
- **Language**: TypeScript

---

## Project Structure

```
study-bootcamp/
├── app/
│   ├── page.tsx                  # Landing / home
│   ├── layout.tsx
│   ├── study/
│   │   ├── page.tsx              # Track selection (Business vs Design)
│   │   └── [track]/
│   │       └── [lecture]/
│   │           └── page.tsx      # Individual lecture concept cards
│   └── quiz/
│       ├── page.tsx              # Quiz selection (5 exams)
│       └── [examId]/
│           ├── page.tsx          # Quiz taking UI
│           └── results/
│               └── page.tsx      # Score + answer review
├── data/
│   ├── business/
│   │   ├── lecture1.ts
│   │   ├── lecture2.ts
│   │   ├── lecture3.ts
│   │   ├── lecture4.ts
│   │   ├── lecture5.ts
│   │   ├── lecture6.ts
│   │   ├── lecture7.ts
│   │   └── lecture8.ts
│   ├── design/
│   │   ├── lecture1.ts
│   │   ├── lecture2.ts
│   │   ├── lecture3.ts
│   │   ├── lecture4.ts
│   │   ├── lecture5.ts
│   │   ├── lecture6.ts
│   │   └── lecture7.ts
│   └── quizzes/
│       ├── exam1.ts              # Based on the mock exam provided
│       ├── exam2.ts              # Generated
│       ├── exam3.ts              # Generated
│       ├── exam4.ts              # Generated
│       └── exam5.ts              # Generated
├── components/
│   ├── ConceptCard.tsx
│   ├── LectureNav.tsx
│   ├── QuizQuestion.tsx
│   ├── ProgressBar.tsx
│   ├── ScoreCard.tsx
│   └── Footer.tsx
└── public/
```

---

## Design Direction

**Aesthetic**: Bold, energetic, slightly editorial. Think startup pitch deck meets textbook rebel. Dark mode base with electric accent colors. Fun but not childish.

- **Background**: Deep dark (`#0a0a0f`) with subtle grain texture
- **Primary Accent**: Electric indigo/violet (`#6366f1`)
- **Secondary Accent**: Amber/gold (`#f59e0b`) for highlights and streaks
- **Business Track Color**: Teal (`#14b8a6`)
- **Design Track Color**: Rose/coral (`#f43f5e`)
- **Typography**:
  - Display/headings: `Syne` (Google Fonts) — geometric, bold, distinctive
  - Body: `DM Sans` — clean, modern, readable
- **Cards**: Glassmorphism with subtle borders, slight hover lift with shadow glow
- **Animations**: Smooth page transitions, staggered card reveals, subtle floating effect on home hero
- **Progress**: Colorful progress bars, fun emoji feedback on quiz results

---

## Page-by-Page Spec

### 1. Home Page (`/`)

Hero section with:
- App title: **"Bootcamp Brain 🧠"**
- Tagline: *"Study smarter. Think like a founder."*
- Two big CTA cards: **Study Mode** and **Quiz Mode**
- Subtle animated background (floating geometric shapes or gradient mesh)
- Footer with branding (see Footer spec below)

### 2. Study Track Selection (`/study`)

Two large clickable cards:
- **Business Track** — teal accent, icon 📊, "8 Lectures · Prof. Zaid Maaytah"
- **Design Thinking Track** — rose accent, icon 🎨, "7 Lectures · Prof. Fayzeh Abuhaltam"

### 3. Lecture List (`/study/[track]`)

Grid of lecture cards, each showing:
- Lecture number + title
- 3–4 key concept tags (chips/badges)
- Click to enter that lecture

**Business lectures:**
1. Innovation Cycle & Design Thinking
2. PEST & SWOT Analysis
3. Entrepreneurship Approaches (Lean, Agile, Tech, Social)
4. Business Model Canvas
5. Value Proposition & Market Size (TAM/SAM/SOM)
6. Competitor Analysis & Pricing Strategies
7. 4Ps of Marketing
8. Cost, Revenue & Finance Basics
9. Financial Statements & Ratios

**Design Thinking lectures:**
1. Intro to Design Thinking & Human-Centered Design
2. Observe, Engage & Immerse (Research Methods)
3. The World Around the Problem (PESTEL + System Thinking)
4. Persona, Jobs-to-be-Done & Problem Definition
5. HMW, Divergence & Ideation
6. Prototyping & Validation Engine
7. Feedback Extraction & Iterate/Pivot/Kill

### 4. Lecture Concept Page (`/study/[track]/[lecture]`)

This is the main study view. Layout:
- Lecture title + track badge at top
- Scrollable concept cards stacked vertically (or swipeable on mobile)
- Each **Concept Card** has:
  - Concept title (bold, large)
  - Explanation paragraph (clear, plain language — not raw slide bullet dumps)
  - Optional: "Key Points" bullet list (max 4 bullets)
  - Optional: example or analogy block (styled differently, amber accent)
  - Optional: "Remember This" callout (for exam-critical facts)
- Bottom nav: Previous Lecture / Next Lecture buttons

### 5. Quiz Selection (`/quiz`)

5 exam cards in a grid:
- **Exam 1**: "The Real Mock Exam" (from provided mock exam questions)
- **Exam 2–5**: "Practice Exam 2–5" (AI-generated, labeled as practice)
- Each card shows: number of questions, estimated time, difficulty badge

### 6. Quiz Taking (`/quiz/[examId]`)

- One question at a time (no scrolling through all)
- Question number + progress bar at top
- 4 answer options as large clickable cards
- Selected answer highlights (before submit)
- After selecting: "Confirm Answer" button
- After confirming: show correct/wrong with brief explanation
- "Next Question" button
- No going back to previous questions

### 7. Quiz Results (`/quiz/[examId]/results`)

- Big score display (e.g., "18 / 25")
- Emoji + message based on score:
  - 90–100%: "🏆 You're a founder already."
  - 70–89%: "🔥 Solid. A few gaps to close."
  - 50–69%: "📚 Keep grinding. You're getting there."
  - Below 50%: "💀 Back to the study cards, legend."
- Full question review: each question with your answer, correct answer, and explanation
- "Try Again" and "Back to Quizzes" buttons

---

## Footer

Present on all pages. Subtle, at the bottom:

```
Built by Makram ElJamal · Entrepreneurship Bootcamp · Al-Hussein Technical University (HTU) · Spring 2026
```

Small text, centered, with a subtle divider above it. Maybe a small ⚡ or 🎓 icon.

---

## Content Data Format

Each lecture data file exports a typed object. Here's the TypeScript interface:

```typescript
// types.ts
export interface ConceptCard {
  id: string;
  title: string;
  explanation: string;       // 2–4 sentences, plain language
  keyPoints?: string[];      // max 4 bullets
  example?: string;          // real-world analogy or example
  examTip?: string;          // "Remember This" — exam-critical fact
}

export interface Lecture {
  id: string;
  number: number;
  title: string;
  track: 'business' | 'design';
  professor: string;
  tags: string[];
  concepts: ConceptCard[];
}

export interface QuizQuestion {
  id: string;
  question: string;
  options: [string, string, string, string];  // exactly 4
  correctIndex: 0 | 1 | 2 | 3;
  explanation: string;       // why the answer is correct
  topic: string;             // e.g. "BMC", "PESTEL", "HMW"
  track: 'business' | 'design' | 'both';
}

export interface Exam {
  id: string;
  title: string;
  description: string;
  isReal: boolean;           // true = from mock exam, false = generated
  questions: QuizQuestion[];
}
```

---

## All Content to Encode

### BUSINESS TRACK CONTENT

---

#### Lecture 1: Innovation Cycle & Design Thinking

**Concepts to encode:**

1. **What is Innovation?**
   - Creating and implementing new ideas that generate value (economic, social, or technological)
   - Can be new products, services, processes, or business models
   - Key point: Innovation is not just invention — it must generate value

2. **What is Entrepreneurship?**
   - Identifying opportunities, mobilizing resources, and creating value through new ventures
   - Transforms innovative ideas into sustainable businesses
   - Entrepreneurship is a "factor of production" alongside land, labor, capital

3. **Why Business and Design Work Together**
   - Design: understanding users and creating solutions
   - Business: creating sustainable value
   - Innovation = intersection of Desirability (people), Feasibility (technology), Viability (business)
   - Exam tip: The three circles — Desirable, Feasible, Viable — must all overlap for good innovation

4. **Design Thinking Process (Stanford d.school)**
   - Empathize → Define → Ideate → Prototype → Test
   - Starts with people and their needs, not technology or business models
   - Example: Airbnb used design thinking to understand why hosts weren't signing up — they found photos were bad, sent photographers → solved it

5. **Overlap Between Design Thinking and Entrepreneurship**
   - Both emphasize: understanding problems, experimentation, iteration, learning from users
   - Design thinking = what to build; Entrepreneurship = how to deliver and scale it

6. **3Ms of Entrepreneurship**
   - **Mind**: Your mindset — determines direction, resilience, adaptability
   - **Market**: The map — where value exists, who needs what you're building
   - **Money**: The fuel — without it you can't go far; must be managed wisely

7. **Growth Mindset for Entrepreneurs**
   - Believes abilities can be developed through dedication and hard work
   - Embraces failure as learning
   - Key traits: Curiosity, Vision, Risk Tolerance, Resilience, Adaptability, Persistence

8. **Business Agility**
   - Ability to adapt quickly to changes in markets, technology, and customer needs
   - Key elements: Rapid experimentation, Continuous learning, Iterative development, Flexibility in decision-making

9. **High Performance Teams**
   - Not just talented individuals — groups that collaborate effectively
   - CATme (Comprehensive Assessment of Team Member Effectiveness): peer feedback system
   - Helps increase accountability, identify contribution imbalances, improve teamwork

---

#### Lecture 2: PEST & SWOT

**Concepts to encode:**

1. **Entrepreneurial Mindset**
   - Vision, Curiosity, Innovation, Determination, Decisiveness, Adaptability, Teamwork, Risk Tolerance, Agility, Comfortable with Failure, Persistence, Resilience, Long-Term Focus, Leadership, Self-motivation, Effective Communication, Continuous Learning

2. **What is PEST Analysis?**
   - Framework for understanding external macro-environmental factors
   - Stands for: Political, Economic, Social, Technological
   - Used when evaluating a new market or designing a business model
   - Exam tip: PEST ≠ PESTEL. PESTEL adds Environmental and Legal (covered in Design Thinking course)

3. **Political Factors (P)**
   - Government policies and regulations
   - Political stability and support for entrepreneurship
   - Legal barriers or incentives
   - Public funding and access to licenses

4. **Economic Factors (E)**
   - Inflation and interest rates
   - Employment/unemployment levels
   - Consumer purchasing power
   - Availability of capital and credit

5. **Social Factors (S)**
   - Cultural values and attitudes
   - Demographics and population trends
   - Education and literacy levels
   - Lifestyle changes and social trends

6. **Technological Factors (T)**
   - Access to internet and mobile tech
   - Infrastructure and connectivity
   - Emerging technologies
   - Digital tools and platforms

7. **SWOT Analysis**
   - **Strengths**: Internal positives (what you do well)
   - **Weaknesses**: Internal negatives (what you lack)
   - **Opportunities**: External positives (market trends, gaps)
   - **Threats**: External negatives (competition, regulation)
   - Strengths + Weaknesses = Internal; Opportunities + Threats = External
   - Exam tip: PEST informs the O and T of SWOT

---

#### Lecture 3: Entrepreneurship Approaches

**Concepts to encode** (inferred from file name and bootcamp context):

1. **Lean Startup Methodology**
   - Build-Measure-Learn cycle
   - MVP (Minimum Viable Product): smallest thing you can build to test a hypothesis
   - Pivot or persevere based on validated learning
   - Eliminates waste by testing before scaling
   - Example: Dropbox tested demand with a demo video before writing a line of code

2. **Agile Methodology**
   - Iterative development in sprints (short cycles)
   - Continuous delivery and feedback
   - Flexibility to change direction based on new information
   - Originally from software; now used in startups broadly

3. **Technology-Led vs. Design-Led Innovation**
   - Technology-led: "We built it because we could"
   - Design-led: "We built it because they needed it"
   - Exam tip: Best innovations are both — but always start with the human need

4. **Social Entrepreneurship**
   - Creates social value alongside (or instead of) financial value
   - Addresses social/environmental problems using business methods
   - Example: Grameen Bank (microfinance for the poor)

5. **Lean vs. Agile**
   - Lean: eliminate waste, validate quickly
   - Agile: adapt and iterate in cycles
   - They complement each other; not mutually exclusive

---

#### Lecture 4: Business Model Canvas

**Concepts to encode:**

1. **What is a Business Model?**
   - Who you serve + What value you offer + How you deliver it + How you make money
   - The Business Model Canvas (BMC) is a strategic tool to visualize all key elements

2. **BMC Logic (9 Building Blocks)**
   - Right side = Market & Customer
   - Center = Value Proposition
   - Left side = Operations
   - Bottom = Money
   - Three questions: Is it Desirable? Is it Feasible? Is it Viable?

3. **Customer Segments**
   - The groups of people/organizations you aim to serve
   - Based on: Demographics, Geography, Behavior, Psychographics
   - Exam tip: If you have no defined segment, you have no customer

4. **Value Proposition**
   - The unique value your product/service provides
   - Answers: What problem are you solving? What makes you different? What benefits do customers get?
   - Ties directly to customer Jobs, Pains, and Gains

5. **Channels**
   - How you deliver value to customers
   - Sales Channels: physical stores, online platforms, sales teams
   - Communication Channels: social media, advertising, email
   - Distribution Channels: logistics, delivery

6. **Customer Relationships**
   - Personal Assistance: direct human interaction
   - Self-Service: tools for customers to help themselves
   - Automated Services: technology-driven service

7. **Revenue Streams**
   - How the business makes money from each segment
   - Types: Product Sales, Service Fees, Subscriptions, Licensing, Advertising

8. **Key Resources**
   - Assets required to deliver the value proposition
   - Physical, Intellectual, Human, Financial

9. **Key Activities**
   - Most important actions the company must perform
   - Production, Marketing & Sales, Distribution, Customer Service

10. **Key Partners**
    - External organizations that help run the business
    - Suppliers, Manufacturing Partners, Distributors, Strategic Alliances, Investors

11. **Cost Structure**
    - All costs to operate the business model
    - Fixed Costs: rent, salaries (don't change with output)
    - Variable Costs: change with production volume
    - Economies of Scale + Economies of Scope

12. **Common BMC Mistakes**
    - Too many segments (pick a beachhead!)
    - Vague value proposition
    - Unrealistic revenue projections
    - Ignoring costs

---

#### Lecture 5: Value Proposition & Market Size

**Concepts to encode:**

1. **Value Proposition Canvas**
   - RIGHT SIDE (Customer Profile):
     - Customer Jobs: tasks customers want to complete (functional, emotional, social)
     - Pains: frustrations, risks, negative emotions
     - Gains: positive outcomes desired
   - LEFT SIDE (Value Map):
     - Products & Services: what you offer
     - Pain Relievers: how you reduce pains
     - Gain Creators: additional benefits you create
   - Fit = when your value map matches customer profile

2. **Value Proposition Statement**
   - Format: "[Product] helps [target customer] achieve [key benefit] by [how it solves their pain]"
   - Example: "Uber gives you a fast, reliable, and affordable ride at any time with the tap of a button — no waiting, no negotiation, no cash."

3. **What is a Market?**
   - System where buyers and sellers interact to exchange goods/services
   - Can be local, regional, national, global
   - Types: Consumer, Financial, Business, Online Markets

4. **B2B vs. B2C**
   - B2B: Selling to businesses — rational decisions, long cycles, multiple decision-makers, ROI-driven
   - B2C: Selling to individual consumers — emotional decisions, shorter cycles, personal benefits matter
   - Exam tip: If the user is not the one paying, you're in a system game (B2B dynamics)

5. **Diffusion of Innovation Theory**
   - Innovators (2.5%): risk-takers, try first
   - Early Adopters (13.5%): spot benefit early, visionaries
   - Early Majority (34%): pragmatists, risk-averse
   - Late Majority (34%): skeptics, price-sensitive
   - Laggards (16%): traditionalists, last to adopt
   - Exam tip: SOM targets Innovators + Early Adopters

6. **TAM — Total Addressable Market**
   - Maximum demand if 100% of possible users adopted
   - "Big picture" — the entire market size
   - Includes all customer types in adoption curve

7. **SAM — Serviceable Available Market**
   - Portion of TAM you can realistically serve (given geography, constraints)
   - Formula: SAM = TAM × Target Market Segmentation %
   - SAM customers: Innovators, Early Adopters, Early Majority

8. **SOM — Serviceable Obtainable Market**
   - Portion of SAM you can capture in the short term (1–3 years)
   - Formula: SOM = SAM × Estimated Market Share %
   - SOM customers: Innovators + Early Adopters
   - Exam tip: SOM is your "entry wedge"

9. **Uber in Jordan Example (TAM/SAM/SOM)**
   - TAM: ~2.4 million (urban Jordanians with smartphones who travel regularly)
   - SAM: ~920,000 (Amman + Irbid, app-friendly population, ~40% of urban)
   - SOM: ~110,000–120,000 (12% of SAM, given Careem dominance)

---

#### Lecture 6: Competitor Analysis & Pricing

**Concepts to encode:**

1. **Types of Competitors**
   - Direct Competitors: same product, same audience
   - Indirect Competitors: different product, same customer need
   - Emerging Competitors: new entrants with disruption potential

2. **Competitor Benchmarking**
   - Comparing your performance/products against competitors
   - Moon Chart: radar/spider chart to compare multiple attributes visually
   - Benefits: simplifies complex data, highlights strengths/weaknesses, tracks progress

3. **Brand Positioning Map (Perceptual Map)**
   - Visual tool to compare brands on 2 key attributes (e.g., Price vs. Quality)
   - Reveals gaps in the market (under-served spaces)
   - How to use: Select 2 attributes → Plot brands → Analyze gaps → Strategize

4. **Unique Selling Point (USP)**
   - The special feature/benefit that makes you stand out
   - Must be: Unique, Valuable, Clear
   - USP = intersection of "what customers want" + "what competitors don't do well"
   - Exam tip: Benchmarking reveals where you outperform → that becomes your USP

5. **Cost-Plus Pricing**
   - Formula: Selling Price = Cost of Production + Markup %
   - Simple, ensures profit margin
   - Weakness: ignores what customers are willing to pay

6. **Value-Based Pricing**
   - Price based on perceived customer value, not cost
   - Requires understanding customer willingness to pay
   - Works best when you have strong differentiation

7. **Competitive Pricing**
   - Set price based on what competitors charge
   - Used when products are similar (low differentiation)
   - Choose: below, at, or above competitor price

8. **Penetration Pricing**
   - Low price initially to gain market share fast
   - Then gradually increase price once established
   - Risk: can attract wrong customers (price-chasers)

9. **Skimming Pricing**
   - High price initially (target early adopters willing to pay premium)
   - Gradually lower price to reach broader market
   - Example: new iPhone launch

10. **Psychological Pricing**
    - Prices designed to feel cheaper (e.g., $9.99 vs $10)
    - Tactics: Charm pricing, Prestige pricing, Bundling, Price Anchoring, Artificial scarcity

---

#### Lecture 7: 4Ps of Marketing

**Concepts to encode** (inferred from standard 4Ps curriculum):

1. **The Marketing Mix (4Ps)**
   - Framework for making marketing decisions
   - Product, Price, Place, Promotion
   - Exam tip: Each P must align with the others and with the target customer

2. **Product**
   - What you're selling: features, quality, design, branding, packaging
   - Core product (actual benefit) vs. Augmented product (extras like warranty, support)
   - Product lifecycle: Introduction → Growth → Maturity → Decline

3. **Price**
   - What customers pay; signals value and positions your brand
   - Ties back to pricing strategies (Lecture 6)
   - Affects demand, revenue, and competitive positioning

4. **Place (Distribution)**
   - How and where customers access your product
   - Direct: sell yourself (website, store)
   - Indirect: through intermediaries (distributors, retailers)
   - Digital: app stores, marketplaces, SaaS

5. **Promotion**
   - How you communicate value to your audience
   - Tools: Advertising, PR, Social Media, Content Marketing, Sales Promotions
   - Integrated Marketing Communications: consistent message across all channels

6. **From 4Ps to 7Ps (Services)**
   - Additional 3Ps for service businesses:
   - People: the humans delivering the service
   - Process: how the service is delivered
   - Physical Evidence: tangible cues of service quality (environment, packaging)

---

#### Lecture 8: Cost, Revenue & Finance Basics

**Concepts to encode:**

1. **Why Finance Matters for Entrepreneurs**
   - Entrepreneurship = creativity + resource management
   - Finance helps: survive, plan, grow, reduce uncertainty
   - Most startups fail due to financial mismanagement, not bad ideas

2. **Common Financial Mistakes**
   - Underestimating costs
   - Overestimating revenue
   - Spending too early (before validating demand)
   - Poor cash flow management

3. **Startup Costs**
   - One-time costs to launch the business before generating revenue
   - Examples: equipment, legal fees, website, initial inventory, licenses

4. **Fixed Costs**
   - Costs that don't change with production volume
   - Examples: rent, salaries, insurance, software subscriptions
   - Always present whether you sell 0 or 10,000 units

5. **Variable Costs**
   - Costs that scale with production/sales volume
   - Examples: raw materials, packaging, delivery costs, sales commissions
   - Formula awareness: Total Cost = Fixed Costs + (Variable Cost per unit × Units)

6. **Projected Revenue**
   - Estimated future income from sales
   - Three questions: WHO will buy? WHAT will they buy? WHAT will they pay?
   - Must be based on: market research, competitor data, historical trends, customer behavior

7. **Realistic Assumptions**
   - Revenue projections must be grounded in evidence
   - Avoid: "If we get 1% of the market" fallacy
   - Use bottom-up approach: start with individual customer behavior, scale up

8. **Building a Startup Budget**
   - Lists all expected costs and revenue for a period
   - Categories: Startup costs, Operational expenses, Projected revenues
   - Purpose: understand cash flow needs and when you'll reach breakeven

---

#### Lecture 9: Financial Statements & Ratios

**Concepts to encode** (from 9__Finance.md — inferred from standard curriculum):

1. **Three Core Financial Statements**
   - Income Statement (P&L): Revenue − Costs = Profit/Loss over a period
   - Balance Sheet: Assets = Liabilities + Equity at a point in time
   - Cash Flow Statement: actual cash in and out (not the same as profit!)
   - Exam tip: Profitable doesn't mean cash-positive. Timing of cash flows matters.

2. **Key Terms**
   - Revenue: total income from sales
   - Gross Profit: Revenue − Cost of Goods Sold (COGS)
   - Net Profit: Gross Profit − All expenses (operating, tax, interest)
   - Breakeven Point: when Total Revenue = Total Costs (zero profit/loss)

3. **Breakeven Analysis**
   - Formula: Breakeven Units = Fixed Costs ÷ (Price per unit − Variable cost per unit)
   - Contribution Margin = Price − Variable Cost per unit
   - Key for knowing: "how much do we need to sell to not lose money?"

4. **Cash Flow**
   - Cash inflows: customer payments, loans, investments
   - Cash outflows: supplier payments, salaries, rent
   - Cash flow ≠ profit (you can be profitable but cash-broke)
   - Burn rate: how fast a startup spends its cash reserves

5. **Financial Ratios (basic)**
   - Profit Margin = Net Profit ÷ Revenue × 100%
   - Return on Investment (ROI) = (Gain − Cost) ÷ Cost × 100%
   - Current Ratio = Current Assets ÷ Current Liabilities (measures liquidity)

---

### DESIGN THINKING TRACK CONTENT

---

#### Lecture 1: Intro to Design Thinking

**Concepts to encode:**

1. **Why Startups Fail**
   - Build for themselves, not for users
   - Start with the solution, not the problem
   - Teams of same-background people → same biases → same blind spots
   - Bad innovation: Idea → Build → Hope people want it
   - Good innovation: People → Problem → Solution

2. **Cognitive Biases in Innovation**
   - **Halo Effect**: one impressive feature fools us into ignoring flaws
   - **Similarity Bias (Like-Me Bias)**: assume users behave like us
   - **Confirmation Bias**: search for info that supports our idea
   - **Stereotyping**: over-generalize user groups
   - Exam tip: Your education and expertise is also a filter — it stops you seeing reality

3. **Human-Centered Design**
   - Start with people: their frustrations, needs, behavior
   - Designers observe: behaviors, frustrations, habits, workarounds, environments
   - "Users describe solutions. Designers discover needs."

4. **Decoding User Complaints**
   - "I wish professors uploaded slides earlier" → real need: predictability and control
   - "I hate group projects" → real need: fair workload and accountability
   - "I need a bigger phone battery" → real need: anxiety reduction
   - Exam tip: Always go one level deeper than what the user says

5. **Design Thinking is NOT About Feeling**
   - It's about "Observation without Judgment"
   - Accepting you might be wrong about the problem
   - Minimizing biases through structured methods

6. **Human Hacks**
   - A non-standard workaround created because a system failed to meet user needs
   - Where there's a workaround, there's an unmet need
   - Examples: Infrastructure failure, Design failure, Trust failure, Process failure
   - Exercise: find a physical/digital hack in Amman and diagnose it (not fix it)

7. **The Bootcamp Design Journey**
   - Understand → Research → Define → Ideate → Prototype → Test → Evaluate → Pitch
   - "Business is about the destination. Design is about the maze (Discovery). Don't jump over the maze — walk through it."

---

#### Lecture 2: Observe, Engage & Immerse

**Concepts to encode:**

1. **The Problem with Self-Reporting**
   - People do not always do what they say they do
   - People do not always do what they think they do
   - People do not always do what you tell them to do
   - Exam tip: Observed behavior > stated preference. Always.

2. **Observe**
   - Watch what people actually do in context
   - Don't intervene, guide, or suggest
   - What you're looking for: habits, workarounds, friction, hesitation

3. **Engage**
   - Go from watching to asking — but ask behavioral questions
   - People don't reveal truth in opinions — they reveal it in patterns
   - You are not allowed to ask direct questions → discover through conversation
   - Behavioral decoding: checks phone = boredom/habit; avoids speaking = discomfort; rechecks work = perfectionism

4. **Immerse**
   - Observation shows you what happens; talking shows you why; immersion shows you how it feels
   - You don't fully understand a problem until you experience it yourself
   - Example: Try writing with your non-dominant hand → no explanation needed
   - "The closer you get to the problem, the clearer it becomes"

5. **Primary Research (Direct)**
   - Observe: watch people in context
   - Talk: behavioral interviews, not surveys
   - Experience: immerse yourself in the user's world

6. **Secondary Research (Indirect / Digital Shadowing)**
   - Reports, statistics, articles, existing data
   - Market research replaces assumptions with evidence
   - "You think you understand a problem — you saw a symptom"

7. **User + Need + Context**
   - Every research insight should answer: who is the user, what do they need, in what context?

---

#### Lecture 3: The World Around the Problem

**Concepts to encode:**

1. **Business vs. Design Perspective**
   - Business sees the MAP (where to go)
   - Design sees the TRAP (what's blocking people)
   - Human hacks are not random — they're responses to system failure

2. **PESTEL Framework**
   - Political: policies, stability, tax, regulation
   - Economic: inflation, purchasing power, employment, raw material costs
   - Social: demographic trends, cultural attitudes, buying patterns
   - Technological: innovation, automation, tech advancements
   - Environmental: sustainability, climate, regulations
   - Legal: employment laws, consumer protection, IP laws
   - Exam tip: Every pressure creates behavior — you're solving for the human experiencing these pressures

3. **System Thinking: You're Not Solving for ONE Person**
   - Your target user exists inside a network
   - In Jordan: you don't just sell to the user — you sell to their father, friends, boss, system
   - If the user says YES but someone in their environment says NO → your idea is dead

4. **Jobs-to-Be-Done**
   - People hire products to do a job
   - Three types of jobs:
     - Functional: the practical task (too slow, too costly)
     - Social: how they appear to others (social risk)
     - Emotional: how they feel (discomfort, anxiety)
   - "People don't buy a drill; they hire a drill to make a hole to hang a family photo — to feel like a good parent"

5. **Kano Model (Value Layers)**
   - Required: must-have for survival (absence = dealbreaker)
   - Expected: baseline (users assume it)
   - Desired: nice-to-have (user prefers it)
   - Unexpected: delights the user (they didn't know they wanted it)

6. **Roles in the System (Assignment 2 Roles)**
   - The Founder: fights for the idea
   - The User: inconsistent, emotional, irrational
   - The Decision Maker: cares about risk, money, control
   - The Doubter: destroys weak logic
   - The System: represents culture, habits, reality — blocks what doesn't fit

7. **Problem Statement Formula**
   - "[User] struggles with [specific situation] because [root cause], leading to [real consequence]"
   - Good example: "Busy students on campus skip meals during peak hours because food queues are unpredictable, leading to fatigue and reduced academic performance"
   - Bad example: "Students need better food on campus" → too vague, no root cause

---

#### Lecture 4: Persona, Jobs-to-Be-Done & Problem Definition

**Concepts to encode:**

1. **The Myth of "Everyone"**
   - If your customer is everyone, you have no customer
   - Vague = no product-market fit
   - Exam tip: "Students", "People", "Users" are not customer segments — they're categories

2. **B2C vs. B2B (Design Lens)**
   - B2C: solving for a human — emotions, behavior, habits
   - B2B: solving inside a system — decision makers, risk, control
   - If the user is not the one paying → you're in a system game

3. **What Makes a Real User**
   - A user is: in a specific situation, doing something specific, with a real struggle
   - "If you can't see the moment, you don't understand the problem"

4. **Persona Components**
   - When does the problem happen? (situation)
   - What does the person actually do? (behavior)
   - What are they trying to avoid? (pains)
   - What are they trying to feel? (emotional job)

5. **Beachhead Persona**
   - Your one most focused target: Segment + real human + real moment + job + intensity
   - Shark bite vs. Mosquito bite: Is this urgent and action-driven, or just annoying and delayed?
   - Exam tip: You need a shark-bite problem for your beachhead — something they CANNOT ignore

6. **Pain Intensity**
   - Shark bite: urgent, emotional, demands action NOW
   - Mosquito bite: annoying, ignored, delayed
   - If it's a mosquito bite → people won't change their behavior to fix it

7. **From Problem Experts to Solution Architects**
   - "Why? Why? Why? Why? Why?" — drill down to root cause
   - From "What is" to "What if"
   - You defined the cage (problem). Now find the exit (solution).

8. **Jargon Assassin**
   - Jargon is the symptom. Unclear thinking is the real problem.
   - Rule: explain your field to someone with zero background
   - If you can't explain it to a 10-year-old or your grandmother in Amman → idea is too weak
   - No corporate speak: "Speak Human, Not Corporate"

---

#### Lecture 5: HMW, Divergence & Ideation

**Concepts to encode:**

1. **How Might We (HMW)**
   - Not a sentence or format — a decision about what part of the problem space to explore
   - Keeps you connected to the problem but allows multiple solution directions
   - Template: "How might we help [user] achieve [job] despite [pain]?"

2. **Types of HMW (4 Types)**
   - Type 1 — Efficiency: "How might we reduce waiting time?" → faster systems, optimization
   - Type 2 — Experience: "How might we reduce stress during waiting?" → perception change, emotional solutions
   - Type 3 — Behavior Change: "How might we change when students eat?" → shifting habits, new patterns
   - Type 4 — System: "How might we redesign how food is distributed?" → structural solutions, bigger innovation
   - Exam tip: Choosing the HMW type determines the kind of solutions you'll get

3. **What HMW Does**
   - Focuses thinking (picks a direction)
   - Expands possibilities (doesn't lock a solution)
   - Defines creativity boundaries (too wide = chaos; too narrow = boring)

4. **Divergence (Thinking Expansion)**
   - First idea = obvious. Generate MANY fundamentally different ideas.
   - Rules: Quantity over quality, No judging, Different directions
   - Wrong: app with notifications, app with tracking, app with AI → same thinking (all apps)
   - Right: eliminate queues entirely, shift eating times, remove need for cafeteria → different thinking

5. **How HMW Controls Divergence**
   - Without HMW: ideas are different but irrelevant
   - With HMW: ideas are different AND all relevant
   - Change the approach, not decorate the same idea

6. **Communicating Without Jargon**
   - Speaking is thinking in real time — your brain is faster than your mouth
   - Fillers (umm, like, maybe) = panic signals
   - The Pause: "The person who fears silence seems anxious. The person who owns silence seems confident."
   - Tempo: slow down at the insight ("the because" in your problem statement)

---

#### Lecture 6: Prototyping & Validation Engine

**Concepts to encode:**

1. **The Validation Engine**
   - Insight → Hypothesis → Prototype → Test → Learn → Decide
   - Everything before prototyping was inside your head — now reality decides

2. **The Double Diamond**
   - Discover (Expand) → Define (Focus) → Develop (Expand) → Deliver (Focus)
   - Discover: behavior, tension, contradiction
   - Define: the hardest step — constructing the right problem
   - Develop: HMW zone — controlled exploration
   - Deliver: test, refine, decide

3. **Technology-Led vs. Design-Led**
   - Technology-led: "We built it because we could"
   - Design-led: "We built it because they needed it"
   - Reality check: If I remove the technology, does your idea still work?

4. **One Fatal Mistake in Prototyping**
   - Testing HOW (usability) before testing WHY (value)
   - You must first confirm people want it, THEN refine how it works

5. **Prototype Types**
   - **Storyboard**: tests journey, sequence, logic → "Does the story make sense?" (6–8 steps, shows user + emotion) — Cannot test interaction or demand
   - **Role-Play**: tests service, conversation, support → act it out — Depends on acting, not for demand
   - **Interface (Paper/Digital)**: tests screens, user flow → watch for wrong taps and hesitation — Not real speed or behavior
   - **Digital MVP**: real interaction, one screen, one flow, one function → watch for completion and drop-off — Risk of overbuilding
   - **Landing Page / Fake Door**: tests demand → describe idea, add "sign up" → watch clicks and signups — Tests intent, not behavior

6. **Outdoor Prototype Test Signals**
   - "I would use this" → ignore (cheap talk)
   - "Interesting but…" → dig (find the real objection)
   - "When can I get it?" → act (this is real demand)
   - Patterns > opinions

---

#### Lecture 7: Feedback Extraction & Iterate/Pivot/Kill

**Concepts to encode:**

1. **Feedback Is Not Feedback — It's Extraction**
   - You extract: behavior, friction, expectation gaps, commitment
   - You didn't test ideas — you tested assumptions
   - Testing without change = performance (you learned nothing)

2. **The Evidence Chain**
   - Observation → Insight → Decision → Alignment
   - Observation: what the user did
   - Insight: what that behavior means
   - Decision: what you changed
   - Alignment: why this better fits the user
   - Skip one step → you're guessing

3. **The "If You Can't Say This, You Didn't Learn" Framework**
   - "We observed: ___"
   - "This means: ___"
   - "So we changed: ___"
   - "This aligns with the user because: ___"

4. **Feedback Methods**
   - **Silent Observation**: remove yourself — no explanation, no correction, no guidance. Watch: hesitation, wrong actions, pauses, breakdown points
   - **Thinking Aloud (Cognitive Exposure)**: user narrates while doing — captures where mental model breaks
   - **Wizard of Oz (Value Isolation)**: simulate experience without building the system — you do the work manually — does the value hold without the tech?
   - **Commitment Test (Truth Filter)**: push for action, effort, continuation — if they refuse, previous positive feedback is invalid

5. **Riskiest Assumption Test (RAT)**
   - Define: "If THIS is wrong → everything collapses"
   - Before testing: define success rate AND failure threshold
   - Only test with your defined persona — everyone else is noise
   - Do NOT ask "Do you like it?" or "Would you use it?"

6. **Refinement Types**
   - **Usability Friction** (HOW problem): user wants value but system blocks them → Iterate: fix flow/clarity
   - **Value Deficit** (WHY problem): user understands but doesn't care → Pivot: problem is weak
   - **Mental Model Mismatch**: user uses it differently than expected → Investigate: possible new opportunity

7. **The Decision Layer**
   - **Iterate**: problem is real, solution is weak
   - **Pivot**: problem is wrong
   - **Kill**: no behavioral intent after multiple tests

8. **Cost of Being Wrong (Launch Stages)**
   - **MVP**: small group, fast feedback, controlled — can iterate quickly
   - **Pilot**: controlled users, slow learning — can limit rollout
   - **Open Beta**: can fix but can't hide — everyone sees everything
   - **Polished Launch**: full exposure, no ability to fix quickly → danger zone
   - "If you launch when you can't iterate, you're gambling, not testing."

---

## Mock Exam Questions (Exam 1 — The Real One)

> NOTE: The mock exam file is at `course-references/Multiple Choice Exam - Mock.md`. Read it and use ALL questions exactly as written for Exam 1. Preserve every question, option, and correct answer precisely.

---

## Generated Exams (Exams 2–5)

Generate 25 questions per exam covering both tracks. Mix questions from both Business and Design tracks. Each question must have exactly 4 options (A, B, C, D) and one correct answer with a brief explanation.

**Exam 2** — Focus: Business Track (BMC, Market Size, Competitor Analysis)
**Exam 3** — Focus: Design Track (Research, Personas, HMW, Prototyping)
**Exam 4** — Mixed, application-based (scenario questions, "which is correct?")
**Exam 5** — Mixed, hardest (edge cases, nuance, deeper concept questions)

Each exam question must include:
- Clear, specific question text
- 4 distinct, plausible options
- Correct answer index (0–3)
- Brief explanation of why it's correct

---

## Build Instructions

1. Start with `npx create-next-app@latest study-bootcamp --typescript --tailwind --app`
2. Install Google Fonts (Syne + DM Sans) via `next/font`
3. Create all data files first, then build components, then pages
4. Read the mock exam file from `course-references/Multiple Choice Exam - Mock.md` EXACTLY
5. Use `next/link` for all navigation (no page reloads)
6. Make the quiz state persistent within a session using React state (no localStorage needed)
7. Make it mobile-responsive — students will study on their phones
8. Run `npm run build` to verify no TypeScript errors before finishing
9. Add a `vercel.json` if needed for deployment config

---

## Footer (Required on all pages)

```
⚡ Built by Makram ElJamal for the  Entrepreneurship Bootcamp course at Al-Hussein Technical University (HTU)
```

---

## Quality Checklist

- [ ] All 9 Business lectures have concept cards
- [ ] All 7 Design Thinking lectures have concept cards
- [ ] Exam 1 uses the real mock exam questions
- [ ] Exams 2–5 are generated with 25 questions each
- [ ] Quiz shows correct/wrong after each answer with explanation
- [ ] Final score page has emoji-based feedback
- [ ] Footer present on all pages
- [ ] Mobile responsive
- [ ] No TypeScript errors (`npm run build` passes)
- [ ] Deployed to Vercel or ready to deploy
