import { gql } from "@apollo/client";
import { useParams } from "react-router-dom";
import { useGetSingleDivisionQuery } from "../../generated/graphql";
import { BreadcrumbContainer } from "./BreadcrumbContainer";
import { DivisionContainer } from "./DivisionContainer";
import { DivisionSideBar, DivisionSideBarWidth } from "./DivisionSideBar";

//This is read by GraphQL codegen to generate types
gql`
  query GetSingleDivision($divisionName: String) {
    divisions {
      ...DivisionSideBar
    }
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
  } else if (!data || !data.divisions || !data.division) {
    return <></>;
  } else {
    return (
      <div style={{ display: "flex", justifyContent: "center" }}>
        <DivisionSideBar fragments={data.divisions} />
        <div>
          <BreadcrumbContainer fragment={data.division} />
          <DivisionContainer fragment={data.division} />
        </div>
        <div
          style={{
            /*to center the main content, we need side bars with the same width on both sides*/
            width: DivisionSideBarWidth,
          }}
        />
      </div>
    );
  }
};
