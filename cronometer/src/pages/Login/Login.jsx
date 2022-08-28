
import { Box, Button, Image, Input, Progress, Text  } from "@chakra-ui/react";

import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { LoginHandler } from "../../redux/Auth/action";
import { useEffect } from "react";
const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const token = useSelector((store) => store.authreducer.token);
  const login = useSelector((store) => store.authreducer.login);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [CheckL, setCheck] = useState(false);
  const HandleLogin = () => {
    const user_data = {
      email,
      password,
    };
    dispatch(LoginHandler(user_data));
    setCheck(true);
  };
  useEffect(() => {
    if (token && login) {
      navigate("/home");
    }
    if (CheckL === true && login == false) {
      alert("Invalid Credentials");
    }
  }, [token, login]);
  return (
    <div>
      <Box
        w={{ base: "90%", md: "70%", lg: "50%" }}
        margin="auto"
        mb="100px"
        mt="100px"
        backgroundColor={"#FBFBFA"}
        borderRadius="10px"
        boxShadow="rgba(99, 99, 99, 0.2) 0px 2px 8px 0px"
      >
        <Image
          src="https://cdn1.cronometer.com/logos/cronometer-logo-orange.png"
          alt="logo"
          h="70px"
          display={"flex"}
          m="auto"
        />
        <Box p="30px">
          <Input
            type="email"
            placeholder="Email Address"
            border={"2px solid black"}
            marginBottom="10px"
            required
            onChange={(e) => setEmail(e.target.value)}
          ></Input>
          <Input
            type="password"
            placeholder="Password"
            border={"2px solid black"}
            marginBottom="10px"
            required
            onChange={(e) => setPassword(e.target.value)}
          ></Input>
          <Button w="100%" onClick={HandleLogin}>
            LOGIN
          </Button>
          <Box display="flex" justifyContent={"space-between"} mt="25px">
            <Box display="flex">
              <Text fontSize={{ base: "0.75rem", md: "1rem", lg: "1rem" }}>
                Not a Member?{" "}
              </Text>

              <Text
                color="red"
                ml="3px"
                fontSize={{ base: "0.75rem", md: "1rem", lg: "1rem" }}
                cursor="pointer"
              >
                <Link to="/signup">Sign Up Now</Link>
              </Text>
            </Box>
            <Text
              color="red"
              fontSize={{ base: "0.75rem", md: "1rem", lg: "1rem" }}
              ml="3px"
              cursor="pointer"
            >
              {" "}
              <Link to="/forgotpassword">Forgot Password?</Link>
            </Text>
          </Box>
        </Box>
      </Box>
    </div>
  );
};

export default Login;
