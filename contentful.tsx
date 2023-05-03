import {
  Code,
  Heading,
  ListItem,
  OrderedList,
  Text,
  UnorderedList,
} from "@chakra-ui/react";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { BLOCKS, MARKS, INLINES, Document } from "@contentful/rich-text-types";
import { Link } from "components";

export function renderRichText(document: Document) {
  return documentToReactComponents(document, {
    renderMark: {
      [MARKS.BOLD]: (text) => <Text as="b">{text}</Text>,
      [MARKS.ITALIC]: (text) => <Text as="i">{text}</Text>,
      [MARKS.CODE]: (text) => <Code>{text}</Code>,
      [MARKS.UNDERLINE]: (text) => <Text decoration="underline">{text}</Text>,
    },
    renderNode: {
      [BLOCKS.HEADING_1]: (node, children) => (
        <Heading as="h1">{children}</Heading>
      ),
      [BLOCKS.HEADING_2]: (node, children) => (
        <Heading as="h2" size="lg">
          {children}
        </Heading>
      ),
      [BLOCKS.HEADING_3]: (node, children) => (
        <Heading as="h3" size="md">
          {children}
        </Heading>
      ),
      [BLOCKS.HEADING_4]: (node, children) => (
        <Heading as="h4" size="sm">
          {children}
        </Heading>
      ),
      [BLOCKS.PARAGRAPH]: (node, children) => <Text>{children}</Text>,
      [BLOCKS.UL_LIST]: (node, children) => (
        <UnorderedList>{children}</UnorderedList>
      ),
      [BLOCKS.OL_LIST]: (node, children) => (
        <OrderedList>{children}</OrderedList>
      ),
      [BLOCKS.LIST_ITEM]: (node, children) => <ListItem>{children}</ListItem>,
      [INLINES.HYPERLINK]: (node, children) => (
        <Link href={node.data.uri} color="green.600">
          {children}
        </Link>
      ),
    },
    renderText: (text) => text,
  });
}
