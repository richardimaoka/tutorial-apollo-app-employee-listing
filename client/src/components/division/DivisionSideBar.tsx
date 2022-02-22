import { gql } from "@apollo/client";
import { DivisionSideBarFragment } from "../../generated/graphql";
import { excludeNullElements } from "../../utils/arrayUtils";
import { DivisionSideBarDivisionComponent } from "./DivisionSideBarDivisionComponent";

interface DivisionSideBarProps {
  fragments: (DivisionSideBarFragment | null)[];
}

export const DivisionSideBarWidth = "200px";

export const DivisionSideBar = ({
  fragments,
}: DivisionSideBarProps): JSX.Element => {
  const nonNullList = excludeNullElements<DivisionSideBarFragment>(fragments);
  return (
    <nav>
      <div style={{ width: DivisionSideBarWidth }}>
        {nonNullList.map((x) => (
          <DivisionSideBarDivisionComponent key={x.divisionName} fragment={x} />
        ))}
      </div>
    </nav>
  );
};

DivisionSideBar.fragment = gql`
  fragment DivisionSideBar on Division {
    ...DivisionSideBarDivisionComponent
  }
`;
