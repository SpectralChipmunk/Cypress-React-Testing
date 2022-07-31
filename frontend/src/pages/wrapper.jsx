import Navbar from '../components/navbar';
import { Box, Container } from '@chakra-ui/react'

const PageWrapper = ({ children }) => {
	return (
		<Container maxW='960px'>
			<Navbar />
			<div>{children}</div>
		</Container>
	);
};

export default PageWrapper;
