"use client";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import {
  ArrowRight,
  Code,
  FileText,
  ImageIcon,
  MessageSquare,
  MusicIcon,
  VideoIcon,
} from "lucide-react";
import { useRouter } from "next/navigation";
import React from "react";

const tools = [
  {
    label: "Conversation",
    icon: MessageSquare,
    color: "text-violet-500",
    bgColor: "bg-violet-500/10",
    href: "/conversation",
  },
  {
    label: "Talk with PDF",
    icon: FileText,
    color: "text-red-500",
    bgColor: "bg-red-500/10",
    href: "/pdf",
  },
  {
    label: "Image Generation",
    icon: ImageIcon,
    color: "text-pink-400",
    bgColor: "bg-pink-400/10",
    href: "/image",
  },
  {
    label: "Video Generation",
    icon: VideoIcon,
    color: "text-orange-700",
    bgColor: "bg-orange-700/10",
    href: "/video",
  },
  {
    label: "Music Generation",
    icon: MusicIcon,
    color: "text-emerald-500",
    bgColor: "bg-emerald-500/10",
    href: "/music",
  },
  {
    label: "Code Generation",
    icon: Code,
    color: "text-green-500",
    bgColor: "bg-green-500/10",
    href: "/code",
  },
];

function Dashboard() {
  const router = useRouter();

  return (
    <div className="w-full">
      <div className="text-white dashboard-banner">
        <div>
          <div className="mb-[100px]">
            <h2 className="text-[70px] font-bold text-center ">
              Explore the power of AI
            </h2>
            <p className="text-xl font-light text-center">
              Chat with the smartest AI - Experience the power of AI
            </p>
          </div>

          <div className="flex flex-wrap justify-between">
            {tools.map((tool, index) => (
              <Card
                onClick={() => {
                  router.push(tool.href);
                }}
                key={index}
                className="flex items-center justify-between p-4 cursor-pointer bg-[#29292B] border-none w-[49%] rounded-3xl mt-5"
              >
                <div className="flex items-center gap-x-4">
                  <div className={cn("p-2 w-fit rounded-2xl")}>
                    <tool.icon className={cn("w-8 h-8 text-white opacity-20")} />
                  </div>
                  <div className="font-semibold text-gray-200">{tool.label}</div>
                </div>
                <ArrowRight className="w-5 h-5 text-gray-200" />
              </Card>
            ))}
          </div>
        </div>
      </div>

    </div>
  );
}

export default Dashboard;
