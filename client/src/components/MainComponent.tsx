import { gql, useQuery } from "@apollo/client";

const InnerComponent = (): JSX.Element => {
  const { loading, error, data } = useQuery<any>(gql`
    {
      divisions {
        divisionName
      }
    }
  `);

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
