import {
  InfinityIcon,
  RefreshCcw,
  ChartNoAxesColumn,
  Grid2X2,
  Star,
  Zap,
} from "lucide-react";

import {
  FaFacebook,
  FaGithub,
  FaTwitter,
  FaLinkedinIn,
  FaTelegram,
} from "react-icons/fa";

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
    price: "15/mth",
    type: "Basic plan",
    features: ["feature 1", "feature 2", "feature 3", "feature 4", "feature 5"],
  },
  {
    price: "30/mth",
    type: "Standard plan",
    features: [
      "All in Basic plus",
      "feature 1",
      "feature 2",
      "feature 3",
      "feature 4",
    ],
  },
  {
    price: "40/mth",
    type: "Premium plan",
    features: [
      "All in Standard plus",
      "feature 1",
      "feature 2",
      "feature 3",
      "feature 4",
    ],
  },
];

export const faqsData = [
  {
    question: "Is there a any trial available?",
    answer: "Yes. It adheres to the WAI-ARIA design pattern.",
  },
  {
    question: "Can I change my plan later?",
    answer: "Yes. It adheres to the WAI-ARIA design pattern.",
  },
  {
    question: "What is your cancellation policy?",
    answer: "Yes. It adheres to the WAI-ARIA design pattern.",
  },
  {
    question: "Can other info be added to an invoice?",
    answer: "Yes. It adheres to the WAI-ARIA design pattern.",
  },
  {
    question: "How dose billing work?",
    answer: "Yes. It adheres to the WAI-ARIA design pattern.",
  },
];

export const footerLinks = [
  {
    title: "Company",
    links: [
      {
        label: "Why portia.io?",
        href: "/",
      },
      {
        label: "Pricing",
        href: "/",
      },
      {
        label: "Testimonials",
        href: "/",
      },
      {
        label: "Affiliate program",
        href: "/",
      },
      {
        label: "Contact us",
        href: "/",
      },
    ],
  },
  {
    title: "Resources",
    links: [
      {
        label: "Blog",
        href: "/",
      },
      {
        label: "Our Faqs",
        href: "/",
      },
    ],
  },
  {
    title: "Social",
    links: [
      {
        label: "Twitter",
        href: "/",
      },
      {
        label: "LinkedIn",
        href: "/",
      },
      {
        label: "Facebook",
        href: "/",
      },
      {
        label: "Github",
        href: "/",
      },
    ],
  },
  {
    title: "Legal",
    links: [
      {
        label: "Terms",
        href: "/",
      },
      {
        label: "Privacy",
        href: "/",
      },
      {
        label: "Licenses",
        href: "/",
      },
    ],
  },
];

export const footerIcons = [
  {
    name: "Twitter",
    icon: FaTwitter,
    href: "/",
  },
  {
    name: "Linkedin",
    icon: FaLinkedinIn,
    href: "/",
  },
  {
    name: "Facebook",
    icon: FaFacebook,
    href: "/",
  },
  {
    name: "Github",
    icon: FaGithub,
    href: "/",
  },
  {
    name: "Telegram",
    icon: FaTelegram,
    href: "/",
  },
];
