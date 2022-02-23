import { gql } from "@apollo/client";
import { Link } from "react-router-dom";
import { DepartmentListItemFragment } from "../../generated/graphql";

export interface DepartmentListItemProps {
  fragment: DepartmentListItemFragment;
  selectDivision: string;
  selectDepartment?: string;
}

export const DepartmentListItem = ({
  fragment,
  selectDivision,
  selectDepartment,
}: DepartmentListItemProps): JSX.Element => {
  const departmentName = fragment.departmentName;
  const to =
    departmentName && departmentName.length > 1
      ? `/${selectDivision}/${departmentName}`
      : `/${selectDivision}/${selectDepartment}`;

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
        {fragment.departmentDisplayName}
      </Link>
    </div>
  );
};

DepartmentListItem.fragment = gql`
  fragment DepartmentListItem on Department {
    departmentName
    departmentDisplayName
  }
`;
