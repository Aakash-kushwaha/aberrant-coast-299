import { ArrowForwardIcon } from '@chakra-ui/icons'
import {Box,Flex,Text,Heading, Grid } from '@chakra-ui/react'
import React from 'react'
import { Center, useColorModeValue,Stack,Image} from '@chakra-ui/react';
import {nanoid} from 'nanoid'

const database=[
    {
        img:'https://sp-ao.shortpixel.ai/client/to_webp,q_lossy,ret_img,w_480,h_300/https://cronometer.com/blog/wp-content/uploads/2022/06/Suunto.png',
        title:'New Device Integration: Suunto',
        date:'June 14,2022',
        about:'Sync Suunto Data Into Your Cronometer Account Today, we are thrilled to announce that we have partnered with Suunto to'
    },
    {
        img:'https://sp-ao.shortpixel.ai/client/to_webp,q_lossy,ret_img,w_654,h_477/https://cronometer.com/blog/wp-content/uploads/2022/06/Heart-rate-symbol.png',
        title:'How To: Track Your Heart Rate Over Time',
        date:'June 12,2022',
        about:'Recent Improvements To Biometric Tracking Allow You To Track Heart Rate Over Time We have made some big improvements to'
    },
    {
        img:'https://sp-ao.shortpixel.ai/client/to_webp,q_lossy,ret_img,w_600,h_400/https://cronometer.com/blog/wp-content/uploads/2022/05/Apple-watch-app-low-res.jpeg',
        title:'Now Available: Cronometer On Your Apple Watch',
        date:'June 2,2022',
        about:'Introducing Cronometer On Apple Watch Since its introduction in 2014, the Apple Watch has gained its fair share of the'
    },
    {
        img:'https://sp-ao.shortpixel.ai/client/to_webp,q_lossy,ret_img,w_2048,h_1365/https://cronometer.com/blog/wp-content/uploads/2022/04/pexels-kampus-production-5920765-scaled.jpg',
        title:'Introducing Men’s Health Nutrition Score',
        date:'May 31,2022',
        about:'New Nutrition Score Focuses on Men’s Health Available To Male Free Users For The Month Of June It’s no surprise'
    }
]

export const NewArr = () => {
  return (
    <>
      <Flex direction={'column'} p={6} >
      <Box w="full" mb={{base:20,md:30,lg:30}} p={6}>
          <Flex 
          justify="space-between" 
          // border="1px solid"
          >
            <Box>
              <Text color="#ff763f" fontSize={18}> - App Update</Text>
              <Heading fontSize={{base:20,md:45,lg:45}} color='gray.600'> New Arrivals</Heading>
            </Box>
            <Flex direction="bottom-right-corner">
              <Text color={'#ff763f'} textAlignLast='end'>Explore More <ArrowForwardIcon/> </Text>
            </Flex>
          </Flex>
        </Box>
         <Grid w={'90%'}
         h='fit-content'
         margin='20px auto'
         textAlign={'left'}
         gridTemplateColumns={{base:'repeat(1,1fr)',sm:'repeat(1,1fr)',md:'repeat(2,1fr)',lg:'repeat(2,1fr)'}}
         gap='2%'
         justify='space-around'
         >
             {
                database.map(item=>(
                    <FirstGridBox key={nanoid()} {...item}/>
                ))
             }
         </Grid>
      </Flex>
    </>
  )
}




  
//   const IMAGE =
//     'https://images.unsplash.com/photo-1518051870910-a46e30d9db16?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80';
  
 export function FirstGridBox({img,title,date,about}) {
    return (
      <Center py={12}>
        <Box
          role={'group'}
          p={6}
          
          
          bg={useColorModeValue('white', 'gray.800')}
          boxShadow={'2xl'}
          rounded={'lg'}
          pos={'relative'}
          zIndex={1}>
          <Box
            rounded={'lg'}
            p={2}
            pos={'relative'}
            height={'230px'}
            _after={{
              transition: 'all .3s ease',
              content: '""',
              w: 'full',
              h: 'full',
              pos: 'absolute',
              top: 5,
              left: 0,
            //   backgroundImage: `url(${IMAGE})`,
              filter: 'blur(15px)',
              zIndex: -1,
            }}
            _groupHover={{
              _after: {
                filter: 'blur(20px)',
              },
            }}>
            <Image
              rounded={'lg'}
              height={'full'}
              width={'full'}
              objectFit={'cover'}
              src={img}
            />
          </Box>
          <Stack pt={10} align={'center'}>
            
            <Heading fontSize={'2xl'} fontFamily={'body'} fontWeight={500}>
              {title}
            </Heading>
            <Text color={'gray.500'} fontSize={'sm'} textTransform={'uppercase'}>
              {date}
            </Text>
            <Text color={'gray.500'} fontSize={'sm'} textTransform={'uppercase'}>
              {about}
            </Text>
          </Stack>
        </Box>
      </Center>
    );
  }
