import React from "react";
import {
  BsFillEnvelopeFill,
  BsPersonCircle,
  BsSearch,
  BsJustify,
  BsFillBellFill,
} from "react-icons/bs";

const Header = ({ updateSidebarToggle }) => {
  return (
    <header className="header">
      <div className="menu-icon">
        <BsJustify className="icon" onClick={updateSidebarToggle} />
      </div>
      <div className="header-left">
        <BsSearch className="icon" />
      </div>
      <div class="header-right">
        <BsFillBellFill className="icon" />
        <BsFillEnvelopeFill className="icon" />
        <BsPersonCircle className="icon" />
      </div>
    </header>
  );
};
export default Header;
