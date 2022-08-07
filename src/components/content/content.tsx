import { Flex, Box, Text } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { IInitialState, IItems } from '../../app/rootReducer';
import Card from '../card/card';
import Search from '../search/search';
import './content.css'

export default function Content() {
   const books = useSelector<IInitialState, IItems[]>(state => state.items);
   const [value, setValue] = useState("");
   const onChange = (value: string) => { setValue(value) };

   const filteredBooks = (books: IItems[], value: string) => {
     if(!value) return books;
     value.trim().toLocaleLowerCase()
     return books.filter((book) => book.name.trim().toLocaleLowerCase().match(value))
   }

   useEffect(() => { console.log(books) }, [books])

   return (
    <Box>
      <Search onChange={onChange}/>
      <Flex wrap={'wrap'} gap={10} justifyContent='center'>
      { filteredBooks(books, value).map((book) => 
          <Box h={450} my={16} key={book.id}>
            <Card name={book.name} img={book.img} price={book.price} id={book.id} isClicked={book.isClicked} count={book.count} /> 
          </Box>)
        }
      </Flex>
    </Box>
 )
}