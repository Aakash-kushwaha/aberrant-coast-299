import React from "react";
import { Tabs, TabList, TabPanels, Tab, TabPanel,Image,Box,Flex,VStack,Button } from '@chakra-ui/react'
import {Popover,PopoverTrigger,PopoverContent,PopoverHeader,PopoverBody,PopoverFooter,
    PopoverArrow,PopoverCloseButton,PopoverAnchor,
  } from '@chakra-ui/react'
import { useNavigate } from "react-router-dom";
import {IoMdArrowDropdown} from "react-icons/io"
import Diary from "../../pages/Diarypage/Diary/Diary";
// import Trends from "../../pages/trends/Trends";
import Settings from "../../pages/settings/Settings";
import Plans from "../../pages/plans/Plans";
import Help from "../../pages/help/Help";
import Addfood from "../../pages/Diarypage/Diary/Addfood/Addfood";
const LoginHeader=()=>{
    const navigate=useNavigate();
    return(<>
    <Popover trigger='hover' placement='bottom-end' size='lg'>
        <PopoverTrigger>
        <Box boxSize='200px' height='60px' position={'absolute'} top='10px' left='20px'>
       <Flex gap='10px'> <Image src='https://cdn1.cronometer.com/logos/cronometer-logo-orange.png' alt='logo'/>
        <Box margin={'auto'}><IoMdArrowDropdown color='orange'/></Box></Flex>
        </Box>
        </PopoverTrigger>
        <PopoverContent >
            <PopoverArrow />
            <PopoverBody>
                <Flex gap='10px'>
                    <VStack>
                        <p style={{fontSize:'12px',color:'grey'}}>Signed in as : shreeprada</p>
                        <Box border='1px solid #eeeeee' padding='5px 10px' backgroundColor={'#f3f3f3'} _hover={{border:'1px solid orange'}} cursor='pointer' onClick={()=>{
                            navigate("/plans");
                        }}>
                            <Flex justifyContent={'space-between'}>
                                <h2>Gold</h2>
                                <p style={{fontSize:'12px'}}>$49.99/year</p>
                            </Flex>
                            <p style={{fontSize:'10px'}}>Our Premium features like Timestamps and Food suggestions will help you plan,customize and share your perfect diet</p>
                            <Flex justifyContent={'space-between'}>
                                <h2></h2>
                                <p style={{color:'orange',fontSize:'13px'}}>Learn More</p>
                            </Flex>
                        </Box>
                    </VStack>
                    <VStack>
                        <Button colorScheme='orange' variant='outline' size='xs'>Logout</Button>
                        <Box border='1px solid #eeeeee' padding='5px 10px' backgroundColor={'#f3f3f3'} _hover={{border:'1px solid orange'}} cursor='pointer' onClick={()=>{
                            navigate("/plans");
                        }}>
                            <Flex justifyContent={'space-between'}>
                                <h2>Professional</h2>
                                <p style={{fontSize:'12px'}}>$29.95/mo</p>
                            </Flex>
                            <p style={{fontSize:'10px'}}>Are you a Coach,Trainer,Healthcare professional that believes diet is a critical component to health and fitness? Learn how you can monitor client's nutrition in real-time with Cronometer Pro</p>
                            <Flex justifyContent={'space-between'}>
                                <h2></h2>
                                <p style={{color:'orange',fontSize:'13px'}}>Learn More</p>
                            </Flex>
                        </Box>
                    </VStack>
                </Flex>
            </PopoverBody>
        </PopoverContent>
    </Popover>
    
    <Tabs align='center' variant='enclosed' colorScheme={'orange'} isManual>
        <TabList>
            <Tab>Diary</Tab>
            <Tab>Trends</Tab>
            <Tab>Foods</Tab>
            <Tab>Settings</Tab>
            <Tab>Plans</Tab>
            <Tab>Help</Tab>
        </TabList>
        <TabPanels>
            <TabPanel>
              <Addfood></Addfood>
            </TabPanel>
            <TabPanel>
                {/* <Trends/> */}
            </TabPanel>
            <TabPanel>
                <p>Food</p>
            </TabPanel>
            <TabPanel>
                <Settings/>
            </TabPanel>
            <TabPanel>
                <Plans/>
            </TabPanel>
            <TabPanel>
                <Help/>
            </TabPanel>
        </TabPanels>
    </Tabs>
    
</>)
}
export default LoginHeader;