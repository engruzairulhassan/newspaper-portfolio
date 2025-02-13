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
        <main
          className="bg-secondary justify-center p-3 pt-10"
          style={{ padding: "0px 102px" }}
        >
          <hr
            style={{
              borderTop: "2px solid var(--primaryLowerNavbarLine)",
              borderBottom: "none",
            }}
          />
          <div className="flex">
            <section className="relative rounded-lg text-center">
              {activePage === "home" ? (
                <div className="parentDiv">
                  <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-6">
                    <Articles />
                    <BreakingNews />
                    <div className="col-span-1 md:col-span-3 daily-feed pl-0 md:pl-4">
                      <DailyFeedCarousel setActivePage={setActivePage} />
                    </div>
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