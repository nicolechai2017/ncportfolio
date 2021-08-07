import React from 'react'
import { ButtonGroup, IconButton } from '@chakra-ui/react'
import { FaGithub, FaLinkedin } from 'react-icons/fa'

export const SocialMediaLinks = (props) => (
  <ButtonGroup variant='ghost' color='gray.600' {...props}>
    <IconButton as='linkedin' onClick={() => window.open('https://www.linkedin.com/in/nicolecyj/')} aria-label='LinkedIn' rounded='full' icon={<FaLinkedin fontSize='20px' />} />
    <IconButton as='github' onClick={() => window.open('https://github.com/nicolechai2017')} aria-label='GitHub' rounded='full' icon={<FaGithub fontSize='20px' />} />
  </ButtonGroup>
)
