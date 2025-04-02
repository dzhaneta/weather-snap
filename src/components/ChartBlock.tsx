import { useMemo } from "react";
import { useSelector } from "react-redux";

import {
  Chart,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from "chart.js/auto";
import type { ChartOptions } from "chart.js";
import { Line } from "react-chartjs-2";
import ChartDataLabels from "chartjs-plugin-datalabels";

import { RootState } from "../store/store";

Chart.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

// Chart Options

const axesConfig = {
  grid: {
    display: false,
  },
  border: {
    display: false,
  },
  ticks: {
    display: false,
  },
};

const chartOptions: ChartOptions<"line"> = {
  maintainAspectRatio: false,
  scales: {
    x: axesConfig,
    y: axesConfig,
  },
  layout: {
    padding: {
      top: 15,
      right: 15,
      left: 15,
    },
  },
  plugins: {
    legend: {
      display: false,
    },
    datalabels: {
      color: "#fff",
      font: {
        size: 15,
      },
      align: "top" as const,
      offset: 5,
    },
  },
};

function ChartBlock() {
  const { entities, isLoading, error } = useSelector(
    (state: RootState) => state.weather
  );

  const chartData = useMemo(() => ({
    labels: entities?.map(item => item.time) || [],
    datasets: [{
      data: entities?.map(item => item.temp) || [],
      fill: "start",
      backgroundColor: 'rgba(255, 255, 255, 0.3)',
      borderColor: 'rgba(255, 255, 255, 1)',
      borderWidth: 2,
      tension: 0.3,
      pointBackgroundColor: 'rgba(255, 255, 255, 1)',
    }]
  }), [entities]);

  if (isLoading || error) {
    return null;
  } else {
    return (
      <div className="w-full h-60 my-10 flex place-items-center">
        <Line
          data={chartData}
          options={chartOptions}
          plugins={[ChartDataLabels]}
        />
      </div>
    );
  }
}

export default ChartBlock;
