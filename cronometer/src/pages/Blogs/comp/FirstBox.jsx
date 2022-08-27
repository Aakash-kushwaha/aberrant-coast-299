import { Flex, Heading, Image, Stack, Text } from "@chakra-ui/react";
import React from "react";
import {Link as RouterLink} from 'react-router-dom';



 export const FirstBox1 = () => {
    return (
      <>
        <Flex
          direction={{ base: "column", sm: "column" ,lg:'row',md:'row'}}
          w={"80%"}
          m="auto"
          h={{base:'fit-content',lg:'600px', md:"600px",sm:'fit-content'}}
          justify={"space-between"}
          pt={"3%"}
          pb="2%"
          // border="1px solid black"
        >
             <Stack flex={5}>
            <Image
              h={{base:"300px",sm:"300px",lg:"480px",md:"480px"}}
              m='auto'
              src="https://cdn1.cronometer.com/2021/landing/cronometer-hero-graphic.svg"
              alt="USE OUR MOBILE VERSION"
            />
          </Stack>
          <Flex
            flex={4}
            direction={"column"}
            justify="space-evenly"
            p={2}
            // border="1px solid red"
          >
           
            <Heading color={'gray.800'} lineHeight={"2.8rem"} fontSize={{base:30,sm:18,lg:50,md:50}}>
            Track your food, exercise and health metrics with our app.
            </Heading>
  
            <Stack>
              <Flex
                h={{base:"30px",sm:"40px",lg:"60px",md:"60px"}}
                w={"fit-content"}
                bg="#ff763f"
                borderRadius={"6px"}
                alignItems="center"
                justifyContent={"center"}
                color={"#fff"}
                _hover={{
                  transition: "1.2",
                }}
                fontSize={25}
                pl={4}
                pr={4}
              >
                <RouterLink to="#">Sign Up - It's Free! </RouterLink>
              </Flex>
             
                <Text color="gray.800" fontSize={25} textDecoration='underline'>
                 <RouterLink to="#">Learn More.</RouterLink>
                </Text>
            </Stack>
            
          </Flex>
         
        </Flex>
      </>
    );
  };