import React, { useState } from 'react';
import {
  Box,
  Heading,
  Flex,
  Image,
  Text,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  ModalCloseButton,
  ModalFooter,
  Button,
} from '@chakra-ui/react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import ProjectCard from '../Components/CertificateCard';

// Import images
import certificate1Image from '../Images/cisco.png';
import certificate2Image from '../Images/mz900.png';
import certificate3Image from '../Images/OCIF2023CA.jpg'

const Certificates = () => {
  const [selectedCertificate, setSelectedCertificate] = useState(null);

  const handleCertificateClick = (certificate) => {
    setSelectedCertificate(certificate);
  };

  const handleCloseModal = () => {
    setSelectedCertificate(null);
  };

  const settings = {
    slidesToShow: 3, // Show 3 cards at a time
    slidesToScroll: 1,
    // Disable vertical scrolling and swiping
    vertical: false,
    verticalSwiping: false,
    // Prevent horizontal scrolling (make it unscollable)
    swipeToSlide: false,
    arrows: false, // Hide navigation arrows for a cleaner look
  };

  const certificates = [
    {
      id: 1,
      title: 'Certificate 1',
      image: certificate1Image,
      description: 'Microsoft Azure AZ900',
    },
    {
      id: 2,
      title: 'Certificate 2',
      image: certificate2Image,
      description: 'Introduction to Cybersecurity',
    },
    {
      id: 3,
      title: 'Certificate 3',
      image: certificate3Image,
      description: 'Oracle Cloud Foundation Associate',
    },
    // Add more certificates if needed
  ];

  return (
    <Box id="projects" overflowX="auto" maxHeight="550px">
      <Heading textAlign="center">Certificates</Heading>
      <Slider {...settings}>
        {certificates.map((certificate, i) => (
          <Box key={i} mx="10px"> {/* Add margin to each ProjectCard */}
            <ProjectCard {...certificate} onClick={() => handleCertificateClick(certificate)} />
          </Box>
        ))}
      </Slider>

      {/* Modal for displaying certificate image */}
      <Modal isOpen={selectedCertificate !== null} onClose={handleCloseModal}>
        <ModalOverlay />
        <ModalContent>
          <ModalCloseButton />
          <ModalBody>
            {selectedCertificate && (
              <Image src={selectedCertificate.image} alt={selectedCertificate.title} />
            )}
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="blue" onClick={handleCloseModal}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  );
};

export default Certificates;
