import {
        Box,
        Container,
        Text,
        Flex,
        Card,
        Button,
        List,
        ListItem,
        Center,
      } from "@chakra-ui/react";
      import React from "react";
      
      const Plan = () => {
        return (
          <Box bg={"#1a1d24"} pb={{ base: 12, md: 24 }}>
            <Container maxW={1300}>
              <Box textColor={"white"}>
                <Box textAlign={"center"} p={4}>
                  <Text textColor={"yellow"} p={2}>
                    Pricing Plan
                  </Text>
                  <Text
                    p={{ base: 0, md: 2 }}
                    fontSize={{ base: "36px", md: "48px" }}
                  >
                    Ready to Get Started?
                  </Text>
                  <Text
                    fontSize={{ base: "36px", md: "48px" }}
                    p={{ base: 0, md: 2 }}
                  >
                    {" "}
                    Don&apos;t Worry, We&apos;ll Keep You Under Budget
                  </Text>
                  <Text p={2}>Get started with a 5-day trial, Cancel anytime.</Text>
                </Box>
      
                <Flex
                  direction={{ base: "column", md: "row" }}
                  pt={8}
                  gap={4}
                  justifyContent={"space-between"}
                >
                  <Box
                    p={10}
                    border="2px solid #1b7c40"
                    _hover={{ border: "2px solid yellow" }}
                    borderRadius="2xl"
                  >
                    <Text
                      textColor={"yellow"}
                      fontSize={{ base: "28px", md: "32px" }}
                    >
                      Free
                    </Text>
                    <Text fontSize={{ base: "40px", md: "62px" }}>$00</Text>
                    <Text pb={4} fontSize={{ base: "20px", md: "24px" }}>
                      A 10X faster way to writing your professional copy
                    </Text>
                    <Button
                      textColor={"white"}
                      bg={"#1b7c40"}
                      py={8}
                      borderRadius={12}
                      fontSize={{ base: "24px", md: "20px" }}
                      width={"100%"}
                      _hover={{ bg: "yellow", color: "black" }}
                    >
                      Start for Free
                    </Button>
      
                    <List pt={4} justifyContent={"center"} alignItems={"center"}>
                      <ListItem py={4}>&#8226; Single Seats</ListItem>
                      <ListItem py={4}>&#8226; 10,000 words per month</ListItem>
                      <ListItem py={4}>&#8226; 30+ AI writing tools</ListItem>
                      <ListItem py={4}>&#8226; 60+ Copywriting tools</ListItem>
                      <ListItem py={4}>&#8226; 10+ languages</ListItem>
                    </List>
                  </Box>
                  <Box
                    p={10}
                    border="2px solid #1b7c40"
                    _hover={{ border: "2px solid yellow" }}
                    borderRadius="2xl"
                  >
                    <Text
                      textColor={"yellow"}
                      fontSize={{ base: "28px", md: "32px" }}
                    >
                      Starter
                    </Text>
                    <Text fontSize={{ base: "40px", md: "62px" }}>$29</Text>
                    <Text pb={4} fontSize={{ base: "20px", md: "24px" }}>
                      A 10X faster way to writing your professional copy
                    </Text>
                    <Button
                      textColor={"white"}
                      py={8}
                      borderRadius={12}
                      bg={"#1b7c40"}
                      fontSize={{ base: "24px", md: "20px" }}
                      width={"100%"}
                      _hover={{ bg: "yellow", color: "black" }}
                    >
                      Start for Free
                    </Button>
      
                    <List pt={4} justifyContent={"center"} alignItems={"center"}>
                      <ListItem py={4}>&#8226; Single Seats</ListItem>
                      <ListItem py={4}>&#8226; 10,000 words per month</ListItem>
                      <ListItem py={4}>&#8226; 30+ AI writing tools</ListItem>
                      <ListItem py={4}>&#8226; 60+ Copywriting tools</ListItem>
                      <ListItem py={4}>&#8226; 10+ languages</ListItem>
                    </List>
                  </Box>
                  <Box
                    p={10}
                    border="2px solid #1b7c40"
                    _hover={{ border: "2px solid yellow" }}
                    borderRadius="2xl"
                  >
                    <Text
                      textColor={"yellow"}
                      fontSize={{ base: "28px", md: "32px" }}
                    >
                      Enterprise
                    </Text>
                    <Text fontSize={{ base: "40px", md: "62px" }}>$119</Text>
                    <Text pb={4} fontSize={{ base: "20px", md: "24px" }}>
                      A 10X faster way to writing your professional copy
                    </Text>
                    <Button
                      textColor={"white"}
                      py={8}
                      borderRadius={12}
                      bg={"#1b7c40"}
                      fontSize={{ base: "24px", md: "20px" }}
                      width={"100%"}
                      _hover={{ bg: "yellow", color: "black" }}
                    >
                      Start for Free
                    </Button>
      
                    <List pt={4} justifyContent={"center"} alignItems={"center"}>
                      <ListItem py={4}>&#8226; Single Seats</ListItem>
                      <ListItem py={4}>&#8226; 10,000 words per month</ListItem>
                      <ListItem py={4}>&#8226; 30+ AI writing tools</ListItem>
                      <ListItem py={4}>&#8226; 60+ Copywriting tools</ListItem>
                      <ListItem py={4}>&#8226; 10+ languages</ListItem>
                    </List>
                  </Box>
                </Flex>
              </Box>
            </Container>
          </Box>
        );
      };
      
      export default Plan;
      