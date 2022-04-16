import { gql } from "@apollo/client";
import { Link, useSearchParams } from "react-router-dom";
import {
  DivisionMemberListingFragment,
  DepartmentMemberListingFragment,
  MemberComponentFragment,
} from "../../generated/graphql";
import { excludeNullElements } from "../../utils/arrayUtils";
import { MemberComponent } from "./MemberComponent";

interface MemberListingProps {
  fragment: DivisionMemberListingFragment | DepartmentMemberListingFragment;
}

const listingPageSize = 10;

export const MemberListing = ({
  fragment,
}: MemberListingProps): JSX.Element => {
  if (!fragment.members || !fragment.numMembers) {
    return <></>;
  } else {
    const members = excludeNullElements<MemberComponentFragment>(
      fragment.members
    );
    const numPages = fragment.numMembers / listingPageSize;
    const pageIndices = Array.from({ length: numPages }, (_, i) => i + 1); //=> [1, 2, ... , numPages]
    console.log(`numPages ${numPages}`);
    console.log(`pageIndices ${pageIndices}`);
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
            {pageIndices.map((i) => (
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

MemberListing.pageSize = listingPageSize;

MemberListing.fragment = gql`
  fragment DivisionMemberListing on Division {
    numMembers
    members {
      ...MemberComponent
    }
  }
  fragment DepartmentMemberListing on Department {
    numMembers
    members {
      ...MemberComponent
    }
  }
`;
