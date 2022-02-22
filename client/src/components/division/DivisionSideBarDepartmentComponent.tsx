import { gql } from "@apollo/client";
import { Link } from "react-router-dom";
import { DivisionSideBarDepartmentComponentFragment } from "../../generated/graphql";

export interface DivisionSideBarDepartmentComponentProps {
  fragment: DivisionSideBarDepartmentComponentFragment;
}

export const DivisionSideBarDepartmentComponent = ({
  fragment,
}: DivisionSideBarDepartmentComponentProps) => {
  return (
    <div
      style={{
        backgroundColor: "#ffffff",
        padding: "8px",
        marginBottom: "1px",
      }}
    >
      <Link
        style={{ textDecorationColor: "#dbe1f1", color: "#050505" }}
        to={`${fragment.departmentName}`}
      >
        {fragment.departmentDisplayName}
      </Link>
    </div>
  );
};

DivisionSideBarDepartmentComponent.fragment = gql`
  fragment DivisionSideBarDepartmentComponent on Department {
    departmentName
    departmentDisplayName
  }
`;
