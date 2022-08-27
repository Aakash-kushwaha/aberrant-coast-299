import React from "react";
import { Box, Flex, Image,Button, Text } from "@chakra-ui/react";
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
} from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";
import {Link as RouterLink, useNavigate} from 'react-router-dom';



const Navbar = () => {
  const navigate= useNavigate();
  return (
    <>
      <Box
        display={"flex"}
        alignItems={"center"}
        width={{ base: "90%", sm: "95%", md: "90%", lg: "95%" }}
        height="fit-content"
        m="2% auto"
        pb={"2%"}
        borderBottom={"2px solid gray.300"}
      >
        <Flex
          w={"95%"}      
          justify="space-between"
          align={"center"}
          m='auto'
          // border={"1px solid black"}
        >
          <Box 
          flex={5}
          //  border={"1px solid red"}
           >
            <RouterLink to='/'>
            <Image
            // onClick={()=>navigate('/')}
              w={"40%"}
              src="https://cdn1.cronometer.com/2021/landing/cronometer-logo.svg"
            />
            </RouterLink>
          </Box>
          <Flex 
          flex={5}
          justify={'space-around'}
          align='center'
          // border={"1px solid red"}
          >
            <Box>
              <Menu>
                <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
                  Products
                </MenuButton>
                <MenuList fontSize={'0.7rem'}>
                  <MenuItem minH="80px">
                    <Image
                      boxSize="2rem"
                      borderRadius="full"
                      src="https://cdn1.cronometer.com/2021/landing/crono-icon-main-nav.svg"
                      alt="Fluffybuns the destroyer"
                      mr="12px"
                    />
                    <span>Cronometer <br/> <Text>For Individuals</Text></span>
                  </MenuItem>
                  <MenuItem minH="80px">
                    <Image
                      boxSize="2rem"
                      borderRadius="full"
                      src="https://cdn1.cronometer.com/2021/landing/pro-icon-main-nav.svg"
                      alt="Simon the pensive"
                      mr="12px"
                    />
                    <span>Cronometer  <br/> <Text>For Healthcare Professional</Text></span>
                  </MenuItem>
                </MenuList>
              </Menu>
            </Box>
            <Box _hover={{color:'#ff763f'}}>
              <RouterLink to='/support'>Support</RouterLink>
            </Box>
            <Box _hover={{color:'#ff763f'}}>  <RouterLink to='/blog' >Blogs</RouterLink></Box>
            <Box _hover={{color:'#ff763f'}}>  <RouterLink to='/' >Foroms</RouterLink></Box>
            <Box _hover={{color:'#ff763f'}}>  <RouterLink to='/about' >About</RouterLink></Box>
            <Box>
              <RouterLink to='/signup'>
            <Button          
             lineHeight='1.2'
             transition='all 0.2s cubic-bezier(.08,.52,.52,1)'
             border='1.5px solid #ff763f'
             px='8px'
             borderRadius='5px'
             fontSize='18px'
             fontWeight='semibold'
             bg='#fff'
             
             color='#ff763f'
             _hover={{ bg: '#fff' }}
             _active={{
              
               transform: 'scale(0.98)',
               borderColor: '#ff763f',
             }}
             _focus={{
               boxShadow:
                 '0 0 1px 2px rgba(255, 118, 63, .75), 0 1px 1px rgba(0, 0, 0, .15)',
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
