import React from "react";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverBody,
  PopoverArrow,
  Box,
  Flex,
  Image,
  VStack,
  Button,
} from "@chakra-ui/react";
import { IoMdArrowDropdown } from "react-icons/io";
import { Link, useNavigate } from "react-router-dom";
import styles from "./InnerNav.module.css"

const InnerNav = () => {
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.reload(true);
  };

  return (
    <div>
      <div class={styles.navbar_container}>
        <Popover trigger="hover" placement="bottom-end" size="lg">
          <PopoverTrigger>
            <Box
              boxSize="200px"
              height="60px"
              position={"absolute"}
              top="10px"
              left="20px"
            >
              <Flex gap="10px" mt={"-1rem"}>
                {" "}
                <Image
                  src="https://cdn1.cronometer.com/logos/cronometer-logo-orange.png"
                  alt="logo"
                />
                <Box margin={"auto"}>
                  <IoMdArrowDropdown color="orange" />
                </Box>
              </Flex>
            </Box>
          </PopoverTrigger>
          <PopoverContent mt={"-2rem"}>
            <PopoverArrow />
            <PopoverBody>
              <Flex gap="10px">
                <VStack>
                  <p style={{ fontSize: "12px", color: "grey" }}>
                    Signed in as : shreeprada
                  </p>
                  <Box
                    border="1px solid #eeeeee"
                    padding="5px 10px"
                    backgroundColor={"#f3f3f3"}
                    _hover={{ border: "1px solid orange" }}
                    cursor="pointer"
                    onClick={() => {
                      navigate("/plans");
                    }}
                  >
                    <Flex justifyContent={"space-between"}>
                      <h2>Gold</h2>
                      <p style={{ fontSize: "12px" }}>$49.99/year</p>
                    </Flex>
                    <p style={{ fontSize: "10px" }}>
                      Our Premium features like Timestamps and Food suggestions
                      will help you plan,customize and share your perfect diet
                    </p>
                    <Flex justifyContent={"space-between"}>
                      <h2></h2>
                      <p style={{ color: "orange", fontSize: "13px" }}>
                        Learn More
                      </p>
                    </Flex>
                  </Box>
                </VStack>
                <VStack>
                  <Button
                    colorScheme="orange"
                    variant="outline"
                    size="xs"
                    onClick={handleLogout}
                  >
                    Logout
                  </Button>
                  <Box
                    border="1px solid #eeeeee"
                    padding="5px 10px"
                    backgroundColor={"#f3f3f3"}
                    _hover={{ border: "1px solid orange" }}
                    cursor="pointer"
                    onClick={() => {
                      navigate("/plans");
                    }}
                  >
                    <Flex justifyContent={"space-between"}>
                      <h2>Professional</h2>
                      <p style={{ fontSize: "12px" }}>$29.95/mo</p>
                    </Flex>
                    <p style={{ fontSize: "10px" }}>
                      Are you a Coach,Trainer,Healthcare professional that
                      believes diet is a critical component to health and
                      fitness? Learn how you can monitor client's nutrition in
                      real-time with Cronometer Pro
                    </p>
                    <Flex justifyContent={"space-between"}>
                      <h2></h2>
                      <p style={{ color: "orange", fontSize: "13px" }}>
                        Learn More
                      </p>
                    </Flex>
                  </Box>
                </VStack>
              </Flex>
            </PopoverBody>
          </PopoverContent>
        </Popover>
        <div class={styles.rightnav}>
          <Box ><Link to="/home">Diary</Link> </Box>
          <Box >Trends</Box>
          <Box >Food </Box>
          <Box ><Link to="/settings">Settings</Link> </Box>
          <Box ><Link to="/plans">Plans</Link> </Box>
          <Box >Help</Box>
        </div>
      </div>
    </div>
  );
};

export default InnerNav;
