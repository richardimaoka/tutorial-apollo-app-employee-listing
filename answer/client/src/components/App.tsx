import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client";
import { HeaderContainer } from "./header/HeaderContainer";

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
