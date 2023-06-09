"use client";

import Navbar from "./Navbar";
import Cards from "./Cards";
import LineChart from "./LineChart";
import PieChart from "./PieChart";
import Schedules from "./Schedules";

const Dashboard = () => {
  return (
    <div className="flex flex-col my-2 md:my-5">
      <Navbar />
      <Cards />
      <LineChart />
      <section className="flex flex-col gap-5 mt-5 justify-between md:flex-row md:gap-12 md:mt-10">
        <PieChart />
        <Schedules />
      </section>
    </div>
  );
};

export default Dashboard;
