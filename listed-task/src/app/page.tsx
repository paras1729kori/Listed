"use client";

import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";

import Sidebar from "./dashboard/Sidebar";
import Dashboard from "./dashboard/page";

export default function Home() {
  const { data: session } = useSession({
    required: true,
    onUnauthenticated() {
      redirect("/signIn");
    },
  });

  return (
    <>
      {session ? (
        <div className="flex flex-col gap-5 m-5 md:flex-row md:gap-16 md:m-12">
          <div className="md:w-1/5">
            <Sidebar />
          </div>
          <div className="md:w-4/5">
            <Dashboard />
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  );
}
