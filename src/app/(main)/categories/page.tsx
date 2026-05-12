"use client";
import Sidebar from "@/components/layout/Sidebar";
import { staticVideos } from "@/contants/videos";
import { useRouter } from "next/navigation";

export default function Categories() {
    const imageVideoData = staticVideos;
    const router = useRouter();

    return (<>
        <div>
            <div className="flex gap-2 bg-[#222222]">
                <div className="w-[73%] p-4">
                    <div 
                        className=" bg-[#282828] text-white shadow-[0px_4px_12px_rgba(0,0,0,0.2)] p-2 border-l-8 border-l-[#FF3565]"
                    >
                    <p className='flex justify-between items-center'>
                        <span>Categories</span> 
                    </p>
                    </div>
                    <div className="grid grid-cols-3 gap-5 my-5">
                        {imageVideoData.map((item, i) => (
                          <div
                            key={i}
                            className="m-3 cursor-pointer"
                            onClick={() => router.push(`/categories/${item.category}`)}
                          >
                              <img
                                src={item.image_src}
                                alt={`Carousel ${i}`}
                                className=" w-full h-full"
                              />
                              <p className="text-white text-center bg-gradient-to-b from-[#282727] to-[#424141] h-8 text-xl align-middle">
                                {item.category}
                              </p>
                          </div>
                        ))} 
                    </div>
                </div>
                <div className="w-[27%] p-4">
                    <Sidebar/>
                </div>
            </div>
        </div>
    </>);
}