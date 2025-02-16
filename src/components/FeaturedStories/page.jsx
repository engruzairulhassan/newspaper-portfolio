import Image from "next/image";
import { articles } from "../utils/const";

export default function FeaturedStories() {
  return (
    <section className="max-w-6xl mx-auto py-12 px-4 text-black">
      <div
        className="h-1 bg-black w-full"
        style={{ border: "3px solid black" }}
      ></div>
      <h2
        className="text-2xl font-bold italic mb-6 text-left"
        style={{ marginTop: "40px" }}
      >
        Featured Stories
      </h2>
      <div className="mt-2 mb-8">
        <hr className="border-t-2 border-[var(--primaryUpperNavbarLine)] border-b-0" />
        <div style={{ height: "2px" }}></div>
        <hr className="border-b border-[var(--primaryUpperNavbarLine)] border-t-0" />
      </div>

      <div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        // style={{ border: "1px solid black" }}
      >
        {articles.map((article, index) => (
          <div key={index} className="group text-left">
            <div className="relative w-full h-48">
              <Image
                src={article.image}
                alt={article.title}
                layout="fill"
                objectFit="cover"
                className="rounded-lg"
              />
            </div>
            <p className="text-sm text-gray-500 mt-2">
              {article.date}{" "}
              <span className="font-bold"> | {article.category}</span>
            </p>
            <h3 className="font-bold text-lg mt-2 cursor-pointer">
              {article.title}
            </h3>
            <p className="text-gray-600 text-sm mt-2">{article.description}</p>
          </div>
        ))}
      </div>

      <hr
        className="border-t-2  border-[var(--primaryLowerNavbarLine)] border-b-0"
        style={{ marginTop: "70px" }}
      />
      <div className="relative">
        <a
          href="#"
          className="absolute top-0 left-0 text-black font-semibold font-sm"
          style={{ fontSize: "13px" }}
        > VIEW MORE POSTS </a>

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
              placeholder="Your email address *"
              className="px-4 w-72 h-10 focus:outline-none"
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
