import { gql } from "@apollo/client";
import { MemberComponentFragment } from "../generated/graphql";

export interface MemberComponentProps {
  fragment: MemberComponentFragment;
}

export const MemberComponent = ({ fragment }: MemberComponentProps) => {
  return <div>{fragment.name}</div>;
};

MemberComponent.fragment = gql`
  fragment MemberComponent on Member {
    name
  }
`;
