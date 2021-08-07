import React from 'react'
import { Icon, useMediaQuery, Box, Flex, Heading, Text, useColorModeValue } from '@chakra-ui/react';
import { CgBrowser, CgCode, CgPen } from 'react-icons/cg'



function Profile() {

    const [isNotSmallerScreen] = useMediaQuery('(min-width:600px)');


    return (
        <Flex direction={isNotSmallerScreen ? 'row' : 'column'} w='100%'>
            
            <Box alignSelf='center' px='20' y='16'>
                <Heading fontWeight='bold' color='gray.700' size='lg' pr='20'>
                    What I Can Do
                </Heading>
            </Box>
            <Box alignSelf='center' px='14' py='16'>
                <Flex direction={isNotSmallerScreen ? 'row' : 'column'} mt={4} >
                    
                    <Flex rounded="xl" direction="column" mt={4} 
                        bg={useColorModeValue('white', 'gray.800')} boxShadow={'2xl'} h='30vh' w='30vh' justify='flex-end' _hover={{ bg: 'purple.50' }}>
                        <Icon color='gray.700' p='4' as={CgBrowser} w='16' h='16' />
                        <Text color='gray.700' p='4' fontSize='xl' fontWeight='semibold'>
                            UX/UI <br/> 
                            Design
                        </Text>
                    </Flex>
                    <Flex rounded="xl" direction="column" mt={4} ml={isNotSmallerScreen ? 4 : 0}
                        bg={useColorModeValue('white', 'gray.800')} boxShadow={'2xl'} h='30vh' w='30vh' justify='flex-end' _hover={{ bg: 'purple.50' }}>
                        <Icon color='gray.700' p='4' as={CgCode} w='16' h='16' />
                        <Text color='gray.700' p='4' fontSize='xl' fontWeight='semibold'>
                            Frontend <br /> 
                            Development
                        </Text>
                    </Flex>
                    <Flex rounded="xl" direction="column" mt={4} ml={isNotSmallerScreen ? 4 : 0}
                        bg={useColorModeValue('white', 'gray.800')} boxShadow={'2xl'} h='30vh' w='30vh' justify='flex-end' _hover={{ bg: 'purple.50' }}>
                        <Icon color='gray.700' p='4' as={CgPen} w='16' h='16' />
                        <Text color='gray.700' p='4' fontSize='xl' fontWeight='semibold'>
                            Graphic <br/> 
                            Design
                        </Text>
                    </Flex>
                </Flex>

            </Box>
        </Flex>
    )
}

export default Profile