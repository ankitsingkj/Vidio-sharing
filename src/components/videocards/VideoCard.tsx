"use client";
import VideoPlayer from "@/components/VideoPlayer/VideoPlayer";
import { useState } from "react";

export default function VideoCard({
    imageUrl, 
    videoUrl, 
    duration, 
    i 
}:{
    imageUrl:string, 
    videoUrl:string, 
    duration:string, 
    i:number, 
}){
    const [isHovered, setIsHovered] = useState(false);
    return (<>
        <div 
        className="h-25 w-full relative" 
        onMouseEnter={() => setIsHovered(true)} 
        onMouseLeave={() => setIsHovered(false)}
        >
            {(isHovered)? (
                <div className="w-full h-full">
                    <VideoPlayer src={videoUrl}/>
                </div>
            ):(
                <div className="w-full h-full relative">
                    <img
                        src={imageUrl}
                        alt={`Carousel ${i}`}
                        className="w-full h-full object-cover"
                    />
                    <div className="bg-black text-white absolute right-0 bottom-0.5 px-1 text-sm">{duration}</div>
                </div>
            )}
        </div>
    </>);
}