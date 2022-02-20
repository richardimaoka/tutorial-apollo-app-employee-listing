import { MainComponent } from "./MainContainer";
import { HeaderContainer } from "./HeaderContainer";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  uri: "http://localhost:4000",
  cache: new InMemoryCache(),
});

export const App = (): JSX.Element => {
  return (
    <ApolloProvider client={client}>
      <HeaderContainer />
      <MainComponent />
    </ApolloProvider>
  );
};
