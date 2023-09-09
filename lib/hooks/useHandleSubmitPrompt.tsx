import { useState } from "react";

export const useHandleSubmitPrompt = () => {
	const [messages, setMessages] = useState<any[]>([]);
	const [firstMsg, setFirstMsg] = useState(true);
	const [prompt, setPrompt] = useState("");
	const [error, setError] = useState<string | null>(null);
	const [isLoading, setIsLoading] = useState<boolean>(false);

	const handleSubmitPrompt = async () => {
		setIsLoading(true);
		try {
			// Add user's message
			setMessages((prevMessages) => [
				...prevMessages,
				{ content: prompt, type: "user", loading: false },
			]);

			// Add a temporary "loading" bot message
			setMessages((prevMessages) => [
				...prevMessages,
				{ content: "Loading...", type: "bot", loading: true },
			]);

			setPrompt("");

			const response = await fetch("/api/conversation", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({ input: prompt, firstMsg }),
			});

			if (!response.ok) {
				throw new Error(`HTTP Error! Status: ${response.status}`);
			}

			const searchRes = await response.json();

			// Remove the temporary "loading" bot message and add the actual bot message
			setMessages((prevMessages) => [
				...prevMessages.slice(0, -1), // Exclude the last "loading" message
				{ content: searchRes.output.response, type: "bot", loading: false },
			]);

			setIsLoading(false)
			setFirstMsg(false);
		} catch (err) {
			setIsLoading(false)
			setError(err as string);
		}
	};

	const handlePromptChange = (e: any) => {
		setPrompt(e.target.value);
	};

	return { messages, prompt, handlePromptChange, firstMsg, error, handleSubmitPrompt, isLoading };
};
