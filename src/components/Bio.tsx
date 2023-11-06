import { Box, Flex, Heading, Image, Text } from "@chakra-ui/react";

export function Bio() {
  return (
    <Flex
      flexDirection={["column", null, null, "row"]}
      w='100%'
      px={5}
      py={3}
      my={16}
    >
      {/* @ts-expect-error  - cuz */}
      <Box boxSize='lg' h='auto' align='center' width='100%'>
        <Image src='./images/handsomefella.png' maxW='400px' />
      </Box>
      <Box color='white' px={12} maxW={["100%", null, null, "70%"]}>
        <Heading>Howdy!</Heading>
        <Box py={5}>
          <Text mb={3}>
            My name is Brady. I'm a Fargo, ND based software engineer looking to
            help you with your user experience needs.
          </Text>
          <Text mb={3}>
            With 8 years of experience under my belt, I've spent the last 4
            years building and maintaining React and Next JS projects using
            Typescript and Chakra UI, while also working with REST APIs for CRUD
            operations. My passion for creating clean, efficient, and
            user-friendly web applications and user interfaces is unmatched, and
            I'm always excited to take on new challenges! Whether it's bringing
            a new idea to life or improving an existing project, I'm committed
            to delivering high-quality results that exceed expectations.
          </Text>
          <Text mb={3}>
            When I'm not coding, you can find me at a concert or playing
            guitar/bass in my bands.
          </Text>
        </Box>
      </Box>
    </Flex>
  );
}
