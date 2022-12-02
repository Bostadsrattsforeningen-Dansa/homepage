import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { Box, ChakraProvider, Heading, Link, Text } from '@chakra-ui/react'
import { theme } from 'styles/theme'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Box
        display="grid"
        gridTemplateRows="min-content auto min-content"
        minH="100vh"
      >
        <Box as="header" p={4}>
          <Text fontSize="3xl">Brf Dansa</Text>
        </Box>
        <Box as="main">
          <Component {...pageProps} />
        </Box>
        <Box as="footer" p={12} bgColor="green.600" color="white">
          <Heading size="sm">Kontakta styrelsen</Heading>
          <Link
            href='mailto:styrelsen@brf-dansa.se'
          >
            styrelsen[at]brf-dansa.se
          </Link>
        </Box>
      </Box>
    </ChakraProvider>
  )
}
