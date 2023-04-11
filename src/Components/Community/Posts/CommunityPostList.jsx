import React from "react";
import { Link } from "react-router-dom";

const CommunityPostsList = ({ post }) => {
  return (
    <div className="grid grid-cols-6 gap-3 place-items-center w-full py-3 px-2 border-b-2 border-[rgba(255,255,255,0.15)]">
      <p>{post.communityPostId}</p>
      <p>{post.posterUserId}</p>

      <p>{post.description}</p>
      <p>{post.like}</p>
      <p className="text-sm opacity-80 font-normal">
        {new Date(post.createdDate).toLocaleDateString()}
      </p>
      <Link to={`${post.communityPostId}/comments`}>See Comments</Link>
    </div>
  );
};

export default CommunityPostsList;
