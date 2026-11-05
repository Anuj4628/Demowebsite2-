/**
 * OM BOTTLES MFG COMPANY — CENTRAL PRODUCT CATALOGUE DATA
 * Authoritative, verified catalogue data extracted from official catalogue references.
 * Contains: Categories, Products, Sizes, Caps & Closures, Applications
 */

export const CATEGORIES = [
  {
    id: 'pharma-bottles',
    name: 'Pharma Bottles',
    headline: 'Pharma Aluminium Bottles',
    slug: 'pharma-bottles',
    url: 'pharma-bottles/index.html',
    shortDesc: 'Aluminium bottle options for pharmaceutical and related packaging applications.',
    longDesc: 'Engineered for pharmaceutical, healthcare, and laboratory applications. Manufactured with seamless high-purity aluminium, providing superior barrier protection against light, moisture, oxygen, and external contaminants.',
    image: 'assets/images/products/pharma-bottles.jpg',
    webp: 'assets/images/products/pharma-bottles.webp',
    verifiedSizes: ['10ml', '25ml', '50ml', '100ml', '200ml', '250ml', '300ml', '500ml', '1000ml'],
    compatibleCaps: ['Standard Screw Cap', 'Tamper-Evident Plug & Seal Cap', 'Flip-Top Dispensing Cap']
  },
  {
    id: 'chemical-bottles',
    name: 'Chemical Bottles',
    headline: 'Chemical Aluminium Bottles',
    slug: 'chemical-bottles',
    url: 'chemical-bottles/index.html',
    shortDesc: 'Aluminium bottles for different chemical packaging applications and requirements.',
    longDesc: 'Durable, seamless chemical-grade aluminium containers designed for industrial formulations, agrochemicals, solvents, and specialty chemicals. Built with impact-resistant wall thickness and leak-proof safety closures.',
    image: 'assets/images/products/chemical-bottles.jpg',
    webp: 'assets/images/products/chemical-bottles.webp',
    verifiedSizes: ['100ml', '250ml', '500ml', '1000ml', '1.25 Litre', '2.5 Litre', '5 Litre'],
    compatibleCaps: ['Tamper-Evident Plug & Seal Cap', 'Heavy-Duty Industrial Screw Cap']
  },
  {
    id: 'attar-bottles',
    name: 'Attar Bottles',
    headline: 'Attar & Traditional Fragrance Bottles',
    slug: 'attar-bottles',
    url: 'attar-bottles/index.html',
    shortDesc: 'Aluminium bottle options for attar and traditional fragrance packaging.',
    longDesc: 'Specially crafted aluminium bottles designed for concentrated aromatic oils, traditional ittar, and essential fragrances. Provides complete UV and oxidation shielding to preserve pure scents.',
    image: 'assets/images/products/attar-bottles.jpg',
    webp: 'assets/images/products/attar-bottles.webp',
    verifiedSizes: ['10ml', '25ml', '50ml', '100ml', '250ml', '500ml'],
    compatibleCaps: ['Standard Screw Cap', 'Octagonal Threaded Cap', 'Applicator Plug Cap']
  },
  {
    id: 'perfume-bottles',
    name: 'Perfume Bottles',
    headline: 'Perfume & Fragrance Bottles',
    slug: 'perfume-bottles',
    url: 'perfume-bottles/index.html',
    shortDesc: 'Explore aluminium bottle options for perfume and fragrance-related applications.',
    longDesc: 'Sophisticated brushed and anodised aluminium fragrance containers suitable for luxury perfumes, body mists, and cosmetic fragrance packaging. Combines elegance with corrosion-resistant interior protective coating.',
    image: 'assets/images/products/perfume-bottles.jpg',
    webp: 'assets/images/products/perfume-bottles.webp',
    verifiedSizes: ['25ml', '50ml', '100ml', '200ml', '250ml', '500ml'],
    compatibleCaps: ['Fine Mist Spray Pump', 'Sleek Metallic Screw Cap', 'Overcap & Collar']
  },
  {
    id: 'water-bottles',
    name: 'Water Bottles',
    headline: 'Aluminium Water Bottles',
    slug: 'water-bottles',
    url: 'water-bottles/index.html',
    shortDesc: 'Aluminium water bottle options in practical sizes and styles.',
    longDesc: 'Lightweight, reusable, eco-friendly aluminium water bottles designed for corporate hydration, beverage packaging, sports, and lifestyle applications. Food-grade internal protective lining.',
    image: 'assets/images/products/water-bottles.jpg',
    webp: 'assets/images/products/water-bottles.webp',
    verifiedSizes: ['500ml', '750ml', '1000ml'],
    compatibleCaps: ['Sports Pull Cap / Sipper', 'Carabiner Screw Cap', 'Wide Mouth Lid']
  },
  {
    id: 'dome-lights',
    name: 'Aluminium Dome Lights',
    headline: 'Modern Dome Lighting & Aluminium Reflector Solutions',
    slug: 'dome-lights',
    url: 'dome-lights/index.html',
    shortDesc: 'Explore aluminium dome shades, reflectors and related lighting products.',
    longDesc: 'Premium spun aluminium lighting shades, industrial high-bay reflectors, cluster pendants, and architectural dome luminaires crafted with precision spun contours and powder-coated finishes.',
    image: 'assets/images/products/dome-lights.jpg',
    webp: 'assets/images/products/dome-lights.webp',
    verifiedSizes: ['10 Inch', '12 Inch', '14 Inch', '16 Inch', '18 Inch', 'Custom Diameter'],
    compatibleCaps: ['Pendant Cord Grip', 'Canopy Kit', 'Industrial Hook / Conduit Mount']
  }
];

