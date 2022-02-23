import { gql } from "@apollo/client";
import { Link, useSearchParams } from "react-router-dom";
import {
  DivisionContainerFragment,
  MemberComponentFragment,
} from "../../generated/graphql";
import { excludeNullElements } from "../../utils/arrayUtils";
import { MemberComponent } from "./MemberComponent";

interface DivisionContainerProps {
  fragment: DivisionContainerFragment;
}

export const DivisionContainer = ({
  fragment,
}: DivisionContainerProps): JSX.Element => {
  const [params] = useSearchParams();
  const page = params.get("page") || "1";
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
        }}
      >
        <div style={{ display: "flex", flexWrap: "wrap" }}>
          {nonNullList.map((x, index) => (
            <MemberComponent key={index} fragment={x} />
          ))}
        </div>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <div>
            <Link to=".?page=1">1</Link> 2 3 4 5
          </div>
        </div>
      </main>
    );
  }
};

DivisionContainer.fragment = gql`
  fragment DivisionContainer on Division {
    members {
      ...MemberComponent
    }
  }
`;
