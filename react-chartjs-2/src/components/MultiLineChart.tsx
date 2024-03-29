"use client";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const MultiLineChart = () => {
  const options = {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: "グラフタイトル",
      },
    },
  };
  const data = {
    labels: ["January", "February", "March", "April", "May"],
    datasets: [
      {
        label: "First Dataset",
        data: [12, 19, 3, 5, 2],
        fill: false,
        backgroundColor: "rgba(75,192,192,0.4)",
        borderColor: "rgba(75,192,192,1)",
        tension: 0.1,
      },
      {
        label: "Second Dataset",
        data: [22, 29, 5, 5, 20],
        fill: false,
        backgroundColor: "rgba(255,99,132,0.4)",
        borderColor: "rgba(255,99,132,1)",
        tension: 0.1,
      },
    ],
  };

  return <Line data={data} options={options} />;
};
