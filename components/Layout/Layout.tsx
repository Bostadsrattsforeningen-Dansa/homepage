import { Box } from "@chakra-ui/react";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { ReactNode } from "react";

export type LayoutProps = {
  children: ReactNode;
}

export function Layout({ children }: LayoutProps) {
  return (
    <Box
        display="grid"
        gridTemplateRows="min-content auto min-content"
        minH="100vh"
        bgColor="gray.100"
      >
        <Header />
        <Box as="main">{children}</Box>
        <Footer />
    </Box>
  );
}
