import {
  Box,
  Button,
  ButtonGroup,
  Flex,
  Heading,
  Spacer,
  useMediaQuery,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerHeader,
  DrawerBody,
  useDisclosure,
  List,
  DrawerCloseButton,
  ListItem,
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import { NavLink } from "components/NavLink";

const links = [
  {
    name: "Hem",
    href: "/",
  },
  {
    name: "Mäklare",
    href: "/maklare",
  },
  {
    name: "Frågor och svar",
    href: "/fragor-och-svar",
  },
  {
    name: "Kontakta oss",
    href: "/kontakta-oss",
  },
];

export function Header() {
  const [isDesktop] = useMediaQuery("(min-width: 500px)");
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Flex
      p={4}
      minWidth="max-content"
      alignItems="center"
      gap="2"
      bgColor="white"
    >
      <Box p="2">
        <Heading size="md">Brf Dansa</Heading>
      </Box>
      <Spacer />
      <ButtonGroup gap="2">
        {isDesktop ? (
          <>
            {links.map(({ name, href }) => (
              <NavLink key={href} href={href}>
                {name}
              </NavLink>
            ))}
          </>
        ) : (
          <>
            <Button onClick={onOpen}>
              <HamburgerIcon />
            </Button>
            <Drawer
              placement="right"
              isFullHeight
              size="full"
              onClose={onClose}
              isOpen={isOpen}
            >
              <DrawerOverlay />
              <DrawerContent bgColor="gray.100">
                <DrawerHeader borderBottomWidth="1px" bgColor="white">Sidor</DrawerHeader>
                <DrawerCloseButton />
                <DrawerBody pt={6}>
                  <List spacing={0.5} borderRadius={4} overflow="hidden">
                    {links.map(({ name, href }) => (
                      <ListItem key={href} bgColor="white">
                        <NavLink
                          href={href}
                          fontSize="1.5rem"
                          padding="0.6em 0.6em"
                          display="block"
                          width="100%"
                        >
                          {name}
                        </NavLink>
                      </ListItem>
                    ))}
                  </List>
                </DrawerBody>
              </DrawerContent>
            </Drawer>
          </>
        )}
      </ButtonGroup>
    </Flex>
  );
}
