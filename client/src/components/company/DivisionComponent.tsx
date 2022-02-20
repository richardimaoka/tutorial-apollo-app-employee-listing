import { gql } from "@apollo/client";
import { Link } from "react-router-dom";
import { DivisionComponentFragment } from "../../generated/graphql";
import { DepartmentsIcon } from "./DepartmentsIcon";
import { MembersIcon } from "./MembersIcon";

export interface DivisionComponentProps {
  fragment: DivisionComponentFragment;
}

const divisionColorCode = (colorName: string | null): string => {
  switch (colorName) {
    case "blue":
      return "#1470C3";
    case "purple":
      return "#6014C3";
    case "green":
      return "#14C314";
    case "red":
      return "#C3142C";
    case "pink":
      return "#C3148E";
    case "black":
      return "#000000";
    case "orange":
      return "#C37714";
    case "emeraldgreen":
      return "#14C3BD";
    default:
      return "#1470C3";
  }
};

export const DivisionComponent = ({
  fragment,
}: DivisionComponentProps): JSX.Element => {
  const divisionColor = divisionColorCode(fragment.divisionColor);
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
          //background
          style={{
            margin: "8px",
            height: "180px",
            backgroundColor: divisionColor,
          }}
        >
          <div style={{ padding: "16px" }}>
            <span
              style={{
                color: "#f3f3f3",
                fontSize: "28px",
                fontFamily: "'Zen Antique Soft', serif",
                paddingBottom: "2px",
                borderBottom: "1px solid",
              }}
            >
              {fragment.divisionDisplayName}
            </span>
            <div style={{ marginTop: "8px", display: "flex" }}>
              <div style={{ display: "flex" }}>
                <DepartmentsIcon />
                <span style={{ marginLeft: "4px", color: "#f3f3f3" }}>
                  {fragment.numDepartments}部署
                </span>
              </div>
              <div style={{ display: "flex", marginLeft: "8px" }}>
                <MembersIcon />
                <span style={{ marginLeft: "px", color: "#f3f3f3" }}>
                  {fragment.numMembers}人
                </span>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

DivisionComponent.fragment = gql`
  fragment DivisionComponent on Division {
    divisionDisplayName
    divisionName
    numDepartments
    numMembers
    divisionColor
  }
`;
