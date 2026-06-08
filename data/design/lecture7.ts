import { Lecture } from '@/types';

const lecture7: Lecture = {
  id: 'design-7',
  number: 7,
  title: 'Feedback Extraction & Iterate/Pivot/Kill',
  track: 'design',
  professor: 'Prof. Fayzeh Abuhaltam',
  tags: ['Feedback Methods', 'Iteration', 'Pivot', 'Decision Framework'],
  concepts: [
    {
      id: 'd7-c1',
      title: 'Feedback Is Extraction, Not Collection',
      explanation:
        "Feedback is not something that happens to you — it is something you extract with precision. You are not collecting opinions; you are extracting: behavior data, friction points, expectation gaps, and commitment signals. More importantly: you didn't test ideas — you tested ASSUMPTIONS. If nothing changes after testing, you didn't learn anything.",
      keyPoints: [
        'You extract: behavior, friction, expectation gaps, commitment',
        'You tested assumptions — not the product itself',
        'Testing without change = performance (wasted session)',
        'Every test should result in a decision: iterate, pivot, or kill',
      ],
      examTip: 'Testing without changing something = you learned nothing. Every test MUST result in a decision.',
    },
    {
      id: 'd7-c2',
      title: 'The Evidence Chain',
      explanation:
        "The Evidence Chain is a four-step logic structure that forces you to connect raw observations to justified decisions. It prevents the most common design mistake: jumping from 'users seemed to like it' to 'let\'s launch.' Each step requires evidence, not assumption.",
      keyPoints: [
        'Observation: what the user ACTUALLY DID (not what they said)',
        'Insight: what that behavior MEANS',
        'Decision: what you CHANGED as a result',
        'Alignment: why this change BETTER FITS the user',
      ],
      examTip: 'Evidence Chain: Observation → Insight → Decision → Alignment. Skip one step → you\'re guessing.',
    },
    {
      id: 'd7-c3',
      title: 'The "If You Can\'t Say This, You Didn\'t Learn" Framework',
      explanation:
        "This framework forces you to articulate your learning explicitly. If you cannot complete all four sentences after a test session, you didn't actually learn from it. This is the standard for calling a test session successful.",
      keyPoints: [
        '"We observed: ___" (what the user DID)',
        '"This means: ___" (what the behavior MEANS)',
        '"So we changed: ___" (what DECISION you made)',
        '"This aligns with the user because: ___" (WHY it fits better)',
      ],
      examTip: 'If you can\'t complete all 4 sentences, you didn\'t learn from the test. This is the validation checklist.',
    },
    {
      id: 'd7-c4',
      title: 'Four Feedback Methods',
      explanation:
        "Each feedback method extracts different types of information and should be matched to what you need to learn. Using the wrong method gives you data you can\'t use — or worse, data that misleads you.",
      keyPoints: [
        'Silent Observation: no explanation, no correction — watch: hesitation, wrong actions, breakdown points',
        'Thinking Aloud (Cognitive Exposure): user narrates while doing — captures where mental model breaks',
        'Wizard of Oz: simulate experience manually without building it — test the VALUE without the tech',
        'Commitment Test: push for action/continuation — if they refuse, all previous "positive" feedback is invalid',
      ],
      examTip: 'Silent Observation = purest behavioral data (no contamination). Commitment Test = the only real validation of stated interest.',
    },
    {
      id: 'd7-c5',
      title: 'Riskiest Assumption Test (RAT)',
      explanation:
        "Before testing, define what assumption would destroy your idea if wrong. This is your Riskiest Assumption. Test THIS first — everything else is secondary. If your riskiest assumption fails, there is no point testing anything else. This prevents wasting time testing nice-to-haves while ignoring the potential dealbreaker.",
      keyPoints: [
        'Define: "If THIS assumption is wrong → everything collapses"',
        'Define success threshold AND failure threshold before testing',
        'Only test with your defined beachhead persona — everyone else is noise',
        'NEVER ask: "Do you like it?" or "Would you use it?"',
      ],
      examTip: 'RAT = test the assumption that, if wrong, kills everything. Test THAT first. Not the UI, not the branding.',
    },
    {
      id: 'd7-c6',
      title: 'Types of Refinement',
      explanation:
        "Not all problems discovered in testing point to the same fix. Correctly diagnosing which type of problem you have determines what type of change to make. Making the wrong type of change wastes time and misses the root issue.",
      keyPoints: [
        'Usability Friction (HOW problem): user WANTS value but the system BLOCKS them → fix the flow/clarity',
        'Value Deficit (WHY problem): user UNDERSTANDS but doesn\'t CARE → pivot to a different problem',
        'Mental Model Mismatch: user uses it DIFFERENTLY than expected → investigate possible new opportunity',
      ],
      examTip: 'Three failure types: HOW (usability) → iterate. WHY (value) → pivot. Mental Model → investigate.',
    },
    {
      id: 'd7-c7',
      title: 'Iterate, Pivot, or Kill',
      explanation:
        "The decision layer is where design meets strategy. After multiple test cycles, you face one of three choices: Iterate (the problem is real but your solution needs improvement), Pivot (you had the wrong problem), or Kill (there is no behavioral intent even after multiple attempts).",
      keyPoints: [
        'Iterate: problem is real + solution is weak → improve the solution',
        'Pivot: problem is wrong → find a different problem to solve',
        'Kill: no behavioral intent after multiple tests → this idea should not be built',
        'The data from testing drives the decision — not gut feeling',
      ],
      examTip: 'Iterate = better solution. Pivot = different problem. Kill = move on. These are data-driven decisions, not emotional ones.',
    },
    {
      id: 'd7-c8',
      title: 'Cost of Being Wrong at Each Launch Stage',
      explanation:
        "The cost of being wrong increases exponentially as you move through launch stages. The earlier you are, the cheaper it is to learn from mistakes. Launching without sufficient validation means paying the highest possible price for learning the wrong thing — in public, with no ability to quickly fix it.",
      keyPoints: [
        'MVP: small group, fast feedback, controlled — iterate quickly, low cost',
        'Pilot: controlled users — can limit rollout if issues emerge',
        'Open Beta: everyone sees everything — can fix but can\'t hide',
        'Polished Launch: full exposure, no ability to fix quickly → maximum risk',
      ],
      examTip: '"If you launch when you can\'t iterate, you\'re gambling, not testing." Validate BEFORE polished launch.',
    },
  ],
};

export default lecture7;
