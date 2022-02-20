import { useParams } from "react-router-dom";

interface InnerComponentProps {
  divisionName: string;
}

const InnerComponent = ({ divisionName }: InnerComponentProps): JSX.Element => {
  return (
    <div>
      <span>&gt;{divisionName}</span>
    </div>
  );
};

export const BreadCrumbContainer = (): JSX.Element => {
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
