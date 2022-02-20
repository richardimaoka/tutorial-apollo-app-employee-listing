import { gql, useQuery } from "@apollo/client";
import { useParams } from "react-router-dom";
import { useGetSingleDivisionQuery } from "../generated/graphql";

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
  } else if (!data) {
    return <></>;
  } else {
    console.log(data);
    return <div />;
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
