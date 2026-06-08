import { Lecture } from '@/types';

const lecture1: Lecture = {
  id: 'business-1',
  number: 1,
  title: 'Innovation Cycle & Design Thinking',
  track: 'business',
  professor: 'Prof. Zaid Maaytah',
  tags: ['Innovation', 'Design Thinking', 'Entrepreneurship', 'Growth Mindset'],
  concepts: [
    {
      id: 'b1-c1',
      title: 'What is Innovation?',
      explanation:
        'Innovation is the process of creating and implementing new ideas that generate value — whether economic, social, or technological. It goes beyond invention: an idea only counts as innovation when it is actually put into practice and creates real value for people or organizations.',
      keyPoints: [
        'Can be new products, services, processes, or business models',
        'Innovation ≠ invention — it must generate value',
        'Can be incremental (small improvements) or disruptive (game-changing)',
        'Requires both creativity AND execution',
      ],
      examTip: 'Innovation is not just about having a new idea — it must create real value to count.',
    },
    {
      id: 'b1-c2',
      title: 'What is Entrepreneurship?',
      explanation:
        'Entrepreneurship is the process of identifying opportunities, mobilizing resources, and creating value through new ventures. It transforms innovative ideas into sustainable businesses or organizations. Economists consider entrepreneurship a "factor of production" alongside land, labor, and capital.',
      keyPoints: [
        'Involves opportunity identification and resource mobilization',
        'Transforms ideas into sustainable businesses',
        'A factor of production (alongside land, labor, capital)',
        'Requires both vision and practical action',
      ],
      examTip: 'Entrepreneurship is a factor of production — know this alongside land, labor, and capital.',
    },
    {
      id: 'b1-c3',
      title: 'Why Business and Design Work Together',
      explanation:
        'Innovation happens at the intersection of three forces: Desirability (what people want), Feasibility (what technology can do), and Viability (what makes business sense). Design focuses on understanding users and creating solutions. Business focuses on creating sustainable value. Neither alone is enough.',
      keyPoints: [
        'Desirability: do people actually want this?',
        'Feasibility: can we actually build this?',
        'Viability: can we make money from this?',
        'All three circles must overlap for good innovation',
      ],
      examTip: 'The three circles — Desirable, Feasible, Viable — must ALL overlap for true innovation.',
    },
    {
      id: 'b1-c4',
      title: 'Design Thinking Process (Stanford d.school)',
      explanation:
        "Design thinking is a human-centered problem-solving process developed by Stanford's d.school. It starts with people and their needs — not with technology or business models. The process is iterative, meaning you can go back and forth between stages as you learn more.",
      keyPoints: [
        'Empathize: deeply understand the user',
        'Define: articulate the real problem',
        'Ideate: generate many possible solutions',
        'Prototype: build quick, cheap representations',
        'Test: get feedback from real users',
      ],
      example:
        "Airbnb used design thinking to figure out why hosts weren't signing up. They discovered photos were bad quality. Solution: they sent professional photographers to host properties. Bookings skyrocketed.",
      examTip: 'Design thinking starts with PEOPLE, not technology. Empathize is always step one.',
    },
    {
      id: 'b1-c5',
      title: 'Overlap Between Design Thinking and Entrepreneurship',
      explanation:
        'Design thinking and entrepreneurship share a deep philosophical overlap: both emphasize understanding real problems before jumping to solutions, both rely on experimentation and iteration, and both learn from users rather than from assumptions. Design thinking tells you WHAT to build; entrepreneurship determines HOW to deliver and scale it.',
      keyPoints: [
        'Both start with understanding problems deeply',
        'Both use experimentation and iteration',
        'Both learn from users, not from internal assumptions',
        'Design thinking = what to build; Entrepreneurship = how to scale it',
      ],
    },
    {
      id: 'b1-c6',
      title: '3Ms of Entrepreneurship',
      explanation:
        "The 3Ms framework captures the three essential elements every entrepreneur needs to manage. Mind is the driver — your mindset determines your direction, resilience, and ability to adapt when things go wrong. Market is the map — it tells you where value exists and who needs what you're building. Money is the fuel — without it you can't go far, and without managing it wisely, you'll run out quickly.",
      keyPoints: [
        'Mind: your mindset — resilience, adaptability, vision',
        'Market: where value exists — your target and direction',
        'Money: the fuel — must be acquired and managed wisely',
        'All three must work together for a sustainable venture',
      ],
      examTip: 'The 3Ms: Mind, Market, Money. Mind = driver. Market = map. Money = fuel.',
    },
    {
      id: 'b1-c7',
      title: 'Growth Mindset for Entrepreneurs',
      explanation:
        'A growth mindset, coined by Carol Dweck, is the belief that abilities can be developed through dedication and hard work. For entrepreneurs, this means embracing failure as a learning opportunity rather than proof of incompetence. It is foundational to surviving the uncertainty of building something new.',
      keyPoints: [
        'Believes abilities develop through effort, not fixed at birth',
        'Embraces failure as a learning signal, not a verdict',
        'Key traits: Curiosity, Vision, Risk Tolerance, Resilience, Adaptability, Persistence',
        'Contrasted with fixed mindset: "I either have it or I don\'t"',
      ],
      examTip: 'Growth mindset = abilities can be developed. Fixed mindset = abilities are fixed. Entrepreneurs need growth mindset.',
    },
    {
      id: 'b1-c8',
      title: 'Business Agility',
      explanation:
        "Business agility is the ability of an organization to adapt quickly to changes in markets, technology, and customer needs. In startup environments, this is not a nice-to-have — it's survival. Agile organizations don't wait for perfect information; they move, learn, and adjust continuously.",
      keyPoints: [
        'Rapid experimentation: test ideas fast',
        'Continuous learning: extract insights from every action',
        'Iterative development: build in cycles, not big bangs',
        'Flexibility: decisions can change as conditions change',
      ],
    },
    {
      id: 'b1-c9',
      title: 'High Performance Teams & CATme',
      explanation:
        'High-performance teams are not just groups of talented individuals — they are groups that collaborate effectively. In the context of this bootcamp, CATme (Comprehensive Assessment of Team Member Effectiveness) is a structured peer feedback system that helps teams stay accountable and fair.',
      keyPoints: [
        'High performance = collaboration, not just individual talent',
        'CATme: peer feedback system for team assessment',
        'Increases accountability among team members',
        'Identifies contribution imbalances before they destroy the team',
      ],
      examTip: 'CATme stands for Comprehensive Assessment of Team Member Effectiveness.',
    },
  ],
};

export default lecture1;
