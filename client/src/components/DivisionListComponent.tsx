import { gql } from "@apollo/client";
import { DivisionComponentFragment } from "../generated/graphql";
import { DivisionComponent } from "./DivisionComponent";
import { excludeNullElements } from "../utils/arrayUtils";
export interface DivisionListComponentProps {
  list: (DivisionComponentFragment | null)[];
}

export const DivisionListComponent = ({
  list,
}: DivisionListComponentProps): JSX.Element => {
  const nonNullList = excludeNullElements(list);
  if (nonNullList.length === 0) {
    return <></>;
  } else {
    return (
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {nonNullList.map((x) => (
          <DivisionComponent fragment={x} />
        ))}
      </div>
    );
  }
};

DivisionListComponent.fragments = gql`
  fragment DivisionListComponent on Division {
    divisionName
  }
`;
