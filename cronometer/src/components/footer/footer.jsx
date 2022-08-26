import { Box, Flex, HStack, Image, Stack } from '@chakra-ui/react'
import React from 'react'

const Footer = () => {
  return (
    <>
       <Box w={'100%'} p={6} fontFamily={`"Open Sans", sans-serif`} bg='#4f4e53'>
           <Box pt={8} pb={8}>
            <Stack >
              <HStack>
                <Box borderRadius={'100%'} border='1px solid' borderColor='#fff' color='#fff'></Box>
                <Box></Box>
                <Box></Box>
                <Box></Box>
              </HStack>
              <Flex w='50%'  justify={'center'}  align='center' gap='4%'>
                <Image  flex={2} src='https://cdn1.cronometer.com/2021/landing/ios-icon.svg' />
                <Image  flex={2} src='https://cdn1.cronometer.com/2021/landing/android-icon.svg' />
              </Flex>
            </Stack>
           </Box>
       </Box>
    </>
  )
}

export default Footer