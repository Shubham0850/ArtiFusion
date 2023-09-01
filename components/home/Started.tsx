import { Box, Container, Button, Text } from "@chakra-ui/react";
import React from "react";
import Image from "next/image";

function Started() {
  return (
    <Box bg={"#1a1d24"} pb={20}>
      <Container maxW={1300}>
        <Box
          textColor={"white"}
          border="2px solid #1b7c40"
          borderRadius={"2xl"}
          pt={16}
          px={{ base: 4 }}
        >
          <Box
            display="grid"
            gridTemplateColumns={{ base: "1fr", md: "1fr" }}
            gap={{ base: 4, md: 8 }}
            textAlign={{ base: "center", md: "center" }}
            px={{ base: 4, md: 8 }}
          >
            <Box>
              <Text
                fontSize={{ base: "3xl", md: "5xl" }}
                fontWeight={"bold"}
                textColor={"white"}
              >
                Using{" "}
                <Text as={"span"} textColor={"yellow"}>
                  {" "}
                  GenAI
                </Text>{" "}
                you can save hours each week creating long-form content.
              </Text>
            </Box>
          </Box>
          <Box textAlign="center" py={4}>
            <Button
              _hover={{ bg: "yellow.300" }}
              width={{ base: "210px", md: "240px" }}
              borderRadius={12}
              fontSize={{ base: "14px", md: "18px" }}
              size="lg"
              textColor={"black"}
              bg={"yellow"}
            >
              Get Started Free
            </Button>
          </Box>

          <Box
            display={"flex"}
            justifyContent="center"
            alignItems="center"
            py={8}
          >
            <Box
              border="1px solid  yellow"
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
        </Box>
      </Container>
    </Box>
  );
}

export default Started;
