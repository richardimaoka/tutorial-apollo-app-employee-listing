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
  members: Maybe<Array<Maybe<Member>>>;
  numMembers: Maybe<Scalars["Int"]>;
};

export type Division = {
  __typename?: "Division";
  departments: Maybe<Array<Maybe<Department>>>;
  divisionColor: Maybe<Scalars["String"]>;
  divisionDisplayName: Maybe<Scalars["String"]>;
  divisionName: Maybe<Scalars["String"]>;
  members: Maybe<Array<Maybe<Member>>>;
  numDepartments: Maybe<Scalars["Int"]>;
  numMembers: Maybe<Scalars["Int"]>;
};

export type Member = {
  __typename?: "Member";
  departmentDisplayName: Maybe<Scalars["String"]>;
  divisionDisplayName: Maybe<Scalars["String"]>;
  imageUrl: Maybe<Scalars["String"]>;
  location: Maybe<Scalars["String"]>;
  mailAddress: Maybe<Scalars["String"]>;
  name: Maybe<Scalars["String"]>;
  telephone: Maybe<Scalars["String"]>;
  title: Maybe<Scalars["String"]>;
};

export type Query = {
  __typename?: "Query";
  division: Maybe<Division>;
  divisions: Maybe<Array<Maybe<Division>>>;
};

export type QueryDivisionArgs = {
  divisionName: InputMaybe<Scalars["String"]>;
};

export type BreadcrumbContainerFragment = {
  __typename?: "Division";
  divisionName: string | null;
  divisionDisplayName: string | null;
};

export type GetDivisionsQueryVariables = Exact<{ [key: string]: never }>;

export type GetDivisionsQuery = {
  __typename?: "Query";
  divisions: Array<{
    __typename?: "Division";
    divisionDisplayName: string | null;
    divisionName: string | null;
    numDepartments: number | null;
    numMembers: number | null;
    divisionColor: string | null;
  } | null> | null;
};

export type DivisionComponentFragment = {
  __typename?: "Division";
  divisionDisplayName: string | null;
  divisionName: string | null;
  numDepartments: number | null;
  numMembers: number | null;
  divisionColor: string | null;
};

export type DivisionContainerFragment = {
  __typename?: "Division";
  members: Array<{
    __typename?: "Member";
    name: string | null;
    divisionDisplayName: string | null;
    departmentDisplayName: string | null;
    title: string | null;
    location: string | null;
    telephone: string | null;
    mailAddress: string | null;
    imageUrl: string | null;
  } | null> | null;
};

export type GetSingleDivisionQueryVariables = Exact<{
  divisionName: InputMaybe<Scalars["String"]>;
}>;

export type GetSingleDivisionQuery = {
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
  division: {
    __typename?: "Division";
    divisionName: string | null;
    divisionDisplayName: string | null;
    members: Array<{
      __typename?: "Member";
      name: string | null;
      divisionDisplayName: string | null;
      departmentDisplayName: string | null;
      title: string | null;
      location: string | null;
      telephone: string | null;
      mailAddress: string | null;
      imageUrl: string | null;
    } | null> | null;
  } | null;
};

export type DivisionSideBarFragment = {
  __typename?: "Division";
  divisionName: string | null;
  divisionDisplayName: string | null;
  departments: Array<{
    __typename?: "Department";
    departmentName: string | null;
    departmentDisplayName: string | null;
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
  mailAddress: string | null;
  imageUrl: string | null;
};

export const BreadcrumbContainerFragmentDoc = gql`
  fragment BreadcrumbContainer on Division {
    divisionName
    divisionDisplayName
  }
`;
export const DivisionComponentFragmentDoc = gql`
  fragment DivisionComponent on Division {
    divisionDisplayName
    divisionName
    numDepartments
    numMembers
    divisionColor
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
    mailAddress
    imageUrl
  }
`;
export const DivisionContainerFragmentDoc = gql`
  fragment DivisionContainer on Division {
    members {
      ...MemberComponent
    }
  }
  ${MemberComponentFragmentDoc}
`;
export const DivisionSideBarFragmentDoc = gql`
  fragment DivisionSideBar on Division {
    divisionName
    divisionDisplayName
    departments {
      departmentName
      departmentDisplayName
    }
  }
`;
export const GetDivisionsDocument = gql`
  query GetDivisions {
    divisions {
      ...DivisionComponent
    }
  }
  ${DivisionComponentFragmentDoc}
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
export const GetSingleDivisionDocument = gql`
  query GetSingleDivision($divisionName: String) {
    divisions {
      ...DivisionSideBar
    }
    division(divisionName: $divisionName) {
      ...BreadcrumbContainer
      ...DivisionContainer
    }
  }
  ${DivisionSideBarFragmentDoc}
  ${BreadcrumbContainerFragmentDoc}
  ${DivisionContainerFragmentDoc}
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
