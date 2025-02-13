"use client";
import React, { useEffect, useState } from "react";
import { getTheme } from "../app/styles/themes/index";
import FetchCSVData from "../Apis";
import Header from "../commonComponents/Header/page";
import Home from '../app/Home/page'
import ThemeMenu from "../app/TheamMenu/page";
// import Footer from "../commonComponents/Footer/page";

function Page() {
  const [selectedTheme, setSelectedTheme] = useState("classic");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [activePage, setActivePage] = useState("home");
  const theme = getTheme(selectedTheme);

  const handleThemeChange = (themeName) => {
    setSelectedTheme(themeName);
    setIsDropdownOpen(false);
  };

  useEffect(() => {
    FetchCSVData();
  }, []);

  return (
    <div
      className={`min-h-screen bg-primary flex justify-center relative theme-${selectedTheme}`}
    >
      <ThemeMenu
        selectedTheme={selectedTheme}
        setSelectedTheme={setSelectedTheme}
        isDropdownOpen={isDropdownOpen}
        setIsDropdownOpen={setIsDropdownOpen}
        handleThemeChange={handleThemeChange}
        theme={theme}
      />
      <div
        className="w-full max-w-7xl max-w-[1400px]"
        style={{ marginTop: "50px" }}
      >
        <div className="inner-container">
          <div>
            <Header
              activePage={activePage}
              setActivePage={setActivePage}
              theme={theme}
            />
          </div>
          <Home
            activePage={activePage}
            setActivePage={setActivePage}
          />
        </div>
        {/* <Footer/> */}

      </div>
    </div>
  );
}

export default Page;