"use client";

import SearchBar from "@/components/search-bar";

function Music() {

  return (
    <div className="max-w-[1000px] relative h-[100vh] mx-auto -mt-4">

      {/* Messages box */}
      <div className="mt-4 space-y-4 pb-[100px] h-full pt-5 overflow-y-scroll">
        <div>hi</div>
      </div>

      {/* Input box */}
      <div className="absolute bottom-0 left-0 w-full pb-5">
        <SearchBar placeholder="Drum sound on a lofi beat..." />
      </div>
    </div>
  );
}

export default Music;
