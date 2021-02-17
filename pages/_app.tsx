import { ChakraProvider } from '@chakra-ui/react';

const Noop = ({ children }: { children: any }) => children;

function MyApp({ Component, pageProps }) {
  const Layout = Component.Layout || Noop;

  return (
    <ChakraProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ChakraProvider>
  );
}

export default MyApp;
