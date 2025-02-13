const Footer = () => {
  return (
    <div className="bg-gray-50 py-10 px-5 border-t border-black">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-black">
          <div>
            <h2 className="text-3xl font-bold italic">
              The <span className="font-extrabold">NEWSPAPER</span>
            </h2>
            <ul className="mt-4 space-y-2 italic">
              <li>Reader Center</li>
              <li>Tools & Services</li>
              <li>Times Topics</li>
              <li>T.N. Events Guide</li>
              <li>Times Journeys</li>
              <li>Subscribe The Newspaper</li>
              <li>Our Contacts</li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold uppercase">News</h3>
            <ul className="mt-4 space-y-2 italic">
              <li>Arts</li>
              <li>Economy</li>
              <li>Fashion & Style</li>
              <li>Food</li>
              <li>Health</li>
              <li>Lifestyle</li>
              <li>Politics</li>
              <li>Science</li>
              <li>Sports</li>
              <li>Technology</li>
              <li>Travel</li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold uppercase">Opinion</h3>
            <ul className="mt-4 space-y-2 italic">
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

          <div>
            <h3 className="font-bold uppercase">Most Popular</h3>
            <ul className="mt-4 space-y-2 italic">
              <li>Art & Design</li>
              <li>World</li>
              <li>Blog</li>
              <li>Business</li>
              <li>Culture</li>
              <li>Lifestyle</li>
              <li>N.Y.</li>
              <li>Newspaper</li>
              <li>Photos</li>
              <li>Post</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
