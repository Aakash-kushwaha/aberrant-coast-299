import React,{ReactNode} from 'react';
import styles from "./plansstyles.module.css";
import { Heading,Stack,Box,Image,
  Text,
  VStack,
  useColorModeValue,
  Flex,
  Button,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon, } from '@chakra-ui/react';
import InnerNav from '../Diarypage/Diary/InnerNavbar';
  function PriceWrapper({ children }) {
    return (
      <Box
        mb={2}
        shadow="base"
        borderWidth="0.5px"
        alignSelf={{ base: 'center', lg: 'flex-start' }}
        borderColor={useColorModeValue('gray.200', 'gray.500')}
        borderRadius={'l'} bgColor="#fbfbfa" w='25%'>
        {children}
      </Box>
    );
  }
const Plans = () => {
  return (
    <div>
     <InnerNav></InnerNav>
        <div className={styles.container}>
 
    <Box textAlign='left'>
      <h1 className={styles.heading2}>Plans</h1>
      <p className={styles.text}>Check out our range of affordable plans for individuals or for healthcare professionals.</p>
      </Box>

      {/* plans boxes */}

      <Box py={12}>
      <Flex textAlign="center" justify='space-around'>
        <p className={styles.heading3}>
          Individuals
        </p>
        <p className={styles.heading3}>
         Professionals
        </p>
      </Flex>
      <Stack
        direction={{ base: 'column', md: 'row' }}
        textAlign="center"
        justify="center"
        spacing={{ base: 4, lg: 10 }}
        py={10}>
        <PriceWrapper>
          <Box py={2} px={8}>
            <Image src='https://cdn1.cronometer.com/2021/landing/crono-icon-main-nav.svg' w='40px' h='40px' margin='auto'/>
            <br/>
            <p className={styles.heading1}>BASIC</p>
            <br/>
            <p className={styles.text}>The basic tool you need to track your nutrition for free!</p>
            <br/>
              <Text fontSize="2xl" fontWeight="700">
                $0
              </Text>
            <p className={styles.text}>USD/month</p>
            
          </Box>
          <VStack
            py={4}
            borderBottomRadius={'xl'}>
            <Box w="80%" pt={16}>
              <Button w="full" colorScheme="blue" variant="outline">
                Current Plan
              </Button>
            </Box>
          </VStack>
        </PriceWrapper>

        <PriceWrapper>
          <Box py={2} px={8}>
          <Image src='https://cdn1.cronometer.com/2021/landing/gold-icon_1.svg' w='40px' h='40px' margin='auto'/>
          <br/>
            <p className={styles.heading1}>GOLD</p>
            <br/>
            <p className={styles.text}>For those that want to get serious about their health.</p>
            <br/>
              <Text fontSize="2xl" fontWeight="700">
                $49.99
              </Text>
            <p className={styles.text}>USD/year</p>
            
          </Box>
          <VStack
            py={4}
            borderBottomRadius={'xl'}>
            <Box w="80%" pt={20}>
              <Button w="full" colorScheme="orange" variant="solid">
                Subscribe Now
              </Button>
            </Box>
          </VStack>
        </PriceWrapper>
        <PriceWrapper>
          <Box py={2} px={8}>
          <Image src='https://cdn1.cronometer.com/2021/landing/pro-icon-main-nav.svg' w='40px' h='40px' margin='auto'/>
          <br/>
            <p className={styles.heading1}>PRO</p>
            <br/>
            <p className={styles.text}>For health coaches and trainers.</p>
            <br/>
              <Text fontSize="2xl" fontWeight="700">
                $29.95
              </Text>
            <p className={styles.text}>USD/month</p>
            <p className={styles.text}>UP TO 10 CLIENTS Add more for $2.25/client per month</p>
            
          </Box>
          <VStack
            py={4}
            borderBottomRadius={'xl'}>
            <Box w="80%" pt={7}>
              <Button w="full" colorScheme="green" variant="solid">
                Subscribe Now
              </Button>
            </Box>
          </VStack>
        </PriceWrapper>
        <PriceWrapper>
          <Box py={2} px={8}>
          <Image src='https://cdn1.cronometer.com/2021/landing/pro-icon-main-nav.svg' w='40px' h='40px' margin='auto'/>
          <br/>
            <p className={styles.heading1}>ENTERPRISE</p>
            <br/>
            <p className={styles.text}>For hospitals, schools and research teams.</p>
            <br/>
              <Text fontSize="2xl" fontWeight="700">
                Contact Us
              </Text>
            <p className={styles.text}>Custom solutions for enterprise businesses</p>
            
          </Box>
          <VStack
            py={4}
            borderBottomRadius={'xl'}>
            <Box w="80%" pt={16}>
              <Button w="full" colorScheme="green" variant="outline">
                Contact Us
              </Button>
            </Box>
          </VStack>
        </PriceWrapper>
      </Stack>
    </Box>

{/* Details of prices */}
<Flex gap='10'>
<Box w='25%' borderRight='1px solid #cccccc' textAlign={'justify'} paddingRight='15px' height='-webkit-fit-content'>
  <p className={styles.heading3}>The basic tools you need:</p>
  <ul className={styles.text} style={{lineHeight:'30px'}}>
    <li>Log foods, exercise {'&'} biometrics</li>
    <li>Track all your macros {'&'} up to 82 micronutrients</li>
    <li>Customizable macro {'&'} micronutrient targets</li>
    <li>Customizable weight goal settings</li>
    <li>Sync with devices like Apple Watch, FitBit and more</li>
    <li>Limited health trends {'&'} reports</li>
    <li>Create custom foods {'&'} recipes</li>
    <li>Export your data</li>
    <li>Barcode scanner</li>
    <li>Mobile and web versions</li>
  </ul>
</Box>

<Box w='25%' borderRight='1px solid #cccccc' textAlign={'justify'} paddingRight='15px' height='-webkit-fit-content'>
  <p className={styles.heading3}>All the Basic tools plus:</p>
  <ul className={styles.text} style={{lineHeight:'30px'}}>
    <li>No advertisements</li>
    <li>Recipe Importer
      Easily import {'&'} create custom recipes from your favourite websites.</li>
    <li>Diary Groups{'&'} Timestamps
        Organize your diary into separate groups or meals and add timestamps to diary entries</li>
    <li>Target Scheduler
        Set different Macro Targets for each day of the week.</li>
    <li>Fasting Timer
       Track your fasts {'&'} nutrition in one app!</li>
    <li>Custom Charts
       Create custom charts to correlate nutrients and biometrics over time</li>
    <li>Custom Biometrics
       Create your own biometrics outside of the ones we already offer to track</li>
    <li>Nutrition Scores
      Select up to eight scores highlighting important areas of nutrition</li>
    <li>More Insights
      View charts and reports for all data entered into your diary</li>
    <li>Food Suggestions
       Gain valuable insight into which foods can help you meet your nutritional targets with our Suggest Foods feature</li>
    <li>Share Custom Food {'&'} Recipes
         Share your custom foods {'&'} recipes with your friends who use Cronometer</li>
    <li>Nutrient Oracle
     Discover top contributing foods of specific nutrients with our Nutrient Oracle feature</li>
    <li>Print Reports
     Create an easy to read PDF to share with your health professionals</li>
  </ul>
</Box>
<Box w='25%' borderRight='1px solid #cccccc' textAlign={'justify'} paddingRight='15px' height='-webkit-fit-content'>
  <p className={styles.heading3}>Gold features for you {'&'} your clients, plus:</p>
  <ul className={styles.text} style={{lineHeight:'30px'}}>
    <li>View your clients' diary at any time to monitor compliance</li>
    <li>Manage clients' settings and nutrition data</li>
    <li>Share custom foods and recipes with your clients</li>
    <li>Create and share custom biometrics with your clients</li>
    <li>Chat with clients using secure internal messaging</li>
    <li>Create Internal Profiles for view of the Professional only</li>
    <li>Restrict client viewing to help manage eating disorders</li>
    <li>Export professional charts and reports to review progress with your clients</li>
    <li>List your business on our <a href='https://cronometer.com/pro-directory/' style={{textDecoration:'underline',color:'blue'}}>public directory</a> of professional services</li>
    <li>Webinar Access for Professionals</li>
    <Button variant='outline' colorScheme={'green'}>Learn More</Button>
  </ul>
</Box>
<Box w='25%' textAlign={'justify'} paddingRight='15px' height='-webkit-fit-content'>
  <p className={styles.heading3}>All Pro features plus:</p>
  <ul className={styles.text} style={{lineHeight:'30px'}}>
    <li>HIPAA compliance
If you are operating as a covered entity under HIPAA, we can sign a BAA.</li>
    <li>Risk Assessment {'&'} Compliance Review
Work with your assessment teams to become an approved vendor.</li>
    <li>MSA{'&'} Yearly Invoicing
Provide a Master Service Agreement and yearly invoicing through your procurement system.</li>
    <li>Staff Training
Additonal services such as webinars or on-site training.</li>
    <li>API Access
Custom API Access</li>
  </ul>
</Box>
</Flex>
<br/>
<Heading fontSize={'22px'} color='#cf4b17' fontFamily={'Open Sans'}>Frequently Asked Questios</Heading>
<Accordion defaultIndex={[0]} allowMultiple>
  <AccordionItem>
    <h2>
      <AccordionButton>
        <Box flex='1' textAlign='left'>
        <h2 className={styles.heading3}>What forms of payment do you accept?</h2>
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4} textAlign='left'>
     We accept all major credit cards, except for Discover cards.
    </AccordionPanel>
  </AccordionItem>

  <AccordionItem>
    <h2>
      <AccordionButton>
        <Box flex='1' textAlign='left'>
        <h2 className={styles.heading3}> Will I be charged sales tax?</h2>
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4} textAlign='left'>
    If live you live in Canada, you will be charged Canadian sales tax (we are a Canadian company).
    If you live outside of Canada, you will not be charged tax.
    </AccordionPanel>
  </AccordionItem>

  <AccordionItem>
    <h2>
      <AccordionButton>
        <Box flex='1' textAlign='left'>
        <h2 className={styles.heading3}> How secure is Cronometer?</h2>
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4} textAlign='left'>
    We take data security seriously at Cronometer. Not only is your data protected, we will never sell your data to 3rd parties.
    <a href='https://cronometer.com/blog/security-at-cronometer-com/' style={{textDecoration:'underline',color:'green'}}>You can learn more on security at Cronometer here </a>
    </AccordionPanel>
  </AccordionItem>

  <AccordionItem>
    <h2>
      <AccordionButton>
        <Box flex='1' textAlign='left'>
        <h2 className={styles.heading3}> How do I cancel or change my subscription?</h2>
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4} textAlign='left'>
    <VStack align={'left'}>
    <Heading fontSize={'lg'}>
    If you purchased gold on our Web version:</Heading>
<ol style={{textAlign:'justify'}}>
  <li>
 Log into the web version at https://cronometer.com/</li>
<li>
 The Account Tab is the section where you update any sign-up information and manage your subscriptions and personal data.
</li>
<li>
 Cancel your Gold subscription at any time to prevent your subscription from renewing at the end of your current term. Select Do Not Auto-Renew from the drop-down menu.
</li>
</ol>
<Heading fontSize={'lg'}>
If you purchased gold from with the iOS app:</Heading>
<Text>
Open system Settings {'->'} iTunes {'&'} App Store {'->'} View Apple ID {'->'} Subscriptions
</Text>
<Heading fontSize={'lg'}>
If you purchased gold on the Android mobile app:</Heading>
<ol style={{textAlign:'justify'}}>
  <li>Launch the Google Play Store app</li>
  <li>Tap Menu {'->'} My Apps {'->'} Subscriptions and tap on our app to manage your subscription</li>
</ol>
</VStack>
    </AccordionPanel>
  </AccordionItem>

</Accordion>

    </div>
    </div>

  )
}

export default Plans