import { gql } from "@apollo/client";
import { DivisionSideBarFragment } from "../generated/graphql";
import { excludeNullElements } from "../utils/arrayUtils";

interface DivisionSideBarProps {
  fragments: (DivisionSideBarFragment | null)[];
}

export const DivisionSideBarWidth = "200px";
export const DivisionSideBar = ({
  fragments,
}: DivisionSideBarProps): JSX.Element => {
  //  excludeNullElements<>
  return (
    <nav>
      <div style={{ width: DivisionSideBarWidth }}></div>
    </nav>
  );
};

DivisionSideBar.fragment = gql`
  fragment DivisionSideBar on Division {
    divisionName
    divisionDisplayName
    departments {
      departmentName
      departmentDisplayName
    }
  }
`;
