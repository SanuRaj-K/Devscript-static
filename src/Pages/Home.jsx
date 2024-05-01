import React from "react";
import homeImg from "../Assets/Aesop_Exfoliating_Replenishing_Duo_HK_Web_Homepage_Secondary_50-50_Desktop_XL_2560x1200px.jpg";
import Logo from "../Assets/logo.png";
function Home() {
  return (
    <div>
      <div className=" xs:h-[50vh]">
        <img className=" xs:h-full" src={homeImg} alt="pic" />
        <div className=" bg-[#3e3d3a] pt-4 h-[30vh] text-white  px-6">
          <div>Lorem, ipsum.</div>
          <div className=" text-[25px]">Lorem ipsum dolor sit.</div>
          <p  >
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cum,
            voluptatum.
          </p>
          <div className=" flex justify-between border px-5 py-4 mt-5  rounded-sm border-white">
            <button>Discover the Range</button> <div className="">&#8594;</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
