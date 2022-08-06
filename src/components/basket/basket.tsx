import { Flex, Box, Text, Image } from '@chakra-ui/react';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { IInitialState, IItems } from '../../app/rootReducer';
import './basket.css'

export default function Basket() {
  const basketItems = useSelector<IInitialState, Partial<IItems[]>>(state => state.basket)
   return (
   <Box>
    <Text fontSize='4xl' textAlign='center' mb={5}>Товары</Text>
    <Flex wrap={'wrap'} gap={10} justifyContent='center' alignItems='center' direction='row'>
        { basketItems.map((book: any) => 
          (<Flex direction='column' key={book.id} justifyContent='center' alignItems='center' boxShadow='md' py={5} px={5} borderRadius='25' bg='white'>
            <Image objectFit='contain' boxSize='200px' src={book.img} alt='Book img' />
            <Text>{ book.name }</Text>
            <Text>Количество: {book.count}</Text>
            <Text>Цена: {book.price}</Text>
            <Text>Сумма набора: {book.price * book.count}</Text>
            </Flex>))
          }
    </Flex>
    <Text fontSize='4xl' textAlign='center' mt={5}>
      Общая Сумма: { basketItems.reduce((allPrice, item) => {
        return (Number(item?.price) * Number(item?.count)) + allPrice
        }, 0) 
     }</Text>
   </Box>
 )
}