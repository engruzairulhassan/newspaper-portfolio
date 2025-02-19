
"use client"
import React from 'react'
import FeaturedStories from '../../components/FeaturedStories/page';
import DailyFeedCarousel from '../../components/DailyFeedCarousel';
import Image from "next/image";
import { postsData } from '../../components/utils/const';
import { reputationOpinionData } from '../../components/utils/const';
import ContactForm from '../../components/ContactForm/Page';

const page = ({activePage}) => {
  console.log("activePage in polictic ===>", activePage);
  const imageSrcMap = {
    politics: "/images/politics.jpg",
    technology: "/images/technology.jpg",
    sports: "/images/sports.jpg",
    fashion: "/images/fashion.jpg",
    food: "/images/food.jpg",
    shortcodes: "/images/shortcodes.jpg",
    postTypes: "/images/postTypes.jpg",
  };

  const filteredPosts = postsData.filter((post) =>
    post.categories.includes(activePage.toUpperCase())
  );

  const activePageData = reputationOpinionData[activePage] || {
    reputation: [],
    opinion: [],
  };

  return (
    <div className="parent-container" style={{ width: "84%", margin: "auto" }}>
      <div className="flex justify-between items-center p-4">
        <div
          className="font-bold text-2xl text-left text-textSecondary pt-10 italic pb-2"
          style={{ fontFamily: "Playfair Display" }}
        >
          {[
            "fashion",
            "technology",
            "politics",
            "sports",
            "food",
            "shortcodes",
            "postTypes",
          ].includes(activePage) && (
            <h2
              className="font-bold text-2xl text-left text-textSecondary italic pb-2"
              style={{ fontFamily: "Playfair Display" }}
            >
              {activePage}
            </h2>
          )}
        </div>

        {activePage != "contacts" && (
          <nav className="flex items-center space-x-4 text-sm">
            <a href="#" className="text-gray-500 text-xsm hover:text-black">
              HOME
            </a>
            <span className="text-gray-300">|</span>
            <a href="#" className="font-bold text-xsm text-black">
              POLITICS
            </a>
          </nav>
        )}
      </div>
      {activePage != "contacts" && (
        <div>
          <hr className="border-t-2 border-[var(--primaryUpperNavbarLine)] border-b-0" />
          <div style={{ height: "2px" }}></div>
          <hr className="border-b border-[var(--primaryUpperNavbarLine)] border-t-0" />
        </div>
      )}

      <div className="w-full">
        <div className="flex flex-wrap lg:flex-nowrap">
          <div
            className={`p-4 ${
              activePage === "contacts"
                ? "w-[85%]"
                : "w-full md:w-full lg:w-full xl:w-[45%]"
            }`}
          >
            <div>
              {imageSrcMap[activePage] && (
                <div>
                  <Image
                    src={imageSrcMap[activePage]}
                    alt={activePage}
                    width={900}
                    height={300}
                    className="h-auto pt-[29px]"
                  />
                </div>
              )}
            </div>
            {activePage === "contacts" && (
              <div>
                {" "}
                <ContactForm />{" "}
              </div>
            )}
            l
            {activePage != "contacts" && (
              <div>
                <p className="text-black text-left text-xxsm mt-4">
                  MAY 23, 2017 | ARTS, POLITICS | BY CMSMASTERS
                </p>
                <h2 className="text-xl hover:underline font-bold text-black text-left mt-2">
                  Physiological Responses to Rock Climbing in Young Climbers
                </h2>
                <p className="text-black text-base font-normal text-left mt-2">
                  Sed nec blandit nibh. Pellentesque commodo suscipit gravida.
                  Sed sit amet ex sed mi dignissim elementum in ut.
                </p>
                <button className="mt-4 float-left text-black font-bold uppercase text-xxsm">
                  Read More
                </button>
              </div>
            )}
          </div>
          {activePage != "contacts" && (
            <div className="w-full sm:w-1/2 md:w-[35%] p-4 mt-8">
              <div className="max-w-3xl mx-auto ">
                <div className="flex flex-col">
                  {" "}
                  {filteredPosts.slice(0, 3).map((post, index) => (
                    <div key={index} className="w-full">
                      {" "}
                      <div className="max-w-3xl mx-auto text-black border-b mb-3 text-left">
                        <p className="text-[11px]">
                          <span className="pr-3">{post.date}</span> |{" "}
                          <span className="pr-3">
                            {post.categories.join(", ")}
                          </span>{" "}
                          | BY <span className="pr-3">{post.author} | </span>
                          <span className="text-gray-700 font-bold">
                            {post.comments}
                          </span>
                        </p>
                        <h2 className="text-xl font-bold mt-2 hover:underline">
                          {post.title}
                        </h2>
                        <p className="text-gray-600 mt-2 text-[16px]">
                          {post.excerpt}
                        </p>
                        <a
                          href="#"
                          className="text-black  font-semibold mt-2 block pb-[20px] text-[10px]"
                        >
                          READ MORE
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
          <div className="w-full sm:w-1/2 md:w-[25%] p-4">
            <div className="mt-6 text-left">
              <h3 className="text-black text-xs uppercase">Reputation</h3>
              {activePageData?.reputation?.map((person, index) => (
                <div key={index} className="mt-2">
                  <p className="text-sm text-black font-bold pt-4">
                    {person.name}{" "}
                    <span className="float-right">{person.percentage}%</span>
                  </p>
                  <div className="w-full bg-gray-300 h-1">
                    <div
                      className="bg-black h-1"
                      style={{ width: `${person.percentage}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-10 text-left">
              <h3 className="text-gray-500 text-xs uppercase">Opinion</h3>
              <ul
                className="mt-2 space-y-1 text-sm italic text-gray-700 font-playfair"
                // style={{ fontFamily: "t" }}
              >
                {activePageData.opinion.map((topic, index) => (
                  <li key={index}>{topic}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div>
        {activePage != "contacts" && (
          <div>
            <h2
              className="text-2xl text-black font-bold italic mb-6 text-left"
              style={{ marginTop: "40px", fontFamily: "Playfair Display" }}
            >
              Featured Stories
            </h2>
            <div className="mt-2 mb-8">
              <hr className="border-t-2 border-[var(--primaryUpperNavbarLine)] border-b-0" />
              <div style={{ height: "2px" }}></div>
              <hr className="border-b border-[var(--primaryUpperNavbarLine)] border-t-0" />
            </div>
          </div>
        )}

        <div className="flex flex-row  max-[1178px]:flex-col">
          <div className="w-[75%] max-[1178px]:w-full">
            {activePage != "contacts" && (
              <FeaturedStories activePage={activePage} />
            )}
          </div>
          <div className="mt-9 w-[25%] max-[1178px]:w-full">
            {activePage != "contacts" && <DailyFeedCarousel />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default page
