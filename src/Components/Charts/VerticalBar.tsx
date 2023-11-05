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

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const options = {
  plugins: {
    legend: {
      position: "top" as const,
    },
  },
  scales: {
    x: {
      display: false,
    },
    y: {
      ticks: {
        stepSize: 500,
        min: 500,
        max: 1500,
      },
    },
  },

  responsive: true,
};

const labels = ["1", "2", "3", "4", "5"];

const data = {
  labels,
  datasets: [
    {
      label: "Data1",
      data: [1500, 1500, 300, 1200, 1500],
      backgroundColor: "#1a3d7d",
    },
    {
      label: "Data2",
      data: [800, 900, 1450, 400, 900],
      backgroundColor: "#367dfd",
    },
  ],
};
const VerticalBar = () => {
  return <Bar options={options} data={data} />;
};

export default VerticalBar;
