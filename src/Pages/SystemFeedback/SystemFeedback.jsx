import React from "react";
import FeedbackList from "../../Components/SystemFeedback/FeedbackList";
import { useFeedback } from "../../hooks/system/useFeedback";

const SystemFeedback = () => {
  const [feedback] = useFeedback();

  return (
    <section className=" text-white font-bold bg-[rgba(255,255,255,0.1)] border-2 border-[rgba(255,255,255,0.15)] rounded-sm grow">
      {/* Header */}

      <div className="flex justify-between place-items-center p-4 bg-[rgba(255,255,255,0.20)]">
        <div>
          <h3>Accounts</h3>
          <p className="text-sm opacity-80 font-normal mt-1">
            Account Information
          </p>
        </div>
      </div>
      <div className="grid grid-cols-4 py-4 px-2 border-b">
        <p className="text-center">Title</p>
        <p className="text-center">Description</p>
        <p className="text-center">Date Posted</p>
        <p className="text-center">Status</p>
      </div>

      {/* List contents  */}
      <div>
        {feedback &&
          feedback.map((_feedback, index) => (
            <FeedbackList data={_feedback} key={index} />
          ))}
      </div>
    </section>
  );
};

export default SystemFeedback;
