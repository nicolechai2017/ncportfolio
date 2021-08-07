import React from 'react';
import { Box,Center,SimpleGrid,useColorModeValue,Heading, Text, Stack, Image } from '@chakra-ui/react';


function ProjCard(props: ProjCardProps) {
    const {image, type, title, description} = props;
    return (
      <Center py={12}>
        <Box p={6} maxW='330px' w='full' bg={useColorModeValue('white', 'gray.800')} boxShadow='2xl' rounded='lg' pos='relative' zIndex={1}>
          <Box rounded='lg' h='230px' mt={-12} pos='relative' 
              _after={{ transition: 'all .3s ease', content: '""', w: 'full', h: 'full', pos: 'absolute', top: 5, left: 0, backgroundImage: `url(${image})`, filter: 'blur(15px)', zIndex: -1 }}>
            <Image rounded='lg' h='230px' w='282px' objectFit='cover' src={image}/>
          </Box>
          <Stack pt={10} align='center'>
            <Text color='gray.500' fontSize='sm' textTransform='uppercase'>
              {type}
            </Text>
            <Heading fontSize='2xl' fontFamily='body' color='gray.700' fontWeight='semibold'>
                {title}
            </Heading>
            <Stack direction='row' textAlign='center'>
              <Text fontWeight='light' fontSize='sm'>
                 {description}
              </Text>
            </Stack>
          </Stack>
        </Box>
      </Center>
    );
  }


  
  export default function Projects() {
    return (
      <Box maxW='7xl' mx='auto' pt={5} px={{ base: 2, sm: 12, md: 17 }}>
        <Heading textAlign='center' py={10} fontWeight='bold' color='gray.700' size='lg'>
              My Selected Works
        </Heading>
        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={{ base: 5, lg: 8 }}>
          <ProjCard 
          image= 'https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80'
          type='UX/UI Design'
          title='Website Redesign'
          description='Reimagined the user experience of the website.' />
          <ProjCard 
          image= 'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1055&q=80'
          type='UX/UI Design'
          title='Dashboard' 
          description='Created an intuitive dashboard to simplify the experience of the users.' />
          <ProjCard 
          image= 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1352&q=80'
          type='Frontend Development'
          title='Food Delivery Website' 
          description='Coded out the front end for a food delivery website.' />
        </SimpleGrid>
      </Box>
    );
  }