import { gql } from "@apollo/client";
import * as Apollo from "@apollo/client";
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Department = {
  __typename?: "Department";
  departmentDisplayName: Maybe<Scalars["String"]>;
  departmentName: Maybe<Scalars["String"]>;
  divisionDisplayName: Maybe<Scalars["String"]>;
  divisionName: Maybe<Scalars["String"]>;
  members: Maybe<Array<Maybe<Member>>>;
  numMemberPages: Maybe<Scalars["Int"]>;
  numMembers: Maybe<Scalars["Int"]>;
};

export type Division = {
  __typename?: "Division";
  departments: Maybe<Array<Maybe<Department>>>;
  divisionDisplayName: Maybe<Scalars["String"]>;
  divisionDisplayNameEn: Maybe<Scalars["String"]>;
  divisionName: Maybe<Scalars["String"]>;
  members: Maybe<Array<Maybe<Member>>>;
  numDepartments: Maybe<Scalars["Int"]>;
  numMemberPages: Maybe<Scalars["Int"]>;
  numMembers: Maybe<Scalars["Int"]>;
};

export type Member = {
  __typename?: "Member";
  departmentDisplayName: Maybe<Scalars["String"]>;
  divisionDisplayName: Maybe<Scalars["String"]>;
  email: Maybe<Scalars["String"]>;
  imageUrl: Maybe<Scalars["String"]>;
  location: Maybe<Scalars["String"]>;
  name: Maybe<Scalars["String"]>;
  telephone: Maybe<Scalars["String"]>;
  title: Maybe<Scalars["String"]>;
};

export type Query = {
  __typename?: "Query";
  department: Maybe<Department>;
  division: Maybe<Division>;
  divisions: Maybe<Array<Maybe<Division>>>;
};

export type QueryDepartmentArgs = {
  departmentName: InputMaybe<Scalars["String"]>;
  divisionName: InputMaybe<Scalars["String"]>;
  offset?: InputMaybe<Scalars["Int"]>;
};

export type QueryDivisionArgs = {
  divisionName: InputMaybe<Scalars["String"]>;
  offset?: InputMaybe<Scalars["Int"]>;
};

export type GetDivisionsQueryVariables = Exact<{ [key: string]: never }>;

export type GetDivisionsQuery = {
  __typename?: "Query";
  divisions: Array<{
    __typename?: "Division";
    divisionDisplayName: string | null;
    divisionDisplayNameEn: string | null;
    divisionName: string | null;
    numDepartments: number | null;
    numMembers: number | null;
  } | null> | null;
};

export type DivisionCardFragment = {
  __typename?: "Division";
  divisionDisplayName: string | null;
  divisionDisplayNameEn: string | null;
  divisionName: string | null;
  numDepartments: number | null;
  numMembers: number | null;
};

export type DepartmentBreadcrumbFragment = {
  __typename?: "Department";
  divisionName: string | null;
  divisionDisplayName: string | null;
  departmentDisplayName: string | null;
};

export type GetSingleDepartmentQueryVariables = Exact<{
  divisionName: InputMaybe<Scalars["String"]>;
  departmentName: InputMaybe<Scalars["String"]>;
  offset: InputMaybe<Scalars["Int"]>;
}>;

export type GetSingleDepartmentQuery = {
  __typename?: "Query";
  department: {
    __typename?: "Department";
    divisionName: string | null;
    divisionDisplayName: string | null;
    departmentDisplayName: string | null;
    numMembers: number | null;
    members: Array<{
      __typename?: "Member";
      name: string | null;
      divisionDisplayName: string | null;
      departmentDisplayName: string | null;
      title: string | null;
      location: string | null;
      telephone: string | null;
      email: string | null;
      imageUrl: string | null;
    } | null> | null;
  } | null;
  divisions: Array<{
    __typename?: "Division";
    divisionName: string | null;
    divisionDisplayName: string | null;
    departments: Array<{
      __typename?: "Department";
      departmentName: string | null;
      departmentDisplayName: string | null;
    } | null> | null;
  } | null> | null;
};

export type DivisionBreadcrumbFragment = {
  __typename?: "Division";
  divisionName: string | null;
  divisionDisplayName: string | null;
};

export type GetSingleDivisionQueryVariables = Exact<{
  divisionName: InputMaybe<Scalars["String"]>;
  offset: InputMaybe<Scalars["Int"]>;
}>;

