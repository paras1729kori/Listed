import { useEffect, useState } from "react";
import Image from "next/image";
import rightArrow from "../../../public/svgs/rightArrow.svg";

type ScheduleData = {
  id: number;
  title: string;
  time: string;
  place: string;
};

const Schedules = () => {
  const [schedules, setSchedules] = useState<Array<ScheduleData> | null>();
  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("/api/schedules");
      const data = await res.json();
      setSchedules(data);
    };
    fetchData();
  }, []);

  return (
    <div className="md:w-1/2 flex flex-col p-5 md:p-10 bg-white rounded-[20px]">
      <div className="flex justify-between">
        <h1 className="text-lg md:text-xl font-bold">Today's schedule</h1>
        <div className="flex items-center gap-2">
          <h2 className="text-sm md:text-lg text-slate-400">See All</h2>
          <Image src={rightArrow} alt="rightArrow.svg" />
        </div>
      </div>
      <div className="flex flex-col gap-5 mt-5 h-full">
        {schedules ? (
          schedules.map((sched) => {
            return (
              <div
                className="flex flex-col border-l-4 pl-3 border-teal-500"
                key={sched.id}
              >
                <h1 className="font-semibold">{sched.title}</h1>
                <p className="text-slate-400 text-xs mt-1">{sched.time}</p>
                <p className="text-slate-400 text-xs mt-1">{sched.place}</p>
              </div>
            );
          })
        ) : (
          <div>loading</div>
        )}
      </div>
    </div>
  );
};

export default Schedules;
