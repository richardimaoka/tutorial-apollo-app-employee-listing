import { gql } from "@apollo/client";

export const DivisionCard = (): JSX.Element => {
  return (
    <div>
      <div>
        <div>
          <span>{"トレーディング部門"}</span>
        </div>
        <div>
          <span>{4}部署</span>
          <span>{105}人</span>
        </div>
        <div>
          <span>{"Trading"}</span>
        </div>
      </div>
    </div>
  );
};

DivisionCard.fragment = gql`
  fragment DivisionCard on Division {
    divisionDisplayName
    divisionDisplayNameEn
    divisionName
    numDepartments
    numMembers
  }
`;
