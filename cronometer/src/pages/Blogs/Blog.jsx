import { Search2Icon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Flex,
  Heading,
  Image,
  Input,
  InputGroup,
  InputRightAddon,
  Text,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import { Community } from "./comp/Community";
import { NewArr } from "./comp/NewArr";
import { Popular } from "./comp/Popular";
import { FirstBox1 } from "./comp/FirstBox";

export const Blog = () => {
  return (
    <Box>
      <Box mt={10}>
        <FirstBox />
      </Box>
      <Box w="full" bg="gray.50" m="30px auto">
        <Achieves />
      </Box>
      <Box bg="#fff" w="full" m={"30px auto"}>
        <Hacks />
      </Box>
      <Box bg="#fff" w="full" m={"30px auto"}>
        <Updates />
      </Box>
      <Box bg="#ff763f" w="full">
        <Flex
          direction={{ base: "column", md: "row", lg: "row" }}
          gap="5%"
          p={8}
        >
          <VStack flex={3} color="#fff" p={4}>
            <Box>
              <Heading fontSize={50}>Eat smarter. Live better.</Heading>
            </Box>
            <Box p={6}>
              <Text fontSize={25}>
                Track your foods, exercise, and health data with the Cronometer
                app.
              </Text>
            </Box>
          </VStack>
          <Flex justify="center" align="center" flex={3} >
            <Box 
            bg={"#fff"} 
            color="#ff763f" 
            w={'50%'} 
            h='20%' 
            borderRadius={'5px'}
            fontSize={25}
            textAlign='center'
             >
              <Text>Sign Up - It's Free</Text>
            </Box>
          </Flex>
        </Flex>
      </Box>

      <Box w='full' m={'80px auto'} p={2}>
        <Popular/>
      </Box>
      <Box w={'full'} m={'40px auto'} mb={{base:'80px',md:'40px',lg:'40px'}} p={2}>
        <NewArr/>
      </Box>
      <Box w={'full'} m={'40px auto'} mb={{base:'80px',md:'40px',lg:'40px'}} p={2}>
        <Community/>
      </Box>
      <Box w={'full'} m={'40px auto'} mb={{base:'80px',md:'40px',lg:'40px'}} p={2}>
        <FirstBox1/>
      </Box>
    </Box>
  );
};

const FirstBox = () => {
  return (
    <>
      <VStack align="center" justify="center">
        <Box
          
          textAlign="center"
          lineHeight={"4rem"}
          color="#fff"
          p={"80px 0 140px"}
          w={"full"}
          position="relative"
          transition={`background .3s,border .3s,border-radius .3s,box-shadow .3s`}
          backgroundImage={`linear-gradient(80deg,#ff763f 0%,#ffb56b 100%)`}
          backgroundColor="transparent"
          borderBottomRadius={'40%'}
        >
          <Heading fontSize={45}>The Cronometer Blog</Heading>
          <Text fontSize={30}>App Updates, Nutrition Tips & Inspiration</Text>
        </Box>

        <Flex>
          <VStack></VStack>
          <Box></Box>
        </Flex>
      </VStack>
    </>
  );
};

const Achieves = () => {
  return (
    <>
      <VStack w="80%" m="20px auto" p={6} pt={6} pb={6}>
        <Box textAlign={"center"} p={10}>
          <Heading fontSize={45}>Browse the Archives</Heading>
        </Box>
        <Flex
          w={"full"}
          direction={{ base: "column", md: "row", lg: "row" }}
          gap="4%"
          justify="space-around"
          p={6}
          color="#ff763f"
          fontSize={20}
          //   border="1px solid red"
        >
          <Text>Nutrition</Text>
          <Text>Fitness</Text>
          <Text>Features</Text>
          <Text>Recipe</Text>
          <Text>App Updates</Text>
        </Flex>
        <Box w="full" pb={8}>
          <InputGroup size="lg" p={4}>
            <Input
              bg="#fff"
              focusBorderColor="none"
              type="text"
              placeholder="Search Blog Posts"
              _placeholder={{ opacity: 1, color: "gray.500" }}
              boxShadow={`rgba(17, 12, 46, 0.15) 0px 48px 100px 0px`}
            />
            <InputRightAddon
              bg={"#ff763f"}
              color="#fff"
              children={<Search2Icon />}
            />
          </InputGroup>
        </Box>
      </VStack>
    </>
  );
};

const Hacks = () => {
  return (
    <>
      <Flex
        direction={{ base: "column", md: "row", lg: "row" }}
        justify="space-between"
        gap="3%"
        h={{ base: "fit-content", md: "450px", lg: "450px" }}
        w="80%"
        m={"30px auto"}
        p={8}
        // border={"1px solid"}
      >
        <VStack flex={5} p={4}>
          <Box>
            <Text color={"#ff763f"}> - Crono Hacks</Text>
            <Heading fontSize={50}>Cronometer Tips & Tricks</Heading>
          </Box>
          <Box>
            <Text fontSize={20}>
              Whether you’re a new or longtime user, here are some helpful tips
              to make the most of your nutrition tracking.
            </Text>
          </Box>
          <Box>
            <Button
              h="50px"
              w="250px"
              fontSize={25}
              borderRadius={"10px"}
              color={"#fff"}
              bg="#ff763f"
              _hover={{
                color: "#fff",
                bg: "#ff763f",
              }}
            >
              Get the Tips
            </Button>
          </Box>
        </VStack>
        <Box flex={4} h={{ base: "300px", md: "400px", lg: "400px" }} p={6}>
          <Image
            h={"100%"}
            src="https://sp-ao.shortpixel.ai/client/to_webp,q_lossy,ret_img,w_500/https://cronometer.com/blog/wp-content/uploads/2019/08/cronometer-starter.png"
          />
        </Box>
      </Flex>
    </>
  );
};

const Updates = () => {
  return (
    <>
      <Flex
        direction={{ base: "column", md: "row", lg: "row" }}
        justify="space-between"
        gap="3%"
        h={{ base: "fit-content", md: "450px", lg: "450px" }}
        w="80%"
        m={"30px auto"}
        p={8}
        // border={"1px solid"}
      >
        <Box flex={4} h={{ base: "300px", md: "400px", lg: "400px" }} p={6}>
          <Image
            h={"100%"}
            src="https://sp-ao.shortpixel.ai/client/to_webp,q_lossy,ret_img,w_1536/https://cronometer.com/blog/wp-content/uploads/2021/12/140642741_l-1536x1536.jpg"
          />
        </Box>
        <VStack flex={5} p={4} justify="start">
          <Box>
            <Text color={"#ff763f"}> - App Updates</Text>
            <Heading fontSize={50}>
              New & Improved:
              <br /> The Latest Updates
            </Heading>
          </Box>
          <Box>
            <Text fontSize={20}>
              Get up to date on all of the latest Cronometer updates, including
              cool new features like our Recipe Importer or Target Scheduler!
            </Text>
          </Box>
          <Box>
            <Button
              h="50px"
              w="200px"
              fontSize={25}
              borderRadius={"10px"}
              color={"#fff"}
              bg="#ff763f"
              _hover={{
                color: "#fff",
                bg: "#ff763f",
              }}
            >
              Read More
            </Button>
          </Box>
        </VStack>
      </Flex>
    </>
  );
};
