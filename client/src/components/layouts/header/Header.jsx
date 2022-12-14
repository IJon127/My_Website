import { useState } from "react";

import "./Header.css";
import Main from "../main/Main.jsx";
import Navbar from "./Navbar.jsx";
import NavBurger from "./NavBurger.jsx";
import NavSmallScreen from "./NavSmallScreen.jsx";

function Header() {
  const [navSmallScreenOpen, setNavSmallScreenOpen] = useState(false);

  return (
    <Main className="header">
      <div className="header__container">
        <a className="header__namelogo" href="/">
          i j
        </a>
        <Navbar />
        <NavBurger setNavSmallScreenOpen={setNavSmallScreenOpen} />
      </div>
      {navSmallScreenOpen && (
        <NavSmallScreen setNavSmallScreenOpen={setNavSmallScreenOpen} />
      )}
    </Main>
  );
}

export default Header;
