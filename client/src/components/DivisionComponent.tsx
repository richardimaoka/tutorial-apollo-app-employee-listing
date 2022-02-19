import { gql } from "@apollo/client";
import { DivisionComponentFragment } from "../generated/graphql";

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
          <div
            style={{
              color: "#f3f3f3",
              fontSize: "28px",
              fontFamily: "'Zen Antique Soft', serif",
            }}
          >
            {fragment.divisionName}
          </div>
        </div>
      </div>
    </div>
  );
};

DivisionComponent.fragment = gql`
  fragment DivisionComponent on Division {
    divisionName
  }
`;
