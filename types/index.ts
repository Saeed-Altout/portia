export interface NavLinkProps {
  label: string;
  href: string;
}

export interface NavLinksProps extends NavLinkProps {
  links?: NavLinkProps[] | undefined;
}
