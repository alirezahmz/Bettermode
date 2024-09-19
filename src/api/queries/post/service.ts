import { gql } from "@apollo/client";


export const ADD_REACTION = gql`
  mutation AddReaction($input: AddReactionInput!, $postId: ID!) {
    addReaction(input: $input, postId: $postId) {
      status
    }
  }
`;


export const GET_POST_DETAILS = gql`
  query GetPost($id: ID!) {
    post(id: $id) {
      id
      slug
      title
      description
      shortContent
      createdAt
      publishedAt
      ownerId
      spaceId
      status
      reactionsCount
      repliesCount
      url
      postTypeId
      primaryReactionType
      subscribersCount
      customSeoDetail {
        description
        noIndex
        title
        canonicalUrl
      }
      hasMoreContent
      imageIds
      tags {
        id
        slug
        title
        description
      }
      space {
        id
        networkId
        name
        description
        slug
        type
      }
      mappingFields {
        key
        type
        value
      }
      fields {
        key
        value
      }
    }
  }
`;
