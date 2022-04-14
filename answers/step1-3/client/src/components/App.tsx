import { HeaderContainer } from "./header/HeaderContainer";
import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  uri: "http://localhost:4000",
  cache: new InMemoryCache(),
});

function App() {
  return (
    <div>
      <HeaderContainer />
    </div>
  );
}

export default App;
