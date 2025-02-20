"use client";
import { categories } from "../utils/const";
export default function TopSearches() {
  return (
    <div>
      <h2 className="font-semibold text-gray-700 uppercase text-xsm lg:text-sm mb-3 text-left">
        Top Searches
      </h2>
      <div className="text-black text-left p-2">
        {categories.map((row, index) => (
          <p key={index} className="pt-2">
            {row.map((item, i) => (
              <span
                key={i}
                className={`pr-2 ${
                  ["Blog", "Health", "Lifestyle", "Sports"].includes(item)
                    ? "text-xxsm md:ml-80 lg:text-xl font-semibold leading-none"
                    : ""
                }`}
              >
                {item}
              </span>
            ))}
          </p>
        ))}
      </div>
    </div>
  );
}
