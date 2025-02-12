"use client"
import React, { useState, useEffect, useRef } from 'react';
import feedData from '../commonComponents/feedData';  
const DailyFeedCarousel = ({setActivePage}) => {
  const itemsPerPage = 4;
  const totalPages = Math.ceil(feedData.length / itemsPerPage);
  const [currentPage, setCurrentPage] = useState(0);
  const autoDirectionRef = useRef(1);
  const startXRef = useRef(0);
  const isDraggingRef = useRef(false);
  const intervalRef = useRef(null);

  useEffect(() => {
    startAutoMove();
    return () => stopAutoMove();
  }, [totalPages]);

  const startAutoMove = () => {
    stopAutoMove();
    intervalRef.current = setInterval(() => {
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
    }, 5000);
  };

  const stopAutoMove = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  };

  const handleMouseDown = (e) => {
    isDraggingRef.current = true;
    startXRef.current = e.clientX;
  };

  const handleMouseMove = (e) => {
    if (!isDraggingRef.current) return;
    const diff = e.clientX - startXRef.current;
    if (diff > 50) {
      stopAutoMove();
      prevPage();
      isDraggingRef.current = false;
    } else if (diff < -50) {
      stopAutoMove();
      nextPage();
      isDraggingRef.current = false;
    }
  };

  const handleMouseUp = () => {
    isDraggingRef.current = false;
  };
  const nextPage = () => {
    stopAutoMove();
    setCurrentPage((prev) => Math.min(prev + 1, totalPages - 1));
  };

  const prevPage = () => {
    stopAutoMove();
    setCurrentPage((prev) => Math.max(prev - 1, 0));
  };
  return (
    <div className="carousel-container" style={{ overflow: 'hidden', width: '100%'}}>
      <div
        className="flex transition-transform duration-500"
        style={{ transform: `translateX(-${currentPage * 100}%)` }}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
      >
        {Array.from({ length: totalPages }).map((_, pageIndex) => (
          <div key={pageIndex} style={{ minWidth: '100%', display: 'flex', flexDirection: 'column'}}>
            {feedData.slice(pageIndex * itemsPerPage, (pageIndex + 1) * itemsPerPage).map((feed, index) => (
              <div key={index} style={{ textAlign: 'left', padding: '0px 10px', borderBottom: '1px solid var(--primaryUpperNavbarLine)'  }}>
                <p className="text-gray 300 text-textSecondary text-xs uppercase">IN {feed.category}</p>
                <h3 onClick={()=> setActivePage("NewsData")} 
                style={{ fontFamily: 'Oswald, Helvetica, "Nimbus Sans L", sans-serif', fontWeight: 800 , fontWeight:'bold'}}
                className=" text-textSecondary text-lg cursor-pointer hover:underline"
                >{feed.title}</h3>
                <p  style={{ fontFamily: 'Times, "Times New Roman", serif' }} className="text-gray-700 text-textSecondary">{feed.desc}</p>
              </div>
            ))}
          </div>
        ))}
      </div>
      <div className="flex justify-between items-center mt-4 pr-3">
        <a><div className="text-sm font-semibold text-textSecondary cursor-pointer">VIEW MORE POSTS</div></a>
        <div className="flex gap-4 text-lg font-bold">
          <span onClick={prevPage} className={`cursor-pointer text-textSecondary ${currentPage === 0 ? 'text-gray-400 cursor-not-allowed' : 'hover:text-blue-500'}`}>
            &lt;
          </span>
          <span onClick={nextPage} className={`cursor-pointer text-textSecondary ${currentPage === totalPages - 1 ? 'text-gray-400 cursor-not-allowed' : 'hover:text-blue-500'}`}>
            &gt;
          </span>
        </div>
      </div>
    </div>
  );
};

export default DailyFeedCarousel;
