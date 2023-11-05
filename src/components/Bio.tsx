import {
	Box,
	Code,
	Flex,
	Heading,
	Image,
	Spacer,
	Text,
} from "@chakra-ui/react";

export function Bio() {
	return (
		<>
			<Flex flexDirection={["column", null, "row"]} w="100vw" px={5} py={3}>
				<Box boxSize="lg">
					<Image src="https://bit.ly/dan-abramov" />
				</Box>
				<Spacer />
				<Box textAlign="center" color="white" px={3} maxW="70%">
					<Heading>Howdy!</Heading>
					<Box py={5}>
						<Text mb={3}>
							My name is Brady. I'm a Fargo, ND based software engineer looking
							to help you with your user experience needs.
						</Text>

						<Text>
							Lorem ipsum dolor sit, amet consectetur adipisicing elit. Autem a
							distinctio facere officia sunt voluptatem, libero consectetur.
							Iure, quia eligendi porro corrupti deleniti at pariatur, ipsum hic
							nihil, corporis inventore. Lorem ipsum dolor sit, amet consectetur
							adipisicing elit. Autem a distinctio facere officia sunt
							voluptatem, libero consectetur. Iure, quia eligendi porro corrupti
							deleniti at pariatur, ipsum hic nihil, corporis inventore.
						</Text>
						<Text>
							Lorem ipsum dolor sit, amet consectetur adipisicing elit. Autem a
							distinctio facere officia sunt voluptatem, libero consectetur.
							Iure, quia eligendi porro corrupti deleniti at pariatur, ipsum hic
							nihil, corporis inventore.
						</Text>
					</Box>
				</Box>
			</Flex>
			<Flex
				flexDirection={["column", null, "row"]}
				bg="black"
				px={8}
				py={8}
				width="100vw"
			>
				<Box width="30%" color="white">
					<Text mb={2}>Using the power of Javascript to save the world!</Text>
					<Text mb={2}>One solution at a time</Text>
					<Text>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis
						velit obcaecati labore animi quia doloribus, voluptates cupiditate
						provident maxime officia voluptas ullam ipsam atque quibusdam
						tempore, sed, aut non libero.
					</Text>
				</Box>
				<Box width="70%" lineHeight={8} pl={8}>
					<Text color="green.300">
						export function YourUISolution({"{ yourNeeds, yourDesiredState }"}
						)&nbsp;{"{"}
					</Text>
					<Text color="pink.300" ml={4}>
						const [idea, setIdea] = React.useState()
					</Text>
					<Text color="blue.300" ml={4}>
						yourNeeds.map((need) ={">"}&nbsp;{"{"}
					</Text>
					<Text color="yellow.300" ml={8}>
						setIdea(yourDesiredState)
					</Text>
				</Box>
			</Flex>
		</>
	);
}
