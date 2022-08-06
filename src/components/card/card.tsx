import { Box, Image, Text, Icon, Flex, Button } from '@chakra-ui/react';
import { useState } from 'react';
import { MdAdd } from 'react-icons/md'
import { MinusIcon, AddIcon } from '@chakra-ui/icons'
import { useSelector } from 'react-redux';
import { useAppDispatch } from '../../app/hooks';
import { IInitialState, IItems } from '../../app/rootReducer';
import './card.css'

export default function Card(props: { name: string, img: string, price: string | number, id: number, isClicked: boolean, count: number }) {
  const dispatch = useAppDispatch();
  const basketItems = useSelector<IInitialState, Partial<IItems[]>>(state => state.basket);
  const { name, img, price, id, isClicked, count } = props;
  const filteredBasketItems = basketItems.filter((item) => item?.id == id)[0];

  const addBasket = (value: IItems) => ({
    type: 'ADD_BASKET', value
  })

  const setIsClicked = (id: number, value: boolean) => ({
    type: 'SET_CLICKED', id, value
  })

  const setCount = (id: number, value: number) => ({
    type: 'SET_COUNT', id, value
  })

  const plusOne = (count: number | undefined) => {
    if (!count) return 1;
    return count + 1
  }

  const minusOne = (count: number | undefined) => {
    if (!count) return 1;
    return count - 1
  }


  return (
    <Box as={'div'} display='flex' flexDirection='column' justifyContent='center' alignItems='center' boxShadow='md' py={10} px={5} borderRadius='25' bg='white' >
      <Image objectFit='contain' boxSize='400px' src={img} alt='Book img' />
        <Text fontSize='md' textAlign='center' mr={2}>{ name }</Text>
        { !isClicked && !filteredBasketItems?.count && <Button colorScheme='teal' w={200} size='sm' px={1} onClick={() => {dispatch(addBasket({ ...props, count: 1})); dispatch(setIsClicked(id, true))}}>
          Добавить в Корзину
        </Button>}
        { isClicked && <Button colorScheme='teal' size='sm' px={1}>
          <Flex justifyContent='center' alignItems='center'>
            <Box onClick={() => {dispatch(setCount(id, minusOne(filteredBasketItems?.count)))}}>
              <Icon as={MinusIcon} w={4} h={4} mr={4} />
            </Box>
             <Box mr={4}>{ filteredBasketItems?.count }</Box>
             <Box onClick={() => {dispatch(setCount(id, plusOne(filteredBasketItems?.count)))}}>
              <Icon as={AddIcon} w={4} h={4} />
             </Box>
          </Flex>
        </Button>}
      <Text fontSize='md' textAlign='center' mt={2}>{ price }</Text>
    </Box>
  )
}