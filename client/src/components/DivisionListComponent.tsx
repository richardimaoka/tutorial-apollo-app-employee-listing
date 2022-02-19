import { gql } from "@apollo/client";
import { DivisionComponentFragment } from "../generated/graphql";
import { DivisionComponent } from "./DivisionComponent";

export interface DivisionListComponentProps {
  list: (DivisionComponentFragment | null)[];
}

const excludeNullElements = (
  list: (DivisionComponentFragment | null)[]
): DivisionComponentFragment[] => {
  return list.filter((elem) => elem) as DivisionComponentFragment[];
};

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
