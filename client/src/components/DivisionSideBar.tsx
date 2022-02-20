const InnerComponent = (): JSX.Element => {
  return <div />;
};

export const DivisionSideBar = (): JSX.Element => {
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
