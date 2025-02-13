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
    <div className="absolute text-black top-4 right-4 z-50">
      <div
        className="relative bg-secondary flex items-center justify-center w-10 h-10 rounded-full shadow-md cursor-pointer"
        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
      >
        <div className="absolute inset-0 flex items-center justify-center">
          <FontAwesomeIcon
            icon={faChevronDown}
            className="text-xs sm:text-sm md:text-base"
          />
        </div>
      </div>
      {isDropdownOpen && (
        <div className="absolute border rounded mt-2 w-40 shadow-md right-0">
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
