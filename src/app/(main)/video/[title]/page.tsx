import HomepageCarasauel from "@/components/layout/Carasauel";
import Sidebar from "@/components/layout/Sidebar";
import VideoCard from "@/components/videocards/VideoCard";
import { staticVideos } from "@/contants/videos";
import Image from "next/image";
import VideoPlayer from "@/components/VideoPlayer/VideoPlayer";

export default async function VideoPage() {
  const imageVideoData = staticVideos.slice(0,16); 
  return (
    <div>
      {/* {Main Section} */}
      <div className="flex gap-5 bg-[#222222]">
        <div className="w-[73%] p-4">
          <div className="w-full aspect-video overflow-hidden rounded-xl bg-black">
            <VideoPlayer
              src="/video/Backbone - Hardy Sandhu Full Hd.mp4"
              sound={true}
            />
          </div>
          <div className="my-6">
            <Image src="/ads/ads7.png" width={1000} height={100} alt="" />
          </div>
          <div className="w-full bg-[#1f1f1f] text-white rounded-lg overflow-hidden shadow-lg">
          {/* Header */}
          <div className="border-l-4 border-pink-500 p-4 md:p-6">
            <h1 className="text-lg md:text-3xl font-semibold leading-snug">
              Video Title Goes Here
            </h1>

            {/* Tabs */}
            <div className="mt-4 flex flex-wrap items-center gap-6 border-t border-gray-700 pt-4">
              <button className="flex items-center gap-2 text-gray-300 hover:text-white">
                👍 <span>Like</span>
              </button>

              <button className="flex items-center gap-2 text-gray-300 hover:text-white border-b-2 border-pink-500 pb-2">
                ℹ️ <span>About</span>
              </button>

              <button className="flex items-center gap-2 text-gray-300 hover:text-white">
                ↗ <span>Share</span>
              </button>
            </div>
          </div>

          {/* Content */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 p-4 md:p-6">
            
            {/* Left Stats */}
            <div>
              <h2 className="text-2xl font-bold">4K</h2>
              <p className="text-gray-400 mb-4">views</p>

              {/* Progress */}
              <div className="w-full h-4 bg-gray-700 rounded overflow-hidden">
                <div className="w-[95%] h-full bg-pink-500"></div>
              </div>

              <div className="mt-3 flex items-center justify-between text-gray-300 text-sm">
                <span>95%</span>

                <div className="flex gap-4">
                  <span>👍 1K</span>
                  <span>👎 75</span>
                </div>
              </div>
            </div>

            {/* Right Details */}
            <div className="md:col-span-2 space-y-4">
              <div className="flex items-center gap-2 text-gray-300">
                📅
                <span>Date: February 19, 2026</span>
              </div>

              <div className="flex items-center gap-2 text-gray-300 flex-wrap">
                ⭐
                <span>
                  Creator:
                  <span className="text-pink-500 ml-1">Hardy</span> /
                  <span className="text-pink-500 ml-1">Hardy Sandhu</span>
                </span>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-3 pt-2">
                {["music", "punjabi", "hardy", "popular"].map((tag) => (
                  <span
                    key={tag}
                    className="bg-pink-500 px-3 py-1 rounded text-sm font-medium"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div 
          className="my-8 bg-[#282828] text-white shadow-[0px_4px_12px_rgba(0,0,0,0.2)] p-2 border-l-8 border-l-[#FF3565]"
          >
          <p className='flex justify-between items-center'>
              <span>Videos being watched</span> 
              <button 
              className="bg-[#FF3565] text-[12px] font-bold p-1 bg-gradient-to-b from-[#403939] to-[#FF3565]"
              >+ Related Videos</button>
          </p>
        </div>
          {imageVideoData.length > 0 ? (
            <div className="grid grid-cols-4 gap-5 my-5">
              {imageVideoData.map((item, i) => (
                <div key={"homepage_video_watched" + i}>
                  <VideoCard imageUrl={item.image_src ? item.image_src: "/defaultimage/defaultImage.png"} duration={item.video_duration ? item.video_duration : '00:00'} videoUrl={item.video_src ? item.video_src : '/video/Backbone_preview.mp4'} i={i}/>
                </div>
              ))} 
            </div>
          ) : (
            <div className="text-white mx-auto my-5">
              <p>No videos found</p>
            </div> 
          )}
        </div>
        <div className="w-[27%] p-4">
          <Sidebar/>
        </div>
      </div>
    </div>
  );
}
