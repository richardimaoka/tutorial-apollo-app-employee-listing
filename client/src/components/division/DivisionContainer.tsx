import { gql } from "@apollo/client";
import { MemberComponentFragment } from "../../generated/graphql";
import { excludeNullElements } from "../../utils/arrayUtils";
import { MemberComponent } from "./MemberComponent";
import { DivisionContainerFragment } from "../../generated/graphql";

interface DivisionContainerProps {
  fragment: DivisionContainerFragment;
}

export const DivisionContainer = ({
  fragment,
}: DivisionContainerProps): JSX.Element => {
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
          {nonNullList.map((x) => (
            <MemberComponent fragment={x} />
          ))}
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
