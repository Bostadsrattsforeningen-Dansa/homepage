import { Box, Heading, Text } from "@chakra-ui/react";
import { Link } from "components";

export function Footer() {
  return (
    <Box
      as="footer"
      display="flex"
      gap={8}
      flexWrap="wrap"
      p={12}
      bgColor="green.600"
      color="white"
    >
      <Box>
        <Heading size="sm">Org. nr.</Heading>
        <Text>769637-2015</Text>
      </Box>
      <Box>
        <Heading size="sm">Adresser</Heading>
        <Text>Selma Lagerlöfs gata 5</Text>
        <Text>Selma Lagerlöfs gata 7</Text>
      </Box>
      <Box>
        <Heading size="sm">Kontakta styrelsen</Heading>
        <Link href="mailto:styrelsen@brf-dansa.se">styrelsen@brf-dansa.se</Link>
      </Box>
      <Box display="grid">
        <Heading size="sm">Länkar</Heading>
        <Link href="https://brfvast.realportal.nu/">Brf Väst Portal</Link>
        <Link href="https://boappa.se/brf-dansa-kungalv">Boappa</Link>
        <Link href="https://nabo.se/felanmalan">Felanmälan hos Nabo</Link>
      </Box>
    </Box>
  );
}
