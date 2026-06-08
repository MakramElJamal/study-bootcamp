import { Lecture } from '@/types';

const lecture6: Lecture = {
  id: 'design-6',
  number: 6,
  title: 'Prototyping & Validation Engine',
  track: 'design',
  professor: 'Prof. Fayzeh Abuhaltam',
  tags: ['Prototyping', 'Validation', 'MVP', 'Double Diamond'],
  concepts: [
    {
      id: 'd6-c1',
      title: 'The Validation Engine',
      explanation:
        "The Validation Engine is the feedback loop that connects your ideas to reality. Everything before prototyping was inside your head — your assumptions, your beliefs, your models. The validation engine is how reality tests those assumptions and generates data to improve your design.",
      keyPoints: [
        'Insight → Hypothesis → Prototype → Test → Learn → Decide',
        'Everything before prototyping was inside your head',
        'After prototyping: reality decides, not your assumptions',
        'The loop repeats: every test generates new insights',
      ],
      examTip: 'The validation engine sequence: Insight → Hypothesis → Prototype → Test → Learn → Decide. Know this order.',
    },
    {
      id: 'd6-c2',
      title: 'The Double Diamond',
      explanation:
        "The Double Diamond is a design process model that captures the alternation between divergent thinking (expanding possibilities) and convergent thinking (focusing down). It has four phases: Discover, Define, Develop, Deliver. Each diamond shape represents first expanding then narrowing your thinking.",
      keyPoints: [
        'Discover (Expand): research, behavior, tension, contradictions',
        'Define (Focus): constructing the right problem statement — the hardest step',
        'Develop (Expand): HMW zone — controlled exploration of solutions',
        'Deliver (Focus): prototype, test, refine, decide',
      ],
      examTip: 'Double Diamond: Discover → Define → Develop → Deliver. Each pair = diverge then converge. Define is the hardest phase.',
    },
    {
      id: 'd6-c3',
      title: 'Technology-Led vs. Design-Led (Revisited)',
      explanation:
        "When prototyping, a critical test: 'If I remove the technology from my idea, does the value still exist?' If the answer is no, you might be in love with the technology, not the user's need. True design-led solutions create value because of the user need they address — the technology is just the delivery mechanism.",
      keyPoints: [
        'Technology-led: "We built it because we could"',
        'Design-led: "We built it because they needed it"',
        'Reality check: remove the tech — does the idea still have value?',
        'Best products are design-led with technology enabling delivery',
      ],
    },
    {
      id: 'd6-c4',
      title: 'The Fatal Prototyping Mistake',
      explanation:
        "The most common and most costly mistake in prototyping: testing HOW a solution works (usability) before confirming WHETHER users want it (value). You spend weeks perfecting the interface of something nobody wants. Always test value (WHY) before testing usability (HOW). This principle saves months of wasted effort.",
      keyPoints: [
        'Test WHY first: do users want this at all?',
        'Test HOW second: can users navigate and use it?',
        'Wrong order: test usability before testing value',
        'Right order: confirm demand → then refine the experience',
      ],
      examTip: 'Test value (WHY) before testing usability (HOW). Confirm people want it BEFORE optimizing how it works.',
    },
    {
      id: 'd6-c5',
      title: 'Prototype Types and What They Test',
      explanation:
        "Different prototypes test different things. Choosing the wrong prototype type wastes time by testing something you don't need to know yet. Match your prototype to your current most important assumption.",
      keyPoints: [
        'Storyboard: tests journey and logic — "Does the story make sense?"',
        'Role-Play: tests service, conversation, interaction — act it out',
        'Interface (Paper/Digital): tests screens and user flow',
        'Digital MVP: tests real interaction with one core function',
        'Landing Page / Fake Door: tests DEMAND — does anyone want this?',
      ],
      example:
        "For the Laundry Service (from mock exam): test riskiest assumption (reliable pickup exists) with a paper storyboard + SMS mock-ups. NOT a full app — that would be overbuilding before validating demand.",
      examTip: 'Fake Door / Landing Page = tests demand only. It cannot test behavior. Paper prototype = cheap, tests flow. Digital MVP = tests real interaction.',
    },
    {
      id: 'd6-c6',
      title: 'Reading Test Signals',
      explanation:
        "When you test a prototype, you collect data — but data needs interpretation. Not all responses are equal. The most dangerous signal is positive words ('I would use this') without corresponding action. The most valuable signal is action itself ('When can I get it?').",
      keyPoints: [
        '"I would use this" → IGNORE (cheap talk, no commitment)',
        '"Interesting but…" → DIG DEEPER (find the real objection)',
        '"When can I get it?" → ACT NOW (real demand signal)',
        'Patterns > individual opinions — look for what multiple users do',
      ],
      examTip: 'Behavioral signals > verbal signals. Action > stated intention. "When can I get it" > "I would use this".',
    },
  ],
};

export default lecture6;
