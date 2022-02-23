import { gql } from "@apollo/client";
import { Link } from "react-router-dom";
import { DivisionListItemFragment } from "../../generated/graphql";

export interface DivisionListItemProps {
  fragment: DivisionListItemFragment;
  select: boolean;
}

export const DivisionListItem = ({
  fragment,
  select,
}: DivisionListItemProps): JSX.Element => {
  const divisionName = fragment.divisionName;
  const divisionDisplayName = fragment.divisionDisplayName;

  const borderRadiusTopRounded = "10px 10px 0px 0px"; //top-left top-right bottom-right bottom-left
  const borderRadiusAllRounded = "10px";

  const to =
    divisionName && divisionName.length > 1 ? "../" + divisionName : ".";
  const linkText = (
    <Link style={{ color: "#ffffff", textDecorationColor: "#89a3eb" }} to={to}>
      {divisionDisplayName}
    </Link>
  );
  const nonLinkText = (
    <span style={{ color: "#ffffff" }}>{divisionDisplayName}</span>
  );

  return (
    <div
      style={{
        backgroundColor: "#1470C3",
        padding: "8px",
        borderRadius: select ? borderRadiusTopRounded : borderRadiusAllRounded,
      }}
    >
      {select ? nonLinkText : linkText}
    </div>
  );
};

DivisionListItem.fragment = gql`
  fragment DivisionListItem on Division {
    divisionName
    divisionDisplayName
  }
`;
