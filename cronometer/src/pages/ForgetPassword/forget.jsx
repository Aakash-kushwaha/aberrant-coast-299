import React, { useState } from "react";
import { Box, Button, Heading, Input } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { ForgotPassHandler } from "../../redux/Auth/action";
import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

const Forget = () => {
  const dispatch = useDispatch();
  const forgot = useSelector((store) => store.authreducer.forgot);
  const response = useSelector((store) => store.authreducer.response);
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [checkF, setCheckF] = useState(false);

  const HandleUpdate = () => {
    let user_data = {
      email,
      password,
    };
    dispatch(ForgotPassHandler(user_data));
    setCheckF(true);
  };
  useEffect(() => {
    if (forgot) {
      navigate("/login");
    }
  }, [forgot]);
  return (
    <div>
      <Box
        w={{ base: "90%", md: "70%", lg: "70%" }}
        textAlign={"center"}
        border="1px solid grey"
        borderRadius={"10px"}
        padding="50px"
        m="auto"
        mt="100px"
      >
        <Heading fontSize={"xl"} mb="10px">
          Enter Your New Password Here!
        </Heading>
        <Input
          w={{ base: "90%", md: "50%", lg: "50%" }}
          type="email"
          placeholder="enter your email"
          mb="10px"
          onChange={(e) => setEmail(e.target.value)}
        ></Input>
        <br />
        <Input
          type="password"
          w={{ base: "90%", md: "50%", lg: "50%" }}
          placeholder="enter new password your email"
          mb="10px"
          onChange={(e) => setPassword(e.target.value)}
        ></Input>
        <br />
        <Button bg="blue" color="white" onClick={HandleUpdate}>
          Update
        </Button>
        <br />
        {checkF && forgot == false ? (
          <Link
            style={{ color: "red", textDecoration: "underline" }}
            to="/signup"
          >
            Please Signup First
          </Link>
        ) : (
          ""
        )}
      </Box>
    </div>
  );
};

export default Forget;
