import React, { useState, useEffect, useRef } from 'react';
const feedData = [
  { category: "SCIENCE", title: "Which New York City Subway MetroCard to Buy?", desc: "Duis eleifend nunc sit amet mi dapibus ornare mauris eget mattis.." },
  { category: "ARTS, POLITICS", title: "Physiological Responses to Rock Climbing in Young Climbers", desc: "Sed nec blandit nibh mauris eget mattis.." },
  { category: "ECONOMY", title: "A Better Way to Educate Primary School Children", desc: "Vivamus laoreet non mauris eget mattis mauris eget mattis." },
  { category: "In Art", title: "A Better Way to Educate Primary School Children", desc: "Vivamus laoreet non mauris eget mattis mauris eget mattis.." },
  { category: "TECH", title: "Latest Trends in Technology", desc: "Cras vehicula lorem et ex facilisis, quis dictum ex blandit." },
  { category: "LIFESTYLE", title: "5 Ways to Improve Your Daily Routine", desc: "Proin ut ante vitae enim lacinia sollicitudin mauris eget mattis.." },
  { category: "SPORTS", title: "Local Team Clinches Victory in Finals", desc: "Vestibulum ante ipsum primis in faucibus orci luctus mauris eget mattis.." },
  { category: "ENTERTAINMENT", title: "Exclusive Interview with a Rising Star", desc: "Nam facilisis, eros nec eleifend vulputate mauris eget mattis.." },
];

const DailyFeedCarousel = () => {
  const itemsPerPage = 4;
  const totalPages = Math.ceil(feedData.length / itemsPerPage);
  const [currentPage, setCurrentPage] = useState(0);
  const autoDirectionRef = useRef(1);
  const startXRef = useRef(0);
  const isDraggingRef = useRef(false);
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPage((prev) => {
        let newPage = prev + autoDirectionRef.current;
        if (newPage >= totalPages) {
          autoDirectionRef.current = -1;
          newPage = prev + autoDirectionRef.current;
        } else if (newPage < 0) {
          autoDirectionRef.current = 1;
          newPage = prev + autoDirectionRef.current;
        }
        return newPage;
      });
    }, 3000);

    return () => clearInterval(interval);
  }, [totalPages]);

  const handleMouseDown = (e) => {
    isDraggingRef.current = true;
    startXRef.current = e.clientX;
  };

  const handleMouseMove = (e) => {
    if (!isDraggingRef.current) return;
    const diff = e.clientX - startXRef.current;

    if (diff > 50) {
      prevPage();
      isDraggingRef.current = false;
    } else if (diff < -50) {
      nextPage();
      isDraggingRef.current = false;
    }
  };

  const handleMouseUp = () => {
    isDraggingRef.current = false;
  };

  const nextPage = () => {
    setCurrentPage((prev) => {
      const next = Math.min(prev + 1, totalPages - 1);
      autoDirectionRef.current = 1; 
      return next;
    });
  };

  const prevPage = () => {
    setCurrentPage((prev) => {
      const prevPage = Math.max(prev - 1, 0);
      autoDirectionRef.current = -1;
      return prevPage;
    });
  };

  return (
    <div
      className="carousel-container"
      style={{
        overflow: 'hidden',
        width: '100%',
      }}
    >
        <div
          className="flex transition-transform duration-500"
          style={{ transform: `translateX(-${currentPage * 100}%)`}}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
        >
          {Array.from({ length: totalPages }).map((_, pageIndex) => (
            <div
              key={pageIndex}
              style={{
                minWidth: '100%',
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              {feedData.slice(pageIndex * itemsPerPage, (pageIndex + 1) * itemsPerPage)
                .map((feed, index) => (
                  <div
                    key={index}
                    style={{
                      textAlign: 'left',
                      padding: '10px',
                      borderBottom: '1px solid gray',
                    }}
                  >
                    <p className="text-gray-500 text-xs uppercase">
                      IN {feed.category}
                    </p>
                    <h3 className="font-extrabold text-lg">{feed.title}</h3>
                    <p className="text-gray-700">{feed.desc}</p>
                  </div>
                ))}
            </div>
          ))}
        </div>
      <div>
      <div className="flex justify-between items-center mt-4 pr-3">
          <div className="text-sm font-semibold cursor-pointer">
            VIEW MORE POSTS
          </div>
          <div className="flex gap-4 text-lg font-bold">
            <span 
              onClick={prevPage} 
              className={`cursor-pointer ${currentPage === 0 ? 'text-gray-400 cursor-not-allowed' : 'hover:text-blue-500'}`}
            >
              &lt;
            </span>
            <span 
              onClick={nextPage} 
              className={`cursor-pointer ${currentPage === totalPages - 1 ? 'text-gray-400 cursor-not-allowed' : 'hover:text-blue-500'}`}
            >
               &gt;
                </span>
              </div>
            </div>
          </div>
        </div>
          );
        };

export default DailyFeedCarousel;
