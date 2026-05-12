// import { redis } from "@/lib/redis";
export type Videos = {
    id_video:Number,
    video_src:string, 
    image_src: string,
    video_duration: string,
    name: string,
    category: string,
    rating: string,
    is_premium:boolean, 
    id_actor:Number, 
    add_date:Date
};

export const staticVideos:Videos[] = [
    {
        id_video: 1,
        video_src: "/video/Backbone_preview.mp4",
        image_src: "/defaultimage/defaultImage.png",
        video_duration: "08:00",
        category: "Entertainment",
        rating: "80%",
        name: "Video1",
        is_premium: false,
        id_actor: 1,
        add_date: new Date(),
    },
    {
        id_video: 2,
        video_src: "/video/Backbone_preview.mp4",
        image_src: "/defaultimage/defaultImage.png",
        video_duration: "08:00",
        category: "Fashion",
        rating: "80%",
        name: "Video1",
        is_premium: false,
        id_actor: 1,
        add_date: new Date(),
    },
    {
        id_video: 3,
        video_src: "/video/Backbone_preview.mp4",
        image_src: "/defaultimage/defaultImage.png",
        video_duration: "08:00",
        category: "Fashion",
        is_premium: false,
        name: "Video1",
        rating: "80%",
        id_actor: 1,
        add_date: new Date(),
    },
    {
        id_video: 4,
        video_src: "/video/Backbone_preview.mp4",
        image_src: "/defaultimage/defaultImage.png",
        video_duration: "08:00",
        category: "Entertainment",
        rating: "80%",
        name: "Video1",
        is_premium: false,
        id_actor: 1,
        add_date: new Date(),
    },
    {
        id_video: 5,
        video_src: "/video/Backbone_preview.mp4",
        is_premium: false,
        image_src: "/defaultimage/defaultImage.png",
        video_duration: "08:00",
        rating: "80%",
        name: "Video1",
        category: "News",
        id_actor: 1,
        add_date: new Date(),
    },
    {
        id_video: 6,
        video_src: "/video/Backbone_preview.mp4",
        image_src: "/defaultimage/defaultImage.png",
        video_duration: "08:00",
        rating: "80%",
        name: "Video1",
        category: "News",
        is_premium: false,
        id_actor: 1,
        add_date: new Date(),
    },
    {
        id_video: 7,
        video_src: "/video/Backbone_preview.mp4",
        image_src: "/defaultimage/defaultImage.png",
        video_duration: "08:00",
        rating: "80%",
        name: "Video1",
        category: "International",
        is_premium: false,
        id_actor: 1,
        add_date: new Date(),
    },
    {
        id_video: 8,
        video_src: "/video/Backbone_preview.mp4",
        image_src: "/defaultimage/defaultImage.png",
        video_duration: "08:00",
        rating: "80%",
        name: "Video1",
        category: "International",
        is_premium: false,
        id_actor: 1,
        add_date: new Date(),
    },
    {
        id_video: 9,
        video_src: "/video/Backbone_preview.mp4",
        image_src: "/defaultimage/defaultImage.png",
        video_duration: "08:00",
        rating: "80%",
        name: "Video1",
        category: "Entertainment",
        is_premium: false,
        id_actor: 1,
        add_date: new Date(),
    },
    {
        id_video: 10,
        video_src: "/video/Backbone_preview.mp4",
        image_src: "/defaultimage/defaultImage.png",
        video_duration: "08:00",
        rating: "80%",
        name: "Video1",
        category: "Entertainment",
        is_premium: false,
        id_actor: 1,
        add_date: new Date(),
    },
    {
        id_video: 11,
        video_src: "/video/Backbone_preview.mp4",
        image_src: "/defaultimage/defaultImage.png",
        video_duration: "08:00",
        rating: "80%",
        name: "Video1",
        category: "Entertainment",
        is_premium: false,
        id_actor: 1,
        add_date: new Date(),
    },
    {
        id_video: 12,
        video_src: "/video/Backbone_preview.mp4",
        image_src: "/defaultimage/defaultImage.png",
        video_duration: "08:00",
        category: "Entertainment",
        rating: "80%",
        name: "Video1",
        is_premium: false,
        id_actor: 1,
        add_date: new Date(),
    },
    {
        id_video: 13,
        video_src: "/video/Backbone_preview.mp4",
        image_src: "/defaultimage/defaultImage.png",
        video_duration: "08:00",
        category: "Entertainment",
        rating: "80%",
        name: "Video1",
        is_premium: false,
        id_actor: 1,
        add_date: new Date(),
    },
    {
        id_video: 14,
        video_src: "/video/Backbone_preview.mp4",
        image_src: "/defaultimage/defaultImage.png",
        video_duration: "08:00",
        rating: "80%",
        name: "Video1",
        category: "Entertainment",
        is_premium: false,
        id_actor: 1,
        add_date: new Date(),
    },
    {
        id_video: 15,
        video_src: "/video/Backbone_preview.mp4",
        image_src: "/defaultimage/defaultImage.png",
        video_duration: "08:00",
        rating: "80%",
        name: "Video1",
        category: "Entertainment",
        is_premium: false,
        id_actor: 1,
        add_date: new Date(),
    },
    {
        id_video: 16,
        video_src: "/video/Backbone_preview.mp4",
        image_src: "/defaultimage/defaultImage.png",
        video_duration: "08:00",
        rating: "80%",
        name: "Video1",
        category: "Entertainment",
        is_premium: false,
        id_actor: 1,
        add_date: new Date(),
    },
    {
        id_video: 17,
        video_src: "/video/Backbone_preview.mp4",
        image_src: "/defaultimage/defaultImage.png",
        video_duration: "08:00",
        category: "Entertainment",
        name: "Video1",
        rating: "80%",
        is_premium: false,
        id_actor: 1,
        add_date: new Date(),
    },
];

export async function getAllStaticVideos() {
    return staticVideos;
}



// export async function getVideosService() {
//   // 1️⃣ Check cache
//   const cached = await redis.get("videos");
//   if (cached) {
//     console.log("✅ From Redis Cache");
//     return cached;
//   }

//   console.log("🌐 Fetching fresh data from API...");

//   const res = await fetch("https://thirdparty-api.com/videos");
//   const data = await res.json();

//   // 2️⃣ Save to Redis for 10 min
//   await redis.set("videos", data, { ex: 600 });

//   return data;
// }


let cachedVideos: any[] = [];

async function fetchAllVideos() {
  if (cachedVideos.length) {
    console.log("✅ Returning cached videos");
    return cachedVideos;
  }

  console.log("🌐 Fetching from third-party API...");
  
  const res = await fetch("https://gist.githubusercontent.com/poudyalanil/ca84582cbeb4fc123a13290a586da925/raw/14a27bd0bcd0cd323b35ad79cf3b493dddf6216b/videos.json");
  const data = await res.json();

  cachedVideos = data;

  return cachedVideos;
}

export async function getAllVideosService() {
  const videos = await fetchAllVideos();
  return videos;
}

export async function getVideoByIdService(id: string) {
  const videos = await fetchAllVideos();
  if (videos?.length) {
      return videos.find((v) => v.id === id);
  }
  return [];
}
