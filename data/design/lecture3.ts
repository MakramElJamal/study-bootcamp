import { Lecture } from '@/types';

const lecture3: Lecture = {
  id: 'design-3',
  number: 3,
  title: 'The World Around the Problem',
  track: 'design',
  professor: 'Prof. Fayzeh Abuhaltam',
  tags: ['PESTEL', 'System Thinking', 'Jobs-to-be-Done', 'Kano Model'],
  concepts: [
    {
      id: 'd3-c1',
      title: 'Business vs. Design Perspective',
      explanation:
        "Business and design look at the same reality through different lenses. Business sees the MAP — where to go, what the destination is, how to reach it efficiently. Design sees the TRAP — what is blocking people from getting what they need, why systems fail them. Neither view alone is sufficient. Human hacks are not random behaviors — they are rational responses to systematic failures.",
      keyPoints: [
        'Business view: destination-focused, opportunity-seeking',
        'Design view: obstacle-focused, failure-revealing',
        'Human hacks = rational responses to systematic failure',
        'Both views together = complete picture',
      ],
    },
    {
      id: 'd3-c2',
      title: 'PESTEL Framework',
      explanation:
        "PESTEL is the expanded version of PEST analysis used in Design Thinking to understand the external pressures that shape user behavior. Unlike PEST (which is strategic), PESTEL in design is about understanding WHY users behave the way they do — every pressure creates behavior, and you are solving for the human experiencing these pressures.",
      keyPoints: [
        'Political: policies, stability, tax, regulation',
        'Economic: inflation, purchasing power, employment',
        'Social: demographics, cultural attitudes, buying patterns',
        'Technological: innovation, automation, tech infrastructure',
        'Environmental: sustainability, climate concerns',
        'Legal: employment laws, consumer protection, IP',
      ],
      examTip: 'PESTEL adds Environmental + Legal to PEST. Design thinking uses PESTEL; Business track uses PEST. Know which is which.',
    },
    {
      id: 'd3-c3',
      title: 'System Thinking: You\'re Not Solving for One Person',
      explanation:
        "Your target user does not exist in isolation. They live inside a system — family, culture, workplace, economy. In Jordan, this is particularly true: you often don\'t just sell to the user, you sell to their entire environment. If the user says YES but their environment says NO, your idea is dead. Design thinking requires mapping this entire system, not just the individual.",
      keyPoints: [
        'User exists inside: family, community, workplace, economy, culture',
        'Decision-making is often collective or socially constrained',
        'In Jordan: family, peers, and social norms heavily influence decisions',
        'If someone in the user\'s environment blocks adoption → idea fails',
      ],
      example:
        "You design a period-tracking app for teenage girls in Jordan. She wants it (user YES). Her mother finds it inappropriate (environment NO). Result: the product fails despite being technically useful.",
      examTip: 'System thinking: always ask "who else affects whether this user adopts my product?" Map everyone in the system.',
    },
    {
      id: 'd3-c4',
      title: 'Jobs-to-Be-Done (JTBD)',
      explanation:
        "Jobs-to-Be-Done theory, developed by Clayton Christensen, reframes how we understand why people buy products. People don\'t buy products — they hire them to do a job. That job has three dimensions: functional (the practical task), social (how they want to appear to others), and emotional (how they want to feel). Understanding all three jobs reveals the complete motivation.",
      keyPoints: [
        'Functional Job: the practical task (speed, cost, efficiency)',
        'Social Job: how using this makes them appear to others',
        'Emotional Job: how using this makes them feel internally',
        'People hire products to do jobs — understand the job first',
      ],
      example:
        '"People don\'t buy a drill; they hire a drill to make a hole to hang a family photo — to feel like a good parent." The drill\'s real job is emotional: being a good parent.',
      examTip: 'JTBD has three types: Functional (task), Social (appearance), Emotional (feeling). The emotional job is often the most powerful.',
    },
    {
      id: 'd3-c5',
      title: 'Kano Model: Value Layers',
      explanation:
        "The Kano Model, developed by Noriaki Kano, categorizes product features by how they affect customer satisfaction. Different features create different types of value — and what delights customers today becomes expected tomorrow. Understanding where your features sit on the Kano model helps you prioritize development.",
      keyPoints: [
        'Required: must-have for survival (absence = deal-breaker)',
        'Expected: baseline assumption (users expect it without asking)',
        'Desired: nice-to-have (users prefer it if available)',
        'Unexpected: delight features (users didn\'t know they wanted it)',
      ],
      example:
        'For a hotel: Working WiFi = Required (absence kills). Clean sheets = Expected. Free breakfast = Desired. Personalized welcome note = Unexpected/delightful.',
      examTip: 'Kano layers: Required (must-have) → Expected (assumed) → Desired (nice-to-have) → Unexpected (delightful).',
    },
    {
      id: 'd3-c6',
      title: 'Problem Statement Formula',
      explanation:
        'A well-crafted problem statement is the foundation of everything that follows in design thinking. A good problem statement names a specific user in a specific situation, identifies a root cause, and describes the real consequence. A bad problem statement is vague, skips the root cause, and could describe any user anywhere.',
      keyPoints: [
        'Formula: "[User] struggles with [specific situation] because [root cause], leading to [real consequence]"',
        'Must be specific: which user, which situation, which cause',
        'Must identify root cause, not surface symptom',
        'Must name real consequence (not just "it\'s inconvenient")',
      ],
      example:
        'Good: "Busy students on campus skip meals during peak hours because food queues are unpredictable, leading to fatigue and reduced academic performance." Bad: "Students need better food on campus." — too vague, no root cause.',
      examTip: 'A strong problem statement has: specific user + specific situation + root cause + real consequence. Missing any one element = weak problem statement.',
    },
  ],
};

export default lecture3;
