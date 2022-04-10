import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { CompanyPage } from "./company/CompanyPage";
import { DepartmentPage } from "./department/DepartmentPage";
import { DivisionPage } from "./division/DivisionPage";

const client = new ApolloClient({
  uri: "http://localhost:4000",
  cache: new InMemoryCache(),
});

export const App = (): JSX.Element => {
  return (
    <ApolloProvider client={client}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<CompanyPage />} />
          <Route path=":divisionName" element={<DivisionPage />} />
          <Route
            path=":divisionName/:departmentName"
            element={<DepartmentPage />}
          />
        </Routes>
      </BrowserRouter>
    </ApolloProvider>
  );
};
