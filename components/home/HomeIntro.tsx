import {
  Container,
  Box,
  Text,
  Button,
  List,
  ListItem,
} from "@chakra-ui/react";
import React, { useState, useEffect } from "react";
import Image from "next/image";

const sentences = [
  "Chat With PDF.",
  "Personal Assistence",
  "Generative AI",
  "Code Help",
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
    <Box bg={"#1a1d24"} textColor={"white"} padding={{ base: "50px", md: "100px" }}>
      <Container maxW={1300}>
        <Box mt={"100px"}>
          <Box textAlign={"center"}>
            <Text fontSize={{ base: "lg", md: "2lg" }} textColor={"#07F9AC"}>
              All in one AI tool
            </Text>
            <Text
              fontSize={{ base: "4xl", md: "5xl" }}
              fontWeight={"bold"}
              textColor={"white"}
            >
              10X Faster your productivity
            </Text>
            <Box
              pb={4}
              fontSize={{ base: "3xl", md: "5xl" }}
              fontWeight="bold"
              bgGradient="linear(230deg, #07F9AC, #18DAFF)"
              bgClip="text"
              textColor="transparent"
            >
              {currentText}
              <Text
                className={"cursorAnimation"}
                as={"span"}
                textColor={"white"}
              >
                |
              </Text>
            </Box>
          </Box>

          <Box textAlign="center" py={2}>
            <Button
              width={{ base: "210px", md: "250px" }}
              borderRadius={12}
              fontSize={{ base: "14px", md: "16px" }}
              size="lg"
              py={7}
              textColor={"black"}
              bgGradient="linear(-230deg, #07F9AC, #18DAFF)"
            >
              Start Writing - It&apos;s Free
            </Button>
          </Box>

          <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
          >
            <Image
              width={1000}
              height={1000}
              src="/screen.png"
              alt=""
              objectFit="cover"
            />
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
