import { gql } from "@apollo/client";
import { useParams } from "react-router-dom";
import { BreadcrumbContainerFragment } from "../generated/graphql";

interface BreadCrumContainerProps {
  fragment: BreadcrumbContainerFragment;
}

export const BreadcrumbContainer = ({
  fragment,
}: BreadCrumContainerProps): JSX.Element => {
  return (
    <div
      style={{
        width: "1080px",
        margin: "0 auto",
      }}
    >
      <div style={{ marginTop: "8px", padding: "0px 8px" }}>
        {fragment.divisionDisplayName ? (
          <span>&gt;{fragment.divisionDisplayName}</span>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};

BreadcrumbContainer.fragment = gql`
  fragment BreadcrumbContainer on Division {
    divisionName
    divisionDisplayName
  }
`;
