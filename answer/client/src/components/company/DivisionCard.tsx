import { gql } from "@apollo/client";
import { DivisionCardFragment } from "../../generated/graphql";

export interface DivisionCardProps {
  fragment: DivisionCardFragment;
}

export const DivisionCard = ({ fragment }: DivisionCardProps): JSX.Element => {
  return (
    <div>
      <div>
        <div>
          <span>{fragment.divisionDisplayName}</span>
        </div>
        <div>
          <span>{fragment.numDepartments}部署</span>
          <span>{fragment.numMembers}人</span>
        </div>
        <div>
          <span>{fragment.divisionDisplayNameEn}</span>
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
