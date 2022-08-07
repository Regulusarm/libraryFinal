import { Box, Input, Text } from '@chakra-ui/react';
import { SyntheticEvent, useState } from 'react';
import './search.css'

export default function Search(props: { onChange: (value: string) => void }) {
 return(
  <Box>
    <Input placeholder='Поиск' size='md' onChange={(e: React.FormEvent<HTMLInputElement>) => props.onChange(e.currentTarget.value)} />
  </Box> ) 
}
