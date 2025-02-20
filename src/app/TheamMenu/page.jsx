import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

const ThemeMenu = ({
  isDropdownOpen,
  setIsDropdownOpen,
  handleThemeChange,
  theme,
}) => {
  return (
    <div className="theme-container">
      <div
        className="theme-button"
        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
      >
        <div className="icon-wrapper">
          <FontAwesomeIcon
            icon={faChevronDown}
            className="text-xs sm:text-sm md:text-base"
          />
        </div>
      </div>
      {isDropdownOpen && (
        <div className="dropdown-container">
          {["classic", "modern", "bold"].map((themeName) => (
            <button
              key={themeName}
              className="button-wrapper"
              onClick={() => handleThemeChange(themeName)}
            >
              <span>
                {themeName.charAt(0).toUpperCase() + themeName.slice(1)}
              </span>
              <div
                className={`w-4 h-4 rounded-full ${
                  themeName === "classic"
                    ? "bg-green-500"
                    : themeName === "modern"
                    ? "bg-red-500"
                    : "bg-blue-500"
                }`}
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default ThemeMenu;
