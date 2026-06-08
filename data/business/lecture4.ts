import { Lecture } from '@/types';

const lecture4: Lecture = {
  id: 'business-4',
  number: 4,
  title: 'Business Model Canvas',
  track: 'business',
  professor: 'Prof. Zaid Maaytah',
  tags: ['BMC', 'Value Proposition', 'Revenue Streams', 'Business Model'],
  concepts: [
    {
      id: 'b4-c1',
      title: 'What is a Business Model?',
      explanation:
        'A business model describes how an organization creates, delivers, and captures value. It answers four fundamental questions: Who do you serve? What value do you offer? How do you deliver it? And how do you make money from it? The Business Model Canvas (BMC), developed by Alexander Osterwalder, is a one-page strategic tool that captures all key elements visually.',
      keyPoints: [
        'Who you serve: Customer Segments',
        'What you offer: Value Proposition',
        'How you deliver: Channels + Key Activities',
        'How you make money: Revenue Streams',
      ],
      examTip: 'BMC has 9 building blocks. Know each block and which category it belongs to (Market, Operations, Money).',
    },
    {
      id: 'b4-c2',
      title: 'BMC Structure: Three Questions',
      explanation:
        "The BMC is organized around three strategic questions that mirror the innovation framework: Is it Desirable? (right side — customers and channels), Is it Feasible? (left side — resources, activities, partners), and Is it Viable? (bottom — cost structure and revenue streams). Every block answers one of these three questions.",
      keyPoints: [
        'Right side = Market & Customer (Desirable?)',
        'Center = Value Proposition (the bridge)',
        'Left side = Operations (Feasible?)',
        'Bottom = Money (Viable?)',
      ],
      examTip: 'Value Proposition is at the CENTER of the BMC — it connects customer needs to operational delivery.',
    },
    {
      id: 'b4-c3',
      title: 'Customer Segments',
      explanation:
        "Customer Segments define the specific groups of people or organizations your business aims to serve. A common mistake is listing everyone — but if your customer is everyone, you have no customer. Segments can be defined by demographics (age, gender), geography (city, country), behavior (usage patterns), or psychographics (values, lifestyle).",
      keyPoints: [
        'Define who specifically you serve',
        'Can be segmented by: demographics, geography, behavior, psychographics',
        'Beachhead segment: your most focused first target',
        'Different segments may need different value propositions',
      ],
      examTip: 'If you have no defined customer segment, you have no customer. "Everyone" is not a segment.',
    },
    {
      id: 'b4-c4',
      title: 'Value Proposition',
      explanation:
        "The Value Proposition is the collection of products and services that create value for a specific customer segment. It answers: what problem are you solving? What makes you different? What benefits do customers get? In the BMC exam question, a statement describing what unique benefit you offer belongs in the Value Proposition block.",
      keyPoints: [
        'What problem does your product solve?',
        'What makes you different from alternatives?',
        'What job does the customer hire your product to do?',
        'Can be quantitative (price, speed) or qualitative (design, experience)',
      ],
      example:
        '"Affordable stylish designs for students who want comfort without paying luxury prices" — this is a value proposition statement. It defines the customer (students), the benefit (stylish + affordable), and the differentiation (not luxury prices).',
      examTip: 'The Value Proposition sits at the CENTER of the BMC canvas. Any statement about "what unique benefit you offer" belongs here.',
    },
    {
      id: 'b4-c5',
      title: 'Channels',
      explanation:
        "Channels describe how your business reaches and delivers value to its customer segments. There are three types: Sales Channels (how customers buy from you), Communication Channels (how you tell them you exist), and Distribution Channels (how the product physically gets to them).",
      keyPoints: [
        'Sales: physical stores, e-commerce, sales teams',
        'Communication: social media, ads, email, PR',
        'Distribution: delivery logistics, app stores, retail',
        'Can be direct (you sell) or indirect (through intermediaries)',
      ],
    },
    {
      id: 'b4-c6',
      title: 'Customer Relationships',
      explanation:
        'Customer Relationships describe the type of relationship you establish with each customer segment. This affects customer acquisition (getting new customers), retention (keeping them), and upselling (getting them to buy more). The type of relationship must align with your value proposition and customer expectations.',
      keyPoints: [
        'Personal Assistance: direct human interaction (e.g., customer support)',
        'Self-Service: tools/resources for customers to help themselves',
        'Automated Services: personalized automated interactions (e.g., Netflix recommendations)',
        'Communities: user forums, groups that create value between users',
      ],
    },
    {
      id: 'b4-c7',
      title: 'Revenue Streams',
      explanation:
        "Revenue Streams represent the cash a company generates from each customer segment. Ask yourself: what value is each customer segment truly willing to pay for? The answer determines your revenue model. Different segments can have different revenue streams within the same business.",
      keyPoints: [
        'Product Sales: one-time purchase (selling a physical product)',
        'Service Fees: charging for delivering a service',
        'Subscriptions: recurring access fee (SaaS, Netflix)',
        'Licensing: charging for IP or content usage',
        'Advertising: selling attention to advertisers',
      ],
      examTip: 'Revenue Streams ≠ Profit. Revenue = what comes in. Profit = Revenue − Costs.',
    },
    {
      id: 'b4-c8',
      title: 'Key Resources',
      explanation:
        "Key Resources are the most important assets required to deliver your value proposition, reach markets, maintain customer relationships, and earn revenue. Without the right resources, even a great business model collapses.",
      keyPoints: [
        'Physical: facilities, machines, vehicles, equipment',
        'Intellectual: patents, brands, data, proprietary software',
        'Human: skilled people, domain experts, creative talent',
        'Financial: cash, credit lines, investment capital',
      ],
    },
    {
      id: 'b4-c9',
      title: 'Key Activities',
      explanation:
        "Key Activities are the most important things your company must DO to make its business model work. They are the operational actions that create and deliver value. Missing a critical activity means failing to deliver on your value proposition.",
      keyPoints: [
        'Production: designing, building, delivering products',
        'Marketing & Sales: acquiring and converting customers',
        'Distribution: getting the product to the customer',
        'Customer Service: maintaining relationships post-sale',
      ],
      examTip: 'In a BMC improvement question: if a company is failing to deliver its value proposition, look at Key Activities first.',
    },
    {
      id: 'b4-c10',
      title: 'Key Partners',
      explanation:
        'Key Partners are the external organizations and suppliers that help your business model work. Partnerships reduce risk, allow access to resources you don\'t own, and enable activities you can\'t do alone. For startups, the right partnership can accelerate growth faster than building everything internally.',
      keyPoints: [
        'Suppliers: provide raw materials or components',
        'Manufacturing Partners: produce your product',
        'Strategic Alliances: partnerships that create mutual advantage',
        'Investors: provide capital in exchange for equity or returns',
      ],
      example:
        'CampusBox lockers need courier companies as Key Partners. Without them, the core service (reliable delivery) cannot function. When partners are missing, the Value Proposition breaks.',
    },
    {
      id: 'b4-c11',
      title: 'Cost Structure',
      explanation:
        'The Cost Structure describes all costs incurred while operating a business model. Understanding your cost structure helps you manage cash flow, set prices, and identify whether your business is financially viable. Costs come in two main types: fixed (always there) and variable (scale with output).',
      keyPoints: [
        'Fixed Costs: same regardless of output (rent, salaries, insurance)',
        'Variable Costs: change with production volume (materials, delivery)',
        'Economies of Scale: cost per unit falls as you produce more',
        'Total Cost = Fixed Costs + (Variable Cost per unit × Units)',
      ],
      examTip: 'Fixed cost example: rent. Variable cost example: cost of ingredients per item sold. Both appear in the Cost Structure block.',
    },
  ],
};

export default lecture4;
