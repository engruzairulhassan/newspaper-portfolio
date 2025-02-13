"use client";
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";

function Header({ activePage, setActivePage, theme }) {
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);
  const toggleDropdown = () => {
    setIsDropdownVisible((prevState) => !prevState);
  };

  return (
    <header className="header-section">
      <h1
        className="text-textPrimary font-bold pt-10 bg-secondary rounded"
        style={{
          fontSize: "73px",
          fontWeight: 900,
          letterSpacing: "-3px",
          paddingRight: "6px",
          paddingBottom: "3px",
          wordSpacing: "-4px",
          fontFamily: `"Playfair Display", Georgia, Times, "Century Schoolbook L", serif`,
          display: "flex",
          lineHeight: 1,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <span>
          <span style={{ fontSize: "1.15em", marginRight: "-4px" }}>T</span>
          <span style={{ marginRight: "9px" }}>HE</span>
          <span style={{ fontSize: "1.15em", marginRight: "-4px" }}>N</span>
          <span>EWSPAPER</span>
        </span>
      </h1>
      <div className="w-full">
        <nav
          className="py-2 text-textPrimary font-bold pt-10 bg-secondary rounded">
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
          <div className="container mx-auto flex justify-center items-center px-4 " style={{paddingTop :'17px', paddingBottom: '5px' }}>
            <ul className="flex space-x-6 pl-6 text-sm font-semibold uppercase hidden lg:flex">
              <li
                className="font-secondary text-textSecondary cursor-pointer"
                style={{
                  fontSize: "13px",
                  color:
                    activePage === "home" ? "var(--selectedItemColor)" : "",
                }}
                onClick={() => setActivePage("home")}
              >
                HOME
              </li>
              <li
                className="font-secondary text-textSecondary cursor-pointer"
                style={{
                  fontSize: "13px",
                  color:
                    activePage === "politics" ? "var(--selectedItemColor)" : "",
                }}
                onClick={() => setActivePage("politics")}
              >
                POLITICS
              </li>
              <li
                className="font-secondary text-textSecondary cursor-pointer"
                style={{
                  fontSize: "13px",
                  color:
                    activePage === "technology"
                      ? "var(--selectedItemColor)"
                      : "",
                }}
                onClick={() => setActivePage("technology")}
              >
                TECHNOLOGY
              </li>
              <li
                className="font-secondary text-textSecondary cursor-pointer"
                style={{
                  fontSize: "13px",
                  color:
                    activePage === "sports" ? "var(--selectedItemColor)" : "",
                }}
                onClick={() => setActivePage("sports")}
              >
                SPORTS
              </li>
              <li
                className="font-secondary text-textSecondary cursor-pointer"
                style={{
                  fontSize: "13px",
                  color:
                    activePage === "fashion" ? "var(--selectedItemColor)" : "",
                }}
                onClick={() => setActivePage("fashion")}
              >
                FASHION
              </li>
              <li
                className="font-secondary text-textSecondary cursor-pointer"
                style={{
                  fontSize: "13px",
                  color:
                    activePage === "food" ? "var(--selectedItemColor)" : "",
                }}
                onClick={() => setActivePage("food")}
              >
                FOOD
              </li>
              <li
                className="font-secondary text-textSecondary cursor-pointer"
                style={{
                  fontSize: "13px",
                  color:
                    activePage === "shortcodes"
                      ? "var(--selectedItemColor)"
                      : "",
                }}
                onClick={() => setActivePage("shortcodes")}
              >
                SHORTCODES
              </li>
              <li
                className="font-secondary text-textSecondary cursor-pointer"
                style={{
                  fontSize: "13px",
                  color:
                    activePage === "postTypes"
                      ? "var(--selectedItemColor)"
                      : "",
                }}
                onClick={() => setActivePage("postTypes")}
              >
                POST TYPES
              </li>
              <li
                className="font-secondary text-textSecondary cursor-pointer"
                style={{
                  fontSize: "13px",
                  color:
                    activePage === "contact" ? "var(--selectedItemColor)" : "",
                }}
                onClick={() => setActivePage("contact")}
              >
                CONTACT
              </li>
            </ul>

            <div
              className="text-xl cursor-pointer ml-6 lg:hidden"
              // style={{ color: theme.colors.text }}
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
              <ul
                className="absolute top-16 left-0 w-full bg-white lg:hidden"
                style={{
                  background: theme.colors.headerBg,
                  marginTop: "100px",

                  textAlign: "left",
                }}
              >
                <li
                  className="p-2 text-textSecondary cursor-pointer"
                  onClick={() => setActivePage("home")}
                >
                  HOME
                </li>
                <li
                  className="p-2 text-textSecondary cursor-pointer"
                  onClick={() => setActivePage("politics")}
                >
                  POLITICS
                </li>
                <li
                  className="p-2 text-textSecondary cursor-pointer"
                  onClick={() => setActivePage("technology")}
                >
                  TECHNOLOGY
                </li>
                <li
                  className="p-2 text-textSecondary cursor-pointer"
                  onClick={() => setActivePage("sports")}
                >
                  SPORTS
                </li>
                <li
                  className="p-2 text-textSecondary cursor-pointer"
                  onClick={() => setActivePage("fashion")}
                >
                  FASHION
                </li>
                <li
                  className="p-2 text-textSecondary cursor-pointer"
                  onClick={() => setActivePage("food")}
                >
                  FOOD
                </li>
                <li
                  className="p-2 text-textSecondary cursor-pointer"
                  onClick={() => setActivePage("shortcodes")}
                >
                  SHORTCODES
                </li>
                <li
                  className="p-2 text-textSecondary cursor-pointer"
                  onClick={() => setActivePage("postTypes")}
                >
                  POST TYPES
                </li>
                <li
                  className="p-2 text-textSecondary cursor-pointer"
                  onClick={() => setActivePage("contact")}
                >
                  CONTACT
                </li>
              </ul>
            )}
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Header;

