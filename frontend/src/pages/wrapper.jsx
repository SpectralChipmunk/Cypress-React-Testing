import Navbar from '../components/navbar';
import { Box, Container } from '@chakra-ui/react'

const PageWrapper = ({ children }) => {
	return (
		<Container maxW='960px'>
			<Navbar />
			<Box
				my='5'
				fontWeight='semibold'
				as='h1'
				lineHeight='tight'
				textAlign={'left'}
				fontSize={'3xl'}
			>
				You buy we deliver
			</Box>
			<div>{children}</div>
		</Container>
	);
};

export default PageWrapper;
