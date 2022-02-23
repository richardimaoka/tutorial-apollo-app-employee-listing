import { gql } from "@apollo/client";
import { useParams } from "react-router-dom";
import {
  DepartmentBreadcrumbFragment,
  useGetSingleDepartmentQuery,
} from "../../generated/graphql";
import { HeaderContainer } from "../HeaderContainer";
import { DepartmentBreadcrumb } from "./DepartmentBreadcrumb";
import { SideBar, SideBarWidth } from "../sidebar/SideBar";

//This is read by GraphQL codegen to generate types
gql`
  query GetSingleDepartment($divisionName: String, $departmentName: String) {
    ...SideBar
    department(divisionName: $divisionName, departmentName: $departmentName) {
      ...DepartmentBreadcrumb
    }
  }
`;

export const DepartmentPage = (): JSX.Element => {
  const params = useParams<{ divisionName: string; departmentName: string }>();
  const divisionName = params.divisionName ? params.divisionName : "";
  const departmentName = params.departmentName ? params.departmentName : "";

  const { loading, error, data } = useGetSingleDepartmentQuery({
    variables: {
      divisionName,
      departmentName,
    },
  });

  if (loading) {
    return <></>;
  } else if (error) {
    return <></>;
  } else if (!data || !data.divisions) {
    return <></>;
  } else {
    const breadcrumb = (fragment: DepartmentBreadcrumbFragment) => (
      <DepartmentBreadcrumb fragment={fragment} />
    );
    return (
      <>
        <HeaderContainer />
        <div style={{ display: "flex", justifyContent: "center" }}>
          <SideBar
            fragment={data}
            selectDivision={divisionName}
            selectDepartment={departmentName}
          />
          <div>{data.department ? breadcrumb(data.department) : <></>}</div>
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
