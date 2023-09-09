import React, { useEffect, useRef } from "react";
import Image from "next/image";

const Chat = ({ message, isLast }: any) => {
	return (
		<div className={`flex flex-col ${isLast ? "flex-grow" : ""} ${message.type !== "user" ? "bg-[#29292B] py-10" : ""} p-8 rounded-3xl`}>
			<div className="flex flex-start">
				<div className="relative w-10 h-10 mr-4 overflow-hidden rounded">
					<Image
						src={message.type === "user" ? "/user.jpg" : "/bot.webp"}
						alt={`${message.type}'s profile`}
						width={40}
						height={40}
						className="rounded-full"
						priority
						unoptimized
					/>
				</div>
				{message.loading ?
					<p className="flex items-center text-white animate-pulse">
						Thinking...
					</p>
					:
					(<p className={`flex items-center w-full text-[#e3e3d2] ${message.type === "user" ? "user" : "bot"}`}>
						{message.content}
					</p>)
				}
			</div>
		</div>
	);
};

export default function Conversations({ messages }: any) {
	const messagesEndRef = useRef<HTMLDivElement | null>(null);

	useEffect(() => {
		if (messagesEndRef.current) {
			messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
		}
	}, [messages]);

	return (
		<div>
			{messages &&
				messages.map((message: any, index: number) => (
					<Chat key={index} message={message} />
				))}
			<div ref={messagesEndRef}></div>
		</div>
	);
};