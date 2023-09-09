import React from 'react'
import { Form, FormControl, FormField, FormItem } from "@/components/ui/form";
import { Button } from './ui/button';
import { SendHorizonal } from 'lucide-react';

function SearchBar({ form, onSubmit, isLoading, placeholder }: any) {
	return (
		<div>
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
									<input
										className="w-full p-2 text-white bg-transparent border-none outline-none text-md focus-visible:ring-0 focus-visible:ring-transparent focus:outline-none"
										disabled={isLoading}
										placeholder={placeholder}
										{...field}
									/>
								</FormControl>
							</FormItem>
						)}
					/>

					<Button className="p-3 text-white bg-transparent rounded-full lg:col-span-2 hover:text-gray-300 hover:bg-white/10" disabled={isLoading}>
						<SendHorizonal />
					</Button>
				</form>
			</Form>
		</div>
	)
}

export default SearchBar