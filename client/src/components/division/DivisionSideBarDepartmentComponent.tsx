import { gql } from "@apollo/client";
import { DivisionSideBarDepartmentComponentFragment } from "../../generated/graphql";

export interface DivisionSideBarDepartmentComponentProps {
  fragment: DivisionSideBarDepartmentComponentFragment;
}

export const DivisionSideBarDepartmentComponent = ({
  fragment,
}: DivisionSideBarDepartmentComponentProps) => {
  return <></>;
};

DivisionSideBarDepartmentComponent.fragment = gql`
  fragment DivisionSideBarDepartmentComponent on Department {
    departmentName
    departmentDisplayName
  }
`;
