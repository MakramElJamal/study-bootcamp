import { Lecture } from '@/types';

const lecture4: Lecture = {
  id: 'design-4',
  number: 4,
  title: 'Persona, Jobs-to-Be-Done & Problem Definition',
  track: 'design',
  professor: 'Prof. Fayzeh Abuhaltam',
  tags: ['Persona', 'Pain Intensity', 'Beachhead', 'Problem Definition'],
  concepts: [
    {
      id: 'd4-c1',
      title: 'The Myth of "Everyone"',
      explanation:
        "The most dangerous customer definition is 'everyone.' When your target customer is everyone, you have no customer. Products designed for everyone are designed for no one — they make compromises that please nobody deeply. The starting point of good design thinking is radical specificity: narrow your focus until you can see a real human in a real situation.",
      keyPoints: [
        '"Students", "People", "Users" are categories — not customer segments',
        'Vague segment = no product-market fit',
        'Specific segment = clear design decisions, clear value proposition',
        'If you can\'t describe exactly who you\'re designing for → go back to research',
      ],
      examTip: '"Students" is not a customer segment. "22-year-old final-year engineering student in Amman who commutes daily" is a segment.',
    },
    {
      id: 'd4-c2',
      title: 'B2C vs. B2B (Design Lens)',
      explanation:
        "From a design perspective, B2C and B2B require fundamentally different approaches. B2C means solving for a specific human — their emotions, habits, and day-to-day context matter enormously. B2B means solving inside a system — you must understand the decision-making hierarchy, institutional risk tolerance, and what multiple stakeholders need.",
      keyPoints: [
        'B2C: solving for a human — emotions, behavior, daily habits',
        'B2B: solving inside a system — decision-makers, risk, control',
        'B2B user and buyer are often different people',
        'If the user is not paying → understand who IS paying and what they care about',
      ],
      examTip: 'Design for the SYSTEM in B2B, not just the end user. The decision-maker has different needs than the user.',
    },
    {
      id: 'd4-c3',
      title: 'What Makes a Real User',
      explanation:
        "A 'user' in design thinking is not a demographic category — it is a specific person in a specific moment with a specific struggle. 'University students' is not a user. 'A student who has 20 minutes between classes, is hungry, and finds the cafeteria queue too long' is a user. The difference is the specificity of situation, behavior, and struggle.",
      keyPoints: [
        'User = in a specific situation + doing something specific + with a real struggle',
        '"If you can\'t see the moment, you don\'t understand the problem"',
        'The situation creates context; context creates behavior; behavior reveals needs',
        'Vague user = vague problem = vague (useless) solution',
      ],
      examTip: '"If you can\'t see the moment, you don\'t understand the problem." This is the test for whether your user is real.',
    },
    {
      id: 'd4-c4',
      title: 'Persona Components',
      explanation:
        "A persona is a concrete, research-based representation of your target user. Unlike a demographic profile, a persona captures behavior patterns, situational context, and emotional states. A good persona lets your whole team make design decisions without needing to do additional research — because the persona is so clear it acts as a stand-in for the real user.",
      keyPoints: [
        'When does the problem happen? → the triggering situation',
        'What does the person actually do? → observable behavior',
        'What are they trying to avoid? → pains',
        'What are they trying to feel? → emotional job',
      ],
      example:
        'Persona: Rania, 21-year-old student at HTU. The problem happens: between 12-1pm when she has 30 minutes before her next lecture. She usually: checks her phone for food delivery options but abandons when she sees 40-min wait. Avoiding: missing her lecture. Wants to feel: in control of her time.',
    },
    {
      id: 'd4-c5',
      title: 'Beachhead Persona',
      explanation:
        "A beachhead persona is your most focused, highest-priority target: the one person who has the problem so severely that they will change their behavior to solve it. This comes from military strategy (the beachhead is the first small piece of land you capture before expanding). For startups, your beachhead is the user who will try your unproven product because they are in too much pain to wait for a perfect solution.",
      keyPoints: [
        'Most focused target: Segment + real human + real moment + intense pain',
        'This user CANNOT ignore the problem — it demands action',
        'Shark bite: urgent, emotional, demands action NOW',
        'Mosquito bite: annoying, ignored, tolerated indefinitely',
      ],
      examTip: 'Beachhead = your most focused first target. Needs to be a SHARK BITE problem — not a mosquito bite.',
    },
    {
      id: 'd4-c6',
      title: 'Pain Intensity: Shark Bite vs. Mosquito Bite',
      explanation:
        "Not all pains are equal. The intensity of a pain determines whether users will change behavior to fix it. A shark bite pain is urgent, emotionally charged, and demands immediate action — users will try unproven solutions to escape it. A mosquito bite pain is annoying but tolerable — users will complain but never change their routine to fix it. Build for shark bites.",
      keyPoints: [
        'Shark bite: urgent, emotional, demands action NOW',
        'Mosquito bite: annoying, tolerated, never triggers behavior change',
        'If it\'s a mosquito bite → people won\'t switch products to solve it',
        'Build for shark bite problems: that\'s where behavioral change happens',
      ],
      examTip: 'Mosquito bite = will not drive behavior change. Shark bite = will. Your product must solve a shark bite to get early adoption.',
    },
    {
      id: 'd4-c7',
      title: 'The "5 Whys" — Root Cause Analysis',
      explanation:
        "The 5 Whys is a technique for drilling from the surface symptom to the root cause by asking 'why?' five times (or as many times as needed). Each answer reveals a deeper layer of the problem until you hit the true root cause that, if solved, resolves everything above it. This transforms problem experts into solution architects.",
      keyPoints: [
        'Ask "why?" to each answer until you reach the root cause',
        'Surface symptom ≠ root cause',
        'Example: "Why are students skipping meals?" → queue too long → why? → unpredictable timing',
        'Once you define the cage (the real problem), you can find the exit (the solution)',
      ],
      examTip: '5 Whys = drill down to root cause. The answer at the bottom is the one worth solving.',
    },
    {
      id: 'd4-c8',
      title: 'Jargon as a Warning Signal',
      explanation:
        "Using jargon is a symptom of unclear thinking. When you cannot explain your idea to someone without any background, your idea is not clear enough yet. The 'Jargon Assassin' rule: if you cannot explain your field to a 10-year-old or your grandmother, your thinking has not yet reached the level of clarity required to design a real solution.",
      keyPoints: [
        'Jargon = symptom of unclear thinking',
        '"Speak Human, Not Corporate" — eliminate all buzzwords',
        'If you can\'t explain it simply → you don\'t understand it deeply enough',
        'Clear communication → clear design decisions → better product',
      ],
      examTip: '"Speak Human, Not Corporate." If your problem statement uses buzzwords, simplify it until a real person understands it instantly.',
    },
  ],
};

export default lecture4;
