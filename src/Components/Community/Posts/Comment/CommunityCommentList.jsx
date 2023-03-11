import React from "react";

const CommunityCommentList = ({ comment }) => {
  return (
    <div className="flex justify-between gap-3 place-items-center w-full py-3 px-2 border-b-2 border-[rgba(255,255,255,0.15)]">
      <p>{comment.communityPostCommentId}</p>
      <p>{comment.commentedByUser}</p>

      <p>{comment.comment}</p>
      <p className="text-sm opacity-80 font-normal">
        {new Date(comment.dateCommented).toLocaleDateString()}
      </p>
    </div>
  );
};

export default CommunityCommentList;
