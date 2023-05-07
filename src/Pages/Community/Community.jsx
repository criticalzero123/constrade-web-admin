import React from "react";
import CommunityList from "../../Components/Community/CommunityList";
import TableComponent from "../../Components/TableComponent";
import useCommunity from "../../hooks/community/useCommunity";

const Community = () => {
  const [community] = useCommunity();
  const HeaderTitle = () => {
    return (
      <div className="grid grid-cols-6 py-4 px-2 border-b">
        <p>Community Name</p>
        <p>Description</p>
        <p>Date Created</p>
        <p>Visibility</p>
        <p>Members</p>
        <p>Posts</p>
      </div>
    );
  };

  return (
    <TableComponent
      title={"Community"}
      description={"Community Information"}
      headerTitle={<HeaderTitle />}
    >
      <div>
        {community &&
          community.map((_community, index) => (
            <CommunityList community={_community} key={index} />
          ))}
      </div>
    </TableComponent>
  );
};

export default Community;
