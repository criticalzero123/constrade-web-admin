import React from "react";
import { Link } from "react-router-dom";

const CommunityList = ({ community }) => {
  return (
    <div className="grid grid-cols-6 w-full py-3 px-2 border-b-2 border-[rgba(255,255,255,0.15)]">
      <p>{community.name}</p>
      <p>{community.description}</p>

      <p className="text-sm opacity-80 font-normal">
        {new Date(community.dateCreated).toLocaleDateString()}
      </p>
      <p>{community.visibility}</p>
      <p>{community.totalMembers}</p>
      <Link to={`${community.communityId}/posts`}>See posts</Link>
    </div>
  );
};

export default CommunityList;
