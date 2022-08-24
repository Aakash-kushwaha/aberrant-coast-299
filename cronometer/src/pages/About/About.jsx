import { Box, Heading, Image, Text } from "@chakra-ui/react";
import React from "react";

export const About = () => {
  return (
    <Box 
    p={"2%"} 
    w="90%" 
    m={"auto"} 
    fontFamily="'Open Sans', sans-serif"

    >
      {/* about the company box */}
      <Box p={"2%"}>
        <Box p={6} textAlign="center">
          <Text
            color="#ff763f"
            fontSize="1.41em"
            lineHeight="1.5em"
            fontWeight={700}
            letterSpacing="2px"
            textTransform="uppercase"
          >
            CRONOMETER
          </Text>
          <Heading 
          color="#4f4e53" 
          fontSize="2.74em" 
          lineHeight="1.3em"
          fontWeight={600}
          >
            About the Company
          </Heading>
        </Box>
        <Box
          display="block"
          marginBlockStart="1em"
          marginBlockEnd="1em"
          marginInlineStart="0px"
          marginInlineEnd="0px"
          color="#404040"
          fontSize="1.125em"
          lineHeight="1.5em"
        >
          <Text>
            Cronometer is the most accurate, comprehensive nutrition tracking
            app on earth. Unlike other apps on the market, our nutritional data
            is curated from verified, accurate sources. We aim to provide a
            complete solution – no matter what diet you choose to be on.
          </Text>
          <br/>
          <Text>
            Our CEO, Aaron Davidson, built Cronometer as a side project in 2005.
            He was following the CRON diet (Calorie Restriction with Optimal
            Nutrition) and being the nutrition nerd/software developer that he
            is, decided to build an app to track his diet. Thus, Cronometer was
            born. It was several years later before he came to the conclusion
            that maybe he was onto something and quit his six-figure corporate
            job to focus on improving Cronometer.
          </Text>
          <br/>
          <Text>There are now over 5 million users who are happy he did.</Text>
          <br/>
          <Text>
            Cronometer's success has hinged entirely on positive word-of-mouth
            from its users. The company is still – and plans to continue being –
            a bootstrap startup to this day.
          </Text>
        </Box>
      </Box>
      {/* image box */}
      <Box m={'20px 0px'} p={4}>
        <Image
        borderRadius={14}
         src="https://cdn1.cronometer.com/2021/landing/cronometer-staff-3.jpg" />
      </Box>
      {/* who we are box */}
      <Box p={"2%"}>
        <Box p={6} textAlign="center">
          <Text
            color="#ff763f"
            fontSize="1.41em"
            lineHeight="1.5em"
            fontWeight={700}
            letterSpacing="2px"
            textTransform="uppercase"
          >
            CRONOMETER
          </Text>
          <Heading 
          color="#4f4e53" 
          fontSize="2.74em" 
          lineHeight="1.3em"
          >
            Who We Are
          </Heading>
        </Box>
        <Box
         display="block"
         marginBlockStart="1em"
         marginBlockEnd="1em"
         marginInlineStart="0px"
         marginInlineEnd="0px"
         color="#404040"
         fontSize="1.125em"
         lineHeight="1.5em" 
        >
          <Text>
            While our staff spans the globe our headquarters is based in the
            small-town of Revelstoke, British Columbia, Canada. Revelstoke is a
            health-centric mountain town brimming with endless options for
            staying active and a growing tech community – the perfect
            combination to call home.
          </Text>
          <br/>
          <Text>
            We are an eclectic mix of web developers, designers, nutrition
            scientists, business majors and personal trainers brought together
            by a love of nutrition. While our company has grown our mission and
            values have remained the same; we believe full spectrum nutrition is
            the best way to understand your diet’s effect on your health. We
            also believe in empowering everyone by ensuring they have access to
            accurate and comprehensive data to make informed decisions.
          </Text>
          <br/>
          <Text>
            Our goal is to build the best software for people and professionals
            to manage their nutrition. And we have the passion to make that
            happen; amazing data paired with awesome customer support truly are
            the Cronometer difference.
          </Text>
          <br/>
          <Text>
            If you have interest in your personal nutrition or working with your
            client’s nutrition check us out!
          </Text>
          <br/>
          <Text>
            Have questions? We would love to hear from you. Email us at:
            support@cronometer.com Help us spread the good word about nutrition
            and beco
          </Text>
        </Box>
      </Box>
    </Box>
  );
};
