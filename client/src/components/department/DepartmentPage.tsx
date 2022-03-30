import { gql } from "@apollo/client";
import { useParams, useSearchParams } from "react-router-dom";
import { useGetSingleDepartmentQuery } from "../../generated/graphql";
import { HeaderContainer } from "../HeaderContainer";
import { DepartmentBreadcrumb } from "./DepartmentBreadcrumb";
import { SideBar, SideBarWidth } from "../sidebar/SideBar";
import { DepartmentContainer } from "./DepartmentContainer";

//This is read by GraphQL codegen to generate types
gql`
  query GetSingleDepartment(
    $divisionName: String
    $departmentName: String
    $offset: Int
  ) {
    ...SideBar
    department(
      divisionName: $divisionName
      departmentName: $departmentName
      offset: $offset
    ) {
      ...DepartmentBreadcrumb
      ...DepartmentContainer
    }
  }
`;

export const DepartmentPage = (): JSX.Element => {
  const params = useParams<{ divisionName: string; departmentName: string }>();
  const [searchParams] = useSearchParams();
  const page = searchParams.get("page") ? Number(searchParams.get("page")) : 1;

  const divisionName = params.divisionName ? params.divisionName : "";
  const departmentName = params.departmentName ? params.departmentName : "";
  const { loading, error, data } = useGetSingleDepartmentQuery({
    variables: {
      divisionName,
      departmentName,
      offset: (page - 1) * 10,
    },
  });

  if (loading) {
    return <></>;
  } else if (error) {
    return <></>;
  } else if (!data || !data.divisions || !data.department) {
    return <></>;
  } else {
    return (
      <>
        <HeaderContainer />
        <div style={{ display: "flex", justifyContent: "center" }}>
          <SideBar
            fragment={data}
            selectDivision={divisionName}
            selectDepartment={departmentName}
          />
          <div>
            <DepartmentBreadcrumb fragment={data.department} />
            <DepartmentContainer fragment={data.department} />
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
