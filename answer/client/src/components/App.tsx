import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import { CompanyPage } from "./company/CompanyPage";

const client = new ApolloClient({
  uri: "http://localhost:4000",
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <CompanyPage />
    </ApolloProvider>
  );
}

export default App;
