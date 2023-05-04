import { Heading, Stack } from "@chakra-ui/react";
import { AboutSummary, ContentContainer } from "components";
import Head from "next/head";

export default function RealEstateAgents() {
  return (
    <div>
      <Head>
        <title>Mäklare | Brf Dansa</title>
        <meta name="description" content="Bostadsrättsföreningen Dansa" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ContentContainer paddingY={12}>
        <Stack gap={8} width="100%">
          <Heading as="h2" textAlign="center">
            Mäklare
          </Heading>
          <AboutSummary />
        </Stack>
      </ContentContainer>
    </div>
  );
}
