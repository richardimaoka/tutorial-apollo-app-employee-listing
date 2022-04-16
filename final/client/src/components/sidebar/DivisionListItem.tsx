import { gql } from "@apollo/client";
import { Link } from "react-router-dom";
import {
  DepartmentListItemFragment,
  DivisionListItemFragment,
} from "../../generated/graphql";
import { excludeNullElements } from "../../utils/arrayUtils";
import { DepartmentListItem } from "./DepartmentListItem";

export interface DivisionListItemProps {
  fragment: DivisionListItemFragment;
  selectDivision: string;
  selectDepartment?: string;
}

export const DivisionListItem = ({
  fragment,
  selectDivision,
  selectDepartment,
}: DivisionListItemProps): JSX.Element => {
  const divisionName = fragment.divisionName;
  const divisionDisplayName = fragment.divisionDisplayName;

  const borderRadiusTopRounded = "10px 10px 0px 0px"; //top-left top-right bottom-right bottom-left
  const borderRadiusAllRounded = "10px";

  const to =
    divisionName && divisionName.length > 1
      ? `/${divisionName}`
      : `/${selectDivision}`;
  const linkText = (
    <Link
      style={{
        color: "#ffffff",
        textDecorationColor: "#89a3eb",
        fontFamily: "'Noto Sans JP', sans-serif",
        fontWeight: "300",
        fontSize: "18px",
      }}
      to={to}
    >
      {divisionDisplayName}
    </Link>
  );
  const nonLinkText = (
    <span
      style={{
        color: "#ffffff",
        fontFamily: "'Noto Sans JP', sans-serif",
        fontWeight: "300",
        fontSize: "18px",
      }}
    >
      {divisionDisplayName}
    </span>
  );

  const deparments = fragment.departments
    ? excludeNullElements<DepartmentListItemFragment>(fragment.departments)
    : [];
  const departmentList = deparments.map((d, index) => (
    <DepartmentListItem
      key={index}
      fragment={d}
      selectDivision={selectDivision}
      selectDepartment={selectDepartment}
    />
  ));

  const select = selectDivision === fragment.divisionName;
  const linkable = selectDepartment || !select; //department is selected, or this division is not selected
  return (
    <div
      style={{
        marginBottom: "16px",
        filter: "drop-shadow(6px 6px 6px #00000029)",
      }}
    >
      <div
        style={{
          backgroundColor: "#1470C3",
          padding: "8px",
          borderRadius: select
            ? borderRadiusTopRounded
            : borderRadiusAllRounded,
        }}
      >
        {linkable ? linkText : nonLinkText}
      </div>
      {select ? departmentList : <></>}
    </div>
  );
};

DivisionListItem.fragment = gql`
  fragment DivisionListItem on Division {
    divisionName
    divisionDisplayName
    departments {
      ...DepartmentListItem
    }
  }
`;
