import { gql } from "@apollo/client";
import { Link, useSearchParams } from "react-router-dom";
import {
  DepartmentContainerFragment,
  MemberComponentFragment,
} from "../../generated/graphql";
import { excludeNullElements } from "../../utils/arrayUtils";
import { MemberComponent } from "./MemberComponent";

interface DepartmentContainerProps {
  fragment: DepartmentContainerFragment;
}

export const DepartmentContainer = ({
  fragment,
}: DepartmentContainerProps): JSX.Element => {
  if (!fragment.members) {
    return <></>;
  } else {
    const nonNullList = excludeNullElements<MemberComponentFragment>(
      fragment.members
    );
    return (
      <main
        style={{
          width: "1080px",
          margin: "0 auto",
          filter: "drop-shadow(6px 6px 6px #00000029)",
        }}
      >
        <div style={{ display: "flex", flexWrap: "wrap" }}>
          {nonNullList.map((x, index) => (
            <MemberComponent key={index} fragment={x} />
          ))}
        </div>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <div>
            <Link style={{ marginLeft: "10px" }} to=".?page=1">
              1
            </Link>
            <Link style={{ marginLeft: "10px" }} to=".?page=2">
              2
            </Link>
            <Link style={{ marginLeft: "10px" }} to=".?page=3">
              3
            </Link>
          </div>
        </div>
      </main>
    );
  }
};

DepartmentContainer.fragment = gql`
  fragment DepartmentContainer on Department {
    members {
      ...MemberComponent
    }
  }
`;
