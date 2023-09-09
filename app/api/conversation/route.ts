import { auth } from "@clerk/nextjs";
import { NextResponse } from "next/server";
import { OpenAI } from "langchain/llms/openai";
import { BufferMemory } from "langchain/memory";
import { ConversationChain } from "langchain/chains";

let model;
let memory;
let chain: any;

export async function POST(req: Request): Promise<NextResponse> {
  try {
    const { userId } = auth();
    const body = await req.json();
    const { input, firstMsg } = body;

    if (!userId) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    if (!input) {
      return new NextResponse("Input are required", { status: 400 });
    }

    if (firstMsg) {
      model = new OpenAI({ modelName: "gpt-3.5-turbo" });
      memory = new BufferMemory();
      chain = new ConversationChain({ llm: model, memory });
    }

    const response = await chain.call({ input });

    return new NextResponse(JSON.stringify({ output: response }), { status: 200, headers: { "Content-Type": "application/json" } });
  } catch (error) {
    console.log("[CONVERSATION_ERROR]", error);
    return new NextResponse("Internal error", { status: 500 });
  }
}
