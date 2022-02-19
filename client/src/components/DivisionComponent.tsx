import { gql } from "@apollo/client";
import { DivisionComponentFragment } from "../generated/graphql";

export interface DivisionComponentProps {
  fragment: DivisionComponentFragment;
}

export const DivisionComponent = ({
  fragment,
}: DivisionComponentProps): JSX.Element => {
  return <div>{fragment.divisionName}</div>;
};

DivisionComponent.fragment = gql`
  fragment DivisionComponent on Division {
    divisionName
  }
`;
