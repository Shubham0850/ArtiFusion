"use client";

import SearchBar from "@/components/search-bar";

function Code() {

  return (
    <div className="max-w-[1000px] relative h-[100vh] mx-auto -mt-4">

      {/* Messages box */}
      <div className="mt-4 space-y-4 pb-[100px] h-full pt-5 overflow-y-scroll">
        <div>hi</div>
      </div>

      {/* Input box */}
      <div className="absolute bottom-0 left-0 w-full pb-5">
        <SearchBar placeholder="Cat walking on the moon..." />
      </div>
    </div>
  );
}

export default Code;
