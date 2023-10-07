"use client";

import React from "react";
import Link from "next/link";
import Logo from "./Logo";
import { UserAuth } from "@/app/context/AuthContext";

const Navbar = () => {
  const { user } = UserAuth();

  return (
    <>
      <div>
        <div className="container my-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2">
          <div className="flex justify-between items-center h-full ml-5 mr-10">
            {/* Wrap the Logo component with a Link to the root directory */}
            <Link href="/">
                <Logo />
            </Link>
            <ul className="hidden md:flex gap-x-6 text-black">
              <li>
                <Link href="/">
                  <p>Home</p>
                </Link>
              </li>
              <li>
                <Link href="/lessons">
                  <p>Lessons</p>
                </Link>
              </li>
              <li>
                <Link href="/login">
                  {/* Diego, you can leave the Button component as it is */}
                  {/*<p><Button variant="outlined" color="success">Get Started</Button></p> */}
                  <button className="h-10 px-5 m-2 text-white transition-colors duration-150 bg-indigo-700 rounded-lg focus:shadow-outline hover:bg-indigo-800">Regular</button>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
