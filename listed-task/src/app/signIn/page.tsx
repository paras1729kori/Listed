"use client";

import Image from "next/image";
import google from "../../../public/svgs/google.svg";
import apple from "../../../public/svgs/apple.svg";
import Link from "next/link";
import { signIn } from "next-auth/react";

export default function SignIn() {
  const loginHandler = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    signIn("google", { callbackUrl: "http://localhost:3000/" });
  };

  return (
    <div className="flex flex-col my-5 md:flex-row md:my-0">
      <div className="mx-5 px-5 py-10 rounded-[30px] bg-black flex items-center justify-center md:m-0 md:rounded-none md:w-1/3 md:p-0 md:h-screen">
        <h1 className="text-white text-4xl md:text-6xl font-bold">Boards.</h1>
      </div>
      <div className="flex flex-col items-center mt-5 mx-10 justify-center md:w-2/3 md:h-screen md:m-0">
        <div className="text-left">
          <h1 className="text-3xl md:text-4xl font-semibold">Sign In</h1>
          <p className="mt-2">Sign in to your account</p>
          <div className="flex flex-col gap-2 mt-4 md:flex-row md:gap-5">
            <button
              type="button"
              onClick={loginHandler}
              className="flex gap-3 items-center px-3 py-1 bg-white rounded-lg"
            >
              <Image src={google} alt="google.svg" />
              <h1 className="text-slate-400">Sign in with Google</h1>
            </button>
            <button className="flex gap-3 items-center px-3 py-1 bg-white rounded-lg">
              <Image src={apple} alt="apple.svg" />
              <h1 className="text-slate-400">Sign in with Apple</h1>
            </button>
          </div>

          <form className="flex flex-col gap-5 bg-white p-5 rounded-xl mt-5">
            <div className="flex flex-col">
              <label htmlFor="email">Email address</label>
              <input
                type="email"
                name="email"
                className="p-2 bg-slate-100 rounded-lg mt-1"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                name="password"
                className="p-2 bg-slate-100 rounded-lg mt-1"
              />
            </div>
            <div>
              <Link href="#" className="text-blue-500">
                Forgot Password?
              </Link>
            </div>
            <div className="bg-black rounded-xl text-center py-2">
              <button type="button" className="text-white text-xl">
                Sign In
              </button>
            </div>
          </form>

          <div className="mt-5">
            <h1 className="text-center">
              Don't have an account?{" "}
              <Link href="#" className="text-blue-500">
                Register here
              </Link>
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}
