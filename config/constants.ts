import {
  InfinityIcon,
  RefreshCcw,
  ChartNoAxesColumn,
  Grid2X2,
  Star,
  Zap,
  Facebook,
  Linkedin,
  Twitter,
  Github,
} from "lucide-react";

import {
  FaFacebook,
  FaGithub,
  FaTwitter,
  FaLinkedinIn,
  FaTelegram,
} from "react-icons/fa";

const NAME_PROJECT = "PORTIA";
const NAME_SECRET = "NEXT_CWS";

export const TOKEN_KEY = `${NAME_SECRET}_${NAME_PROJECT}_TOKEN`;
export const EMAIL_KEY = `${NAME_SECRET}_${NAME_PROJECT}_EMAIL`;
export const USER_KEY = `${NAME_SECRET}_${NAME_PROJECT}_USER`;
export const FCM_TOKEN_KEY = `${NAME_SECRET}_${NAME_PROJECT}_FCM_TOKEN`;
export const ENDPOINTS = {
  AFFILIATE_HISTORIES: "/affiliate/earnings/history",
  AFFILIATE_STATISTICS: "/affiliate/earnings/statistics",
  DEPOSIT: "/deposit",
  DEPOSIT_HISTORIES: "/deposits/history",
  DEPOSIT_STATISTICS: "/deposits/Statistics",
  LOGIN: "/auth/login",
  LOGOUT: "/auth/logout",
  REGISTER: "/auth/register",
  SEND_RESET_EMAIL: "/auth/send-email-to-reset-password",
  SET_NEW_PASSWORD: "/auth/set-new-password",
  RESEND_VERIFICATION_CODE: "/auth/resend-verification-code",
  VERIFY_CODE: "/auth/confirm-verification-code",
  GET_WAY_PAYMENT: "/available_gateway",
  GET_FAQS: "/get-all-faqs",
  GET_TOP_FAQS: "/get-faq",
  GET_PROXY_LOCATIONS: "/get-all-proxy-location",
  GET_DATA_MAP: "/map",
  GET_OFFERS: "/offers",
  GET_FEATURES_OFFER: "/features-with-packages",
  GET_PLANS_OFFERS: "/offers-with-packages-features",
  GET_PACKAGES: "/get-package-with-plan",
  GET_ALL_OFFERS: "/all-offers",
  GET_PROXIES: "/proxies",
  GET_USER: "/get-user-details",
  EDIT_PASSWORD_PROXY: "/edit-password-proxy",
  EDIT_PARENT_PROXY: "/edite-parent-proxy",
  FIX_PROXY: "/fix-proxy",
  RENEW_PROXY: "/renew",
  MANAGE_PROXY: "/mange_proxy",
  CREATE_PROXY: "/create-proxy",
  GET_PROXY_BY_ID: "/get-proxy",
  GET_REVIEWS: "/reviews",
  GET_ALL_PACKAGES: "/get-all-packages",
  GET_TABLES: "/get-tables",
  GET_PORTS: "/get-ports",
  UPDATE_USER_PROFILE: "/update-user-profile",
  SEND_CONTACT_MESSAGE: "/contact-us",
  EXPORT_TABLES: "/export",
  GET_COST_PLANS: "/get-plans-with-cost",
  GET_SOCIAL_MEDIA_ACCOUNTS: "/social-media-accounts",
  GET_USER_BALANCE: "/get-user-balance",
  GET_USER_DETAILS: "/get-user-details",
  GET_NOTIFICATIONS: "/notifications/all",
  MARK_ALL_NOTIFICATIONS: "/notifications/mark-all-read",
  MARK_NOTIFICATION: "/notifications/mark-as-read",
};

export const ROUTES = {
  DASHBOARD_PROXIES: "/dashboard/proxies",
  DASHBOARD_DEPOSITS: "/dashboard/deposits",
  DASHBOARD_PLANS: "/dashboard/pricing-plans",
  DASHBOARD_AFFILIATE: "/dashboard/affiliate",
  DASHBOARD_LOCATIONS: "/dashboard/locations",
  DASHBOARD_HOME: "/dashboard",
  DASHBOARD_SETTINGS: "/dashboard/settings",

  HOME: "/",
  CONTACT_US: "/contact-us",
  OUR_PLANS: "/our-plans",
  PORTIA_INFO: "/why-portia-io",
  PRICING_PLAN: "/pricing-plans",
  RESOURCES: "/pricing-plans",
  FAQS: "/faqs",
  TESTIMONIALS: "/testimonials",
  LOCATIONS: "/locations",
  TERMS: "/terms",
  PRIVACY_POLICY: "/privacy-policy",

  FORGET_PASSWORD: "/auth/send-reset-email",
  LOGIN: "/auth/login",
  REGISTER: "/auth/register",
  VERIFY_EMAIL: "/auth/verify-code",
  VERIFY_EMAIL_CONFIRM: "/auth/verify-email",
  VERIFY_RESET_EMAIL: "/auth/verify-reset-email",
  PASSWORD_RESET: "/auth/password-reset",
  EMAIL_CONFIRMED: "/auth/email-confirmed",
};

