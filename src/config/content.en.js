// ═══════════════════════════════════════════════════════════
// LONDON ELITE TRADES — CONTENT FILE (UK English)
// All static copy lives here. No hardcoded strings in JSX.
// ═══════════════════════════════════════════════════════════

export const COMPANY = {
  name: "London Elite Trades",
  legalName: "London Elite Trades Ltd",
  companyNumber: "10994476",
  phone: "0203 172 4720",
  phoneTel: "tel:+442031724720",
  email: "info@londonelitetrades.co.uk",
  address: {
    line1: "4th Floor, Silverstream House",
    line2: "45 Fitzroy Street",
    area: "Fitzrovia",
    city: "London",
    postcode: "W1T 6EB",
  },
  hours: "Monday–Friday 9am–5.30pm",
  hoursClosed: "Closed at weekends",
  responseTime: "We respond to every enquiry within 1 hour during business hours.",
  coreMessage: "One team, one standard — from the first call to the final detail.",
};

export const NAV = {
  links: [
    { label: "Home", href: "/" },
    { label: "Projects", href: "/projects" },
    { label: "Services", href: "/services" },
    { label: "About", href: "/about" },
    { label: "Reviews", href: "/reviews" },
    { label: "Contact", href: "/contact" },
  ],
  cta: "Get a free quote →",
  mobileCta: "Get a free quote →",
};

export const HOME = {
  hero: {
    eyebrow: "London's Premier Renovation Specialists",
    headlineLine1: "Building",
    headlineLine2: "London's Finest",
    supporting:
      "From structural foundations to the finest finishing detail — one accountable team from first call to completion.",
    cta: "Request your free assessment →",
    socialProof: "Rated 5.0 by Proud London Property Owners on Google",
  },
  accreditations: {
    label: "Fully accredited and verified",
    logos: [
      "Houzz",
      "SafeContractor",
      "Exclusive Builders",
      "DPA",
      "Google",
      "BBA",
      "CITB",
      "SSIP",
      "COVEA",
      "NABC",
    ],
  },
  intro: {
    eyebrow: "About London Elite Trades",
    headline:
      "The art of building done right. From complex structural works to the finest finishing detail — we manage every aspect of your project with a single accountable team.",
    body: "London Elite Trades stands as one of London's foremost property renovation and construction specialists, bringing years of dedicated industry expertise. Our reputation is built on designing and executing projects of exceptional quality — from comprehensive renovations to bespoke property management services.",
    link: "Our story →",
    linkHref: "/about",
  },
  services: {
    eyebrow: "Our Services",
    headlineLine1: "We specialise in all aspects",
    headlineLine2: "of London property",
    viewAll: "View all services →",
    viewAllHref: "/services",
  },
  projects: {
    eyebrow: "Recent Projects",
    headlineLine1: "Recent",
    headlineLine2: "Projects",
    supporting:
      "From Mayfair penthouses to Knightsbridge family homes — each project is delivered with the same uncompromising standard of craft and professionalism.",
    viewAll: "View all projects →",
    viewAllHref: "/projects",
  },
  reviews: {
    eyebrow: "Client Reviews",
    headlineLine1: "See what",
    headlineLine2: "London says",
    rating: "5.0",
    ratingAttribution: "from Proud London Property Owners on Google",
  },
  process: {
    eyebrow: "How It Works",
    headlineLine1: "Your project,",
    headlineLine2: "simplified",
    steps: [
      {
        number: "01",
        title: "Free Consultation",
        body: "We visit your property, understand your vision, and provide an honest, no-obligation assessment of scope and cost — with a response guaranteed within 1 hour of your enquiry during business hours.",
      },
      {
        number: "02",
        title: "Detailed Plan",
        body: "We produce a full project plan: timeline, materials, team allocation, and a transparent fixed-price quote. No hidden costs. No vague estimates.",
      },
      {
        number: "03",
        title: "Expert Build",
        body: "Your dedicated project manager oversees every stage. One point of contact. Daily updates. Handed over only when it meets our standard — which means yours.",
      },
    ],
  },
  coverage: {
    eyebrow: "Coverage Area",
    headlineLine1: "Serving London",
    headlineLine2: "& Beyond",
    body: "Our team operates across all 32 London boroughs and serves clients throughout the surrounding regions. Wherever your project, we bring the same standard of professionalism and craft.",
    boroughs: [
      "Brent",
      "Kensington",
      "Chelsea",
      "Knightsbridge",
      "Mayfair",
      "Westminster",
      "Camden",
      "Islington",
      "Richmond",
      "Southwark",
    ],
    satisfaction:
      "Client satisfaction is our priority. We guarantee that all elements of your work meet your expectations.",
  },
  cta: {
    eyebrow: "Start Your Project",
    headlineLine1: "Your project starts with",
    headlineLine2: "one conversation",
    body: "Request a free, no-obligation assessment. We respond within 1 hour during business hours.",
    cta: "Request your free assessment →",
  },
};

