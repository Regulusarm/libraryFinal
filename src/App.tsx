import {
  ChakraProvider,
  theme,
} from "@chakra-ui/react"
import Header from "./components/header/header"
import Main from "./components/main/main"
import Content from "./components/content/content"
import { Route, Routes } from "react-router-dom"
import Basket from "./components/basket/basket"

export const App = () => (
    <ChakraProvider theme={theme}>
      <Header />
      <Routes>
        <Route path="/home" element={ 
          <Main>
           <Content />
          </Main>
        } />
        <Route path="/basket"  element={ <Main><Basket /></Main>} />
      </Routes>
    </ChakraProvider>
)
