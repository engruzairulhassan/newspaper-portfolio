"use client"
import React from "react";
import { footerData } from "../../components/utils/const";

const Footer = () => {
  return (
    <div className="text-textPrimary bg-secondary text-black py-10">
      <div
        id="center"
        className="text-textPrimary bg-secondary text-black py-10"
        style={{ maxWidth: "1077px", margin: "auto" }}
      >
        <div className="h-1 bg-black w-full border-6 border-black"></div>
        <div>
          <div
            className="flex flex-wrap justify-center"
            style={{ paddingLeft: "20px" }}
          >
            {footerData.map((section, index) => (
              <div key={index} className="w-full md:w-1/2 lg:w-1/4 pt-10 px-4">
                {section.title === "NEWSPAPER" ? (
                  <h3
                    className="font-bold text-gray-800 text-[35px] font-playfair leading-none flex flex-col items-start"
                    style={{
                      fontSize: "30px",
                      fontFamily: "Playfair Display, serif",
                    }}
                  >
                    <span
                      className="italic text-gray-400 font-playfair block pl-8"
                      style={{
                        fontSize: "20px",
                        paddingLeft: "20px",
                        lineHeight: "1",
                        marginBottom: "-5px",
                      }}
                    >
                      The
                    </span>
                    <span className="font-extrabold leading-none pb-6">
                      NEWSPAPER
                    </span>
                  </h3>
                ) : (
                  <h3 className="text-lg font-semibold pb-2 mb-4 text-[17px]">
                    {section.title}
                  </h3>
                )}
                <ul
                  className="italic mt-30"
                  style={{ fontFamily: "Playfair Display" }}
                >
                  {section.links.map((link, linkIndex) => (
                    <li key={linkIndex} className="mb-2">
                      <a href="#" className="hover:underline">
                        <p className="text-gray-500 text:xxsm lg:text-base">
                          {link}
                        </p>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <div
          className="h-1 bg-black w-full"
          style={{ marginBottom: "11px" }}
        ></div>
        <p className="text-xsm px-5 lg:px-0 lg:text-base">
          This is a sample website - cmsmasters © 2025 / All Rights Reserved
        </p>
      </div>
    </div>
  );
};

export default Footer;