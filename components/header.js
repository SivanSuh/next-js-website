import React, { useState } from "react";
import Link from "next/Link";
import { GiHamburgerMenu } from "react-icons/gi";

const header = () => {
  const [open, setOpen] = useState(false);
  return (
    <nav className="w-full h-16 bg-cyan-600 text-white flex  justify-center items-center">
      <div className="w-11/12 mx-auto flex justify-between">
        <h2 className="text-2xl text-white hover:text-yellow-500">
          <Link href={"/"}>NEXT JS</Link>
        </h2>
        <ul className="md:flex  md:flex-row flex-col items-center md:visible hidden text-white text-xl ">
          <li className=" hover:text-yellow-500 hover:underline">
            <Link href="/">HOME</Link>
          </li>
          <li className="mx-5 hover:text-yellow-500 hover:underline">
            <Link href="/about">ABOUT</Link>
          </li>
          <li className=" hover:text-yellow-500 hover:underline">
            <Link href="/contact">CONTACT</Link>
          </li>
        </ul>
        <GiHamburgerMenu className="md:hidden visible text-2xl" />
      </div>
    </nav>
  );
};

export default header;
