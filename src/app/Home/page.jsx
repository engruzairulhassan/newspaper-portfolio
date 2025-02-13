import React from "react";
import Politics from "../Politics/page";
import Technology from "../technology/page";
import Sports from "../sports/page";
import Fashion from "../fashion/page";
import Food from "../food/page";
import ShortCodes from "../shortCodes/page";
import PostTypes from "../postTypes/page";
import Contacts from "../contacts/page";
import NewsData from "../newsDetails/page";
import DailyFeedCarousel from "../../components/DailyFeedCarousel";
import Articles from "../../commonComponents/Articles/page";
import BreakingNews from "../../commonComponents/BreakingNews/page";

const HomeContainer = ({ activePage, setActivePage }) => {
  return (
    <div className="parent-container">
      <div className="bg-secondary">
        <main className="bg-secondary justify-center px-[102px]">
          <hr className="border-t-2 border-[var(--primaryLowerNavbarLine)] border-b-0" />
          <div className="flex">
            <section className="relative rounded-lg text-center">
              {activePage === "home" ? (
                <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-[25%_45%_20%] gap-6 p-4" >
                  <div>
                    <Articles />
                  </div>
                  <div>
                    <BreakingNews />
                  </div>
                  <div>
                    <DailyFeedCarousel setActivePage={setActivePage} />
                  </div>
                </div>
              ) : activePage === "politics" ? (
                <Politics />
              ) : activePage === "technology" ? (
                <Technology />
              ) : activePage === "sports" ? (
                <Sports />
              ) : activePage === "fashion" ? (
                <Fashion />
              ) : activePage === "food" ? (
                <Food />
              ) : activePage === "shortcodes" ? (
                <ShortCodes />
              ) : activePage === "postTypes" ? (
                <PostTypes />
              ) : activePage === "contacts" ? (
                <Contacts />
              ) : activePage === "NewsData" ? (
                <NewsData />
              ) : null}
            </section>
          </div>
        </main>
      </div>
    </div>
  );
};

export default HomeContainer;