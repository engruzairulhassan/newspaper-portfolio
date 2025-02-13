import React from "react";
import { latestArticles } from "../../components/utils/const";

const Articles = () => {
  return (
    <div
      className="col-span-1 md:col-span-3 pt-14 border-r border-[var(--primaryUpperNavbarLine)]"
    >
      <h5
        className="font-bold text-sm text-left  pt-[32px]"
        style={{ color: "var(--selectedItemColor)", paddingTop: "40px" }}
      >
        LATEST ARTICLES
      </h5>
      <div className="pt-4 pr-[14px] pb-0 pl-[8px]">
        <ul className="list-disc pl-6 space-y-2" style={{ paddingTop: "14px" }}>
          {latestArticles.map((article, index) => (
            <li
              key={index}
              className="text-left text-gray-800 cursor-pointer text-sm font-times"
            >
              {article}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Articles;
