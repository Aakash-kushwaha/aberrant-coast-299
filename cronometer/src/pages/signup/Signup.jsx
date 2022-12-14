import React, { useEffect, useState } from "react";
import {
  Box,
  Heading,
  Image,
  Input,
  Radio,
  RadioGroup,
  Stack,
  Select,
  Button,
} from "@chakra-ui/react";

import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { SignupHandler } from "../../redux/Auth/action";
const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmpass, setConfirmPass] = useState("");
  const [sex, setSex] = useState("");
  const [day, setDay] = useState("");
  const [month, setMonth] = useState("");
  const [year, setYear] = useState("");
  const [hfit, setHfit] = useState("");
  const [hinch, setHinch] = useState("");
  const [weight, setWeight] = useState("");
  const [passcheck, setPasscheck] = useState(true);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const signup = useSelector((store) => store.authreducer.signup);
  const HandleSignup = () => {
    if (
      email.length === 0 ||
      password.length === 0 ||
      confirmpass.length === 0 ||
      sex.length === 0 ||
      year.length === 0 ||
      month.length === 0 ||
      day.length === 0 ||
      hfit.length === 0 ||
      hinch.length === 0 ||
      weight.length === 0
    ) {
      alert("Please Enter All Required Information");
    } else {
      let user_data = {
        email,
        password,
        sex,
        born: `${year}-${month}-${day}`,
        height: `${hfit}ft${hinch}inch`,
        weight: `${weight}kg`,
      };
      if (password === confirmpass) {
        dispatch(SignupHandler(user_data));
      } else {
        setPasscheck(false);
      }
    }
  };

  useEffect(() => {
    if (signup === true) {
      navigate("/login");
    }
  }, [signup]);

  return (
    <Box margin="0" mb="100px">
      <Box
        h={"80px"}
        w={"100%"}
        backgroundColor={"#FEFFFF"}
        display={"flex"}
        justifyContent="center"
        boxShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px"
      >
        <Image
          h="50px"
          src="https://cdn1.cronometer.com/2020/landing/cronometer-logo.png"
          alt="logo"
          margin={"10px"}
        ></Image>
      </Box>
      <Heading fontSize={"1.6rem"} textAlign="center" margin="30px">
        Create Your Free Account
      </Heading>
      <Box
        w={{ base: "80%", md: "70%", lg: "50%" }}
        margin="auto"
        backgroundColor={"#FBFBFA"}
        borderRadius="10px"
        boxShadow="rgba(99, 99, 99, 0.2) 0px 2px 8px 0px"
      >
        <Box p="30px">
          <Input
            type="email"
            placeholder="Email Address"
            border={"2px solid black"}
            marginBottom="5px"
            required
            onChange={(e) => setEmail(e.target.value)}
          ></Input>
          <Input
            type="password"
            placeholder="Password"
            border={"2px solid black"}
            marginBottom="5px"
            required
            onChange={(e) => setPassword(e.target.value)}
          ></Input>
          <Input
            type="password"
            placeholder="Confirm Password"
            border={"2px solid black"}
            marginBottom="5px"
            required
            onChange={(e) => setConfirmPass(e.target.value)}
          ></Input>
          {passcheck == false && (
            <p style={{ color: "red" }}>
              Make sure passwords entered are the same
            </p>
          )}
        </Box>
      </Box>
      <Box
        w={{ base: "80%", md: "70%", lg: "50%" }}
        margin="auto"
        backgroundColor={"#FBFBFA"}
        borderRadius="10px"
        boxShadow="rgba(99, 99, 99, 0.2) 0px 2px 8px 0px"
        mt="20px"
      >
        <Box p={{ base: "17px", md: "30px", lg: "30px" }}>
          <Heading fontSize={"1.1rem"} textAlign="center">
            Your Body Type
          </Heading>
          <Box
            display="flex"
            w={{ base: "100%", md: "70%", lg: "70%" }}
            margin="auto"
            textAlign={"left"}
            marginTop={"10px"}
          >
            {" "}
            Sex:
            <RadioGroup value={sex} marginLeft={"10px"} onChange={setSex}>
              <Stack direction="row">
                <Radio value="Male">Male</Radio>
                <Radio value="Female">Female</Radio>
              </Stack>
            </RadioGroup>
          </Box>
          <Box
            display="flex"
            w={{ base: "100%", md: "70%", lg: "70%" }}
            margin="auto"
            marginTop={"10px"}
            textAlign={"left"}
          >
            Born:
            <Select
              w="78px"
              h="25px"
              border={"2px solid black"}
              ml="5px"
              onChange={(e) => setDay(e.target.value)}
            >
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
              <option value="11">11</option>
              <option value="12">12</option>
              <option value="13">13</option>
              <option value="14">14</option>
              <option value="15">15</option>
              <option value="16">16</option>
              <option value="17">17</option>
              <option value="18">18</option>
              <option value="19">19</option>
              <option value="20">20</option>
              <option value="21">21</option>
              <option value="22">22</option>
              <option value="23">23</option>
              <option value="24">24</option>
              <option value="25">25</option>
              <option value="26">26</option>
              <option value="27">27</option>
              <option value="28">28</option>
              <option value="29">29</option>
              <option value="30">30</option>
              <option value="31">31</option>
            </Select>
            <Select
              w="108px"
              h="25px"
              border={"2px solid black"}
              ml="5px"
              onChange={(e) => setMonth(e.target.value)}
            >
              {" "}
              <option value="January">January</option>
              <option value="February">February</option>
              <option value="March">March</option>
              <option value="April">April</option>
              <option value="May">May</option>
              <option value="June">June</option>
              <option value="July">July</option>
              <option value="August">August</option>
              <option value="September">September</option>
              <option value="October">October</option>
              <option value="November">November</option>
              <option value="December">December</option>
            </Select>
            <Input
              type="number"
              placeholder="year"
              h="25px"
              w="23%"
              ml="5px"
              onChange={(e) => setYear(e.target.value)}
            ></Input>
          </Box>
          <Box
            display="flex"
            w={{ base: "100%", md: "70%", lg: "70%" }}
            margin="auto"
            marginTop={"10px"}
          >
            Height:
            <Select
              w="68px"
              h="25px"
              border={"2px solid black"}
              ml="5px"
              onChange={(e) => setHfit(e.target.value)}
            >
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
            </Select>{" "}
            '{" "}
            <Select
              w="78px"
              h="25px"
              border={"2px solid black"}
              ml="5px"
              onChange={(e) => setHinch(e.target.value)}
            >
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
              <option value="11">11</option>
            </Select>{" "}
            "{" "}
          </Box>
          <Box
            display="flex"
            w={{ base: "100%", md: "70%", lg: "70%" }}
            ml="5px"
            margin="auto"
            marginTop={"10px"}
          >
            Weight:
            <Input
              type="number"
              placeholder="weight"
              w="30%"
              h="25px"
              ml="5px"
              onChange={(e) => setWeight(e.target.value)}
            ></Input>{" "}
            kg
          </Box>
        </Box>
      </Box>
      <Button
        w={{ base: "80%", md: "70%", lg: "50%" }}
        margin="auto"
        ml={{ base: "10%", md: "14.8%", lg: "25%" }}
        mt="20px"
        color="white"
        bg="#67AD5A"
        onClick={HandleSignup}
      >
        Create Account
      </Button>
    </Box>
  );
};

export default Signup;
