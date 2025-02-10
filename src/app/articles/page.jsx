"use client";
import { useState } from "react";
import feedData from "../../../src/commonComponents/feedData";

export default function Page({setActivePage}) {
  const itemsPerPage = 5; 
  const totalPages = Math.ceil(feedData.length / itemsPerPage);
  const [visiblePages, setVisiblePages] = useState(1); 

  const handleViewMore = () => {
    if (visiblePages < totalPages) {
      setVisiblePages((prev) => prev + 1); 
    }
  };

  return (
    <div className="w-full max-w-3xl mx-auto p-4">
      {Array.from({ length: visiblePages }).map((_, pageIndex) => (
        <div key={pageIndex} className="w-full flex flex-col">
          {feedData.slice(pageIndex * itemsPerPage, (pageIndex + 1) * itemsPerPage)
            .map((feed, index) => (
              <div
                key={index}
                className="text-left p-4 border-b border-gray-300"
              >
                <p className="text-gray-500 text-xs uppercase">
                  IN {feed.category}
                </p>
                <h3  onClick={()=> setActivePage("NewsData")} className="font-extrabold text-lg cursor-pointer hover:underline">{feed.title}</h3>
                <p className="text-gray-700">{feed.desc}</p>
              </div>
            ))}
        </div>
      ))}

      {visiblePages < totalPages && (
        <div className="flex justify-center mt-4">
          <button
            onClick={handleViewMore}
            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
          >
            View More Posts
          </button>
        </div>
      )}
    </div>
  );
}
