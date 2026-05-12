"use client";
import Image from "next/image"
import FooterVideo from "./FooterVideos";

export default function Footer(){
    return (<>
        <footer className="bg-[#222222] text-white shadow-[0px_4px_12px_rgba(0,0,0,1)]">
            {/* Top Banner */}
            <div className="p-4 md:p-8 grid place-items-center">
              <Image
                  src="/ads/ads2.png"
                  alt="Banner"
                  width={600}
                  height={210}
                  className="w-full max-w-[600px] h-auto"
              />
            </div>

            {/* Middle Grid Content */}
            <div className="px-4 md:px-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
                <div className="p-2">
                    <FooterVideo/>
                </div>
                <div>
                    <Image
                        src="/ads/ads3.png"
                        alt="Banner"
                        width={500}
                        height={400}
                        className="w-full h-auto"
                    />
                </div>
                <div>
                    <Image
                        src="/ads/ads3.png"
                        alt="Banner"
                        width={500}
                        height={400}
                        className="w-full h-auto"
                    />
                </div>
                <div className="p-2">
                    <FooterVideo/>
                </div>
            </div>

            {/* Footer Navigation */}
            <div className="py-6 px-4 md:px-8 flex justify-center">
                <nav>
                    <ul className="flex flex-wrap justify-center gap-4 md:gap-8 text-sm md:text-base">
                        {["18 U.S.C 2257", "DMCA", "Privacy Policy", "Terms of Use"].map((item) => (
                            <li key={item} className="text-red-500 hover:underline">
                                <a href="#">{item}</a>
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>

            {/* Bottom Text */}
            <div className="pb-6 px-4 text-center text-[#ccc] text-sm">
                <p>All rights reserved. Powered by WP-Script.com</p>
            </div>
        </footer>

    </>);
}