export const PRODUCTS = [
  // 1. Pharma Bottles
  {
    id: 'pharma-standard',
    categorySlug: 'pharma-bottles',
    name: 'Standard Pharmaceutical Aluminium Bottle',
    shortDesc: 'Seamless pharmaceutical container with leak-proof plug seal for liquid & syrup medications.',
    sizes: ['10ml', '25ml', '50ml', '100ml', '200ml', '250ml', '500ml', '1000ml'],
    image: 'assets/images/products/pharma-bottles/pharma-standard.jpg',
    webp: 'assets/images/products/pharma-bottles/pharma-standard.webp',
    material: 'Pure Grade Aluminium (99.7%)',
    finish: 'Natural Brushed / Anodised Plain Silver',
    closure: 'Tamper-Evident Plug & Screw Cap'
  },
  {
    id: 'pharma-narrow-neck',
    categorySlug: 'pharma-bottles',
    name: 'Narrow Neck Precision Liquid Bottle',
    shortDesc: 'Precision neck opening tailored for controlled pouring, dropper inserts and lab reagents.',
    sizes: ['10ml', '25ml', '50ml', '100ml', '250ml'],
    image: 'assets/images/products/pharma-bottles/pharma-laboratory.jpg',
    webp: 'assets/images/products/pharma-bottles/pharma-laboratory.webp',
    material: 'Pharmaceutical Grade Aluminium',
    finish: 'Smooth Silver Anodised',
    closure: 'Threaded Precision Closure'
  },
  {
    id: 'pharma-bulk-storage',
    categorySlug: 'pharma-bottles',
    name: 'Pharma Bulk Active Ingredient Bottle',
    shortDesc: 'High-capacity aluminium container for APIs, essential compounds, and bulk pharma storage.',
    sizes: ['250ml', '500ml', '1000ml'],
    image: 'assets/images/products/pharma-bottles/pharma-sizes.jpg',
    webp: 'assets/images/products/pharma-bottles/pharma-sizes.webp',
    material: 'Heavy-Duty Seamless Aluminium',
    finish: 'Brushed Industrial Silver',
    closure: 'Tamper-Evident Safety Cap'
  },

  // 2. Chemical Bottles
  {
    id: 'chemical-standard',
    categorySlug: 'chemical-bottles',
    name: 'Industrial Chemical Aluminium Bottle',
    shortDesc: 'Impact-resistant aluminium bottle built to store agrochemicals, reagents and solvents securely.',
    sizes: ['100ml', '250ml', '500ml', '1000ml'],
    image: 'assets/images/products/chemical-bottles/chemical-standard.jpg',
    webp: 'assets/images/products/chemical-bottles/chemical-standard.webp',
    material: 'Industrial Chemical Grade Aluminium',
    finish: 'Chemical-Resistant Brushed Finish',
    closure: 'Tamper-Proof Plug & Cap'
  },
  {
    id: 'chemical-solvent-canister',
    categorySlug: 'chemical-bottles',
    name: 'Solvent & Agrochemical Storage Container',
    shortDesc: 'Heavy-duty wall gauge engineered to resist internal pressures and aggressive formulation storage.',
    sizes: ['250ml', '500ml', '1000ml'],
    image: 'assets/images/products/chemical-bottles/chemical-industrial.jpg',
    webp: 'assets/images/products/chemical-bottles/chemical-industrial.webp',
    material: 'Corrosion-Resistant Aluminium Alloy',
    finish: 'Protective Lacquered Silver',
    closure: 'Hermetic Leak-Proof Closure'
  },
  {
    id: 'chemical-bulk-container',
    categorySlug: 'chemical-bottles',
    name: 'Bulk Industrial Chemical Container',
    shortDesc: 'Large volume aluminium industrial container with robust neck ring and security seal.',
    sizes: ['1000ml', '1.25 Litre', '2.5 Litre', '5 Litre'],
    image: 'assets/images/products/chemical-bottles/chemical-heavy-duty.jpg',
    webp: 'assets/images/products/chemical-bottles/chemical-heavy-duty.webp',
    material: 'Reinforced Gauge Aluminium',
    finish: 'Industrial Brushed Exterior',
    closure: 'Heavy-Duty Threaded Cap'
  },

  // 3. Attar Bottles
  {
    id: 'attar-standard',
    categorySlug: 'attar-bottles',
    name: 'Traditional Attar Aluminium Bottle',
    shortDesc: 'Classic compact aluminium bottle designed for pure ittar, sandalwood oils, and traditional scents.',
    sizes: ['10ml', '25ml', '50ml', '100ml', '250ml'],
    image: 'assets/images/products/attar-bottles/attar-standard.jpg',
    webp: 'assets/images/products/attar-bottles/attar-standard.webp',
    material: 'Pure Grade Aluminium',
    finish: 'Brushed Metallic with Golden/Silver Neck Accent',
    closure: 'Airtight Threaded Cap'
  },
  {
    id: 'attar-essential-oil',
    categorySlug: 'attar-bottles',
    name: 'Essential Oil Aluminium Packaging Bottle',
    shortDesc: 'Light-blocking aluminium vessel ensuring zero aromatic decay or volatile evaporation.',
    sizes: ['25ml', '50ml', '100ml', '250ml', '500ml'],
    image: 'assets/images/products/attar-bottles/attar-traditional.jpg',
    webp: 'assets/images/products/attar-bottles/attar-traditional.webp',
    material: 'Seamless Aluminium',
    finish: 'Natural Matte / Polished Silver',
    closure: 'Wadded Seal Screw Cap'
  },

  // 4. Perfume Bottles
  {
    id: 'perfume-standard',
    categorySlug: 'perfume-bottles',
    name: 'Luxury Fragrance Aluminium Bottle',
    shortDesc: 'Sleek cylindrical metallic bottle designed for eau de parfum, body mists, and salon sprays.',
    sizes: ['50ml', '100ml', '200ml', '250ml'],
    image: 'assets/images/products/perfume-bottles/perfume-standard.jpg',
    webp: 'assets/images/products/perfume-bottles/perfume-standard.webp',
    material: 'High-Purity Cosmetic Grade Aluminium',
    finish: 'Fine Brushed Silver / Polished Sheen',
    closure: 'Fine Mist Spray Pump with Clear Overcap'
  },
  {
    id: 'perfume-cylindrical',
    categorySlug: 'perfume-bottles',
    name: 'Cylindrical Aluminium Perfume Canister',
    shortDesc: 'Modern minimalist silhouette with smooth shoulder curve and universal pump compatibility.',
    sizes: ['25ml', '50ml', '100ml', '250ml'],
    image: 'assets/images/products/perfume-bottles/perfume-luxury.jpg',
    webp: 'assets/images/products/perfume-bottles/perfume-luxury.webp',
    material: 'Seamless Aluminium',
    finish: 'Anodised Satin Silver',
    closure: 'Crimp / Screw Spray Atomiser'
  },

  // 5. Water Bottles
  {
    id: 'water-classic',
    categorySlug: 'water-bottles',
    name: 'Classic Aluminium Water Bottle',
    shortDesc: 'Durable, lightweight aluminium water bottle with leak-proof cap for hydration and retail branding.',
    sizes: ['500ml', '750ml', '1000ml'],
    image: 'assets/images/products/water-bottles/water-standard.jpg',
    webp: 'assets/images/products/water-bottles/water-standard.webp',
    material: 'Food-Grade Coated Aluminium',
    finish: 'Smooth Silver Metallic / Satin Finish',
    closure: 'Carabiner Cap / Sports Pull Cap'
  },
  {
    id: 'water-sports-lifestyle',
    categorySlug: 'water-bottles',
    name: 'Sports & Lifestyle Aluminium Bottle',
    shortDesc: 'Ergonomic water packaging bottle engineered for gym, travel, sports, and outdoor activities.',
    sizes: ['500ml', '750ml'],
    image: 'assets/images/products/water-bottles/water-lifestyle.jpg',
    webp: 'assets/images/products/water-bottles/water-lifestyle.webp',
    material: 'BPA-Free Lined Aluminium',
    finish: 'Brushed Aluminium',
    closure: 'Flip-Up Sports Sipper Cap'
  },

  // 6. Dome Lights (8 verified products from Reference 2)
  {
    id: 'blue-single-pendant',
    categorySlug: 'dome-lights',
    name: 'Glossy Blue Single Hemispherical Pendant Dome',
    shortDesc: 'Sleek hemispherical aluminium pendant shade in high-gloss cobalt blue finish, ideal for modern interiors.',
    sizes: ['10 Inch', '12 Inch', '14 Inch'],
    image: 'assets/images/products/dome-lights/blue-single-pendant.jpg',
    webp: 'assets/images/products/dome-lights/blue-single-pendant.webp',
    material: 'Spun Aluminium Shade',
    finish: 'High-Gloss Vibrant Blue Powder Coat',
    mount: 'Ceiling Pendant Suspension'
  },
  {
    id: 'blue-three-cluster',
    categorySlug: 'dome-lights',
    name: 'Blue Three-Light Cluster Pendant',
    shortDesc: 'Trio cluster arrangement of blue aluminium dome lights with ceiling canopy for dining and commercial accents.',
    sizes: ['Multi-Drop Triple Shade'],
    image: 'assets/images/products/dome-lights/blue-three-cluster.jpg',
    webp: 'assets/images/products/dome-lights/blue-three-cluster.webp',
    material: 'Spun Aluminium & Steel Canopy',
    finish: 'Gloss Blue with Chrome Hardware',
    mount: 'Cluster Canopy Mount'
  },
  {
    id: 'red-dome-pendant',
    categorySlug: 'dome-lights',
    name: 'Glossy Red Dome Pendant',
    shortDesc: 'Vibrant glossy crimson red aluminium dome lamp shade for bold architectural statements and cafe dining.',
    sizes: ['10 Inch', '12 Inch', '14 Inch'],
    image: 'assets/images/products/dome-lights/red-dome-pendant.jpg',
    webp: 'assets/images/products/dome-lights/red-dome-pendant.webp',
    material: 'Spun Aluminium',
    finish: 'High-Gloss Crimson Red Powder Coating',
    mount: 'Adjustable Drop Pendant Cable'
  },
  {
    id: 'yellow-dome-pendant',
    categorySlug: 'dome-lights',
    name: 'Yellow Dome Pendant',
    shortDesc: 'Bright canary yellow powder-coated aluminium dome shade delivering warm, focused illumination.',
    sizes: ['10 Inch', '12 Inch', '14 Inch'],
    image: 'assets/images/products/dome-lights/yellow-dome-pendant.jpg',
    webp: 'assets/images/products/dome-lights/yellow-dome-pendant.webp',
    material: 'Aluminium Spun Body',
    finish: 'Canary Yellow Gloss Finish',
    mount: 'Pendant Hanging Assembly'
  },
  {
    id: 'plain-blue-shade',
    categorySlug: 'dome-lights',
    name: 'Plain Blue Dome Shade',
    shortDesc: 'Minimalist matte/satin blue spun aluminium dome shade with rolled edge perimeter for ambient accentuation.',
    sizes: ['12 Inch', '16 Inch'],
    image: 'assets/images/products/dome-lights/plain-blue-shade.jpg',
    webp: 'assets/images/products/dome-lights/plain-blue-shade.webp',
    material: 'Lightweight Pure Aluminium',
    finish: 'Satin Industrial Blue',
    mount: 'Universal Shade Holder Mount'
  },
  {
    id: 'silver-reflector',
    categorySlug: 'dome-lights',
    name: 'Silver Aluminium Dome Reflector',
    shortDesc: 'High-reflectivity natural polished aluminium industrial dome reflector for optimized lumen distribution.',
    sizes: ['12 Inch', '14 Inch', '16 Inch', '18 Inch'],
    image: 'assets/images/products/dome-lights/silver-reflector.jpg',
    webp: 'assets/images/products/dome-lights/silver-reflector.webp',
    material: 'Anodised High-Purity Aluminium (Specular)',
    finish: 'Natural Metallic Mirror / Polished',
    mount: 'High-Bay / Downlight Reflector Mount'
  },
  {
    id: 'industrial-high-bay',
    categorySlug: 'dome-lights',
    name: 'Industrial LED Dome / High-Bay Light',
    shortDesc: 'Heavy-duty industrial aluminium high-bay dome luminaire engineered for warehouses and manufacturing facilities.',
    sizes: ['14 Inch', '16 Inch', '18 Inch'],
    image: 'assets/images/products/dome-lights/industrial-high-bay.jpg',
    webp: 'assets/images/products/dome-lights/industrial-high-bay.webp',
    material: 'Cast & Spun Aluminium Housing',
    finish: 'Industrial Anodised Grey / Silver',
    mount: 'Heavy-Duty Ceiling Hook / Eyelet'
  },
  {
    id: 'round-led-lamp',
    categorySlug: 'dome-lights',
    name: 'Round LED Dome Lamp',
    shortDesc: 'Compact circular dome housing with integrated diffuser for ambient ceiling and commercial downlighting.',
    sizes: ['8 Inch', '10 Inch', '12 Inch'],
    image: 'assets/images/products/dome-lights/round-led-lamp.jpg',
    webp: 'assets/images/products/dome-lights/round-led-lamp.webp',
    material: 'Spun Aluminium Ring & Diffuser Frame',
    finish: 'Powder-Coated Clean White / Silver',
    mount: 'Surface / Flush Ceiling Mount'
  }
];

