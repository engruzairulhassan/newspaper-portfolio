import Image from "next/image";
import { allArticles } from "../utils/const";

export default function FeaturedStories({activePage}) {
  console.log("activePage ===>", activePage);
    console.log("activePage in polictic ===>", activePage);
   
    const imageSrcMap = {
      politics: "/images/politics.jpg",
      technology: "/images/technology.jpg",
      sports: "/images/sports.jpg",
      fashion: "/images/fashion.jpg",
      food: "/images/food.jpg",
      shortcodes: "/images/shortcodes.jpg",
      postTypes: "/images/postTypes.jpg",
      home: "/images/shortcodes.jpg",
    };

    const activeCategories = [
      "fashion",
      "technology",
      "politics",
      "sports",
      "food",
      "shortcodes",
      "postTypes",
      "home",
    ];

  return (
    <section className="max-w-6xl mx-auto py-12 lg:px-4 text-black">
      {activeCategories.includes(activePage) && (
        <div>
          <div className="grid xl:grid-cols-3 lg:grid-cols-1 gap-6 mt-6 max-w-screen-xl mx-auto lg:px-4">
            {allArticles[activePage]?.map((article, index) => (
              <div key={index} className="group text-left">
                <div className="relative w-full h-48">
                  <Image
                    src={imageSrcMap[activePage]}
                    alt={activePage}
                    width={300}
                    height={200}
                    className="rounded-lg object-cover w-full h-full"
                  />
                </div>
                <p className="text-sm text-gray-500 mt-2">
                  {article.date}{" "}
                  <span className="font-bold"> | {article.category}</span>
                </p>
                <h3 className="font-bold text-lg mt-2 cursor-pointer hover:text-blue-600 transition duration-300">
                  {article.title}
                </h3>
                <p className="text-gray-600 text-sm mt-2">
                  {article.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      )}

      {activePage === "home" && (
        <hr className="border-t-2 border-[var(--primaryLowerNavbarLine)] mt-16" />
      )}
      <div className="relative mt-4">
      <a
          href="#"
          className="absolute top-0 left-0 text-black font-semibold text-xs sm:text-xxsm lg:text-sm pt-2"
        >
          VIEW MORE POSTS
        </a>
      </div>

      {activePage === "home" && (
        <div className="flex flex-col items-center justify-center h-48">
          <h2 className="text-sm sm:text-xl font-semibold mb-4 sm:mb-2 text-center pt-10 whitespace-nowrap">
            Sign up for the Spotlight Newsletter:
          </h2>
          <div className="flex flex-col sm:flex-row border border-gray-300 rounded overflow-hidden w-[318px] items-center mt-6">
            <input
              type="email"
              placeholder="Your email address *"
              className="px-4 w-full sm:w-42 h-10 focus:outline-none text-center sm:text-left"
            />
            <button className="bg-black text-white font-bold text-xs px-4 h-10 w-full sm:w-auto whitespace-nowrap">
              SIGN UP
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
