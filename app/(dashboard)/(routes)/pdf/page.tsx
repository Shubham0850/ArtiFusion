"use client";

import * as z from "zod";
import { BoxSelect, FileText, FileUp, SendHorizonal, X } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { Box, IconButton } from '@radix-ui/themes';

import { formSchema } from "./constants";
import { Form, FormControl, FormField, FormItem } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { ChatCompletionRequestMessage } from "openai";
import { Card } from "@/components/ui/card";

function PdfBadge({ name, resetFile }: any) {
	return (
		<Card className="bg-[#29292B] border-none rounded-full">
			<div className="flex items-center p-2 px-5">
				<FileText className="h-[40px] w-[40px] text-gray-400" />
				<Box className="w-full mx-2 text-gray-400">
					<h3 className=" text-md">
						{name}
					</h3>
					<p className="text-xs">
						PDF file
					</p>
				</Box>
				<IconButton size="3" variant="outline" onClick={resetFile}>
					<X className="text-gray-200" />
				</IconButton>
			</div>
		</Card>
	)
}

function Conversation() {
	const router = useRouter();
	const [messages, setMessages] = useState<ChatCompletionRequestMessage[]>([])
	const [selectedFileName, setSelectedFileName] = useState(null);

	const handleFileUpload = (file: any) => {
		if (file) {
			setSelectedFileName(file.name);
			// You can also perform any other necessary operations here, such as uploading the file to a server.
		}
	};

	const resetFile = () => {
		setSelectedFileName(null)
	}

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
				{/* Upload box */}
				{
					selectedFileName === null ? (
						<label htmlFor="fileInput">
							<div className="flex items-center justify-center w-full text-gray-500 bg-[#29292B] py-[100px] rounded-3xl cursor-pointer">
								<div className="text-gray-400">
									<FileUp className="w-[50px] h-[50px] mx-auto mb-5" />
									<p>Upload your PDF here</p>
								</div>
								<input
									type="file"
									id="fileInput"
									accept=".pdf"
									className="hidden"
									onChange={(e) => handleFileUpload(e.target.files[0])}
								/>
							</div>
						</label>
					) : (<PdfBadge name={selectedFileName} resetFile={resetFile} />)
				}


				{/* ---------- */}

				{/* Message box */}
				{messages.length === 0 && !isLoading && (
					<div className="flex items-center justify-center w-full p-10 text-gray-500">
						<div className="text-center">
							<BoxSelect className="w-[50px] h-[50px] mx-auto" /> {/* Adjust the font size as needed */}
							<p>No question asked</p>
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
				{/* ---------- */}
			</div>

			{/* Input box */}
			<div className="absolute bottom-0 left-0 w-full pb-5">
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
											placeholder="Ask question to the pdf file you've uploaded.."
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
