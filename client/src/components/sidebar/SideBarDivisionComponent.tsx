import { gql } from "@apollo/client";
import { SideBarDivisionComponentFragment } from "../../generated/graphql";
import { DivisionListItem } from "./DivisionListItem";

export interface SideBarDivisionComponentProps {
  fragment: SideBarDivisionComponentFragment;
  select: boolean;
}

export const SideBarDivisionComponent = ({
  fragment,
  select,
}: SideBarDivisionComponentProps): JSX.Element => {
  return (
    <div style={{ marginBottom: "16px" }}>
      <DivisionListItem fragment={fragment} select={select} />
    </div>
  );
};

SideBarDivisionComponent.fragment = gql`
  fragment SideBarDivisionComponent on Division {
    ...DivisionListItem
    departments {
      ...DepartmentListItem
    }
  }
`;
