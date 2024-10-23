import React from "react";
import Link from "next/link";
import { FaSearch } from "react-icons/fa";
import headerStyle from "./header.module.css";

const Header = () => {
  return (
    <>
      <header className={headerStyle.header}>
        <h1 className={headerStyle.h1}>Coffee Craze</h1>
        <nav className={headerStyle.nav}>
          <ul className={headerStyle.ul}>
            <li className={headerStyle.li}>
              <Link href="/hero" className={headerStyle.Link}>
                Home
              </Link>
            </li>
            <li className={headerStyle.li}>
              <Link href="#" className={headerStyle.Link}>
                Menu
              </Link>
            </li>
            <li className={headerStyle.li}>
              <Link href="#" className={headerStyle.Link}>
                Service
              </Link>
            </li>

            <li className={headerStyle.li}>
              <Link href="#" className={headerStyle.Link}>
                Contact
              </Link>
            </li>
          </ul>
          <input
            type="text"
            placeholder="Search..."
            className={headerStyle.input}
          />{" "}
          <FaSearch className={headerStyle.fasearch} />
          <button className={headerStyle.button}>Order Now</button>
        </nav>
      </header>
    </>
  );
};

export default Header;