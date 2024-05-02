import React from "react";

function Footer() {
  return (
    <div className=" bg-black  pt-5 text-white  w-full ">
        
      <div className=" pt-5 px-4">
        <div className=" md:hidden">
        <span>Subscribe to Aesop communications</span>
        <hr />
        <div className=" flex justify-between border-white border-[2px] py-2 px-4 my-4">
          <input
            className="  w-full border-none bg-black"
            type="text"
            placeholder="Email Address"
            name=""
            id=""
          />
          <div>&#8594;</div>
        </div>
        <div >
          <input type="checkbox" name="chek" id="check" />
          <label id="check" for="check">
            Lorem ilabelsum dolor sit, amet consectetur adipisicing elit. Rerum
            et
            <u> suscipit magni.</u>
          </label>
          </div>
        </div>
        <div className=" text-[16px] ">
          <div className=" md:grid grid-cols-2 gap-5 lg:grid-cols-3">
          <div className=" hidden md:block mr-7">
        <span className=" text-[20px]">Subscribe to Aesop communications</span>
        <hr />
        <div className=" flex justify-between border-white border-[2px] py-2 px-4 my-4">
          <input
            className="  w-full border-none bg-black"
            type="text"
            placeholder="Email Address"
            name=""
            id=""
          />
          <div>&#8594;</div>
        </div>
        <div >
          <input type="checkbox" name="chek" id="check" />
          <label id="check" for="check">
            Lorem ilabelsum dolor sit, amet consectetur adipisicing elit. Rerum
            et
            <u> suscipit magni.</u>
          </label>
          </div>
          </div>
            <div className=" flex justify-between">
              <div className=" w-1/2">
                <ul>
                  <li className=" my-3 text-[16px] font-semibold">
                    Orders and support
                  </li>
                  <hr className="mb-5" />
                  <li className=" mt-2">Contactus</li>
                  <li className=" mt-2">FAQ</li>
                  <li className=" mt-2">Shipping</li>
                  <li className=" mt-2">Returns</li>
                  <li className=" mt-2">Order history</li>
                  <li className=" mt-2">Check gift card balance</li>
                  <li className=" mt-2">Terms and condtions</li>
                </ul>
              </div>
              <div className=" w-1/2 ml-5">
                <ul>
                  <li className=" my-3 text-[16px] font-semibold">Services</li>
                  <hr className="mb-5" />
                  <li className=" mt-2">Live assistance</li>
                  <li className=" mt-2">Corporate gifts</li>
                  <li className=" mt-2">Facial appointments</li>
                  <li className=" mt-2">Click and collect</li>
                  <li className=" mt-2">Video consultation</li>
                </ul>
              </div>
            </div>
            <div className="flex justify-between ">
              <div className=" w-1/2 mr-2">
                <ul>
                  <li className=" my-3 text-[16px] font-semibold">
                    Location Preferences
                  </li>
                  <hr className="mb-5" />
                  <li>Shipping:</li>
                  <li>Hong Kong, SAR</li>
                  <li>Language</li>
                  <li>English</li>
                  <li>Japan</li>
                </ul>
              </div>
              <div className=" w-1/2  ml-5 ">
                <ul className="  ">
                  <li className=" my-3 text-[16px] font-semibold">
                    Sustainability
                  </li>
                  <hr className="mb-5" />
                  <li>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Eius, error.
                    </p>
                  </li>
                </ul>
              </div>
            </div>
            <div className=" flex justify-between w-full">
              <div className="w-1/2">
                <ul>
                  <li className=" my-3 text-[16px] font-semibold">About</li>
                  <hr />
                  <li className=" mt-2">Our story</li>
                  <li className=" mt-2">Foundation</li>
                  <li className=" mt-2">Careers</li>
                  <li className=" mt-2">Privacy policy</li>
                  <li className=" mt-2">Accecibility</li>
                  <li className=" mt-2">Cookie policy</li>
                </ul>
              </div>
              <div className=" w-1/2 ml-5">
                <ul>
                  <li className=" my-3 text-[16px] font-semibold">
                    Social media
                  </li>
                  <hr />
                  <li className=" mt-2">Instagram</li>
                  <li className=" mt-2">Linkedin</li>
                  <li className=" mt-2">Twitter</li>
                  <li className=" mt-2">Wechat</li>
                  <li className=" mt-2">Weibo</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr />
    </div>
  );
}

export default Footer;
