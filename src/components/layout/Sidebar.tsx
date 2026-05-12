"use client"
import { staticVideos } from '@/contants/videos';
import Image from 'next/image';
import SidebarVideoCard from '../videocards/SidebarVideoCard';

export default function Sidebar() {
    const staticData = staticVideos.slice(0,6);

    return (<>
        <div>
            <div>
                <Image 
                src="/ads/ads5.png" height={350}
                width={350} 
                alt="SideBar Ad1"/>
            </div>
            <div 
            className="mt-4 bg-[#282828] text-white shadow-[0px_4px_12px_rgba(0,0,0,0.2)] p-2 border-l-8 border-l-[#FF3565]"
            ><p>Latest videos</p></div>
            <div className="grid grid-cols-2 gap-2 place-items-center">
                {staticData.map((item,index)=>{
                    return (<div key={"sidebar"+index} className='w-full m-5'>
                        <SidebarVideoCard thumbnailUrl={item.image_src} videoUrl={item.video_src} rating={item.rating} i={index}/>
                    </div>);
                })}
            </div>
            <div 
                className="mt-8 bg-[#282828] text-white shadow-[0px_4px_12px_rgba(0,0,0,0.2)] p-2 border-l-8 border-l-[#FF3565]"
            >
                <p className='flex justify-between items-center'>
                    <span>Random videos</span> 
                    <button 
                    className="text-2xl bg-[#FF3565] h-8 w-8 bg-gradient-to-b from-[#403939] to-[#FF3565]"
                    >+</button>
                </p>
            </div>
            <div className="grid grid-cols-2 gap-2 place-items-center">
                {staticData.map((item,index)=>{
                    return (<div key={"sidebar"+index} className='w-full m-5'>
                        <SidebarVideoCard thumbnailUrl={item.image_src} videoUrl={item.video_src} rating={item.rating} i={index}/>
                    </div>);
                })}
            </div>
        </div>
    </>);
}