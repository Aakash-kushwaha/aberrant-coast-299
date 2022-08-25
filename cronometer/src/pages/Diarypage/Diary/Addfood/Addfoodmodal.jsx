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

  //  console.log(foodData,"foodata")
  const dispatch = useDispatch();

  // console.log(foodData,'uselsector')

  const handleChange = (e) => {
    let foodsearch = e.target.value;

    dispatch(fetchFoodData({ foodsearch, tokenfromlocalstorage }));
  };

  const handleClick = (id) => {
    dispatch(postUserData({ id, tokenfromlocalstorage, finaldate }));
    dispatch(getUserFood({ tokenfromlocalstorage, finaldate }));
  };

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
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Add Food to Diary</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Flex>
              <Input
                placeholder="small size"
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
                  height={"md"}
                  style={{ overflow: "scroll", overflowX: "hidden" }}
                >
                  {foodData &&
                    foodData.map((el, index) => {
                      return (
                        <Box
                          border="1px solid silver"
                          key={index}
                          onClick={() => handleClick(el._id)}
                        >
                          {el.Food.name}
                        </Box>
                      );
                    })}
                </Box>
              </Box>
            </Box>
          </ModalBody>
          <Box>
            <input placeholder="amount"></input>
               <Button>Add</Button>

          </Box>
        </ModalContent>
      </Modal>
    </>
  );
}

export default Addfoodmodal;
