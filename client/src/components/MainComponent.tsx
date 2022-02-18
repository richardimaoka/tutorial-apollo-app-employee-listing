import { gql, useQuery } from "@apollo/client";
import { Division, useGetDivisionsQuery } from "../generated/graphql";

//This is read by GraphQL codegen to generate types
gql`
  query GetDivisions {
    divisions {
      divisionName
    }
  }
`;

const InnerComponent = (): JSX.Element => {
  const { loading, error, data } = useGetDivisionsQuery();

  if (loading) {
    return <></>;
  } else if (error) {
    return <></>;
  } else if (!data) {
    return <></>;
  } else {
    return <></>;
  }
};

export const MainComponent = (): JSX.Element => {
  return (
    <main>
      <div style={{ width: "780px", margin: "0 auto" }}>
        <InnerComponent />
      </div>
    </main>
  );
};
