import { gql } from "@apollo/client";
import { Link } from "react-router-dom";
import { DepartmentBreadcrumbFragment } from "../../generated/graphql";

interface DepartmentBreadcrumProps {
  fragment: DepartmentBreadcrumbFragment;
}

export const DepartmentBreadcrumb = ({
  fragment,
}: DepartmentBreadcrumProps): JSX.Element => {
  const divisionName = fragment.divisionName;
  const divisionDisplayName = fragment.divisionDisplayName;
  const departmentDisplayName = fragment.departmentDisplayName;

  const to = divisionName ? `/${divisionName}` : ".";
  const divisionLink = (
    <>
      <span style={{ fontSize: "12px" }}>&gt;</span>
      <Link style={{ fontSize: "12px", marginLeft: "4px" }} to={to}>
        {divisionDisplayName}
      </Link>
    </>
  );
  const departmentText = (
    <>
      <span style={{ fontSize: "12px", marginLeft: "4px" }}>&gt;</span>
      <span style={{ fontSize: "12px", marginLeft: "4px", color: "#505050" }}>
        {departmentDisplayName}
      </span>
    </>
  );

  return (
    <div
      style={{
        width: "1080px",
        margin: "0 auto",
      }}
    >
      <div style={{ marginTop: "8px", padding: "0px 8px" }}>
        <div
          style={{
            backgroundColor: "#ffffff",
            marginTop: "8px",
            padding: "4px 8px",
            borderRadius: "8px",
          }}
        >
          {divisionName && divisionDisplayName ? divisionLink : <></>}
          {departmentDisplayName ? departmentText : <></>}
        </div>
      </div>
    </div>
  );
};

DepartmentBreadcrumb.fragment = gql`
  fragment DepartmentBreadcrumb on Department {
    divisionName
    divisionDisplayName
    departmentDisplayName
  }
`;
