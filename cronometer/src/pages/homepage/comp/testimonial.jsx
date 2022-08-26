import {
  Box,
  chakra,
  Flex,
  Image,
  SimpleGrid,
  useColorModeValue,
} from "@chakra-ui/react";

const testimonials = [
  {
    thought:
      "I wasn't the only one concerned about the unreliability of the macros in both MyFitnessPal and Carb Manager.",
    role: "iOS Review",
    date: "September 23, 2019",
    img: "https://cdn1.cronometer.com/2021/landing/ios-icon.svg",
    content:
      "I started Keto in July. MyFitnessPal seemed pretty cool. Spent hours setting it up and entering recipes only to discover the macros were not reliable due to all the contributions by the community. I was so frustrated. Then I found a review of several apps (on the Keto Mojo website) and discovered I wasn't the only one concerned about unreliability of the macros on both MFP and CarbManager (tried that too). Behold Cronometer! I love this app. It draws from nutrition databases with minimal community contributions so much, much more reliability. There are many more free features. The user interface is easy to navigate. I'm very happy with Cronometer.",
  },
  {
    thought:
      "Cronometer tracks EVERYTHING! ... It's easy to use and links with my FitBit.",
    role: "Android Review",
    date: "November 23, 2020",
    img: "	https://cdn1.cronometer.com/2021/landing/android-icon.svg",
    content:
      "This app is my dream! I've been on the hunt for something that can track my daily nutritional needs and the majority of apps seem to think that only means macros. This tracks EVERYTHING! Getting my daily vitamins through food is so important to me and this has taken a HUGE load off of my plate. I bought gold within minutes. This is set up great, easy to use, links with my FitBit. I could go on and on.",
  },
];

function TestimonialCard(props) {
  const { thought, role, date, img, content } = props;
  return (
    <Flex
      boxShadow={"lg"}
      maxW={"840px"}
      textAlign={"left"}
      gap="4%"
      direction={{ base: "column-reverse", md: "row" }}
      width={"full"}
      rounded={"xl"}
      p={10}
      justifyContent={"space-between"}
      position={"relative"}
      bg={useColorModeValue("white", "gray.800")}
      _after={{
        content: '""',
        position: "absolute",
        height: "21px",
        width: "29px",
        left: "35px",
        top: "-10px",
        backgroundSize: "cover",
        backgroundImage: `url("https://cdn1.cronometer.com/2021/landing/quote-icon.svg")`,
      }}
      _before={{
        content: '""',
        position: "absolute",
        zIndex: "-1",
        height: "full",
        maxW: "840px",
        width: "full",
        filter: "blur(40px)",
        transform: "scale(0.98)",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        top: 0,
        left: 0,
      }}
    >
      <Flex direction="column" flex={5}>
        <chakra.p
          fontFamily={"Inter"}
          fontWeight={"medium"}
          fontSize={30}
          lineHeight="2rem"
          color="#ff763f"
          pb={4}
        >
          {thought}
        </chakra.p>
        <Image w={"50%"} h={30} src={img} />
      </Flex>
      <Flex direction="column" flex={5} gap="1%">
        <chakra.p
          fontFamily={"'Open Sans', sans-serif"}
          fontSize={18}
          color="#404040"
          lineHeight={"1.5rem"}
        >
          {content}
        </chakra.p>
        <chakra.p fontFamily={"Inter"} fontWeight={"medium"} color={"gray.500"}>
          {" "}
          - {role}
        </chakra.p>
        <chakra.p fontFamily={"Inter"} fontWeight={"medium"} color={"gray.500"}>
          {" "}
          - {date}
        </chakra.p>
      </Flex>
    </Flex>
  );
}

export const Testimonial = () => {
  return (
    <Flex
      textAlign={"center"}
      pt={10}
      justifyContent={"center"}
      direction={"column"}
      width={"full"}
    >
      <Box width={{ base: "full", sm: "lg", lg: "xl" }} margin={"auto"}>
        <chakra.h1
          py={5}
          fontSize={48}
          fontFamily={"Work Sans"}
          fontWeight={"bold"}
          color={useColorModeValue("gray.700", "gray.50")}
        >
          Cronometer Reviews
        </chakra.h1>
        <chakra.h2
          margin={"auto"}
          width={"70%"}
          fontFamily={"Inter"}
          fontWeight={"medium"}
          fontSize={25}
          color={useColorModeValue("gray.500", "gray.400")}
        >
          Check us out in your app store.
        </chakra.h2>
      </Box>
      <SimpleGrid
        columns={{ base: 1, xl: 1 }}
        spacing={"20"}
        mt={16}
        mx={"auto"}
      >
        {testimonials.map((cardInfo, index) => (
          <TestimonialCard {...cardInfo} index={index} />
        ))}
      </SimpleGrid>
      <Box></Box>
    </Flex>
  );
};
