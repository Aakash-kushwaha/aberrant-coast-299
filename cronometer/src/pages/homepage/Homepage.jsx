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
      <Box>
        <Healthy />
      </Box>
      <Box bg={"gray.50"} p={16}>
        <Flex
          direction="column"
          fontSize={30}
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
          fontSize={30}
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
            <Heading color='gray.700'>We are Canadian</Heading>
            <Text lineHeight={'2rem'} fontSize={25} fontWeight='medium' >
              Independently owned and operated by people who care about their
              users' nutrition.
            </Text>
          </VStack>
          <Box>
            <Image w={'100%'} borderRadius='10px' src="https://cdn1.cronometer.com/2021/landing/cronometer-staff-2-p-1600.jpeg" />
          </Box>
          <Text  lineHeight={'1.5rem'} textAlign='center' fontSize={18} fontWeight='medium'>
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
        <VStack p={4} spacing='5%' fontSize={25}>
          <Text >
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
        w={"80%"}
        m="auto"
        h={"500px"}
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
            <Heading fontSize={"50px"}>Eat smarter.</Heading>
            <Heading fontSize={"50px"}>Live better.</Heading>
          </Box>
          {/* <Box p={"6px 0px"}> */}
          <Text lineHeight={"2.5rem"} fontSize={30}>
            Track your calories, exercise,
            {/* <br /> */}
            biometrics and health data.
          </Text>

          <Stack>
            <Flex
              h={"60px"}
              w={"40%"}
              bg="#ff763f"
              borderRadius={"6px"}
              alignItems="center"
              justifyContent={"center"}
              color={"#fff"}
              _hover={{
                transition: "1.2",
              }}
            >
              <RouterLink to="#">Sign Up - It's Free! </RouterLink>
            </Flex>
            <Flex p={"1%"} w={"55%"} bg={"blue.500"} color="white">
              <Text>
                Already have an account? <RouterLink to="#">Log in.</RouterLink>
              </Text>
            </Flex>
          </Stack>
          {/* </Box> */}
        </Flex>
        <Stack flex={5}>
          <Image
            h={"480px"}
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
      <Stack
        as={"flex"}
        w={"70%"}
        m="50px auto"
        justify={"center"}
        align="center"
      >
        <Box>
          <Text fontSize={"25px"}>As Seen On </Text>
        </Box>
        <Flex
          h={"150px"}
          p={2}
          direction="row"
          justify="space-evenly"
          gap={"2%"}
        >
          <Box h={"100%"}>
            <Image
              h={"70%"}
              w={"70%"}
              alt="WOMEN'S HEALTH"
              src="https://cdn1.cronometer.com/2021/landing/media-mention-2.svg"
            />
          </Box>
          <Box>
            <Image
              h={"70%"}
              w={"70%"}
              alt="LIFE HACKER"
              src="https://cdn1.cronometer.com/2021/landing/media-mention-1.svg"
            />
          </Box>
          <Box>
            <Image
              h={"70%"}
              w={"70%"}
              alt="MEN'S JOURANAL"
              src="https://cdn1.cronometer.com/2021/landing/media-mention-3.svg"
            />
          </Box>
        </Flex>
        <Box>
          <Text textAlign={"center"} fontSize={25} lineHeight={"2.2rem"}>
            {" "}
            Available on Web, iOS and Android
          </Text>
          <Flex>
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
      </Stack>
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
          <Heading>Discover your nutrition</Heading>
          <Text fontSize={20}>
            Cronometer encourages you to not just count your calories
            <br />
            but to focus on your nutrition as a whole.
          </Text>
        </Flex>
        <Flex
          justify={"space-around"}
          gap="4%"
          p={4}
          textAlign="center"
          border={"1px solid red"}
        >
          <Flex
            direction={"column"}
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
            <Heading fontSize={20}>Over 5 million users</Heading>
            <Text>
              Join the community to get tips and inspiration from other users on
              our forums and Facebook group.
            </Text>
          </Flex>
          <Flex
            direction={"column"}
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
            <Heading fontSize={20}>Accurate nutrition data</Heading>
            <Text>
              Be confident that the food you log has the correct nutrition data.
              We verify every food submission for accuracy.
            </Text>
          </Flex>
          <Flex
            direction={"column"}
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
            <Heading fontSize={20}>Data privacy & security</Heading>
            <Text>
              We take the security of our users' accounts seriously - we will
              never sell your account data to third parties.
            </Text>
          </Flex>
        </Flex>
      </Flex>
    </>
  );
}

