const InnerComponent = (): JSX.Element => {
  return <div />;
};

export const DivisionSideBar = (): JSX.Element => {
  return (
    <nav>
      <div>
        <InnerComponent />
      </div>
    </nav>
  );
};
