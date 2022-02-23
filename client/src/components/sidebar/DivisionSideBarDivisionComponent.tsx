import { gql } from "@apollo/client";
import { Link } from "react-router-dom";
import {
  DepartmentListItemFragment,
  DivisionListItemFragment,
  DivisionSideBarDivisionComponentFragment,
} from "../../generated/graphql";
import { excludeNullElements } from "../../utils/arrayUtils";

export interface DivisionSideBarDivisionComponentProps {
  fragment: DivisionSideBarDivisionComponentFragment;
  select: boolean;
}

interface DivisionListItemProps {
  fragment: DivisionListItemFragment;
  select: boolean;
}

const DivisionListItem = ({
  fragment,
  select,
}: DivisionListItemProps): JSX.Element => {
  const divisionName = fragment.divisionName;
  const divisionDisplayName = fragment.divisionDisplayName;

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
        borderRadius: select ? borderRadiusTopRounded : borderRadiusAllRounded,
      }}
    >
      {select ? nonLinkText : linkText}
    </div>
  );
};

DivisionListItem.fragment = gql`
  fragment DivisionListItem on Division {
    divisionName
    divisionDisplayName
  }
`;

interface DepartmentListItemProps {
  fragment: DepartmentListItemFragment;
}

const DepartmentListItem = ({
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

interface DepartmentListProps {
  departments: (DepartmentListItemFragment | null)[] | null;
}

const DepartmentList = ({ departments }: DepartmentListProps): JSX.Element => {
  const nonNullDepartments = departments
    ? excludeNullElements<DepartmentListItemFragment>(departments)
    : [];

  return (
    <>
      {nonNullDepartments.map((d, index) => (
        <DepartmentListItem key={index} fragment={d} />
      ))}
    </>
  );
};

export const DivisionSideBarDivisionComponent = ({
  fragment,
  select,
}: DivisionSideBarDivisionComponentProps): JSX.Element => {
  return (
    <div style={{ marginBottom: "16px" }}>
      <DivisionListItem fragment={fragment} select={select} />
      {select ? <DepartmentList departments={fragment.departments} /> : <></>}
    </div>
  );
};

DivisionSideBarDivisionComponent.fragment = gql`
  fragment DivisionSideBarDivisionComponent on Division {
    ...DivisionListItem
    departments {
      ...DepartmentListItem
    }
  }
`;
