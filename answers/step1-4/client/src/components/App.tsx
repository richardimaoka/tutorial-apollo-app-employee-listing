import { HeaderContainer } from "./header/HeaderContainer";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  uri: "http://localhost:4000",
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <HeaderContainer />
    </ApolloProvider>
  );
}

export default App;