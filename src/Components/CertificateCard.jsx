import React from 'react';
import {
  Box,
  Button,
  Flex,
  Heading,
  Image,
  Text,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalCloseButton,
} from '@chakra-ui/react';

const CertificateCard = ({
  title,
  image,
  description,
  showSeparator = true,
  separatorWidth = 2,
  separatorColor = 'gray.300',
  onEnlarge,
  onExpand,
}) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleEnlarge = () => {
    // Implement your intended enlargement behavior here
    // (e.g., open a modal, zoom using CSS transform, etc.)
    if (onEnlarge) {
      onEnlarge();
    } else {
      // Fallback behavior if onEnlarge is not provided
      onOpen();
    }
  };

  return (
    <>
      {/* Card Container with Margin */}
      <Flex
        flexDirection="column"
        className='CertificateCard'
        borderWidth="1px"
        borderRadius="md"
        overflow="hidden"
        boxShadow="md"
        marginX="2"
        marginBottom="4" // Adjust margin values as needed
      >
        {showSeparator && (
          <Box
            width={separatorWidth}
            height="100%"
            bg={separatorColor}
            mx="auto"
            mb={2}
            mt={-2}
          />
        )}

        {/* Card Image with Enlargement on Click */}
        <Image src={image} alt={title} h="200px" objectFit="cover" onClick={handleEnlarge} cursor="pointer" />

        {/* Card Content */}
        <Box p="4">
          <Heading size="md" mb="2">{title}</Heading>
          <Text mt="2" mb="4">{description}</Text>
          {onExpand && <Button colorScheme="blue" onClick={onExpand}>View Details</Button>} {/* Additional details button (optional) */}
        </Box>
      </Flex>
      
      {/* Enlargement Modal (if onEnlarge is not provided) */}
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          {/* Implement your enlarged card content here */}
          <Image src={image} alt={title} objectFit="contain" />
          <Heading size="md" my={4}>{title}</Heading>
          <Text>{description}</Text>
          <ModalCloseButton />
        </ModalContent>
      </Modal>
    </>
  );
};

export default CertificateCard;
