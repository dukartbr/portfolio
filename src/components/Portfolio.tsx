import {
	Accordion,
	AccordionItem,
	AccordionButton,
	AccordionPanel,
	Badge,
	Box,
	Button,
	Flex,
	Heading,
	Image,
	Link,
	Spacer,
	Text,
} from "@chakra-ui/react";
import { FaAngleDown } from "react-icons/fa6";
import { FaAngleUp } from "react-icons/fa6";

interface PortfolioItem {
	title: string;
	url: string;
	description: string;
	image: string;
	note?: string;
	containInWhite?: boolean;
}

const portfolioItems: PortfolioItem[] = [
	{
		title: "React Task Tracker",
		url: "https://reacttasktracker.com",
		description:
			"A task tracking app that uses local storage to store tasks. You can use it to create and manage your tasks with complete CRUD operations! I'm hoping to release this as a completely free, open-source, app that everyone can use and contribute to! ",
		image: "reacttasktracker.png",
		containInWhite: true,
	},
	{
		title: "Reactedex",
		url: "https://reactedex.com/",
		description:
			"A Pokédex built on React using the PokéAPI. This allows you to search through the first four generations of Pokémon (the only ones that matter lets be real), and build your party of up to 5 Pokémon. Your party is stored in local storage",
		image: "reactedex.png",
		note: "This is a desktop only app",
	},
	{
		title: "Wheel-Tech By Cars",
		url: "https://wheeltechbycars.com/",
		description:
			"My dad needed a landing page for his wheel refinishing business. This is a simple HTML/CSS site with a dash of customization and JS, I was happy to create something like this for my dad's business and would love to help you create one, as simple or complex as you want! Check it out!",
		image: "wheeltechbycars.png",
	},
	{
		title: "Red River AMBUCS",
		url: "https://redriverambucs.org",
		description:
			"I was contacted by the Red River chapter of the national AMBUCS organization to make a site to help get word out about their amazing work and service. They aim to provide accessible bikes to everyone regardless of ability. This was a great volunteer project, and I was honored to help with such a noble cause.",
		image: "redriverambucs.png",
	},
];

export function Portfolio() {
	return (
		<Box width="100%" mb={12}>
			<Box color="white" mb={8} textAlign="center">
				<Heading size="lg" mb={1}>
					Check out some of my work!
				</Heading>
				<Text>
					These are some passion projects done on the side, to keep me busy in
					the down time! Feel free to check them out!
				</Text>
			</Box>
			<Accordion width="100%" allowToggle>
				{portfolioItems.map(
					({
						title,
						url,
						description,
						image,
						note,
						containInWhite,
					}: PortfolioItem) => (
						<AccordionItem key={title}>
							{({ isExpanded }) => (
								<>
									<AccordionButton>
										<Flex width="100%" color="white" fontSize="xl">
											<Text textAlign="left" fontWeight="bold">
												{title}
											</Text>
											<Spacer />
											{isExpanded ? <FaAngleUp /> : <FaAngleDown />}
										</Flex>
									</AccordionButton>
									<AccordionPanel pb={4}>
										<Flex
											width="100%"
											direction={["column", null, null, "row"]}
										>
											<Flex
												direction="column"
												width={["100%", null, null, "50%"]}
												px={3}
											>
												<Text color="white" my={3}>
													{description}
												</Text>
												<Spacer />
												<Flex direction="column" align="center">
													<Link href={url} target="_blank">
														<Button maxW="200px" mb={4}>
															Check It Out
														</Button>
													</Link>

													{note && (
														<Badge colorScheme="orange" variant="solid" mb={3}>
															{note}
														</Badge>
													)}
												</Flex>
											</Flex>
											<Box
												width={["100%", null, null, "50%"]}
												p={3}
												bgColor={containInWhite ? "white" : undefined}
											>
												<Image src={`./images/${image}`} />
											</Box>
										</Flex>
									</AccordionPanel>
								</>
							)}
						</AccordionItem>
					)
				)}
			</Accordion>
		</Box>
	);
}