function Healthy() {
  return (
    <>
      <Box p={8}>
        <Flex
          w={"90%"}
          direction="column"
          justify="center"
          align="center"
          m="auto"
        >
          <Box w={"50%"} textAlign="center" lineHeight="2rem">
            <Heading color="gray.600">Develop healthy habits</Heading>
            <Text fontSize={22}>
              Count your calories, ensure you're meeting nutrient targets, and
              see your progress over time.
            </Text>
          </Box>
          <Stack
            display="grid"
            gap="4%"
            gridTemplateColumns={"repeat(3,1fr)"}
            textAlign="center"
            justify={"center"}
            align="center"
            p={"4%"}
            lineHeight="1.5rem"
          >
            <Flex direction="column" justify="space-around" gap="3%" p={6}>
              <Image
                w={"50%"}
                flex={2}
                m="auto"
                src="https://cdn1.cronometer.com/2021/landing/micronutrients-icon.svg"
              />
              <Heading flex={1} fontSize="20px" color="gray.700">
                Track up to 82 micronutrients
              </Heading>
              <Text flex={1} fontSize="18px">
                Log your meals and track all your macro and micronutrients.
              </Text>
            </Flex>

            <Flex direction="column" p={6}>
              <Image
                w={"50%"}
                flex={2}
                m="auto"
                src="https://cdn1.cronometer.com/2021/landing/diary-icon.svg"
              />
              <Heading flex={1} fontSize="20px" color="gray.700">
                Log meals, exercise and biometrics
              </Heading>
              <Text flex={1} fontSize="18px">
                Plus, you can create custom foods, recipes, exercises and
                biometrics!
              </Text>
            </Flex>
            <Flex direction="column" p={6}>
              <Image
                w={"50%"}
                flex={2}
                m="auto"
                src="	https://cdn1.cronometer.com/2021/landing/reports-icon.svg"
              />
              <Heading flex={1} fontSize="20px" color="gray.700">
                Valuable reports and charts
              </Heading>
              <Text flex={1} fontSize="18px">
                Learn how nutrients and biometrics correlate over time.
              </Text>
            </Flex>
            <Flex direction="column" p={6}>
              <Image
                w={"50%"}
                flex={2}
                m="auto"
                src="https://cdn1.cronometer.com/2021/landing/scale-icon.svg"
              />
              <Heading flex={1} fontSize="20px" color="gray.700">
                Custom Diet Setting
              </Heading>
              <Text flex={1} fontSize="18px">
                Set weight, macro & nutrient targets to meet your goals.
              </Text>
            </Flex>
            <Flex direction="column" p={6}>
              <Image
                w={"50%"}
                flex={2}
                m="auto"
                src="	https://cdn1.cronometer.com/2021/landing/fasting-icon.svg"
              />
              <Heading flex={1} fontSize="20px" color="gray.700">
                Fasting Timer
              </Heading>
              <Text flex={1} fontSize="18px">
                Track your intermittent fasts and see their effect over time.
              </Text>
            </Flex>
            <Flex direction="column" p={6}>
              <Image
                w={"50%"}
                flex={2}
                m="auto"
                src="https://cdn1.cronometer.com/2021/landing/food-icon.svg"
              />
              <Heading flex={1} fontSize="20px" color="gray.700">
                Diet support
              </Heading>
              <Text flex={1} fontSize="18px">
                Whether you’re Keto, Vegan, or on one recommended by your
                doctor.
              </Text>
            </Flex>
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
        <Box flex={5} border={"1px solid"}>
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
            <Heading fontSize={"20px"}>
              Are you a healthcare professional?
            </Heading>
            <Text fontSize={25} lineHeight={"1.7rem"}>
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
