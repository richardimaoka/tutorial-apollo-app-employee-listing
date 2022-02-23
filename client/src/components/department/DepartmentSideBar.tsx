import { gql } from "@apollo/client";
import { DepartmentSideBarFragment } from "../../generated/graphql";
import { excludeNullElements } from "../../utils/arrayUtils";

interface DepartmentSideBarProps {
  fragments: (DepartmentSideBarFragment | null)[];
  selectedDepartment: string;
}

export const DepartmentSideBarWidth = "200px";

export const DepartmentSideBar = ({
  fragments,
  selectedDepartment,
}: DepartmentSideBarProps): JSX.Element => {
  const nonNullList = excludeNullElements<DepartmentSideBarFragment>(fragments);

  return (
    <nav>
      <div
        style={{
          width: DepartmentSideBarWidth,
          marginTop: "40px",
        }}
      >
        {nonNullList.map((x, index) => (
          <div key={index}>{x.departmentDisplayName}</div>
        ))}
      </div>
    </nav>
  );
};

DepartmentSideBar.fragment = gql`
  fragment DepartmentSideBar on Department {
    departmentDisplayName
  }
`;
