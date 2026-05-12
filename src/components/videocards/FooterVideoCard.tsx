"use client";
import VideoPlayer from "@/components/VideoPlayer/VideoPlayer";
import { useState } from "react";

export default function FooterVideoCard({
        thumbUrl, 
        videoUrl, 
        rating,
        i 
    }:{
        videoUrl:string,
        thumbUrl:string,
        rating: string,
        i:number,
    }) {
    const [isHovered, setIsHovered] = useState(false);
    return (<>
        <div 
        className="h-17 w-full relative" 
        onMouseEnter={() => setIsHovered(true)} 
        onMouseLeave={() => setIsHovered(false)}
        >
            {(isHovered) ? (
                <div className="w-full h-full">
                    <VideoPlayer src={videoUrl}/>
                </div>
            ):(
                <div className="w-full h-full">
                    <img
                        src={thumbUrl}
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