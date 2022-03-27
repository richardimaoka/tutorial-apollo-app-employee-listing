import { gql } from "@apollo/client";
import { Link } from "react-router-dom";
import { DivisionCardFragment } from "../../generated/graphql";
import { DepartmentsIcon } from "./DepartmentsIcon";
import { MembersIcon } from "./MembersIcon";

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
              height: "53px",
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
                  "53px" /* same as height of enclosing <div>: vertical centering */,
                paddingLeft: "4px",
              }}
            >
              {fragment.divisionDisplayName}
            </span>
          </div>
          <div
            //background
            style={{
              height: "180px",
              borderRadius: "0px 0px 8px 8px",
              backgroundColor: "#ffffff",
            }}
          >
            <div style={{ padding: "4px 16px" }}>
              <div style={{ display: "flex" }}>
                <div style={{ display: "flex" }}>
                  <span
                    style={{
                      color: "#474646",
                      fontFamily: "'Noto Sans JP', sans-serif",
                      fontSize: "14px",
                    }}
                  >
                    {fragment.numDepartments}部署
                  </span>
                </div>
                <div style={{ display: "flex", marginLeft: "8px" }}>
                  <span
                    style={{
                      color: "#474646",
                      fontFamily: "'Noto Sans JP', sans-serif",
                      fontSize: "14px",
                    }}
                  >
                    {fragment.numMembers}人
                  </span>
                </div>
              </div>
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
    divisionName
    numDepartments
    numMembers
  }
`;
