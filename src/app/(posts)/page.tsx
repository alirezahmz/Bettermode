"use client";

import { useState } from "react";
import { Loading } from "@/components/ui/loading";
import { CenteredView } from "@/components/ui/centeredView";
import { useGetPostsQuery } from "@/api/queries/posts/query";
import { useAddReactionMutation } from "@/api/queries/post/mutation";
import { GET_POSTS } from "@/api/queries/posts/service";
import Link from "next/link";
import { routes } from "@/constants";
import { Card } from "@/components/containers/post/card";
import { Post } from "@/api/queries/posts/types";

export const PER_PAGE = 4;

function PostList() {
  const [isFetchingMore, setIsFetchingMore] = useState(false);

  const params = {
    limit: PER_PAGE,
    orderByString: "publishedAt",
    postTypeIds: ["csinCbnvp70HCTa"],
    reverse: false,
    spaceIds: ["XqXd5mEQPYL4"]
  };

  const {
    data: posts,
    error: isPostsError,
    loading: isPostsLoading,
    fetchMore: fetchMorePosts
  } = useGetPostsQuery(params);

  const [addReaction] = useAddReactionMutation();

  if (isPostsLoading)
    return (
      <CenteredView>
        <Loading />
      </CenteredView>
    );

  if (isPostsError)
    return (
      <CenteredView>
        <span className="text-content">Error fetching posts</span>
      </CenteredView>
    );

  const handleShowMore = () => {
    setIsFetchingMore(true);
    fetchMorePosts({
      variables: {
        offset: posts?.posts?.nodes.length
      },
      updateQuery: (previousResult, { fetchMoreResult }) => {
        setIsFetchingMore(false);
        if (!fetchMoreResult) return previousResult;

        return {
          ...previousResult,
          posts: {
            ...fetchMoreResult.posts,
            nodes: [...previousResult.posts.nodes, ...fetchMoreResult.posts.nodes]
          }
        };
      }
    });
  };

  const handleAddReaction = async (item: Post) => {
    try {
      await addReaction({
        variables: {
          input: { reaction: "+1", overrideSingleChoiceReactions: false },
          postId: item?.id
        },
        update: cache => {
          const updatedPosts = posts?.posts?.nodes.map(post =>
            post.id === item?.id ? { ...post, reactionsCount: post.reactionsCount + 1 } : post
          );

          cache.writeQuery({
            query: GET_POSTS,
            variables: { ...params, offset: posts?.posts?.nodes.length },
            data: {
              posts: {
                ...posts?.posts,
                nodes: updatedPosts
              }
            }
          });
        }
      });
    } catch (err) {
      console.error("Error adding reaction:", err);
    }
  };

  return (
    <div className="container mx-auto py-6">
      <h1 className="text-2xl font-bold">Top posts</h1>

      <div className="flex flex-col gap-5 mt-6">
        {posts?.posts?.nodes?.map(item => (
          <Link href={`${routes.Home}${item?.id}`} passHref>
            <Card
              title={item?.title}
              fields={item?.fields}
              createdAt={item?.createdAt}
              reactionsCount={item?.reactionsCount}
              onAddReaction={() => handleAddReaction(item)}
            />
          </Link>
        ))}
      </div>

      {posts?.posts?.pageInfo?.hasNextPage && (
        <button
          onClick={handleShowMore}
          disabled={isFetchingMore}
          className="bg-actionNeutral py-3 rounded-full mt-3 w-full"
        >
          {isFetchingMore ? "Loading more..." : "Show more"}
        </button>
      )}
    </div>
  );
}

export default PostList;
