"use client";
import { cn } from "@/lib/utils";
import {
  Code,
  ImageIcon,
  LayoutDashboard,
  MessageSquare,
  MusicIcon,
  Settings,
  VideoIcon,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";

const routes = [
  {
    label: "Dashboard",
    icon: LayoutDashboard,
    color: "text-sky-500",
    href: "/dashboard",
  },
  {
    label: "Conversation",
    icon: MessageSquare,
    color: "text-blue-500",
    href: "/conversation",
  },
  {
    label: "Image Generation",
    icon: ImageIcon,
    color: "text-pink-700",
    href: "/image",
  },
  {
    label: "Video Generation",
    icon: VideoIcon,
    color: "text-orange-700",
    href: "/video",
  },
  {
    label: "Music Generation",
    icon: MusicIcon,
    color: "text-emerald-500",
    href: "/music",
  },
  {
    label: "Code Generation",
    icon: Code,
    color: "text-green-500",
    href: "/code",
  },
  {
    label: "Setting",
    icon: Settings,
    href: "/setting",
  },
];

function SideBar() {
  const pathname = usePathname();

  return (
    <div className="flex flex-col h-full p-2 space-y-4 bg-[#202123] text-white">
      <div className="mb-5">
        <Image alt="logo" src="/logo.png" width={180} height={20} />
      </div>

      <div>
        {routes.map((route, index) => (
          <Link
            href={route.href}
            key={index}
            className={cn(
              "flex justify-start w-full p-3 my-2 text-sm font-medium transition rounded-lg cursor-pointer group hover:text-white hover:bg-white/10",
              pathname === route.href
                ? "text-white bg-white/10"
                : "text-zinc-400"
            )}
          >
            <div className="flex items-center flex-1">
              <route.icon className={cn("h-5 w-5 mr-3", route.color)} />
              {route.label}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default SideBar;
