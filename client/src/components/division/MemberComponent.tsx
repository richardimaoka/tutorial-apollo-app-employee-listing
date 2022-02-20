import { gql } from "@apollo/client";
import { MemberComponentFragment } from "../../generated/graphql";

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
      <div
        style={{
          backgroundColor: "#ffffff",
          margin: "8px",
          display: "flex",
          padding: "8px",
        }}
      >
        <div>
          {fragment.imageUrl ? (
            <img width="110px" src={fragment.imageUrl} />
          ) : (
            <></>
          )}
        </div>
        <div style={{ marginLeft: "8px" }}>
          <div style={{}}>{fragment.name}</div>
          <div style={{ fontSize: "12px" }}>
            <span>{fragment.divisionDisplayName}</span>
            <span style={{ marginLeft: "8px" }}>
              {fragment.departmentDisplayName}
            </span>
          </div>
          <div style={{ fontSize: "12px" }}>{fragment.title}</div>
          <div style={{ fontSize: "12px" }}>勤務地: {fragment.location}</div>
          <div style={{ fontSize: "12px" }}>電話: {fragment.telephone}</div>
          <div style={{ fontSize: "12px" }}>メール: {fragment.mailAddress}</div>
        </div>
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
    imageUrl
  }
`;
