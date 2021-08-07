import React from "react";
import { Box, Text } from "@chakra-ui/react";

export default function Logo(props) {
  return (
    <Box {...props}>
      <Text fontSize='lg' fontWeight='bold' bgGradient='linear(to-r, pink.400, purple.500, blue.600)' bgClip='text'>
        Nicole Chai
      </Text>
    </Box>
  );
}