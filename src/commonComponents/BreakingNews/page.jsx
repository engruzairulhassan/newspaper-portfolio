import React from "react";
import Image from "next/image";
import { posts } from "../../components/utils/const";

const BreakingNews = () => {
  return (
    <div className="col-span-1 md:col-span-6 lg:border-l lg:border-[var(--primaryUpperNavbarLine)]  lg:pl-[60px]">
      <h2
        className="font-bold text-xl sm:text-xl md:text-2xl font-tertiary text-textSecondary text-left pt-5 italic pb-2 max-[1022px]:mt-[22px]"
        style={{ fontFamily: "Playfair Display" }}
      >
        Breaking News
      </h2>
      <div className="lg:max-[1024px]:pt-[55px]">
        <div className="lg:mb-8">
          <hr className="border-t-2 border-[var(--primaryUpperNavbarLine)] border-b-0" />
          <div style={{ height: "2px" }}></div>
          <hr className="border-b border-[var(--primaryUpperNavbarLine)] border-t-0" />
        </div>
        <div className="lg:pt-[10px]"></div>
        <Image
          src="/images/blog-7.jpg"
          alt="Breaking News"
          width={800}
          height={400}
          className="w-full h-auto pt-[29px]"
        />
      </div>

      <div>
        <div className="max-w-3xl mx-auto mt-4">
          {posts.map((post, index) => (
            <div key={index} className="text-black border-b mb-6 text-left">
              <p className="text-[11px]">
                <span className="pr-3">{post.date}</span> |{" "}
                <span className="pr-3">{post.categories.join(", ")}</span> | BY{" "}
                <span className="pr-3">{post.author} | </span>
                <span className="text-gray-700 font-bold">{post.comments}</span>
              </p>
              <h2
                className="font-bold mt-2 hover:underline text-base sm:text-xl"
                style={{ fontFamily: "Playfair Display" }}
              >
                {post.title}
              </h2>
              <p className="text-gray-600 mt-2 text-[16px]">{post.excerpt}</p>
              <a
                href="#"
                className="text-black mb-6 font-semibold mt-2 block pb-[20px] text-[10px]"
              >
                READ MORE
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BreakingNews;
