import React from 'react'
import NavbarComp from '../Components/NavbarComp'
import { Box, Heading, VStack,StackDivider, HStack } from '@chakra-ui/react'
import './Pages_styles/Utility.css'
import { BsKanban } from 'react-icons/bs';
import { BsCalendar4Range } from 'react-icons/bs';
import { BsQuestionSquare } from 'react-icons/bs';
function Utility() {
  return (
    <div className='utility'>
              <NavbarComp/>
              <div className='utility-child'>
                   <div className='sidebar'>
                      <VStack
                        divider={<StackDivider borderColor='gray.200' />}
                        spacing={4}
                        align='stretch'

                      >
                            <Box p='3' h='40'>
                                <Heading>Project name</Heading>
                                 <p>
                                  project descriotion will be given here.
                                 </p>
                            </Box>
                            <Box p='3'>
                                 <Heading>Utilities</Heading>
                                 <ul className='utilities-list'>
                                   <li>
                                    
                                      <BsKanban size='25'/>
                                      Kanban board
                                     
                                   </li>
                                   <li>
                                   <BsCalendar4Range size='25'/>
                                    Timeline
                                    </li>
                                   <li>
                                    <BsQuestionSquare size='25'/>
                                    Prediction
                                    </li>
                                 </ul>
                            </Box>
                      </VStack>
                   </div>
                   <div className='utility-panel'>
                
                   </div>
              </div>
    </div>
  )
}

export default Utility