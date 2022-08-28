import {
  Box,
  Button,
  Flex,
  Heading,
  Image,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import { Link as RouterLink } from "react-router-dom";
import { Testimonial } from "./comp/testimonial";

const Homepage = () => {
  return (
    <Box
      // w={'90%'}
      m="auto"
      fontFamily="'Open Sans', sans-serif"
      color="#333"
      lineHeight="1em"
      p={"2%"}
      h={"fit-content"}
    >
      <Box>
        <FirstBox />
      </Box>
      <Box>
        <SecoundBox />
      </Box>
      <Box bg={"gray.50"} p={8}>
        <DiscoverThird />
      </Box>
      <Box m={{base:'50px auto',md:'50px auto',lg:'50px auto'}}>
        <Healthy />
      </Box>
      <Box bg={"gray.50"} p={10} mt={{base:'30px',md:'20px',lg:'20px'}}>
        <Flex
          direction="column"
          fontSize={{base:18,md:30,lg:30}}
          gap="30px"
          w="50%"
          justify="space-around"
          align="center"
          m="auto"
        >
          <Text lineHeight="2.5rem">
            Find out if you're getting the vitamins and minerals you need with
            our food diary app.
          </Text>
          <Box
            h={30}
            w={"fit-content"}
            p={8}
            bg="#ff763f"
            color="#ffffff"
            borderRadius={5}
          >
            <Text textAlign="center">Sign Up - It's Free!</Text>
          </Box>
        </Flex>
      </Box>
      <Box p={10} borderBottom="1px solid" color="gray.400">
        <Flex
          w="70%"
          m="auto"
          direction="column"
          gap="30px"
          p={4}
          justify="center"
          align="center"
          textAlign="center"
          fontSize={{base:20,md:30,lg:30}}
        >
          <Heading color="gray.600">Sync with Apps and Devices</Heading>
          <Text color="gray.600" lineHeight="1.8rem">
            Sync Cronometer with these activity trackers, Apple Health, Google
            Fit and Samsung Health.
          </Text>
          <Image src="https://cdn1.cronometer.com/2021/landing/devices-p-1600.png" />
        </Flex>
      </Box>
      <Box>
        <Testimonial />
      </Box>
      <Box bg={"gray.100"} p={4} m="4% auto">
        <Proffessinol />
      </Box>
      <Box m={'30px auto'}>
        <Flex direction='column' m='auto' gap='45px' w={'80%'} justify='center' align='center' p={8} borderBottom={'1px solid gray'} >
          <VStack spacing={'2%'} >
            <Heading color='gray.700' fontSize={{base:22,md:30,lg:30}}>We are Canadian</Heading>
            <Text lineHeight={'2rem'} fontSize={{base:16,md:25,lg:25}} fontWeight='medium' >
              Independently owned and operated by people who care about their
              users' nutrition.
            </Text>
          </VStack>
          <Box>
            <Image w={'100%'} borderRadius='10px' src="https://cdn1.cronometer.com/2021/landing/cronometer-staff-2-p-1600.jpeg" />
          </Box>
          <Text  lineHeight={'1.5rem'} textAlign='center' fontSize={{base:14,md:28,lg:28}} fontWeight='medium'>
            Our headquarters are based in the idyllic mountain town of
            Revelstoke, BC, Canada. We are a team of over 25 professionals
            brought together by a love of nutrition, skiing, biking and the
            great outdoors.
          </Text>
          <Box>
            <Button colorScheme={'#ff763f'}  color={'#ff763f'} variant={'outline'}>About Us</Button>
          </Box>
        </Flex>
      </Box>

      <Box>
        <VStack p={4} spacing='5%' fontSize={{base:16,md:25,lg:25}}>
          <Text fontSize={{base:12,md:26,lg:26}}>
          Help us spread the good word about nutrition and become an affiliate.
          </Text>
          <Button p={4} colorScheme={'#ff763f'}  color={'#ff763f'} variant={'outline'}>Become an Affiliated</Button>
        </VStack>
      </Box>

    </Box>
  );
};

export default Homepage;

const FirstBox = () => {
  return (
    <>
      <Flex
        direction={{ base: "column", sm: "column" ,lg:'row',md:'row'}}
        w={"80%"}
        m="auto"
        h={{base:'fit-content',lg:'600px', md:"600px",sm:'fit-content'}}
        justify={"space-between"}
        pt={"3%"}
        pb="2%"
        // border="1px solid black"
      >
        <Flex
          flex={4}
          direction={"column"}
          justify="space-evenly"
          p={2}
          // border="1px solid red"
        >
          <Box>
            <Heading fontSize={{base:"20px",lg:"50px",md:"50px"}}>Eat smarter.</Heading>
            <Heading fontSize={{base:"20px",lg:"50px",md:"50px"}}>Live better.</Heading>
          </Box>
          {/* <Box p={"6px 0px"}> */}
          <Text lineHeight={"2.5rem"} fontSize={{base:18,sm:18,lg:30,md:30}}>
            Track your calories, exercise,
            {/* <br /> */}
            biometrics and health data.
          </Text>

          <Stack>
            <Flex
              h={{base:"30px",sm:"40px",lg:"60px",md:"60px"}}
              w={"40%"}
              bg="#ff763f"
              borderRadius={"6px"}
              alignItems="center"
              justifyContent={"center"}
              color={"#fff"}
              _hover={{
                transition: "1.2",
              }}
              p={{base:'24px',md:'15px',lg:'10px'}}
            >
              <RouterLink to="/signup">Sign Up - It's Free! </RouterLink>
            </Flex>
            <Flex p={"2%"} w={"55%"} bg={"blue.500"} borderRadius='5px' color="white">
              <Text fontSize={{base:12,md:16,lg:16}}>
                Already have an account? <RouterLink to="#">Log in.</RouterLink>
              </Text>
            </Flex>
          </Stack>
          {/* </Box> */}
        </Flex>
        <Stack flex={5}>
          <Image
            h={{base:"300px",sm:"300px",lg:"480px",md:"480px"}}
            m='auto'
            src="https://cdn1.cronometer.com/2021/landing/cronometer-hero-graphic.svg"
            alt="USE OUR MOBILE VERSION"
          />
        </Stack>
      </Flex>
    </>
  );
};

function SecoundBox() {
  return (
    <>
      <VStack
        w={"70%"}
        m="50px auto"
        justify={"center"}
        align="center"
      >
        <Box>
          <Text fontSize={{base:18,md:25,lg:25}}>As Seen On </Text>
        </Box>
        <Flex
          h={{base:'fit-content',sm:'fit-content',md:'150px',lg:"150px"}}
          p={2}
          direction={{base:'column',sm:'column',md:'row',lg:"row"}}
          justify="space-evenly"
          gap={{base:"20px",md:'2%',lg:"2%"}}
          // ml={{base:45,md:0,lg:0}}
        >
          <Box h={"100%"} >
            <Image
              h={"70%"}
              w={{base:'100%',md:"70%",lg:'70%'}}
              alt="WOMEN'S HEALTH"
              src="https://cdn1.cronometer.com/2021/landing/media-mention-2.svg"
            />
          </Box>
          <Box>
            <Image
              h={"70%"}
              w={{base:'100%',md:"70%",lg:'70%'}}
              alt="LIFE HACKER"
              src="https://cdn1.cronometer.com/2021/landing/media-mention-1.svg"
            />
          </Box>
          <Box>
            <Image
              h={"70%"}
              w={{base:'100%',md:"70%",lg:'70%'}}
              alt="MEN'S JOURANAL"
              src="https://cdn1.cronometer.com/2021/landing/media-mention-3.svg"
            />
          </Box>
        </Flex>
        <Box>
          <Text textAlign={"center"} fontSize={{base:18,md:25,lg:25}} lineHeight={"2.2rem"}>
            {" "}
            Available on Web, iOS and Android
          </Text>
          <Flex direction={{base:'column',md:'row',lg:"row"}} align='center' gap='20px'>
            <Box h={"50px"} w="200px" borderRadius={5}>
              <Image
                w={"100%"}
                h={"100%"}
                src="	https://cdn1.cronometer.com/2021/landing/ios-icon.svg"
              />
            </Box>
            <Box h={"50px"} w="200px" borderRadius={5}>
              <Image
                w={"100%"}
                h={"100%"}
                src="https://cdn1.cronometer.com/2021/landing/android-icon.svg"
              />
            </Box>
          </Flex>
        </Box>
      </VStack>
    </>
  );
}

function DiscoverThird() {
  return (
    <>
      <Flex
        w={"80%"}
        gap="5%"
        direction="column"
        justify="space-around"
        align={"center"}
        m="20px auto"
      >
        <Flex
          direction={"column"}
          justify="center"
          align={"center"}
          textAlign="center"
          w={"60%"}
          //  border='1px solid black'
          lineHeight={"1.8rem"}
          gap="20px"
        >
          <Heading fontSize={{base:20,md:26,lg:30}}>Discover your nutrition</Heading>
          <Text fontSize={{base:16,md:20,lg:20}}>
            Cronometer encourages you to not just count your calories
            <br />
            but to focus on your nutrition as a whole.
          </Text>
        </Flex>
        <Flex
           direction={{base:'column',sm:'column',md:'row',lg:'row'}}
          justify={"space-around"}
          gap="4%"
          p={4}
          textAlign="center"
          // border={"1px solid red"}
        >
          <VStack
            
            gap="4%"
            align={"center"}
            justify="center"
            lineHeight={"1.5rem"}
          >
            <Image
              w={"70%"}
              h="70px"
              src="https://cdn1.cronometer.com/2021/landing/community-icon.svg"
            />
            <Heading fontSize={{base:16,md:20,lg:20}}>Over 5 million users</Heading>
            <Text fontSize={{base:12,md:16,lg:16}}>
              Join the community to get tips and inspiration from other users on
              our forums and Facebook group.
            </Text>
          </VStack>
          <VStack
            gap="4%"
            align={"center"}
            justify="center"
            lineHeight={"1.5rem"}
          >
            <Image
              w={"50%"}
              h="70px"
              src="https://cdn1.cronometer.com/2021/landing/nutrition-icon.svg"
            />
            <Heading fontSize={{base:16,md:20,lg:20}}>Accurate nutrition data</Heading>
            <Text>
              Be confident that the food you log has the correct nutrition data.
              We verify every food submission for accuracy.
            </Text>
          </VStack>
          <VStack
            gap="4%"
            align={"center"}
            justify="center"
            lineHeight={"1.5rem"}
          >
            <Image
              w={"50%"}
              h="70px"
              src="https://cdn1.cronometer.com/2021/landing/security-icon.svg"
            />
            <Heading fontSize={{base:16,md:20,lg:20}}>Data privacy & security</Heading>
            <Text fontSize={{base:12,md:16,lg:16}}>
              We take the security of our users' accounts seriously - we will
              never sell your account data to third parties.
            </Text>
          </VStack>
        </Flex>
      </Flex>
    </>
  );
}

function Healthy() {
  return (
    <>
      <Box p={8}
      //  mb={{base:50,md:40,lg:40}} 
       >
        <Flex
          w={"90%"}
          direction="column"
          justify="center"
          align="center"
          m="20px auto"
        >
          <Box w={"50%"} textAlign="center" lineHeight="2rem">
            <Heading color="gray.600" fontSize={{base:20,md:25,lg:30}}>Develop healthy habits</Heading>
            <Text fontSize={{base:18,md:22,lg:22}}>
              Count your calories, ensure you're meeting nutrient targets, and
              see your progress over time.
            </Text>
          </Box>
          <Stack
            display="grid"
            gap={{base:'2%',md:"4%",lg:'4%'}}
            gridTemplateColumns={{base:"repeat(1,1fr)",sm:"repeat(2,1fr)",md:"repeat(3,1fr)",lg:"repeat(3,1fr)"}}
            textAlign="center"
            justify={"center"}
            align="center"
            p={"4%"}
            lineHeight="1.5rem"
          >
            <VStack justify="space-around" gap="3%" p={6}>
              <Image
                w={"50%"}
                flex={2}
                m="auto"
                src="https://cdn1.cronometer.com/2021/landing/micronutrients-icon.svg"
              />
              <Heading flex={1} fontSize={{base:16,md:20,lg:20}} color="gray.700">
                Track up to 82 micronutrients
              </Heading>
              <Text flex={1} fontSize={{base:14,md:18,lg:18}}>
                Log your meals and track all your macro and micronutrients.
              </Text>
            </VStack>

            <VStack justify="space-around" gap="3%" p={6}>
              <Image
                w={"50%"}
                flex={2}
                m="auto"
                src="https://cdn1.cronometer.com/2021/landing/diary-icon.svg"
              />
              <Heading flex={1} fontSize={{base:16,md:20,lg:20}} color="gray.700">
                Log meals, exercise and biometrics
              </Heading>
              <Text flex={1} fontSize={{base:14,md:18,lg:18}}>
                Plus, you can create custom foods, recipes, exercises and
                biometrics!
              </Text>
            </VStack>
            <VStack justify="space-around" gap="3%" p={6}>
              <Image
                w={"50%"}
                flex={2}
                m="auto"
                src="	https://cdn1.cronometer.com/2021/landing/reports-icon.svg"
              />
              <Heading flex={1} fontSize={{base:16,md:20,lg:20}} color="gray.700">
                Valuable reports and charts
              </Heading>
              <Text flex={1} fontSize={{base:14,md:18,lg:18}}>
                Learn how nutrients and biometrics correlate over time.
              </Text>
            </VStack>
            <VStack justify="space-around" gap="3%" p={6}>
              <Image
                w={"50%"}
                flex={2}
                m="auto"
                src="https://cdn1.cronometer.com/2021/landing/scale-icon.svg"
              />
              <Heading flex={1} fontSize={{base:16,md:20,lg:20}} color="gray.700">
                Custom Diet Setting
              </Heading>
              <Text flex={1} fontSize={{base:14,md:18,lg:18}}>
                Set weight, macro & nutrient targets to meet your goals.
              </Text>
            </VStack>
            <VStack justify="space-around" gap="3%" p={6}>
              <Image
                w={"50%"}
                flex={2}
                m="auto"
                src="	https://cdn1.cronometer.com/2021/landing/fasting-icon.svg"
              />
              <Heading flex={1} fontSize={{base:14,md:18,lg:20}} color="gray.700">
                Fasting Timer
              </Heading>
              <Text flex={1} fontSize={{base:14,md:18,lg:18}}>
                Track your intermittent fasts and see their effect over time.
              </Text>
            </VStack>
            <VStack justify="space-around" gap="3%" p={6}>
              <Image
                w={"50%"}
                flex={2}
                m="auto"
                src="https://cdn1.cronometer.com/2021/landing/food-icon.svg"
              />
              <Heading flex={1} fontSize={{base:16,md:20,lg:20}} color="gray.700">
                Diet support
              </Heading>
              <Text flex={1} fontSize={{base:14,md:18,lg:18}}>
                Whether you’re Keto, Vegan, or on one recommended by your
                doctor.
              </Text>
            </VStack>
          </Stack>
        </Flex>
      </Box>
    </>
  );
}

const Proffessinol = () => {
  return (
    <>
      <Flex
        w={"80%"}
        m="auto"
        p={6}
        direction={["column", "row"]}
        spacing="5%"
        gap={"4%"}
        justify="center"
        align="center"
      >
        <Box flex={5}>
          <Image
            w={"70%"}
            m="auto"
            src="https://cdn1.cronometer.com/2021/landing/crono-pro-graphic.svg"
          />
        </Box>
        <VStack flex={5}>
          <Image
            w={"50%"}
            src="https://cdn1.cronometer.com/2021/landing/cronometer-pro-logo.svg"
          />
          <VStack textAlign={"left"}>
            <Heading fontSize={{base:'16px',md:'20px',lg:"20px"}}>
              Are you a healthcare professional?
            </Heading>
            <Text fontSize={{base:18,md:25,lg:25}} lineHeight={"1.7rem"}>
              {" "}
              Check out our software designed for nutritionists, dietitians,
              research teams, schools, and hospitals.
            </Text>
          </VStack>
          <Button
            colorScheme={"#3CB41C"}
            color="#3CB41C"
            bg="#fff"
            variant={"outline"}
          >
            Learn About Pro{" "}
          </Button>
        </VStack>
      </Flex>
    </>
  );
};
