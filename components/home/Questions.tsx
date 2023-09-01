import {
        Box,
        Center,
        Container,
        Text,
        Accordion,
        AccordionItem,
        AccordionButton,
        AccordionPanel,
        AccordionIcon,
      } from "@chakra-ui/react";
      import React from "react";
      import { AddIcon, MinusIcon } from "@chakra-ui/icons";
      
      function Questions() {
        return (
          <Box bg={"#1a1d24"} pb={20}>
            <Container maxW={1300}>
              <Box p={{ base: 0, md: 4 }} textColor={"white"}>
                <Box
                  px={4}
                  pb={{ base: 16 }}
                  display={"flex"}
                  justifyContent={"center"}
                >
                  <Text
                    fontWeight={"bold"}
                    textAlign={"center"}
                    width={{ base: "100%", md: "50%" }}
                    fontSize={{ base: "36px", md: "40px" }}
                    p={{ base: 4, md: 6 }}
                  >
                    Questions About our GenAI? We have Answers!
                  </Text>
                </Box>
      
                <Accordion allowMultiple>
                  <Center>
                    <AccordionItem
                      width={{ base: "90%", md: "55%" }}
                      _hover={{ color: "yellow" }}
                    >
                      {({ isExpanded }) => (
                        <>
                          <h2>
                            <AccordionButton>
                              {isExpanded ? (
                                <MinusIcon fontSize="14px" />
                              ) : (
                                <AddIcon fontSize="14px" />
                              )}
                              <Box
                                as="span"
                                flex="1"
                                pl={6}
                                pt={4}
                                textAlign="left"
                                fontSize={{ base: "20px", md: "22px" }}
                              >
                                What Is GenAI Content Writing Tool?
                              </Box>
                            </AccordionButton>
                          </h2>
                          <AccordionPanel pb={4}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                            sed do eiusmod tempor incididunt ut labore et dolore magna
                            aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                            ullamco laboris nisi ut aliquip ex ea commodo consequat.
                          </AccordionPanel>
                        </>
                      )}
                    </AccordionItem>
                  </Center>
                  <Center>
                    <AccordionItem
                      width={{ base: "90%", md: "55%" }}
                      _hover={{ color: "yellow" }}
                    >
                      {({ isExpanded }) => (
                        <>
                          <h2>
                            <AccordionButton>
                              {isExpanded ? (
                                <MinusIcon fontSize="14px" />
                              ) : (
                                <AddIcon fontSize="14px" />
                              )}
                              <Box
                                as="span"
                                flex="1"
                                pl={6}
                                pt={4}
                                textAlign="left"
                                fontSize={{ base: "20px", md: "22px" }}
                              >
                                Is it helpful for Digital Marketer or Content Writer?
                              </Box>
                            </AccordionButton>
                          </h2>
                          <AccordionPanel pb={4}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                            sed do eiusmod tempor incididunt ut labore et dolore magna
                            aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                            ullamco laboris nisi ut aliquip ex ea commodo consequat.
                          </AccordionPanel>
                        </>
                      )}
                    </AccordionItem>
                  </Center>
                  <Center>
                    <AccordionItem
                      width={{ base: "90%", md: "55%" }}
                      _hover={{ color: "yellow" }}
                    >
                      {({ isExpanded }) => (
                        <>
                          <h2>
                            <AccordionButton>
                              {isExpanded ? (
                                <MinusIcon fontSize="14px" />
                              ) : (
                                <AddIcon fontSize="14px" />
                              )}
                              <Box
                                as="span"
                                flex="1"
                                pt={4}
                                pl={6}
                                textAlign="left"
                                fontSize={{ base: "20px", md: "22px" }}
                              >
                                Is there a limit on how much content I can generate?
                              </Box>
                            </AccordionButton>
                          </h2>
                          <AccordionPanel pb={4}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                            sed do eiusmod tempor incididunt ut labore et dolore magna
                            aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                            ullamco laboris nisi ut aliquip ex ea commodo consequat.
                          </AccordionPanel>
                        </>
                      )}
                    </AccordionItem>
                  </Center>
                  <Center>
                    <AccordionItem
                      width={{ base: "90%", md: "55%" }}
                      _hover={{ color: "yellow" }}
                    >
                      {({ isExpanded }) => (
                        <>
                          <h2>
                            <AccordionButton>
                              {isExpanded ? (
                                <MinusIcon fontSize="14px" />
                              ) : (
                                <AddIcon fontSize="14px" />
                              )}
                              <Box
                                as="span"
                                flex="1"
                                pt={4}
                                pl={6}
                                textAlign="left"
                                fontSize={{ base: "20px", md: "22px" }}
                              >
                                What Languages does it supports?
                              </Box>
                            </AccordionButton>
                          </h2>
                          <AccordionPanel pb={4}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                            sed do eiusmod tempor incididunt ut labore et dolore magna
                            aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                            ullamco laboris nisi ut aliquip ex ea commodo consequat.
                          </AccordionPanel>
                        </>
                      )}
                    </AccordionItem>
                  </Center>
                  <Center>
                    <AccordionItem
                      width={{ base: "90%", md: "55%" }}
                      _hover={{ color: "yellow" }}
                    >
                      {({ isExpanded }) => (
                        <>
                          <h2>
                            <AccordionButton>
                              {isExpanded ? (
                                <MinusIcon fontSize="14px" />
                              ) : (
                                <AddIcon fontSize="14px" />
                              )}
                              <Box
                                as="span"
                                flex="1"
                                pt={4}
                                pl={6}
                                textAlign="left"
                                fontSize={{ base: "20px", md: "22px" }}
                              >
                                What is SEO Writing AI and how do I use it?
                              </Box>
                            </AccordionButton>
                          </h2>
                          <AccordionPanel pb={4}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                            sed do eiusmod tempor incididunt ut labore et dolore magna
                            aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                            ullamco laboris nisi ut aliquip ex ea commodo consequat.
                          </AccordionPanel>
                        </>
                      )}
                    </AccordionItem>
                  </Center>
                </Accordion>
              </Box>
            </Container>
          </Box>
        );
      }
      
      export default Questions;
      