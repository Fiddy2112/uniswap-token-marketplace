import React from "react";

//import internal
import { Twitter, Logo, Facebook, Insta } from "./index";

const Footer = () => {
  const footerMenu = ["Features", "Integrations", "Pricing", "FAQ"];
  const footerMenu2 = ["Privacy", "Terms of Services"];
  const footerMenu3 = ["Public Api", "Documentation", "Guides"];
  return (
    <footer className="px-4 divide-y bg-[#1A1A1A]">
      <div className="container flex flex-col justify-between py-10 mx-auto space-y-8 lg:flex-row lg:space-y-0">
        <div className="lg:w-1/3">
          <a
            href="#"
            className="flex justify-center space-x-3 lg:justify-start"
          >
            <div className="flex items-center justify-center w-12 h-12 rounded-full bg-white">
              <Logo />
            </div>
            <span className="self-center text-2xl font-semibold text-gray-500">
              Crypto
            </span>
          </a>
        </div>
        <div className="grid grid-cols-2 text-sm gap-x-3 gap-y-8 lg:w-2/3 sm:grid-cols-4">
          <div className="space-y-3 ">
            <h3 className="uppercase text-[#ffeaa7]">Product</h3>
            <ul className="space-y-1 text-gray-50">
              {footerMenu.map((menu, i) => (
                <li key={i + 1}>
                  <a href="#">{menu}</a>
                </li>
              ))}
            </ul>
          </div>
          <div className="space-y-3 ">
            <h3 className="uppercase text-[#ffeaa7]">Company</h3>
            <ul className="space-y-1 text-gray-50">
              {footerMenu2.map((menu, i) => (
                <li key={i + 1}>
                  <a href="#">{menu}</a>
                </li>
              ))}
            </ul>
          </div>
          <div className="space-y-3 ">
            <h3 className="uppercase text-[#ffeaa7]">Developers</h3>
            <ul className="space-y-1 text-gray-50">
              {footerMenu3.map((menu, i) => (
                <li key={i + 1}>
                  <a href="#">{menu}</a>
                </li>
              ))}
            </ul>
          </div>
          <div className="space-y-3 ">
            <h3 className="uppercase text-[#ffeaa7]">Social Media</h3>
            <div className="flex flex-row space-x-3 text-gray-50">
              <a href="#" title="Facebook" className="flex items-center p-1">
                <Facebook />
              </a>

              <a href="#" title="Twitter" className="flex items-center p-1">
                <Twitter />
              </a>

              <a href="#" title="Instagram" className="flex items-center p-1">
                <Insta />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="py-6 text-sm text-center border-[#ffeaa7] border-t-[3px] text-gray-400">
        Copyright © 2024 @blockchain developers Co. All right reserved.
      </div>
    </footer>
  );
};

export default Footer;
