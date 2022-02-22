import { gql } from "@apollo/client";
import {
  Department,
  DivisionSideBarDepartmentComponentFragment,
  DivisionSideBarDivisionComponentFragment,
} from "../../generated/graphql";
import { excludeNullElements } from "../../utils/arrayUtils";
import { DivisionSideBarDepartmentComponent } from "./DivisionSideBarDepartmentComponent";

export interface DivisionSideBarDivisionComponentProps {
  fragment: DivisionSideBarDivisionComponentFragment;
}

export const DivisionSideBarDivisionComponent = ({
  fragment,
}: DivisionSideBarDivisionComponentProps) => {
  const departments = fragment.departments
    ? excludeNullElements<DivisionSideBarDepartmentComponentFragment>(
        fragment.departments
      )
    : [];

  return (
    <>
      <div
        style={{
          backgroundColor: "#1470C3",
          padding: "2px 4px",
          marginBottom: "1px",
        }}
      >
        <a style={{ color: "#ffffff" }} href="">
          {fragment.divisionDisplayName}
        </a>
      </div>
      {departments.map((d) => (
        <DivisionSideBarDepartmentComponent
          key={d.departmentName}
          fragment={d}
        />
      ))}
    </>
  );
};

DivisionSideBarDivisionComponent.fragment = gql`
  fragment DivisionSideBarDivisionComponent on Division {
    divisionName
    divisionDisplayName
    departments {
      ...DivisionSideBarDepartmentComponent
    }
  }
`;
