import {
  Shovel,
  Building2,
  Mountain,
  Droplets,
  type LucideIcon,
} from "lucide-react";

// ── Navigation ──────────────────────────────────────────────
export const navLinks = [
  { label: "Diensten", href: "#diensten" },
  { label: "Over Ons", href: "#over-ons" },
  { label: "Projecten", href: "#projecten" },
  { label: "Contact", href: "#contact" },
] as const;

// ── Hero ────────────────────────────────────────────────────
export const heroContent = {
  headline: "Grond- & Afbraakwerken",
  subheadline:
    "Dumagro staat garant voor vakmanschap, veiligheid en efficiëntie bij elk project. Van grondverzet tot sloop — wij leveren kwaliteit.",
  ctaPrimary: "Plan uw afspraak",
  ctaSecondary: "Onze Diensten",
};

// ── Services ────────────────────────────────────────────────
export interface Service {
  icon: LucideIcon;
  title: string;
  description: string[];
}

export const services: Service[] = [
  {
    icon: Shovel,
    title: "Grondwerken",
    description: [
      "Uitgraven van funderingen",
      "Kleine graafwerken",
      "Voorbereiding van opritten en terrassen",
      "Bouwgrond bouwklaar maken",
      "Egaliseren van terrein",
      "Uitgraven van zwembaden of vijvers",
      "Plaatsen van boordstenen",
    ],
  },
  {
    icon: Building2,
    title: "Afbraakwerken",
    description: [
      "Afbraak van huizen",
      "Afbraak van garages",
      "Kleine en middelgrote sloopwerken",
      "Afbraak van bedrijfsgebouwen en loodsen",
      "Uitbreken oude funderingen en kelders",
      "Uitschieten van beton en betonvloeren",
    ],
  },
  {
    icon: Mountain,
    title: "Tuin- en terreinwerken",
    description: [
      "Tuin uitgraven",
      "Tuin heraanleggen",
      "Boomstronken en struiken verwijderen",
      "Grachten uitgraven",
      "Terrein verzorgd en functioneel aanleggen",
    ],
  },
  {
    icon: Droplets,
    title: "Rioleringswerken",
    description: [
      "Plaatsen van riolering",
      "Sleuven graven voor leidingen",
      "Drainage uitvoeren",
      "Herstellingen van riolering",
      "Plaatsen en/of scheiden van regenwater en afvalwater",
      "Plaatsen van septische en regenwaterputten",
      "Plaatsen van inspectieputten",
    ],
  },
];

// ── About ───────────────────────────────────────────────────
export const aboutContent = {
  title: "Over Dumagro",
  subtitle: "+8 jaar ervaring in grond- & afbraakwerken",
  paragraphs: [
    "Dumagro is meer dan een uitvoerder — het is het werk van een vakman met passie voor grond- en afbraakwerken.",
    "Zaakvoerder Mathias staat zelf mee op de werf en volgt elk project van dichtbij op.",
    "Al van jongs af aan is hij actief in de sector en groeide zijn ervaring rechtstreeks vanuit de praktijk. Wat begon als interesse, is uitgegroeid tot een echte passie voor het vak.",
    "Die passie vertaalt zich vandaag in een persoonlijke aanpak, oog voor detail en een sterke focus op kwaliteit. Bij Dumagro weet u wie er op uw project werkt — en dat maakt het verschil.",
  ],
  values: [
    "Betrouwbaar",
    "Ervaren",
    "Professioneel",
    "Veilig",
  ],
};

// ── Projects ────────────────────────────────────────────────
export interface Project {
  title: string;
  category: string;
  gradient: string;
  beforeImage?: string;
  afterImage?: string;
  description?: string;
}

export const projects: Project[] = [
  {
    title: "Grondwerken Klerken",
    category: "Grondwerken",
    gradient: "from-dark-lighter to-dark-light",
    beforeImage: "/IMG_1406.jpeg",
    afterImage: "/IMG_1411.jpeg",
    description:
      "Bij deze klant hebben we het perceel volledig voorbereid voor een prachtig eindresultaat. We hebben de bestaande graszode verwijderd, het terrein opgehoogd en daarna zorgvuldig geëgaliseerd en genivelleerd. Het resultaat is een strak en vlak oppervlak, klaar voor verdere aanleg of beplanting.",
  },
  {
    title: "Demo Project 1",
    category: "Afbraakwerken",
    gradient: "from-lime/30 to-dark-lighter",
  },
  {
    title: "Demo Project 2",
    category: "Rioleringswerken",
    gradient: "from-dark-light to-lime/30",
  },
];

// ── Stats ───────────────────────────────────────────────────
export interface Stat {
  value: number;
  suffix: string;
  label: string;
}

export const stats: Stat[] = [
  { value: 8, suffix: "+", label: "Jaar Ervaring" },
  { value: 10, suffix: "+", label: "Projecten" },
  { value: 10, suffix: "+", label: "Tevreden Klanten" },
  { value: 100, suffix: "%", label: "Tevredenheid" },
];

// ── Testimonials ────────────────────────────────────────────
export interface Testimonial {
  quote: string;
  name: string;
  company: string;
}

export const testimonials: Testimonial[] = [
  {
    quote:
      "Mathias kwam persoonlijk langs voor de offerte. Zeer correcte prijs, duidelijke communicatie en een top eindresultaat. Zeker een aanrader!",
    name: "Claire",
    company: "Particuliere Klant",
  },
];

// ── Contact ─────────────────────────────────────────────────
export const contactInfo = {
  name: "Mathias Dumortier",
  btw: "BE1031394466",
  address: "Rekestraat 19, 8840 Staden",
  phone: "+32 491/29.89.84",
  email: "info@dumagro.be",
  hours: "Ma - Za: 07:00 - 18:30",
};

export const serviceOptions = [
  ...services.map((service) => service.title),
  "Andere",
];

// ── Footer ──────────────────────────────────────────────────
export const footerDescription =
  "Dumagro is uw betrouwbare partner voor professionele grond- en afbraakwerken in België. Kwaliteit, veiligheid en vakmanschap staan bij ons centraal.";

export const socialLinks = [
  { label: "Facebook", href: "#" },
  { label: "LinkedIn", href: "#" },
  { label: "Instagram", href: "#" },
];
