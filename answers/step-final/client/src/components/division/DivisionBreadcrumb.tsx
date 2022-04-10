import { gql } from "@apollo/client";
import { DivisionBreadcrumbFragment } from "../../generated/graphql";

interface DivisionBreadCrumContainerProps {
  fragment: DivisionBreadcrumbFragment;
}

export const DivisionBreadcrumb = ({
  fragment,
}: DivisionBreadCrumContainerProps): JSX.Element => {
  const divisionDisplayName = fragment.divisionDisplayName;
  const divisionText = (
    <>
      <span style={{ fontSize: "12px" }}>&gt;</span>
      <span style={{ fontSize: "12px", marginLeft: "4px", color: "#505050" }}>
        {divisionDisplayName}
      </span>
    </>
  );
  return (
    <div
      style={{
        width: "1080px",
        margin: "0 auto",
        filter: "drop-shadow(6px 6px 6px #00000029)",
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
          {divisionDisplayName ? divisionText : <></>}
        </div>
      </div>
    </div>
  );
};

DivisionBreadcrumb.fragment = gql`
  fragment DivisionBreadcrumb on Division {
    divisionName
    divisionDisplayName
  }
`;
