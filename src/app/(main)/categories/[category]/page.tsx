"use client";
import Sidebar from "@/components/layout/Sidebar";
import VideoCard from "@/components/videocards/VideoCard";
import { staticVideos } from "@/contants/videos";
import { Folder } from "lucide-react";
import { useRouter } from "next/navigation";
import { use } from "react";

export default function CategoryPage({
  params,
}: {
  params: Promise<{ category: string }>;
}) {
  const { category } = use(params);
  const imageVideoData = staticVideos.slice(0,16); 
  const router = useRouter();

  return (
    <div className="flex gap-2 bg-[#222222]">
      <div className="w-[73%] p-4">
        <div className="bg-[#282828] text-white shadow-[0px_4px_12px_rgba(0,0,0,0.2)] p-2 border-l-8 border-l-[#FF3565]">
          <div className="flex gap-3 items-center">
            <Folder />
            <p>Category: {category}</p>
          </div>
        </div>
        {imageVideoData.length > 0 ? (
          <div className="grid grid-cols-4 gap-5 my-5">
            {imageVideoData.map((item, i) => (
              <div className="cursor-pointer m-1" key={"homepage_video_watched" + i} onClick={() => router.push(`/video/${item.name}`)}>
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
        <Sidebar />
      </div>
    </div>
  );
}