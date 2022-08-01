import { useEffect, useState } from 'react';
import {
	SimpleGrid,
} from '@chakra-ui/react';
import Item from './item';
import { useQuery } from "react-query";

function Itemlist() {
	const [items, setItems] = useState([]);

	async function getData() {
		const results = await fetch(`http://localhost:3001/allitems`);
		await results.json().then(data => setItems(data));
	}

	useEffect(() => {
		getData();
	}, []);

	const { isLoading, isError, data, error } = useQuery([items], getData);

	if (isLoading) return <p>Loading...</p>;

	return (
		<>
			<SimpleGrid data-cy='item-list' columns={{ base: 1, md: 3 }} spacing={{ base: 5, lg: 8 }} mt="10">
				{items && items?.map((item) => {
					return <Item key={item.id} data={item} />;
				})
				}
			</SimpleGrid>
		</>
	);
}

export default Itemlist;