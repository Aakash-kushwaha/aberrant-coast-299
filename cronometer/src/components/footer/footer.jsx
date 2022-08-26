
import { Box, Flex,Image } from '@chakra-ui/react'
import { RiFacebookCircleLine,RiInstagramLine } from "react-icons/ri";
import { TiSocialTwitterCircular } from "react-icons/ti";
import {ImYoutube2} from "react-icons/im"
import React from 'react'
const Footer = () => {
  return (
    <>
      <Box margin='auto'>
          <ul style={{display:'flex',gap:'30px',cursor:'pointer',marginLeft:'30%',}}>
            <li><a href="">Blogs</a></li>
            <li>Forums</li>
            <li>Privacy</li>
            <li>Terms</li>
            <li>Affiliates</li>
            <li>Jobs</li>
          </ul>
      </Box>
      <br/>
      <Box bgColor={'#4f4e53'} color='white' width='100%' px='20px' py='30px' _hover={{color:'orange'}}>
        <Flex justifyContent={'space-between'}>
          <Box>
            <Flex>
              <Image src='https://cdn1.cronometer.com/logos/app-store.png' h='55' w='55'/>
              <Image src='https://cdn1.cronometer.com/logos/google-play.png' h='55' w='55'/>
            </Flex>
          </Box>
          <Box textAlign={'center'}>
            <a href='https://cronometer.com'><Image src='https://cdn1.cronometer.com/logos/cronometer-logo-white.png' h='50' w='50'/></a>
            <p style={{fontSize:'10px'}}>Copyright 2011-2022, All Rights Reserved</p>
          </Box>
          <Box>
            <Flex justifyContent={'space-evenly'} gap='10px'>
            <a href="https://www.facebook.com/pages/CRON-O-Meter/176038029189451" ><RiFacebookCircleLine size='25px'/></a>
            <a href="https://twitter.com/cronometer"><TiSocialTwitterCircular size='25px'/></a>
            <a href="https://www.instagram.com/cronometer_official/"><RiInstagramLine size='25px'/></a>
            <a href="https://www.youtube.com/channel/UCX4_3R4oVBU3Ff5Jmh1iJbw"><ImYoutube2 size='25px'/></a>
            </Flex>
          </Box>
        </Flex>

      </Box>
    </>
  )
}

export default Footer