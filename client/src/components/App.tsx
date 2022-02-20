import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { HeaderContainer } from "./HeaderContainer";
import { CompanyWideContainer } from "./CompanWideContainer";
import { DivisionContainer } from "./DivisionContainer";
import { DivisionSideBar } from "./DivisionSideBar";
import { BreadCrumbContainer } from "./BreadCrumbContainer";

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
          <Route path="/" element={<CompanyWideContainer />} />
          <Route
            path=":division"
            element={
              <>
                <BreadCrumbContainer />
                <DivisionSideBar />
                <DivisionContainer />
              </>
            }
          />
        </Routes>
      </BrowserRouter>
    </ApolloProvider>
  );
};
