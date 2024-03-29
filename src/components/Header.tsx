import {
  Box,
  Button,
  Flex,
  Icon,
  Spacer,
  Text,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Link,
} from "@chakra-ui/react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa6";

export function Header() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Flex w="100%" bg="blue.300" py={2} px={8}>
        <Box lineHeight="1.25">
          <Text fontSize="xl" fontWeight="bold">
            Brady Dukart
          </Text>
          <Text fontSize="md" fontStyle="italic">
            Full Stack Engineer
          </Text>
        </Box>
        <Spacer />
        <Button onClick={onOpen} colorScheme="yellow">
          Connect
        </Button>
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
        <ModalHeader>Let's Work Together!</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Text>
            You can check out my work{" "}
            <Link href="https://github.com/dukartbr">here</Link> or reach me at{" "}
            <Link href="mailto:dukartbrady@gmail.com">
              dukartbrady@gmail.com
            </Link>
            . I look forward to working with you!
          </Text>

          <Flex py={8} width="100%" px={12}>
            <Link href="mailto:dukartbrady@gmail.com">
              <Icon as={FaEnvelope} fontSize="50px" />
            </Link>
            <Spacer />
            <Link href="https://www.linkedin.com/in/bradydukart/">
              <Icon as={FaLinkedin} fontSize="50px" />
            </Link>
            <Spacer />
            <Link href="https://github.com/dukartbr">
              <Icon as={FaGithub} fontSize="50px" />
            </Link>
          </Flex>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
}
