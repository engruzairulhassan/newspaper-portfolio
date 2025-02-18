"use client";
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { pages } from "../../components/utils/const/index";

function Header({ activePage, setActivePage, theme }) {
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);
  const toggleDropdown = () => {
    setIsDropdownVisible((prevState) => !prevState);
  };
  return (
    <header className="header-section">
      <h1
        className="text-textPrimary font-bold font-tertiary pt-3 bg-secondary rounded text-4xl font-black tracking-[-3px] pr-[6px] pb-[9px] leading-[1] flex items-center justify-center font-serif"
      >
        <span>
          <span
            style={{
              fontSize: "1.15em",
              marginRight: "-4px",
            }}
          >
            T
          </span>
          <span style={{ marginRight: "9px" }}>HE</span>
          <span style={{ fontSize: "1.15em", marginRight: "-4px" }}>N</span>
          <span>EWSPAPER</span>
        </span>
      </h1>
      <div className="w-full">
        <nav className="py-2 text-textPrimary font-bold pt-10 bg-secondary rounded">
          <div style={{ padding: "0px 100px" }}>
            <hr
              style={{
                borderTop: "2px solid var(--primaryUpperNavbarLine)",
                borderBottom: "none",
              }}
            />
            <div style={{ height: "1px" }}></div>
            <hr
              style={{
                borderBottom: "1px solid var(--primaryUpperNavbarLine)",
                borderTop: "none",
              }}
            />
          </div>
          <div
            className="container mx-auto flex justify-center items-center px-4 "
            style={{ paddingTop: "17px", paddingBottom: "5px" }}
          >
            <ul className="flex space-x-6 pl-6 text-sm font-semibold uppercase hidden lg:flex">
              {pages.map((page) => (
                <li
                  key={page.name}
                  className={`font-secondary cursor-pointer text-textSecondary cursor-pointer text-[13px] ${
                    activePage === page.name
                      ? "text-[var(--selectedItemColor)]"
                      : ""
                  } ${
                    page.special
                      ? "text-[73px] font-black tracking-[-3px] pr-[6px] pb-[3px] space-x-[-4px] font-playfair flex items-center justify-center leading-none"
                      : ""
                  }`}
                  onClick={() => setActivePage(page.name)}
                >
                  {page.label}
                </li>
              ))}
            </ul>

            <div
              className="text-xl cursor-pointer ml-6 lg:hidden"
              onClick={toggleDropdown}
            >
              <FontAwesomeIcon icon={isDropdownVisible ? faTimes : faBars} />
            </div>
            <div className="text-xl cursor-pointer ml-6">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="black"
                viewBox="0 0 24 24"
                width="20"
                height="20"
              >
                <path d="M10 2a8 8 0 015.293 13.707l5 5a1 1 0 01-1.414 1.414l-5-5A8 8 0 1110 2zm0 2a6 6 0 104.242 10.242A6 6 0 0010 4z" />
              </svg>
            </div>

            {isDropdownVisible && (
              <ul className="absolute top-16 left-0 w-full bg-white lg:hidden bg-headerBg mt-[100px] text-left">
                {pages.map((page) => (
                  <li
                    key={page.name}
                    className="p-2 text-textSecondary cursor-pointer"
                    onClick={() => setActivePage(page.name)}
                  >
                    {page.label}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Header;

