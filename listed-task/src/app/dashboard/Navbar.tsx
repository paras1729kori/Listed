import Image from "next/image";
import search from "../../../public/svgs/search.svg";
import bell from "../../../public/svgs/bell.svg";
import { signOut, useSession } from "next-auth/react";

const Navbar = () => {
  const { data: session } = useSession();
  const accountImg = session?.user?.image as string;

  return (
    <nav className="flex flex-col md:flex-row justify-between">
      <div className="hidden md:block">
        <h1 className="text-2xl font-bold">Dashboard</h1>
      </div>
      <div className="flex items-center justify-evenly">
        <div className="relative block mr-5">
          <input
            className="w-full text-sm bg-white text-[#B0B0B0] placeholder:font-italitc border border-[#FFFFFF] rounded-xl py-2 pl-3 pr-10 focus:outline-none"
            placeholder="Search..."
            type="text"
          />
          <span className="absolute inset-y-0 right-0 flex items-center pr-1">
            <Image src={search} alt="search.svg" className="w-5 mr-5" />
          </span>
        </div>
        <Image src={bell} alt="bell.svg" className="w-5 mr-5" />
        <button type="button" onClick={() => signOut()}>
          <Image
            src={accountImg}
            width={10}
            height={10}
            alt="accountImg.svg"
            className="w-8 h-8 rounded-full"
          />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
