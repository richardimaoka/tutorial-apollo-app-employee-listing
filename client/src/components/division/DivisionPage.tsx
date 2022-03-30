import { gql } from "@apollo/client";
import { useParams, useSearchParams } from "react-router-dom";
import { useGetSingleDivisionQuery } from "../../generated/graphql";
import { HeaderContainer } from "../HeaderContainer";
import { MemberListing } from "../member/MemberListing";
import { EmptySideBar } from "../sidebar/EmptySideBar";
import { SideBar } from "../sidebar/SideBar";
import { DivisionBreadcrumb } from "./DivisionBreadcrumb";

//This is read by GraphQL codegen to generate types
gql`
  query GetSingleDivision($divisionName: String, $offset: Int) {
    ...SideBar
    division(divisionName: $divisionName, offset: $offset) {
      ...DivisionBreadcrumb
      ...DivisionMemberListing
    }
  }
`;

export const DivisionPage = (): JSX.Element => {
  const params = useParams<"divisionName">();
  const [searchParams] = useSearchParams();
  const page = searchParams.get("page") ? Number(searchParams.get("page")) : 1;

  const divisionName = params.divisionName ? params.divisionName : "";
  const { loading, error, data } = useGetSingleDivisionQuery({
    variables: {
      divisionName,
      offset: (page - 1) * 10,
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
            <MemberListing fragment={data.division} />
          </div>
          <EmptySideBar />
        </div>
      </>
    );
  }
};
