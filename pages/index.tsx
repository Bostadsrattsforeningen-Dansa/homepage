import { Box, Heading, Text } from '@chakra-ui/react'
import Head from 'next/head'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Brf Dansa</title>
        <meta name="description" content="Bostadsrättsföreningen Dansa" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Box display="grid" justifyItems="center" p={8}>
        <Heading>
          Bostadsrättsföreningen Dansa
        </Heading>

        <Text>Under uppbyggnad...</Text>
      </Box>
    </div>
  )
}
