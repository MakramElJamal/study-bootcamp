import { Lecture } from '@/types';

const lecture2: Lecture = {
  id: 'design-2',
  number: 2,
  title: 'Observe, Engage & Immerse',
  track: 'design',
  professor: 'Prof. Fayzeh Abuhaltam',
  tags: ['Research Methods', 'Observation', 'User Research', 'Primary vs Secondary'],
  concepts: [
    {
      id: 'd2-c1',
      title: 'The Problem with Self-Reporting',
      explanation:
        "The foundational challenge of user research: people are unreliable narrators of their own behavior. There are three layers of unreliability: people don't always do what they say they do (they report ideal behavior), they don't always do what they think they do (unconscious behavior), and they don't always do what you tell them to do (behavior changes in artificial contexts).",
      keyPoints: [
        'People don\'t always do what they SAY they do',
        'People don\'t always do what they THINK they do',
        'People don\'t always do what you TELL them to do',
        'Conclusion: observe behavior, don\'t just ask about it',
      ],
      examTip: 'Observed behavior > stated preference. Always. This is the core justification for observation methods.',
    },
    {
      id: 'd2-c2',
      title: 'Observe',
      explanation:
        "Observation means watching what people actually do in their natural context — without intervening, guiding, or suggesting. You are not helping, not correcting, not hinting. You are simply recording what happens. What you are looking for: habits that reveal what people value, workarounds that reveal what systems fail, friction points that reveal unmet needs, and moments of hesitation that reveal confusion.",
      keyPoints: [
        'Watch what people actually do (not what they say they do)',
        'Do not intervene, guide, or suggest during observation',
        'Look for: habits, workarounds, friction, hesitation',
        'Context matters: behavior at home ≠ behavior in a lab',
      ],
      examTip: 'Pure observation = NO intervention. The moment you speak, you contaminate the observation.',
    },
    {
      id: 'd2-c3',
      title: 'Engage',
      explanation:
        "Engagement moves from passive watching to active conversation — but the conversation follows specific rules. You do not ask direct questions about opinions or preferences (they give unreliable answers). You ask about past behavior, specific incidents, and concrete experiences. You are decoding the patterns revealed by their behavior, not collecting their opinions.",
      keyPoints: [
        'Ask behavioral questions: "Tell me about the last time you..."',
        'Not: "Would you use this?" (hypothetical = unreliable)',
        'Look for patterns: repeated behaviors reveal real needs',
        'Behavioral decoding: phone-checking = boredom/habit; avoiding = discomfort',
      ],
      example:
        'Instead of asking "Do you like group projects?" ask "Tell me about the last group project you did. What happened?" The story reveals the truth that the opinion question never would.',
      examTip: 'Never ask "Would you use this?" Ask "When was the last time you faced this problem?" Past behavior predicts future behavior.',
    },
    {
      id: 'd2-c4',
      title: 'Immerse',
      explanation:
        "Immersion is the deepest level of research: you don't just observe or talk — you experience the problem yourself. Observation shows you WHAT happens. Engagement shows you WHY it happens. Immersion shows you HOW it FEELS. The goal is empathy through direct experience, not sympathy from a distance.",
      keyPoints: [
        'Experience the user\'s world directly',
        'Observation = WHAT happens; Engagement = WHY; Immersion = HOW IT FEELS',
        'No explanation can substitute for direct experience',
        '"The closer you get to the problem, the clearer it becomes"',
      ],
      example:
        "Spend one day writing everything with your non-dominant hand. No explanation of 'this is hard for left-handed people' will create the same understanding as experiencing it yourself.",
      examTip: 'Immersion generates EMPATHY — understanding from the inside, not sympathy from the outside.',
    },
    {
      id: 'd2-c5',
      title: 'Primary vs. Secondary Research',
      explanation:
        "Research falls into two categories. Primary research is direct — you go to users and observe, talk, or experience. Secondary research is indirect — you study existing data, reports, and articles. Both are necessary. Secondary research tells you what is known. Primary research reveals what is really happening for your specific users in their specific context.",
      keyPoints: [
        'Primary (Direct): Observe, Talk (behavioral interviews), Experience',
        'Secondary (Indirect): Reports, statistics, articles, existing studies',
        'Market research replaces assumptions with evidence',
        '"You think you understand a problem — you saw a symptom"',
      ],
      examTip: 'Primary = direct contact with users. Secondary = existing data. Need both, but primary for design insights.',
    },
    {
      id: 'd2-c6',
      title: 'User + Need + Context Framework',
      explanation:
        "Every research insight you collect should be structured around three elements: WHO the user is, WHAT they need, and in WHAT CONTEXT that need arises. Without context, even a real user with a real need may not be worth solving for — the context determines urgency, frequency, and behavioral readiness to change.",
      keyPoints: [
        'User: specific person with specific characteristics',
        'Need: the underlying goal or pain (not the surface complaint)',
        'Context: when, where, under what circumstances the need occurs',
        'All three together = a viable design challenge',
      ],
      examTip: 'Research insight formula: User + Need + Context. Missing one element = weak insight that leads to weak problem statement.',
    },
  ],
};

export default lecture2;
