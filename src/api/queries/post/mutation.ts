/* eslint-disable import/prefer-default-export */

import { useMutation, MutationResult, MutationFunction } from "@apollo/client";
import { ADD_REACTION } from "./service";
import { AddReactionResponse, AddReactionVariables } from "./types";

export const useAddReactionMutation = (): [
  MutationFunction<AddReactionResponse, AddReactionVariables>,
  MutationResult<AddReactionResponse>
] => useMutation<AddReactionResponse, AddReactionVariables>(ADD_REACTION);
