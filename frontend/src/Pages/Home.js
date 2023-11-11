import React from 'react'
import { Link } from "react-router-dom";
import NavbarComp from '../Components/NavbarComp'
import "./Pages_styles/Home.css"
import { Image } from '@chakra-ui/react'
function Home() {
  return (
    <div className='Home'>
        
         <NavbarComp/>
    </div>
  )
}

export default Home