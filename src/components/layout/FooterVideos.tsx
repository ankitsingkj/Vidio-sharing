import { staticVideos } from "@/contants/videos";
import FooterVideoCard from "../videocards/FooterVideoCard";
import { useRouter } from "next/navigation";

export default function FooterVideo(){
    const staticData = staticVideos.slice(0,4);
    const router = useRouter();

    return (<>
        <div className="grid grid-cols-2 gap-2">
            {staticData.map((item,index)=>{
                return (<div key={"Footer" + index} onClick={() => router.push(`/video/Video1`)} className="w-full h-full m-4 cursor-pointer">
                    <FooterVideoCard videoUrl={item.video_src} thumbUrl={item.image_src} rating={item.rating} i={index}/>
                </div>);
            })}
        </div>
    </>);
}