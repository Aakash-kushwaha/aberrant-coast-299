import { Box, Button, Image, Input, Progress } from "@chakra-ui/react";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
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
  const HandleLogin = () => {
    const user_data = {
      email,
      password,
    };
    dispatch(LoginHandler(user_data));
  };
  useEffect(() => {
    if (token && login) {
      navigate("/home");
    }
  }, [token, login]);
  return (
    <div>
      <Box
        w="50%"
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
              Not a Member?{" "}
              <p style={{ color: "red", marginLeft: "3px", cursor: "pointer" }}>
                {" "}
                Sign Up Now
              </p>
            </Box>
            <p style={{ color: "red", marginLeft: "3px", cursor: "pointer" }}>
              {" "}
              Forgot Password?
            </p>
          </Box>
        </Box>
      </Box>
    </div>
  );
};

export default Login;
