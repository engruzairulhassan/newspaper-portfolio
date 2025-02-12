"use client";
import React, { useEffect, useState } from "react";
import { getTheme } from "../app/styles/themes/index";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import {
  faChevronDown,
  faBars,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";
import DailyFeedCarousel from "../components/DailyFeedCarousel";
import FetchCSVData from "../Apis";
import ArticlesPage from "../app/articles/page";
import Politics from "../app/Politics/page";
import Technology from "../app/technology/page";
import Sports from "../app/sports/page";
import Fashion from "../app/fashion/page";
import Food from "../app/food/page";
import ShortCodes from "../app/shortCodes/page";
import PostTypes from "../app/postTypes/page";
import Contacts from "../app/contacts/page";
import PostPage from "../app/articles/page";
import NewsData from "../app/newsDetails/page";
import { latestArticles } from "../commonComponents/feedData";

function Page() {
  const [selectedTheme, setSelectedTheme] = useState("classic");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);
  const [activePage, setActivePage] = useState("home");

  const theme = getTheme(selectedTheme);

  useEffect(() => {
    FetchCSVData();
  }, []);

  const handleThemeChange = (themeName) => {
    setSelectedTheme(themeName);
    setIsDropdownOpen(false);
  };

  const toggleDropdown = () => {
    setIsDropdownVisible((prevState) => !prevState);
  };

  console.log("theme.colors.text", theme.colors.text);
  return (
    <div
      className={`min-h-screen bg-primary flex justify-center relative theme-${selectedTheme}`}
    >
      <div className="absolute text-black top-4 right-4 z-50">
        <div
          className="relative bg-secondary flex items-center justify-center w-10 h-10 rounded-full shadow-md cursor-pointer"
          onClick={() => setIsDropdownOpen(!isDropdownOpen)}
        >
          <div className="absolute inset-0 flex items-center justify-center">
            <FontAwesomeIcon
              icon={faChevronDown}
              className="text-xs sm:text-sm md:text-base"
              style={{ color: theme.colors.text }}
            />
          </div>
        </div>
        {isDropdownOpen && (
          <div className="absolute border  rounded mt-2 w-40 shadow-md right-0">
            {["classic", "modern", "bold"].map((themeName) => (
              <button
                key={themeName}
                className="flex items-center justify-between w-full text-left p-2 hover:bg-gray-100"
                onClick={() => handleThemeChange(themeName)}
              >
                <span>
                  {themeName.charAt(0).toUpperCase() + themeName.slice(1)}
                </span>
                <div
                  className="w-4 h-4 rounded-full"
                  style={{
                    backgroundColor:
                      themeName === "classic"
                        ? "green"
                        : themeName === "modern"
                        ? "Red"
                        : "blue",
                  }}
                />
              </button>
            ))}
          </div>
        )}
      </div>
      <div className="w-full max-w-7xl max-w-[1400px]" >
          <div className="w-full text-white" style={{paddingTop: '53px'}}>
    </div>
        <main
          className="flex bg-secondary  justify-center p-3 pt-10"
          style={{
            padding: "0px 120px",
            marginTop: "-3px",
          }}
        >
          <section className="relative rounded-lg text-center">
            <h1
              className="text-textPrimary font-bold pt-10 bg-secondary rounded"
              style={{
                fontSize: "73px",
                fontWeight: 900,
                letterSpacing: "-3px",
                // border: '2px solid gray',
                paddingRight: "6px",
                paddingBottom: '3px',
                wordSpacing: "-4px",
                fontFamily: `"Playfair Display", Georgia, Times, "Century Schoolbook L", serif`,
                display: "flex",
                lineHeight:1,
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <span >
                <span style={{ fontSize: "1.15em", marginRight: "-4px" }}>T</span>
                <span style={{ marginRight: "9px" }}>HE</span>
                <span style={{ fontSize: "1.15em", marginRight: "-4px" }}>N</span>
              <span>EWSPAPER</span>
              </span>
            </h1>
            <div className="w-full" style={{ marginTop: "42px" }}>
              <div>
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

              <nav
                className="py-2"
                style={{
                  borderBottom: "2px solid var(--primaryLowerNavbarLine)",
                }}
              >
                <div className="container mx-auto flex justify-center items-center px-4" >
                  <ul
                    className={`flex space-x-6 pl-6 text-sm font-semibold uppercase ${
                      isDropdownVisible ? "bg-white" : ""
                    } hidden lg:flex`}
                    style={{fontSize: '14px', padding: '0px 5px'}}
                  >
                    <li
                      className={`text-textSecondary cursor-pointer ${
                        activePage === "home" ? "" : ""
                      }`}
                      style={{
                        fontSize: '13px',
                        color:
                          activePage === "home"
                            ? "var(--selectedItemColor)"
                            : "",
                      }}
                      onClick={() => setActivePage("home")}
                    >
                      HOME
                    </li>
                    <li
                      className="font-secondary text-textSecondary cursor-pointer"
                      style={{
                        fontSize: '13px',
                        color:
                          activePage === "politics"
                            ? "var(--selectedItemColor)"
                            : "",
                      }}
                      onClick={() => setActivePage("politics")}
                    >
                      POLITICS
                    </li>
                    <li
                      className="font-secondary text-textSecondary cursor-pointer"
                      style={{
                        fontSize: '13px',
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
                      style={{
                        fontSize: '13px',
                        color:
                          activePage === "sports"
                            ? "var(--selectedItemColor)"
                            : "",
                      }}
                      className={`font-secondary text-textSecondary cursor-pointer ${
                        activePage === "sports" ? "red" : ""
                      }`}
                      onClick={() => setActivePage("sports")}
                    >
                      SPORTS
                    </li>
                    <li
                      style={{
                        fontSize: '13px',
                        color:
                          activePage === "fashion"
                            ? "var(--selectedItemColor)"
                            : "",
                      }}
                      className={`font-secondary text-textSecondary cursor-pointer ${
                        activePage === "fashion" ? "#7F95BD" : ""
                      }`}
                      onClick={() => setActivePage("fashion")}
                    >
                      FASHION
                    </li>
                    <li
                      style={{
                        fontSize: '13px',
                        color:
                          activePage === "food"
                            ? "var(--selectedItemColor)"
                            : "",
                      }}
                      className={`font-secondary text-textSecondary cursor-pointer ${
                        activePage === "food" ? "#7F95BD" : ""
                      }`}
                      onClick={() => setActivePage("food")}
                    >
                      FOOD
                    </li>
                    <li
                      style={{
                        fontSize: '13px',
                        color:
                          activePage === "shortcodes"
                            ? "var(--selectedItemColor)"
                            : "",
                      }}
                      className={`font-secondary text-textSecondary cursor-pointer ${
                        activePage === "shortcodes" ? "#7F95BD" : ""
                      }`}
                      onClick={() => setActivePage("shortcodes")}
                    >
                      SHORTCODES
                    </li>
                    <li
                      style={{
                        fontSize: '13px',
                        color:
                          activePage === "postTypes"
                            ? "var(--selectedItemColor)"
                            : "",
                      }}
                      className={`font-secondary text-textSecondary cursor-pointer ${
                        activePage === "postTypes" ? "#7F95BD" : ""
                      }`}
                      onClick={() => setActivePage("postTypes")}
                    >
                      POST TYPES
                    </li>
                    <li
                      style={{
                        fontSize: '13px',
                        color:
                          activePage === "contact"
                            ? "var(--selectedItemColor)"
                            : "",
                      }}
                      className={`font-secondary text-textSecondary cursor-pointer ${
                        activePage === "contact" ? "#7F95BD" : ""
                      }`}
                      onClick={() => setActivePage("contact")}
                    >
                      CONTACTS
                    </li>
                  </ul>

                  <div
                    className="text-xl cursor-pointer ml-6 lg:hidden"
                    style={{ color: theme.colors.text }}
                    onClick={toggleDropdown}
                  >
                    <FontAwesomeIcon
                      icon={isDropdownVisible ? faTimes : faBars}
                    />
                  </div>
                  <div className="text-xl cursor-pointer ml-6">🔍</div>
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
                        className="font-secondary text-textSecondary px-4 py-4 border-b text-base cursor-pointer"
                        onClick={() => setActivePage("home")}
                      >
                        HOME
                      </li>
                      <li
                        className="font-secondary text-textSecondary px-4 py-4 border-b text-base cursor-pointer"
                        onClick={() => setActivePage("politics")}
                      >
                        POLITICS
                      </li>
                      <li className="font-secondary text-textSecondary px-4 py-4 border-b text-base cursor-pointer">
                        TECHNOLOGY
                      </li>
                      <li className="font-secondary text-textSecondary px-4 py-4 border-b text-base cursor-pointer">
                        SPORTS
                      </li>
                      <li className="font-secondary text-textSecondary px-4 py-4 border-b text-base text-gray-400 cursor-pointer">
                        FASHION
                      </li>
                      <li className="font-secondary text-textSecondary px-4 py-4 border-b text-base cursor-pointer">
                        FOOD
                      </li>
                      <li className="font-secondary text-textSecondary px-4 py-4 border-b text-base cursor-pointer">
                        SHORTCODES
                      </li>
                      <li className="font-secondary text-textSecondary px-4 py-4 border-b text-base cursor-pointer">
                        POST TYPES
                      </li>
                      <li className="font-secondary text-textSecondary px-4 py-4 text-base cursor-pointer">
                        CONTACTS
                      </li>
                    </ul>
                  )}
                </div>
              </nav>
              {/* <hr style={{ height: '2px', borderWidth: '1px', borderColor: 'var(--borderColor)' }} /> */}
              {activePage === "home" ? (
                <div className="parentDiv">
                  <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-6">
                    <div
                      id="1"
                      className="font-bold col-span-1 md:col-span-3 pt-14"
                      style={{
                        // border: '2px solid red',
                        borderRight: "1px solid var(--primaryUpperNavbarLine)",
                      }}
                    >
                      <h2
                        className="font-bold text-lg mb-4 text-black text-left"
                        style={{ color: "#7D7D7D", fontSize: "12px" }}
                      >
                        LATEST ARTICLES
                      </h2>
                      <div style={{ padding: "0px 10px" }}>
                        <ul className="text-left space-y-5 text-sm">
                          {latestArticles.map((article, index) => (
                            <li
                              key={index}
                              style={{}}
                              className="font-serif font-normal text-[15px] leading-[15px] text-[rgb(0 0 0)] text-gray-700 hover:text-black cursor-pointer"
                            >
                              • {article}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                    <div
                      id="2"
                      className="col-span-1 md:col-span-6"
                      style={{ paddingLeft: "30px" }}
                    >
                      <h2
                        style={{
                          fontFamily: `"Playfair Display", Georgia, Times, "Century Schoolbook L", serif`,
                        }}
                        className="font-bold text-2xl text-textSecondary text-left pt-10 italic pb-2"
                      >
                        Breaking News
                      </h2>
                      <div className="mt-2 mb-8">
                        <hr
                          style={{
                            borderTop:
                              "2px solid var(--primaryUpperNavbarLine)",
                            borderBottom: "none",
                          }}
                        />
                        <div style={{ height: "2px" }}></div>
                        <hr
                          style={{
                            borderBottom:
                              "1px solid var(--primaryUpperNavbarLine)",
                            borderTop: "none",
                          }}
                        />
                      </div>
                      <div style={{paddingTop:'7px'}}>
                      <Image
                        src="/images/blog-7.jpg"
                        alt="Breaking News"
                        width={800}
                        height={400}
                        className="w-full h-auto mb-4"
                      />
                      </div>
                    </div>

                    <div
                      id="3"
                      className="col-span-1 md:col-span-3 daily-feed pl-0 md:pl-4"
                    >
                      <h2
                        style={{
                          fontFamily: `"Playfair Display", Georgia, Times, "Century Schoolbook L", serif`,
                        }}
                        className="font-bold text-2xl text-left text-textSecondary pt-10 italic pb-2"
                      >
                        Daily Feed
                      </h2>
                      <div className="mt-2 mb-9">
                        <hr
                          style={{
                            borderTop:
                              "2px solid var(--primaryUpperNavbarLine)",
                            borderBottom: "none",
                          }}
                        />
                        <div style={{ height: "2px" }}></div>
                        <hr
                          style={{
                            borderBottom:
                              "1px solid var(--primaryUpperNavbarLine)",
                            borderTop: "none",
                          }}
                        />
                      </div>
                      <DailyFeedCarousel setActivePage={setActivePage} />
                    </div>
                  </div>
                </div>
              ) : activePage === "politics" ? (
                <Politics />
              ) : activePage === "technology" ? (
                <Technology />
              ) : activePage === "sports" ? (
                <Sports />
              ) : activePage === "fashion" ? (
                <Fashion />
              ) : activePage === "food" ? (
                <Food />
              ) : activePage === "shortcodes" ? (
                <ShortCodes />
              ) : activePage === "postTypes" ? (
                <PostTypes />
              ) : activePage === "contacts" ? (
                <Contacts />
              ) : activePage === "articles" ? (
                <ArticlesPage />
              ) : activePage === "PostPage" ? (
                <PostPage />
              ) : activePage === "NewsData" ? (
                <NewsData />
              ) : null}
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}

export default Page;
