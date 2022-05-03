import { gql } from "@apollo/client";
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