export enum ModalType {
  LOGOUT = "logout",
  EDIT_INFO_PROXY = "edit-info-proxy",
  EDIT_AUTH_PROXY = "edit-auth-proxy",
  RENEW_PROXY = "renew-proxy",
  FIX_PROXY = "fix-proxy",
  ACTIVE_PROXY = "active-proxy",
  ADD_PROXY = "add-proxy",
  EXPORT_DATA = "export-data",
  NOTIFICATION = "notification",
  MANAGE_PROXY = "manage-proxy",
  ADD_FUNDS = "add-funds",
}

export const dashboardRoutes = [
  {
    label: "Dashboard",
    href: ROUTES.DASHBOARD_HOME,
  },
  {
    label: "My Proxies",
    href: ROUTES.DASHBOARD_PROXIES,
  },
  {
    label: "Pricing Plans",
    href: ROUTES.DASHBOARD_PLANS,
  },
  {
    label: "Deposits",
    href: ROUTES.DASHBOARD_DEPOSITS,
  },
  {
    label: "My Affiliate",
    href: ROUTES.DASHBOARD_AFFILIATE,
  },
];

export const navLinks = [
  {
    label: "Why portia.io?",
    href: ROUTES.PORTIA_INFO,
  },
  {
    label: "Pricing plans",
    href: ROUTES.PRICING_PLAN,
  },
  {
    label: "Resources",
    href: ROUTES.RESOURCES,
    links: [
      {
        label: "Faqs",
        href: ROUTES.FAQS,
        description:
          "Learn & whatch our client questions and how we answer it .",
      },
      {
        label: "Testimonials",
        href: ROUTES.TESTIMONIALS,
        description: "Learn how our customers are making big changes.",
      },
    ],
  },
  {
    label: "Locations",
    href: ROUTES.LOCATIONS,
  },
  {
    label: "Contact Us",
    href: ROUTES.CONTACT_US,
  },
];

export const sidebarLinks = [
  {
    name: "Terms",
    href: ROUTES.TERMS,
  },
  {
    name: "Privacy Policy",
    href: ROUTES.PRIVACY_POLICY,
  },
];

export const footerLinks = [
  {
    title: "Company",
    links: [
      {
        label: "Why portia.io?",
        href: ROUTES.PORTIA_INFO,
      },
      {
        label: "Our Plans",
        href: ROUTES.OUR_PLANS,
      },
      {
        label: "Testimonials",
        href: ROUTES.TESTIMONIALS,
      },

      {
        label: "Contact us",
        href: ROUTES.CONTACT_US,
      },
    ],
  },
  {
    title: "Resources",
    links: [
      {
        label: "Our Faqs",
        href: ROUTES.FAQS,
      },
    ],
  },
  {
    title: "Legal",
    links: [
      {
        label: "Terms",
        href: ROUTES.TERMS,
      },
      {
        label: "Privacy Policy",
        href: ROUTES.PRIVACY_POLICY,
      },
    ],
  },
];

