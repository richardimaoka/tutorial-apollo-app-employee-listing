import { gql } from "@apollo/client";
import { Link } from "react-router-dom";
import { DivisionCardFragment } from "../../generated/graphql";

export interface DivisionCardProps {
  fragment: DivisionCardFragment;
}

export const DivisionCard = ({ fragment }: DivisionCardProps): JSX.Element => {
  return (
    <div
      //calculating layout grid
      style={{
        flex: "0 0 33%",
        wordWrap: "break-word",
        filter: "drop-shadow(6px 6px 6px #00000029)",
      }}
    >
      <Link style={{ textDecoration: "none" }} to={`/${fragment.divisionName}`}>
        <div
          style={{
            padding: "8px",
          }}
        >
          <div
            style={{
              height: "50px",
              borderRadius: "8px 8px 0px 0px",
              backgroundColor: "#1470C3",
              paddingLeft: "8px",
            }}
          >
            <span
              style={{
                color: "#f3f3f3",
                fontFamily: "'Noto Sans JP', sans-serif",
                fontSize: "28px",
                fontWeight: "700",
                lineHeight:
                  "50px" /* same as height of enclosing <div>: vertical centering */,
                paddingLeft: "4px",
              }}
            >
              {fragment.divisionDisplayName}
            </span>
          </div>
          <div
            //background
            style={{
              height: "130px",
              borderRadius: "0px 0px 8px 8px",
              backgroundColor: "#ffffff",
              padding: "4px 16px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            <div>
              <span
                style={{
                  color: "#474646",
                  fontFamily: "'Noto Sans JP', sans-serif",
                  fontSize: "14px",
                }}
              >
                {fragment.numDepartments}部署
              </span>
              <span
                style={{
                  color: "#474646",
                  fontFamily: "'Noto Sans JP', sans-serif",
                  fontSize: "14px",
                  marginLeft: "4px",
                }}
              >
                {fragment.numMembers}人
              </span>
            </div>
            <div>
              <span
                style={{
                  display: "inline-block",
                  width: "100%",
                  textAlign: "right",
                  fontFamily: "'Noto Sans JP', sans-serif",
                  fontSize: "28px",
                  fontWeight: "900",
                  color: "#1470C3",
                }}
              >
                {fragment.divisionDisplayNameEn}
              </span>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

DivisionCard.fragment = gql`
  fragment DivisionCard on Division {
    divisionDisplayName
    divisionDisplayNameEn
    divisionName
    numDepartments
    numMembers
  }
`;
