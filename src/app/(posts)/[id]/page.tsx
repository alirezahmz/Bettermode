"use client";

import { useParams } from "next/navigation";
import { Loading } from "@/components/ui/loading";
import { useGetPostQuery } from "@/api/queries/post/query";
import { GET_POST_DETAILS } from "@/api/queries/post/service";
import Card from "@/components/containers/post/card/Card";
import Header from "@/components/containers/post/header/Header";
import { CenteredView } from "@/components/ui/centeredView";
import { useAddReactionMutation } from "@/api/queries/post/mutation";

function PostDetails() {
  const params = useParams();
  const id = params?.id as string;

  const { data: postDetail, loading: isPostDetailLoading, error: isPostError } = useGetPostQuery({ id });

  const [addReaction] = useAddReactionMutation();

  const handleAddReaction = async () => {
    try {
      await addReaction({
        variables: {
          input: { reaction: "+1", overrideSingleChoiceReactions: false },
          postId: id
        },
        refetchQueries: [
          {
            query: GET_POST_DETAILS,
            variables: {
              id
            }
          }
        ],
        awaitRefetchQueries: true
      });
    } catch (err) {
      console.error("Error adding reaction:", err);
    }
  };

  if (isPostDetailLoading)
    return (
      <CenteredView>
        <Loading />
      </CenteredView>
    );

  if (isPostError)
    return (
      <CenteredView>
        <span className="text-content">Error fetching posts</span>
      </CenteredView>
    );

  return (
    <div className="flex flex-col gap-5 container mx-auto py-6">
      <Header />
      <Card
        title={postDetail?.post?.title}
        fields={postDetail?.post?.fields}
        onAddReaction={handleAddReaction}
        createdAt={postDetail?.post?.createdAt}
        reactionsCount={postDetail?.post?.reactionsCount}
      />
    </div>
  );
}

export default PostDetails;
