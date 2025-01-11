import { ROUTES } from "./constants";

export const siteConfig = {
  name: "Portia",
  description:
    "Get ultra-stable mobile proxies with unlimited data and effortless country switching ⎯⎯ perfectly tailored for developers, social media managers, E-commerce, and digital marketing professionals.",
};

export type SiteConfig = typeof siteConfig;

export enum QueryKeys {
  GET_FAQS = "faq",
  GET_ALL_FAQS = "all-faqs",
  CONTACT_US = "contact-us",
}

export const routes = [
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
