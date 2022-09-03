import PageWrapper from './wrapper';
import Autocomplete from '../components/autocomplete';
import countries from '../data/countries';
import { Container } from '@chakra-ui/react';

const SearchingPage = () => {
	return (
		<Container>
			<Autocomplete countries={countries} />
		</Container>
	);
};

export default SearchingPage;
