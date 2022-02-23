import { GraphQLResolveInfo } from "graphql";
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
export type RequireFields<T, K extends keyof T> = Omit<T, K> & {
  [P in K]-?: NonNullable<T[P]>;
};
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
  divisionColor: Maybe<Scalars["String"]>;
  divisionDisplayName: Maybe<Scalars["String"]>;
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
  imageUrl: Maybe<Scalars["String"]>;
  location: Maybe<Scalars["String"]>;
  mailAddress: Maybe<Scalars["String"]>;
  name: Maybe<Scalars["String"]>;
  telephone: Maybe<Scalars["String"]>;
  title: Maybe<Scalars["String"]>;
};

export type Query = {
  __typename?: "Query";
  department: Maybe<Department>;
  departments: Maybe<Array<Maybe<Department>>>;
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

export type ResolverTypeWrapper<T> = Promise<T> | T;

export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> =
  | ResolverFn<TResult, TParent, TContext, TArgs>
  | ResolverWithResolve<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<
  TResult,
  TKey extends string,
  TParent,
  TContext,
  TArgs
> {
  subscribe: SubscriptionSubscribeFn<
    { [key in TKey]: TResult },
    TParent,
    TContext,
    TArgs
  >;
  resolve?: SubscriptionResolveFn<
    TResult,
    { [key in TKey]: TResult },
    TContext,
    TArgs
  >;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<
  TResult,
  TKey extends string,
  TParent,
  TContext,
  TArgs
> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<
  TResult,
  TKey extends string,
  TParent = {},
  TContext = {},
  TArgs = {}
> =
  | ((
      ...args: any[]
    ) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (
  obj: T,
  context: TContext,
  info: GraphQLResolveInfo
) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<
  TResult = {},
  TParent = {},
  TContext = {},
  TArgs = {}
> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  Boolean: ResolverTypeWrapper<Scalars["Boolean"]>;
  Department: ResolverTypeWrapper<Department>;
  Division: ResolverTypeWrapper<Division>;
  Int: ResolverTypeWrapper<Scalars["Int"]>;
  Member: ResolverTypeWrapper<Member>;
  Query: ResolverTypeWrapper<{}>;
  String: ResolverTypeWrapper<Scalars["String"]>;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  Boolean: Scalars["Boolean"];
  Department: Department;
  Division: Division;
  Int: Scalars["Int"];
  Member: Member;
  Query: {};
  String: Scalars["String"];
};

export type DepartmentResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["Department"] = ResolversParentTypes["Department"]
> = {
  departmentDisplayName: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  departmentName: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  divisionDisplayName: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  divisionName: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  members: Resolver<
    Maybe<Array<Maybe<ResolversTypes["Member"]>>>,
    ParentType,
    ContextType
  >;
  numMemberPages: Resolver<
    Maybe<ResolversTypes["Int"]>,
    ParentType,
    ContextType
  >;
  numMembers: Resolver<Maybe<ResolversTypes["Int"]>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type DivisionResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["Division"] = ResolversParentTypes["Division"]
> = {
  departments: Resolver<
    Maybe<Array<Maybe<ResolversTypes["Department"]>>>,
    ParentType,
    ContextType
  >;
  divisionColor: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  divisionDisplayName: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  divisionName: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  members: Resolver<
    Maybe<Array<Maybe<ResolversTypes["Member"]>>>,
    ParentType,
    ContextType
  >;
  numDepartments: Resolver<
    Maybe<ResolversTypes["Int"]>,
    ParentType,
    ContextType
  >;
  numMemberPages: Resolver<
    Maybe<ResolversTypes["Int"]>,
    ParentType,
    ContextType
  >;
  numMembers: Resolver<Maybe<ResolversTypes["Int"]>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MemberResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["Member"] = ResolversParentTypes["Member"]
> = {
  departmentDisplayName: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  divisionDisplayName: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  imageUrl: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  location: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  mailAddress: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  name: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  telephone: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  title: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type QueryResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["Query"] = ResolversParentTypes["Query"]
> = {
  department: Resolver<
    Maybe<ResolversTypes["Department"]>,
    ParentType,
    ContextType,
    RequireFields<QueryDepartmentArgs, "offset">
  >;
  departments: Resolver<
    Maybe<Array<Maybe<ResolversTypes["Department"]>>>,
    ParentType,
    ContextType
  >;
  division: Resolver<
    Maybe<ResolversTypes["Division"]>,
    ParentType,
    ContextType,
    RequireFields<QueryDivisionArgs, "offset">
  >;
  divisions: Resolver<
    Maybe<Array<Maybe<ResolversTypes["Division"]>>>,
    ParentType,
    ContextType
  >;
};

export type Resolvers<ContextType = any> = {
  Department: DepartmentResolvers<ContextType>;
  Division: DivisionResolvers<ContextType>;
  Member: MemberResolvers<ContextType>;
  Query: QueryResolvers<ContextType>;
};
