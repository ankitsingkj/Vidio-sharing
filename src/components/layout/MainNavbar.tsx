"use client"
import Image from 'next/image'
import Link from "next/link";
import { usePathname } from 'next/navigation';
import { Home, Grid, Tag } from "lucide-react";


const menuItems = [
  { name: "Home", href: "/home", icon: Home },
  { name: "Categories", href: "/categories", icon: Grid },
  { name: "Tags", href: "/tags", icon: Tag },
];

export default function Navbar(){
    const path = usePathname();
    const user = {
      fullName: "John Doe",
      username: "johndoe",
      email: "john@example.com",
      phone: "+91 9876543210",
      avatar: "/profile/avatar.png",
    };

    return (<>
        <header>
            <nav className="w-full overflow-x-hidden">
                {/* Top Bar */}
                <div className="flex flex-wrap justify-between items-center w-full p-2 bg-[#111111]">
                    <div className="flex items-center gap-2 flex-wrap">
                        <span className="text-[#6d6d6d]">Follow us:</span>
                        <div className="hover:bg-[#ff3565] rounded-2xl p-1">
                            <Image src="/navbar/instagram.svg" height={30} width={30} alt="Insta Logo" />
                        </div>
                        <div className="hover:bg-[#ff3565] rounded-2xl p-1">
                            <Image src="/navbar/discord.svg" height={30} width={30} alt="Discord Logo" />
                        </div>
                    </div>

                    <div className="flex items-center gap-3 flex-wrap">
                        <div className="flex items-center gap-2">
                          {/* Clickable Avatar */}
                          <Link
                            href="/profile"
                            className="w-10 h-10 rounded-full overflow-hidden border-2 border-[#ff3565] hover:scale-105 transition"
                          >
                            <Image
                              src={user.avatar}
                              alt="Profile"
                              width={40}
                              height={40}
                              className="w-full h-full object-cover"
                            />
                          </Link>

                          <span className="text-[#989898] font-semibold">
                            Welcome Guest
                          </span>
                        </div>
                        <Link
                          href="/login"
                          className="text-[#bababa] font-semibold cursor-pointer hover:text-white"
                        >
                          Login
                        </Link>
                        <p className="text-[#bababa] font-semibold">Or</p>
                        <Link
                          href="/register"
                          className="text-[#bababa] font-semibold cursor-pointer hover:text-white"
                        >
                          Register
                        </Link>
                    </div>
                </div>

                {/* Middle Section */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-center w-full p-4 md:p-8 bg-[#1f1f1f]">
                    {/* Logo */}
                    <div className="flex justify-center md:justify-start">
                    <Image
                        src="/website_logo.png"
                        alt="Logo"
                        width={300}
                        height={80}
                        className="max-w-full h-[120px]"
                    />
                    </div>

                    {/* Search */}
                    <div className="flex items-center w-full md:w-auto h-9">
                        <input
                            type="text"
                            className="bg-[#282828] w-full md:w-[80%] custom-inner-shadow shadow-inner border border-[#544e4e] h-full text-white p-4"
                            placeholder="Search..."
                        />
                        <div className="bg-[#ff3565] w-10 h-full grid place-items-center">
                            <Image src="/navbar/search.svg" alt="Search" width={20} height={20} />
                        </div>
                    </div>

                    {/* Banner */}
                    <div className="flex justify-center md:justify-end">
                        <Image
                            src="/ads/ads1.png"
                            alt="Banner"
                            width={410}
                            height={210}
                            className="max-w-full h-auto"
                        />
                    </div>
                </div>

                {/* Bottom Menu */}
                <div className="bg-gradient-to-b from-[#2b2b2b] to-[#000000] via-[#2b2b2b] text-white overflow-x-auto">
                    <ul className="flex gap-2">
                      {menuItems.map((item) => {
                        const Icon = item.icon;
                        const isActive = path === item.href;

                        return (
                          <li key={item.name} className="flex-shrink-0">
                            <a
                              href={item.href}
                              className={`flex items-center gap-2 p-4 transition-colors hover:bg-[#ff3565] ${isActive ? "bg-[#ff3565]" : ""}`}
                            >
                              <Icon className="w-5 h-5" />
                              {item.name}
                            </a>
                          </li>
                        );
                      })}
                      <li className={`flex items-center gap-2 p-4 transition-colors hover:bg-[#ff3565] ${path === "/premium" ? "bg-[#ff3565]" : ""}`}>
                        <a href="/premium" 
                        className="flex items-center gap-1">
                            <Image
                                src="/navbar/star.svg"
                                alt="Star"
                                width={15}
                                height={15}
                                className="w-[15px] h-[15px] object-contain"
                            />
                            <span>Premium</span>
                        </a>
                    </li>
                  </ul>
                </div>
            </nav>
        </header>
    </>);
}