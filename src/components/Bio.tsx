import { Box, Flex, Heading, Image, Spacer, Text } from "@chakra-ui/react";

export function Bio() {
  return (
    <Flex
      flexDirection={["column", null, "row"]}
      w='100%'
      px={5}
      py={3}
      my={16}
    >
      <Box boxSize='lg' h={0}>
        <Image src='./images/handsomefella.png' />
      </Box>
      <Spacer />
      <Box textAlign='center' color='white' px={12} maxW='70%'>
        <Heading>Howdy!</Heading>
        <Box py={5}>
          <Text mb={3}>
            My name is Brady. I'm a Fargo, ND based software engineer looking to
            help you with your user experience needs.
          </Text>

          <Text>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Autem a
            distinctio facere officia sunt voluptatem, libero consectetur. Iure,
            quia eligendi porro corrupti deleniti at pariatur, ipsum hic nihil,
            corporis inventore. Lorem ipsum dolor sit, amet consectetur
            adipisicing elit. Autem a distinctio facere officia sunt voluptatem,
            libero consectetur. Iure, quia eligendi porro corrupti deleniti at
            pariatur, ipsum hic nihil, corporis inventore.
          </Text>
          <Text>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Autem a
            distinctio facere officia sunt voluptatem, libero consectetur. Iure,
            quia eligendi porro corrupti deleniti at pariatur, ipsum hic nihil,
            corporis inventore.
          </Text>
        </Box>
      </Box>
    </Flex>
  );
}
