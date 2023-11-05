import { Box } from "@chakra-ui/react";
import { Header } from "./components/Header";
import { Bio } from "./components/Bio";
import { Contact } from "./components/Contact";

function App() {
	return (
		<Box w="100vw" h="100vh" bgColor="gray.700">
			<Header />
			<Bio />
			<Contact />
		</Box>
	);
}

export default App;
