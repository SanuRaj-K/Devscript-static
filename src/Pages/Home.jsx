import React from "react";
import homeImg from "../Assets/Aesop_Exfoliating_Replenishing_Duo_HK_Web_Homepage_Secondary_50-50_Desktop_XL_2560x1200px.jpg";
import Logo from "../Assets/logo.png";
function Home() {
  return (
    <div>
      <div className=" xs:h-[50vh] lg:h-[90vh] lg:flex justify-between flex-row-reverse">
        <img
          className=" lg:w-[50%]   xs:h-full md:w-full"
          src={homeImg}
          alt="pic"
        />
        <div className=" bg-[#3e3d3a] lg:flex justify-between items-center  2xl:w-[50%] lg:h-full lg:bg-[#F6F5E8] lg:text-black pt-4 h-[30vh]  text-white   px-6 ">
          <div className=" hidden lg:block w-[20%]">
            <img src={Logo} alt="" />
          </div>
          <div className="  sm:w-[50%] ">
            <div>Lorem, ipsum.</div>
            <div className=" text-[25px]">Lorem ipsum dolor sit.</div>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cum,
              voluptatum.
            </p>
            <div className=" flex justify-between border px-5 py-4 mt-5  rounded-sm md:border-white lg:border-black">
              <button>Discover the Range</button>{" "}
              <div className="">&#8594;</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
