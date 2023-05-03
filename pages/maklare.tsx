import { Container, Heading, Stack } from "@chakra-ui/react";
import { AboutSummary } from "components";
import Head from "next/head";

export default function RealEstateAgents() {
  return (
    <div>
      <Head>
        <title>Mäklare | Brf Dansa</title>
        <meta name="description" content="Bostadsrättsföreningen Dansa" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container paddingY={12} maxW="3xl">
        <Stack gap={8} width="100%">
          <Heading as="h2" textAlign="center">
            Mäklare
          </Heading>
          <AboutSummary />
        </Stack>
      </Container>
    </div>
  );
}
