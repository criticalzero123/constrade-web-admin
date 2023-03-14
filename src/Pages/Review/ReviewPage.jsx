import React from "react";
import { useParams } from "react-router-dom";
import { useReview } from "../../hooks/review/useReview";

const ReviewPage = () => {
  const { userid } = useParams();
  const [reviews] = useReview(userid);

  if (reviews === undefined) return;

  if (reviews.length === 0) return <p>No Review History.</p>;

  return (
    <div>
      {reviews.map((rev, index) => (
        <div className="flex items-center gap-2" key={index}>
          <p>
            {rev.person.firstName} {rev.person.lastName}
          </p>
          <p>{rev.review.rate}</p>
          <p>{rev.review.description}</p>
        </div>
      ))}
    </div>
  );
};

export default ReviewPage;
