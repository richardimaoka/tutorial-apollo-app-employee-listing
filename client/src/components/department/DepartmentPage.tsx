import { gql } from "@apollo/client";
import { useParams } from "react-router-dom";
import { useGetSingleDepartmentQuery } from "../../generated/graphql";
import { HeaderContainer } from "../HeaderContainer";

//This is read by GraphQL codegen to generate types
gql`
  query GetSingleDepartment($divisionName: String, $departmentName: String) {
    departments {
      departmentName
      departmentDisplayName
    }
    department(divisionName: $divisionName, departmentName: $departmentName) {
      departmentName
    }
  }
`;

export const DepartmentPage = (): JSX.Element => {
  const params = useParams<{ divisionName: string; departmentName: string }>();
  const divisionName = params.divisionName ? params.divisionName : "";
  const departmentName = params.departmentName ? params.departmentName : "";
  console.log(params);
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
  } else if (!data || !data.departments || !data.department) {
    return <></>;
  } else {
    return (
      <>
        <HeaderContainer />
        <div style={{ display: "flex", justifyContent: "center" }}>a</div>
      </>
    );
  }
};