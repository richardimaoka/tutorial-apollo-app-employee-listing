import { gql } from "@apollo/client";
import { DivisionComponentFragment } from "../generated/graphql";
import { DepartmentsIcon } from "./DepartmentsIcon";
import { MembersIcon } from "./MembersIcon";

export interface DivisionComponentProps {
  fragment: DivisionComponentFragment;
}

export const DivisionComponent = ({
  fragment,
}: DivisionComponentProps): JSX.Element => {
  return (
    <div
      //calculating layout grid
      style={{
        flex: "0 0 33%",
        wordWrap: "break-word",
      }}
    >
      <div
        //background
        style={{ margin: "8px", height: "180px", backgroundColor: "#1470C3" }}
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
            {fragment.divisionName}
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
    </div>
  );
};

DivisionComponent.fragment = gql`
  fragment DivisionComponent on Division {
    divisionName
    numDepartments
    numMembers
  }
`;
