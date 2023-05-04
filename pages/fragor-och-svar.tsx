import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Heading,
  Stack,
} from "@chakra-ui/react";
import { renderRichText } from "../contentful";
import { client } from "contentful-client";
import { GetStaticPropsContext } from "next";
import Head from "next/head";
import { Document } from "@contentful/rich-text-types";
import { ContentContainer } from "components";

type FAQFields = {
  question: string;
  answer: Document;
};

type FAQ = {
  fields: FAQFields;
};

type FAQProps = {
  questions: FAQ[];
};

export default function FAQ({ questions }: FAQProps) {
  return (
    <div>
      <Head>
        <title>Frågor och svar | Brf Dansa</title>
        <meta name="description" content="Bostadsrättsföreningen Dansa" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ContentContainer paddingY={12}>
        <Stack gap={8} width="100%">
          <Heading as="h2" textAlign="center">
            Frågor och svar
          </Heading>
          <Accordion
            allowToggle
            bgColor="white"
            borderRadius={8}
            overflow="hidden"
          >
            {questions.map(({ fields: { question, answer } }) => (
              <AccordionItem key={question}>
                <Heading as="h3" size="sm">
                  <AccordionButton>
                    <Heading as="span" size="sm" flex="1" textAlign="left">
                      {question}
                    </Heading>
                    <AccordionIcon />
                  </AccordionButton>
                </Heading>
                <AccordionPanel pb={4}>{renderRichText(answer)}</AccordionPanel>
              </AccordionItem>
            ))}
          </Accordion>
        </Stack>
      </ContentContainer>
    </div>
  );
}

export async function getStaticProps(context: GetStaticPropsContext) {
  const result = await client.getEntries({ content_type: "faq" });
  const { items: questions } = result;

  return {
    props: { questions },
  };
}
