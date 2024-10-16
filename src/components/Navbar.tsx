import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <>
     <div className="container pt-8">
     <div className="flex justify-between items-center">
      <div className="text-xl font-medium">Zubaida Khahoon</div>
      
        <ul className="gap-10 lg:gap-16 hidden md:flex">
          <li className="menuLink">
            <Link href="#hero">Home</Link>
          </li>
          <li className="menuLink">
            <Link href="#about">About</Link>
          </li>
          <li className="menuLink">
            <Link href="#skills">Skills</Link>
          </li>
        </ul>
      
     </div>

     </div>
    </>
  );
};

export default Navbar;