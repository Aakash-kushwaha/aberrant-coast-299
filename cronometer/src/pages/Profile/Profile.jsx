import React from 'react'
import {Box, Button, Input, Select,Text,label,Checkbox,Stack,Radio,RadioGroup,
  Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
  SliderMark} from "@chakra-ui/react"

  

const Profile = () => {
  const breakpoints = {
    sm: '30em',
    md: '48em',
    lg: '62em',
    xl: '80em'
  }
  return (
    <div>
      <Box width={{base:"30%",md:"50%",lg:"85%"}} marginTop="50px"marginRight="0px"marginLeft="95px" display="flex" justifyContent="space-between">
      <Box >
        <Text fontSize={{ base: '18px', md: '15px', lg: '22px' }}><strong>Profile and Targets</strong></Text>
        <Text fontSize={{ base: '15px', md: '12px', lg: '18px' }}>Set up your profile so we can accurately calculate your targets.</Text>
        <Text fontSize={{ base: '15px', md: '12px', lg: '18px' }}>Customize your targets to reach a weight goal or address your specific health needs.</Text>
        </Box>
        <Box>
        <Button backgroundColor="#FF763F" height="30px">Reset All Defaults</Button>
      </Box>
      </Box>
      <Box marginTop="10px" marginLeft="95px" width={{base:"30%",md:"50%",lg:"85%"}} border="1px solid #E0E0DC">
        <Box backgroundColor="#FBFBFA"height="50px"border="1px solid #E0E0DC">
        <Text paddingTop="10px" marginLeft="20px"marginBottom="0px"color="#4F4E53" fontSize={{ base: '15px',sm:'12px', md: '15px', lg: '21px' }}>Profile</Text> 
        </Box> 
        <Box display="flex"justifyContent="space-around">
          <Box width={{base:"30%",sm:"20%",lg:"40%"}} marginTop="30px"marginLeft="0px">
            <Box display="flex">
             <label>Sex</label> 
             <Select size="xs" width={{base:"30%",sm:"100%",lg:"70%"}}marginTop="3px">
              <option>Male</option>
              <option>Female</option>
              <option>Female+Pregnant</option>
              <option>Female+Breastfeeding</option>
             </Select>
             </Box>
             <Box display="flex"marginTop="10px">
             <label>Birthday</label> 
             <Input type="date" size="s" marginTop="3px"/>
             </Box>
             <Box display="flex"marginTop="30px">
              <label >Current Weight</label>
              <label style={{marginLeft:"40px"}}>68</label>
              
              <select style={{ height:"28px",marginTop:"3px",marginLeft:"10px",border:"1px solid #E0E0DC"}}>
                <option>kg</option>
                <option>lbs</option>
              </select>
              
               
             </Box>
          </Box>
          <Box width={{base:"20%",sm:"20%",lg:"40%"}} marginTop="30px"marginLeft="0px">
              <Box display="flex"marginTop="0px">
                <label>Height</label>
                <Select  style={{ marginTop:"0px",border:"1px solid #E0E0DC"}}>
                    <option>5</option>
                    <option>6</option>
                    <option>7</option>
                    <option>8</option>
                    <option>9</option>
                    <option>10</option>

                </Select>
                <Text fontSize={{ base: '15px',sm:'10px', md: '12px', lg: '15px' }}marginLeft="5px">ft</Text>
                <Select  style={{height:"28px",marginTop:"0px",marginLeft:"19px",border:"1px solid #E0E0DC"}}>
                <option>1</option><option>2</option><option>3</option><option>4</option>
                    <option>5</option>
                    <option>6</option>
                    <option>7</option>
                    <option>8</option>
                    <option>9</option>
                    <option>10</option>
                    <option>11</option>
                </Select>
                <Text fontSize={{ base: '14px',sm:'10px', md: '12px', lg: '15px' }}marginLeft="5px">in</Text>
                <Text fontSize={{ base: '14px',sm:'10px', md: '12px', lg: '15px' }} marginLeft="15px">or</Text>
                <Input type="number" width={{ base: '60px', md: '50px', lg: '95px' }}height="28px"border="1px solid #E0E0DC"marginLeft="19px"/>
                <Text fontSize={{ base: '14px',sm:'10px', md: '12px', lg: '15px' }}marginLeft="5px">cm</Text>
              </Box>
              <Box display="flex"marginTop="10px">
              <label >Body fat</label>
              <label style={{marginLeft:"60px",marginTop:"5px"}}>15.6%</label>
              </Box>
              <Box display="flex"marginTop="10px">
              <label >BMI</label>
              <label style={{marginLeft:"60px",marginTop:"5px"}}>22.2</label>
              </Box>
          </Box>
        </Box>
      </Box>
      <Box marginTop="40px"marginLeft="95px" width={{base:"30%",md:"50%",lg:"85%"}}border="1px solid #E0E0DC">
        <Box backgroundColor="#FBFBFA"height="50px"border="1px solid #E0E0DC">
          <Text paddingTop="10px"marginLeft="20px"marginBottom="0px"color="#4F4E53" fontSize={{ base: '15px',sm:'12px', md: '15px', lg: '21px' }}>Energy Burned</Text> 
        </Box>
        <Box display="flex"justifyContent="space-around">
          <Box width={{base:"40%",sm:"20%", md:"30%",lg:"40%"}}height="200px"marginTop="30px"marginLeft="0px">
            <Box display="flex">
             <label>BMR</label> 
             <Select size="xs" width={{ base: '60%', md: '40%', lg: '70%' }}marginTop="3px"marginLeft="125px">
              <option>Mifflin St. Jeor Equation</option>
              <option>Custom</option>
              </Select>
             </Box>
             <Box display="flex">
                <Text fontSize={{ base: '14px',sm:'8px', md: '10px', lg: '12px' }} marginLeft="158px">Basal Metabolic Rate</Text>
                <Text fontSize={{ base: '14px',sm:'10px', md: '12px', lg: '15px' }} marginLeft="5px">1654 kcal</Text>
             </Box>
             
            </Box>
          <Box width={{base:"40%",sm:"20%",lg:"40%"}} height="200px"marginTop="30px"marginLeft="0px">
          <Box display="flex">
             <label>Activity Level</label> 
             <Select size="xs" width={{ base: '60%', md: '40%', lg: '70%' }} marginTop="3px"marginLeft="125px">
              <option>Sedentary(BMR * 0.2)</option>
              <option>Lightly Active(BMR * 0.357)</option>
              <option>Moderately Active(BMR * 0.5)</option>
              <option>Very Active(BMR * 0.9)</option>
              <option>Custom</option>
              <option>None</option>
              </Select>
           </Box>
           <Box marginLeft="200px">
              <Text fontSize={{ base: '5px',sm:'5px', md: '6px', lg: '10px' }}  marginLeft="0px">Little or no exercise. You will burn some additional calories over and above BMR even for light activity such as watching TV, working at a desk, etc. Use this setting if you are synced to a device that tracks workouts only (not tracking general activity)</Text>
           </Box>
           <Box display="flex" marginTop="13px">
           <Checkbox colorScheme='orange' >Replace with imported activity</Checkbox>
           </Box>
           <Box marginLeft="200px">
              <Text fontSize={{ base: '5px',sm:'5px', md: '6px', lg: '10px' }}  marginLeft="0px">Imported activity from connected device will override selected activity level when available. Cronometer will default to selected activity level on days when no imported activity is available</Text>
           </Box>
            </Box>
        </Box>
        <Box style={{backgroundColor:"#d3e6f8"}} height="50px" width={{ base: '75%', md: '60%', lg: '94%' }} marginTop="40px" marginLeft="40px">
          <Text fontSize={{ base: '8px',sm:'12px', md: '16px', lg: '22px' }} marginTop="10px" textAlign="center">Total Energy Burned (TDEE) = 1985 kcal + Exercise</Text>
        </Box>
        <Box  marginTop="15px" marginLeft="40px">
          <Text fontSize={{ base: '12px',sm:'10px', md: '15px', lg: '20px' }} >Variable Calories Burned</Text>
          <Text fontSize="10px">Choose how you would like your diary entries to contribute to your TDEE.</Text>
        </Box>
        <Box display="flex" display="flex"justifyContent="space-around">
            <Box marginTop="15px">
            <Checkbox colorScheme='orange' >Include Exercises</Checkbox>
            <Text fontSize="10" marginLeft="22px">Select this option to include exercise in your energy budget calculations.</Text>
            </Box>
            
            <Box marginTop="15px">
            <Checkbox colorScheme='orange' >Thermin Effect of Food (TEF)</Checkbox>
            <Text fontSize="10" marginLeft="22px">Select this option to include exercise in your energy budget calculations.</Text>
           
            </Box>
        </Box>
     </Box>
     <Box marginTop="40px"marginLeft="95px"width={{base:"30%",md:"50%",lg:"85%"}}border="1px solid #E0E0DC">
      <Box backgroundColor="#FBFBFA"height="50px"border="1px solid #E0E0DC">
        <Text paddingTop="10px"marginLeft="20px"marginBottom="0px"color="#4F4E53"fontSize="21px">Weight Goal or Custom Energy Target</Text> 
        </Box>
        <Box display="flex"justifyContent="space-around" marginTop="20px">
          <Box  >
          <Stack spacing={5} direction='row'>
            <Radio size='lg' name='1' colorScheme='orange' defaultChecked>
             Weight Goal
          </Radio>
          
          <Input type="number" width={{ base: '80px', md: '60px', lg: '95px' }} height="28px"border="1px solid #E0E0DC"marginLeft="19px"/>
          <Text>kg</Text>
          </Stack>
          </Box>
          <Box>

          </Box>
          <Box>
            0 kcal
          </Box>
          <Box>
          <Stack spacing={5} direction='row'>
            <Radio size='lg' name='1' colorScheme='orange' defaultChecked>
             Custom Energy Target
          </Radio>
          
          <Input type="number" width={{ base: '90px', md: '80px', lg: '120px' }}height="28px"border="1px solid #E0E0DC"marginLeft="19px"/>
          <Text>kcal</Text>
          </Stack>
          </Box>
        </Box>
        <Box marginTop="10px">
          <Text fontSize="12px" marginLeft="88px"><strong>Rate</strong>:Gain weight:(0.34 kg/week)</Text>
        </Box>
        <Box width={{ base: '25%', md: '20%', lg: '28%' }} marginLeft="53px" marginTop="10px">
        <Slider defaultValue={60} min={0} max={300} step={30}>
            <SliderTrack bg='red.100'>
              <Box position='relative' right={10} />
                <SliderFilledTrack bg='tomato' />
            </SliderTrack>
            <SliderThumb boxSize={6} bg='tomato'/>
        </Slider>
        
        </Box>
        <Box marginTop="10px">
          <Text fontSize="12px" marginLeft="88px">Requires an average daily 374 kcal surplus</Text>
        </Box>
        <Box marginTop="10px" marginLeft="30px">
          <Checkbox colorScheme='orange' >Show weight goal in Energy Summary</Checkbox>
        </Box>
        <Box style={{backgroundColor:"#d3e6f8"}} height="50px" width="94%" marginTop="40px" marginLeft="40px">
          <Text fontSize="22px" marginTop="10px" textAlign="center">Daily Energy Surplus: 374 kcal</Text>
        </Box>
     </Box>
     <Box marginTop="40px"marginLeft="95px" width={{base:"30%",md:"50%",lg:"85%"}}border="1px solid #E0E0DC">
      <Box backgroundColor="#FBFBFA"height="50px"border="1px solid #E0E0DC">
        <Text paddingTop="10px"marginLeft="20px"marginBottom="0px"color="#4F4E53"fontSize="21px">Macronutrient Targets</Text> 
        </Box>
        <Box display="flex"justifyContent="space-around">
          <Box width={{ base: '50%', md: '40%', lg: '60%' }}marginTop="30px"marginLeft="0px">
            <Box display="flex">
             <label style={{marginLeft:"35px",fontSize:"15px"}} >Set macro targets using</label> 
             <Select size="xs" width="27%"marginTop="3px"marginLeft="31px">
              <option>Macro Ratios</option>
              <option>Fixed Values</option>
              <option>Keto Calculator</option>
             </Select>
             </Box>
            </Box>
            <Box width={{ base: '30%', md: '25%', lg: '40%' }}marginTop="30px"marginLeft="0px"></Box>
           </Box> 
           <Box width={{ base: '75%', md: '50%', lg: '90%' }} marginTop="30px" marginLeft="48px" style={{backgroundColor:"#f8f8f8"}} >
            <Box display="flex" justify-content="space-around">
            <Box marginTop="20px">
              <Text fontSize="18px" marginLeft="22px">Macro Ratios</Text>
              <Text fontSize="12px" marginLeft="22px">Dynamically calculates the proportion of energy from each macronutrient.</Text>
            </Box>
           

            <Box marginTop="20px" marginLeft="435px">
            <RadioGroup defaultValue='2'>
                <Stack spacing={5} direction='row'>
                  <Radio colorScheme='orange' value='1'>
                    kcal
                  </Radio>
                  <Radio colorScheme='orange' value='2'>
                    grams
                  </Radio>
                </Stack>
              </RadioGroup>
            </Box>
            </Box>
            <Box display="flex" marginTop="30px" marginLeft="50px">
              <Box >
                <Text color='green'>Protien</Text>
                <Input type="number" width="95px"height="28px"border="1px solid #5c5c5c"marginLeft="-17px" marginTop="10px"/>
                <Text marginTop="15px">25%</Text>
              </Box>
              <Box marginLeft="30px">
              <Text color='blue'>Net Carbs</Text>
              <Input type="number" width="95px"height="28px"border="1px solid #5c5c5c"marginLeft="-17x" marginTop="10px"/>
              <Text marginTop="15px">45%</Text>
              </Box>
              <Box marginLeft="30px">
              <Text color='red'>Fat</Text>
              <Input type="number" width="95px"height="28px"border="1px solid #5c5c5c"marginLeft="-17px" marginTop="10px"/>
              <Text marginTop="15px">30%</Text>
              </Box>
            </Box>
           </Box>
     </Box>
     <Box marginTop="40px"marginLeft="95px"width={{base:"30%",md:"50%",lg:"85%"}}height="300px"border="1px solid #E0E0DC">
      <Box backgroundColor="#FBFBFA"height="50px"border="1px solid #E0E0DC">
        <Text paddingTop="10px"marginLeft="20px"marginBottom="0px"color="#4F4E53"fontSize="21px">Tracking Carbohydrates</Text> 
        </Box>
        <Box width="50%" marginTop="30px">
        <Box display="flex" marginLeft="100px" >
             <Text fontSize="18px">Track carbohydrates as</Text> 
             <Select size="xs" marginTop="3px"marginLeft="50px" >
              <option>Net Carbs</option>
              <option>Total Carbs</option>
              
             </Select>
             </Box>
             </Box>
           <Box marginTop="30px" display="flex" marginLeft="100px">
            <label>Exclude:</label>
            <Stack spacing={5} direction='row' marginLeft="100px">
                <Checkbox colorScheme='orange' defaultChecked>
                  Fiber
                </Checkbox>
                <Checkbox colorScheme='orange' defaultChecked>
                  sugar Alcohols
                </Checkbox>
                <Checkbox colorScheme='orange' defaultChecked>
                  Allulose
                </Checkbox>
                <Checkbox colorScheme='orange' defaultChecked>
                  Frutose
                </Checkbox>
              </Stack>
            </Box>  
     </Box>
    
    
    </div>
  )
}

export default Profile