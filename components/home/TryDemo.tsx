import { Box, Container, Text, Flex, Button } from "@chakra-ui/react";
import React from "react";

function TryDemo() {
  return (
    <Box bg={"#1a1d24"} textColor={"white"} pb={{ base: 0, md: 8 }}>
      <Container maxW={1300}>
        <Box>
          <Box textAlign={"center"} py={4}>
            <Text
              fontSize={{ base: "36px", md: "40px" }}
              fontWeight={"bold"}
              p={4}
            >
              {" "}
              Generate Creative AI Copy On-The-Spot, Across Your Favorite Tools
            </Text>
          </Box>

          <Flex
            justifyContent={"space-between"}
            gap={8}
            py={4}
            direction={{ base: "column", md: "row" }}
          >
            <Box p={{ base: 4, md: 8 }}>
              <Text
                fontSize={{ base: "20px", md: "24px" }}
                fontWeight={"bold"}
                px={{ base: 0, md: 4 }}
              >
                Generates quality contents
              </Text>
              <Text as={"p"} py={{ base: 2, md: 4 }}>
                This tool helps you find the right keywords to target for your
                content. By using the Google Keyword Planner, you can see how
                often people
              </Text>
            </Box>
            <Box p={{ base: 4, md: 8 }}>
              <Text
                fontSize={{ base: "20px", md: "24px" }}
                fontWeight={"bold"}
                px={{ base: 0, md: 4 }}
              >
                Provides Useful Suggestions
              </Text>
              <Text as={"p"} py={{ base: 2, md: 4 }}>
                This tool helps you find the right keywords to target for your
                content. By using the Google Keyword Planner, you can see how
                often people
              </Text>
            </Box>
            <Box p={{ base: 4, md: 8 }}>
              <Text
                fontSize={{ base: "20px", md: "24px" }}
                fontWeight={"bold"}
                px={{ base: 0, md: 4 }}
              >
                Improves Products Productivity
              </Text>
              <Text as={"p"} py={{ base: 2, md: 4 }}>
                This tool helps you find the right keywords to target for your
                content. By using the Google Keyword Planner, you can see how
                often people
              </Text>
            </Box>
          </Flex>

          <Box textAlign={"center"} py={8}>
            <Button textColor={"black"} bg={"yellow"}>
              Try a Demo
            </Button>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}

export default TryDemo;
