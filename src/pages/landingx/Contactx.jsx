import React from "react";
import { CgProfile } from "react-icons/cg";
import { IoPersonCircle } from "react-icons/io5";
import { GrMail } from "react-icons/gr";
import { MdOutlineTextFields } from "react-icons/md";
import Header from "./Navx";
import { useState } from "react";
import Footer from "./Footerx";

const Contactx = ({ label, ...rest }) => {
  const [isFocused, setIsFocused] = useState(false);
  const [inputValue, setInputValue] = useState("");

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };
  return (
    <>
      <Header />
      <section className="md:h-[80vh] py-20 bg-gray-50">
        <div className="flex justify-center bg-blue-6d00 h-fit">
          <CgProfile
            className="bg-blue-600 rounded-full text-white"
            size={50}
          />
        </div>
        <div className="text-center text-black">
          <h1 className="md:text-2xl text-lg font-fira">Contact Us</h1>
          <p className="font-arvo md:text-base text-sm tracking-wider">
            We'll get back to you as soon as possible
          </p>
        </div>
        <form className="mt-5 justify-center md:px-0 px-5" action="">
          <div className="md:flex md:justify-center md:gap-3">
            <div className="flex justify-center md:block">
               <div className="flex relative md:mb-0 mb-5 md:w-auto w-[75%] bg-white border border-gray-300 px-3  rounded-md">
              <IoPersonCircle className="text-blue-800 mt-2.5" size={20} />
              <input
                {...rest}
                className="outline-none text-black md:px-2 pr-0 pl-2 py-2 w-48"
                onFocus={handleFocus}
                onBlur={handleBlur}
                onChange={handleChange}
              />
              <label
                className={`absolute bg-white left-10 transition-all duration-300 ${
                  isFocused || inputValue
                    ? "text-sm -top-2 text-gray-500"
                    : "text-sm top-2.5 text-gray-400"
                }`}
              >
                First Name*
              </label>
            </div>
            </div>
           
           <div className="flex justify-center">
             <div className="flex relative md:w-auto w-[75%] bg-white border border-gray-300 px-3 rounded-md">
              <IoPersonCircle className="text-blue-800 mt-2.5" size={20} />
              <input
                {...rest}
                className="outline-none text-black md:px-2 pr-0 pl-2 py-2 w-48"
                onFocus={handleFocus}
                onBlur={handleBlur}
                onChange={handleChange}
              />
              <label
                className={`absolute bg-white left-10 transition-all duration-300 ${
                  isFocused || inputValue
                    ? "text-sm -top-2 text-gray-500"
                    : "text-sm top-2.5 text-gray-400"
                }`}
              >
                Last Name*
              </label>
            </div>
           </div>
           
          </div>

          <div className="flex justify-center my-5">
            <div className="flex md:w-[30.6rem] w-[75%] bg-white relative border border-gray-300 px-3  rounded-md">
              <GrMail className="text-blue-800 mt-2.5" size={20} />
              <input
                {...rest}
                className="outline-none px-4 w-full md:px-2 pr-0 pl-2 py-2 text-black"
                onFocus={handleFocus}
                onBlur={handleBlur}
                onChange={handleChange}
              />
              <label
                className={`absolute bg-white left-10 transition-all duration-300 ${
                  isFocused || inputValue
                    ? "text-sm -top-2 text-gray-500"
                    : "text-sm top-2.5 text-gray-400"
                }`}
              >
                Email Address*
              </label>
            </div>
          </div>

          <div className="flex justify-center">
            <div className="flex bg-white md:w-[30.6rem] w-[75%] relative border border-gray-300 px-3  rounded-md">
              <MdOutlineTextFields className="text-blue-800 mt-2.5" size={20} />
              <input
                {...rest}
                className="outline-none px-4 w-full md:px-2 pr-0 pl-2 py-2 text-black"
                onFocus={handleFocus}
                onBlur={handleBlur}
                onChange={handleChange}
              />
              <label
                className={`absolute bg-white left-10 transition-all duration-300 ${
                  isFocused || inputValue
                    ? "text-sm -top-2 text-gray-500"
                    : "text-sm top-2.5 text-gray-400"
                }`}
              >
                Message*
              </label>
            </div>
          </div>
          <div className="flex justify-center md:ml-[23rem] mt-4">
            <button className="text-center bg-[#3f51b5] text-white uppercase py-2 px-8 rounded-md">
              Submit
            </button>
          </div>
        </form>
      </section>

      <div className="bg-slate-800">
        <Footer />
      </div>
    </>
  );
};

export default Contactx;
