import { Box, Flex, Heading, Image, Text, VStack } from "@chakra-ui/react";
import React from "react";

export const Community = () => {
  return (
    <>
      <Flex direction={'column'} gap='20px'  p={4} w='80%' m='auto'>
        <Text textAlign={'left'} color='#ff763f'>- Community</Text>
        <Box 
        
        p={10} 
        h='500px' 
        borderRadius={'2%'} 
        backgroundImage='no-repeat'
        background={`url("https://i.pinimg.com/originals/fe/ba/0a/feba0a4607e79de1ab57423909ff8727.jpg")`}
        >
              <VStack color={'#fff'} justify='center' align={'center'} fontSize={{base:50,md:70,lg:70}} p={4}>
                {/* <Text>Know Yourself</Text> */}
                <Image src='https://cronometer.com/blog/wp-content/uploads/2021/06/know-yourself-cronometer-logo-white.svg' />
              </VStack>
        </Box>
        <Heading>Eat smarter. Go farther.</Heading>
        <Text>
          Cronometer has helped millions to get to know their bodies better and
          discover their nutrition. Learn about the features and read the
          stories that will inspire you to crush your health goals.
        </Text>
        <Box w={'fit-content'} borderRadius='5px' p={2} pl={4} pr={4} fontSize={{base:15,sm:22,md:25,lg:30}} bg='#ff763f' color={'#fff'}>
            <Text>Get To Know Yourself</Text>
        </Box>
      </Flex>
    </>
  );
};
