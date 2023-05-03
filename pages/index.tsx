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
      <Image src={hero.fields.file.url} alt={hero.title} />
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
      <LocationMap />
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
