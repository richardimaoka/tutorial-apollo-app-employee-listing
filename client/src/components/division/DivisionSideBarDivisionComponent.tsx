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
  if (!fragment.departments) {
    return <></>;
  } else {
    const departments =
      excludeNullElements<DivisionSideBarDepartmentComponentFragment>(
        fragment.departments
      );
    return (
      <>
        <div>
          <a href="">{fragment.divisionDisplayName}</a>
        </div>
        {departments.map((d) => (
          <DivisionSideBarDepartmentComponent fragment={d} />
        ))}
      </>
    );
  }
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
