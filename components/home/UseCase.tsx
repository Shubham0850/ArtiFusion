import { Box, Container, Flex, Text, Link, Center } from "@chakra-ui/react";
import React from "react";
import { HiOutlineArrowUpRight } from "react-icons/hi2";

const UseCase = () => {
  return (
    <Box bg={"#1a1d24"} pb={24}>
      <Container maxW={1300}>
        <Box textColor={"white"}>
          <Center>
            <Box
              textAlign={"center"}
              p={{ base: 2, md: 4 }}
              maxWidth={{ base: "100%", md: "900px" }}
            >
              <Text p={{ base: 2, md: 4 }} textColor={"yellow"}>
                GenAI Use Cases
              </Text>
              <Text
                fontWeight={"bold"}
                fontSize={{ base: "36px", md: "44px" }}
                p={{ base: 2, md: 4 }}
              >
                Write Better Content Faster, The Future Of AI Writing Tools is
                Here
              </Text>
            </Box>
          </Center>
          <Flex
            direction={{ base: "column", md: "row" }}
            justifyContent={"space-between"}
          >
            <Box p={4}>
              <Text py={4} fontWeight={"bold"} fontSize={"20px"}>
                Writing Blog Content
              </Text>
              <Text pb={4}>
                Writing blog content with GenAI, make sure you have a clear
                understanding of who your audience is.
              </Text>
              <Link
                href="#"
                display={"flex"}
                pt={4}
                _hover={{
                  textDecoration: "none",
                  textColor: "yellow",
                  fontWeight: "bold",
                }}
              >
                <Text>Get Started Free</Text>{" "}
                <HiOutlineArrowUpRight
                  style={{ fontSize: 16, marginLeft: 5, marginTop: 4 }}
                />
              </Link>
            </Box>
            <Box p={4}>
              <Text py={4} fontWeight={"bold"} fontSize={"20px"}>
                Writing Blog Content
              </Text>
              <Text pb={4}>
                Writing blog content with GenAI, make sure you have a clear
                understanding of who your audience is.
              </Text>
              <Link
                href="#"
                display={"flex"}
                pt={4}
                _hover={{
                  textDecoration: "none",
                  textColor: "yellow",
                  fontWeight: "bold",
                }}
              >
                <Text>Get Started Free</Text>{" "}
                <HiOutlineArrowUpRight
                  style={{ fontSize: 16, marginLeft: 5, marginTop: 4 }}
                />
              </Link>
            </Box>

            <Box p={4}>
              <Text py={4} fontWeight={"bold"} fontSize={"20px"}>
                Writing Blog Content
              </Text>
              <Text pb={4}>
                Writing blog content with GenAI, make sure you have a clear
                understanding of who your audience is.
              </Text>
              <Link
                href="#"
                display={"flex"}
                pt={4}
                _hover={{
                  textDecoration: "none",
                  textColor: "yellow",
                  fontWeight: "bold",
                }}
              >
                <Text>Get Started Free</Text>{" "}
                <HiOutlineArrowUpRight
                  style={{ fontSize: 16, marginLeft: 5, marginTop: 4 }}
                />
              </Link>
            </Box>

            <Box p={4}>
              <Text py={4} fontWeight={"bold"} fontSize={"20px"}>
                Writing Blog Content
              </Text>
              <Text pb={4}>
                Writing blog content with GenAI, make sure you have a clear
                understanding of who your audience is.
              </Text>
              <Link
                href="#"
                display={"flex"}
                pt={4}
                _hover={{
                  textDecoration: "none",
                  textColor: "yellow",
                  fontWeight: "bold",
                }}
              >
                <Text>Get Started Free</Text>{" "}
                <HiOutlineArrowUpRight
                  style={{ fontSize: 16, marginLeft: 5, marginTop: 4 }}
                />
              </Link>
            </Box>
          </Flex>
          <Flex
            direction={{ base: "column", md: "row" }}
            justifyContent={"space-between"}
          >
            <Box p={4}>
              <Text py={4} fontWeight={"bold"} fontSize={"20px"}>
                Writing Blog Content
              </Text>
              <Text pb={4}>
                Writing blog content with GenAI, make sure you have a clear
                understanding of who your audience is.
              </Text>
              <Link
                href="#"
                display={"flex"}
                pt={4}
                _hover={{
                  textDecoration: "none",
                  textColor: "yellow",
                  fontWeight: "bold",
                }}
              >
                <Text>Get Started Free</Text>{" "}
                <HiOutlineArrowUpRight
                  style={{ fontSize: 16, marginLeft: 5, marginTop: 4 }}
                />
              </Link>
            </Box>
            <Box p={4}>
              <Text py={4} fontWeight={"bold"} fontSize={"20px"}>
                Writing Blog Content
              </Text>
              <Text pb={4}>
                Writing blog content with GenAI, make sure you have a clear
                understanding of who your audience is.
              </Text>
              <Link
                href="#"
                display={"flex"}
                pt={4}
                _hover={{
                  textDecoration: "none",
                  textColor: "yellow",
                  fontWeight: "bold",
                }}
              >
                <Text>Get Started Free</Text>{" "}
                <HiOutlineArrowUpRight
                  style={{ fontSize: 16, marginLeft: 5, marginTop: 4 }}
                />
              </Link>
            </Box>

            <Box p={4}>
              <Text py={4} fontWeight={"bold"} fontSize={"20px"}>
                Writing Blog Content
              </Text>
              <Text pb={4}>
                Writing blog content with GenAI, make sure you have a clear
                understanding of who your audience is.
              </Text>
              <Link
                href="#"
                display={"flex"}
                pt={4}
                _hover={{
                  textDecoration: "none",
                  textColor: "yellow",
                  fontWeight: "bold",
                }}
              >
                <Text>Get Started Free</Text>{" "}
                <HiOutlineArrowUpRight
                  style={{ fontSize: 16, marginLeft: 5, marginTop: 4 }}
                />
              </Link>
            </Box>

            <Box p={4}>
              <Text py={4} fontWeight={"bold"} fontSize={"20px"}>
                Writing Blog Content
              </Text>
              <Text pb={4}>
                Writing blog content with GenAI, make sure you have a clear
                understanding of who your audience is.
              </Text>
              <Link
                href="#"
                display={"flex"}
                pt={4}
                _hover={{
                  textDecoration: "none",
                  textColor: "yellow",
                  fontWeight: "bold",
                }}
              >
                <Text>Get Started Free</Text>{" "}
                <HiOutlineArrowUpRight
                  style={{ fontSize: 16, marginLeft: 5, marginTop: 4 }}
                />
              </Link>
            </Box>
          </Flex>
        </Box>
      </Container>
    </Box>
  );
};

export default UseCase;
