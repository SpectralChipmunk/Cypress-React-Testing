import { useState, useEffect } from 'react';
import {
	SimpleGrid,
} from '@chakra-ui/react';
import allitems from '../data/items';
import Item from './item';
import { fakeAPIService } from '../utils/index';

function Itemlist() {
	const [items, setItems] = useState([]);

	const getData = () => { setItems(allitems) }

	useEffect(() => {
		fakeAPIService(2000, getData);
	}, []);

	return (
		<SimpleGrid columns={{ base: 1, md: 3 }} spacing={{ base: 5, lg: 8 }} mt="10">
			{items && items.map((item) => {
				return <Item key={item.id} data={item} />;
			})
			}
			{items.length === 0 && <div>Loading...</div>}
		</SimpleGrid>
	);
}

export default Itemlist;