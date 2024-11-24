import {
  InfinityIcon,
  RefreshCcw,
  ChartNoAxesColumn,
  Grid2X2,
  Star,
  Zap,
} from "lucide-react";

// Endpoints
export const API_GET_ALL_PACKAGES = "/get-all-packages";
export const API_GET_ALL_LOCATIONS = "/get-proxy-locations";
export const API_GET_ALL_COUNTRIES = "/get-countries";
export const API_GET_ALL_CITIES = "/get-cities";
export const API_GET_SERVICE_PROVIDERS = "/get-service-providers";
export const API_GET_PLANS_WITH_COST = "/get-plans-with-cost";
export const API_GET_IP_ROTATIONS = "/get-Ip-Rotations";
export const API_GET_PROXIES_COUNTS = "/proxies/counts";
export const API_GET_PROXIES_ACTIVE = "/proxies/active";
export const API_GET_PROXIES_INACTIVE = "/proxies/inactive";

// Constants
const NAME_PROJECT = "PORTIA";
const NAME_SECRET = "NEXT_CWS";

export const TOKEN_KEY = `${NAME_SECRET}_${NAME_PROJECT}_TOKEN`;
export const EMAIL_KEY = `${NAME_SECRET}_${NAME_PROJECT}_EMAIL`;
export const USER_KEY = `${NAME_SECRET}_${NAME_PROJECT}_USER`;
// Special Keys For LocalStorage
export const EMAIL = `${NAME_PROJECT}-email`;
export const AUTH_COOKIE_TOKEN = "cws-portia-token";
export const AUTH_COOKIE_REFRESH_TOKEN = "cws-portia-refresh_token";
export const AUTH_COOKIE_SESSION = "cws-portia-session";
export const AUTH_COOKIE_INFO_MAIL = "cws-portia-info-mail";

export const statisticData = [
  {
    value: "40k+",
    name: "Happy Customers",
    description: "We've helped over 40k amazing customers.",
  },
  {
    value: "125+",
    name: "Proxy Locations",
    description:
      "Switch between proxies quickly to access global content seamlessly.",
  },
  {
    value: "99.9%",
    name: "Uptime",
    description:
      "Get proxies from different sources, like Portia's mobile network.",
  },
  {
    value: "200+",
    name: "5-star reviews",
    description: "We're proud of our 5-star rating with over 200 reviews.",
  },
];
export const featuresData = [
  {
    icon: InfinityIcon,
    title: "Unlimited Data Usage",
    description: "No Extra Charges Enjoy unlimited data with no hidden fees.",
  },
  {
    icon: RefreshCcw,
    title: "Free Country Switching",
    description: "Switch between multiple countries without additional costs.",
  },
  {
    icon: ChartNoAxesColumn,
    title: "Ip Rotation",
    description:
      "Change IPs easily with automatic, API, or manual rotation methods.",
  },
  {
    icon: Grid2X2,
    title: "Multi Protocol Support",
    description:
      "Compatible with both HTTPS and SOCKS5 protocols, ensuring adaptability with various software solutions.",
  },
  {
    icon: Star,
    title: "High-Quality, Reliable Proxies",
    description: "Join over 40,000 satisfied clients worldwide.",
  },
  {
    icon: Zap,
    title: "Fast Proxy Speeds",
    description:
      "Enjoy speeds around 15 Mbps with a ping less than 900 ms,perfect for seamless browsing and operations.",
  },
];
export const plansData = [
  {
    price: "10/mth",
    type: "Silver package",
    features: [
      "USA only",
      "2 carriers (T-Mobile, AT&T)",
      "Unlimited changes",
      "Good speed & stability",
      "Few ports",
      "100,000+ IPs in the USA",
      "Multiple states & cities",
    ],
    isPopular: false,
  },
  {
    price: "14.5/mth",
    type: "Golden package",
    features: [
      "8 countries",
      "Unlimited changes",
      "1M+ IPs globally",
      "Multiple carriers, states & cities",
      "Many ports",
      "Great speed & stability",
    ],
    isPopular: true,
  },
  {
    price: "20/mth",
    type: "Platinum package",
    features: [
      "15 countries",
      "Unlimited changes",
      "5M+ IPs globally",
      "Wide carrier & location support",
      "Numerous ports",
      "Premium speed & stability",
    ],
    isPopular: false,
  },
];
export const plansData2 = [
  {
    type: "Silver plan",
    price: "$10",
    description:
      "Essential features for users in the USA with good speed and stability.",
    features: [
      "USA only",
      "2 carriers (T-Mobile, AT&T)",
      "Unlimited changes",
      "Good speed & stability",
      "Few ports",
      "100,000+ IPs in the USA",
      "Multiple states & cities",
    ],
    message: "Ideal for individuals seeking reliable access within the USA.",
    isPopular: false,
  },
  {
    type: "Golden plan",
    price: "$14.5",
    description:
      "A well-rounded package with global IP coverage, multiple carriers, and great speed.",
    features: [
      "8 countries",
      "Unlimited changes",
      "1M+ IPs globally",
      "Multiple carriers, states & cities",
      "Many ports",
      "Great speed & stability",
    ],
    message: "Best value for extensive coverage and stability.",
    isPopular: true,
  },
  {
    type: "Platinum plan",
    price: "$20",
    description:
      "Premium features with wide carrier and location support, offering top-tier speed and stability.",
    features: [
      "15 countries",
      "Unlimited changes",
      "5M+ IPs globally",
      "Wide carrier & location support",
      "Numerous ports",
      "Premium speed & stability",
    ],
    message:
      "Everything in the Golden plan plus wider global coverage and premium speed.",
    isPopular: false,
  },
];
export const countriesData = [
  {
    name: "United States",
    users: "1000,000",
    flagUrl: "/icons/flags/US.svg",
  },
  {
    name: "United Kingdom",
    users: "1000,000",
    flagUrl: "/icons/flags/GB.svg",
  },
  {
    name: "Germany",
    users: "1000,000",
    flagUrl: "/icons/flags/DE.svg",
  },
  {
    name: "Canada",
    users: "1000,000",
    flagUrl: "/icons/flags/CA.svg",
  },
  {
    name: "Italy",
    users: "1000,000",
    flagUrl: "/icons/flags/IT.svg",
  },
  {
    name: "Australia",
    users: "1000,000",
    flagUrl: "/icons/flags/AU.svg",
  },
  {
    name: "Spain",
    users: "1000,000",
    flagUrl: "/icons/flags/ES.svg",
  },
  {
    name: "France",
    users: "1000,000",
    flagUrl: "/icons/flags/FR.svg",
  },
];
