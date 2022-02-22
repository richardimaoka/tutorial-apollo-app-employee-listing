import { gql } from "@apollo/client";
import { DivisionSideBarDepartmentComponentFragment } from "../../generated/graphql";

export interface DivisionSideBarDepartmentComponentProps {
  fragment: DivisionSideBarDepartmentComponentFragment;
}

export const DivisionSideBarDepartmentComponent = ({
  fragment,
}: DivisionSideBarDepartmentComponentProps) => {
  return <div>{fragment.departmentDisplayName}</div>;
};

DivisionSideBarDepartmentComponent.fragment = gql`
  fragment DivisionSideBarDepartmentComponent on Department {
    departmentName
    departmentDisplayName
  }
`;
