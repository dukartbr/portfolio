import { Box, Flex, Text } from "@chakra-ui/react";

interface CodeLine {
	color: string;
	code: string;
	margin: number;
}

const codeLines: CodeLine[] = [
	{
		code: `import React from "react"`,
		color: "purple",
		margin: 0,
	},
	{
		code: `import { AwesomeUILibrary, CustomComponent, creativeIdeas } from "brady"`,
		color: "red",
		margin: 0,
	},
	{
		code: `export function YourUISolution({ yourNeeds, yourDesiredState}) {`,
		color: "green",
		margin: 0,
	},
	{
		code: "const [solutions, setSolutions] = React.useState([])",
		color: "pink",
		margin: 4,
	},
	{
		code: "setSolutions(yourNeeds.map((need) => creativeIdeas(need, yourDesiredState))",
		color: "yellow",
		margin: 4,
	},
	{
		code: "return (",
		color: "orange",
		margin: 4,
	},
	{
		code: "<AwesomeUILibrary>",
		color: "teal",
		margin: 8,
	},
	{
		code: "{solutions.map((solution, index) => (",
		color: "purple",
		margin: 12,
	},
	{
		code: "<CustomComponent key={index} solution={solution} />",
		color: "yellow",
		margin: 16,
	},
	{
		code: ")}",
		color: "purple",
		margin: 12,
	},
	{
		code: "</AwesomeUILibrary>",
		color: "teal",
		margin: 8,
	},
	{
		code: ")",
		color: "orange",
		margin: 4,
	},
	{
		code: "}",
		color: "green",
		margin: 0,
	},
];

export function Tech() {
	return (
		<Flex
			flexDirection={["column", null, null, "row"]}
			bg="black"
			px={8}
			py={8}
			width="100%"
			borderRadius={8}
		>
			<Box width={["100%", null, null, "30%"]} color="white" mb={5}>
				<Text mb={2}>Using the power of Javascript to save the world!</Text>
				<Text mb={2}>One solution at a time</Text>
				<Text>
					No matter how small or big your UI/UX needs are, I'm here to help! I
					love utilizing React and Typescript to create beautiful, seamless user
					interfaces. From prototyping in Figma, to launching into production, I
					have mastery in all aspects of the SDLC and cant wait to bring my
					talents to your team!
				</Text>
			</Box>
			<Box width={["100%", null, null, "70%"]} lineHeight={8} pl={8}>
				{codeLines.map(({ code, color, margin }) => {
					return (
						<Text key={code} color={`${color}.300`} ml={margin} noOfLines={1}>
							{code}
						</Text>
					);
				})}
			</Box>
		</Flex>
	);
}
