export interface GalleryItem {
  id: string;
  title: string;
  category: "studio" | "recording" | "lounge" | "equipment";
  src: string;
  alt: string;
  description: string;
  featured?: boolean;
}

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: "gal-01",
    title: "Behringer C-1 Studio Microphone & Monitor",
    category: "equipment",
    src: "/images/gallery/IMG_20261015_114636077.jpg",
    alt: "High-resolution broadcast microphone at Radio Alva's 88.4 FM studio with on-screen station branding",
    description: "Broadcast-grade condenser microphone, studio headphones, and real-time audio monitor running the Radio Alva's broadcast suite.",
    featured: true,
  },
  {
    id: "gal-02",
    title: "Vintage Gramophone Radio Showcase",
    category: "equipment",
    src: "/images/gallery/IMG_20261015_114559328.jpg",
    alt: "Artisan vintage radio with gramophone horn at Radio Alva's reception",
    description: "Iconic vintage 3D radio with copper gramophone horn, illuminated frequency dial, and classic analog tuning controls.",
    featured: true,
  },
  {
    id: "gal-03",
    title: "Official Studio Wall Mural & Tagline",
    category: "lounge",
    src: "/images/gallery/2026-09-26-16-12-28-811.jpg",
    alt: "Radio Alva's 88.4 FM official wall mural with headphones, microphone and tagline",
    description: "Studio entrance mural celebrating: 'TALUK'S 1ST COMMUNITY RADIO • VOICE FOR A BETTER TOMORROW'.",
    featured: true,
  },
  {
    id: "gal-04",
    title: "Master Acoustic Recording Studio",
    category: "recording",
    src: "/images/gallery/IMG_20261015_114052174.jpg",
    alt: "Sound-isolated broadcast booth with acoustic paneling and double-glazed observation glass",
    description: "State-of-the-art acoustic treatment, suspended microphone boom arms, and direct visual line into the master control room.",
    featured: true,
  },
  {
    id: "gal-05",
    title: "Curved Master Presentation Console",
    category: "studio",
    src: "/images/gallery/IMG_20261015_114433895.jpg",
    alt: "Curved hardwood broadcasting desk with guest seating and studio monitors",
    description: "Ergonomic multi-seat interview desk tailored for community panel discussions, farmer forums, and student roundtables.",
    featured: true,
  },
  {
    id: "gal-06",
    title: "Live On-Air Control Desk",
    category: "studio",
    src: "/images/gallery/IMG_20261015_114545794.jpg",
    alt: "Control room desk with Dell all-in-one broadcast terminal and audio mixers",
    description: "Transmission automation hub with digital audio workstations, headphone splitters, and audio leveling gear.",
    featured: false,
  },
  {
    id: "gal-07",
    title: "Station Reception & Guest Lounge",
    category: "lounge",
    src: "/images/gallery/IMG_20260926_162212263.jpg",
    alt: "Spacious reception lounge with golden curtains and traditional seating",
    description: "Warm, welcoming community lounge where local artists, farmers, and students gather before live broadcasts.",
    featured: false,
  },
  {
    id: "gal-08",
    title: "Studio Visitor Lounge & Entrance",
    category: "lounge",
    src: "/images/gallery/IMG_20261015_113834805.jpg",
    alt: "Wide angle perspective of the reception lounge and acoustic studio entry",
    description: "Welcoming foyer connecting the public reception area to the soundproofed broadcast and recording suites.",
    featured: false,
  },
  {
    id: "gal-09",
    title: "Anchor Position & Talkback Station",
    category: "studio",
    src: "/images/gallery/IMG_20261015_114439247.jpg",
    alt: "Radio host microphone position with Behringer mixer and studio monitors",
    description: "Primary RJ position equipped with directional shockmount microphone and talkback system for station hosts.",
    featured: false,
  },
  {
    id: "gal-10",
    title: "Multi-Mic Community Round-Table",
    category: "recording",
    src: "/images/gallery/IMG_20261015_114442402.jpg",
    alt: "Broadcast table configured for live interviews with local achievers",
    description: "Designed for live community dialogues, featuring individual headphone monitoring and adjustable microphone stands.",
    featured: false,
  },
  {
    id: "gal-11",
    title: "Audio Mixer & Console Controls",
    category: "equipment",
    src: "/images/gallery/IMG_20261015_114632761.jpg",
    alt: "Analog and digital mixer channels with multi-color EQ knobs and faders",
    description: "Multi-channel audio mixing board for balancing live voice, AIR bulletins, musical beds, and community call-ins.",
    featured: false,
  },
  {
    id: "gal-12",
    title: "Studio Acoustic Architecture",
    category: "recording",
    src: "/images/gallery/IMG_20261015_114011662.jpg",
    alt: "Perforated acoustic sound absorption panels and hardwood wainscoting",
    description: "Precision-engineered sound diffusion walls providing broadcast clarity for Tulu, Kannada, and regional recordings.",
    featured: false,
  },
];
