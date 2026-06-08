import { Lecture } from '@/types';

const lecture9: Lecture = {
  id: 'business-9',
  number: 9,
  title: 'Financial Statements & Ratios',
  track: 'business',
  professor: 'Prof. Zaid Maaytah',
  tags: ['Income Statement', 'Breakeven', 'ROI', 'Financial Ratios'],
  concepts: [
    {
      id: 'b9-c1',
      title: 'Three Core Financial Statements',
      explanation:
        "Every business produces three core financial statements that together tell the complete financial story. The Income Statement shows profit or loss over a period. The Balance Sheet shows assets, liabilities, and equity at a specific point in time. The Cash Flow Statement tracks actual cash moving in and out of the business.",
      keyPoints: [
        'Income Statement (P&L): Revenue − Costs = Profit/Loss over a period',
        'Balance Sheet: Assets = Liabilities + Equity at a point in time',
        'Cash Flow Statement: actual cash in and out (not the same as profit)',
        'All three together give the complete financial picture',
      ],
      examTip: 'Profitable does NOT mean cash-positive. You can show profit on an Income Statement while running out of cash due to timing of payments.',
    },
    {
      id: 'b9-c2',
      title: 'Key Financial Terms',
      explanation:
        'Before calculating anything, you need a firm grasp of the core financial vocabulary. These terms appear in every financial calculation in the exam.',
      keyPoints: [
        'Revenue: total income from sales (before any deductions)',
        'COGS (Cost of Goods Sold): direct costs of producing what you sold',
        'Gross Profit: Revenue − COGS',
        'Operating Expenses: overhead costs not in COGS (rent, salaries, marketing)',
        'Net Profit: Gross Profit − Operating Expenses (and taxes, interest)',
      ],
      examTip: 'Gross Profit = Revenue − COGS. Net Profit = Gross Profit − Operating Expenses. Know both formulas cold.',
    },
    {
      id: 'b9-c3',
      title: 'COGS vs. Operating Expenses',
      explanation:
        "A critical distinction for the exam: COGS (Cost of Goods Sold) includes only the direct costs of producing what you sell — ingredients, packaging, production labor. Operating Expenses are overhead costs incurred regardless of production volume — rent, salaries, marketing, depreciation. Moving a cost from COGS to Operating Expenses does NOT change Net Profit but DOES change Gross Profit.",
      keyPoints: [
        'COGS: direct production costs (ingredients, manufacturing, direct labor)',
        'OpEx: overhead costs (rent, salaries, depreciation, marketing)',
        'Reclassifying a cost from COGS → OpEx: Gross Profit changes, Net Profit stays same',
        'Adding a new OpEx cost: Gross Profit unchanged, Net Profit decreases',
      ],
      examTip: 'Reclassify cost from COGS to OpEx = Gross Profit INCREASES, Net Profit UNCHANGED. This appears directly in Q23/Q26 of the mock exam.',
    },
    {
      id: 'b9-c4',
      title: 'Breakeven Analysis',
      explanation:
        "Breakeven is the sales volume at which total revenue exactly equals total costs — you are making neither profit nor loss. Every additional unit sold beyond breakeven contributes pure profit (after covering variable costs). The breakeven point is one of the most important calculations for any startup.",
      keyPoints: [
        'Breakeven Units = Fixed Costs ÷ Contribution Margin per unit',
        'Contribution Margin = Selling Price − Variable Cost per unit',
        'Below breakeven = making a loss',
        'Above breakeven = making a profit',
      ],
      example:
        'Student Café: Fixed costs = 40,000 JOD. Price = 4 JOD/coffee. Variable cost = 1.50 JOD/coffee. Contribution margin = 2.50. Breakeven = 40,000 ÷ 2.50 = 16,000 cups. Selling 12,000 cups = loss of 10,000 JOD.',
      examTip: 'Always calculate: (1) Contribution Margin = Price − Variable Cost, then (2) Breakeven = Fixed Costs ÷ Contribution Margin.',
    },
    {
      id: 'b9-c5',
      title: 'Gross Profit Margin vs. Net Profit Margin',
      explanation:
        'Profit margins express profitability as a percentage of revenue, making it easier to compare businesses of different sizes and track performance over time. There are two key margins: Gross Profit Margin (how efficiently you produce) and Net Profit Margin (overall profitability after all expenses).',
      keyPoints: [
        'Gross Profit Margin = (Revenue − COGS) ÷ Revenue × 100%',
        'Net Profit Margin = Net Profit ÷ Revenue × 100%',
        'GPM can improve while NPM stays same (if OpEx rises proportionally)',
        'Lenders often require minimum NPM (e.g., 12%) before lending',
      ],
      examTip: 'NPM = Net Profit ÷ Revenue × 100. If a lender requires 12% NPM: Net Profit must be ≥ 12% of Revenue. Check this by calculation.',
    },
    {
      id: 'b9-c6',
      title: 'Return on Investment (ROI)',
      explanation:
        "ROI measures how efficiently you are using invested capital to generate profit. It answers: for every JOD I invested, how much profit did I get back? Higher ROI = more efficient use of capital. Investors use ROI to compare opportunities and decide where to allocate money.",
      keyPoints: [
        'Formula: ROI = (Net Profit ÷ Invested Capital) × 100%',
        'Higher ROI = better return on the money invested',
        'Used to compare investment options',
        'Exam: investors often require minimum ROI (e.g., 20%)',
      ],
      example:
        'Company A: invested 80,000 JOD, profit 12,800. ROI = 12,800/80,000 = 16%. Company B: invested 60,000 JOD, profit 9,000. ROI = 9,000/60,000 = 15%. Company A has higher ROI.',
      examTip: 'ROI = Net Profit ÷ Capital Invested × 100. Higher percentage = better. Compare ROI across companies to find the more efficient one.',
    },
    {
      id: 'b9-c7',
      title: 'Cash Flow vs. Profit',
      explanation:
        "One of the most dangerous misconceptions in entrepreneurship: assuming that if you're profitable, you have cash. Profit is an accounting concept — it includes revenue earned but not yet collected and excludes cash movements that don't affect profit (like loan repayments). A business can be profitable and bankrupt simultaneously.",
      keyPoints: [
        'Profit: revenue earned minus costs incurred (accounting)',
        'Cash flow: actual cash received minus actual cash paid',
        'You can be profitable but cash-poor (customers haven\'t paid yet)',
        'Burn rate: how fast a startup spends its cash reserves',
      ],
      examTip: 'Profitable ≠ cash-positive. Always consider timing of cash flows. This is why cash flow statements exist.',
    },
    {
      id: 'b9-c8',
      title: 'Depreciation',
      explanation:
        "Depreciation is the accounting method of spreading the cost of a long-term asset (like equipment, vehicles, or machinery) across its useful life. Instead of recording the full cost in year one, you record a portion each year. Depreciation is an operating expense — it reduces Net Profit but does NOT use cash.",
      keyPoints: [
        'Spreads asset cost across its useful life',
        'Example: oven worth 20,000 JOD, 10-year life → 2,000 JOD depreciation/year',
        'Goes into Operating Expenses → reduces Net Profit',
        'Does NOT require cash payment (non-cash expense)',
      ],
      examTip: 'Adding depreciation to OpEx → reduces Net Profit but NOT Gross Profit. Appears in Q22-Q24 of mock exam.',
    },
  ],
};

export default lecture9;
