import { Box, Heading, Image, Text } from "@chakra-ui/react";
import React from "react";

export const About = () => {
  return (
    <>
      {/* about the company box */}
      <Box>
        <Box>
          <Heading>CRONOMETER</Heading>
          <Heading>About the Company</Heading>
        </Box>
        <Box>
          <Text>
            Cronometer is the most accurate, comprehensive nutrition tracking
            app on earth. Unlike other apps on the market, our nutritional data
            is curated from verified, accurate sources. We aim to provide a
            complete solution – no matter what diet you choose to be on.
          </Text>
          <Text>
            Our CEO, Aaron Davidson, built Cronometer as a side project in 2005.
            He was following the CRON diet (Calorie Restriction with Optimal
            Nutrition) and being the nutrition nerd/software developer that he
            is, decided to build an app to track his diet. Thus, Cronometer was
            born. It was several years later before he came to the conclusion
            that maybe he was onto something and quit his six-figure corporate
            job to focus on improving Cronometer.
          </Text>
          <Text>There are now over 5 million users who are happy he did.</Text>
          <Text>
            Cronometer's success has hinged entirely on positive word-of-mouth
            from its users. The company is still – and plans to continue being –
            a bootstrap startup to this day.
          </Text>
        </Box>
      </Box>
      {/* image box */}
      <Box>
        <Image src="https://cdn1.cronometer.com/2021/landing/cronometer-staff-3.jpg" />
      </Box>
      {/* who we are box */}
      <Box>
        <Box>
          <Heading>CRONOMETER</Heading>
          <Heading>Who We Are</Heading>
        </Box>
        <Box>
          <Text>
            While our staff spans the globe our headquarters is based in the
            small-town of Revelstoke, British Columbia, Canada. Revelstoke is a
            health-centric mountain town brimming with endless options for
            staying active and a growing tech community – the perfect
            combination to call home.
          </Text>
          <Text>
            We are an eclectic mix of web developers, designers, nutrition
            scientists, business majors and personal trainers brought together
            by a love of nutrition. While our company has grown our mission and
            values have remained the same; we believe full spectrum nutrition is
            the best way to understand your diet’s effect on your health. We
            also believe in empowering everyone by ensuring they have access to
            accurate and comprehensive data to make informed decisions.
          </Text>
          <Text>
            Our goal is to build the best software for people and professionals
            to manage their nutrition. And we have the passion to make that
            happen; amazing data paired with awesome customer support truly are
            the Cronometer difference.
          </Text>
          <Text>
            If you have interest in your personal nutrition or working with your
            client’s nutrition check us out!
          </Text>
          <Text>
            Have questions? We would love to hear from you. Email us at:
            support@cronometer.com Help us spread the good word about nutrition
            and beco
          </Text>
        </Box>
      </Box>
      
    </>
  );
};
