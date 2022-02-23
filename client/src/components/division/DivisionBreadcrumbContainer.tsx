import { gql } from "@apollo/client";
import { DivisionBreadcrumbContainerFragment } from "../../generated/graphql";

interface DivisionBreadCrumContainerProps {
  fragment: DivisionBreadcrumbContainerFragment;
}

export const DivisionBreadcrumbContainer = ({
  fragment,
}: DivisionBreadCrumContainerProps): JSX.Element => {
  return (
    <div
      style={{
        width: "1080px",
        margin: "0 auto",
      }}
    >
      <div style={{ marginTop: "8px", padding: "0px 8px" }}>
        <div
          style={{
            backgroundColor: "#ffffff",
            marginTop: "8px",
            padding: "4px 8px",
            borderRadius: "8px",
          }}
        >
          {fragment.divisionDisplayName ? (
            <span style={{ fontSize: "12px", color: "#505050" }}>
              &gt;{fragment.divisionDisplayName}
            </span>
          ) : (
            <></>
          )}
        </div>
      </div>
    </div>
  );
};

DivisionBreadcrumbContainer.fragment = gql`
  fragment DivisionBreadcrumbContainer on Division {
    divisionName
    divisionDisplayName
  }
`;
