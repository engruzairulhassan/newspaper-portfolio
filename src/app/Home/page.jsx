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
import RecommendedCarousel from "../../components/RecommendedCarousel/page";
import AdvertisingSection from "../../components/AdvertisingSection/page";
import TopSearches from "../../components/TopSearcheSection/page";
import FeaturedStories from '../../components/FeaturedStories/page'

const HomeContainer = ({ activePage, setActivePage }) => {
  return (
    <div className="parent-container">
      <div className="bg-secondary pt-2">
        <main className="bg-secondary justify-center" style={{width :"84%", margin: 'auto'}}>
          <hr className="border-t-2 t-2 border-[var(--primaryLowerNavbarLine)] border-b-0" />
          <div className="flex">
            <section className="rounded-lg text-center w-full">
              {activePage === "home" ? (
                <div className="max-w-7xl mx-auto  flex flex-col-reverse lg:grid lg:grid-cols-[30%_70%] lg:grid-cols-[20%_70%] gap-6 p-4">
                  <div className="space-y-4 overflow-hidden">
                    <Articles />
                    <div>  
                      <RecommendedCarousel />
                    </div>
                    <AdvertisingSection />
                    <div className="max-[1022px]:pl-[250px] max-[963px]:pl-[200px] max-[860px]:pl-[150px] max-[730px]:pl-[100px] max-[600px]:pl-[60px] max-[550px]:pl-[10px]">
                      <TopSearches />
                    </div>
                  </div>
                  <div id="second">
                    <div className="flex flex-col md:flex-row w-full">
                      <div className="w-full lg:w-[65%] pt-2 lg:pl-10">
                        <BreakingNews />
                      </div>
                      <div className="w-full lg:w-[35%] pl-0 lg:pl-10 lg:mt-0 max-[1022px]:pl-[60px]">
                        <DailyFeedCarousel setActivePage={setActivePage} />
                      </div>
                    </div>
                    <FeaturedStories />
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