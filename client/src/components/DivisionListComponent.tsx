import { gql } from "@apollo/client";
import { DivisionComponentFragment } from "../generated/graphql";
import { DivisionComponent } from "./DivisionComponent";

export interface DivisionListComponentProps {
  fragments: (DivisionComponentFragment | null)[];
}

export const DivisionListComponent = ({
  fragments,
}: DivisionListComponentProps): JSX.Element => {
  if (!fragments || fragments.length === 0) {
    return <></>;
  } else {
    return (
      <>
        {fragments.map((x) => {
          if (!x) {
            return <></>;
          } else {
            return <DivisionComponent fragment={x} />;
          }
        })}
      </>
    );
  }
};

DivisionListComponent.fragments = gql`
  fragment DivisionListComponent on Division {
    divisionName
  }
`;
