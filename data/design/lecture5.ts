import { Lecture } from '@/types';

const lecture5: Lecture = {
  id: 'design-5',
  number: 5,
  title: 'HMW, Divergence & Ideation',
  track: 'design',
  professor: 'Prof. Fayzeh Abuhaltam',
  tags: ['How Might We', 'Ideation', 'Divergent Thinking', 'Communication'],
  concepts: [
    {
      id: 'd5-c1',
      title: 'How Might We (HMW)',
      explanation:
        "How Might We (HMW) is the bridge between problem definition and ideation. It is not just a sentence format — it is a strategic decision about which part of the problem space to explore. A well-crafted HMW stays connected to the problem (keeps you relevant) while opening multiple solution directions (keeps you creative). It defines the boundaries of your creative exploration.",
      keyPoints: [
        'Template: "How might we help [user] achieve [job] despite [pain]?"',
        'Not a sentence format — a strategic direction decision',
        'Keeps you connected to the problem (not just brainstorming randomly)',
        'Opens multiple solution directions without locking one',
      ],
      examTip: 'HMW is a DIRECTION, not a question you answer once. Different HMW questions lead to fundamentally different solutions.',
    },
    {
      id: 'd5-c2',
      title: 'Four Types of HMW',
      explanation:
        "Choosing the type of HMW determines the KIND of solution you will generate. Each type pushes thinking in a different direction. The most powerful innovations often come from Type 3 (behavior change) or Type 4 (system redesign) — but Type 1 and 2 are valid and necessary depending on the problem.",
      keyPoints: [
        'Type 1 — Efficiency: "How might we reduce waiting time?" → faster systems',
        'Type 2 — Experience: "How might we reduce stress during waiting?" → emotional solutions',
        'Type 3 — Behavior Change: "How might we change when students eat?" → habit shifting',
        'Type 4 — System: "How might we redesign food distribution?" → structural innovation',
      ],
      examTip: 'HMW Type determines solution type. Type 1 → optimization. Type 2 → experience design. Type 3 → behavior change. Type 4 → structural/systemic redesign.',
    },
    {
      id: 'd5-c3',
      title: 'What HMW Does for Your Thinking',
      explanation:
        "HMW serves three cognitive functions simultaneously. First, it focuses your thinking — it picks ONE direction from many possible problem angles. Second, it expands possibilities — it doesn't define or lock a solution, just a direction. Third, it defines creative boundaries — too wide and your ideas are random; too narrow and your ideas are obvious.",
      keyPoints: [
        'Focuses: picks ONE direction from the problem space',
        'Expands: doesn\'t lock a solution, opens directions',
        'Bounds: prevents both chaos (too wide) and tunnel vision (too narrow)',
        'Perfect HMW: specific enough to guide, open enough to surprise',
      ],
    },
    {
      id: 'd5-c4',
      title: 'Divergent Thinking (Ideation)',
      explanation:
        "Divergence is the phase where you generate as many fundamentally DIFFERENT ideas as possible. The key word is 'fundamentally' — not variations of the same idea with different names, but ideas that approach the problem from completely different angles. The first idea is always obvious; the tenth idea starts getting interesting; the twentieth idea might be genius.",
      keyPoints: [
        'Quantity over quality: generate MANY ideas, not one good one',
        'No judging during divergence: kill your inner critic',
        'Fundamentally different: change the APPROACH, not the decoration',
        'Wrong: App → App with notifications → App with AI (same thinking)',
        'Right: App → Eliminate queue entirely → Shift eating times → Remove cafeteria need',
      ],
      examTip: 'Divergence failure = generating variations of the same idea. True divergence = fundamentally different directions.',
    },
    {
      id: 'd5-c5',
      title: 'How HMW Controls Divergence',
      explanation:
        "HMW and divergence work together as a system. Without a HMW to guide it, divergence produces ideas that are different but irrelevant — creative but not useful. With a well-crafted HMW, divergence produces ideas that are both different AND all relevant to the problem. The HMW is the frame; divergence fills it with content.",
      keyPoints: [
        'Without HMW: ideas are random and irrelevant',
        'With HMW: ideas are diverse AND relevant',
        'HMW = the frame; divergence = the content within the frame',
        'Change the HMW → change the entire solution space',
      ],
      examTip: 'HMW + divergence = structured creativity. Not random brainstorming — targeted exploration within a defined direction.',
    },
    {
      id: 'd5-c6',
      title: 'Communication Without Jargon',
      explanation:
        "The ability to communicate your design thinking clearly and confidently is a critical skill — especially during pitches and presentations. Your speech habits reveal how clearly you think. Fillers (um, like, maybe) are panic signals. The Pause is a power move. Tempo variation makes your audience listen harder at the crucial moments.",
      keyPoints: [
        'Speaking is thinking in real-time — your mouth speed reveals your mental clarity',
        'Fillers (umm, like, maybe) = you\'re buying time because your thinking isn\'t ready',
        'The Pause: owning silence signals confidence; fearing it signals anxiety',
        'Slow down at the KEY insight — the "because" in your problem statement',
      ],
      examTip: '"The person who fears silence seems anxious. The person who owns silence seems confident." Use the pause to signal the most important insight.',
    },
  ],
};

export default lecture5;
