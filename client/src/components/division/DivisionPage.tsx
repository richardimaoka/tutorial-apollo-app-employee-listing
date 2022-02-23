import { gql } from "@apollo/client";
import { useParams } from "react-router-dom";
import { useGetSingleDivisionQuery } from "../../generated/graphql";
import { HeaderContainer } from "../HeaderContainer";
import { DivisionBreadcrumb } from "./DivisionBreadcrumb";
import { DivisionContainer } from "./DivisionContainer";
import { SideBar, SideBarWidth } from "../sidebar/SideBar";

//This is read by GraphQL codegen to generate types
gql`
  query GetSingleDivision($divisionName: String) {
    ...SideBar
    division(divisionName: $divisionName) {
      ...DivisionBreadcrumb
      ...DivisionContainer
    }
  }
`;

export const DivisionPage = (): JSX.Element => {
  const params = useParams<"divisionName">();
  const divisionName = params.divisionName ? params.divisionName : "";
  const { loading, error, data, fetchMore } = useGetSingleDivisionQuery({
    variables: {
      divisionName,
    },
  });

  if (loading) {
    return <></>;
  } else if (error) {
    console.log("error: ", error);
    return <></>;
  } else if (!data || !data.divisions || !data.division) {
    return (
      <>
        <HeaderContainer />
      </>
    );
  } else {
    return (
      <>
        <HeaderContainer />
        <div style={{ display: "flex", justifyContent: "center" }}>
          <SideBar fragment={data} selectDivision={divisionName} />
          <div>
            <DivisionBreadcrumb fragment={data.division} />
            <DivisionContainer fragment={data.division} />
          </div>
          <div
            style={{
              /*to center the main content, we need side bars with the same width on both sides*/
              width: SideBarWidth,
            }}
          />
        </div>
      </>
    );
  }
};
