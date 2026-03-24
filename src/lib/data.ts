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
  headline: "Uw Partner voor Grondwerken & Afbraak",
  subheadline:
    "Dumagro staat garant voor vakmanschap, veiligheid en efficiëntie bij elk project. Van grondverzet tot sloop — wij leveren kwaliteit.",
  ctaPrimary: "Plan uw afspraak",
  ctaSecondary: "Onze Diensten",
};

// ── Services ────────────────────────────────────────────────
export interface Service {
  icon: LucideIcon;
  title: string;
  description: string;
}

export const services: Service[] = [
  {
    icon: Shovel,
    title: "Grondwerken",
    description:
      "Uitgraven van funderingen, kleine graafwerken, tuinen uitgraven en nivelleren, voorbereiding van opritten en terrassen, bouwgrond bouwklaar maken en egaliseren van terrein.",
  },
  {
    icon: Building2,
    title: "Afbraakwerken",
    description:
      "Afbraak van huizen, bijgebouwen, garages, terrassen, opritten, tuinhuizen en schuren, inclusief kleine en middelgrote sloopwerken en selectieve afbraak met materiaalsortering.",
  },
  {
    icon: Mountain,
    title: "Tuin- en terreinwerken",
    description:
      "Tuin uitgraven en heraanleggen, boomstronken verwijderen en grachten uitgraven voor een verzorgd en functioneel terrein.",
  },
  {
    icon: Droplets,
    title: "Rioleringswerken",
    description:
      "Plaatsen van riolering, sleuven graven voor leidingen, regenwaterafvoer plaatsen, drainage uitvoeren en herstellingen van riolering.",
  },
];

// ── About ───────────────────────────────────────────────────
export const aboutContent = {
  title: "Over Dumagro",
  subtitle: "8 jaar ervaring in grond- & afbraakwerken",
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
}

export const projects: Project[] = [
  {
    title: "Grondwerken Klerken",
    category: "Grondwerken",
    gradient: "from-dark-lighter to-dark-light",
    beforeImage: "/IMG_1406.jpeg",
    afterImage: "/IMG_1411.jpeg",
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
  {
    quote:
      "De afbraakwerken werden veilig en efficiënt uitgevoerd, volledig binnen het afgesproken budget. Wij werken graag opnieuw samen.",
    name: "Marie Claes",
    company: "Claes & Partners",
  },
  {
    quote:
      "Van offerte tot oplevering verliep alles vlekkeloos. Het team van Dumagro denkt mee en komt met praktische oplossingen.",
    name: "Peter Willems",
    company: "Willems Vastgoed",
  },
];

// ── Contact ─────────────────────────────────────────────────
export const contactInfo = {
  address: "Rekestraat 19, 8840 Staden",
  phone: "0491298984",
  email: "info@dumagro.be",
  hours: "Ma - Vr: 07:00 - 17:00",
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
