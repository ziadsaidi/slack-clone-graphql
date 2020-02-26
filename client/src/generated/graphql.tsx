import gql from 'graphql-tag';
import * as ApolloReactCommon from '@apollo/react-common';
import * as ApolloReactHooks from '@apollo/react-hooks';
export type Maybe<T> = T | null;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string,
  String: string,
  Boolean: boolean,
  Int: number,
  Float: number,
};

export type Channel = {
   __typename?: 'Channel',
  id: Scalars['Int'],
  name: Scalars['String'],
  public: Scalars['Boolean'],
  users: Array<User>,
  messages: Array<Message>,
  team: Team,
};

export type Message = {
   __typename?: 'Message',
  id: Scalars['Int'],
  text: Scalars['String'],
  user: User,
  channel: Channel,
};

export type Mutation = {
   __typename?: 'Mutation',
  register: User,
  createTeam: Scalars['Boolean'],
  createChannel: Scalars['Boolean'],
  createMessage: Scalars['Boolean'],
};


export type MutationRegisterArgs = {
  password: Scalars['String'],
  email: Scalars['String'],
  username: Scalars['String']
};


export type MutationCreateTeamArgs = {
  name: Scalars['String'],
  owner: Scalars['Float']
};


export type MutationCreateChannelArgs = {
  name: Scalars['String'],
  public: Scalars['Boolean'],
  teamId: Scalars['Float']
};


export type MutationCreateMessageArgs = {
  text: Scalars['String'],
  channelId: Scalars['Float']
};

export type Query = {
   __typename?: 'Query',
  hi: Scalars['String'],
  getUser: User,
  getAllUsers: Array<User>,
};


export type QueryGetUserArgs = {
  id: Scalars['Float']
};

export type Team = {
   __typename?: 'Team',
  id: Scalars['Int'],
  user: User,
  name: Scalars['String'],
  channels: Array<Channel>,
  users: Array<User>,
};

export type User = {
   __typename?: 'User',
  id: Scalars['Int'],
  username: Scalars['String'],
  email: Scalars['String'],
  messages: Array<Message>,
  channels: Array<Channel>,
  teams: Array<Team>,
};

export type GetUsersQueryVariables = {};


export type GetUsersQuery = (
  { __typename?: 'Query' }
  & { getAllUsers: Array<(
    { __typename?: 'User' }
    & Pick<User, 'id' | 'email'>
  )> }
);

export type RegisterMutationVariables = {
  email: Scalars['String'],
  password: Scalars['String'],
  username: Scalars['String']
};


export type RegisterMutation = (
  { __typename?: 'Mutation' }
  & { register: (
    { __typename?: 'User' }
    & Pick<User, 'username' | 'id'>
  ) }
);


export const GetUsersDocument = gql`
    query GetUsers {
  getAllUsers {
    id
    email
  }
}
    `;

/**
 * __useGetUsersQuery__
 *
 * To run a query within a React component, call `useGetUsersQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetUsersQuery` returns an object from Apollo Client that contains loading, error, and data properties 
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetUsersQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetUsersQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<GetUsersQuery, GetUsersQueryVariables>) {
        return ApolloReactHooks.useQuery<GetUsersQuery, GetUsersQueryVariables>(GetUsersDocument, baseOptions);
      }
export function useGetUsersLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<GetUsersQuery, GetUsersQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<GetUsersQuery, GetUsersQueryVariables>(GetUsersDocument, baseOptions);
        }
export type GetUsersQueryHookResult = ReturnType<typeof useGetUsersQuery>;
export type GetUsersLazyQueryHookResult = ReturnType<typeof useGetUsersLazyQuery>;
export type GetUsersQueryResult = ApolloReactCommon.QueryResult<GetUsersQuery, GetUsersQueryVariables>;
export const RegisterDocument = gql`
    mutation Register($email: String!, $password: String!, $username: String!) {
  register(email: $email, password: $password, username: $username) {
    username
    id
  }
}
    `;
export type RegisterMutationFn = ApolloReactCommon.MutationFunction<RegisterMutation, RegisterMutationVariables>;

/**
 * __useRegisterMutation__
 *
 * To run a mutation, you first call `useRegisterMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRegisterMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [registerMutation, { data, loading, error }] = useRegisterMutation({
 *   variables: {
 *      email: // value for 'email'
 *      password: // value for 'password'
 *      username: // value for 'username'
 *   },
 * });
 */
export function useRegisterMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<RegisterMutation, RegisterMutationVariables>) {
        return ApolloReactHooks.useMutation<RegisterMutation, RegisterMutationVariables>(RegisterDocument, baseOptions);
      }
export type RegisterMutationHookResult = ReturnType<typeof useRegisterMutation>;
export type RegisterMutationResult = ApolloReactCommon.MutationResult<RegisterMutation>;
export type RegisterMutationOptions = ApolloReactCommon.BaseMutationOptions<RegisterMutation, RegisterMutationVariables>;