export const SERVICES_DATA = [
  {
    icon: "Hammer",
    title: "Renovation & Refurbishment",
    description:
      "End-to-end residential and commercial renovation, from concept to completion.",
    slug: "renovation-refurbishment",
    details: {
      body: "Whether it is a period property requiring sensitive restoration or a modern space in need of a complete transformation, our renovation team delivers projects that exceed expectations. We coordinate every trade, manage every timeline, and ensure every detail meets our exacting standard.",
      includes: [
        "Full property renovation",
        "Partial refurbishment",
        "Period property restoration",
        "Commercial fit-outs",
        "Project management",
      ],
    },
  },
  {
    icon: "Home",
    title: "Extensions & Loft Conversions",
    description:
      "Structural extensions and full loft conversions that expand your living space.",
    slug: "extensions-loft-conversions",
    details: {
      body: "Adding space to your London property is one of the most impactful investments you can make. Our structural team handles everything from planning and architectural coordination to the final finishing detail — delivering extensions and conversions that feel like they were always part of the original design.",
      includes: [
        "Rear and side extensions",
        "Loft conversions",
        "Basement conversions",
        "Planning application support",
        "Structural engineering",
      ],
    },
  },
  {
    icon: "CookingPot",
    title: "Kitchens & Bathrooms",
    description:
      "Premium kitchen and bathroom installations with meticulous finishing.",
    slug: "kitchens-bathrooms",
    details: {
      body: "Kitchens and bathrooms are where craftsmanship is most visible and most valued. Our specialist fitters work with premium materials and brands to create spaces that are as functional as they are beautiful — installed with precision and finished without compromise.",
      includes: [
        "Bespoke kitchen installation",
        "Luxury bathroom fit-outs",
        "Wet room construction",
        "Tiling and waterproofing",
        "Integrated appliance fitting",
      ],
    },
  },
  {
    icon: "Zap",
    title: "Electrical & Plumbing",
    description:
      "Certified electrical and plumbing services for new builds and refurbishments.",
    slug: "electrical-plumbing",
    details: {
      body: "All electrical and plumbing works are carried out by fully certified professionals to the latest British Standards. From complete rewiring to bespoke plumbing solutions, every installation is safe, compliant, and built to last.",
      includes: [
        "Full rewiring",
        "Consumer unit upgrades",
        "Central heating installation",
        "Boiler replacement",
        "Underfloor heating",
      ],
    },
  },
  {
    icon: "PaintBucket",
    title: "Plastering & Rendering",
    description:
      "Internal plastering and external rendering to the highest standard.",
    slug: "plastering-rendering",
    details: {
      body: "The quality of plastering defines the quality of the finished room. Our plasterers deliver flawless surfaces — whether skimming new plasterboard, restoring period lath-and-plaster, or applying external render systems to transform the façade of your property.",
      includes: [
        "Internal plastering",
        "External rendering",
        "Dry lining",
        "Coving and cornice restoration",
        "Specialist finishes",
      ],
    },
  },
  {
    icon: "Grid3x3",
    title: "Flooring & Tiling",
    description:
      "Timber flooring, tiling, and underfloor heating installation.",
    slug: "flooring-tiling",
    details: {
      body: "From herringbone oak to large-format porcelain, our flooring specialists handle every material with the precision it demands. We prepare subfloors, install underfloor heating, and lay surfaces that will endure decades of daily use whilst looking exceptional.",
      includes: [
        "Hardwood and engineered timber",
        "Natural stone and porcelain tiling",
        "Underfloor heating systems",
        "Subfloor preparation",
        "Waterproof tanking",
      ],
    },
  },
  {
    icon: "Building2",
    title: "Structural Works",
    description:
      "Basements, underpinning, brick laying, masonry, and groundwork services.",
    slug: "structural-works",
    details: {
      body: "Structural works require absolute precision and unwavering attention to engineering standards. Our team manages complex structural projects — from basement excavations and underpinning to load-bearing wall removals — with full structural engineer oversight and building control sign-off.",
      includes: [
        "Basement excavation",
        "Underpinning",
        "Load-bearing wall removal",
        "Brick laying and masonry",
        "Groundworks and foundations",
      ],
    },
  },
  {
    icon: "Ruler",
    title: "Design & Build",
    description:
      "Full design and build management including interior design and project coordination.",
    slug: "design-build",
    details: {
      body: "Our design and build service brings your vision to life from the very first sketch to the final walkthrough. We coordinate architects, interior designers, and specialist trades into a single cohesive team — so you have one point of contact and one standard of quality throughout.",
      includes: [
        "Architectural coordination",
        "Interior design consultation",
        "Full project management",
        "Material sourcing and procurement",
        "Quality assurance and handover",
      ],
    },
  },
];

