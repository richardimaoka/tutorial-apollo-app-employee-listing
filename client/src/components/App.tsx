import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { HeaderContainer } from "./HeaderContainer";
import { MainComponent } from "./MainContainer";

const client = new ApolloClient({
  uri: "http://localhost:4000",
  cache: new InMemoryCache(),
});

export const App = (): JSX.Element => {
  return (
    <ApolloProvider client={client}>
      <BrowserRouter>
        <HeaderContainer />
        <Routes>
          <Route path="/" element={<MainComponent />} />
        </Routes>
      </BrowserRouter>
    </ApolloProvider>
  );
};