export type GetSingleDivisionQuery = {
  __typename?: "Query";
  division: {
    __typename?: "Division";
    divisionName: string | null;
    divisionDisplayName: string | null;
    numMembers: number | null;
    members: Array<{
      __typename?: "Member";
      name: string | null;
      divisionDisplayName: string | null;
      departmentDisplayName: string | null;
      title: string | null;
      location: string | null;
      telephone: string | null;
      email: string | null;
      imageUrl: string | null;
    } | null> | null;
  } | null;
  divisions: Array<{
    __typename?: "Division";
    divisionName: string | null;
    divisionDisplayName: string | null;
    departments: Array<{
      __typename?: "Department";
      departmentName: string | null;
      departmentDisplayName: string | null;
    } | null> | null;
  } | null> | null;
};

export type MemberComponentFragment = {
  __typename?: "Member";
  name: string | null;
  divisionDisplayName: string | null;
  departmentDisplayName: string | null;
  title: string | null;
  location: string | null;
  telephone: string | null;
  email: string | null;
  imageUrl: string | null;
};

export type DivisionMemberListingFragment = {
  __typename?: "Division";
  numMembers: number | null;
  members: Array<{
    __typename?: "Member";
    name: string | null;
    divisionDisplayName: string | null;
    departmentDisplayName: string | null;
    title: string | null;
    location: string | null;
    telephone: string | null;
    email: string | null;
    imageUrl: string | null;
  } | null> | null;
};

export type DepartmentMemberListingFragment = {
  __typename?: "Department";
  numMembers: number | null;
  members: Array<{
    __typename?: "Member";
    name: string | null;
    divisionDisplayName: string | null;
    departmentDisplayName: string | null;
    title: string | null;
    location: string | null;
    telephone: string | null;
    email: string | null;
    imageUrl: string | null;
  } | null> | null;
};

export type DepartmentListItemFragment = {
  __typename?: "Department";
  departmentName: string | null;
  departmentDisplayName: string | null;
};

export type DivisionListItemFragment = {
  __typename?: "Division";
  divisionName: string | null;
  divisionDisplayName: string | null;
  departments: Array<{
    __typename?: "Department";
    departmentName: string | null;
    departmentDisplayName: string | null;
  } | null> | null;
};

export type SideBarFragment = {
  __typename?: "Query";
  divisions: Array<{
    __typename?: "Division";
    divisionName: string | null;
    divisionDisplayName: string | null;
    departments: Array<{
      __typename?: "Department";
      departmentName: string | null;
      departmentDisplayName: string | null;
    } | null> | null;
  } | null> | null;
};

export const DivisionCardFragmentDoc = gql`
  fragment DivisionCard on Division {
    divisionDisplayName
    divisionDisplayNameEn
    divisionName
    numDepartments
    numMembers
  }
`;
export const DepartmentBreadcrumbFragmentDoc = gql`
  fragment DepartmentBreadcrumb on Department {
    divisionName
    divisionDisplayName
    departmentDisplayName
  }
`;
export const DivisionBreadcrumbFragmentDoc = gql`
  fragment DivisionBreadcrumb on Division {
    divisionName
    divisionDisplayName
  }
`;
export const MemberComponentFragmentDoc = gql`
  fragment MemberComponent on Member {
    name
    divisionDisplayName
    departmentDisplayName
    title
    location
    telephone
    email
    imageUrl
  }
`;
export const DivisionMemberListingFragmentDoc = gql`
  fragment DivisionMemberListing on Division {
    numMembers
    members {
      ...MemberComponent
    }
  }
  ${MemberComponentFragmentDoc}
`;
export const DepartmentMemberListingFragmentDoc = gql`
  fragment DepartmentMemberListing on Department {
    numMembers
    members {
      ...MemberComponent
    }
  }
  ${MemberComponentFragmentDoc}
`;
export const DepartmentListItemFragmentDoc = gql`
  fragment DepartmentListItem on Department {
    departmentName
    departmentDisplayName
  }
`;
export const DivisionListItemFragmentDoc = gql`
  fragment DivisionListItem on Division {
    divisionName
    divisionDisplayName
    departments {
      ...DepartmentListItem
    }
  }
  ${DepartmentListItemFragmentDoc}
`;
export const SideBarFragmentDoc = gql`
  fragment SideBar on Query {
    divisions {
      ...DivisionListItem
    }
  }
  ${DivisionListItemFragmentDoc}
`;
export const GetDivisionsDocument = gql`
  query GetDivisions {
    divisions {
      ...DivisionCard
    }
  }
  ${DivisionCardFragmentDoc}
`;

