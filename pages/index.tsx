import {
  Box,
  ButtonGroup,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Container,
  Grid,
  GridItem,
  Heading,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";
import { Link, LocationMap } from "components";
import { renderRichText } from "../contentful";
import { GetStaticPropsContext } from "next";
import Head from "next/head";
import { client } from "contentful-client";
import { Document } from "@contentful/rich-text-types";

type Hero = {
  title: string;
  fields: {
    file: {
      url: string;
    };
  };
};

type InfoCard = {
  sys: {
    id: string;
  };
  fields: {
    title: string;
    description: string;
    linkPath: string;
    linkLabel: string;
  };
};

type HomeProps = {
  hero: Hero;
  about: Document;
  infoCards: InfoCard[];
};

export default function Home({ hero, about, infoCards }: HomeProps) {
  return (
    <Box bgColor="white">
      <Head>
        <title>Brf Dansa</title>
        <meta name="description" content="Bostadsrättsföreningen Dansa" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Image
        src={hero.fields.file.url}
        alt={hero.title}
        width="100%"
        maxH="70dvh"
        objectFit="cover"
        objectPosition="bottom"
      />
      <Container paddingY={12} maxW="3xl" centerContent bgColor="white">
        {renderRichText(about)}
      </Container>
      <Box bgColor="green.600" paddingY={12}>
        <Container maxW="3xl">
          <Grid gap={4} templateColumns={["1fr", "repeat(2, 1fr)"]}>
            {infoCards.map(({ sys, fields }) => (
              <GridItem key={sys.id}>
                <Card>
                  <CardHeader>
                    <Heading size="md">{fields.title}</Heading>
                  </CardHeader>
                  <CardBody>
                    <Text>{fields.description}</Text>
                  </CardBody>
                  <CardFooter>
                    <ButtonGroup>
                      <Link
                        variant="button"
                        color="green.600"
                        href={fields.linkPath}
                      >
                        {fields.linkLabel}
                      </Link>
                    </ButtonGroup>
                  </CardFooter>
                </Card>
              </GridItem>
            ))}
          </Grid>
        </Container>
      </Box>
      <Container maxW="3xl" paddingY={12}>
        <Grid gap={4} templateColumns={["1fr", "1fr", "200px auto"]}>
          <Stack gap={2}>
            <Heading>Kontakt</Heading>
            <Box>
              <Heading as="h3" size="sm">Mejladress</Heading>
              <Link href="mailto:styrelsen@brf-dansa.se" color="green.600">
                styrelsen@brf-dansa.se
              </Link>
            </Box>
            <Box>
              <Heading as="h3" size="sm">Adresser</Heading>
              <Text>Selma Lagerlöfs gata 5</Text>
              <Text>Selma Lagerlöfs gata 7</Text>
            </Box>
            <Box>
              <Heading as="h3" size="sm">Org. nr.</Heading>
              <Text>769637-2015</Text>
            </Box>
          </Stack>
          <LocationMap />
        </Grid>
      </Container>
    </Box>
  );
}

export async function getStaticProps(context: GetStaticPropsContext) {
  const homepage = await client.getEntries({ content_type: "homepage" });
  const { hero, about, infoCards } = homepage.items[0].fields;

  return {
    props: { hero, about, infoCards },
  };
}
