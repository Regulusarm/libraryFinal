import { Box } from '@chakra-ui/react';
import React from 'react';
import './main.css'

export default function Main(props:{ children: React.ReactNode }) {
   return (
   <Box as='main' background={'gray.50'} p={20}> { props.children } </Box>
 )
}
