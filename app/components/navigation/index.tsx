import React from "react";
import Link from "next/link";
import Logo from "./Logo";

const Navbar = () => {
  return (
    <>
      <div>
        <div className="container my-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2">
          <div className="flex justify-between items-center h-full ml-5 mr-10">
            <Logo />
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
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;