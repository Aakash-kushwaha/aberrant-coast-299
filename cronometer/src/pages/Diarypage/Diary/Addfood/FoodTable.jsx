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
<TableContainer

 >
  <Table colorScheme='teal'  >
    <Thead>
      <Tr>
        <Th>Description</Th>
        <Th>Amount</Th>
        <Th isNumeric>Unit</Th> 
        <Th isNumeric>Energy</Th>
      </Tr>
    </Thead>
    <Tbody >
    
     { userFood && userFood.Food_data.map((el,index)=>{
      return <Tr key={index}>
      <Td>{el.Food.name}</Td>
      <Td>{el.amount}</Td>
        <Td isNumeric>1 unit</Td>
        <Td isNumeric>{el.Food.General.Energy.val} </Td>
      </Tr>
     })  }

     { userFood && userFood.Exercise_data.map((el,index)=>{
      return <Tr key={index}>
      <Td>{el.Exercise.name}</Td>
      <Td>{el.Exercise.amount.val}</Td>
        <Td isNumeric>{el.Exercise.amount.unit}</Td>
        <Td isNumeric>{el.Exercise.Energy} </Td>
      </Tr>
     })  }

 
    </Tbody>
  </Table>
</TableContainer>
   
    )
  }
  
  export default FoodTable



