import { gql } from "@apollo/client";

// eslint-disable-next-line import/prefer-default-export
export const GET_POSTS = gql`
  query GetPosts(
    $after: String
    $before: String
    $excludePins: Boolean
    $filterBy: [PostListFilterByInput!]
    $limit: Int!
    $offset: Int
    $orderBy: PostListOrderByEnum
    $orderByString: String
    $postTypeIds: [String!]
    $reverse: Boolean
    $spaceIds: [ID!]
    $query: String
  ) {
    posts(
      after: $after
      before: $before
      excludePins: $excludePins
      filterBy: $filterBy
      limit: $limit
      offset: $offset
      orderBy: $orderBy
      orderByString: $orderByString
      postTypeIds: $postTypeIds
      reverse: $reverse
      spaceIds: $spaceIds
      query: $query
    ) {
      totalCount
      pageInfo {
        endCursor
        hasNextPage
      }
      nodes {
        id
        slug
        title
        shortContent
        createdAt
        publishedAt
        spaceId
        ownerId
        createdById
        repliesCount
        reactionsCount
        status
        description
        thumbnail {
          ... on Image {
            url
            width
            height
          }
        }
        reactions {
          count
          reacted
          reaction
        }
        fields {
          key
          value
        }
      }
    }
  }
`;
