import {
        Box,
        Container,
        Text,
        Flex,
        Link,
        Button,
        Image,
      } from "@chakra-ui/react";
      import React from "react";
      import { AiOutlineMenu } from "react-icons/ai";
      import { AiOutlineClose } from "react-icons/ai";
      import { useState } from "react";
      import { useClient } from "next/client";

      const Nav = () => {
        const [menu, setMenu] = useState(false);
      
        const toggleMenu = () => {
          setMenu(!menu);
        };
      

        return (
          <Box bg={"#1a1d24"} position="fixed" zIndex={100} width="100%">
            <Container maxW={1300}>
              <Flex
                as="nav"
                align="center"
                justify="space-between"
                wrap="wrap"
                py="5px"
                px={2}
                color="white"
              >
                <Link href="/" pt={4} width={"160px"} height={"73px"}>
                  <Image src="/logo.svg" alt="logo of genai" />
                </Link>
      
                <Flex
                  color={"white"}
                  alignItems="center"
                  gap={10}
                  justifyContent="center"
                  display={{ base: "none", md: "flex" }}
                >
                  <Link _hover={{ color: "yellow", textDecoration: "none" }}>
                    {" "}
                    <Text>Home</Text>
                  </Link>
                  <Link _hover={{ color: "yellow", textDecoration: "none" }}>
                    <Text>Pages</Text>
                  </Link>
                  <Link _hover={{ color: "yellow", textDecoration: "none" }}>
                    <Text>Use cases</Text>
                  </Link>
                  <Link _hover={{ color: "yellow", textDecoration: "none" }}>
                    <Text>Pricing</Text>
                  </Link>
                  <Link _hover={{ color: "yellow", textDecoration: "none" }}>
                    <Text>Contact</Text>
                  </Link>
                  <Link _hover={{ color: "yellow", textDecoration: "none" }}>
                    <Text>Login</Text>
                  </Link>
      
                  <Box color={"yellow.800"}>
                    <Button
                      p={6}
                      color="yellow"
                      _hover={{ bgColor: "yellow", color: "black" }}
                      border={"2px solid yellow"}
                      bgColor={"transparent"}
                    >
                      Get Started
                    </Button>
                  </Box>
                </Flex>
      
                <Box display={{ base: "flex", md: "none" }} onClick={toggleMenu}>
                  {menu ? (
                    <AiOutlineClose style={{ color: "yellow", fontSize: 32 }} />
                  ) : (
                    <AiOutlineMenu style={{ color: "yellow", fontSize: 32 }} />
                  )}
                </Box>
              </Flex>
            </Container>
            <Box
              w={"full"}
              bg={"#1a1d24"}
              px={8}
              pb={4}
              pt={2}
              display={{ base: menu ? "block" : "none", md: "none" }}
            >
              <Flex
                color={"white"}
                gap={4}
                justifyContent="start"
                direction={"column"}
                display={{ base: "flex", md: "none" }}
              >
                <Link _hover={{ color: "yellow", textDecoration: "none" }}>
                  {" "}
                  <Text>Home</Text>
                </Link>
                <Link _hover={{ color: "yellow", textDecoration: "none" }}>
                  <Text>Pages</Text>
                </Link>
                <Link _hover={{ color: "yellow", textDecoration: "none" }}>
                  <Text>Use cases</Text>
                </Link>
                <Link _hover={{ color: "yellow", textDecoration: "none" }}>
                  <Text>Pricing</Text>
                </Link>
                <Link _hover={{ color: "yellow", textDecoration: "none" }}>
                  <Text>Contact</Text>
                </Link>
                <Link _hover={{ color: "yellow", textDecoration: "none" }}>
                  <Text>Login</Text>
                </Link>
      
                <Box color={"yellow.800"} pt={2}>
                  <Button
                    p={6}
                    color="yellow"
                    _hover={{ bgColor: "yellow", color: "black" }}
                    border={"2px solid yellow"}
                    bgColor={"transparent"}
                  >
                    Get Started
                  </Button>
                </Box>
              </Flex>
            </Box>
          </Box>
        );
      };
      
      export default Nav;
      