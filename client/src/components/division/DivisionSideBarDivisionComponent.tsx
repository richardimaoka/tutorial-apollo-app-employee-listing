import { gql } from "@apollo/client";
import { Link } from "react-router-dom";
import {
  DivisionSideBarDepartmentComponentFragment,
  DivisionSideBarDivisionComponentFragment,
} from "../../generated/graphql";
import { excludeNullElements } from "../../utils/arrayUtils";

export interface DivisionSideBarDivisionComponentProps {
  fragment: DivisionSideBarDivisionComponentFragment;
  selectedDivision: string;
}

const DivisionListItem = ({
  divisionName,
  divisionDisplayName,
  selected,
}: {
  divisionName: string | null;
  divisionDisplayName: string | null;
  selected: boolean;
}): JSX.Element => {
  const borderRadiusTopRounded = "10px 10px 0px 0px"; //top-left top-right bottom-right bottom-left
  const borderRadiusAllRounded = "10px";

  const to =
    divisionName && divisionName.length > 1 ? "../" + divisionName : ".";
  const linkText = (
    <Link style={{ color: "#ffffff", textDecorationColor: "#89a3eb" }} to={to}>
      {divisionDisplayName}
    </Link>
  );
  const nonLinkText = (
    <span style={{ color: "#ffffff" }}>{divisionDisplayName}</span>
  );

  return (
    <div
      style={{
        backgroundColor: "#1470C3",
        padding: "8px",
        borderRadius: selected
          ? borderRadiusTopRounded
          : borderRadiusAllRounded,
      }}
    >
      {selected ? nonLinkText : linkText}
    </div>
  );
};

const DepartmentListItem = ({
  departmetName,
  departmetDisplayName,
}: {
  departmetName: string | null;
  departmetDisplayName: string | null;
}): JSX.Element => {
  const to =
    departmetName && departmetName.length > 1 ? "../" + departmetName : ".";

  return (
    <div
      style={{
        backgroundColor: "#ffffff",
        padding: "8px",
        margin: "1px 0px",
      }}
    >
      <Link
        style={{ textDecorationColor: "#dbe1f1", color: "#050505" }}
        to={to}
      >
        {departmetDisplayName}
      </Link>
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
    <div style={{ marginBottom: "16px" }}>
      <DivisionListItem
        divisionName={fragment.divisionName}
        divisionDisplayName={fragment.divisionDisplayName}
        selected={fragment.divisionName === selectedDivision}
      />
      {departments.map((d, index) => (
        <DepartmentListItem
          key={index}
          departmetName={d.departmentName}
          departmetDisplayName={d.departmentDisplayName}
        />
      ))}
    </div>
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
