import { gql } from "@apollo/client";
import { Link, useSearchParams } from "react-router-dom";
import {
  MemberListingFragment,
  MemberComponentFragment,
} from "../../generated/graphql";
import { excludeNullElements } from "../../utils/arrayUtils";
import { MemberComponent } from "./MemberComponent";

interface MemberListingProps {
  fragment: MemberListingFragment;
}

export const MemberListingSize = 10;

export const MemberListing = ({
  fragment,
}: MemberListingProps): JSX.Element => {
  if (!fragment.members) {
    return <></>;
  } else {
    const members = excludeNullElements<MemberComponentFragment>(
      fragment.members
    );

    const numPages = members.length % MemberListingSize;
    const pagesIndices = Array.from({ length: numPages }, (_, i) => i + 1); //=> [1, 2, ... , numPages]

    return (
      <main
        style={{
          width: "1080px",
          margin: "0 auto",
          filter: "drop-shadow(6px 6px 6px #00000029)",
        }}
      >
        <div style={{ display: "flex", flexWrap: "wrap" }}>
          {members.map((x, index) => (
            <MemberComponent key={index} fragment={x} />
          ))}
        </div>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <div>
            {pagesIndices.map((i) => (
              <Link key={i} style={{ marginLeft: "10px" }} to={`.?page=${i}`}>
                {i}
              </Link>
            ))}
          </div>
        </div>
      </main>
    );
  }
};

MemberListing.fragment = gql`
  fragment MemberListing on Division {
    members {
      ...MemberComponent
    }
  }
`;
