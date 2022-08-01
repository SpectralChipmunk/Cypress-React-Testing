import PageWrapper from './wrapper';
import Itemlist from '../components/itemlist';
import { Box } from '@chakra-ui/react';

const HomePage = () => {
	return (
		<PageWrapper>
			<Box
				my='5'
				fontWeight='semibold'
				as='h1'
				lineHeight='tight'
				textAlign={'left'}
				fontSize={'3xl'}
				data-cy='page-title'
			>
				You buy we deliver
			</Box>
			<Itemlist />
		</PageWrapper>
	);
};

export default HomePage;