export const PROJECTS_DATA = [
  {
    id: 1,
    name: "Expert Kitchen Installation",
    location: "Central London",
    type: "Kitchen Renovation",
    category: "Kitchens & Bathrooms",
    filterCategory: "kitchens",
    description:
      "Expert kitchen installation in a central London property. Full refit with custom cabinetry, integrated appliances, and premium finishing throughout.",
    slug: "kitchen-installation-central-london",
  },
  {
    id: 2,
    name: "Mayfair Refurbishment",
    location: "Mayfair, London",
    type: "Residential Refurbishment",
    category: "Renovation & Refurbishment",
    filterCategory: "residential",
    description:
      "Premium residential refurbishment in one of London's most prestigious addresses. Heritage-sensitive approach with luxury finishing to every surface.",
    slug: "mayfair-refurbishment",
  },
  {
    id: 3,
    name: "Knightsbridge Home Renovation",
    location: "Knightsbridge, London",
    type: "Full Renovation",
    category: "Renovation & Refurbishment",
    filterCategory: "residential",
    description:
      "Full residential renovation of a high-value Knightsbridge property. Structural and finish works delivered to an exacting standard.",
    slug: "knightsbridge-home-renovation",
  },
  {
    id: 4,
    name: "Home Extension",
    location: "Knightsbridge, London",
    type: "Structural Extension",
    category: "Extensions & Loft Conversions",
    filterCategory: "extensions",
    description:
      "A beautifully executed structural extension that seamlessly connects new living space with the existing property. Glass, steel, and timber working in harmony.",
    slug: "home-extension-knightsbridge",
  },
  {
    id: 5,
    name: "Luxury Bathroom Suite",
    location: "Chelsea, London",
    type: "Bathroom Installation",
    category: "Kitchens & Bathrooms",
    filterCategory: "kitchens",
    description:
      "A complete luxury bathroom transformation in a Chelsea townhouse. Marble surfaces, bespoke vanity, and precision tiling throughout.",
    slug: "luxury-bathroom-chelsea",
  },
  {
    id: 6,
    name: "Period Property Restoration",
    location: "Islington, London",
    type: "Heritage Renovation",
    category: "Renovation & Refurbishment",
    filterCategory: "residential",
    description:
      "Sensitive restoration of a listed Islington property. Original features preserved and enhanced with modern systems integrated seamlessly.",
    slug: "period-property-islington",
  },
];

