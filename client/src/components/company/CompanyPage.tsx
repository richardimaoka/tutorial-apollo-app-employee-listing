import { gql } from "@apollo/client";
import {
  DivisionComponentFragment,
  useGetDivisionsQuery,
} from "../../generated/graphql";
import { excludeNullElements } from "../../utils/arrayUtils";
import { DivisionComponent } from "../DivisionComponent";

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
    const nonNullList = excludeNullElements<DivisionComponentFragment>(
      data.divisions
    );
    return (
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {nonNullList.map((x) => (
          <DivisionComponent key={x.divisionName} fragment={x} />
        ))}
      </div>
    );
  }
};

export const CompanyPage = (): JSX.Element => {
  return (
    <main
      style={{
        width: "1080px",
        margin: "0 auto",
        padding: "10px 0",
      }}
    >
      <InnerComponent />
    </main>
  );
};
