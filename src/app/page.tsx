"use client";
import React, { useState } from "react";
import { getTheme } from "../app/styles/themes/index";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

function Page() {
  const [selectedTheme, setSelectedTheme] = useState("default");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const theme = getTheme(selectedTheme); 
  const handleThemeChange = (themeName: React.SetStateAction<string>) => {
    setSelectedTheme(themeName);
    setIsDropdownOpen(false);
  };

  return (
    <div
      className="min-h-screen flex justify-center relative"
      style={{ background: theme.colors.background, color: theme.colors.text}}
    >
      <div className="absolute top-4 right-4 z-50"  >
        <button
          className="flex items-center p-2 border border-gray-300 rounded shadow-md bg-white"
          onClick={() => setIsDropdownOpen(!isDropdownOpen)}
          style={{ color: theme.colors.text }}
        >
          Select Theme
          <FontAwesomeIcon icon={faChevronDown} className="ml-2" />
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

      <div className="w-full max-w-7xl px-8">
          <main className="flex justify-center p-4 pt-10" 
          style={{
            background: theme.colors.headerBg,
            color: "#000",
            marginTop: '20px',
            boxShadow: "0 8px 20px rgba(0, 0, 0, 0.2)",
          }}>
          <section
            className=" rounded-lg p-8 w-full max-w-3xl text-center">
            <h1
              className="text-5xl font-bold"
              style={{
                color: theme.colors.text,
                fontFamily: "'Playfair Display', serif",
                fontSize: "60px",
                textShadow: "2px 2px 5px rgba(0, 0, 0, 0.2)", 
              }}
            >
              THE NEWSPAPER
            </h1>
          </section>
        <hr  style={{height: '4px'}}/>
        </main>
      </div>
    </div>
  );
}

export default Page;
