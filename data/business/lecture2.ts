import { Lecture } from '@/types';

const lecture2: Lecture = {
  id: 'business-2',
  number: 2,
  title: 'PEST & SWOT Analysis',
  track: 'business',
  professor: 'Prof. Zaid Maaytah',
  tags: ['PEST', 'SWOT', 'External Analysis', 'Strategy'],
  concepts: [
    {
      id: 'b2-c1',
      title: 'The Entrepreneurial Mindset',
      explanation:
        'Before analyzing markets, entrepreneurs need the right mental framework. The entrepreneurial mindset is a combination of traits that enable someone to see and seize opportunities where others see only problems or obstacles.',
      keyPoints: [
        'Vision: see what could be, not just what is',
        'Curiosity: always asking why and what if',
        'Resilience: getting back up after failure',
        'Adaptability: changing direction without losing momentum',
        'Decisiveness: making calls under uncertainty',
      ],
      examTip: 'Entrepreneurial mindset includes: Vision, Curiosity, Innovation, Determination, Decisiveness, Adaptability, Teamwork, Risk Tolerance.',
    },
    {
      id: 'b2-c2',
      title: 'What is PEST Analysis?',
      explanation:
        'PEST analysis is a strategic framework for understanding the macro-environmental factors that affect a business or market. It stands for Political, Economic, Social, and Technological factors. PEST helps entrepreneurs evaluate external forces before entering a market or designing a business model.',
      keyPoints: [
        'P = Political: government, regulation, stability',
        'E = Economic: inflation, income, purchasing power',
        'S = Social: culture, demographics, trends',
        'T = Technological: internet, tools, infrastructure',
      ],
      examTip: 'PEST ≠ PESTEL. PESTEL adds Environmental (E) and Legal (L) — that version is covered in Design Thinking. Know which track uses which.',
    },
    {
      id: 'b2-c3',
      title: 'Political Factors (P)',
      explanation:
        'Political factors refer to how government decisions, policies, and stability shape the business environment. For an entrepreneur in Jordan, this means understanding licensing requirements, government support for startups, and any regulations that could help or block your business.',
      keyPoints: [
        'Government policies and regulations affecting your industry',
        'Political stability (or instability) in your target market',
        'Public funding availability and incentives for startups',
        'Access to licenses, permits, and legal recognition',
      ],
      example:
        "In Jordan, the government has created startup-friendly initiatives like King Abdullah II's National Entrepreneurship Center (INJAZ Jordan), which represents a positive political factor for startups.",
    },
    {
      id: 'b2-c4',
      title: 'Economic Factors (E)',
      explanation:
        'Economic factors capture the financial conditions of the environment in which your business operates. These determine whether people can afford your product, whether you can access capital, and how costs will behave over time.',
      keyPoints: [
        'Inflation and interest rates affect costs and borrowing',
        'Unemployment levels affect both customer spending and talent availability',
        'Consumer purchasing power: can your target segment afford your price?',
        'Availability of capital and credit for startup funding',
      ],
      examTip: 'Economic factors affect the O and T in SWOT — rising purchasing power = Opportunity; recession = Threat.',
    },
    {
      id: 'b2-c5',
      title: 'Social Factors (S)',
      explanation:
        'Social factors capture the human side of the market — the cultural values, demographic trends, and behavioral patterns that shape what people want and expect. Understanding social factors prevents you from building something technically sound but culturally irrelevant.',
      keyPoints: [
        'Cultural values and social norms (what is acceptable)',
        'Demographics: age, gender, family size, education levels',
        'Lifestyle changes: how people are living and working differently',
        'Education and literacy levels in your target market',
      ],
      example:
        'The rise of health consciousness in Jordan (social factor) has created opportunities for fitness apps, organic food brands, and wellness platforms.',
    },
    {
      id: 'b2-c6',
      title: 'Technological Factors (T)',
      explanation:
        'Technological factors describe the available tools, infrastructure, and technological trends that enable or constrain your business. In the digital age, this is especially critical — the difference between a viable and non-viable startup can simply be internet penetration in your target market.',
      keyPoints: [
        'Internet and mobile penetration in your market',
        'Existing infrastructure (4G/5G, logistics networks)',
        'Emerging technologies (AI, blockchain, automation)',
        'Digital platforms and tools available to build on',
      ],
      examTip: 'Tech factors can be both Opportunities (new tools to use) and Threats (disruption from new tech).',
    },
    {
      id: 'b2-c7',
      title: 'SWOT Analysis',
      explanation:
        'SWOT is a strategic planning tool that helps you assess both internal capabilities (Strengths and Weaknesses) and external conditions (Opportunities and Threats). The power of SWOT is linking what you have with what the market offers — building strategy from the intersection.',
      keyPoints: [
        'Strengths: internal positives — what you do well',
        'Weaknesses: internal negatives — gaps or limitations',
        'Opportunities: external positives — market trends, unmet needs',
        'Threats: external negatives — competition, regulation, disruption',
      ],
      example:
        'A startup with strong tech skills (Strength) spotting a gap in digital services in Jordan (Opportunity) = strategy: digital-first service. Their lack of funding (Weakness) combined with an aggressive competitor (Threat) = risk to manage.',
      examTip: 'Strengths + Weaknesses = INTERNAL. Opportunities + Threats = EXTERNAL. PEST analysis informs the O and T of SWOT.',
    },
    {
      id: 'b2-c8',
      title: 'Linking PEST to SWOT',
      explanation:
        'PEST and SWOT are not separate tools — they work together. Your PEST analysis feeds directly into the Opportunities and Threats sections of your SWOT. A positive political factor (like government support for tech) = Opportunity. A negative economic factor (like low purchasing power) = Threat.',
      keyPoints: [
        'PEST informs the external half of SWOT (O and T)',
        'Positive PEST factors → Opportunities',
        'Negative PEST factors → Threats',
        'Internal analysis (your team, resources) → S and W',
      ],
      examTip: 'In an exam question about SWOT: always ask whether the factor described is internal (S/W) or external (O/T). A competitor opening = external = Threat.',
    },
  ],
};

export default lecture2;
