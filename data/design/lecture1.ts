import { Lecture } from '@/types';

const lecture1: Lecture = {
  id: 'design-1',
  number: 1,
  title: 'Intro to Design Thinking & Human-Centered Design',
  track: 'design',
  professor: 'Prof. Fayzeh Abuhaltam',
  tags: ['Human-Centered Design', 'Cognitive Bias', 'Human Hacks', 'Observation'],
  concepts: [
    {
      id: 'd1-c1',
      title: 'Why Startups Fail (Design Perspective)',
      explanation:
        'The design thinking track begins with a brutal truth: most startups fail because they build for themselves, not for their users. They start with a solution (an exciting technology or idea) and then try to find a problem it solves — backwards. The result is products nobody asked for, solving problems nobody has.',
      keyPoints: [
        'Bad innovation: Idea → Build → Hope people want it',
        'Good innovation: People → Problem → Solution',
        'Teams of similar backgrounds = same biases = same blind spots',
        'Starting with technology before understanding the human need',
      ],
      examTip: 'Design thinking always starts with PEOPLE and their needs — never with a solution or technology.',
    },
    {
      id: 'd1-c2',
      title: 'Cognitive Biases in Innovation',
      explanation:
        "Our brains have systematic patterns of thinking that distort reality. In design, these biases are dangerous because they lead us to design for ourselves rather than our users. The most relevant biases for innovators are the ones that make us assume we understand users when we don't.",
      keyPoints: [
        'Halo Effect: one impressive feature fools us into ignoring flaws',
        'Similarity Bias (Like-Me Bias): assuming users behave just like us',
        'Confirmation Bias: seeking information that confirms our existing idea',
        'Stereotyping: over-generalizing user groups into one type',
      ],
      example:
        "A software engineer builds an app assuming all users are as tech-savvy as they are. That's Similarity Bias. They only test it with engineer friends (Confirmation Bias). Then they dismiss negative feedback as users 'not understanding' (Halo Effect).",
      examTip: 'Your education and expertise is ALSO a bias — it filters how you see reality. Experts often design for experts, not for real users.',
    },
    {
      id: 'd1-c3',
      title: 'Human-Centered Design',
      explanation:
        "Human-centered design (HCD) is a design philosophy that places the human being at the center of every decision. Rather than starting with what you want to build, you start with who will use it. Designers observe: behaviors, frustrations, habits, workarounds, and environments — everything that reveals what people actually need vs. what they say they need.",
      keyPoints: [
        'Start with people: their frustrations, needs, behaviors',
        'Observe behavior — don\'t just ask opinions',
        'Users describe solutions; designers discover needs',
        'Environments matter: context changes behavior',
      ],
      examTip: '"Users describe solutions. Designers discover needs." This is the core of HCD.',
    },
    {
      id: 'd1-c4',
      title: 'Decoding User Complaints',
      explanation:
        "What users say is rarely what they actually need. User complaints are symptoms — the real problem lies one level deeper. Design thinking trains you to decode surface-level complaints into root-level needs. This skill separates designers who build the right thing from those who build what was asked for.",
      keyPoints: [
        '"I wish professors uploaded slides earlier" → real need: predictability and control',
        '"I hate group projects" → real need: fair workload distribution and accountability',
        '"I need a bigger phone battery" → real need: anxiety reduction from fear of disconnection',
        'Always ask: what is the EMOTION behind this complaint?',
      ],
      examTip: 'Always go one level deeper than what the user says. The surface request is never the real need.',
    },
    {
      id: 'd1-c5',
      title: 'Design Thinking is NOT About Feeling',
      explanation:
        "A common misconception is that design thinking is a soft, subjective, 'let\'s empathize' exercise. It is not. It is a structured, rigorous method for minimizing cognitive bias through systematic observation, research, and testing. The goal is 'Observation without Judgment' — accepting you might be completely wrong about the problem.",
      keyPoints: [
        'Not about intuition or gut feeling',
        '"Observation without Judgment": accept that your assumptions might be wrong',
        'Uses structured methods to minimize bias',
        'Minimizing bias leads to better problem definition which leads to better solutions',
      ],
    },
    {
      id: 'd1-c6',
      title: 'Human Hacks',
      explanation:
        "A Human Hack is a non-standard workaround created by a user because a system or product failed to meet their needs. When you see a workaround, you are looking at a gap in design — an unmet need that someone is solving with their own improvised solution. Human hacks are goldmines for design thinking researchers.",
      keyPoints: [
        'Definition: non-standard workaround revealing an unmet need',
        'Types: Infrastructure failure, Design failure, Trust failure, Process failure',
        'Examples: using a sticky note on your screen = design failure in notification systems',
        'Where there\'s a workaround, there\'s a business opportunity',
      ],
      example:
        "In Amman: people use WhatsApp groups to coordinate neighborhood deliveries because no app handles it well. This hack reveals an unmet need: local hyper-delivery coordination.",
      examTip: 'A human hack tells you WHERE a system failed. The user\'s workaround shows you WHAT they actually need.',
    },
    {
      id: 'd1-c7',
      title: 'The Bootcamp Design Journey',
      explanation:
        "The design thinking process taught in this bootcamp is an eight-stage journey. It is intentionally non-linear — you can (and should) go back to earlier stages when you learn something new. The key insight is this: business is about reaching the destination quickly; design is about walking through the maze of discovery without skipping steps.",
      keyPoints: [
        'Understand → Research → Define → Ideate → Prototype → Test → Evaluate → Pitch',
        'Non-linear: iteration is expected and encouraged',
        'The maze analogy: don\'t jump over the maze — walk through it',
        '"Discovery" is the hardest phase, but it determines everything after it',
      ],
      examTip: 'The design journey cannot be skipped. Jumping to solutions before defining the problem = building the wrong thing.',
    },
  ],
};

export default lecture1;
