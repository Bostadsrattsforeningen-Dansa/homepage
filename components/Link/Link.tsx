import {
  Link as ChakraLink,
  LinkProps as ChakraLinkProps,
} from "@chakra-ui/react";
import { isExternalLink } from "helpers";
import NextLink, { LinkProps as NextLinkProps } from "next/link";

export type LinkProps = ChakraLinkProps & NextLinkProps;

export function Link(props: LinkProps) {
  return (
    <ChakraLink
      as={NextLink}
      isExternal={isExternalLink(props.href)}
      {...props}
    />
  );
}
