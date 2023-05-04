import {
  Avatar,
  Card,
  CardBody,
  Center,
  Container,
  Heading,
  HStack,
  Link,
  List,
  ListIcon,
  ListItem,
  SimpleGrid,
  Stack,
  Tag,
} from "@chakra-ui/react";
import { renderRichText } from "../contentful";
import { client } from "contentful-client";
import { GetStaticPropsContext } from "next";
import Head from "next/head";
import { EmailIcon, PhoneIcon } from "@chakra-ui/icons";
import { Document } from "@contentful/rich-text-types";
import { ContentContainer } from "components";

type ProfileImage = {
  fields: {
    file: {
      url: string;
    };
  };
};

type BoardMember = {
  sys: { id: string };
  fields: {
    name: string;
    positions: string[];
    phoneNumber: string;
    email: string[];
    profileImage: ProfileImage;
  };
};

type ContactInformationProps = {
  boardMembers: BoardMember[];
  body: Document;
};

export default function ContactInformation({
  boardMembers,
  body,
}: ContactInformationProps) {
  return (
    <div>
      <Head>
        <title>Kontakta oss | Brf Dansa</title>
        <meta name="description" content="Bostadsrättsföreningen Dansa" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ContentContainer paddingY={12}>
        <Stack gap={8} width="100%">
          <Heading as="h2" textAlign="center">
            Kontakta oss
          </Heading>
          <Card textAlign="center">
            <CardBody display="grid" gap={2}>{renderRichText(body)}</CardBody>
          </Card>
          <Heading as="h3" size="lg" textAlign="center">
            Styrelsen
          </Heading>
          <SimpleGrid columns={[1, 2, 3]} spacing={3}>
            {boardMembers.map(
              ({
                sys,
                fields: { name, positions, phoneNumber, email, profileImage },
              }: any) => (
                <Card key={sys.id}>
                  <CardBody>
                    <Stack gap={0.5}>
                      <Center>
                        <Avatar
                          size="2xl"
                          src={profileImage?.fields.file.url}
                        />
                      </Center>
                      <Center>
                        <Heading as="h4" size="md">
                          {name}
                        </Heading>
                      </Center>
                      <HStack gap={1} wrap="wrap">
                        {positions.map((position: string) => (
                          <Tag
                            key={position}
                            margin={0}
                            marginInlineStart="0px !important"
                          >
                            {position}
                          </Tag>
                        ))}
                      </HStack>
                      <List spacing={3} pt={3}>
                        {phoneNumber && (
                          <ListItem>
                            <ListIcon color="gray.600">
                              <PhoneIcon />
                            </ListIcon>
                            <Link
                              href={`tel:${phoneNumber.trim()}`}
                              color="green"
                            >
                              {phoneNumber}
                            </Link>
                          </ListItem>
                        )}
                        {email?.map((e: string) => (
                          <ListItem key={e}>
                            <ListIcon>
                              <EmailIcon color="gray.600" />
                            </ListIcon>
                            <Link href={`mailto:${e.trim()}`} color="green">
                              {e}
                            </Link>
                          </ListItem>
                        ))}
                      </List>
                    </Stack>
                  </CardBody>
                </Card>
              )
            )}
          </SimpleGrid>
        </Stack>
      </ContentContainer>
    </div>
  );
}

export async function getStaticProps(context: GetStaticPropsContext) {
  const result = await client.getEntries({ content_type: "contactPage" });
  const { boardMembers, body } = result.items[0].fields;

  return {
    props: { boardMembers, body },
  };
}
