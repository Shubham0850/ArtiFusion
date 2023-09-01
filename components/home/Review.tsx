import { Container, Box, Text, Center } from "@chakra-ui/react";
import React from "react";

import { keyframes } from "@emotion/react";

const Review = () => {
  return (
    <Box bg={"#1a1d24"} pb={24}>
      <Container maxW={1300}>
        <Box textColor={"white"}>
          <Center>
            <Box
              textAlign={"center"}
              p={4}
              maxWidth={{ base: "100%", md: "900px" }}
            >
              <Text
                fontWeight={"bold"}
                fontSize={{ base: "36px", md: "48px" }}
                p={4}
              >
                <Text as={"span"} textColor={"yellow"}>
                  {" "}
                  GenAI.
                </Text>{" "}
                Received 4.8/5 Stars in Over 10,000+ Reviews.
              </Text>
            </Box>
          </Center>
        </Box>
      </Container>
    </Box>
  );
};

export default Review;
