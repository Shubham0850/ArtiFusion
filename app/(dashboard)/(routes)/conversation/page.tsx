"use client";

import * as z from "zod";
import { MailSearch, MessageSquare, SendHorizonal } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import axios from "axios"

import Heading from "@/components/heading";

import { formSchema } from "./constants";
import { Form, FormControl, FormField, FormItem } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { ChatCompletionRequestMessage } from "openai";

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
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="flex w-full p-3 bg-[#29292B] rounded-full focus-within:shadow-sm"
          >
            <FormField
              name="prompt"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormControl className="px-2 m-0">
                    <Input
                      className="text-white bg-transparent border-0 border-none outline-none text-md focus-visible:ring-0 focus-visible:ring-transparent focus:outline-none"
                      disabled={isLoading}
                      placeholder="How do i calculate the radius of a circle?"
                      {...field}
                    />
                  </FormControl>
                </FormItem>
              )}
            />

            <Button className="text-white bg-transparent lg:col-span-2 hover:bg-transparent hover:text-gray-300" disabled={isLoading}>
              <SendHorizonal className="" />
            </Button>
          </form>
        </Form>
      </div>
    </div>
  );
}

export default Conversation;
