"use client";

import * as z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import SearchBar from "@/components/search-bar";
import { formSchema } from "@/lib/constants";

function Video() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      prompt: "",
    },
  });

  const isLoading = form.formState.isSubmitting;

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    console.log("values:", values)
  };

  return (
    <div className="max-w-[1000px] relative h-[100vh] mx-auto -mt-4">

      {/* Messages box */}
      <div className="mt-4 space-y-4 pb-[100px] h-full pt-5 overflow-y-scroll">
        <div>hi</div>
      </div>

      {/* Input box */}
      <div className="absolute bottom-0 left-0 w-full pb-5">
        <SearchBar placeholder="Video of a cat walking on the moon..." form={form} onSubmit={onSubmit} isLoading={isLoading} />
      </div>
    </div>
  );
}

export default Video;
