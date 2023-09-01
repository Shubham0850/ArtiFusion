"use client";
import { cn } from "@/lib/utils";
import {
  Code,
  FileText,
  Home,
  ImageIcon,
  MessageSquare,
  MusicIcon,
  Sun,
  VideoIcon,
} from "lucide-react";
import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";
import { UserButton } from "@clerk/nextjs";

const routes = [
  {
    label: "Home",
    icon: Home,
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
    label: "Talk to PDF",
    icon: FileText,
    color: "text-red-500",
    href: "/pdf",
  },
  {
    label: "Image Gen",
    icon: ImageIcon,
    color: "text-pink-400",
    href: "/image",
  },
  {
    label: "Video Gen",
    icon: VideoIcon,
    color: "text-orange-700",
    href: "/video",
  },
  {
    label: "Music Gen",
    icon: MusicIcon,
    color: "text-emerald-500",
    href: "/music",
  },
  {
    label: "Code Gen",
    icon: Code,
    color: "text-green-500",
    href: "/code",
  },
];

function SideBar() {
  const pathname = usePathname();

  return (
    <div className="flex flex-col h-full p-3 space-y-4 bg-[#2D2F30] text-white">
      <div className="flex flex-col justify-between h-full">
        <div>
          {routes.map((route, index) => (
            <Link
              href={route.href}
              key={index}
              className={"my-5 cursor-pointer"}
            >
              <div className="mb-5 text-center">
                <div className={cn("rounded-[50px] p-3 flex items-center justify-center hover:text-white hover:bg-white/10", pathname === route.href
                  ? " bg-white/10"
                  : "text-zinc-400")}>
                  <route.icon className={"h-5 w-5"} />
                </div>
                <p className={cn("text-xs", pathname === route.href
                  ? "text-white"
                  : "text-zinc-400")}>{route.label}</p>
              </div>
            </Link>
          ))}
        </div>

        <div className="flex flex-col items-center p-2 space-y-3">
          <div className="rounded-[50px] p-3 flex items-center justify-center hover:text-white hover:bg-white/10 cursor-pointer">
            <Sun className="w-5 h-5" />
          </div>
          <UserButton afterSignOutUrl="/" />
        </div>
      </div>
    </div>
  );
}

export default SideBar;
