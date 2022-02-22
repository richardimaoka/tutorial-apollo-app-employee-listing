import { gql } from "@apollo/client";
import {
  DivisionSideBarDepartmentComponentFragment,
  DivisionSideBarDivisionComponentFragment,
} from "../../generated/graphql";
import { excludeNullElements } from "../../utils/arrayUtils";
import { DivisionSideBarDepartmentComponent } from "./DivisionSideBarDepartmentComponent";

export interface DivisionSideBarDivisionComponentProps {
  fragment: DivisionSideBarDivisionComponentFragment;
  selectedDivision: string;
}

const SelectedDivisionComponent = ({
  fragment,
}: {
  fragment: DivisionSideBarDivisionComponentFragment;
}): JSX.Element => {
  return (
    <div
      style={{
        backgroundColor: "#1470C3",
        padding: "2px 4px",
        marginBottom: "1px",
        color: "#ffffff",
      }}
    >
      {fragment.divisionDisplayName}
    </div>
  );
};

const NonSelectedDivisionComponent = ({
  fragment,
}: {
  fragment: DivisionSideBarDivisionComponentFragment;
}): JSX.Element => {
  return (
    <div
      style={{
        backgroundColor: "#3277b3",
        padding: "2px 4px",
        marginBottom: "1px",
      }}
    >
      <a style={{ color: "#ffffff" }} href="">
        {fragment.divisionDisplayName}
      </a>
    </div>
  );
};

export const DivisionSideBarDivisionComponent = ({
  fragment,
  selectedDivision,
}: DivisionSideBarDivisionComponentProps): JSX.Element => {
  const departments = fragment.departments
    ? excludeNullElements<DivisionSideBarDepartmentComponentFragment>(
        fragment.departments
      )
    : [];

  return (
    <>
      {fragment.divisionName === selectedDivision ? (
        <SelectedDivisionComponent fragment={fragment} />
      ) : (
        <NonSelectedDivisionComponent fragment={fragment} />
      )}
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
