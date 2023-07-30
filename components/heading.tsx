import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";
import React from "react";

interface HeadingProps {
  title: string;
  description: string;
  icon: LucideIcon;
  iconColor?: string;
  bgColor?: string;
}

function Heading({
  title,
  description,
  icon: Icon,
  iconColor,
  bgColor,
}: HeadingProps) {
  return (
    <div className="flex items-center px-4 mb-8 lg:px-8 gap-x-3 ">
      <div className={cn("p-2 w-fit rounded-md", bgColor)}>
        <Icon className={cn("w-10 h-10", iconColor)} />
      </div>
      <div>
        <h2 className="text-3xl font-bold">{title}</h2>
        <p className="text-sm text-muted-foreground">{description}</p>
      </div>
    </div>
  );
}

export default Heading;
