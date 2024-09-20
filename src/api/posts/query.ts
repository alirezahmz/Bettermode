/* eslint-disable import/prefer-default-export */

import { QueryResult, useQuery } from "@apollo/client";

import { GET_POSTS } from "./service";
import { PostsResponse, TPostsParams } from "./types";

export const useGetPostsQuery = (params: TPostsParams): QueryResult<PostsResponse, TPostsParams> =>
  useQuery<PostsResponse, TPostsParams>(GET_POSTS, {
    variables: params
  });
