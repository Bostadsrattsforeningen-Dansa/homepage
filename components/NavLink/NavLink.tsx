import { useRouter } from "next/router";
import NextLink, { LinkProps as NextLinkProps } from "next/link";
import { Link, LinkProps } from "@chakra-ui/react";

export type NavLinkProps = NextLinkProps & LinkProps;

export function NavLink(props: NavLinkProps) {
  const { pathname } = useRouter();
  return (
    <Link
      {...props}
      as={NextLink}
      color={pathname === props.href ? "green.600" : undefined}
    />
  );
}
