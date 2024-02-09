import React from 'react';
import { Badge, Box, Button, Flex, Heading, HStack, Link, Text } from '@chakra-ui/react';
import { BiLinkExternal } from 'react-icons/bi';
import { VscGithub } from 'react-icons/vsc';

const ProjectCard = ({ title, type, image, description, techStack, github, liveDemo }) => {
  return (
    <Flex flexDirection="column" className='ProjectCard' borderWidth="1px" borderRadius="md" overflow="hidden" boxShadow="md">
      <Box className='cardImg' backgroundImage={image} h="200px" bgSize="cover" bgPos="center" />
      <Box p="4">
        <Flex justifyContent="space-between" alignItems="center" mb="2">
          <Heading size="md" mr="2">{title}</Heading>
          <Badge variant='outline' colorScheme='green'>{type}</Badge>
        </Flex>
        <Text fontWeight="bold">Tech Stack: {techStack.join(", ")}</Text>
        <Text mt="2" mb="4">{description}</Text>
        <HStack spacing="4">
          <Link href={liveDemo} target="_blank">
            <Button colorScheme="blue" leftIcon={<BiLinkExternal />}>Live Demo</Button>
          </Link>
          {github && (
            <Link href={github} target="_blank">
              <Button colorScheme="teal" leftIcon={<VscGithub />}>Code Base</Button>
            </Link>
          )}
        </HStack>
      </Box>
    </Flex>
  );
}

export default ProjectCard;
