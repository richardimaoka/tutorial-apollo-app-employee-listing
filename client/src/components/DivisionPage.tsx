import { gql } from "@apollo/client";
import { useParams } from "react-router-dom";
import { useGetSingleDivisionQuery } from "../generated/graphql";
import { BreadcrumbContainer } from "./BreadcrumbContainer";
import { DivisionContainer } from "./DivisionContainer";
import { DivisionSideBar } from "./DivisionSideBar";

//This is read by GraphQL codegen to generate types
gql`
  query GetSingleDivision($divisionName: String) {
    division(divisionName: $divisionName) {
      ...BreadcrumbContainer
      ...DivisionContainer
    }
  }
`;

export const DivisionPage = (): JSX.Element => {
  const params = useParams<"divisionName">();
  const { loading, error, data } = useGetSingleDivisionQuery({
    variables: {
      divisionName: params.divisionName ? params.divisionName : "",
    },
  });

  if (loading) {
    return <></>;
  } else if (error) {
    return <></>;
  } else if (!data || !data.division || !data.division.members) {
    return <></>;
  } else {
    return (
      <>
        <BreadcrumbContainer fragment={data.division} />
        <DivisionSideBar />
        <DivisionContainer fragment={data.division} />
      </>
    );
  }
};
