import {
  Box,
  Flex,
  Text,
  IconButton,
  Button,
  Stack,
  Collapse,
  Icon,
  Link,
  Popover,
  PopoverTrigger,
  PopoverContent,
  useColorModeValue,
  useBreakpointValue,
  useDisclosure,
  Image,
} from "@chakra-ui/react";
import {
  HamburgerIcon,
  CloseIcon,
  ChevronDownIcon,
  ChevronRightIcon,
} from "@chakra-ui/icons";
import { Link as RoutingLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
export default function Navbar() {
  const { isOpen, onToggle } = useDisclosure();
  const navigate = useNavigate();

  const GotoReg = () => {
    navigate("/signup");
  };
  return (
    <Box position={"fixed"} w={"100%"} top="0" left="0" right="0" zIndex="9999">
      <Flex
        bg={useColorModeValue("white", "gray.800")}
        color={useColorModeValue("gray.600", "white")}
        minH={"60px"}
        py={{ base: 2 }}
        px={{ base: 4 }}
        borderBottom={1}
        borderStyle={"solid"}
        borderColor={useColorModeValue("gray.200", "gray.900")}
        align={"center"}
      >
        <Flex
          flex={{ base: 1, md: "auto" }}
          ml={{ base: -2 }}
          display={{ base: "flex", md: "none" }}
        >
          <IconButton
            onClick={onToggle}
            icon={
              isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />
            }
            variant={"ghost"}
            aria-label={"Toggle Navigation"}
          />
        </Flex>
        <Flex flex={{ base: 1 }} justify={{ base: "center", md: "start" }}>
          <Text
            textAlign={useBreakpointValue({ base: "center", md: "left" })}
            fontFamily={"heading"}
            color={useColorModeValue("gray.800", "white")}
          ></Text>
          <RoutingLink to="/">
            <Image
              src={
                "https://cdn1.cronometer.com/2021/landing/cronometer-logo.svg"
              }
              alt="lg"
              marginLeft="50px"
              marginRight={{ md: "25px", lg: "4px" }}
              width="260px"
            />
          </RoutingLink>

          <Flex display={{ base: "none", md: "flex" }}>
            <DesktopNav />
          </Flex>
        </Flex>
        <Stack
          flex={{ base: 1, md: 0 }}
          justify={"flex-end"}
          direction={"row"}
          spacing={6}
          p={"12px"}
          // pl={"125px"}
          paddingRight={"25px"}
        >
          <Button
            onClick={GotoReg}
            display={{ base: "none", md: "inline-flex" }}
            fontSize={"m"}
            color={"#FE773F"}
            bg={"transparent"}
            href={"#"}
            border="1px solid #FE773F"
            w="100px"
            fontWeight="bold"
            mr="50px"
            boxShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px"
          >
            Log in
          </Button>
        </Stack>
      </Flex>

      <Collapse in={isOpen} animateOpacity>
        <MobileNav />
      </Collapse>
    </Box>
  );
}

const DesktopNav = () => {
  const linkColor = useColorModeValue("gray.600", "gray.200");
  const linkHoverColor = useColorModeValue("gray.800", "white");
  const popoverContentBgColor = useColorModeValue("white", "gray.800");

  return (
    <Stack direction={"row"} ml="300px" mt="10px" spacing={6} color="black">
      {NAV_ITEMS.map((navItem) => (
        <Box key={navItem.label}>
          <Popover trigger={"hover"} placement={"bottom-start"}>
            <PopoverTrigger>
              <RoutingLink
                p={2}
                to={navItem.path ?? "#"}
                fontSize={"lg"}
                fontWeight={450}
                color={linkColor}
                _hover={{
                  textDecoration: "none",
                  color: linkHoverColor,
                }}
              >
                {navItem.label == "login" ? "" : navItem.label}
              </RoutingLink>
            </PopoverTrigger>

            {navItem.children && (
              <PopoverContent
                border={0}
                boxShadow={"xl"}
                bg={popoverContentBgColor}
                p={4}
                rounded={"xl"}
                minW={"sm"}
              >
                <Stack>
                  {navItem.children.map((child) => (
                    <DesktopSubNav key={child.label} {...child} />
                  ))}
                </Stack>
              </PopoverContent>
            )}
          </Popover>
        </Box>
      ))}
    </Stack>
  );
};

const DesktopSubNav = ({ label, href, subLabel, image }) => {
  return (
    <Link
      href={href}
      role={"group"}
      display={"block"}
      p={2}
      rounded={"md"}
      _hover={{ bg: useColorModeValue("pink.50", "gray.900") }}
    >
      <Stack direction={"row"} align={"center"}>
        <Box display="flex" gap="15px">
          <Box>
            <Image w="30px" src={image} />
          </Box>
          <Box>
            <Text
              transition={"all .3s ease"}
              _groupHover={{ color: "pink.400" }}
              fontWeight={500}
            >
              {label}
            </Text>
            <Text fontSize={"sm"}>{subLabel}</Text>
          </Box>
        </Box>
        <Flex
          transition={"all .3s ease"}
          transform={"translateX(-10px)"}
          opacity={0}
          _groupHover={{ opacity: "100%", transform: "translateX(0)" }}
          justify={"flex-end"}
          align={"center"}
          flex={1}
        >
          <Icon color={"pink.400"} w={5} h={5} as={ChevronRightIcon} />
        </Flex>
      </Stack>
    </Link>
  );
};

const MobileNav = () => {
  return (
    <Stack
      bg={useColorModeValue("white", "gray.800")}
      p={4}
      display={{ md: "none" }}
    >
      {NAV_ITEMS.map((navItem) => (
        <MobileNavItem key={navItem.label} {...navItem} />
      ))}
    </Stack>
  );
};

const MobileNavItem = ({ label, children, path }) => {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Stack spacing={4} onClick={children && onToggle}>
      <RoutingLink
        display="flex"
        py={2}
        as={Link}
        to={path ?? "#"}
        justify={"space-between"}
        align={"left"}
        _hover={{
          textDecoration: "none",
        }}
      >
        <Box fontWeight={600} borderBottom="1px solid lightgrey">
          {label}
        </Box>
        {children && (
          <Icon
            as={ChevronDownIcon}
            transition={"all .25s ease-in-out"}
            transform={isOpen ? "rotate(180deg)" : ""}
            w={6}
            h={6}
          />
        )}
      </RoutingLink>

      <Collapse in={isOpen} animateOpacity style={{ marginTop: "0!important" }}>
        <Stack
          mt={2}
          pl={4}
          borderLeft={1}
          borderStyle={"solid"}
          borderColor={useColorModeValue("gray.200", "gray.700")}
          align={"start"}
        >
          {children &&
            children.map((child) => (
              <Link key={child.label} py={2} href={child.href}>
                {child.label}
              </Link>
            ))}
        </Stack>
      </Collapse>
    </Stack>
  );
};

const NAV_ITEMS = [
  {
    label: "Products",
    children: [
      {
        image:
          "https://cdn1.cronometer.com/2021/landing/crono-icon-main-nav.svg",
        label: "Cronometer",
        subLabel: "For Individuals",
        href: "#",
      },
      {
        image: "https://cdn1.cronometer.com/2021/landing/pro-icon-main-nav.svg",
        label: "Cronometer Pro",
        subLabel: "For Healthcare Proffesionals",
        href: "#",
      },
    ],
  },
  {
    label: "Support",
    path: "/support",
  },
  {
    label: "Blog",
    path: "/blog",
  },

  {
    label: "Forums",
    path: "/",
  },
  {
    label: "About",
    path: "/about",
  },
  {
    label: "login",
    path: "/signup",
  },
];
