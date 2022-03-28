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
  const departmentDisplayName = fragment.departmentDisplayName;

  const backgroundWhite = "#ffffff";
  const backgroundGray = "#a09d9d";

  const to =
    departmentName && departmentName.length > 1
      ? `/${selectDivision}/${departmentName}`
      : `/${selectDivision}/${selectDepartment}`;
  const linkText = (
    <Link
      style={{
        textDecorationColor: "#dbe1f1",
        color: "#474646",
        fontFamily: "'Noto Sans JP', sans-serif",
        fontSize: "18px",
      }}
      to={to}
    >
      {departmentDisplayName}
    </Link>
  );
  const nonLinkText = (
    <span
      style={{
        color: "#474646",
        fontFamily: "'Noto Sans JP', sans-serif",
        fontSize: "18px",
      }}
    >
      {departmentDisplayName}
    </span>
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
