import React from "react";
import Footer from "./Footerx";
import { Button, message, Steps, theme } from "antd";
import { useState } from "react";
import video from "../../images/video.png";
import pad from "../../images/devices.webp";
import { ProgressBar, Step } from 'react-step-progress-bar';
import { MdCheckCircle, MdRadioButtonUnchecked, MdRadioButtonChecked } from 'react-icons/md';
import Header from "./Navx";
import Hero from "./Hero";
import { GiCheckedShield, GiPlayButton } from "react-icons/gi";
import { AiFillFastForward } from "react-icons/ai";


const steps = [
  {
    title: "First",
    content: "First-content",
  },
  {
    title: "Second",
    content: "Second-content",
  },
  {
    title: "Last",
    content: "Last-content",
  },
];  


const Homex = () => {
  const { token } = theme.useToken();
  const [current, setCurrent] = useState(0);
  const [currentStep, setCurrentStep] = React.useState(0); // Tracks the current step

   const steps = [
     { label: "Step 1", content: "Step 1 content" },
     { label: "Step 2", content: "Step 2 content" },
     { label: "Step 3", content: "Step 3 content" },
   ];

   const handlePrevStep = () => {
     setCurrentStep((prevStep) => prevStep - 1);
   };

   const handleNextStep = () => {
     setCurrentStep((prevStep) => prevStep + 1);
   };

  const next = () => {
    setCurrent(current + 1);
  };
  const prev = () => {
    setCurrent(current - 1);
  };
  const items = steps.map((item) => ({
    key: item.title,
    title: item.title,
  }));
  const contentStyle = {
    lineHeight: "260px",
    textAlign: "center",
    color: token.colorTextTertiary,
    backgroundColor: token.colorFillAlter,
    borderRadius: token.borderRadiusLG,
    border: `1px dashed ${token.colorBorder}`,
    marginTop: 16,
  };
  return (
    <div>
      {/* <MyLoader/> */}
      <Header />
      <Hero />
      <section className="bg-white md:pt-20 md:py-0 py-10">
        <div className="text-black">
          <div className="md:text-3xl text-4xl text-center font-mono tracking-wider">
            Easiest & Most Powerful Assets
          </div>
          <div className="md:flex justify-center max-w-full md:mx-28 flex-row">
            <div className="md:max-w-[50%] wc-[w-30rem]">
              <img className="" src={video} alt="phone" />
              {/* <video className="w-[30rem]" autoPlay muted>
                <source src={video} type="video/mp4" />
              </video> */}
            </div>
            <div className="md:max-w-[50%] md:px-0 px-5 bgg-blue-400 pt-14">
              <p className="text-xl text-center text-gray-500 font-arvo">
                Explore an ever-expanding variety of cryptocurrencies, and buy
                and invest the underlying asset on Blockchain Mining Tech
                Cryptocurrency Investment Platform. Build your crypto-based
                portfolio and enjoy benefits not offered by most exchanges, such
                as near-immediate execution of market orders.
              </p>
              <div className="flex justify-center pt-20">
                <button className="bg-[#3f51b5] px-4 py-2 text-md font-medium rounded-md text-white uppercase">
                  create an account
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-slate-800">
        <div className="text-center text-4xl font-fira text-white ">
          <p>Our Numbers</p>
        </div>
        <div className="md:flex md:ml-0 ml-24 md:justify-center gap-10 pt-20">
          <div className="uppercase text-gray-800 bg-white max-w-[80%] md:max-w-[18%] py-2 rounded-md text-center md:px-5">
            <h1 className="text-4xl">2.92+</h1>
            <p className="text-xl font-arvo font-normal">
              TRILLION USD IN TRADING VOLUME
            </p>
          </div>
          <div className="uppercase text-gray-800 bg-white max-w-[80%] my-5 md:my-0 md:max-w-[18%] py-2 rounded-md text-center md:px-5">
            <h1 className="text-4xl">6.3+</h1>
            <p className="text-xl font-arvo font-normal">
              BILLION ORDERS EXECUTED
            </p>
          </div>
          <div className="uppercase text-gray-800 bg-white  max-w-[80%] my-5 md:my-0 md:max-w-[18%] py-2 rounded-md text-center md:px-5">
            <h1 className="text-4xl">363.5+</h1>
            <p className="text-xl font-arvo font-normal">
              MILLION TRADERS SERVED
            </p>
          </div>
          <div className="uppercase text-gray-800 bg-white  max-w-[80%] mt-5 md:mt-0 md:max-w-[18%] md:py-2 py-5 rounded-md text-center md:px-5">
            <h1 className="text-4xl">600+</h1>
            <p className="text-xl font-arvo font-normal">INSTRUMENTS OFFERED</p>
          </div>
        </div>
      </section>

      <section className="bg-gray-50 md:py-20 py-10 px-5 md:px-0">
        <div className="text-black text-center">
          <h1 className="text-4xl font-fira">Why BCMT?</h1>
          <p className="font-arvo mt-5">
            Discover why millions of users from over 140 countries choose to
            invest with Blockchain Tech Mining
          </p>
        </div>
        <div className="md:flex md:flex-row flex flex-col md:justify-center md:px-0 px-5 gap-10 mt-10">
          <div className="md:w-[21rem] bg-white shadow-md shadow-gray-400 rounded-md pt-7">
            <div className="flex justify-center">
              <GiCheckedShield className=" text-yellow-400" size={40} />
            </div>
            <p className="text-lg text-gray-900 mx-5 my-3 text-center font-fira font-semibold tracking-tighter">
              Privacy & Security
            </p>
            <p className="mx-5 mb-5 font-arvo text-lg text-gray-500">
              Our commitment to safety assures integrity, so you can concentrate
              on what’s important - investing in the markets.
            </p>
          </div>
          <div className="md:w-[21rem] bg-white shadow-md shadow-gray-400 rounded-md  pt-7">
            <div className="flex justify-center">
              <GiCheckedShield className=" text-yellow-400" size={40} />
            </div>
            <p className="text-lg text-gray-900 mx-5 my-3 text-center font-fira font-semibold tracking-tighter">
              Ease of Access
            </p>
            <p className="mx-5 mb-5 font-arvo text-lg text-gray-500">
              Our platform is customized to make it fit better to your needs and
              exploration.{" "}
            </p>
          </div>
          <div className="md:w-[21rem] bg-white shadow-md shadow-gray-400 rounded-md  pt-7">
            <div className="flex justify-center">
              <AiFillFastForward className=" text-yellow-400" size={40} />
            </div>
            <p className="text-lg text-gray-900 mx-5 my-3 text-center font-fira font-semibold tracking-tighter">
              24/7 Customer Support
            </p>
            <p className="mx-5 mb-5 font-arvo text-lg text-gray-500">
              Our team of professionals and Investment experts are always here
              to support you.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-gray-50 md:py-20 py-10">
        <div className="w-[100%] md:flex justify-center md:px-20 px-5">
          <div className="md:max-w-[50%] text-center text-gray-700 pt-10">
            <h1 className="font-fira text-4xl">The Market is in our DNA</h1>
            <p className="text-gray-800 px-2 pt-2t font-medium leading-snug tracking-tight font-fira text-lg">
              Our award-winning, intuitive platforms are equipped with a suite
              of powerful tools to support your investments and ensure
              maximization of the your funds and potential profits. Our
              Platforms supports all devices making it easily available for
              everyone everywhere to have a share in the Cryptocurrency
              industry.
            </p>
          </div>
          <div className="md:max-w-[50%] md:pt-0 pt-5">
            <img className="w-[145rpem]" src={pad} alt="device" />
          </div>
        </div>
      </section>

      <section className="bg-slate-800 md:py-20 py-10">
        <div className="text-center font-fira md:mx-60 text-white">
          <h1 className="text-4xl">Our Plans</h1>
          <p className="text-sm tracking-tighter pt-5 md:pb-0 pb-5 md:mx-0 mx-5">
            Our aim is to reduce our negative social, economic and environmental
            footprints while enhancing the overall value we create as a leading
            brand
          </p>
        </div>
        <div className="md:flex justify-center flex-wrap font-fira gap-5 md:px-0 px-10">
          <div className="bg-white md:w-1/5 text-center rounded-md text-black mt-4">
            <div className="text-lg py-2 font-semibold rounded-md leading-8 bg-gray-200 tracking-tighter">
              Starter
            </div>
            <div className="px-3 ">
              <h1 className="text-xl border-b border-gray-200 py-3">$1000</h1>
              <p className="border-b border-gray-200 pt-4">30% Investment</p>
              <p className="border-b border-gray-200 pt-4">Personal Manager</p>
              <p className="border-b border-gray-200 pt-4">Email Support</p>
              <p className="border-b border-gray-200 pt-4">24/7 Support</p>
            </div>
            <div>
              <button className="mb-3 mt-6 text-sm my-3 w-fuyll border border-blue-400 text-blue-500 px-[4.5rem] py-1 rounded-md uppercase hover:bg-gray-100 hover:text-blue-700 hover:border-blue-700 hover:transition-all hover:ease-in-out hover:duration-300 ease-out duration-300">
                Start Now
              </button>
            </div>
          </div>

          <div className="bg-white md:w-1/5 rounded-md text-center text-black md:px-0 md:mt-0 mt-5">
            <div className="bg-gray-200 rounded-md tracking-tighter">
              <div className="text-lg py-2 font-semibold leading-6 ">Basic</div>
              <p>Most popular</p>
            </div>

            <div className="px-3 ">
              <h1 className="text-xl border-b border-gray-200 py-3">$10,000</h1>
              <p className="border-b border-gray-200 pt-4">45% Investment</p>
              <p className="border-b border-gray-200 pt-4">Personal Manager</p>
              <p className="border-b border-gray-200 pt-4">
                Priority email support
              </p>
              <p className="border-b border-gray-200 pt-4">24/7 Support</p>
            </div>
            <div>
              <button className="mb-3 mt-6 text-sm my-3 bg-[#3f51b5] text-white border px-[4.5rem] py-1 rounded-md uppercase hover:bg-gray-100 hover:border-blue-700 hover:text-blue-700  hover:transition-all hover:ease-in-out hover:duration-300 ease-out duration-300">
                Get started
              </button>
            </div>
          </div>

          <div className="bg-white md:w-1/5 rounded-md text-center text-black mt-4">
            <div className="text-lg py-2 font-semibold rounded-md leading-8 bg-gray-200 tracking-tighter">
              Executive
            </div>
            <div className="px-3 ">
              <h1 className="text-xl border-b border-gray-200 py-3">$50,000</h1>
              <p className="border-b border-gray-200 pt-4">75% Investment</p>
              <p className="border-b border-gray-200 pt-4">Executive Manager</p>
              <p className="border-b border-gray-200 pt-4">
                Phone & email support
              </p>
              <p className="border-b border-gray-200 pt-4">24/7 Support</p>
            </div>
            <div>
              <button className="mb-3 mt-6 text-sm my-3 w-fuyll border border-blue-400 text-blue-500 px-[4.5rem] py-1 rounded-md uppercase hover:bg-gray-100 hover:text-blue-700 hover:border-blue-700 hover:transition-all hover:ease-in-out hover:duration-300 ease-out duration-300">
                Contact us
              </button>
            </div>
          </div>

          <div className="bg-white md:w-1/5 rounded-md md:mt-0 mt-5 text-center text-black">
            <div className="text-lg py-2 font-semibold rounded-md leading-8 bg-gray-200 tracking-tighter">
              Annual Investment
            </div>
            <div className="px-3 ">
              <h1 className="text-xl border-b border-gray-200 py-3">$50,000</h1>
              <p className="border-b border-gray-200 pt-4">
                Progressive Investment
              </p>
              <p className="border-b border-gray-200 pt-4">
                Phone & email support
              </p>
              <p className="border-b border-gray-200 pt-4">24/7 support</p>
              <p className="border-b border-gray-200 pt-4">
                Private Newsletter
              </p>
            </div>
            <div>
              <button className="mb-3 mt-6 text-sm my-3 w-fuyll border border-blue-400 text-blue-500 px-[4.5rem] py-1 rounded-md uppercase hover:bg-gray-100 hover:text-blue-700 hover:border-blue-700 hover:transition-all hover:ease-in-out hover:duration-300 ease-out duration-300">
                Contact us
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="text-center font-fira md:mx-60 mx-5 text-black">
          <h1 className="text-4xl">Access to all Crypto Tech</h1>
          <p className="text-sm tracking-tighter pt-1">
            Have complete access and control over your invested assets and can
            swap assets feasibly with relative ease
          </p>
        </div>
        <div className="grid grid-cols-1 pt-10 md:mx-32 mx-5">
          <div id="id-crypto-widget">
            <iframe
              id="script-made-id"
              allowtransparency="true"
              style={{ width: "100%", height: "400px" }}
              src="https://www.tradingview-widget.com/embed-widget/crypto-mkt-screener/?locale=en#%7B%22frameElementId%22%3A%22script-made-id%22%2C%22width%22%3A%22100%25%22%2C%22height%22%3A490%2C%22defaultColumn%22%3A%22overview%22%2C%22screener_type%22%3A%22crypto_mkt%22%2C%22displayCurrency%22%3A%22USD%22%2C%22colorTheme%22%3A%22light%22%2C%22market%22%3A%22crypto%22%2C%22enableScrolling%22%3Atrue%2C%22utm_source%22%3A%22www.blockchainminingtech.net%22%2C%22utm_medium%22%3A%22widget%22%2C%22utm_campaign%22%3A%22cryptomktscreener%22%7D"
              className="w-full"
            ></iframe>
          </div>
        </div>
      </section>

      {/* <section className="bg-gray-50">
        {/* <Steps current={current} items={items} />
        <div style={contentStyle}>{steps[current].content}</div>
        <div
          style={{
            marginTop: 24,
          }}
        >
          {current < steps.length - 1 && (
            <Button type="primary" onClick={() => next()}>
              Next
            </Button>
          )}
          {current === steps.length - 1 && (
            <Button
              type="primary"
              onClick={() => message.success("Processing complete!")}
            >
              Done
            </Button>
          )}
          {current > 0 && (
            <Button
              style={{
                margin: "0 8px",
              }}
              onClick={() => prev()}
            >
              Previous
            </Button>
          )} */}
      {/* </div> */}
      {/* <div>
          <ProgressBar
            percent={((currentStep + 1) / steps.length) * 100}
            filledBackground="linear-gradient(to right, #fefb72, #f0bb31)"
          >
            {steps.map((step, index) => (
              <Step
                key={index}
                transition="scale"
                state={index === currentStep ? 'current' : index < currentStep ? 'completed' : 'incomplete'}
              >
                {({ accomplished }) => (
                  <div className={`step ${accomplished ? 'completed' : ''}`}>
                    {index === currentStep ? (
                      <MdRadioButtonChecked size={24} />
                    ) : (
                      <MdRadioButtonUnchecked size={24} />
                    )}
                    <div className="label">{step.label}</div>
                  </div>
                )}
              </Step>
            ))}
          </ProgressBar>

          <div className="mt-4">{steps[currentStep].content}</div>

          <div className="mt-4">
            {currentStep > 0 && (
              <button onClick={handlePrevStep} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2">
                Previous
              </button>
            )}
            {currentStep < steps.length - 1 ? (
              <button onClick={handleNextStep} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                Next
              </button>
            ) : (
              <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
                Get Started
              </button>
            )}
          </div>
        </div>
      </section> */}

      {/* Footer */}
      <div className="bg-slate-800">
        <Footer />
      </div>
    </div>
  );
};

export default Homex;
