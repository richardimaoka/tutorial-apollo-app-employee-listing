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
          borderRadius: "8px",
        }}
      >
        <div>
          {fragment.imageUrl ? (
            <img
              style={{ borderRadius: "8px" }}
              width="120px"
              src={fragment.imageUrl}
              alt={`${fragment.name}`}
            />
          ) : (
            <></>
          )}
        </div>
        <div
          style={{
            marginLeft: "8px",
          }}
        >
          <div>
            <span
              style={{
                color: "#474646",
                fontFamily: "'Noto Sans JP', sans-serif",
                fontSize: "18px",
                fontWeight: 700,
              }}
            >
              {fragment.name}
            </span>
          </div>
          <div
            style={{
              color: "#A4A4A4",
              fontFamily: "'Noto Sans JP', sans-serif",
              fontSize: "12px",
              fontWeight: "400",
            }}
          >
            <span>{fragment.divisionDisplayName}</span>
            <span
              style={{
                marginLeft: "8px",
              }}
            >
              {fragment.departmentDisplayName}
            </span>
          </div>
          <div
            style={{
              color: "#474646",
              fontFamily: "'Noto Sans JP', sans-serif",
              fontSize: "12px",
              fontWeight: 400,
            }}
          >
            {fragment.title}
          </div>
          <div
            style={{
              color: "#474646",
              fontFamily: "'Noto Sans JP', sans-serif",
              fontSize: "12px",
              fontWeight: 400,
            }}
          >
            勤務地: {fragment.location}
          </div>
          <div
            style={{
              color: "#474646",
              fontFamily: "'Noto Sans JP', sans-serif",
              fontSize: "12px",
              fontWeight: 400,
            }}
          >
            電話: {fragment.telephone}
          </div>
          <div
            style={{
              color: "#474646",
              fontFamily: "'Noto Sans JP', sans-serif",
              fontSize: "12px",
              fontWeight: 400,
            }}
          >
            メール: {fragment.mailAddress}
          </div>
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
