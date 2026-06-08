import { Lecture } from '@/types';

const lecture8: Lecture = {
  id: 'business-8',
  number: 8,
  title: 'Cost, Revenue & Finance Basics',
  track: 'business',
  professor: 'Prof. Zaid Maaytah',
  tags: ['Finance', 'Costs', 'Revenue', 'Budgeting'],
  concepts: [
    {
      id: 'b8-c1',
      title: 'Why Finance Matters for Entrepreneurs',
      explanation:
        'Entrepreneurship is about creativity AND resource management. Financial literacy is not optional — it is the difference between a startup that survives and one that dies despite having a great product. Most startups fail not because of bad ideas, but because of poor financial management: running out of cash before reaching profitability.',
      keyPoints: [
        'Finance helps you: survive, plan, grow, and reduce uncertainty',
        'Most startups fail due to financial mismanagement, not bad products',
        'Understanding money flow = understanding your business health',
        'Investors will not fund you if you cannot explain your numbers',
      ],
      examTip: 'Finance is survival. The number one startup killer is cash flow problems, not bad ideas.',
    },
    {
      id: 'b8-c2',
      title: 'Common Financial Mistakes by Entrepreneurs',
      explanation:
        "New founders consistently make the same financial mistakes. Understanding these patterns lets you avoid them before they become fatal.",
      keyPoints: [
        'Underestimating costs: everything costs more than expected',
        'Overestimating revenue: customers are harder to acquire than you think',
        'Spending before validation: building before confirming demand',
        'Poor cash flow management: profitable on paper but out of cash',
      ],
      examTip: 'Watch for the "1% of a billion" fallacy in exam questions — that\'s an overestimated revenue projection with no grounding in behavior.',
    },
    {
      id: 'b8-c3',
      title: 'Startup Costs',
      explanation:
        'Startup costs are the one-time expenses you incur before your business generates any revenue. Every startup needs to account for these before calculating when they will reach breakeven or profitability. Startup costs are typically spent once — they are not recurring.',
      keyPoints: [
        'One-time costs incurred before generating revenue',
        'Examples: equipment, legal fees, website build, initial inventory',
        'Also: licenses, permits, office setup, first month of rent',
        'Must be funded before any revenue comes in',
      ],
      examTip: 'Startup costs are CAPITAL EXPENDITURES (CapEx) when they are long-lasting assets. Example: buying an oven for a bakery = capital expenditure.',
    },
    {
      id: 'b8-c4',
      title: 'Fixed Costs',
      explanation:
        "Fixed costs are expenses that remain constant regardless of how much you produce or sell. Whether you sell zero units or 10,000 units, you still pay the same fixed costs. Understanding fixed costs is essential for breakeven analysis — they define the floor you must earn above.",
      keyPoints: [
        'Do not change with production volume',
        'Examples: rent, salaries, insurance, annual software subscriptions',
        'Present whether you sell 0 or 10,000 units',
        'High fixed costs = higher breakeven point = more risk',
      ],
      example:
        'A coffee shop pays 500 JOD/month rent whether they sell 1 cup or 1,000 cups that month. The rent = fixed cost.',
      examTip: 'Fixed cost exam trick: "rent" and "salaries" are almost always fixed costs. "Per unit" costs are always variable.',
    },
    {
      id: 'b8-c5',
      title: 'Variable Costs',
      explanation:
        "Variable costs change directly with your level of production or sales. The more you produce, the higher your total variable costs — but cost per unit stays constant. Understanding the relationship between variable costs and price determines your contribution margin.",
      keyPoints: [
        'Scale proportionally with production/sales volume',
        'Examples: raw materials, packaging, delivery fees, sales commissions',
        'Cost per unit is fixed; total variable cost increases with volume',
        'Formula: Total Cost = Fixed Costs + (Variable Cost per unit × Units)',
      ],
      example:
        'A bakery pays 2 JOD per bag of flour used. If they bake 100 loaves, flour cost = 200 JOD. 200 loaves = 400 JOD. The cost scales with volume.',
      examTip: 'Variable cost example in exam: "2 JOD per bag of beans sold." The "per unit sold" language signals variable cost.',
    },
    {
      id: 'b8-c6',
      title: 'Projected Revenue',
      explanation:
        "Projected revenue is your forecast of future income from sales. It must be grounded in evidence — customer behavior, market research, competitor data, and realistic conversion assumptions. Investors will test every assumption in your revenue projection. Unrealistic projections destroy credibility.",
      keyPoints: [
        'Three questions to build revenue: WHO buys? WHAT do they buy? WHAT do they pay?',
        'Must be based on: market research, competitor data, user behavior',
        'Bottom-up approach: start with individual customer, scale up',
        'Avoid top-down fantasy: "if we get 1% of China\'s market..."',
      ],
      examTip: 'Bottom-up revenue = individual customer behavior × number of customers. This is always more credible than top-down estimates.',
    },
    {
      id: 'b8-c7',
      title: 'Building a Startup Budget',
      explanation:
        "A budget is a structured financial plan that lists all expected costs and projected revenues for a specific period. It helps entrepreneurs understand their cash flow needs, identify when they will run out of money, and plan when to reach breakeven.",
      keyPoints: [
        'Lists: startup costs, ongoing fixed costs, variable costs, projected revenues',
        'Shows month-by-month cash flow trajectory',
        'Identifies when you will reach breakeven (costs = revenue)',
        'Identifies when you need external funding',
      ],
      examTip: 'Budget ≠ actual results. A budget is a PLAN. Always compare budget vs. actuals to identify variances.',
    },
  ],
};

export default lecture8;
