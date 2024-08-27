import { NavLinksProps } from "@/types";

export const NAV_LINKS: NavLinksProps[] = [
  {
    label: "Why portia.io?",
    href: "/why-portia-io",
  },
  {
    label: "Our plans",
    href: "/our-plans",
  },
  {
    label: "Resources",
    href: "/resources",
    links: [
      {
        label: "Blogs",
        href: "/resources/blogs",
      },
      {
        label: "Services",
        href: "/resources/services",
      },
    ],
  },
  {
    label: "Contact Us",
    href: "/contact-us",
  },
];
