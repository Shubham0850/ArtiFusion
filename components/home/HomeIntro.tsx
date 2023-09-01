import {
        Container,
        Box,
        Text,
        Button,
        Link,
        List,
        ListItem,
        ChakraProvider,
        extendTheme,
      } from "@chakra-ui/react";
      import React, { useState, useEffect } from "react";
      import Image from "next/image";
      
      const theme = extendTheme({});
      
      const sentences = [
        "Product Description.",
        "SEO Content.",
        "Technical Writing.",
        "News Article.",
      ];
      
      const HomeIntro = () => {
        const [currentSentenceIndex, setCurrentSentenceIndex] = useState(0);
        const [currentText, setCurrentText] = useState("");
        const [isBlinking, setIsBlinking] = useState(true);
      
        useEffect(() => {
          const sentence = sentences[currentSentenceIndex];
          let index = 0;
          const interval = setInterval(() => {
            if (index < sentence.length) {
              setCurrentText(sentence.substring(0, index + 1));
              index++;
            } else {
              clearInterval(interval);
              setTimeout(() => {
                setCurrentText("");
                setCurrentSentenceIndex(
                  (prevIndex) => (prevIndex + 1) % sentences.length
                );
              }, 1000);
            }
          }, 100);
      
          return () => clearInterval(interval);
        }, [currentSentenceIndex]);
      
        useEffect(() => {
          const blinkInterval = setInterval(() => {
            setIsBlinking((prevValue) => !prevValue);
          }, 500);
      
          return () => clearInterval(blinkInterval);
        }, []);
      
        return (
          <Box bg={"#1a1d24"} textColor={"white"}>
            <Container maxW={1300}>
              <Box pt={{ base: 32, md: 36 }} pb={10}>
                <Box
                  display="grid"
                  gridTemplateColumns={{ base: "1fr", md: "1fr" }}
                  gap={{ base: 4, md: 8 }}
                  textAlign={{ base: "center", md: "center" }}
                  px={{ base: 4, md: 8 }}
                >
                  <Box>
                    <Text fontSize={{ base: "lg", md: "2lg" }} textColor={"yellow"}>
                      Best AI Copywriting Tool
                    </Text>
                    <Text
                      fontSize={{ base: "4xl", md: "5xl" }}
                      fontWeight={"bold"}
                      textColor={"white"}
                    >
                      A 10X Faster Way To Write Your
                    </Text>
                    <Box
                      pb={4}
                      fontSize={{ base: "3xl", md: "5xl" }}
                      fontWeight="bold"
                      bgGradient="linear(to-r, skyblue,blue.600,yellow,yellow.700)"
                      bgClip="text"
                      textColor="transparent" // Hide the actual text color
                    >
                      {currentText}
      
                      <Text
                        className={"cursorAnimation"}
                        as={"span"}
                        textColor={"white"}
                      >
                        {" "}
                        |
                      </Text>
                    </Box>
                  </Box>
                </Box>
      
                <Box textAlign="center" py={2}>
                  <Button
                    _hover={{
                      textColor: "white",
                      bg: "linear(to-r, darkviolet, red)",
                    }}
                    width={{ base: "210px", md: "250px" }}
                    borderRadius={12}
                    fontSize={{ base: "14px", md: "16px" }}
                    size="lg"
                    py={7}
                    textColor={"white"}
                    bgGradient="linear(to-r, darkviolet, red.400)"
                  >
                    Start Writing - It&apos;s Free
                  </Button>
                </Box>
      
                <Box
                  display="flex"
                  justifyContent="center"
                  alignItems="center"
                  py={8}
                  px={2}
                >
                  <Box
                    border="1px solid yellow"
                    borderRadius={30}
                    overflow={"hidden"}
                  >
                    <Image
                      width={1000}
                      height={1000}
                      src="/screen-1.jpg"
                      alt=""
                      objectFit="cover"
                    />
                  </Box>
                </Box>
      
                <Box>
                  <List
                    gap={6}
                    py={4}
                    justifyContent={"center"}
                    alignItems={"center"}
                    display="flex"
                    flexDirection={{ base: "column", md: "row" }}
                  >
                    <ListItem>&#8226; Write Blogs 10X Faster</ListItem>
                    <ListItem>&#8226; Write Higher Converting Posts</ListItem>
                    <ListItem>&#8226; Write More Engaging Emails</ListItem>
                  </List>
                </Box>
              </Box>
            </Container>
          </Box>
        );
      };
      
      export default HomeIntro;
      