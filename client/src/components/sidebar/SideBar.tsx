import { gql } from "@apollo/client";
import {
  DivisionListItemFragment,
  SideBarFragment,
} from "../../generated/graphql";
import { excludeNullElements } from "../../utils/arrayUtils";
import { DivisionListItem } from "./DivisionListItem";

interface SideBarProps {
  fragments: (SideBarFragment | null)[];
  selectDivision: string;
}

export const SideBarWidth = "200px";

export const SideBar = ({
  fragments,
  selectDivision,
}: SideBarProps): JSX.Element => {
  const divisions = fragments
    ? excludeNullElements<DivisionListItemFragment>(fragments)
    : [];
  const divisionList = divisions.map((d, index) => (
    <DivisionListItem
      key={index}
      fragment={d}
      select={selectDivision === d.divisionName}
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
  fragment SideBar on Division {
    ...DivisionListItem
  }
`;
