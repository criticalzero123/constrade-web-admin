import React from "react";
import { useParams } from "react-router-dom";
import CommunityCommentList from "../../../../Components/Community/Posts/Comment/CommunityCommentList";
import TableComponent from "../../../../Components/TableComponent";
import useCommunityComment from "../../../../hooks/community/useCommunityComment";

const CommunityComments = () => {
  const { commentid } = useParams();
  const [comments] = useCommunityComment(commentid);
  return (
    <div>
      <TableComponent
        title="Post Comment"
        description="Community Post Comment List"
      >
        {comments &&
          comments.map((_comment, index) => (
            <CommunityCommentList comment={_comment} key={index} />
          ))}
      </TableComponent>
    </div>
  );
};

export default CommunityComments;
