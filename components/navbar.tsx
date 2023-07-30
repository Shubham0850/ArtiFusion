"use client";

import React from "react";
import { UserButton } from "@clerk/clerk-react";
import MobileSidebar from "@/components/mobile-sidebar";

function NavBar() {
  return (
    <div className="flex items-center p-4">
      <MobileSidebar />

      <div className="flex justify-end w-full">
        <UserButton afterSignOutUrl="/" />
      </div>
    </div>
  );
}

export default NavBar;
