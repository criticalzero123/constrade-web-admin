import React, { useState } from "react";
import { useDispatch } from "react-redux";
import Swal from "sweetalert2";
import { doneFeedback } from "../../redux/action/systemAction";

const FeedbackList = ({ data }) => {
  const [status, setStatus] = useState(data && data.status);
  const dispatch = useDispatch();

  const onChangeStatus = (e) => {
    const value = e.target.value;

    Swal.fire({
      title: "Are you sure??",
      showDenyButton: true,
      confirmButtonText: "Ok",
      denyButtonText: `Cancel`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        dispatch(doneFeedback(data.systemFeedbackId));
        setStatus(value);
      } else if (result.isDenied) {
        Swal.fire("Changes are not saved", "", "info");
      }
    });
  };

  return (
    <div>
      <div className="grid grid-cols-4 place-items-center w-full py-3 px-2 border-b-2 border-[rgba(255,255,255,0.15)]">
        <div className="flex gap-2 place-items-center">
          <div>
            <p className="text-md capitalize">{data.title}</p>
            <p className="text-xs opacity-80 font-normal uppercase">
              {data.reportType}
            </p>
          </div>
        </div>
        <p>{data.description}</p>
        <p className="text-sm opacity-80 font-normal">
          {new Date(data.dateSubmitted).toLocaleDateString()}
        </p>
        <select value={status} onChange={onChangeStatus} className="text-black">
          <option value="active">Not Fixed</option>
          <option value="done">Fixed</option>
        </select>
      </div>
    </div>
  );
};

export default FeedbackList;
