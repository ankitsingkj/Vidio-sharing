"use client";

import Hls from "hls.js";
import { useEffect, useRef } from "react";

interface VideoRendererProps {
  src: string;
  sound?: boolean; // optional prop
}

export default function VideoRenderer({
  src,
  sound = false,
}: VideoRendererProps) {
  const videoRef = useRef<HTMLVideoElement>(null);

  const allowedExtensions = [".mp4", ".mkv", ".webm"];

  const isAllowed = allowedExtensions.some((ext) =>
    src.toLowerCase().includes(ext)
  );

  // HLS Support
  useEffect(() => {
    if (src.includes(".m3u8") && videoRef.current) {
      if (Hls.isSupported()) {
        const hls = new Hls();

        hls.loadSource(src);
        hls.attachMedia(videoRef.current);

        return () => {
          hls.destroy();
        };
      } else if (
        videoRef.current.canPlayType("application/vnd.apple.mpegurl")
      ) {
        videoRef.current.src = src;
      }
    }
  }, [src]);

  // Common video props
  const videoProps = {
    autoPlay: true,
    playsInline: true,
    loop: true,
    muted: !sound,
    controls: sound,
    className: "w-full h-full object-cover",
  };

  // Normal Video Files
  if (isAllowed) {
    return (
      <video {...videoProps}>
        <source src={src} />
      </video>
    );
  }

  // HLS Video
  if (src.includes(".m3u8")) {
    return <video ref={videoRef} {...videoProps} />;
  }

  // iframe fallback
  return (
    <iframe
      src={src}
      width="100%"
      height="100%"
      allow="autoplay; encrypted-media"
      className="w-full h-full border-0"
    />
  );
}