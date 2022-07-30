import {
	Box,
	Flex,
	Button,
	useColorModeValue,
	Stack,
	Badge
} from '@chakra-ui/react';
import { Link } from "react-router-dom";

const CartIcon = () => {
	return (
		<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" width="20" height="20">
			<path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
		</svg>
	)
}

const CartBadge = () => {
	return (
		<>
			<Badge mr='2' colorScheme='red'>
				0
			</Badge>
		</>
	)
}

export default function Nav() {
	return (
		<>
			<Box bg={useColorModeValue('gray.100', 'gray.900')} px={4}>
				<Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
					<Box fontFamily="monospace" fontWeight="bold" fontSize="2xl">					<Link to="/">My Shop</Link></Box>
					<Flex alignItems={'center'}>
						<Stack direction={'row'} spacing={7}>
							<Link to="/cart">
								<Button>
									<CartBadge margin="ms-3" />
									<CartIcon />
								</Button>
							</Link>
						</Stack>
					</Flex>
				</Flex>
			</Box>
		</>
	);
}