import React from 'react'
import styles from "./settingsstyles.module.css";
import { Tabs, TabList, TabPanels, Tab, TabPanel,Box,Text,Flex,Button, VStack,Switch,Input } from '@chakra-ui/react'
import { BsFillCloudArrowDownFill } from "react-icons/bs";
import { RiDeleteBin2Fill } from "react-icons/ri";
import {useSelector} from "react-redux";
import { useNavigate} from "react-router-dom";
import axios from "axios";
const Settings = () => {
  // const token=useSelector((state)=>state.authreducer.token);
  const navigate=useNavigate();
  const handleLogout=()=>{
      // console.log(token);
      // token=null;
      navigate("/");
  }
  const handleDeleteAccount=()=>{
    navigate("/");
  }
  return (
    <Tabs variant='enclosed' size='sm' align='center'>
  <TabList>
    <Tab>Account</Tab>
    <Tab>Profile+Targets</Tab>
    <Tab>Target Scheduler</Tab>
    <Tab>Fasting</Tab>
    <Tab>Display</Tab>
    <Tab>Devices</Tab>
    <Tab>Sharing</Tab>
  </TabList>
  <TabPanels>
    <TabPanel>
    <Box textAlign='left'>
      <h1 className={styles.heading2}>Account Settings</h1>
      </Box>
    {/* Login box */}
    <Box border='1px solid #e0e0dc' alignItems={'center'}>
      <Box px='5' py='2' bgColor={'#fbfbfa'} borderBottom='1px solid #e0e0dc'>
      <h2 className={styles.heading3}>Login</h2>
      </Box>
      <VStack spacing={'4'} margin='30px' className={styles.text}>
        <Flex gap={'10'}>
          <Text w='100px'>Email</Text>
          <Box px='2' py='2' bgColor={'#fbfbfa'} border='1px solid #e0e0dc' w='400px'>Your Email</Box>
          <Button colorScheme={'orange'} variant='ghost'>Update</Button>
        </Flex>
        <Flex gap={'10'}>
          <Text w='100px'>password</Text>
          <Box px='2' py='2' bgColor={'#fbfbfa'} border='1px solid #e0e0dc' w='400px'>*******</Box>
          <Button colorScheme={'orange'} variant='ghost'>Update</Button>
        </Flex>
        <hr style={{width:'700px'}}/>
        <h2 className={styles.heading3} style={{position:'relative',left:'-250px'}}>Two-Factor Authentication</h2>
        <p className={styles.smalltext} style={{width:'700px'}}>Cronometer supports Two-Factor Authentication. To enable two-factor authentication, download an authenticator app from the app store or Google Play store such as Google Authenticator app. Two factor is an optional additional security feature</p>
        <Flex gap='20px'><p>Enable Two-Factor Authentication</p> <Switch size='sm' colorScheme={'orange'}/></Flex>
        <Button colorScheme={'orange'} size='sm' onClick={handleLogout}>Logout</Button>
      </VStack>
    </Box>
    <br/>
 {/* subscription box */}
 <Box border='1px solid #e0e0dc' alignItems={'center'}>
      <Box px='5' py='2' bgColor={'#fbfbfa'} borderBottom='1px solid #e0e0dc'>
      <h2 className={styles.heading3}>Subscription</h2>
      </Box>
      <VStack spacing={'4'} margin='30px' className={styles.text}>
      <Flex gap='40px'>
      <p>Account Type</p>
      <p style={{fontWeight:'600'}}>PRO</p>
      </Flex>
      </VStack>
  </Box>
  <br/>
  {/* Notifications box */}
  <Box border='1px solid #e0e0dc' alignItems={'center'}>
      <Box px='5' py='2' bgColor={'#fbfbfa'} borderBottom='1px solid #e0e0dc'>
      <h2 className={styles.heading3}>Notifications</h2>
      </Box>
      <VStack spacing={'4'} margin='30px' className={styles.text}>
      <Flex gap='40px'>
      <p>Email me a reminder if I forget to enter diary details</p>
      <Switch size='sm' colorScheme={'orange'}/>
      <p>by</p>
      <Input type='time' size={'sm'} w='30'/>
      </Flex>
      </VStack>
  </Box>
  <br/>
  {/* privacy box */}
  <Box border='1px solid #e0e0dc' alignItems={'center'}>
      <Box px='5' py='2' bgColor={'#fbfbfa'} borderBottom='1px solid #e0e0dc'>
      <h2 className={styles.heading3}>Privacy</h2>
      </Box>
      <VStack spacing={'4'} margin='30px' className={styles.text}>
      <Flex gap='40px'>
      <p>Send me newsletters and promotional emails</p>
      <Switch size='sm' colorScheme={'orange'} defaultChecked/>
      </Flex>
      <Flex gap='40px'>
      <p>Send me personalized in-app ads. <br/>(You will receive less relevant, non-personalized ads if you opt out)</p>
      <Switch size='sm' colorScheme={'orange'} defaultChecked/>
      </Flex>
      </VStack>
  </Box>
  <br/>
  {/* Account data box */}
  <Box border='1px solid #e0e0dc' alignItems={'center'}>
      <Box px='5' py='2' bgColor={'#fbfbfa'} borderBottom='1px solid #e0e0dc'>
      <h2 className={styles.heading3}>Account Data</h2>
      </Box>
      <VStack spacing={'4'} margin='30px' className={styles.text}>
      <Flex gap='50px'>
      <BsFillCloudArrowDownFill size='1.5em' color='#999999'/>
      <p style={{width:'400px'}}><span style={{fontWeight:'600'}}>Export Data </span><br/>Export all of your diary data to .csv files</p>
      <Button size='sm' colorScheme={'orange'} variant='ghost'>Export Data</Button>
      </Flex>
      <Flex gap='40px'>
      <RiDeleteBin2Fill size='1.5em'color='#999999'/>
      <p style={{width:'400px'}}><span style={{fontWeight:'600'}}>Delete Account</span> <br/>Permanently delete your account and all of your data.</p>
      <Button colorScheme={'orange'} variant='outline' size='sm' onClick={handleDeleteAccount}>Delete Account</Button>
      </Flex>
      </VStack>
  </Box>
  </TabPanel>
  {/* 2nd Tab */}
  <TabPanel>
      <p>two!</p>
    </TabPanel>
  </TabPanels>
</Tabs>
  )
}

export default Settings