export const REVIEWS_DATA = [
  {
    name: "James T.",
    rating: 5,
    text: "London Elite Trades delivered an outstanding renovation of our Kensington property. From the initial consultation to the final walkthrough, every stage was handled with professionalism and genuine care. The quality of workmanship exceeded our expectations — we would not hesitate to recommend them.",
    attribution: "via Google",
  },
  {
    name: "Sarah M.",
    rating: 5,
    text: "We engaged London Elite Trades for a complete kitchen and bathroom refurbishment. Their attention to detail was remarkable — every tile, every fitting, every finish was executed to perfection. Communication throughout was clear and consistent. Truly a five-star experience.",
    attribution: "via Google",
  },
  {
    name: "David R.",
    rating: 5,
    text: "After a difficult experience with a previous contractor, we were understandably cautious. London Elite Trades restored our confidence entirely. They completed our loft conversion on time, on budget, and to a standard that still impresses us every day. Professional, reliable, and genuinely skilled.",
    attribution: "via Google",
  },
  {
    name: "Emma L.",
    rating: 5,
    text: "The team at London Elite Trades transformed our dated Hampstead home into something extraordinary. Their project manager was a single point of contact throughout — no chasing, no confusion, just consistent updates and exceptional results. The best decision we made was choosing them.",
    attribution: "via Google",
  },
  {
    name: "Michael K.",
    rating: 5,
    text: "From basement underpinning to the final coat of paint, London Elite Trades managed our entire renovation with outstanding competence. The structural work was completed without a single issue, and the finishing detail across every room is immaculate. Worth every penny.",
    attribution: "via Google",
  },
  {
    name: "Rebecca H.",
    rating: 5,
    text: "We hired London Elite Trades for a rear extension and internal reconfiguration. They handled planning, structural engineering, and every trade in-house. The result is a home that feels twice the size and ten times more beautiful. Responsive, honest, and superbly talented.",
    attribution: "via Google",
  },
  {
    name: "Andrew P.",
    rating: 5,
    text: "London Elite Trades completed a full refurbishment of our investment property in record time without compromising on quality. Their ability to coordinate multiple trades simultaneously whilst maintaining an immaculate site was genuinely impressive. First-class service.",
    attribution: "via Google",
  },
  {
    name: "Charlotte W.",
    rating: 5,
    text: "I cannot recommend London Elite Trades highly enough. Our bathroom renovation was handled with meticulous care — the tiling work alone is a thing of beauty. They treated our home with respect, cleaned up every day, and delivered a result that exceeded our brief.",
    attribution: "via Google",
  },
];

