import { Image, Divider, HStack, Stack, Flex, Box, Text, useColorMode, useMediaQuery } from '@chakra-ui/react';
import React from 'react';
import profile from '../profile.png'
import { SocialMediaLinks } from './SocialMediaLinks'

function Hero() {

    const { colorMode } = useColorMode();
    const isDark = colorMode === 'dark';
    const [isNotSmallerScreen] = useMediaQuery('(min-width:600px)');

    return (
        <Stack>
            <Flex direction={isNotSmallerScreen ? 'row' : 'column'}
                spacing='200px' p={isNotSmallerScreen ? '20' : '0'}
                alignItems='center'>
                <Box mt={isNotSmallerScreen ? '0' : '16'} align='center'>
                    <Image alignSelf='center' mt={isNotSmallerScreen ? '0' : '12'}
                    mb={isNotSmallerScreen ? '0' : '12'} borderRadius='full'
                    backgroundColor='transparent' boxShadow='lg'
                    boxSize= '200px' src={profile} />
                    <Text fontSize='2xl' fontWeight='semibold' pt='20px' >Hello, I am</Text>
                    <Text fontSize='5xl' fontWeight='bold' bgGradient='linear(to-r, pink.400, purple.500, blue.600)' bgClip='text' >Nicole Chai</Text>
                    <Text color={isDark ? 'gray.200' : 'gray.500'}>I'm an aspiring Product Designer and Developer</Text>
                    <Divider mt={12}/>
                    <HStack align='center' justify='center' spacing='20px' mt={4}>
                        <SocialMediaLinks />
                    </HStack>
                    

                </Box>
                
            </Flex>

        </Stack>
    
    )
}

export default Hero
