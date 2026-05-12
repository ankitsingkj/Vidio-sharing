"use client";
import VideoPlayer from "@/components/VideoPlayer/VideoPlayer";
import { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function SidebarVideoCard({
        thumbnailUrl, 
        videoUrl,
        rating,
        i 
    }:{
        thumbnailUrl:string,  
        videoUrl:string,
        rating: string,  
        i:number, 
    }) {
    const [isHovered, setIsHovered] = useState(false);
    const router = useRouter();

    return (<>
        <div 
        className="h-20 w-full relative bg-amber-600" 
        onMouseEnter={() => setIsHovered(true)} 
        onMouseLeave={() => setIsHovered(false)}
        >
            {(isHovered)? (
                <div className="w-full h-full" onClick={() => router.push(`/video/Video1`)}>
                    <VideoPlayer src={videoUrl}/>
                </div>
            ):(
                <div className="w-full h-full">
                    <img
                        src={thumbnailUrl}
                        alt={`SideBar Video ${i}`}
                        className="w-full h-full object-cover"
                    />
                </div>
            )}
            <p className="text-white text-center bg-gradient-to-b from-[#282727] to-[#424141] h-8 text-xl align-middle">
              {rating}
            </p>
        </div>
    </>);
}