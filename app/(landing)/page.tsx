"use client";

import { ChakraProvider} from "@chakra-ui/react";
import React from 'react';
import Features from "@/components/home/Features";
import HomeIntro from "@/components/home/HomeIntro";
import Plan from "@/components/home/Plan";
import Questions from "@/components/home/Questions";
import Review from "@/components/home/Review";
import Started from "@/components/home/Started";
import TryDemo from "@/components/home/TryDemo";
import UseCase from "@/components/home/UseCase";
import Nav from "@/components/layout/Nav";
import Footer from "@/components/layout/Footer";


function LandingPage() {
  return (
    <ChakraProvider >
      <div>
        <Nav/>
        <HomeIntro />
        <TryDemo />
        <Features />
        <UseCase />
        <Review />
        <Plan />
        <Questions />
        <Started />
        <Footer/>
      </div>
    </ChakraProvider>
  );
}

export default LandingPage;
