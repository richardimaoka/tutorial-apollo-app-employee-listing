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
  console.log(nonNullList);
  return (
    <nav>
      <div
        style={{
          width: DivisionSideBarWidth,
          marginTop: "8px",
        }}
      >
        {nonNullList.map((x, index) => (
          <DivisionSideBarDivisionComponent key={index} fragment={x} />
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
