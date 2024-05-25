import React from "react";
import homeImg from "../Assets/Aesop_Exfoliating_Replenishing_Duo_HK_Web_Homepage_Secondary_50-50_Desktop_XL_2560x1200px.jpg";
import Logo from "../Assets/logo.png";
import summer from "../Assets/Aesop_Homepage_Navigation_Category_Travel_Desktop_1700x2400px.jpg";
import Secondary from "../Assets/Aesop_Gifting_2024_Web_Homepage_Secondary_Gift_Guide_GL_Mid_Desktop_2560x1440px.jpg";
function Home() {
  return (
    <div>
      <div className="lg:h-[90vh]  lg:flex justify-between flex-row-reverse">
        <img
          className=" lg:w-[50%]   xs:h-full md:w-full"
          src={homeImg}
          alt="pic"
        />
        <div className="  bg-[#3e3d3a] lg:flex justify-between items-center    2xl:w-[50%] lg:h-full lg:bg-[#F6F5E8] lg:text-black pt-4 h-[40vh]  sm:h-[40vh]    text-white   px-6 ">
          <div className=" hidden lg:block w-[20%]">
            <img src={Logo} alt="" />
          </div>
          <div className="  sm:w-[50%]  lg:pr-9 ">
            <div>Lorem, ipsum.</div>
            <div className=" text-[25px]">Lorem ipsum dolor sit.</div>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cum,
              voluptatum.
            </p>
            <div className="   flex justify-between hover:bg-black hover:text-white border px-5 py-4 my-5  rounded-sm md:border-white lg:border-black">
              <button>Discover the Range</button>{" "}
              <div className="">&#8594;</div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#FFFEF2]">
        <div className="  xs:flex-col      xs:px-3  mb-4 sm:h-[90vh]  md:flex md:flex-row   justify-between items-center content-center  ">
          <div className=" w-1/2 xs:w-full md:w-[40%] ">
            <div className=" md:px-11 xs:p-0 mt-3">
              <span className=" font-semibold ">A Seasonal offer</span>
              <h4 className=" text-[18px] py-3">
                Experience Karst Eau de Parfum
              </h4>
              <p>
                In celebration of balmy summer days, receive a complimentary
                vial of fresh, herbaceous, marine Karst Eau de Parfum with the
                purchase of two eligible formulations. (Excludes Click and
                Collect.){" "}
              </p>
              <div className=" flex xs:justify-between  items-center xs:mb-3 xs:px-4 xs:py-2 border mt-8">
                <span className=" font-semibold">
                  Explore summer formulation
                </span>
                <div>&#8594;</div>
              </div>
            </div>
          </div>
          <div className=" md:w-1/2 h-full   xs:w-full ">
            <img
              className=" w-full h-full sm:h-[60%] md:h-full"
              src={summer}
              alt="summer"
            />
          </div>
        </div>
        <div className=" bg-[#FFFEF2] xs:flex-col md:mt-[100px]     xs:px-3  mb-4 sm:h-[90vh]  md:flex md:flex-row   justify-between items-center content-center  ">
          <div className=" md:w-1/2 h-full   xs:w-full ">
            <img
              className=" w-full h-full sm:h-[60%] md:h-full"
              src={Secondary}
              alt="summer"
            />
          </div>
          <div className=" w-1/2 xs:w-full md:w-[40%] ">
            <div className=" md:px-11 xs:p-0 mt-3">
              <span className=" font-semibold ">A Seasonal offer</span>
              <h4 className=" text-[18px] py-3">
                Experience Karst Eau de Parfum
              </h4>
              <p>
                In celebration of balmy summer days, receive a complimentary
                vial of fresh, herbaceous, marine Karst Eau de Parfum with the
                purchase of two eligible formulations. (Excludes Click and
                Collect.){" "}
              </p>
              <div className=" flex xs:justify-between  items-center xs:mb-3 xs:px-4 xs:py-2 border mt-8">
                <span className=" font-semibold">
                  Explore summer formulation
                </span>
                <div>&#8594;</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