export const CAPS_AND_CLOSURES = [
  {
    id: 'screw-cap',
    name: 'Standard Screw Cap',
    shortDesc: 'Precision threaded leak-proof plastic cap with internal liner for everyday packaging.',
    image: 'assets/images/products/caps/cap-screw.jpg',
    webp: 'assets/images/products/caps/cap-screw.webp',
    availableColors: ['White', 'Black', 'Navy Blue', 'Red', 'Green']
  },
  {
    id: 'tamper-evident',
    name: 'Tamper-Evident Plug & Seal Cap',
    shortDesc: 'Security tear-ring and inner plug cap for pharmaceutical, agrochemical and chemical safety.',
    image: 'assets/images/products/caps/cap-tamper-evident.jpg',
    webp: 'assets/images/products/caps/cap-tamper-evident.webp',
    availableColors: ['White', 'Red', 'Blue', 'Black']
  },
  {
    id: 'flip-top',
    name: 'Flip-Top Dispensing Cap',
    shortDesc: 'Convenient one-touch flip-top opening for liquid lotions, cosmetics and sanitizers.',
    image: 'assets/images/products/caps/cap-flip-top.jpg',
    webp: 'assets/images/products/caps/cap-flip-top.webp',
    availableColors: ['White', 'Black', 'Custom']
  },
  {
    id: 'sports-pull',
    name: 'Sports Pull Cap / Sipper',
    shortDesc: 'Push-pull hygienic valve closure tailored for aluminium sports and lifestyle water bottles.',
    image: 'assets/images/products/caps/cap-sports.jpg',
    webp: 'assets/images/products/caps/cap-sports.webp',
    availableColors: ['Black', 'Blue', 'Red']
  },
  {
    id: 'spray-pump',
    name: 'Fine Mist Spray Pump',
    shortDesc: 'Ergonomic finger atomiser pump with protective overcap for perfume and cosmetic mists.',
    image: 'assets/images/products/caps/cap-spray-pump.jpg',
    webp: 'assets/images/products/caps/cap-spray-pump.webp',
    availableColors: ['Silver Metallic', 'Black', 'White']
  }
];

