import { Lecture } from '@/types';

const lecture6: Lecture = {
  id: 'business-6',
  number: 6,
  title: 'Competitor Analysis & Pricing Strategies',
  track: 'business',
  professor: 'Prof. Zaid Maaytah',
  tags: ['Competitor Analysis', 'Pricing', 'USP', 'Positioning'],
  concepts: [
    {
      id: 'b6-c1',
      title: 'Types of Competitors',
      explanation:
        'Every business has multiple types of competitors, and understanding all of them is critical to realistic strategy. Most entrepreneurs only see direct competitors — but indirect competitors and emerging threats can be just as dangerous.',
      keyPoints: [
        'Direct: same product or service, same target audience',
        'Indirect: different product, but solves the same customer need',
        'Emerging: new entrants not yet in your space but moving toward it',
        'Example: Taxi (direct vs. Uber), Bus (indirect vs. Uber), Autonomous vehicles (emerging)',
      ],
      examTip: 'Direct competitor = same product, same market. Indirect competitor = different product, same customer need.',
    },
    {
      id: 'b6-c2',
      title: 'Competitor Benchmarking',
      explanation:
        'Benchmarking is the systematic process of comparing your business performance, products, and strategies against your competitors. It reveals where you are stronger or weaker, helps you identify your unique advantages, and tracks how your position changes over time.',
      keyPoints: [
        'Select key attributes to compare (price, quality, service, speed)',
        'Gather data on each competitor across those attributes',
        'Visualize using a Moon Chart (radar/spider chart)',
        'Use findings to identify where you genuinely outperform — that\'s your USP',
      ],
      example:
        'A Moon Chart comparing five ride-sharing apps on: price, reliability, driver quality, app UX, and speed shows at a glance which attributes each player owns and where gaps exist.',
      examTip: 'Benchmarking → reveals where you outperform → that outperformance becomes your USP.',
    },
    {
      id: 'b6-c3',
      title: 'Brand Positioning Map (Perceptual Map)',
      explanation:
        'A Brand Positioning Map (or Perceptual Map) is a visual tool that plots competing brands on two key dimensions — typically Price vs. Quality, or Convenience vs. Premium. It reveals gaps in the market (under-served spaces) and shows how customers perceive different brands relative to each other.',
      keyPoints: [
        'Select 2 attributes most important to your customer (often Price vs. Quality)',
        'Plot all major competitors on the map based on customer perception',
        'Look for gaps: empty spaces = potentially under-served market segments',
        'Your positioning strategy fills a gap OR creates a better combination',
      ],
      examTip: 'Perceptual maps reveal GAPS in the market. Empty quadrants = opportunities.',
    },
    {
      id: 'b6-c4',
      title: 'Unique Selling Point (USP)',
      explanation:
        'Your USP is the specific feature or benefit that makes your product or business distinctly better than alternatives in a way that matters to your target customer. A true USP must be unique (not easily copied), valuable (customers care), and clear (easily understood). It lives at the intersection of what customers want and what competitors fail to deliver.',
      keyPoints: [
        'Must be Unique: not easily replicated by competitors',
        'Must be Valuable: customers are willing to pay more or switch for it',
        'Must be Clear: communicate it in one sentence',
        'Derived from: benchmarking + customer research',
      ],
      examTip: 'USP = what customers want + what competitors don\'t do well. It\'s the intersection, not just a feature list.',
    },
    {
      id: 'b6-c5',
      title: 'Cost-Plus Pricing',
      explanation:
        'Cost-plus pricing is the simplest pricing method: calculate your total cost to produce one unit, then add a markup percentage to ensure profit. It guarantees you cover costs and make a margin, but it ignores what customers are willing to pay — meaning you may overprice yourself out of the market or leave money on the table.',
      keyPoints: [
        'Formula: Selling Price = Cost of Production + Markup %',
        'Simple to calculate; ensures a profit margin',
        'Weakness: ignores customer willingness to pay',
        'Weakness: ignores competitive pricing',
      ],
      examTip: 'Cost-plus = production cost + markup. It does NOT consider what customers want to pay.',
    },
    {
      id: 'b6-c6',
      title: 'Value-Based Pricing',
      explanation:
        'Value-based pricing sets prices based on the perceived value the customer receives, not on what it costs you to produce. This requires deeply understanding your customer and what they are willing to pay. It works best when you have strong differentiation and your value is hard to replicate.',
      keyPoints: [
        'Price based on perceived customer value, not cost',
        'Requires strong differentiation from alternatives',
        'Requires research into customer willingness to pay',
        'Can command premium prices if value is clear',
      ],
      example:
        "A bottle of water costs pennies to produce but sells for $5 at a concert. The perceived value (you're thirsty and there are no alternatives) determines the price, not the production cost.",
    },
    {
      id: 'b6-c7',
      title: 'Competitive Pricing',
      explanation:
        'Competitive pricing sets your price based on what your competitors charge. This is common in markets where products are similar and differentiation is low. You can choose to price below (gain market share through lower price), at (match the market), or above (signal higher quality).',
      keyPoints: [
        'Price relative to competitors: below, at, or above',
        'Used when products are similar (low differentiation)',
        'Below competitor: gain share, but risk price war and low margins',
        'Above competitor: signals premium quality',
      ],
    },
    {
      id: 'b6-c8',
      title: 'Penetration Pricing',
      explanation:
        'Penetration pricing means entering the market with a deliberately low price to quickly acquire customers and build market share. Once established, the price is gradually raised. This strategy works well in competitive, price-sensitive markets but risks attracting the wrong type of customer — those who only stay for the low price.',
      keyPoints: [
        'Start low to gain market share fast',
        'Gradually raise price once established',
        'Risk: attracts price-chasers, not loyal customers',
        'Example: streaming services launching with low intro prices',
      ],
      examTip: 'Penetration pricing = low initial price to capture market, raise later. Used when entering competitive markets with risk-averse buyers.',
    },
    {
      id: 'b6-c9',
      title: 'Skimming Pricing',
      explanation:
        "Skimming pricing is the opposite of penetration: start with a high price targeting early adopters who will pay a premium, then lower the price over time to reach the mainstream market. This strategy is common in tech products and is designed to maximize revenue from each segment of the adoption curve.",
      keyPoints: [
        'Start high (target early adopters willing to pay premium)',
        'Gradually lower price to reach broader market',
        'Maximizes revenue extraction across adoption curve',
        'Works when product is genuinely new and differentiated',
      ],
      example:
        'Every new iPhone launch: premium price at launch, price drops over 12–18 months as newer models come out and early majority enters the market.',
      examTip: 'Skimming = high launch price, lower over time. Best for innovative products with early adopters willing to pay a premium.',
    },
    {
      id: 'b6-c10',
      title: 'Psychological Pricing',
      explanation:
        "Psychological pricing uses pricing tactics that play on how the human brain perceives numbers. The goal is to make prices feel cheaper, more compelling, or more exclusive without changing the actual product. These tactics are everywhere in retail and can significantly influence purchasing behavior.",
      keyPoints: [
        'Charm pricing: $9.99 feels much cheaper than $10.00',
        'Prestige pricing: $1,000 signals luxury vs. $999',
        'Price anchoring: show a high price first, then the real price looks like a deal',
        'Bundling: combine products at a discount to increase perceived value',
      ],
      examTip: 'Psychological pricing ≠ lowering price. It\'s about PERCEPTION. Same price can feel different based on how it\'s presented.',
    },
  ],
};

export default lecture6;
