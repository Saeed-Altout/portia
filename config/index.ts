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
    href: "/dashboard",
  },
  {
    label: "My Proxies",
    href: "/dashboard/proxies",
  },
  {
    label: "Pricing Plans",
    href: "/dashboard/pricing-plans",
  },
  {
    label: "Deposits",
    href: "/dashboard/deposits",
  },
  {
    label: "My Affiliate",
    href: "/dashboard/affiliate",
  },
];
