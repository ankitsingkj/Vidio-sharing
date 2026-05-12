"use client"
import Sidebar from "@/components/layout/Sidebar";
import VideoCard from "@/components/videocards/VideoCard";
import { staticVideos } from "@/contants/videos";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Premium() {
    const imageVideoData = staticVideos;
      const router = useRouter();

    return (<>
        <div className="bg-[#222222]">
            <div className="flex gap-2 py-4 bg-[#222222]">
                <div className="w-[73%] p-4">
                    <div 
                        className=" bg-[#282828] text-white shadow-[0px_4px_12px_rgba(0,0,0,0.2)] p-2 border-l-8 border-l-[#FF3565]"
                    >
                    <p className='flex items-center'>
                        <Image src="/navbar/star.svg" className="me-1 inline-block" height={15} width={15} alt="star"/> 
                        <span>Premium Videos</span> 
                    </p>
                    </div>
                    {imageVideoData.length > 0 ? (
                      <div className="grid grid-cols-4 gap-5 my-5">
                        {imageVideoData.map((item, i) => (
                          <div onClick={() => router.push(`/video/${item.name}`)} key={"homepage_longest_video" + i} className="cursor-pointer">
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
    </>);
}