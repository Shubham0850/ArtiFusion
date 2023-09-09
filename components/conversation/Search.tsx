import { SendHorizonal } from "lucide-react";
import React from "react";

export default function Search({
	prompt,
	handlePromptChange,
	onSubmit,
	placeHolderText,
	error,
	isLoading
}: any) {
	const handleKeyDown = (e: any) => {
		if (e.key === "Enter") {
			onSubmit();
		}
	};
	return (
		<div className="flex w-full shadow-md p-2 pl-4 bg-[#29292B] rounded-full focus-within:shadow-sm">
			<input
				className="w-full p-2 text-white bg-transparent border-none outline-none text-md focus-visible:ring-0 focus-visible:ring-transparent focus:outline-none"
				type="text"
				value={prompt}
				onChange={handlePromptChange}
				onKeyDown={handleKeyDown}
				placeholder={placeHolderText || "Distance of moon from earth?"}
			/>

			<button className="p-3 text-white bg-transparent rounded-full lg:col-span-2 hover:text-gray-300 hover:bg-white/10" onClick={onSubmit} disabled={isLoading}>
				<SendHorizonal />
			</button>
		</div>
	);
};