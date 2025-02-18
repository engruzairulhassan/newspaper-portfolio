"use client";
import React, { useEffect, useState } from "react";
import { getTheme } from "../app/styles/themes/index";
import FetchCSVData from "../Apis";
import Header from "../commonComponents/Header/page";
import Home from '../app/Home/page'
import ThemeMenu from "../app/TheamMenu/page";
import Footer from "../commonComponents/Footer/page";

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
    // FetchCSVData();
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
      <div className="inner-container">
      <div className="title">
        <span>
          <span className="title-first">T</span>
          <span className="title-space">HE</span>
          <span className="title-first">N</span>
          <span>EWSPAPER</span>
        </span>
      </div>
        {/* <Home activePage={activePage} setActivePage={setActivePage} />
        <Footer /> */}
      </div>
    </div>
  );
}

export default Page;
