import { Box, Flex, Heading, Highlight, Image, Stack, Text } from "@chakra-ui/react";
import React from "react";
import { Link as RouterLink } from "react-router-dom";

const Homepage = () => {
  return (
    <Box
    w={'90%'}
    m='auto'
      fontFamily="'Open Sans', sans-serif"
      color="#333"
      lineHeight="1em"
      p={"2%"}
      h={"fit-content"}
    >
      <FirstBox />
    </Box>
  );
};

export default Homepage;

const FirstBox = () => {
  return (
    <>
      <Flex
        h={"500px"}
        justify={"space-between"}
        pt={"3%"}
        pb='2%'
        // border="1px solid black"
      >
        <Flex
          flex={4}
          direction={"column"}
          justify="space-evenly"
          p={2}
          // border="1px solid red"
        >
          <Box >
            <Heading fontSize={"50px"}>Eat smarter.</Heading>
            <Heading fontSize={"50px"}>Live better.</Heading>
          </Box>
          {/* <Box p={"6px 0px"}> */}
          <Text lineHeight={"2.5rem"} fontSize={30}>
            Track your calories, exercise,
            <br />
            biometrics and health data.
          </Text>

          <Stack>
            <Flex
              h={"60px"}
              w={"40%"}
              bg="#ff763f"
              borderRadius={"6px"}
              alignItems="center"
              justifyContent={"center"}
              color={"#fff"}
              _hover={{
                transition: "1.2",
              }}
            >
              <RouterLink to='#'>Sign Up - It's Free! </RouterLink>
            </Flex>
            <Flex fontSize={'18px'} p={'1%'} w={'55%'} bg={'blue.500'} color='white'>
            <Text
            
             > 
              Already have an account?  <RouterLink to="#">Log in.</RouterLink>
              </Text>
           
            
            </Flex>
          </Stack>
          {/* </Box> */}
        </Flex>
        <Stack flex={5}>
          <Image
            h={"480px"}
            src="https://cdn1.cronometer.com/2021/landing/cronometer-hero-graphic.svg"
            alt="USE OUR MOBILE VERSION"
          />
        </Stack>
      </Flex>
    </>
  );
};
