import { Lecture } from '@/types';

const lecture7: Lecture = {
  id: 'business-7',
  number: 7,
  title: '4Ps of Marketing',
  track: 'business',
  professor: 'Prof. Zaid Maaytah',
  tags: ['4Ps', 'Marketing Mix', 'Product', 'Promotion'],
  concepts: [
    {
      id: 'b7-c1',
      title: 'The Marketing Mix (4Ps)',
      explanation:
        "The Marketing Mix is a framework for making strategic marketing decisions. The original model (E. Jerome McCarthy) has four elements: Product, Price, Place, and Promotion. Each P must align with the others and with the target customer — a mismatch between any two creates friction that kills sales.",
      keyPoints: [
        'Product: what you sell',
        'Price: what customers pay',
        'Place: where and how they access it',
        'Promotion: how they find out about it',
      ],
      examTip: 'All 4Ps must align with each other AND with the target customer segment. Misalignment = failed marketing.',
    },
    {
      id: 'b7-c2',
      title: 'Product',
      explanation:
        "The Product element covers everything about what you are actually selling — features, quality, design, branding, and packaging. It's important to distinguish between the core product (the fundamental benefit the customer seeks), the actual product (the physical or digital offering), and the augmented product (extras like warranty, support, free updates).",
      keyPoints: [
        'Core product: the fundamental benefit (e.g., "transportation")',
        'Actual product: the thing itself with features, brand, packaging',
        'Augmented product: extras — warranty, support, after-sales service',
        'Product lifecycle: Introduction → Growth → Maturity → Decline',
      ],
      example:
        'A smartphone\'s core product = communication and connectivity. Actual product = the specific hardware and software. Augmented product = warranty, trade-in program, 24/7 support.',
      examTip: 'The Product P in an exam scenario about differentiation (longer battery, better app) = that\'s a Product decision.',
    },
    {
      id: 'b7-c3',
      title: 'Price',
      explanation:
        "Price is the only element of the 4Ps that generates revenue — every other P is a cost. Price signals value and positions your brand in the market. Setting it too low signals low quality; too high prices you out of the market. Price must align with your value proposition and your customers' willingness to pay.",
      keyPoints: [
        'The only revenue-generating P (others are costs)',
        'Signals quality and positions brand in customer minds',
        'Must align with value proposition and segment WTP',
        'Directly affects demand and competitive positioning',
      ],
      examTip: 'Price strategy questions refer back to Lecture 6 pricing types: cost-plus, value-based, penetration, skimming, competitive.',
    },
    {
      id: 'b7-c4',
      title: 'Place (Distribution)',
      explanation:
        'Place describes how and where customers can access your product or service. The goal is to make your product available at the right place, at the right time, in the right quantity. Distribution can be direct (you sell to customers yourself) or indirect (through intermediaries like retailers or distributors).',
      keyPoints: [
        'Direct: sell yourself via website, app, or physical store',
        'Indirect: use retailers, distributors, or agents',
        'Digital: app stores, online marketplaces, SaaS platforms',
        'Must match where your target customer naturally shops/operates',
      ],
      example:
        'Farm2Door adding evening delivery slots and 2-hour windows = a Place decision. It changes how and when the product (groceries) is accessible.',
      examTip: 'A change to WHEN/WHERE customers access the product = Place (distribution) decision.',
    },
    {
      id: 'b7-c5',
      title: 'Promotion',
      explanation:
        "Promotion covers all the activities you use to communicate your value proposition to your target audience. The goal is to move potential customers from awareness (they know you exist) to consideration (they're thinking about buying) to conversion (they buy). Modern promotion uses an integrated mix of tools.",
      keyPoints: [
        'Advertising: paid media (social ads, TV, billboards)',
        'Public Relations (PR): earned media coverage',
        'Content Marketing: valuable content that builds trust',
        'Social Media: engagement and community building',
        'Sales Promotions: discounts, bundles, limited-time offers',
      ],
      examTip: 'A messaging campaign, influencer partnership, or "10% discount" = Promotion decision.',
    },
    {
      id: 'b7-c6',
      title: 'Integrated Marketing Communications (IMC)',
      explanation:
        "Integrated Marketing Communications ensures that all promotional tools and channels send a consistent, unified message to the customer. Whether someone sees your Instagram ad, reads your email, or visits your website — the message, tone, and promise should feel like it all comes from the same brand.",
      keyPoints: [
        'Consistency: same message across all channels',
        'Coherence: all touchpoints reinforce the same brand story',
        'Continuity: consistent over time, not changing every week',
        'Channels: social, email, ads, PR, events, content',
      ],
    },
    {
      id: 'b7-c7',
      title: 'From 4Ps to 7Ps (Service Marketing)',
      explanation:
        "For service businesses, the original 4Ps are insufficient because services involve people, processes, and physical environments that significantly affect the customer experience. The extended 7Ps model adds three more Ps specifically for services.",
      keyPoints: [
        'People: the humans delivering the service',
        'Process: how the service is delivered (systems, procedures)',
        'Physical Evidence: tangible cues of quality (environment, packaging, certificates)',
        'These 3 extra Ps matter when the product IS the experience',
      ],
      example:
        'For a restaurant: People = the waitstaff. Process = how orders are taken and food is prepared. Physical Evidence = the interior design, menu quality, cleanliness.',
      examTip: '7Ps = 4Ps + People + Process + Physical Evidence. Extra Ps apply to SERVICE businesses.',
    },
  ],
};

export default lecture7;
