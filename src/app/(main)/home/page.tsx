"use client"
import HomepageCarasauel from "@/components/layout/Carasauel";
import Sidebar from "@/components/layout/Sidebar";
import VideoCard from "@/components/videocards/VideoCard";
import { staticVideos } from "@/contants/videos";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Home() {
  const imageVideoData = staticVideos.slice(0,16); 
  const router = useRouter();

  return (
    <div>
      <HomepageCarasauel/>
      {/* {Main Section} */}
      <div className="flex gap-5 bg-[#222222]">
        <div className="w-[73%] p-4">
          <div 
              className=" bg-[#282828] text-white shadow-[0px_4px_12px_rgba(0,0,0,0.2)] p-2 border-l-8 border-l-[#FF3565]"
            >
            <p className='flex justify-between items-center'>
                <span>Videos being watched</span> 
                <button 
                 className="text-white text-[12px] font-bold px-2 py-1 rounded bg-gradient-to-b from-[#403939] to-[#FF3565]"
                >+ More videos</button>
            </p>
          </div>
            {imageVideoData.length > 0 ? (
              <div className="grid grid-cols-4 gap-5 my-5">
                {imageVideoData.map((item, i) => (
                  <div className="cursor-pointer" key={"homepage_video_watched" + i} onClick={() => router.push(`/video/${item.name}`)}>
                    <VideoCard imageUrl={item.image_src ? item.image_src: "/defaultimage/defaultImage.png"} duration={item.video_duration ? item.video_duration : '00:00'} videoUrl={item.video_src ? item.video_src : '/video/Backbone_preview.mp4'} i={i}/>
                  </div>
                ))} 
              </div>
            ) : (
              <div className="text-white mx-auto my-5">
                <p>No videos found</p>
              </div> 
            )}
          <div>
            <Image src="/ads/ads4.png" width={1000} height={100} alt="" />
          </div>
          <div 
            className=" bg-[#282828] text-white shadow-[0px_4px_12px_rgba(0,0,0,0.2)] p-2 border-l-8 border-l-[#FF3565] my-5"
          >
            <p className='flex justify-between items-center'>
              <span>Longest videos</span> 
              <button 
                className="text-[12px] font-bold p-1 bg-gradient-to-b from-[#403939] to-[#FF3565]"
              >+ More videos</button>
            </p>
          </div>
          {imageVideoData.length > 0 ? (
            <div className="grid grid-cols-4 gap-5 my-5">
              {imageVideoData.map((item, i) => (
                <div key={"homepage_longest_video" + i} onClick={() => router.push(`/video/${item.name}`)} className="cursor-pointer">
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
