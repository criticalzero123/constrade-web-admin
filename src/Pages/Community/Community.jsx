import React from "react";
import CommunityList from "../../Components/Community/CommunityList";
import TableComponent from "../../Components/TableComponent";
import useCommunity from "../../hooks/community/useCommunity";

const Community = () => {
  const [community] = useCommunity();

  return (
    <TableComponent title={"Community"} description={"Community Information"}>
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
