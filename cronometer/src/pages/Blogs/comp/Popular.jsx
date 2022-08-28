import { ArrowForwardIcon } from "@chakra-ui/icons";
import { Flex, VStack, Box, Text, Heading, Image } from "@chakra-ui/react";
import React from "react";

export const Popular = () => {
  return (
    <>
      <VStack p={6}>
        <Box w="full" mb={{base:20,md:30,lg:30}} p={4}>
          <Flex 
          justify="space-between" 
          // border="1px solid"
          >
            <Box>
              <Text color="#ff763f" fontSize={18}> - On Trend</Text>
              <Heading fontSize={{base:20,md:45,lg:45}} color='gray.600'> Popular Stories</Heading>
            </Box>
            <Flex direction="bottom-right-corner">
              <Text color={'#ff763f'} textAlignLast='end'>Explore More <ArrowForwardIcon/> </Text>
            </Flex>
          </Flex>
        </Box>
        <Box>
          <Flex
            direction={{ base: "column", sm: "column", md: "row", lg: "row" }}
            justify='space-around'
            gap="3%"
          >
            <VStack
              flex={4}
              p={4}
              h={{ base: "300px", md: "500px", lg: "500px" }}
              boxShadow="rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px"
              // border={"1px solid"}
              textAlign='left'
              justify={'space-around'}
            >
              <Image
                w="100%"
                h={{ base: "100px", md: "250px", lg: "250px" }}
                borderRadius="20px"
                src="https://sp-ao.shortpixel.ai/client/to_webp,q_lossy,ret_img,w_940,h_788/https://cronometer.com/blog/wp-content/uploads/2022/04/Untitled-design-6.png"
              />
              <Heading textAlign="start" color={'gray.600'}>
                Dietitians Discuss Diet And Eczema
              </Heading>
              <Text textAlign="start" fontSize={14} color='gray.700'>April 27, 2022</Text>
              <Box>
                <Text textAlign="start"  color={'gray.700'}>
                  Registered Dietitians Discuss The Link Between Diet And Eczema
                  Eczema is a common, chronic and complex skin disease that
                  arises
                </Text>
              </Box>
            </VStack>
            <VStack
              flex={4}
              p={4}
              h={{ base: "300px", md: "500px", lg: "500px" }}
              boxShadow="rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px"
              // border={"1px solid"}
              textAlign='left'
              justify={'space-around'}
            >
              <Image
                w="100%"
                h={{ base: "100px", md: "250px", lg: "250px" }}
                borderRadius="20px"
                src="https://sp-ao.shortpixel.ai/client/to_webp,q_lossy,ret_img,w_1336,h_2048/https://cronometer.com/blog/wp-content/uploads/2022/04/IMG_7610-scaled.jpg"
              />
              <Heading textAlign="left" color={'gray.600'}>
              How Can Diet & Nutrition Affect Acne
              </Heading>
              <Text textAlign="left" color={'gray.700'} >April 26, 2022</Text>
              <Box>
                <Text textAlign="left" color={'gray.700'} >
                How Can Diet And Nutrition Affect Acne Acne is a chronic, multifactorial skin condition that is estimated to affect 9.4%
                </Text>
              </Box>
            </VStack>
          </Flex>
        </Box>
      </VStack>
    </>
  );
};
