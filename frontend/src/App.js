import logo from './logo.svg';
import './App.css';
import Home from './Pages/Home';
import Registration from './Pages/Registration';
import Utility from './Pages/Utility';

import { ChakraProvider } from '@chakra-ui/react'
import { Routes, Route } from "react-router-dom"
function App() {
  return (
    <ChakraProvider>
      

      <div className="App">
        <Routes>
          
          {/* <Route path='/' element={<Home/>}/> */}
          <Route path='/registration' element={<Registration/>}/>
          <Route path='/' element={<Utility/>}/>
          
        </Routes>
      </div>
  
    </ChakraProvider>
  );
}

export default App;
