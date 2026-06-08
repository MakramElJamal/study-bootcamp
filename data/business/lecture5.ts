import { Lecture } from '@/types';

const lecture5: Lecture = {
  id: 'business-5',
  number: 5,
  title: 'Value Proposition & Market Size',
  track: 'business',
  professor: 'Prof. Zaid Maaytah',
  tags: ['Value Proposition', 'TAM/SAM/SOM', 'Market Sizing', 'Diffusion of Innovation'],
  concepts: [
    {
      id: 'b5-c1',
      title: 'Value Proposition Canvas',
      explanation:
        'The Value Proposition Canvas, also by Osterwalder, zooms into the relationship between your offering and your customer. It has two sides: the Customer Profile (right) describes who the customer is and what they need, and the Value Map (left) describes what you offer and how it helps. "Fit" happens when your value map directly addresses the customer profile.',
      keyPoints: [
        'Customer Jobs: what tasks/goals the customer wants to achieve',
        'Pains: frustrations, risks, obstacles the customer faces',
        'Gains: positive outcomes the customer desires',
        'Products & Services: what you offer',
        'Pain Relievers: how your product reduces pains',
        'Gain Creators: how your product creates desired gains',
      ],
      examTip: '"One extra hour each day for work, study, or leisure" = a Customer Gain. Relief from waiting = addressing a Customer Pain.',
    },
    {
      id: 'b5-c2',
      title: 'Value Proposition Statement',
      explanation:
        "A strong value proposition statement is concise, specific, and connects directly to a customer pain or gain. It follows a clear format: what you offer, who it\'s for, what benefit it delivers, and how it\'s different from alternatives. Vague value propositions like 'we offer great service' signal an unclear business model.",
      keyPoints: [
        'Format: "[Product] helps [target customer] achieve [key benefit] by [how it solves their pain]"',
        'Must be specific to a customer segment',
        'Must name a real benefit, not a feature',
        'Must imply differentiation from alternatives',
      ],
      example:
        '"Uber gives you a fast, reliable, and affordable ride at any time with the tap of a button — no waiting, no negotiation, no cash." This names the customer pain (waiting, negotiating, cash), the benefit (fast, reliable, affordable), and the mechanism (tap of a button).',
    },
    {
      id: 'b5-c3',
      title: 'Types of Markets',
      explanation:
        "A market is any system where buyers and sellers interact to exchange goods or services. Markets can be local, regional, national, or global. Understanding which type of market you are entering shapes your strategy, pricing, and distribution approach.",
      keyPoints: [
        'Consumer Markets: individuals buying for personal use (B2C)',
        'Business Markets: companies buying from other companies (B2B)',
        'Financial Markets: buying/selling financial instruments',
        'Online/Digital Markets: platforms enabling digital transactions',
      ],
    },
    {
      id: 'b5-c4',
      title: 'B2B vs. B2C',
      explanation:
        'B2B (Business-to-Business) and B2C (Business-to-Consumer) represent fundamentally different sales dynamics. B2B involves longer sales cycles, multiple decision-makers, and ROI-driven purchasing. B2C is driven by emotions, personal benefit, and shorter decision cycles. Knowing which you are operating in shapes every part of your strategy.',
      keyPoints: [
        'B2B: rational decisions, long cycles, multiple stakeholders, ROI matters',
        'B2C: emotional decisions, short cycles, personal benefit matters',
        'B2B: you sell to a business, but end user is someone else',
        'B2C: the buyer is usually also the user',
      ],
      examTip: 'If the person using your product is NOT the person paying for it → B2B dynamics apply. You must convince decision-makers, not just users.',
    },
    {
      id: 'b5-c5',
      title: 'Diffusion of Innovation Theory',
      explanation:
        "Everett Rogers's Diffusion of Innovation describes how new products spread through a population over time. The population is divided into five segments based on how quickly they adopt new things. This model is essential for market sizing and go-to-market strategy — you can't sell to everyone at once, and you shouldn't try.",
      keyPoints: [
        'Innovators (2.5%): risk-takers, try everything first',
        'Early Adopters (13.5%): visionaries, spot benefit before mainstream',
        'Early Majority (34%): pragmatists, adopt once proven',
        'Late Majority (34%): skeptics, adopt once everyone else has',
        'Laggards (16%): traditionalists, last to adopt (if ever)',
      ],
      examTip: 'Your SOM (Serviceable Obtainable Market) targets Innovators + Early Adopters first — they will try your unproven product.',
    },
    {
      id: 'b5-c6',
      title: 'TAM — Total Addressable Market',
      explanation:
        'TAM is the maximum total demand for your product if 100% of everyone who could possibly be a customer adopted it. It represents the "theoretical ceiling" — how big could this market be if there were no constraints? TAM is always the largest number and represents the full opportunity.',
      keyPoints: [
        'Total revenue opportunity if you had 100% market share',
        'Includes ALL potential customer types in the adoption curve',
        'Used to communicate market size to investors',
        'Always larger than SAM and SOM',
      ],
      example:
        'For a fitness app in Jordan: TAM = all smartphone users in Jordan (3,000,000). They could all theoretically use a fitness app.',
      examTip: 'TAM = the whole pie. It is the theoretical maximum if you capture 100% of the market.',
    },
    {
      id: 'b5-c7',
      title: 'SAM — Serviceable Available Market',
      explanation:
        "SAM is the portion of TAM that you can realistically reach given your product's constraints — geography, language, price point, and distribution capability. It's the subset of TAM that your business model can actually serve. SAM is always smaller than TAM.",
      keyPoints: [
        'Subset of TAM you can actually serve given your constraints',
        'Constraints: geography, language, price, distribution',
        'Formula: SAM = TAM × Target Market Segmentation %',
        'Typically includes Innovators + Early Adopters + Early Majority',
      ],
      example:
        'For FitLife Jordan fitness app: TAM = 3,000,000 smartphone users. SAM = health-conscious users willing to pay 10 JOD/month = 450,000.',
      examTip: 'SAM = the slice of the pie you can reach. SAM ≠ what you will capture, just what you can serve.',
    },
    {
      id: 'b5-c8',
      title: 'SOM — Serviceable Obtainable Market',
      explanation:
        "SOM is the portion of SAM you can realistically capture in the short term (typically year 1–3) given competition, resources, and brand awareness. It's your actual go-to-market target. SOM is your beachhead — the entry wedge that lets you prove product-market fit before expanding.",
      keyPoints: [
        'Subset of SAM you can realistically capture in the short term',
        'Formula: SOM = SAM × Estimated Market Share %',
        'Typically: Innovators + Early Adopters = ~16% of total population',
        'Used for financial projections and resource planning',
      ],
      example:
        'FitLife Jordan: SAM = 450,000. Conversion rate 10%. SOM = 45,000 users Year 1. This is who you plan and budget for.',
      examTip: 'TAM > SAM > SOM always. SOM is your realistic year 1 target. If SOM is not viable financially, rethink your model.',
    },
    {
      id: 'b5-c9',
      title: 'Market Sizing in Practice (Uber in Jordan Example)',
      explanation:
        'Market sizing is not about finding a magic number from the internet — it is about making logical, defensible estimates based on real data. The Uber Jordan example shows how to build from the population up to a credible market estimate.',
      keyPoints: [
        'TAM: ~2.4M urban Jordanians with smartphones who travel regularly',
        'SAM: ~920,000 (Amman + Irbid, app-friendly population, ~40% of urban)',
        'SOM: ~110,000–120,000 (12% of SAM, given Careem dominance)',
        'Always justify your percentages with evidence or logic',
      ],
      examTip: 'Market sizing must be bottom-up: start with real user behavior, not "1% of a billion people." Defensible math beats big claims.',
    },
  ],
};

export default lecture5;
