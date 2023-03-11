import React from "react";
import { useParams } from "react-router-dom";
import CommunityList from "../../../Components/Community/CommunityList";
import CommunityPostsList from "../../../Components/Community/Posts/CommunityPostList";
import TableComponent from "../../../Components/TableComponent";
import useCommunityPost from "../../../hooks/community/useCommunityPost";

const CommunityPost = () => {
  const { postid } = useParams();
  const [posts] = useCommunityPost(postid);

  return (
    <div>
      <TableComponent
        title="Community Post"
        description={"Post lists and information"}
      >
        {posts &&
          posts.map((_post, index) => (
            <CommunityPostsList post={_post} key={index} />
          ))}
      </TableComponent>
    </div>
  );
};

export default CommunityPost;