/**
 * __useGetDivisionsQuery__
 *
 * To run a query within a React component, call `useGetDivisionsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetDivisionsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetDivisionsQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetDivisionsQuery(
  baseOptions?: Apollo.QueryHookOptions<
    GetDivisionsQuery,
    GetDivisionsQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<GetDivisionsQuery, GetDivisionsQueryVariables>(
    GetDivisionsDocument,
    options
  );
}
export function useGetDivisionsLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetDivisionsQuery,
    GetDivisionsQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<GetDivisionsQuery, GetDivisionsQueryVariables>(
    GetDivisionsDocument,
    options
  );
}
export type GetDivisionsQueryHookResult = ReturnType<
  typeof useGetDivisionsQuery
>;
export type GetDivisionsLazyQueryHookResult = ReturnType<
  typeof useGetDivisionsLazyQuery
>;
export type GetDivisionsQueryResult = Apollo.QueryResult<
  GetDivisionsQuery,
  GetDivisionsQueryVariables
>;
export const GetSingleDepartmentDocument = gql`
  query GetSingleDepartment(
    $divisionName: String
    $departmentName: String
    $offset: Int
  ) {
    ...SideBar
    department(
      divisionName: $divisionName
      departmentName: $departmentName
      offset: $offset
    ) {
      ...DepartmentBreadcrumb
      ...DepartmentMemberListing
    }
  }
  ${SideBarFragmentDoc}
  ${DepartmentBreadcrumbFragmentDoc}
  ${DepartmentMemberListingFragmentDoc}
`;

/**
 * __useGetSingleDepartmentQuery__
 *
 * To run a query within a React component, call `useGetSingleDepartmentQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetSingleDepartmentQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetSingleDepartmentQuery({
 *   variables: {
 *      divisionName: // value for 'divisionName'
 *      departmentName: // value for 'departmentName'
 *      offset: // value for 'offset'
 *   },
 * });
 */
export function useGetSingleDepartmentQuery(
  baseOptions?: Apollo.QueryHookOptions<
    GetSingleDepartmentQuery,
    GetSingleDepartmentQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<
    GetSingleDepartmentQuery,
    GetSingleDepartmentQueryVariables
  >(GetSingleDepartmentDocument, options);
}
export function useGetSingleDepartmentLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetSingleDepartmentQuery,
    GetSingleDepartmentQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<
    GetSingleDepartmentQuery,
    GetSingleDepartmentQueryVariables
  >(GetSingleDepartmentDocument, options);
}
export type GetSingleDepartmentQueryHookResult = ReturnType<
  typeof useGetSingleDepartmentQuery
>;
export type GetSingleDepartmentLazyQueryHookResult = ReturnType<
  typeof useGetSingleDepartmentLazyQuery
>;
export type GetSingleDepartmentQueryResult = Apollo.QueryResult<
  GetSingleDepartmentQuery,
  GetSingleDepartmentQueryVariables
>;
export const GetSingleDivisionDocument = gql`
  query GetSingleDivision($divisionName: String, $offset: Int) {
    ...SideBar
    division(divisionName: $divisionName, offset: $offset) {
      ...DivisionBreadcrumb
      ...DivisionMemberListing
    }
  }
  ${SideBarFragmentDoc}
  ${DivisionBreadcrumbFragmentDoc}
  ${DivisionMemberListingFragmentDoc}
`;

/**
 * __useGetSingleDivisionQuery__
 *
 * To run a query within a React component, call `useGetSingleDivisionQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetSingleDivisionQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetSingleDivisionQuery({
 *   variables: {
 *      divisionName: // value for 'divisionName'
 *      offset: // value for 'offset'
 *   },
 * });
 */
export function useGetSingleDivisionQuery(
  baseOptions?: Apollo.QueryHookOptions<
    GetSingleDivisionQuery,
    GetSingleDivisionQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<
    GetSingleDivisionQuery,
    GetSingleDivisionQueryVariables
  >(GetSingleDivisionDocument, options);
}
export function useGetSingleDivisionLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetSingleDivisionQuery,
    GetSingleDivisionQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<
    GetSingleDivisionQuery,
    GetSingleDivisionQueryVariables
  >(GetSingleDivisionDocument, options);
}
export type GetSingleDivisionQueryHookResult = ReturnType<
  typeof useGetSingleDivisionQuery
>;
export type GetSingleDivisionLazyQueryHookResult = ReturnType<
  typeof useGetSingleDivisionLazyQuery
>;
export type GetSingleDivisionQueryResult = Apollo.QueryResult<
  GetSingleDivisionQuery,
  GetSingleDivisionQueryVariables
>;
