import React from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <div className=" text-[#262626] bg-[#F2F2F2] fixed z-[999] w-full px-20 py-3 font-['Roboto'] flex justify-between items-center">
      <NavLink to={"home/"} className="logo flex gap-2 items-center">
        <div className="bg-[url('./assets/images/logo2.png')] bg-no-repeat bg-cover bg-center h-10 w-10" />
        <h1 className="text-[#F20707] text-2xl font-bold">Vital</h1>
      </NavLink>
      <div className="links flex gap-10">
        {["Home", "Features", "How It Works"].map((item, index) => (
          <NavLink
            key={index}
            to={`/${
               item.toLowerCase().replace(/\s+/g, "-")
            }`}
            className={`text-lg font-medium capitalize`}
            activeClassName="text-[#F20707]"
          >
            {item}
          </NavLink>
        ))}
      </div>
      <div className="Buttons flex gap-3">
        {["LogIn", "SignIn"].map((item, index) => (
          <NavLink
            key={index}
            to={`/${item.toLowerCase().replace(/\s+/g, "")}`}
            className={`text-lg font-medium capitalize ${
              index === 0
                ? "rounded-lg border-[2px] border-[#F20707] px-4 py-2"
                : "rounded-lg bg-[#F20707] px-4 py-2"
            }`}
            activeClassName="bg-[#F20707] text-white"
          >
            {item}
          </NavLink>
        ))}
      </div>
    </div>
  );
}

export default Navbar;
