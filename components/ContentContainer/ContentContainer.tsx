import { Container, ContainerProps } from "@chakra-ui/react";

export type ContentContainerProps = ContainerProps;

export function ContentContainer(props: ContentContainerProps) {
  return <Container maxW="4xl" {...props} />;
}
