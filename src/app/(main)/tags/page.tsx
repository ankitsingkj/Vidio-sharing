import Sidebar from "@/components/layout/Sidebar";
import { constantTags } from "@/contants/tags";
import Image from "next/image";

export default function Tags() {
    const tags = constantTags;

    return (<>
        <div>
            <div className="flex gap-2 bg-[#222222]">
                <div className="w-[73%] p-4">
                    <div 
                        className=" bg-[#282828] text-white shadow-[0px_4px_12px_rgba(0,0,0,0.2)] p-2 border-l-8 border-l-[#FF3565]"
                    >
                    <p className='flex justify-between items-center'>
                        <span>Tags</span> 
                    </p>
                    </div>
                    <div className="flex flex-wrap gap-2 my-5">
                        {tags.map((item, index)=>{
                          return <span key={item + index}>
                              <button   
                              className="hover:bg-[#ff3565] cursor-pointer text-xl font-semibold px-2 py-1 bg-gradient-to-b from-[#3e3e3e] text-white to-[#555555]"
                              >
                                <span>
                                  <Image className="inline-block me-1" src="/globalsvg/tag.svg" height={15} width={15} alt="tag"></Image>
                                  {item}
                                </span>
                              </button>
                          </span>
                        })}
                    </div>
                </div>
                <div className="w-[27%] p-4">
                    <Sidebar/>
                </div>
            </div>
        </div>
    </>);
}