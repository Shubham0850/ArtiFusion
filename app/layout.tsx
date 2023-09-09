import "./globals.css";
import type { Metadata } from "next";
import { ClerkProvider } from "@clerk/nextjs";
import { dark } from "@clerk/themes";
import Head from "next/head";


export const metadata: Metadata = {
  title: "ArtiFusion | Revolutionary SaaS AI platform",
  description:
    "ArtiFusion is a revolutionary SaaS AI platform that seamlessly blends creativity and technology. Powered by Next.js 13, React, Tailwind, Prisma, and Stripe, our platform is at the forefront of generating mesmerizing images, captivating music, immersive videos, and interactive chat experiences, rivaling the capabilities of ChatGPT.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <Head>
        <link rel="icon/ico" href="/favicon.ico" />
      </Head>
      <html lang="en">
        <body>{children}</body>
      </html>
    </ClerkProvider>
  );
}
