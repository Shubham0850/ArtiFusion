"use client";

import { MailSearch } from "lucide-react";
import Search from "@/components/conversation/Search";
import Conversations from "@/components/conversation/Conversations";
import { useHandleSubmitPrompt } from "@/lib/hooks/useHandleSubmitPrompt";

function Conversation() {
  const { messages, prompt, handlePromptChange, error, handleSubmitPrompt, isLoading } = useHandleSubmitPrompt();

  return (
    <div className="relative">
      <div className="max-w-[1000px] mx-auto min-h-[100vh]">
        {/* Messages box */}
        <div className="pb-[50px]">
          {messages.length === 0 && (
            <div className="flex items-center h-[100vh] justify-center w-full text-gray-500">
              <div className="text-center">
                <MailSearch className="w-[50px] h-[50px] mx-auto" />
                <p>No messages</p>
              </div>
            </div>
          )}
          <div>
            <Conversations messages={messages} pngFile={"brain"} />
          </div>
        </div>
      </div>

      {/* Input box */}
      <div className="sticky bottom-0 left-0 flex justify-center w-full">
        <div className="max-w-[1000px] w-full bg-[#1E1E1F] pb-5 rounded-tl-[35px] rounded-tr-[35px]">
          <Search placeholder="Distance of sun from earth ?" prompt={prompt} error={error} handlePromptChange={handlePromptChange} onSubmit={handleSubmitPrompt} isLoading={isLoading} />
        </div>
      </div>
    </div>
  );
}

export default Conversation;