export const BLOG_POSTS = [
  {
    id: 1,
    title: "Expert Kitchen Fitters in London: Transforming Homes With Quality Craftsmanship",
    category: "Kitchens",
    excerpt:
      "Discover how expert kitchen fitting transforms London homes. From bespoke cabinetry to integrated appliances, quality craftsmanship makes all the difference.",
    slug: "expert-kitchen-fitters-london",
    body: "A kitchen renovation is one of the most impactful improvements you can make to a London property. It is the heart of the home — where families gather, where meals are prepared, and where the quality of craftsmanship is most visible.\n\nAt London Elite Trades, our kitchen specialists bring decades of combined experience to every installation. We work with premium suppliers and source materials that combine durability with design excellence.\n\nEvery kitchen project begins with a detailed consultation to understand how you use your space. We then produce a comprehensive plan covering layout, materials, appliances, lighting, and timeline — so there are no surprises.\n\nFrom handleless contemporary designs to classic shaker-style kitchens, our team delivers installations that are as functional as they are beautiful.",
  },
  {
    id: 2,
    title: "Mayfair Refurbishment: Luxury Living in London's Most Prestigious Address",
    category: "Renovation",
    excerpt:
      "A look inside our premium Mayfair refurbishment project — heritage sensitivity meets contemporary luxury in one of London's finest postcodes.",
    slug: "mayfair-refurbishment",
    body: "Mayfair represents the pinnacle of London residential property. Working in this prestigious neighbourhood demands a level of craft and sensitivity that few contractors can deliver consistently.\n\nOur recent Mayfair refurbishment project required the restoration of original period features — ornate ceiling cornices, marble fireplaces, and heritage joinery — whilst integrating contemporary living standards.\n\nThe project spanned several months and involved coordination between heritage consultants, interior designers, and our specialist trades team. Every decision was made with respect for the building's character and the client's vision for modern luxury.\n\nThe result is a home that honours its history whilst delivering every comfort of contemporary London living.",
  },
  {
    id: 3,
    title: "Home Renovation in Knightsbridge: A Complete Transformation",
    category: "Renovation",
    excerpt:
      "How we delivered a full residential renovation in Knightsbridge — from structural works to finishing detail, managed by a single accountable team.",
    slug: "home-renovation-knightsbridge",
    body: "Knightsbridge is synonymous with quality, and our clients in this neighbourhood expect nothing less from their renovation contractor.\n\nThis comprehensive renovation project involved structural modifications, complete mechanical and electrical upgrades, and a full interior fit-out across multiple floors.\n\nOur project manager served as the single point of contact throughout, coordinating specialist trades and ensuring every phase was completed to programme and to standard.\n\nThe transformation was remarkable — a dated property reimagined as a contemporary family home with every detail considered and every finish executed to perfection.",
  },
  {
    id: 4,
    title: "Home Extension in Knightsbridge: Expanding Space With Style",
    category: "Extensions",
    excerpt:
      "A structural home extension in Knightsbridge that seamlessly blends new living space with the character of the existing property.",
    slug: "home-extension-knightsbridge",
    body: "When space is at a premium in central London, a well-designed extension can transform how a family lives. Our Knightsbridge extension project delivered precisely that — additional living space that feels natural, light, and connected.\n\nThe project required careful structural planning, including steel frame construction and foundation works in close proximity to neighbouring properties.\n\nWe coordinated with the client's architect to ensure the extension complemented the existing building's proportions and character. Glass, steel, and timber were combined to create a space flooded with natural light.\n\nThe finished extension has become the most-used room in the home — testament to the power of thoughtful design and expert execution.",
  },
];

export const ABOUT_PAGE = {
  hero: {
    headlineLine1: "Our Story",
    headlineLine2: "Our Standard",
    cta: "Get your free quote today →",
  },
  story: {
    eyebrow: "Our Story",
    headline: "London Elite Trades stands as one of London's foremost property renovation and construction specialists, with decades of combined industry expertise.",
    body: "Our reputation is built on designing and executing exceptional-quality projects — from comprehensive renovations to bespoke property management services. Founded with a single conviction: that London homeowners deserve a contractor who treats their property with the same care they do.",
  },
  team: {
    eyebrow: "Our Team",
    headlineLine1: "The people",
    headlineLine2: "behind your project",
    body: "London Elite Trades unites multiple professionals from diverse backgrounds to form a purposeful team. Each team member is selected for their professional expertise and dedication to excellence. We collaborate as a firm to deliver work that sets the highest standard.",
    roles: [
      "Functional Project Managers",
      "Certified Contractors and Designers",
      "On-Site Forepersons",
      "Dedicated Trade Liaison Managers",
    ],
  },
  values: [
    {
      number: "01",
      title: "Reliability",
      body: "Our clients can trust us to deliver on our word — when we commit to a timeline or deliverable, we honour it. Consistency and dependability define every interaction.",
    },
    {
      number: "02",
      title: "Quality",
      body: "We never compromise on quality. We guarantee that all elements of any work meet or exceed the highest industry benchmarks. Every detail matters.",
    },
  ],
  sustainability: {
    eyebrow: "Sustainability",
    headlineLine1: "Building",
    headlineLine2: "responsibly",
    body: "We take our commitment to sustainability seriously, striving to be as environmentally responsible as possible through various means.",
    points: [
      "Using sustainable building materials",
      "Implementing energy-efficient techniques",
      "Waste reduction across all projects",
      "Providing expertise on sustainable construction practices",
    ],
  },
};

