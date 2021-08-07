
import React from 'react';
import { Flex, VStack, Spacer, useColorMode, IconButton } from "@chakra-ui/react";
import { FaSun, FaMoon} from 'react-icons/fa'
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Project from "./components/Project";
import Logo from "./components/Logo";
import Footer from "./components/Footer";

function App() {
  const { colorMode, toggleColorMode } = useColorMode();
  const isDark = colorMode === "dark";
  return (
    <VStack p={5}>
      <Flex w="100%">
        <Logo w="100px"></Logo>

        <Spacer></Spacer>
        <IconButton ml={8} icon={isDark ? <FaSun /> : <FaMoon />} isRound='true' onClick={toggleColorMode}></IconButton>
      </Flex>
      <Hero></Hero>
      <Skills></Skills>
      <Project></Project>
      <Footer></Footer>
    </VStack>
  );
}

export default App;
