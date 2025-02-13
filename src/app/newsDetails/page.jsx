"use client";
import Image from "next/image";
import { latestArticles } from "../../components/utils/const";

export default function NewsData() {
  return (
    <div className="container mx-auto p-4 grid grid-cols-12 gap-4">
      <main className="col-span-12 md:col-span-8 rounded-lg p-6">
        <p className="text-left text-gray-700 pb-2 font-semibold">Economy</p>{" "}
        <hr />
        <h1 className="text-left text-3xl font-extrabold italic text-gray-800 mb-2">
          Leading Article: A Better Way to Educate Primary School Children
        </h1>
        <p className="text-gray-800 mb-4 text-left text-[10px]">
          MAY 24, 2017 | BY CMSMASTERS
        </p>
        <div className="relative w-full h-[400px] mb-4 rounded-lg overflow-hidden">
          <Image
            src="/images/2.jpg"
            alt="Classroom Scene"
            layout="fill"
            objectFit="cover"
            className="transition-transform duration-300 ease-in-out transform hover:scale-105"
          />
        </div>
        <p className="text-gray-700 text-base leading-7 text-left">
          Education is one of the most vital aspects of a child's development.
          In this article, we explore innovative methods to enhance primary
          education and make learning a more engaging experience for young
          students...
        </p>
      </main>
      <aside className="col-span-12 md:col-span-4 rounded-lg p-6 mt-4 md:mt-0">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4 text-left">
          Recommended
        </h2>
         <div className="pt-0 pr-[14px] pb-0 pl-[8px]">
                <ul className="text-sm list-disc pl-6 mb-6 space-y-2">
                  {latestArticles.map((article, index) => (
                    <li
                      key={index}
                      className="text-left text-textSecondary cursor-pointer transition-colors duration-200"
                    >
                      {article}
                    </li>
                  ))}
                </ul>
              </div>
        <div className="relative w-full h-[150px] mb-4 rounded-lg overflow-hidden">
          <Image
            src="/images/road.jpg"
            alt="Recommended Book"
            layout="fill"
            objectFit="cover"
            className="transition-transform duration-300 ease-in-out transform hover:scale-105"
          />
        </div>
        <p className="text-sm text-gray-700 text-left">
          6 Books About The Best Bridges You Should Read
        </p>
      </aside>
    </div>
  );
}
