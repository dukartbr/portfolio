import { Box, Container } from "@chakra-ui/react";
import { Header } from "./components/Header";
import { Bio } from "./components/Bio";
import { Portfolio } from "./components/Portfolio";
import { Tech } from "./components/Tech";

function App() {
	return (
		<Box position="fixed" bgColor="gray.700" h="100vh" overflow="scroll">
			<Header />
			<Box w="100vw" pb={8}>
				<Container maxW="container.lg">
					<Bio />
					<Portfolio />
					<Tech />
				</Container>
			</Box>
		</Box>
	);
}

export default App;
