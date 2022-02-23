import { gql } from "@apollo/client";
import { Link } from "react-router-dom";
import { DepartmentListItemFragment } from "../../generated/graphql";

export interface DepartmentListItemProps {
  fragment: DepartmentListItemFragment;
}

export const DepartmentListItem = ({
  fragment,
}: DepartmentListItemProps): JSX.Element => {
  const departmentName = fragment.departmentName ? fragment.departmentName : "";
  const to = departmentName.length > 1 ? "../" + departmentName : ".";
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
