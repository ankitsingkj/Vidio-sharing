"use client";
import VideoPlayer from "@/components/VideoPlayer/VideoPlayer";
import { staticVideos } from "@/contants/videos";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";

export default function HomepageCarasauel() {
  const [index, setIndex] = useState(0);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const imageVideoData = staticVideos.slice(0,16); 
  const router = useRouter();

  const imageWidth = 324;
  const visibleCount = 3;
  const maxIndex = imageVideoData.length - visibleCount;

  const handleNext = () => {
    setIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  const handlePrev = () => {
    setIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  };
  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 5000);

    // Cleanup the interval on component unmount
    return () => clearInterval(interval);
  }, []);

  const offset = index * imageWidth;

  return (
    <div 
      className="flex flex-col items-center justify-center bg-[#222222] text-white overflow-hidden w-full max-w-[100vw"
    >
      {/* {carousel element} */}
      <div className="relative w-full max-w-[100vw] h-[200px] flex items-center">
        {/* Prev button */}
        <button
          onClick={handlePrev}
          className="opacity-80 h-[200px] left-0 z-10 bg-amber-600 hover:bg-amber-700 text-white text-4xl px-3"
        >
          {"<"}
        </button>

        {/* Carousel Track */}
        <div className="overflow-hidden w-full">
          <div
            className="flex transition-transform duration-700 ease-in-out"
            style={{
              transform: `translateX(-${offset}px)`,
              width: `${imageVideoData.length * imageWidth}px`,
            }}
          >
            {imageVideoData.map((item, i) => (<div key={i} onMouseEnter={() => setHoveredIndex(i)} onMouseLeave={() => setHoveredIndex(null)} className="h-[200px]">
                {hoveredIndex === i ? (
                  <div 
                    className={`flex-shrink-0 grid place-items-center w-[90vw] sm:w-[48vw] md:w-[32vw] lg:w-[320px] mx-[2px] h-full cursor-pointer`}
                    onClick={() => router.push(`/video/${item.name}`)}
                  >
                    <VideoPlayer src={item.video_src}/>
                  </div>
                  ) : (
                  <div
                    className={`flex-shrink-0 w-[90vw] sm:w-[48vw] md:w-[32vw] lg:w-[320px] mx-[2px]`}
                  >
                    <img
                      src={item.image_src}
                      alt={`Carousel ${i}`}
                      className={`w-full h-[200px] object-cover shadow-lg rounded`}
                    />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Next button */}
        <button
          onClick={handleNext}
          className=" opacity-80 ms-[2px] h-[200px] right-0 z-10 bg-amber-600 hover:bg-amber-700 text-white text-4xl px-3"
        >
          {">"}
        </button>
      </div>
    </div>
  );
}
