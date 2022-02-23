import { gql } from "@apollo/client";
import {
  DivisionListItemFragment,
  SideBarFragment,
} from "../../generated/graphql";
import { excludeNullElements } from "../../utils/arrayUtils";
import { DivisionListItem } from "./DivisionListItem";

interface SideBarProps {
  fragment: SideBarFragment;
  selectDivision: string;
  selectDepartment?: string;
}

export const SideBarWidth = "200px";

export const SideBar = ({
  fragment,
  selectDivision,
  selectDepartment,
}: SideBarProps): JSX.Element => {
  const divisions = fragment.divisions
    ? excludeNullElements<DivisionListItemFragment>(fragment.divisions)
    : [];
  const divisionList = divisions.map((d, index) => (
    <DivisionListItem
      key={index}
      fragment={d}
      selectDivision={selectDivision}
      selectDepartment={selectDepartment}
    />
  ));

  return (
    <nav>
      <div
        style={{
          width: SideBarWidth,
          marginTop: "40px",
        }}
      >
        {divisionList}
      </div>
    </nav>
  );
};

SideBar.fragment = gql`
  fragment SideBar on Query {
    divisions {
      ...DivisionListItem
    }
  }
`;
