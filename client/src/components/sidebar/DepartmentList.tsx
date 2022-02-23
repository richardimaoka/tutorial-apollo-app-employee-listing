import { DepartmentListItemFragment } from "../../generated/graphql";
import { excludeNullElements } from "../../utils/arrayUtils";
import { DepartmentListItem } from "./DepartmentListItem";

export interface DepartmentListProps {
  departments: (DepartmentListItemFragment | null)[] | null;
}

export const DepartmentList = ({
  departments,
}: DepartmentListProps): JSX.Element => {
  const nonNullDepartments = departments
    ? excludeNullElements<DepartmentListItemFragment>(departments)
    : [];

  return (
    <>
      {nonNullDepartments.map((d, index) => (
        <DepartmentListItem key={index} fragment={d} />
      ))}
    </>
  );
};
