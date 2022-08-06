import { Flex, Box, Text } from '@chakra-ui/react';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { IInitialState, IItems } from '../../app/rootReducer';
import Card from '../card/card';
import './content.css'

export default function Content() {
   const books = useSelector<IInitialState, IItems[]>(state => state.items)

   useEffect(() => { console.log(books) }, [books])

   return (
   <Flex wrap={'wrap'} gap={10} justifyContent='center'>
   { books.map((book) => 
      <Box h={450} my={16} key={book.id}>
        <Card name={book.name} img={book.img} price={book.price} id={book.id} isClicked={book.isClicked} count={book.count} /> 
      </Box>)
    }
   </Flex>
 )
}