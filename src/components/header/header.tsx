import { Box, Heading, LinkBox, LinkOverlay, Text, Flex, Button, Icon} from '@chakra-ui/react';
import {SyntheticEvent, useState} from 'react';
import { MdDelete } from 'react-icons/md'
import { Link } from 'react-router-dom';
import './header.css'

export default function Header() {
  const [menu, setMenu] = useState({home: "Home", books: "Books", store: "Store", aboutUs: "About Us",  }); 

   return (
  <Flex gap={5} align="center" justify="center">
    <LinkBox as='article' maxW='sm' p='5' rounded='md'>
        <Heading size='md' my='2'>
        <Link to='/home'>
             <Text> { menu.home } </Text>
             </Link>
        </Heading>
    </LinkBox>
    <LinkBox as='article' maxW='sm' p='5' rounded='md'>
        <Heading size='md' my='2'>
            <LinkOverlay onClick={(e: SyntheticEvent) => e.preventDefault()} href='store'>
             <Text> { menu.store } </Text>
            </LinkOverlay>
        </Heading>
    </LinkBox>
    <LinkBox as='article' maxW='sm' p='5' rounded='md'>
        <Heading size='md' my='2'>
            <LinkOverlay onClick={(e: SyntheticEvent) => e.preventDefault()} href='books'>
             <Text> { menu.books } </Text>
            </LinkOverlay>
        </Heading>
    </LinkBox>
    <LinkBox as='article' maxW='sm' p='5' rounded='md'>
        <Heading size='md' my='2'>
            <LinkOverlay onClick={(e: SyntheticEvent) => e.preventDefault()} href='about-us'>
             <Text> { menu.aboutUs } </Text>
            </LinkOverlay>
        </Heading>
     </LinkBox>
     <LinkBox as='article' maxW='sm' p='5' rounded='md'>
      <Link to='/basket'>
        <Button ><Icon as={MdDelete} /></Button> 
      </Link>
     </LinkBox>
  </Flex>
   
 )
  }
