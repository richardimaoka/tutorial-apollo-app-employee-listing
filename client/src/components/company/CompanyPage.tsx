import { gql } from "@apollo/client";
import {
  DivisionCardFragment,
  useGetDivisionsQuery,
} from "../../generated/graphql";
import { excludeNullElements } from "../../utils/arrayUtils";
import { HeaderContainer } from "../HeaderContainer";
import { DivisionCard } from "./DivisionCard";

//This is read by GraphQL codegen to generate types
gql`
  query GetDivisions {
    divisions {
      ...DivisionCard
    }
  }

  ${DivisionCard.fragment}
`;

export const CompanyPage = (): JSX.Element => {
  const { loading, error, data } = useGetDivisionsQuery();

  if (loading) {
    return <></>;
  } else if (error) {
    return <></>;
  } else if (!data || !data.divisions) {
    return <></>;
  } else {
    const nonNullList = excludeNullElements<DivisionCardFragment>(
      data.divisions
    );
    return (
      <>
        <HeaderContainer />
        <main
          style={{
            width: "1080px",
            margin: "0 auto",
            padding: "10px 0",
          }}
        >
          <div style={{ display: "flex", flexWrap: "wrap" }}>
            {nonNullList.map((x) => (
              <DivisionCard key={x.divisionName} fragment={x} />
            ))}
          </div>
        </main>
      </>
    );
  }
};
