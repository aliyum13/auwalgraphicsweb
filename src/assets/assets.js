// ============================================================
// AuwalGraphics — assets.js  (complete data file)
// ============================================================
import founderPhoto from './founder image.jpeg'

export const servicesData = [
  {
    id: 'clothing-printing',
    title: 'Clothing Printing',
    tagline: 'Custom Printed Shirts & Clothing That Carry Your Brand',
    icon: '👕',
    heroImage: '/bms-hero.png',
    description: 'Custom T-shirts, polos, hoodies, uniforms and event wear — printed with your logo, design or message, in any quantity.',
    fullDescription: 'Auwal Graphics specialises in printing on shirts and clothing. Whether you need one custom T-shirt or hundreds of branded polos for your team, event or campaign, we handle the artwork, printing and delivery so your clothing looks sharp and represents your brand well.',
    includes: [
      'Custom T-Shirts',
      'Branded Polo Shirts',
      'Hoodies & Sweatshirts',
      'Staff & Corporate Uniforms',
      'Event, Church & Mosque Shirts',
      'Campaign & Political Shirts',
      'School, Club & Team Wear',
      'Print-Ready Artwork for Your Clothing',
    ],
    products: [
      { icon: '👕', title: 'Custom T-Shirts', description: 'Your logo, design or message printed on quality T-shirts — from a single piece to bulk orders.' },
      { icon: '🎽', title: 'Branded Polo Shirts', description: 'Professional branded polos for staff, teams and corporate events.' },
      { icon: '🧥', title: 'Hoodies & Sweatshirts', description: 'Printed hoodies and sweatshirts for brands, schools, clubs and crews.' },
      { icon: '👔', title: 'Uniforms & Corporate Wear', description: 'Consistent branded clothing that makes your team look organised and professional.' },
      { icon: '🎉', title: 'Event & Campaign Shirts', description: 'Shirts for weddings, conferences, religious events, launches and campaigns.' },
      { icon: '🎨', title: 'Artwork for Print', description: 'No design yet? We create or prepare your artwork so it prints clean on fabric.' },
    ],
    process: [
      { step: '01', title: 'Tell Us Your Order', desc: 'Share the clothing type, quantity, sizes, colours and your design or idea.' },
      { step: '02', title: 'Design & Mockup', desc: 'You supply artwork or we design it, then we show you a mockup for approval.' },
      { step: '03', title: 'Printing', desc: 'Once approved and paid, your clothing goes into production.' },
      { step: '04', title: 'Delivery', desc: 'Abuja pickup or delivery to you anywhere in Nigeria.' },
    ],
    gallery: [
      '/bms-1.png',
      '/bms-2.png',
      '/bms-3.png',
    ],
    turnaround: '2 – 7 days',
    color: 'from-slate-900 to-[#2c459d]',
  },
]

export const portfolioData = [
  {
    id: 'branded-merchandise',
    title: 'Brand Merchandise Campaign',
    client: 'atizens, mataset',
    industry: 'Events',
    category: 'Printing',
    icon: '👕',
    gradient: 'from-[#065f46] to-[#047857]',
    thumbnail: 'https://images.unsplash.com/photo-1503341504253-dff4815485f1?w=600&q=80',
    heroImage: '/bms-hero.png',
    problem: 'A tech community needed branded merchandise for their annual hackathon — 300 attendees needed quality items within a 1-week timeline.',
    solution: 'We designed and produced 300 custom polo shirts, 300 branded tote bags, 500 stickers, and 50 staff hoodies — all delivered 2 days before the event.',
    result: 'The merchandise generated 50,000+ social media impressions as attendees posted photos online.',
    gallery: [
      '/bms-1.png',
      '/bms-2.png',
      '/bms-3.png',
    ],
    tags: ['T-Shirts', 'Branded Merch', 'Event Print', 'Bulk'],
  },
]

export const testimonialsData = [
  {
    text: 'Professional and incredibly fast. My brand now looks like a top-tier company. Every design they delivered exceeded expectations. Auwal Graphics is absolutely the real deal.',
    name: 'Adamu Kabiru',
    business: 'Fashion Brand, Abuja',
    initials: 'AK',
  },
  {
    text: 'Best printing quality I have ever used in Abuja. My event banners and branded shirts came out perfect. Will definitely work with them again and again.',
    name: 'Fatima Mohammed',
    business: 'Event Planner, Abuja',
    initials: 'FM',
  },
]

