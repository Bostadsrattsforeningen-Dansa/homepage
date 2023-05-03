import {
  Card,
  CardBody,
  CardHeader,
  Heading,
  Stat,
  StatGroup,
  StatLabel,
  StatNumber,
} from "@chakra-ui/react";

export function AboutSummary() {
  return (
    <Card>
      <CardHeader>
        <Heading as="h3" size="lg" textAlign="center">
          Om föreningen
        </Heading>
      </CardHeader>
      <CardBody>
        <StatGroup>
          <Stat minW="200px">
            <StatLabel>Byggår</StatLabel>
            <StatNumber>2022</StatNumber>
          </Stat>

          <Stat minW="200px">
            <StatLabel>Antal bostadsrätter</StatLabel>
            <StatNumber>55</StatNumber>
          </Stat>

          <Stat minW="200px">
            <StatLabel>Boarea bostadsrätt</StatLabel>
            <StatNumber>3,000 m2</StatNumber>
          </Stat>

          <Stat minW="230px">
            <StatLabel>Org. nummer</StatLabel>
            <StatNumber>769637-2015</StatNumber>
          </Stat>

          <Stat minW="200px">
            <StatLabel>Äkta förening</StatLabel>
            <StatNumber>Ja</StatNumber>
          </Stat>

          <Stat minW="200px">
            <StatLabel>Markägande</StatLabel>
            <StatNumber>Friköpt</StatNumber>
          </Stat>

          <Stat minW="200px">
            <StatLabel>Adresser</StatLabel>
            <StatNumber>Selma Lagerlöfs gata 5</StatNumber>
            <StatNumber>Selma Lagerlöfs gata 7</StatNumber>
          </Stat>
        </StatGroup>
      </CardBody>
    </Card>
  );
}
