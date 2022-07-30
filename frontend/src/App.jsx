import { ChakraProvider } from '@chakra-ui/react';
import { Routes, Route } from "react-router-dom"
import Homepage from '../src/pages/homepage';
import Cart from '../src/pages/cart';

function MyApp() {
  return (
    <ChakraProvider>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </ChakraProvider>
  )
}

export default MyApp
