import Image from "next/image";
import dashboard from "../../../public/svgs/dashboard.svg";
import transactions from "../../../public/svgs/transactions.svg";
import schedule from "../../../public/svgs/schedule.svg";
import user from "../../../public/svgs/user.svg";
import settings from "../../../public/svgs/settings.svg";

const Sidebar = () => {
  return (
    <div className="flex flex-col justify-between text-center text-white bg-black rounded-[30px] p-10 md:p-16 md:flex-col md:h-full md:text-left">
      <div>
        <div>
          <h1 className="font-bold text-4xl">Boards.</h1>
        </div>
        <div className="flex justify-evenly mt-4 md:flex-col md:justify-center gap-2 md:gap-10 md:mt-16">
          <div className="flex items-center gap-5">
            <Image src={dashboard} alt="dashboard.svg" />
            <div className="hidden md:block">
              <h1 className="md:text-md font-semibold">Dashboard</h1>
            </div>
          </div>

          <div className="flex items-center gap-5">
            <Image src={transactions} alt="transactions.svg" />
            <div className="hidden md:block">
              <h1 className="md:text-md">Transactions</h1>
            </div>
          </div>

          <div className="flex items-center gap-5">
            <Image src={schedule} alt="schedule.svg" />
            <div className="hidden md:block">
              <h1 className="md:text-md">Schedules</h1>
            </div>
          </div>

          <div className="flex items-center gap-5">
            <Image src={user} alt="user.svg" />
            <div className="hidden md:block">
              <h1 className="md:text-md">Users</h1>
            </div>
          </div>

          <div className="flex items-center gap-5">
            <Image src={settings} alt="settings.svg" />
            <div className="hidden md:block">
              <h1 className="md:text-md">Settings</h1>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center gap-4 mt-4 text-sm md:flex-col">
        <h1>Help</h1>
        <h1 className="md:mt-2">Contact Us</h1>
      </div>
    </div>
  );
};

export default Sidebar;
