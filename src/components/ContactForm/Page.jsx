import React from "react";

export default function ContactForm() {
  return (
    <div
      className="flex flex-col md:flex-row gap-8 text-black p-6 max-w-4xl mx-auto"
    >
      <div className="md:w-1/3 space-y-4">
        <h2 className="font-bold text-lg">CONTACTS</h2>

        <p className="flex items-center gap-2">
          <svg
            className="w-5 h-5 text-black"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
          </svg>
          Thomas Williams
        </p>

        <p className="flex items-center gap-2">
          <svg
            className="w-8 h-8 text-2xl text-black"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5S10.62 6.5 12 6.5 14.5 7.62 14.5 9 13.38 11.5 12 11.5z" />
          </svg>
          Brooklyn, 10036 New York, United States
        </p>

        <p className="flex items-center gap-2">
          <svg
            className="w-5 h-5 text-4xl scale-125  text-2xl text-black"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M6.62 10.79a15.465 15.465 0 006.59 6.59l2.2-2.2a1 1 0 011.06-.27c1.12.36 2.33.55 3.53.55a1 1 0 011 1v3.5a1 1 0 01-1 1A19 19 0 012 5a1 1 0 011-1H6.5a1 1 0 011 1c0 1.2.19 2.41.55 3.53a1 1 0 01-.27 1.06l-2.2 2.2z" />
          </svg>
          +1 222 333 444
        </p>

        <p className="flex items-center gap-2">
          <svg
            className="w-5 h-5 text-black"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M4 4h16v2H4V4zm0 4h16v2H4V8zm0 4h10v2H4v-2z" />
          </svg>
          <a
            href="mailto:email@example.com"
            className="italic text-gray-600 hover:underline"
          >
            email@example.com
          </a>
        </p>

        <p className="flex items-center gap-2">
          <svg
            className="w-5 h-5 text-black"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M12 2a10 10 0 00-6.36 17.64A10 10 0 1012 2zm-1 15v-2h2v2h-2zm2-4h-2V7h2v6z" />
          </svg>
          <a
            href="https://website.com"
            className="italic text-gray-600 hover:underline"
          >
            website.com
          </a>
        </p>

        <p className="flex items-center gap-2">
          <svg
            className="w-12 h-12 text-2xl text-black"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M12 4C7.59 4 4 7.59 4 12s3.59 8 8 8 8-3.59 8-8-3.59-8-8-8zm-1 13H9v-2h2v2zm0-4H9V7h2v6z" />
          </svg>
          Monday - Friday: 7:30 am - 5:00 pm, Saturday: 8:00 am - 3:00 pm
        </p>
      </div>

      <div className="md:w-2/3">
        <form className="space-y-4">
          <div>
            <label className="block text-gray-700 text-sm font-bold mb-2">
              YOUR NAME (REQUIRED)
            </label>
            <input
              type="text"
              className="w-full p-2 border border-gray-300 rounded"
              required
            />
          </div>
          <div>
            <label className="block text-gray-700 text-sm font-bold mb-2">
              YOUR EMAIL (REQUIRED)
            </label>
            <input
              type="email"
              className="w-full p-2 border border-gray-300 rounded"
              required
            />
          </div>
          <div>
            <label className="block text-gray-700 text-sm font-bold mb-2">
              YOUR MESSAGE
            </label>
            <textarea
              className="w-full p-2 border border-gray-300 rounded h-32"
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-black text-white px-4 py-2 rounded hover:bg-gray-800"
          >
            SEND
          </button>
        </form>
      </div>
    </div>
  );
}
