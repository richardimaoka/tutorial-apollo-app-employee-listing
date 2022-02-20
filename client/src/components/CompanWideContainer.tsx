import { gql, useQuery } from "@apollo/client";
import { useGetDivisionsQuery } from "../generated/graphql";
import { DivisionComponent } from "./DivisionComponent";
import { DivisionListComponent } from "./DivisionListComponent";

//This is read by GraphQL codegen to generate types
gql`
  query GetDivisions {
    divisions {
      ...DivisionComponent
    }
  }

  ${DivisionComponent.fragment}
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
    return <DivisionListComponent list={data.divisions} />;
  }
};

export const CompanyWideContainer = (): JSX.Element => {
  return (
    <main
      style={{
        width: "1080px",
        margin: "0 auto",
        padding: "10px 0",
      }}
    >
      <div>
        <InnerComponent />
      </div>
    </main>
  );
};
