import {
        Box,
        Container,
        Flex,
        Text,
        Link,
        Input,
        Button,
      } from "@chakra-ui/react";
      import React from "react";
      import Image from "next/image";
      import { RiSendPlaneLine } from "react-icons/ri";
      import { FaLinkedinIn } from "react-icons/fa";
      import { BsTwitter } from "react-icons/bs";
      import { TbBrandGithubFilled } from "react-icons/tb";
      import { FaInstagramSquare } from "react-icons/fa";
      
      const Footer = () => {
        return (
          <Box bg={"#1a1b20"}>
            <Container maxW={1300}>
              <Box textColor={"white"}>
                <Flex
                  px={8}
                  py={{ base: 4, md: 12 }}
                  justifyContent={"space-between"}
                  direction={{ base: "column", md: "row" }}
                >
                  <Box
                    w={{ base: "100%", md: "25%" }}
                    p={4}
                    display={{ base: "none", md: "block" }}
                  >
                    <Image width={150} height={300} alt="logo" src="/logo2.svg" />
                    <Text pt={4}>
                      A Magical Tool to Optimize you content for the first know who
                      you&apos;re targeting. Identify your target audience.
                    </Text>
                  </Box>
                  <Box p={4} textAlign={{ base: "center", md: "start" }}>
                    <Text pb={4} fontWeight={"bold"}>
                      Gen AI
                    </Text>
                    <Link>
                      <Text pb={2} _hover={{ color: "yellow" }}>
                        About
                      </Text>
                    </Link>
                    <Link>
                      <Text pb={2} _hover={{ color: "yellow" }}>
                        Blog
                      </Text>
                    </Link>
                    <Link>
                      <Text pb={2} _hover={{ color: "yellow" }}>
                        {" "}
                        Sign In
                      </Text>
                    </Link>
                    <Link>
                      <Text pb={2} _hover={{ color: "yellow" }}>
                        Register
                      </Text>
                    </Link>
                    <Link>
                      <Text _hover={{ color: "yellow" }}>Contact</Text>
                    </Link>
                  </Box>
      
                  <Box p={4} textAlign={{ base: "center", md: "start" }}>
                    <Text pb={4} fontWeight={"bold"}>
                      Use Cases
                    </Text>
                    <Link>
                      <Text pb={2} _hover={{ color: "yellow" }}>
                        AI Writer
                      </Text>
                    </Link>
                    <Link>
                      <Text pb={2} _hover={{ color: "yellow" }}>
                        Businesses AI
                      </Text>
                    </Link>
                    <Link>
                      <Text pb={2} _hover={{ color: "yellow" }}>
                        AI Blog Writer
                      </Text>
                    </Link>
                    <Link>
                      <Text pb={2} _hover={{ color: "yellow" }}>
                        AI Content Creator
                      </Text>
                    </Link>
                    <Link>
                      <Text _hover={{ color: "yellow" }}>Article Writer</Text>
                    </Link>
                  </Box>
      
                  <Box p={4} textAlign={{ base: "center", md: "start" }}>
                    <Text pb={4}>News and Update</Text>
                    <Box
                      textAlign={{ base: "center", md: "start" }}
                      display={"flex"}
                      flexDirection={"row"}
                      width={{ base: "100%", md: "250px" }}
                      textColor={"yellow"}
                    >
                      <Input
                        placeholder="Enter your Email"
                        color="yellow"
                        borderRadius="6px 0 0 6px"
                        _focus={{
                          borderColor: "yellow",
                          boxShadow: "0 0 0 0 rgba(255, 223, 0, 0.6)",
                        }}
                      />
                      <Button
                        borderRadius={"0 6px 6px 0"}
                        bg={"yellow"}
                        fontSize={32}
                      >
                        {" "}
                        <RiSendPlaneLine />{" "}
                      </Button>
                    </Box>
      
                    <Flex
                      direction={"row"}
                      gap={4}
                      pt={8}
                      justifyContent={{ base: "center", md: "start" }}
                    >
                      <Link fontSize={"2xl"} _hover={{ color: "yellow" }}>
                        <TbBrandGithubFilled />
                      </Link>
                      <Link fontSize={"2xl"} _hover={{ color: "yellow" }}>
                        <BsTwitter />
                      </Link>
                      <Link fontSize={"2xl"} _hover={{ color: "yellow" }}>
                        <FaLinkedinIn />
                      </Link>
                      <Link fontSize={"2xl"} _hover={{ color: "yellow" }}>
                        {" "}
                        <FaInstagramSquare />
                      </Link>
                    </Flex>
                  </Box>
      
                  <Box
                    w={{ base: "100%", md: "25%" }}
                    p={4}
                    display={{ base: "block", md: "none" }}
                  >
                    <Image
                      width={150}
                      height={300}
                      alt="logo"
                      src="/logo2.svg"
                      style={{ margin: "0 auto" }}
                    />
                    <Text
                      pt={4}
                      textAlign={{ base: "center", md: "left" }}
                      fontSize={{ base: "14px", md: "28px" }}
                    >
                      A Magical Tool to Optimize you content for the first know who
                      you&apos;re targeting. Identify your target audience.
                    </Text>
                  </Box>
                </Flex>
      
                <Box textAlign={"center"} py={{ base: 0, md: 4 }} pb={4}>
                  <Text>
                    Copyright
                    <Text as={"span"} textColor={"yellow"}>
                      {" "}
                      GenAI.
                    </Text>{" "}
                    Design By Marvel_Theme
                  </Text>
                </Box>
              </Box>
            </Container>
          </Box>
        );
      };
      
      export default Footer;
      