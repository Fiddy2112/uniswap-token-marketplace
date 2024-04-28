import React from "react";

// internal import
import { SwapComponent } from "./index";

const HeroSection = () => {
  return (
    <section className="bg-[#1A1A1A] text-gray-100 ">
      <div className="container flex flex-col lg:flex-row lg:justify-between justify-center lg:py-24 sm:py-12 p-6 mx-auto ">
        <div className="flex flex-col justify-center text-center p-6 rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
          <h1 className="text-5xl font-bold leading-0 sm:text-6xl">
            Token
            <span className="text-[#ffeaa7]">Marketplace</span>
          </h1>
          <p className="mt-6 mb-8 text-lg sm:mb-12">
            Swap,earn, and build on the leading decentralized crypto trading
            protocol.
            <br className="hidden md:inline lg:hidden" />
            Trade, Earn, and Thrive: Fuel Your Success on Our Decentralized
            Crypto Marketplace
          </p>
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-center sm:space-y-0 sm:space-x-4 space-y-4 lg:justify-start">
            <a
              href="#"
              className="px-8 py-3 text-lg font-semibold rounded text-gray-900 bg-[#ffeaa7]"
            >
              Get Start
            </a>
            <a
              href="#"
              className="px-8 py-3 text-lg font-semibold rounded border border-gray-100"
            >
              Swap ERC20
            </a>
          </div>
        </div>
        <div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 lg:h-96 xl:h-122 2xl:h-128 sm:h-80">
          <SwapComponent />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
