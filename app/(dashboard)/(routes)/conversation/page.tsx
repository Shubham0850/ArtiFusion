"use client";

import * as z from "zod";
import { MailSearch } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import axios from "axios"

import { useState } from "react";
import { ChatCompletionRequestMessage } from "openai";
import SearchBar from "@/components/search-bar";
import { formSchema } from "@/lib/constants";

function Conversation() {
  const router = useRouter();
  const [messages, setMessages] = useState<ChatCompletionRequestMessage[]>([])

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      prompt: "",
    },
  });

  const isLoading = form.formState.isSubmitting;

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    console.log("values:", values)
    try {

      const userMessage: ChatCompletionRequestMessage = {
        role: "user",
        content: values.prompt
      };

      const newMessages = [...messages, userMessage];
      console.log("new messages:", newMessages)

      const response = await axios.post("/api/conversation", {
        messages: newMessages
      })

      setMessages((current) => [...current, userMessage, response.data]);

      form.reset()
    } catch (error: any) {
      // TODO: Open Pro Modal
      console.log("key", process.env.OPENAI_API_KEY)
      console.log(error)
    } finally {
      router.refresh()
    }
  };

  return (
    <div className="max-w-[1000px] h-[100vh] -mt-4 mx-auto relative">
      <div className="">
        {/* Messages box */}
        <div className="mt-4 space-y-4 pb-[100px] h-full overflow-y-scroll">
          {messages.length === 0 && !isLoading && (
            <div className="flex items-center justify-center w-full text-gray-500">
              <div className="text-center">
                <MailSearch className="w-[50px] h-[50px] mx-auto" /> {/* Adjust the font size as needed */}
                <p>No messages</p>
              </div>
            </div>
          )}
          <div className="flex flex-col-reverse gap-y-4">
            {messages.map((message) => (
              <div key={message.content}>
                {message.content}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Input box */}
      <div className="absolute bottom-0 left-0 w-full p-3 pb-5">
        <SearchBar placeholder="Distance of moon from earth ?" form={form} onSubmit={onSubmit} isLoading={isLoading} />
      </div>
    </div>
  );
}

export default Conversation;
