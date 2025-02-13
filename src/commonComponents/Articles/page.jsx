import React from "react";
import { latestArticles } from "../../commonComponents/feedData";

const Articles = () => {
  return (
    <div
      id="articles"
      className="font-bold col-span-1 md:col-span-3 pt-14"
      style={{
        borderRight: "1px solid var(--primaryUpperNavbarLine)",
      }}
    >
      <h2
        className="font-bold text-lg mb-4 text-[#64676d] text-left"
        style={{ fontSize: "13px" }}
      >
        LATEST ARTICLES
      </h2>
      <div
        style={{
          padding: "8px 14px 0px 8px",
        }}
      >
        <ul className="text-left space-y-3 text-sm">
          {latestArticles.map((article, index) => (
            <li
              key={index}
              className="flex items-start gap-2 font-serif font-normal text-[15px] leading-[20px] text-black hover:text-black cursor-pointer"
            >
              <span>•</span>
              <span className="leading-[20px]">{article}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Articles;
