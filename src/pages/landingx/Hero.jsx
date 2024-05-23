import React from "react";

const Hero = () => {
  return (
    <>
      <section
        id="nav_and_hero"
        className="md:h-[90vh] h-[80vh] bg-slate-800 relative md:px-24 px-5 md:justify-center overflow-x-hidden overflow-y-hidden bg-cover"
        style={{
          backgroundImage: "url(/trade.png)",
          backgroundPosition: "center center",
        }}
      >
        <div className="lg:mx-56 md:pt-0 mx-5">
          <div class="md:text-4xl text-5xl font-mono justify-center lg:mx-5 text-center lg:pt-5 lg:mt-32">
            <h1 className="text-white md:pt-0 pt-20 px-d10">
              The World's Most Popular Way to Buy,
            </h1>
            <span className="text-white">
              Hold, Invest, Mine &amp; trade Crypto
            </span>
          </div>
          <div className="text-center text-lg md:text-base md:mt-10">
            <p className="py-7 md:py-0">
              Trusted by 53M Wallets - with Over $620 Billion in Transactions -
              Since 2013
            </p>
          </div>
          <div className="flex justify-center md:mt-10">
            <button className="uppercase bg-[#3f51b5] text-white px-5 py-3">
              Get Started
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
