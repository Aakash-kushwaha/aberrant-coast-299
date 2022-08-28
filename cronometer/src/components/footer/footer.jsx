import React from "react";
import {
  Box,
  Container,
  Link,
  Stack,
  Text,
  Flex,
  useColorModeValue,
  Image,
} from "@chakra-ui/react";

const Footer = () => {
  return (
    <>
      <Box
        bg="#4f4e53"
        mt="10rem"
        color={"white"}
        fontSize={{ base: "0.4rem", md: "0.75rem", lg: "0.95rem" }}
      >
        <Box w={{ base: "100%", md: "80%", lg: "80%" }} m="auto">
          <Box
            display="flex"
            w={{ base: "60%", md: "20%", lg: "20%" }}
            gap="20px"
            margin="auto"
          >
            {" "}
            <Image
              h={{ base: "30px", md: "50px", lg: "50px" }}
              mt="25px"
              src="https://cdn1.cronometer.com/2021/landing/social_instagram-icon.png"
            />
            <Image
              h={{ base: "30px", md: "50px", lg: "50px" }}
              mt="25px"
              src="https://cdn1.cronometer.com/2021/landing/social_facebook-icon.png"
            />
            <Image
              h={{ base: "30px", md: "50px", lg: "50px" }}
              mt="25px"
              src="https://cdn1.cronometer.com/2021/landing/social_twitter-icon.png"
            />
            <Image
              h={{ base: "30px", md: "50px", lg: "50px" }}
              mt="25px"
              src="https://cdn1.cronometer.com/2021/landing/social_youtube-icon.png"
            />
          </Box>
          <Box
            display="flex"
            w={{ base: "62%", md: "28%", lg: "28%" }}
            gap="20px"
            margin="auto"
            mb="35px"
          >
            <Image
              h="50px"
              w={{ base: "100px", md: "150px", lg: "150px" }}
              mt="25px"
              src="https://cdn1.cronometer.com/2021/landing/ios-icon.svg"
            />
            <Image
              h="50px"
              w={{ base: "100px", md: "150px", lg: "150px" }}
              mt="25px"
              src="https://cdn1.cronometer.com/2021/landing/android-icon.svg"
            />
          </Box>
          <hr />
          <Container
            as={Stack}
            maxW={"100%"}
            py={6}
            fontFamily="geomanist-regular',sans-serif"
            pt={"50px"}
          >
            <Flex
              direction="row"
              justifyContent="space-between"
              gap="10px"
              mb="40px"
            >
              <Stack>
                <Image
                  w={{ base: "100px", md: "250px", lg: "250px" }}
                  src={
                    "https://cdn1.cronometer.com/logos/cronometer-logo-orange.png"
                  }
                  alt="logos"
                  className="picsize"
                />
              </Stack>
              <Stack align={"flex-start"}>
                <Text
                  fontSize={{ base: "0.6rem", md: "1.2rem", lg: "1.2rem" }}
                  fontWeight={"bold"}
                >
                  Cronometer
                </Text>

                <a href="https://cronometer.com/" target="_blank">
                  For Individuals
                </a>
                <a href={"https://cronometer.com/pro/"} target="_blank">
                  For Professionals
                </a>
                <a href={"https://cronometer.com/privacy/"} target="_blank">
                  Privacy
                </a>
                <a href={"https://cronometer.com/terms/"} target="_blank">
                  Terms
                </a>
              </Stack>
              <Stack align={"flex-start"}>
                <Text
                  fontSize={{ base: "0.6rem", md: "1.2rem", lg: "1.2rem" }}
                  fontWeight={"bold"}
                >
                  The Company
                </Text>

                <a href="https://cronometer.com/" target="_blank">
                  About Us
                </a>
                <a href={"https://cronometer.com/pro/"} target="_blank">
                  Crono Blog
                </a>
                <a href={"https://cronometer.com/privacy/"} target="_blank">
                  Crono Forums
                </a>
                <a href={"https://cronometer.com/terms/"} target="_blank">
                  Jobs
                </a>
                <a href={"https://cronometer.com/terms/"} target="_blank">
                  Support
                </a>
              </Stack>

              <Stack align={"flex-start"}>
                <Text
                  fontSize={{ base: "0.6rem", md: "1.2rem", lg: "1.2rem" }}
                  fontWeight={"bold"}
                >
                  Partners & Affiliates
                </Text>

                <a href="https://cronometer.com/" target="_blank">
                  Afiliate Program
                </a>
                <a href={"https://cronometer.com/pro/"} target="_blank">
                  Media Kit
                </a>
              </Stack>
            </Flex>
            <Box textAlign={"center"} fontSize="2rem" fontWeight={"bold"}>
              <Text
                fontSize={{ base: "0.4rem", md: "0.75rem", lg: "0.95rem" }}
                textAlign={"center"}
              >
                Copyright © 2011-2022
              </Text>
              <Text
                fontSize={{ base: "0.4rem", md: "0.75rem", lg: "0.95rem" }}
                textAlign={"center"}
              >
                All rights reserved
              </Text>
            </Box>
          </Container>
        </Box>
      </Box>
    </>
  );
};

export default Footer;