export const APPLICATIONS = [
  {
    id: 'pharma-app',
    title: 'Pharmaceutical Applications',
    desc: 'Light-shielded, hygienic aluminium packaging for liquid medicines, tonics, and lab reagents.',
    targetCategory: 'pharma-bottles',
    image: 'assets/images/industries/industry-pharma.jpg',
    webp: 'assets/images/industries/industry-pharma.webp'
  },
  {
    id: 'chemical-app',
    title: 'Chemical Packaging',
    desc: 'Corrosion-resistant aluminium bottles for industrial chemicals, lubricants, and agrochemical solutions.',
    targetCategory: 'chemical-bottles',
    image: 'assets/images/industries/industry-chemical.jpg',
    webp: 'assets/images/industries/industry-chemical.webp'
  },
  {
    id: 'attar-app',
    title: 'Attar & Traditional Fragrance',
    desc: 'Airtight, non-reactive containers preserving the purity of traditional ittar and floral extracts.',
    targetCategory: 'attar-bottles',
    image: 'assets/images/industries/industry-attar.jpg',
    webp: 'assets/images/industries/industry-attar.webp'
  },
  {
    id: 'perfume-app',
    title: 'Perfume & Fragrance Packaging',
    desc: 'Aesthetic brushed aluminium bottles with mist atomisers for commercial perfumes and body sprays.',
    targetCategory: 'perfume-bottles',
    image: 'assets/images/industries/industry-perfume.jpg',
    webp: 'assets/images/industries/industry-perfume.webp'
  },
  {
    id: 'water-app',
    title: 'Water Packaging',
    desc: 'Reusable, food-grade lined aluminium bottles for pure mineral water and lifestyle hydration.',
    targetCategory: 'water-bottles',
    image: 'assets/images/industries/industry-water.jpg',
    webp: 'assets/images/industries/industry-water.webp'
  },
  {
    id: 'lighting-app',
    title: 'Lighting Applications',
    desc: 'Architectural dome light shades, cluster pendants, and industrial LED high-bay reflectors.',
    targetCategory: 'dome-lights',
    image: 'assets/images/industries/industry-lighting.jpg',
    webp: 'assets/images/industries/industry-lighting.webp'
  }
];
