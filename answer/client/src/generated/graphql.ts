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

export type Division = {
  __typename?: "Division";
  divisionDisplayName: Maybe<Scalars["String"]>;
  divisionDisplayNameEn: Maybe<Scalars["String"]>;
  divisionName: Maybe<Scalars["String"]>;
  numDepartments: Maybe<Scalars["Int"]>;
  numMembers: Maybe<Scalars["Int"]>;
};

export type Query = {
  __typename?: "Query";
  divisions: Maybe<Array<Maybe<Division>>>;
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

export const DivisionCardFragmentDoc = gql`
  fragment DivisionCard on Division {
    divisionDisplayName
    divisionDisplayNameEn
    divisionName
    numDepartments
    numMembers
  }
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
