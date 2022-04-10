export const excludeNullElements = <ElementType>(
  list: (ElementType | null)[]
): ElementType[] => {
  return list.filter((elem) => elem) as ElementType[];
};
