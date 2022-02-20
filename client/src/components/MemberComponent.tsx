import { gql } from "@apollo/client";
import { MemberComponentFragment } from "../generated/graphql";

export interface MemberComponentProps {
  fragment: MemberComponentFragment;
}

export const MemberComponent = ({ fragment }: MemberComponentProps) => {
  return (
    <div //calculating layout grid
      style={{
        flex: "0 0 50%",
        wordWrap: "break-word",
      }}
    >
      <div style={{ backgroundColor: "#ffffff", margin: "8px" }}>
        <div>{fragment.name}</div>
        <div>{fragment.title}</div>
        <div>{fragment.divisionDisplayName}</div>
        <div>{fragment.departmentDisplayName}</div>
        <div>{fragment.location}</div>
        <div>{fragment.telephone}</div>
        <div>{fragment.mailAddress}</div>
      </div>
    </div>
  );
};

MemberComponent.fragment = gql`
  fragment MemberComponent on Member {
    name
    divisionDisplayName
    departmentDisplayName
    title
    location
    telephone
    mailAddress
  }
`;
