"use client";
import React, { useState } from "react";
import { getTheme } from "../app/styles/themes/index";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import DailyFeedCarousel from '../components/DailyFeedCarousel'

function Page() {
  const [selectedTheme, setSelectedTheme] = useState("default");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);
  const theme = getTheme(selectedTheme); 
  const handleThemeChange = (themeName) => {
    setSelectedTheme(themeName);
    setIsDropdownOpen(false);
  };

  const toggleDropdown = () => {
    setIsDropdownVisible(prevState => !prevState);
  };

  return (
    <div
      className="min-h-screen flex justify-center relative"
      style={{ background: theme.colors.background, color: theme.colors.text,  }}
    >
      <div className="absolute top-4 right-4 z-50">
      <button
        className="flex items-center p-2 sm:p-3 md:p-4 h-8 sm:h-10 md:h-12 border border-gray-300 rounded shadow-md bg-white text-sm sm:text-base md:text-lg"
        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
        style={{ color: theme.colors.text  ,background: theme.colors.background}}
      >
        Select Theme
        <FontAwesomeIcon 
          icon={faChevronDown} 
          className="ml-2 text-xs sm:text-sm md:text-base" 
        />
      </button>

        {isDropdownOpen && (
          <div className="absolute bg-white border border-gray-300 rounded mt-2 w-40 shadow-md right-0">
            {["red", "green", "blue", "default"].map((themeName) => (
              <button
                key={themeName}
                className="block w-full text-left p-2 hover:bg-gray-100"
                onClick={() => handleThemeChange(themeName)}
              >
                {themeName.charAt(0).toUpperCase() + themeName.slice(1)}
              </button>
            ))}
          </div>
        )}
      </div>

      <div className="w-full max-w-7xl px-0">
          <main className="flex justify-center p-4 pt-10"
            style={{
              background: theme.colors.headerBg,
              color: "#000",
              marginTop: '20px',
            }}>
            <section className="relative rounded-lg  text-center">
            <h1
              className="font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl"
              style={{
                color: theme.colors.text,
                fontFamily: "'Playfair Display', serif",
                textShadow: "2px 2px 5px rgba(0, 0, 0, 0.2)",
              }}
            >
              THE NEWSPAPER
            </h1>
              <div className="w-full">
              <div className="mt-10">
                <hr style={{ borderTop: '2px solid #b5afaf8a', borderBottom: 'none' }} />
                <div style={{ height: '2px' }}></div>
                <hr style={{ borderBottom: '1px solid #b5afaf8a', borderTop: 'none' }} />
              </div>
                <nav className="border-b py-4">
                <div className="container mx-auto flex justify-center items-center px-4">
                  <ul className={`flex space-x-6 text-sm font-semibold uppercase ${isDropdownVisible ? 'bg-white' : ''} hidden lg:flex`}>
                    <li>HOME</li>
                    <li>POLITICS</li>
                    <li>TECHNOLOGY</li>
                    <li>SPORTS</li>
                    <li className="text-gray-400">FASHION</li>
                    <li>FOOD</li>
                    <li>SHORTCODES</li>
                    <li>POST TYPES</li>
                    <li>CONTACTS</li>
                  </ul>
                  <div className="text-xl cursor-pointer ml-6 lg:hidden" style={{color: theme.colors.text}} onClick={toggleDropdown}>
                    <FontAwesomeIcon icon={isDropdownVisible ? faTimes : faBars} />
                  </div>
                  <div className="text-xl cursor-pointer ml-6">
                    🔍
                  </div>
                  {isDropdownVisible && (
                    <ul className="absolute top-16 left-0 w-full bg-white  lg:hidden" style={{background: theme.colors.headerBg, marginTop: '100px', textAlign: 'left' }}>
                      <li className="px-4 py-4 border-b text-base">HOME</li>
                      <li className="px-4 py-4 border-b text-base">POLITICS</li>
                      <li className="px-4 py-4 border-b text-base font-bold">TECHNOLOGY</li>
                      <li className="px-4 py-4 border-b text-base">SPORTS</li>
                      <li className="px-4 py-4 border-b text-base text-gray-400">FASHION</li>
                      <li className="px-4 py-4 border-b text-base">FOOD</li>
                      <li className="px-4 py-4 border-b text-base">SHORTCODES</li>
                      <li className="px-4 py-4 border-b text-base">POST TYPES</li>
                      <li className="px-4 py-4 text-base">CONTACTS</li>
                    </ul>
                  )}
                </div>
                </nav>
               <hr className="border-gray-300" style={{ height: '2px', borderWidth: '1px', borderColor: 'grey' }} />
                <div>
                <div className="max-w-7xl mx-auto grid grid-cols-12 gap-6" >
                        <div className="font-bold col-span-3 pt-10" style={{borderRight: '1px solid gray'}}>
                          <h2 className="font-bold text-lg pb-2 mb-4" >LATEST ARTICLES</h2>
                        </div>
                        
                        <div className="col-span-6">
                          <h2 className="font-bold text-2xl text-left pt-10 italic pb-2 ">Breaking News</h2>
                          <div>
                            <hr style={{ borderTop: '2px solid #b5afaf8a', borderBottom: 'none' }} />
                            <div style={{ height: '2px' }}></div>
                            <hr style={{ borderBottom: '1px solid #b5afaf8a', borderTop: 'none' }} />
                          </div>
                        </div>
                        
                        <div className="col-span-3 daily-feed">
                          <h2 className="font-bold text-2xl  text-left pt-10 italic pb-2">Daily Feed</h2>
                          <div className="">
                            <hr style={{ borderTop: '2px solid #b5afaf8a', borderBottom: 'none' }} />
                            <div style={{ height: '2px' }}></div>
                            <hr style={{ borderBottom: '1px solid #b5afaf8a', borderTop: 'none' }} />
                          </div>
                          <DailyFeedCarousel/>
                        </div>
                      </div>
                  </div>
              </div>
            </section>
          </main> 
      </div>
    </div>
  );
}

export default Page;
