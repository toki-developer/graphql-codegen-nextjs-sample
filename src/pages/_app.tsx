import { AppProps } from 'next/dist/next-server/lib/router/router'
import '../styles/globals.css'
import client from "src/apollo/apollo-client";
import { ApolloProvider } from "@apollo/client";


const App = ({ Component, pageProps }: AppProps) => {
  return (
    <ApolloProvider client={client} >
        <Component {...pageProps} />
    </ApolloProvider>
  )
}

export default App
