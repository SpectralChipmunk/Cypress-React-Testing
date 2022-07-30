export const useFetch = () => {
	const getItems = async () =>
		(await fetch('http://localhost:3001/allitems')).json();
	const { data, isLoading, isError } = useQuery('users', getItems);
	return { items: data, isLoading, isError };
}