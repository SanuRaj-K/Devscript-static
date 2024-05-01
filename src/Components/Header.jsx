import React from "react";
import searchIcon from "../Assets/icons8-search-32.png";
import menu from "../Assets/icons8-menu-32 (1).png";
import Logo from "../Assets/logo.png";

function Header() {
  return (
    <div className=" w-full ">
      <div className=" md:text-center ">
        <div className=" bg-[#C2C2AF] xs:px-5 xs:text-[12px] md:h-[40px] md:text-[16px] flex justify-center items-center">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore
          quidem officiis voluptatum fuga quas iure! Cumque.
        </div>
        <div className=" bg-black text-white xs:px-5 xs:text-[12px]  md:h-[40px] md:text-[16px] flex justify-center items-center">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatum
          excepturi temporibus dignissimos quae soluta.
        </div>
      </div>
      <nav className=" sm:hidden  flex justify-between px-4 items-center">
        <div>
          <img className=" h-[60px] w-[80px]" src={Logo} alt="logo" />
        </div>
        <div className=" flex justify-between items-center">
          <div>
            <img className="h-[20px]  w-[20px]" src={searchIcon} alt="" />
          </div>
          <div className="px-3">Cart</div>
          <div>
            <img className="h-[20px] w-[20px]" src={menu} alt="" />
          </div>
        </div>
      </nav>
      <nav className="xs:hidden sm:flex md:hidden  px-2 py-7  justify-between">
        <div>
          <ul className=" flex justify-between text-[14px] cursor-pointer">
            <li>Read</li>
            <li className="mx-3">Stores</li>
            <li className=" mr-3">Facial Appointments</li>
            <li>
              <img className="h-6 w-6" src={searchIcon} alt="search-icon" />
            </li>
          </ul>
        </div>
        <div>
          <ul className=" flex justify-between text-[14px] cursor-pointer">
            <li>Login</li>
            <li className="mx-3">Cabinet</li>
            <li>Cart</li>
          </ul>
        </div>
      </nav>
      <nav className=" xs:hidden md:flex flex-wrap justify-between font-semibold px-4 h-auto md:h-[80px] items-center">
        <div className="w-full md:w-auto">
          <ul className="flex flex-wrap justify-between items-center content-center cursor-pointer">
            <li className="mr-4">Skin Care</li>
            <li className="mr-4">Body & Hand</li>
            <li className="mr-4">Hair</li>
            <li className="mr-4">Fragrance</li>
            <li className="mr-4">Home</li>
            <li className="mr-4">Kits & Travel</li>
            <li className="mr-4">Gifts</li>
            <li className="mr-4">Read</li>
            <li className="mr-4">Stores</li>
            <li className="mr-4">Facial Appointments</li>
            <li className="mr-4">
              <img
                className="h-[20px] w-[20px]"
                src={searchIcon}
                alt="search-icon"
              />
            </li>
          </ul>
        </div>
        <div className="w-full md:w-auto mt-4 md:mt-0">
          <ul className="flex justify-between cursor-pointer">
            <li className="mr-4">Login</li>
            <li className="mr-4">Cabinet</li>
            <li className="mr-4">Cart</li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Header;
