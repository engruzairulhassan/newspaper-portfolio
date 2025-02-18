import React from 'react'
import FeaturedStories from '../../components/FeaturedStories/page';
import DailyFeedCarousel from '../../components/DailyFeedCarousel';
import Image from "next/image";
import { posts } from '../../components/utils/const';

const page = () => {
  return (
    <div>
      <div className="flex justify-between items-center p-4">
        <h2
          className="font-bold text-2xl text-left text-textSecondary pt-10 italic pb-2"
          style={{ fontFamily: "Playfair Display" }}
        >
          Politics
        </h2>
        <nav className="flex items-center space-x-4 text-sm">
          <a href="#" className="text-gray-500 text-xsm hover:text-black">
            HOME
          </a>
          <span className="text-gray-300">|</span>
          <a href="#" className="font-bold text-xsm text-black">
            POLITICS
          </a>
        </nav>
      </div>
      <div>
        <hr className="border-t-2 border-[var(--primaryUpperNavbarLine)] border-b-0" />
        <div style={{ height: "2px" }}></div>
        <hr className="border-b border-[var(--primaryUpperNavbarLine)] border-t-0" />
      </div>
  
      
      <div className="w-full">
        <div className="flex flex-wrap md:flex-nowrap">
          {/* First Child (Image Section) */}
          <div className="w-full md:w-full lg:w-[45%] p-4">
            <div>
              <Image
                src="/images/666.jpg"
                alt="Breaking News"
                width={500}
                height={300}
                className="h-auto pt-[29px]"
              />
            </div>
            <p className="text-black text-left text-xxsm mt-4">
              MAY 23, 2017 | ARTS, POLITICS | BY CMSMASTERS
            </p>
            <h2 className="text-xl hover:underline font-bold text-black text-left mt-2">
              Physiological Responses to Rock Climbing in Young Climbers
            </h2>
            <p className="text-black text-base font-normal text-left mt-2">
              Sed nec blandit nibh. Pellentesque commodo suscipit gravida. Sed
              sit amet ex sed mi dignissim elementum in ut.
            </p>
            <button className="mt-4 float-left text-black font-bold uppercase text-xxsm">
              Read More
            </button>
          </div>

          {/* Second Child (Posts Section) */}
          <div className="w-full sm:w-1/2 md:w-[35%] p-4">
            <div className="max-w-3xl mx-auto mt-4">
              {posts.slice(0, 2).map((post, index) => (
                <div key={index} className="text-black border-b mb-6 text-left">
                  <p className="text-[11px]">
                    <span className="pr-3">{post.date}</span> |{" "}
                    <span className="pr-3">{post.categories.join(", ")}</span> |
                    BY <span className="pr-3">{post.author} | </span>
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
                    className="text-black mb-6 font-semibold mt-2 block pb-[20px] text-[10px]"
                  >
                    READ MORE
                  </a>
                </div>
              ))}
            </div>
          </div>

          {/* Third Child (Reputation & Opinion Section) */}
          <div className="w-full sm:w-1/2 md:w-[25%] p-4">
            <div className="mt-6 text-left">
              <h3 className="text-black text-xs uppercase">Reputation</h3>
              <div className="mt-2">
                <p className="text-sm text-black font-bold">
                  THEODORE ROOSEVELT <span className="float-right">83%</span>
                </p>
                <div className="w-full bg-gray-300 h-1">
                  <div className="bg-black h-1" style={{ width: "83%" }}></div>
                </div>
              </div>
              <div className="mt-2">
                <p className="text-sm text-black font-bold">
                  ALICE BOHN <span className="float-right">66%</span>
                </p>
                <div className="w-full bg-gray-300 h-1">
                  <div
                    className="bg-black text-black h-1"
                    style={{ width: "66%" }}
                  ></div>
                </div>
              </div>
            </div>
            <div className="mt-6 text-left">
              <h3 className="text-gray-500 text-xs uppercase">Opinion</h3>
              <ul className="mt-2 space-y-1 text-sm italic text-gray-700">
                <li>Today's Opinion</li>
                <li>Op-Ed Columnists</li>
                <li>Editorials</li>
                <li>Contributing Writers</li>
                <li>Op-Ed Contributors</li>
                <li>Opinionator</li>
                <li>Letters</li>
                <li>Sunday Review</li>
                <li>Taking Note</li>
                <li>Room for Debate</li>
                <li>Public Editor</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div>
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

        <div className="flex parent-div">
          <div style={{ width: "75%" }}>
            <FeaturedStories />
          </div>
          <div className="mt-9" style={{ width: "25%" }}>
            <DailyFeedCarousel />
          </div>
        </div>
      </div>
    </div>
  );
}

export default page