export const customersData = [
  {
    rate: 5,
    name: "Alisa Hester",
    position: "PM, Hourglass",
    agency: "Web Design Agency",
    comment: "“We’ve really sped up our workflow using Untitled.”",
    imgUrl: "/images/users/user1.png",
  },
  {
    rate: 5,
    name: "Rich Wilson",
    position: "COO, Command+R",
    agency: "Web Development Agency",
    comment: "“We’ve really sped up our workflow using Untitled.”",
    imgUrl: "/images/users/user2.png",
  },

  {
    rate: 5,
    name: "Johnny Bell",
    position: "PM, Sisyphus",
    agency: "Machine Learning",
    comment: "“We’ve really sped up our workflow using Untitled.”",
    imgUrl: "/images/users/user3.png",
  },
  {
    rate: 5,
    name: "Annie Stanley",
    position: "Designer, Catalog",
    agency: "UX Agency",
    comment: "“We’ve really sped up our workflow using Untitled.”",
    imgUrl: "/images/users/user4.png",
  },
];
export const countriesName = [
  { label: "US", value: "US" },
  { label: "SY", value: "SY" },
  { label: "DE", value: "DE" },
  { label: "AF", value: "AF" },
  { label: "AL", value: "AL" },
  { label: "AR", value: "AR" },
  { label: "AT", value: "AT" },
  { label: "AU", value: "AU" },
  { label: "AZ", value: "AZ" },
  { label: "BA", value: "BA" },
  { label: "BD", value: "BD" },
  { label: "BE", value: "BE" },
  { label: "BG", value: "BG" },
  { label: "BR", value: "BR" },
  { label: "CA", value: "CA" },
  { label: "CH", value: "CH" },
  { label: "CL", value: "CL" },
  { label: "CN", value: "CN" },
  { label: "CO", value: "CO" },
  { label: "CR", value: "CR" },
  { label: "CY", value: "CY" },
  { label: "CZ", value: "CZ" },
  { label: "DK", value: "DK" },
  { label: "EE", value: "EE" },
  { label: "ES", value: "ES" },
  { label: "FI", value: "FI" },
  { label: "FR", value: "FR" },
  { label: "GR", value: "GR" },
  { label: "HK", value: "HK" },
  { label: "HR", value: "HR" },
  { label: "HU", value: "HU" },
  { label: "ID", value: "ID" },
  { label: "IE", value: "IE" },
  { label: "IL", value: "IL" },
  { label: "IN", value: "IN" },
  { label: "IT", value: "IT" },
  { label: "JP", value: "JP" },
  { label: "KR", value: "KR" },
  { label: "LT", value: "LT" },
  { label: "LU", value: "LU" },
  { label: "MX", value: "MX" },
  { label: "MY", value: "MY" },
  { label: "NL", value: "NL" },
  { label: "NO", value: "NO" },
  { label: "NZ", value: "NZ" },
  { label: "PH", value: "PH" },
  { label: "PL", value: "PL" },
  { label: "PT", value: "PT" },
  { label: "RU", value: "RU" },
  { label: "SE", value: "SE" },
  { label: "SG", value: "SG" },
  { label: "TH", value: "TH" },
  { label: "TR", value: "TR" },
];
export const termsOfUse = [
  {
    id: 1,
    title: "Introduction",
    description:
      "Welcome to portia.pro! By using our site, you agree to comply with these terms.",
  },
  {
    id: 2,
    title: "Use of the Site",
    description:
      "You agree to use the site for lawful purposes only. Using it in a way that could harm the service or others is prohibited.",
  },
  {
    id: 3,
    title: "Intellectual Property",
    description:
      "All content on the site, including text, images, and logos, is the property of portia.pro or its licensors.",
  },
  {
    id: 4,
    title: "Limitation of Liability",
    description:
      "We are not liable for any damages resulting from your use of the site or inability to use it.",
  },
  {
    id: 5,
    title: "Modifications",
    description:
      "We reserve the right to modify these terms at any time, and you will be notified of any changes.",
  },
  {
    id: 6,
    title: "Governing Law",
    description: "These terms are governed by the laws of USA.",
  },
];
export const privacyPolicy = [
  {
    id: 1,
    title: "Introduction",
    description:
      "portia.pro is committed to protecting your privacy. This policy outlines how we collect, use, and protect your information.",
  },
  {
    id: 2,
    title: "Information We Collect",
    description:
      "Personal information (such as name, email address). Usage information (such as IP address, browser type).",
  },
  {
    id: 3,
    title: "How We Use Your Information",
    description:
      "To improve our services. To communicate with you regarding orders and updates.",
  },
  {
    id: 4,
    title: "Information Protection",
    description:
      "We use security technologies to protect your personal information from unauthorized access.",
  },
  {
    id: 5,
    title: "Your Rights",
    description:
      "You have the right to access, correct, or delete your personal information.",
  },
  {
    id: 6,
    title: "Modifications",
    description:
      "We reserve the right to modify this privacy policy, and you will be notified of any changes.",
  },
  {
    id: 7,
    title: "Contact Us",
    description:
      "If you have any questions, you can contact us at the available contacts on site.",
  },
];
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
