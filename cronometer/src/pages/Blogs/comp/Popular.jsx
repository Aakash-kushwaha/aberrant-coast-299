import { Flex, VStack, Box, Text, Heading, Image } from "@chakra-ui/react";
import React from "react";

export const Popular = () => {
  return (
    <>
      <VStack p={4}>
        <Box w="full"  >
          <Flex justify="space-between" border="1px solid">
            <Box>
              <Text color="#ff763f"> - On Trend</Text>
              <Heading>On Popular Stories</Heading>
            </Box>
            <Flex direction="bottom-right-corner">
              <Text>Explore More </Text>
            </Flex>
          </Flex>
        </Box>
        <Box>
          <Flex>
            <VStack flex={5}>
                    <Image w='100%'  src='https://sp-ao.shortpixel.ai/client/to_webp,q_lossy,ret_img,w_940,h_788/https://cronometer.com/blog/wp-content/uploads/2022/04/Untitled-design-6.png' />
                    <Heading></Heading>
                    <Text></Text>
                    <Box>
                        <Text></Text>
                    </Box>
            </VStack>
          </Flex>
        </Box>
      </VStack>
    </>
  );
};
