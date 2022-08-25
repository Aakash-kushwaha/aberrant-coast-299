import {
    Table,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    Td,
    TableCaption,
    TableContainer,
  } from '@chakra-ui/react'

  import React from 'react'
  
  const FoodTable = ({userFood}) => {
    // console.log(userFood,"table")
    return (
<TableContainer>
  <Table colorScheme='teal' w={"700px"}>
    <Thead>
      <Tr>
        <Th>Description</Th>
        <Th>Amount</Th>
        <Th isNumeric>Unit</Th> 
        <Th isNumeric>Energy</Th>
      </Tr>
    </Thead>
    <Tbody >
    
     { userFood && userFood.map((el,index)=>{
      return <Tr key={index}>
      <Td>{el.Food.name}</Td>
      <Td>{"50g"}</Td>
        <Td isNumeric>1 unit</Td>
        <Td isNumeric>{el.Food.Carbohydrates.Fiber.val}</Td>
      </Tr>
     })  }

 
    </Tbody>
  </Table>
</TableContainer>
   
    )
  }
  
  export default FoodTable