export const faqData = [
  {
    q: 'What types of clothing can you print on?',
    a: 'We print on T-shirts, polo shirts, hoodies, sweatshirts, uniforms and other clothing. Tell us what you have in mind and we will advise on the best option.',
  },
  {
    q: 'Can I print small quantities?',
    a: 'Yes! We accommodate small and large orders. You can order as few as 1 T-shirt or print for your whole team, event or campaign.',
  },
  {
    q: 'I don\'t have a design. Can you help?',
    a: 'Yes. Share your logo or idea and we will create print-ready artwork and send you a mockup to approve before anything is printed.',
  },
  {
    q: 'How long does an order take?',
    a: 'Most clothing orders are ready within 2 – 7 days depending on quantity. Message us if you have an urgent deadline.',
  },
  {
    q: 'Do you deliver outside Abuja?',
    a: 'Absolutely! We deliver printed clothing nationwide across Nigeria, or you can pick up in Abuja.',
  },
]

// ── SINGLE founderData export (duplicate removed, photo uses the import) ──
export const founderData = {
  name: 'Muhammad Auwal Ali',
  title: 'Founder & Creative Director — Auwal Graphics',
  tagline: 'Graphic Designer • Web Developer • Brand Strategist',
  bio: 'I am a multi-skilled creative professional based in Abuja, Nigeria, with deep expertise in graphic design, web development, and brand strategy. I founded Auwal Graphics to help Nigerian businesses access world-class creative services at accessible prices.',
  bio2: 'Every project starts with a simple question: what does this business actually need? Not just a logo or a website — but a visual solution that helps them attract customers, build trust, and grow. That business-first approach is what sets my work apart.',
  photo: founderPhoto, // ← uses the import at the top of this file
  skills: [
    { name: 'Graphic Design', level: 95, icon: '🎨' },
    { name: 'Web Development', level: 85, icon: '💻' },
    { name: 'Brand Identity', level: 92, icon: '💡' },
    { name: 'Print Production', level: 88, icon: '🖨️' },
    { name: 'UI/UX Design', level: 80, icon: '📐' },
    { name: 'Creative Strategy', level: 90, icon: '🧠' },
  ],
  tools: [
    { name: 'Figma', icon: '🎨' },
    { name: 'Photoshop', icon: '🖌️' },
    { name: 'Illustrator', icon: '✒️' },
    { name: 'InDesign', icon: '📐' },
    { name: 'Canva Pro', icon: '⚡' },
    { name: 'WordPress', icon: '🌐' },
    { name: 'HTML/CSS', icon: '💻' },
    { name: 'React', icon: '⚛️' },
    { name: 'Webflow', icon: '🔷' },
    { name: 'Framer', icon: '🚀' },
  ],
  availableFor: [
    'Full-time Remote Design Roles',
    'Contract & Freelance Projects',
    'Agency Collaborations',
    'Web Design Gigs',
    'Long-term Brand Partnerships',
    'Creative Consulting',
  ],
  socials: {
    whatsapp: 'https://wa.me/2349067816736',
    email: 'auwalgraphicsinfo@gmail.com',
    instagram: 'https://instagram.com/auwal.graphics',
    linkedin: 'https://linkedin.com/in/',
    behance: 'https://behance.net/',
    twitter: 'https://twitter.com/',
  },
  timeline: [
    { year: '2019', title: 'Started as a Graphic Designer', desc: 'Began creating logos, flyers, and social media graphics for businesses in Abuja.' },
    { year: '2020', title: 'Expanded into Branding', desc: 'Started delivering complete brand identity systems for growing Nigerian businesses.' },
    { year: '2021', title: 'Entered the Printing Industry', desc: 'Added print production — becoming a one-stop design and print solution.' },
    { year: '2022', title: 'Learned Web Development', desc: 'Acquired web design and development skills, building websites and landing pages.' },
    { year: '2023', title: 'Founded Auwal Graphics', desc: 'Launched the full creative agency serving businesses across Nigeria.' },
    { year: '2024+', title: 'Building & Growing', desc: 'Expanding services, growing the team, serving more Nigerian brands.' },
  ],
}

export const contactInfo = {
  phone: '+234 901 590 6190',
  whatsapp: '+234 906 781 6736',
  email: 'auwalgraphicsinfo@gmail.com',
  address: 'wuse zone 4 fabdal plaza, suite: 211 Nigeria',
  socials: {
    facebook: 'https://facebook.com/',
    instagram: 'https://instagram.com/auwal.graphics',
    twitter: 'https://twitter.com/',
    linkedin: 'https://linkedin.com/',
    youtube: 'https://youtube.com/',
  },
}
