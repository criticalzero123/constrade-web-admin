import React from "react";

// Icon assets
import { MdOutlineChevronRight } from "react-icons/md";
import { Link } from "react-router-dom";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
export default function UserStatistic(props) {
  const { title, description, path, statistic } = props;

  ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
  );

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
    },
  };

  const labels = ["Jan", "Feb", "Mar", "Apr", "May"];

  const semiVerified = statistic.filter(
    (stat) => stat.userType === "semi-verified"
  );

  const verifiedFilter = statistic.filter(
    (stat) => stat.userType === "verified"
  );

  const premium = statistic.filter((stat) => stat.userType === "premium");

  const verifiedCount = (_filter) =>
    labels.map((month) => {
      // Filter the statistic array for each month
      const filteredStats = _filter.filter(
        (stat) =>
          new Date(stat.date).toLocaleString("default", { month: "short" }) ===
          month
      );
      // Get the count of filtered stats for the current month
      const count = filteredStats.length;
      return count;
    });

  const data = {
    labels,
    datasets: [
      {
        label: "Semi-Verified",
        data: [...verifiedCount(semiVerified)],
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
      {
        label: "Verified",
        data: [...verifiedCount(verifiedFilter)],
        backgroundColor: "rgba(53, 162, 235, 0.5)",
      },
      {
        label: "Premium",
        data: [...verifiedCount(premium)],
        backgroundColor: "#B22B00",
      },
    ],
  };

  return (
    <section className=" text-white font-bold bg-[rgba(255,255,255,0.1)] border-2 border-[rgba(255,255,255,0.15)] rounded-sm grow">
      {/* Header */}
      <Link to={`/dashboard/${path}`}>
        <div className="flex justify-between place-items-center p-4 bg-[rgba(255,255,255,0.20)]">
          {/* TODO: Encapsulate whole header to an outlet, whole header container should be clickable */}
          <div>
            <h3>{title}</h3>
            <p className="text-sm opacity-80 font-normal mt-1">{description}</p>
          </div>
          <MdOutlineChevronRight size={24} />
        </div>
      </Link>

      {/* List contents  */}
      <div className="h-96">
        <Bar options={options} data={data} />
      </div>
    </section>
  );
}
