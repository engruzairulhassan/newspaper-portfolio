import React from "react";
import { footerData } from "../../components/utils/const";

const Footer = () => {
  return (
    <div className="text-textPrimary bg-secondary text-black py-10">
      <div
        id="center"
        className="text-textPrimary bg-secondary text-black py-10"
        style={{ maxWidth: "1200px", margin: "auto" }}
      >
        <div
          className="h-1 bg-black w-full"
          style={{ border: "3px solid black" }}
        ></div>
        <div>
          <div
            className="container mx-auto flex flex-wrap justify-between px-4"
            style={{ marginTop: "50px" }}
          >
            {footerData.map((section, index) => (
              <div
                key={index}
                className="w-full sm:w-1/2 md:w-1/4 mb-6 md:mb-0"
              >
                {section.title === "NEWSPAPER" ? (
                  <h3
                    className="font-bold text-black text-[35px] font-playfair leading-none flex flex-col items-start"
                    style={{
                      fontSize: "35px",
                      fontFamily: "Playfair Display, serif",
                    }}
                  >
                    <span
                      className="italic text-gray-400 font-playfair block pl-8"
                      style={{
                        fontSize: "20px",
                        paddingLeft: "9px",
                        paddingLeft: '20px',
                        lineHeight: "1",
                        marginBottom: "-5px",
                      }}
                    >
                      The
                    </span>
                    <span
                      className="font-extrabold"
                      style={{ lineHeight: "1" }}
                    >
                      NEWSPAPER
                    </span>
                  </h3>
                ) : (
                  <h3
                    className="text-lg font-semibold  pb-2 mb-4"
                    style={{ fontSize: "20px" }}
                  >
                    {section.title}
                  </h3>
                )}
                <ul
                  className="italic"
                  style={{ fontFamily: "Playfair Display", marginTop: "40px" }}
                >
                  {section.links.map((link, linkIndex) => (
                    <li key={linkIndex} className="mb-2">
                      <a href="#" className="hover:underline">
                        {link}
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
          style={{ border: "1px solid black", marginBottom: "11px" }}
        ></div>
        <p style={{ paddingBottom: "10px", fontSize: "12px" }}>
          This is a sample website - cmsmasters © 2025 / All Rights Reserved
        </p>
      </div>
    </div>
  );
};

export default Footer;
