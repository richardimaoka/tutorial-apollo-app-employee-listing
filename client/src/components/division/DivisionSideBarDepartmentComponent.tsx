import { gql } from "@apollo/client";
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
        padding: "2px 4px",
        marginBottom: "1px",
      }}
    >
      <a href="">{fragment.departmentDisplayName}</a>
    </div>
  );
};

DivisionSideBarDepartmentComponent.fragment = gql`
  fragment DivisionSideBarDepartmentComponent on Department {
    departmentName
    departmentDisplayName
  }
`;
