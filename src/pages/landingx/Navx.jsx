
import React, { useState } from "react";
import { Button, Drawer, Radio, Space } from "antd";
import { CgMenuGridO, CgMenu } from "react-icons/cg";
import { AiFillHome } from "react-icons/ai";
import logo from "../../images/blockchain.png";
import { Link } from "react-router-dom";
import Icon from "../../components/Nav/Icon";

const Header = () => {
  const [showMenu, setShowMenu] = useState("hidden");

  const toggleMenu = () => {
    if (showMenu === "hidden") {
      setShowMenu("md:hidden");
    } else {
      setShowMenu("hidden");
    }
  };
  const [open, setOpen] = useState(false);
  const [placement, setPlacement] = useState("left");
  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };
  const onChange = (e) => {
    setPlacement(e.target.value);
  };
  return (
    <div className="sticky top-0 bg-gray-800 text-white z-10 flex justify-between pr-5 md:pr-0 md:px-7 shadow-md shadow-slate-800 md:pb-5">
      <div className="md:mt-3 md:pl-20 pl-5 md:py-0 py-3">
        <Icon />
      </div>

      <div className=" hidden md:flex text-white justify-between w-[30rem] md:pt-8">
        <Link to="/">Home</Link>
        <Link to="/public/contact">Contact</Link>
        <Link to="/public/pricing">Pricing</Link>
        <Link to="/">Stock Market</Link>
      </div>

      <div className=" hidden md:flex gap-10 md:pt-6 text-white uppercase">
        <div className="bg-[#3f51b5] px-5 rounded-md h-fit py-2">
          <Link to="/public/register">Sign-in</Link>
        </div>
        <div className="bg-[#3f51b5] px-5 rounded-md h-fit py-2">
          <Link to="/public/login">Login</Link>
        </div>
      </div>

      <div className="md:hidden flex">
        <div className="mt-5" onClick={showDrawer}>
          <CgMenu size={40} />
        </div>
        <div className="">
          {/* <Space>
            <Radio.Group value={placement} onChange={onChange}>
              <Radio value="top">top</Radio>
              <Radio value="right">right</Radio>
              <Radio value="bottom">bottom</Radio>
              <Radio value="left">left</Radio>
            </Radio.Group>
            <Button type="primary" onClick={showDrawer}>
              Open
            </Button>
          </Space> */}
          <Drawer
            placement={placement}
            closable={false}
            onClose={onClose}
            open={open}
            key={placement}
          >
            <div className="pt-5 text-black">
              <div className="flex border-b border-gray-300 gap-10 w-full py-5">
                <AiFillHome className="text-gray-500 ml-5 mt-2" size={20} />
                <Link className="text-2xl" to="/">
                  Home
                </Link>
              </div>
              <div className="flex border-b border-gray-300 gap-10 w-full py-8">
                <AiFillHome className="text-gray-500 ml-5 mt-2" size={20} />
                <Link className="text-2xl" to="/public/contact">
                  Contact Us
                </Link>
              </div>
              <div className="flex border-b border-gray-300 gap-10 w-full py-8">
                <AiFillHome className="text-gray-500 ml-5 mt-2" size={20} />
                <Link className="text-2xl" to="/public/pricing">
                  Plans
                </Link>
              </div>
              <div className="flex border-b border-gray-300 gap-10 w-full py-8">
                <AiFillHome className="text-gray-500 ml-5 mt-2" size={20} />
                <Link className="text-2xl" to="/">
                  Stock Market
                </Link>
              </div>
              <div className="flex border-b border-gray-300 gap-10 w-full py-8">
                <AiFillHome className="text-gray-500 ml-5 mt-2" size={20} />
                <Link className="text-2xl" to="/">
                  NFT Marketplace
                </Link>
              </div>
              <div className="flex border-b border-gray-300 gap-10 w-full py-8">
                <AiFillHome className="text-gray-500 ml-5 mt-2" size={20} />
                <Link className="text-2xl" to="/public/policy">
                  AML & KYC
                </Link>
              </div>
              <div className="flex border-b border-gray-300 gap-10 w-full py-8">
                <AiFillHome className="text-gray-500 ml-5 mt-2" size={20} />
                <Link className="text-2xl" to="/">
                  Privacy Policy
                </Link>
              </div>
              <div className="flex border-b border-gray-300 gap-10 w-full py-5">
                <AiFillHome className="text-gray-500 ml-5 mt-2" size={20} />
                <Link className="text-2xl" to="/">
                  Payment Policy
                </Link>
              </div>
            </div>
            <div className="flex flex-col justify-center gap-5 pt-5 md:mt-10">
              <button className="uppercase bg-[#3f51b5] text-white px-5 py-3">
                <Link to="/public/register">SIGN IN </Link>
              </button>

              <button className="uppercase bg-[#3f51b5] text-white px-5 py-3">
                {" "}
                <Link to="/public/login">LOGIN </Link>
              </button>
            </div>
          </Drawer>
        </div>
      </div>
    </div>
  );
};

export default Header;
