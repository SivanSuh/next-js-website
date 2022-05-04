import React, { useState } from "react";
import Link from "next/Link";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";

const header = () => {
  const [open, setOpen] = useState(true);
  const HandleClick = () => {
    setOpen(!open);
  };

  return (
    <nav
      className={`w-full h-auto p-3 bg-black text-white flex   justify-center items-center `}
    >
      <div className="w-11/12 mx-auto flex justify-between items-center">
        <h2 className="text-2xl text-white hover:text-yellow-500 ">
          <Link href={"/"}>NEXT JS</Link>
        </h2>
        <ul
          className={`md:visible md:flex  md:flex-row p-3 flex-col justify-center text-center items-center text-white text-xl ${
            open ? "visible" : " hidden "
          }   `}
        >
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
        <div className="md:hidden visible text-3xl" onClick={HandleClick}>
          {open ? <AiOutlineClose /> : <GiHamburgerMenu />}
        </div>
      </div>
    </nav>
  );
};

export default header;
