import React from "react";
import CommunityList from "../../Components/Community/CommunityList";
import useCommunity from "../../hooks/community/useCommunity";

const Community = () => {
  const [community] = useCommunity();

  return (
    <section className=" text-white font-bold bg-[rgba(255,255,255,0.1)] border-2 border-[rgba(255,255,255,0.15)] rounded-sm grow">
      {/* Header */}

      <div className="flex justify-between place-items-center p-4 bg-[rgba(255,255,255,0.20)]">
        <div>
          <h3>Accounts</h3>
          <p className="text-sm opacity-80 font-normal mt-1">
            Account information
          </p>
        </div>
      </div>

      {/* List contents  */}
      <div>
        {community &&
          community.map((_community) => (
            <CommunityList community={_community} />
          ))}
      </div>
    </section>
  );
};

export default Community;
