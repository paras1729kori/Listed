import { Chart as ChartJS, CategoryScale } from "chart.js/auto";
import { Pie } from "react-chartjs-2";
import type { ChartData, ChartOptions } from "chart.js";

import Image from "next/image";
import { useEffect, useState } from "react";
import downArrow from "../../../public/svgs/downArrow.svg";
import greenC from "../../../public/svgs/greenC.svg";
import yellowC from "../../../public/svgs/yellowC.svg";
import redC from "../../../public/svgs/redC.svg";

ChartJS.register(CategoryScale);

const options: ChartOptions<"pie"> = {
  responsive: true,
  plugins: {
    legend: {
      display: false,
    },
  },
};

const PieChart = () => {
  const [pieData, setPieData] = useState<ChartData<"pie"> | null>(null);
  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("http://localhost:3001/pie");
      const data = await res.json();
      setPieData(data as ChartData<"pie">);
    };

    fetchData();
  }, []);

  return (
    <div className="md:w-1/2 p-5 md:p-10 bg-white rounded-[20px]">
      <div className="flex justify-between">
        <h1 className="text-lg md:text-xl font-bold">Top Products</h1>
        <div className="flex items-center gap-2">
          <h2 className="text-sm md:text-lg text-slate-400">May - June 2021</h2>
          <Image src={downArrow} alt="downArrow.svg" />
        </div>
      </div>
      <div className="flex flex-col items-center justify-between px-5 md:px-10 mt-10 md:flex-row">
        {/* Graph */}
        <div className="">
          <div className="w-inherit mx-auto">
            {pieData ? (
              <Pie data={pieData} options={options} />
            ) : (
              <div>loading</div>
            )}
          </div>
        </div>
        <div className="flex flex-col gap-2 mt-5 md:gap-5">
          <div className="flex items-start gap-2">
            <Image src={greenC} alt="greenC.svg" className="mt-2" />
            <div className="flex items-center gap-5 md:flex-col md:gap-0 md:items-start">
              <h1 className="font-bold">Basic Tees</h1>
              <small>55%</small>
            </div>
          </div>
          <div className="flex items-start gap-2">
            <Image src={yellowC} alt="yellowC.svg" className="mt-2" />
            <div className="flex items-center gap-5 md:flex-col md:gap-0 md:items-start">
              <h1 className="font-bold">Custom Short Pants</h1>
              <small>31%</small>
            </div>
          </div>
          <div className="flex items-start gap-2">
            <Image src={redC} alt="redC.svg" className="mt-2" />
            <div className="flex items-center gap-5 md:flex-col md:gap-0 md:items-start">
              <h1 className="font-bold">Super Hoodies</h1>
              <small>14%</small>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PieChart;