export const CONTACT_PAGE = {
  hero: {
    eyebrow: "Get in Touch",
    headlineLine1: "Ready to",
    headlineLine2: "start your project?",
    socialProof: "5.0 — Rated by Proud London Property Owners on Google",
  },
  form: {
    heading: "Request a Free Assessment",
    body: "For expert advice on your project, contact us to schedule a consultation today. Our friendly team provides expert advice with no obligation.",
    submit: "Send enquiry →",
    terms:
      "I agree that by submitting this form I accept your website terms of use, privacy policy and cookie policy.",
    success:
      "Thank you. We'll be in touch within 1 hour during business hours.",
  },
};

export const PROJECTS_PAGE = {
  hero: {
    eyebrow: "Our Work",
    headlineLine1: "London",
    headlineLine2: "Projects",
    body: "From Mayfair penthouses to commercial fit-outs — a selection of completed projects across London and beyond.",
  },
  filters: ["All", "Residential", "Commercial", "Extensions", "Kitchens & Bathrooms", "Structural"],
  filterMap: {
    All: "all",
    Residential: "residential",
    Commercial: "commercial",
    Extensions: "extensions",
    "Kitchens & Bathrooms": "kitchens",
    Structural: "structural",
  },
};

export const REVIEWS_PAGE = {
  hero: {
    eyebrow: "Client Reviews",
    headlineLine1: "What London",
    headlineLine2: "says about us",
    rating: "5.0",
    ratingAttribution: "from Proud London Property Owners on Google",
    googleLink: "Read reviews on Google →",
  },
};

export const SERVICES_PAGE = {
  hero: {
    eyebrow: "Services",
    headlineLine1: "Everything your",
    headlineLine2: "project needs",
  },
};

export const BLOG_PAGE = {
  hero: {
    eyebrow: "Insights",
    headlineLine1: "Project stories",
    headlineLine2: "& advice",
  },
};

export const FOOTER = {
  cta: "Book a consult →",
  columns: {
    address: { label: "Office" },
    contact: { label: "Call or Email" },
    hours: { label: "Opening Times" },
    social: { label: "Follow Us" },
  },
  legal: `© 2026 London Elite Trades Limited | Company number: 10994476`,
  legalLinks: [
    { label: "Terms & Conditions", href: "#" },
    { label: "Privacy Policy", href: "#" },
    { label: "Sitemap", href: "#" },
  ],
};

export const ALL_SERVICES_LIST = [
  "Basements & Underpinning Services",
  "Demolition Services",
  "Bathrooms, Showers & Wetroom",
  "Drainage & Irrigation Services",
  "Brick Laying & Masonry Services",
  "Electrical Services",
  "Cabinetry & Joinery Services",
  "Extension Services",
  "Carpentry Services",
  "Fibre Glass GRP Systems",
  "Commercial Changing Rooms",
  "Floor Screeding Services",
  "Commercial Development Services",
  "Groundwork & Landscaping Services",
  "Kitchens & Utility Room Services",
  "Structural Services",
  "Loft Conversion Services",
  "Tiling Grouting & Mastic Application",
  "Masonry Restoration Services",
  "Timber Flooring Installation & Restoration",
  "Plastering & Rendering Services",
  "Underfloor Heating Services",
  "Plumbing & Heating Services",
  "Design & Build",
  "Refurbishments & Renovation Services",
  "Build Management",
  "Roofing Services",
  "Interior Design",
];

