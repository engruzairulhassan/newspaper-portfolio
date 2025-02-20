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
    <section className="max-w-6xl mx-auto py-12 px-4 text-black">

        {activeCategories.includes(activePage) && (
          <div>
            <div className="grid grid-cols-3 gap-4 mt-6">
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
                  <h3 className="font-bold text-lg mt-2 cursor-pointer">
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

      <hr
        className="border-t-2  border-[var(--primaryLowerNavbarLine)] border-b-0"
        style={{ marginTop: "70px" }}
      />
      <div className="relative">
        <a
          href="#"
          className="absolute top-0 left-0 text-black font-semibold font-sm pt-2"
          style={{ fontSize: "13px" }}
        >
          {" "}
          VIEW MORE POSTS{" "}
        </a>

        <div
          className="flex flex-col items-center justify-center"
          style={{ height: "190px" }}
        >
          <h2 className="text-lg font-semibold mb-2 text-center">
            Sign up for the Spotlight Newsletter:
          </h2>
          <div
            className="flex border border-gray-300 rounded overflow-hidden max-w-md mx-auto items-center"
            style={{ marginTop: "30px" }}
          >
            <input
              type="email"
              style={{ fontFamily: "Playfair Display" }}
              placeholder="Your email address *"
              className="px-4 w-42 h-10 focus:outline-none max-[500px]:w-32"
            />
            <button className="bg-black text-white font-semibold text-xs px-4 h-10">
              SIGN UP
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
