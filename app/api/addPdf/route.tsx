import { PDFLoader } from "langchain/document_loaders/fs/pdf";
import { NextRequest, NextResponse } from "next/server";
import { PineconeClient } from "@pinecone-database/pinecone";
import { OpenAIEmbeddings } from "langchain/embeddings/openai";
import { PineconeStore } from "langchain/vectorstores/pinecone";

export async function POST(request: NextRequest) {
  // Extract FormData from the request
  const data = await request.formData();
  // Extract the uploaded file from the FormData
  const file: File | null = data.get("file") as unknown as File;

  // Make sure file exists
  if (!file) {
    return NextResponse.json({ success: false, error: "No file found" });
  }

  // Make sure file is a PDF
  if (file.type !== "application/pdf") {
    return NextResponse.json({ success: false, error: "Invalid file type" });
  }

  // Use the PDFLoader to load the PDF and split it into smaller documents
  const pdfLoader = new PDFLoader(file);
  const splitDocuments = await pdfLoader.loadAndSplit(); 
  // TODO: what loadAndSplit is doing here ? 
  // TODO: what are chunks ?

  // Initialize the Pinecone client
  const pineconeClient = new PineconeClient();
  await pineconeClient.init({
    apiKey: process.env.PINECONE_API_KEY ?? "",
    environment: "gcp-starter",
  });
  const pineconeIndex = pineconeClient.Index(
    process.env.PINECONE_INDEX_NAME as string
  );

  console.log("starting....")
  // Use Langchain's integration with Pinecone to store the documents
  await PineconeStore.fromDocuments(splitDocuments, new OpenAIEmbeddings(), {
    pineconeIndex,
  });
  console.log("completed....")

  return NextResponse.json({ success: true });
}