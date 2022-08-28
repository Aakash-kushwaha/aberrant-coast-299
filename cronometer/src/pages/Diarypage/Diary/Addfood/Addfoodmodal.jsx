import React from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  useDisclosure,
  Box,
  Input,
  Flex,
  Grid,
} from "@chakra-ui/react";
import axios from "axios";
import { appleimg } from "./img";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchFoodData,
  getUserFood,
  postUserData,
} from "../../../../redux/User/action";

function Addfoodmodal({ tokenfromlocalstorage, foodData, finaldate }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const finalRef = React.useRef(null);
  const [id,setId]= React.useState("")
  const [unitfood,setUnitfood] = React.useState()
//  console.log(id,"id",unitfood,"unit")
  //  console.log(foodData,"foodata")
  const dispatch = useDispatch();

  // console.log(foodData,'uselsector')

  const handleChange = (e) => {
    let foodsearch = e.target.value;

    dispatch(fetchFoodData({ foodsearch, tokenfromlocalstorage }));
  };

  const handleClick = (id,unitfood) => {
    console.log(id,unitfood)
    dispatch(postUserData({ id, tokenfromlocalstorage, finaldate,unitfood }))
    .then((res)=>dispatch(getUserFood({ tokenfromlocalstorage, finaldate })))
    
  };

  const handleInput =(e)=>{
     setUnitfood(e.target.value)
  }
// console.log(unitfood,"foodunit")
  return (
    <>
      <Button h={"20px"} onClick={onOpen}>
        Open Modal
      </Button>
      <Modal
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}
        size="4xl"
        
      >
        <ModalOverlay border={"1px solid blue"} />
        <ModalContent  border={"2px solid black"} height={"md"} >
          <ModalHeader>Add Food to Diary</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Flex>
              <Input
                placeholder="search your food"
                size="sm"
                onChange={handleChange}
              />
              <Button size="sm">Search</Button>
            </Flex>
            <Box>
              <Grid templateColumns="repeat(7,1fr)">
                <Box>All</Box>
                <Box>Favourite</Box>
                <Box>Common Food</Box>
                <Box>Supplements</Box>
                <Box>Brands</Box>
                <Box>Restaurent</Box>
                <Box>Custom</Box>
              </Grid>
              <Box>
                <Box bg={"silver"}>Description</Box>

                <Box
                   height={"200px"}
                  style={{ overflow: "scroll", overflowX: "hidden" }}
                >
                  {foodData &&
                    foodData.map((el, index) => {
                      return (
                        <Box
                         cursor={"pointer"}
                          border="1px solid silver"
                          key={index}
                          onClick={() =>setId(el._id)}
                          _hover={{backgroundColor:"silver"}}
                        >
                          {el.Food.name}
                        </Box>
                      );
                    })}
                </Box>
              </Box>
            </Box>
          </ModalBody>
      
          <Flex margin={"auto"} >
            <Input border={"1px solid black"} placeholder="amount / plate / unit / etc" onChange={handleInput}></Input>
            <Button onClick={()=>handleClick(id,unitfood)}  width={"50px"} bg={"#FF763F"}>
              Add
            </Button>
          </Flex>
  
        </ModalContent>
      </Modal>
    </>
  );
}

export default Addfoodmodal;
