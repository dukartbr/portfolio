import {
  Box,
  Button,
  Flex,
  Spacer,
  Text,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
} from "@chakra-ui/react";

export function Header() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Flex w='100%' bg='blue.300' py={2} px={8}>
        <Box lineHeight='1.25'>
          <Text fontSize='xl' fontWeight='bold'>
            Brady Dukart
          </Text>
          <Text fontSize='md' fontStyle='italic'>
            React Software Engineer
          </Text>
        </Box>
        <Spacer />
        <Button onClick={onOpen}>Connect</Button>
      </Flex>
      <ContactModal isOpen={isOpen} onClose={onClose} />
    </>
  );
}

function ContactModal({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Contact</ModalHeader>
        <ModalCloseButton />
        <ModalBody>Howdy!</ModalBody>
      </ModalContent>
    </Modal>
  );
}
