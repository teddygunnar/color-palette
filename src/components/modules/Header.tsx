import React, { FC } from "react";
import Logo from "../../assets/images/logo.svg";

const Header: FC = () => {
  return (
    <>
      <div className="header-logo">
        <img src={Logo} alt="logo-palette.png" />
      </div>
    </>
  );
};

export default Header;
