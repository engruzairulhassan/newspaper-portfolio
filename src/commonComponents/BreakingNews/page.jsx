import React from "react";
import Image from "next/image";

const BreakingNews = () => {
  return (
    <div
      id="2"
      className="col-span-1 md:col-span-6"
      style={{ paddingLeft: "30px" }}
    >
      <h2
        style={{
          fontFamily:
            '"Playfair Display", Georgia, Times, "Century Schoolbook L"',
        }}
        className="font-bold text-2xl text-textSecondary text-left pt-10 italic pb-2"
      >
        Breaking News
      </h2>
      <div className="mt-2 mb-8">
        <hr
          style={{
            borderTop: "2px solid var(--primaryUpperNavbarLine)",
            borderBottom: "none",
          }}
        />
        <div style={{ height: "2px" }}></div>
        <hr
          style={{
            borderBottom: "1px solid var(--primaryUpperNavbarLine)",
            borderTop: "none",
          }}
        />
      </div>
      <div style={{ paddingTop: "7px" }}>
        <Image
          src="/images/blog-7.jpg"
          alt="Breaking News"
          width={800}
          height={400}
          className="w-full h-auto mb-4"
        />
      </div>
    </div>
  );
};

export default BreakingNews;
