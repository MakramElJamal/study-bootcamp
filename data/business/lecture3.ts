import { Lecture } from '@/types';

const lecture3: Lecture = {
  id: 'business-3',
  number: 3,
  title: 'Entrepreneurship Approaches',
  track: 'business',
  professor: 'Prof. Zaid Maaytah',
  tags: ['Lean Startup', 'Agile', 'Social Entrepreneurship', 'MVP'],
  concepts: [
    {
      id: 'b3-c1',
      title: 'Lean Startup Methodology',
      explanation:
        'The Lean Startup, developed by Eric Ries, is a methodology for building businesses under conditions of extreme uncertainty. Its core idea: stop wasting time building things nobody wants. Instead, define what you believe to be true (a hypothesis), test it with the smallest possible experiment, and let reality — not your gut — decide what to build next.',
      keyPoints: [
        'Build-Measure-Learn: the three-stage feedback loop',
        'MVP (Minimum Viable Product): smallest thing that tests your hypothesis',
        'Pivot or Persevere: based on validated learning',
        'Eliminates waste by testing before scaling',
      ],
      example:
        "Dropbox didn't build the full product first. They made a 3-minute demo video explaining what the product would do. Thousands signed up overnight. Only then did they build it. The video was the MVP.",
      examTip: 'Lean startup = Build → Measure → Learn. MVP is NOT the final product — it is the experiment.',
    },
    {
      id: 'b3-c2',
      title: 'Agile Methodology',
      explanation:
        'Agile is a project management and development approach centered on iterative cycles called sprints, continuous delivery, and flexibility to change direction based on new information. Originally from software development, it is now widely used in startups for managing any kind of work.',
      keyPoints: [
        'Work happens in short sprints (1–4 week cycles)',
        'Deliver working output at the end of each sprint',
        'Incorporate feedback before starting the next sprint',
        'Prioritize responding to change over following a fixed plan',
      ],
      examTip: 'Agile = iterative sprints + continuous feedback. The key value: responding to change over following a plan.',
    },
    {
      id: 'b3-c3',
      title: 'Technology-Led vs. Design-Led Innovation',
      explanation:
        'Two fundamentally different starting points in building a product. Technology-led innovation starts with "we have this technology — what can we build with it?" Design-led innovation starts with "users have this problem — what should we build to solve it?" History shows that design-led approaches tend to produce more relevant, sustainable products.',
      keyPoints: [
        'Technology-led: "We built it because we could"',
        'Design-led: "We built it because they needed it"',
        'Best innovations combine both — but always start with the human need',
        'Example of tech-led failure: Google Glass — impressive tech, unclear human need',
      ],
      examTip: 'Best innovation = both design-led AND technology-enabled. But always START with the human need.',
    },
    {
      id: 'b3-c4',
      title: 'Social Entrepreneurship',
      explanation:
        'Social entrepreneurship is the practice of using entrepreneurial principles to create social value — addressing social, cultural, or environmental problems through sustainable business methods. Unlike traditional charity, social enterprises aim to be financially self-sustaining while driving social impact.',
      keyPoints: [
        'Creates social value alongside (or instead of) financial value',
        'Uses business methods to solve social/environmental problems',
        'Must be financially sustainable to maintain impact',
        'Different from NGOs: aims for revenue-generating model',
      ],
      example:
        "Muhammad Yunus's Grameen Bank in Bangladesh gives tiny loans (microfinance) to people too poor to get traditional bank loans. It generates revenue through loan repayments while lifting millions out of poverty.",
      examTip: 'Social entrepreneurship = business methods + social mission. Must be financially sustainable.',
    },
    {
      id: 'b3-c5',
      title: 'Lean vs. Agile: What\'s the Difference?',
      explanation:
        'Students often confuse Lean and Agile because both involve iteration and speed. The key distinction: Lean is about WHY you build (eliminate waste, validate demand). Agile is about HOW you build (sprint cycles, continuous delivery). They complement each other — many successful startups use both simultaneously.',
      keyPoints: [
        'Lean: focus on eliminating waste and validating quickly',
        'Agile: focus on adaptable, sprint-based development cycles',
        'Lean asks: "Are we building the right thing?"',
        'Agile asks: "Are we building the thing right?"',
      ],
      examTip: 'Lean = validate demand (why to build). Agile = how to build efficiently. They are NOT mutually exclusive.',
    },
    {
      id: 'b3-c6',
      title: 'Traditional vs. Lean Startup Approach',
      explanation:
        "Traditional entrepreneurship involves writing a detailed business plan, securing funding, building the full product, and then launching. The Lean approach flips this: start with the smallest possible test, learn from real data, then invest more. In today's fast-changing markets, the traditional approach wastes too much time and money before you discover what customers actually want.",
      keyPoints: [
        'Traditional: plan → fund → build → launch → learn (too late)',
        'Lean: hypothesis → MVP → measure → learn → pivot/persevere',
        'Lean reduces cost of failure by testing early',
        'Validated learning > assumptions from a business plan',
      ],
      examTip: 'The scenario question "founder with limited resources, uncertain market, likely to pivot" → correct answer is always the Lean Startup approach.',
    },
  ],
};

export default lecture3;
