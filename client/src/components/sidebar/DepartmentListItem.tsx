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
  console.log(
    "selectDivision: ",
    selectDivision,
    " selectDepartment: ",
    selectDepartment
  );
  const departmentName = fragment.departmentName;
  const departmentDisplayName = fragment.departmentDisplayName;

  const backgroundWhite = "#ffffff";
  const backgroundGray = "#a09d9d";

  const to =
    departmentName && departmentName.length > 1
      ? `/${selectDivision}/${departmentName}`
      : `/${selectDivision}/${selectDepartment}`;
  const linkText = (
    <Link style={{ textDecorationColor: "#dbe1f1", color: "#050505" }} to={to}>
      {departmentDisplayName}
    </Link>
  );
  const nonLinkText = (
    <span style={{ color: "#ffffff" }}>{departmentDisplayName}</span>
  );

  const select = selectDepartment === fragment.departmentName;
  return (
    <div
      style={{
        backgroundColor: select ? backgroundGray : backgroundWhite,
        padding: "8px",
        margin: "1px 0px",
      }}
    >
      {select ? nonLinkText : linkText}
    </div>
  );
};

DepartmentListItem.fragment = gql`
  fragment DepartmentListItem on Department {
    departmentName
    departmentDisplayName
  }
`;
