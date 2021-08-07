import React from 'react'
import { Box, Stack, Text } from '@chakra-ui/react'
import Logo from './Logo'
import { SocialMediaLinks } from './SocialMediaLinks'


function Footer() { 
    return (
  <Box as='footer' mx='auto' w='100%' py='12' px={{ base: '4', md: '8' }}>
    <Stack>
      <Stack direction='row' spacing='4' align='center' justify='space-between'>
        <Logo />
        <SocialMediaLinks />
      </Stack>
        <Text fontSize='sm' alignSelf={{ base: 'center', sm: 'start',}}>
            &copy; {new Date().getFullYear()} Nicole Chai. All rights reserved.
        </Text>
    </Stack>
  </Box>
)
}

export default Footer