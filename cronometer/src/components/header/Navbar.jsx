import React from "react";
import { Box, Flex, Image, Button, Text } from "@chakra-ui/react";
import { Menu, MenuButton, MenuList, MenuItem } from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";
import { Link as RouterLink, useNavigate } from "react-router-dom";

const Navbar = () => {
  // const navigate= useNavigate();
  return (
    <>
      <Box
        display={"flex"}
        alignItems={"center"}
        width={{ base: "100%", sm: "95%", md: "90%", lg: "95%" }}
        height="fit-content"
        m="1% auto"
        pb={"2%"}
        borderBottom={"2px solid gray.300"}
      >
        <Flex
          w={"95%"}
          justify="space-between"
          align={"center"}
          m="auto"
          // border={"1px solid black"}
        >
          <Box
            flex={5}
            //  border={"1px solid red"}
          >
            <RouterLink to="/">
              <Image
                // onClick={()=>navigate('/')}
                w={{ base: "100%", md: "40%", lg: "40%" }}
                src="https://cdn1.cronometer.com/2021/landing/cronometer-logo.svg"
              />
            </RouterLink>
          </Box>
          <Flex
            flex={5}
            justify={"space-around"}
            align="center"
            // border={"1px solid red"}
          >
            <Box flex={1}>
              <Menu>
                <MenuButton
                  as={Button}
                  rightIcon={<ChevronDownIcon />}
                  fontSize={{ base: 12, md: 16, lg: 16 }}
                >
                  Products
                </MenuButton>
                <MenuList
                  fontSize={{ base: "0.3rem", md: "0.7rem", lg: "0.7rem" }}
                >
                  <MenuItem minH="80px">
                    <Image
                      boxSize={{base:'1rem',md:"1.6rem",lg:"2rem"}}
                      borderRadius="full"
                      src="https://cdn1.cronometer.com/2021/landing/crono-icon-main-nav.svg"
                      alt="Fluffybuns the destroyer"
                      mr={{base:5,md:8,lg:12}}
                    />
                    <span>
                      Cronometer <br /> <Text>For Individuals</Text>
                    </span>
                  </MenuItem>
                  <MenuItem minH="80px">
                    <Image
                      boxSize={{base:'1rem',md:"1.6rem",lg:"2rem"}}
                      borderRadius="full"
                      src="https://cdn1.cronometer.com/2021/landing/pro-icon-main-nav.svg"
                      alt="Simon the pensive"
                      mr={{base:5,md:8,lg:12}}                    />
                    <span>
                      Cronometer <br /> <Text>For Healthcare Professional</Text>
                    </span>
                  </MenuItem>
                </MenuList>
              </Menu>
            </Box>
            <Box
              _hover={{ color: "#ff763f" }}
              fontSize={{ base: 8, md: 14, lg: 16 }}
              flex={1}
            >
              <RouterLink to="/support">Support</RouterLink>
            </Box>
            <Box
              _hover={{ color: "#ff763f" }}
              fontSize={{ base: 8, md: 14, lg: 16 }}
              flex={1}
            >
              {" "}
              <RouterLink to="/blog">Blogs</RouterLink>
            </Box>
            <Box
              _hover={{ color: "#ff763f" }}
              fontSize={{ base: 8, md: 14, lg: 16 }}
              flex={1}
            >
              {" "}
              <RouterLink to="/">Forums</RouterLink>
            </Box>
            <Box
              _hover={{ color: "#ff763f" }}
              fontSize={{ base: 8, md: 14, lg: 16 }}
              flex={1}
            >
              {" "}
              <RouterLink to="/about">About</RouterLink>
            </Box>
            <Box flex={1}>
              <RouterLink to="/signup">
                <Button
                  lineHeight="1.2"
                  transition="all 0.2s cubic-bezier(.08,.52,.52,1)"
                  border="1.5px solid #ff763f"
                  px={{ base: 3, md: 6, lg: 8 }}
                  borderRadius="5px"
                  fontSize={{ base: 8, md: 16, lg: 18 }}
                  fontWeight="semibold"
                  bg="#fff"
                  color="#ff763f"
                  _hover={{ bg: "#fff" }}
                  _active={{
                    transform: "scale(0.98)",
                    borderColor: "#ff763f",
                  }}
                  _focus={{
                    boxShadow:
                      "0 0 1px 2px rgba(255, 118, 63, .75), 0 1px 1px rgba(0, 0, 0, .15)",
                  }}
                >
                  SignUp
                </Button>
              </RouterLink>
            </Box>
          </Flex>
        </Flex>
      </Box>
    </>
  );
};

export default Navbar;