export const IMAGES = {
  hero: "https://media.base44.com/images/public/69d735e6d501ebc3b47eb64a/bbc71f466_1762073613-Header.jpg",
  kitchenProject: "https://media.base44.com/images/public/69d735e6d501ebc3b47eb64a/5b8becebd_1765535824-1762074479-WhatsAppImage2025-02-01at100428_c32ab84f1.jpg",
  mayfairProject: "https://media.base44.com/images/public/69d735e6d501ebc3b47eb64a/4fc14bda6_1762072358-WhatsAppImage2025-02-01at090823_744b54f61.jpg",
  knightsbridgeProject: "https://media.base44.com/images/public/69d735e6d501ebc3b47eb64a/0797b16dd_1761835057-1754468436-fot1.jpg",
  extensionProject: "https://media.base44.com/images/public/69d735e6d501ebc3b47eb64a/e673b0df0_1762073738-MaskGroup191.jpg",
  aboutHero: "https://media.base44.com/images/public/69d735e6d501ebc3b47eb64a/c904b24c3_1765535893-1762081228-WhatsAppImage2025-02-01at101234_a5319c5f.jpg",
  londonCoverage: "https://media.base44.com/images/public/69d735e6d501ebc3b47eb64a/5b26833d7_1762073717-MaskGroup201.jpg",
  bathroomProject: "https://media.base44.com/images/public/69d735e6d501ebc3b47eb64a/ca7094c5a_1762072360-MaskGroup3771.jpg",
  introPortrait: "https://media.base44.com/images/public/69d735e6d501ebc3b47eb64a/b7fb67a29_1765535895-1762081228-MaskGroup3791.jpg",
  shower: "https://media.base44.com/images/public/69d735e6d501ebc3b47eb64a/c9ffc7a3c_1762073460-Group7781.jpg",
  hallway: "https://media.base44.com/images/public/69d735e6d501ebc3b47eb64a/46869256d_1762073460-MaskGroup321.jpg",
  bathroomVanity: "https://media.base44.com/images/public/69d735e6d501ebc3b47eb64a/f431900b7_1765535825-1762074479-WhatsAppImage2025-02-01at091537_72b1bce31.jpg",
  wallpaperStairs: "https://media.base44.com/images/public/69d735e6d501ebc3b47eb64a/c708c97b2_1762073613-WhatsAppImage2025-02-01at094739_c79f42a21.jpg",
  bathroomTub: "https://media.base44.com/images/public/69d735e6d501ebc3b47eb64a/8f422e0d8_1762073697-MaskGroup211.jpg",
};

// Map project IDs to images
export const PROJECT_IMAGES = {
  1: "https://media.base44.com/images/public/69d735e6d501ebc3b47eb64a/5b8becebd_1765535824-1762074479-WhatsAppImage2025-02-01at100428_c32ab84f1.jpg",
  2: "https://media.base44.com/images/public/69d735e6d501ebc3b47eb64a/4fc14bda6_1762072358-WhatsAppImage2025-02-01at090823_744b54f61.jpg",
  3: "https://media.base44.com/images/public/69d735e6d501ebc3b47eb64a/0797b16dd_1761835057-1754468436-fot1.jpg",
  4: "https://media.base44.com/images/public/69d735e6d501ebc3b47eb64a/e673b0df0_1762073738-MaskGroup191.jpg",
  5: "https://media.base44.com/images/public/69d735e6d501ebc3b47eb64a/ca7094c5a_1762072360-MaskGroup3771.jpg",
  6: "https://media.base44.com/images/public/69d735e6d501ebc3b47eb64a/c904b24c3_1765535893-1762081228-WhatsAppImage2025-02-01at101234_a5319c5f.jpg",
};