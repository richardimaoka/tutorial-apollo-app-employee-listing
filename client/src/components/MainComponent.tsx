import { gql, useQuery } from "@apollo/client";
import { useGetDivisionsQuery } from "../generated/graphql";
import { DivisionListComponent } from "./DivisionListComponent";

//This is read by GraphQL codegen to generate types
gql`
  query GetDivisions {
    divisions {
      ...DivisionComponent
    }
  }
`;

const InnerComponent = (): JSX.Element => {
  const { loading, error, data } = useGetDivisionsQuery();

  if (loading) {
    return <></>;
  } else if (error) {
    return <></>;
  } else if (!data || !data.divisions) {
    return <></>;
  } else {
    console.log(data);
    return <DivisionListComponent fragments={data.divisions} />;
  }
};

export const MainComponent = (): JSX.Element => {
  return (
    <main>
      <div style={{ width: "1080px", margin: "0 auto" }}>
        <InnerComponent />
      </div>
    </main>
  );
};
