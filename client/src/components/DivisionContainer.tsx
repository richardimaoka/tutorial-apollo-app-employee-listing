import { gql } from "@apollo/client";
import { useParams } from "react-router-dom";
import {
  MemberComponentFragment,
  useGetSingleDivisionQuery,
} from "../generated/graphql";
import { excludeNullElements } from "../utils/arrayUtils";
import { MemberComponent } from "./MemberComponent";

//This is read by GraphQL codegen to generate types
gql`
  query GetSingleDivision($divisionName: String) {
    division(divisionName: $divisionName) {
      divisionName
      divisionDisplayName
      numMembers
      numDepartments
      divisionColor
      members {
        name
      }
    }
  }
`;

interface InnerComponentProps {
  divisionName: string;
}

const InnerComponent = ({ divisionName }: InnerComponentProps): JSX.Element => {
  const { loading, error, data } = useGetSingleDivisionQuery({
    variables: {
      divisionName: divisionName,
    },
  });

  if (loading) {
    return <></>;
  } else if (error) {
    return <></>;
  } else if (!data || !data.division || !data.division.members) {
    return <></>;
  } else {
    const nonNullList = excludeNullElements<MemberComponentFragment>(
      data.division.members
    );
    return (
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {nonNullList.map((x) => (
          <MemberComponent fragment={x} />
        ))}
      </div>
    );
  }
};

export const DivisionContainer = (): JSX.Element => {
  const params = useParams<"divisionName">();
  return (
    <main
      style={{
        width: "1080px",
        margin: "0 auto",
        padding: "10px 0",
      }}
    >
      <div>
        {params.divisionName ? (
          <InnerComponent divisionName={params.divisionName} />
        ) : (
          <></>
        )}
      </div>
    </main>
  );
};
