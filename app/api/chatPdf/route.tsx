import { NextRequest } from "next/server";
import { PineconeClient } from "@pinecone-database/pinecone";
import { PineconeStore } from "langchain/vectorstores/pinecone";
import { OpenAIEmbeddings } from "langchain/embeddings/openai";
import { OpenAI } from "langchain/llms/openai";
import { VectorDBQAChain } from "langchain/chains";
import { StreamingTextResponse, LangChainStream } from "ai";
import { CallbackManager } from "langchain/callbacks";

export async function POST(request: NextRequest) {
  // Parse the POST request's JSON body
  const body = await request.json();
  
  // Use Vercel's `ai` package to setup a stream
  const { stream, handlers } = LangChainStream();

  // Initialize Pinecone Client
  const pineconeClient = new PineconeClient();
  await pineconeClient.init({
    apiKey: process.env.PINECONE_API_KEY ?? "",
    environment: "us-east-1-aws",
  });
  const pineconeIndex = pineconeClient.Index(
    process.env.PINECONE_INDEX_NAME as string
  );

  // Initialize our vector store
  const vectorStore = await PineconeStore.fromExistingIndex(
    new OpenAIEmbeddings(),
    { pineconeIndex }
  );

  // Specify the OpenAI model we'd like to use, and turn on streaming
  const model = new OpenAI({
    modelName: "gpt-3.5-turbo",
    streaming: true,
    callbackManager: CallbackManager.fromHandlers(handlers),
  });

  // Define the Langchain chain
  const chain = VectorDBQAChain.fromLLM(model, vectorStore, {
    k: 1,
    returnSourceDocuments: true,
  });

  // Call our chain with the prompt given by the user
  chain.call({ query: body.prompt }).catch(console.error);

  // Return an output stream to the frontend
  return new StreamingTextResponse(stream);
}