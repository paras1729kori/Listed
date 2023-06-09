import { Chart as ChartJS, CategoryScale } from "chart.js/auto";
import { Line } from "react-chartjs-2";
import type { ChartData, ChartOptions } from "chart.js";

import downArrow from "../../../public/svgs/downArrow.svg";
import greenC from "../../../public/svgs/greenC.svg";
import redC from "../../../public/svgs/redC.svg";

import { useEffect, useState } from "react";
import Image from "next/image";

ChartJS.register(CategoryScale);

const options: ChartOptions<"line"> = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      display: false,
    },
  },
  scales: {
    x: {
      beginAtZero: true,
      grid: {
        display: false,
      },
      ticks: {
        font: {
          size: 10,
        },
      },
    },
    y: {
      grid: {
        display: true,
      },
      min: 0,
      max: 500,
      ticks: {
        stepSize: 100,
        font: {
          size: 10,
        },
      },
    },
  },
};

const LineChart = () => {
  const [lineData, setLineData] = useState<ChartData<"line"> | null>(null);
  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("/api/line");
      const data = await res.json();
      setLineData(data as ChartData<"line">);
    };

    fetchData();
  }, []);

  return (
    <section className="bg-white rounded-[20px] mt-5 md:mt-10 px-8 py-10">
      <div className="flex flex-col gap-2 justify-between mb-4 md:flex-row">
        <div className="flex justify-between md:flex-col">
          <h1 className="text-lg md:text-2xl font-bold">Activities</h1>
          <div className="flex items-center gap-2">
            <h2 className="text-xs md:text-lg text-slate-400">
              May - June 2021
            </h2>
            <Image src={downArrow} alt="downArrow.svg" />
          </div>
        </div>
        <div className="text-xs flex justify-end gap-3 md:text-sm md:gap-5">
          <div className="flex gap-2 items-center">
            <Image src={redC} alt="greenC.svg" />
            <h1 className="font-bold">Guest</h1>
          </div>
          <div className="flex gap-2 items-center">
            <Image src={greenC} alt="greenC.svg" />
            <h1 className="font-bold">User</h1>
          </div>
        </div>
      </div>
      <div className="w-inherit mx-auto md:h-[200px]">
        {lineData ? (
          <Line data={lineData} options={options} />
        ) : (
          <div>loading</div>
        )}
      </div>
    </section>
  );
};

export default LineChart;
