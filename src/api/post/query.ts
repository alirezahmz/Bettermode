/* eslint-disable import/prefer-default-export */

import { QueryResult, useQuery } from "@apollo/client";
import { GET_POST_DETAILS } from "./service";
import { PostDetailResponse, TPostParams } from "./types";

export const useGetPostQuery = (params: TPostParams): QueryResult<PostDetailResponse, TPostParams> =>
  useQuery<PostDetailResponse, TPostParams>(GET_POST_DETAILS, {
    variables: { id: params.id }
  });
