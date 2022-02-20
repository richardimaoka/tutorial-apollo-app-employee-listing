import { gql, useQuery } from "@apollo/client";
import { useGetSingleDivisionQuery } from "../generated/graphql";

//This is read by GraphQL codegen to generate types
gql`
  query GetSingleDivision($divisionName: String) {
    division(divisionName: $divisionName) {
      divisionName
    }
  }
`;

const InnerComponent = (): JSX.Element => {
  const { loading, error, data } = useGetSingleDivisionQuery();

  if (loading) {
    return <></>;
  } else if (error) {
    return <></>;
  } else if (!data) {
    return <></>;
  } else {
    console.log(data);
    return <div />;
  }
};

export const DivisionContainer = (): JSX.Element => {
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
