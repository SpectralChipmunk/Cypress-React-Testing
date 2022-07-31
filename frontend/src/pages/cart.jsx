import { useContext } from "react";
import CartContext from "../context/CartContext";
import PageWrapper from './wrapper';
import { Box, Image, IconButton } from '@chakra-ui/react';
import { CloseIcon } from '@chakra-ui/icons';


const CartList = ({ image, name, price, id, removeItem }) => {
	return (
		<>
			<Box display='flex' alignItems='center' justifyContent='space-between' mb="10">
				<Box display='flex' alignItems='center'>
					<Box mr="5">
						<Image height="150px" width="150px" src={image} alt={name} />
					</Box>
					<Box>
						<Box
							mt='1'
							fontWeight='semibold'
							fontSize='3xl'
						>
							{name}
						</Box>
						<Box as='span' color='gray.600' fontSize='xl'>
							${price}
						</Box>
					</Box></Box>
				<Box>
					<IconButton
						onClick={removeItem}
						colorScheme='red'
						aria-label='remove from cart'
						icon={<CloseIcon />}
					/>
				</Box>
			</Box>
		</>
	)
}

const CartEmpty = () => {
	return (<>Cart is empty</>)
}

const Cart = () => {
	const { cartItems } = useContext(CartContext);
	const { removeItem } = useContext(CartContext);
	return (
		<PageWrapper>
			<Box
				my='5'
				fontWeight='semibold'
				as='h1'
				lineHeight='tight'
				textAlign={'left'}
				fontSize={'3xl'}
			>
				My Cart
			</Box>

			<div>
				{cartItems.length > 0 ? <>{cartItems.map((item) => (
					<CartList removeItem={event => removeItem(item.id)} key={item.id} image={item.imageURL} name={item.name} price={item.price} />
				))}</> : <CartEmpty />}
			</div>
		</PageWrapper>
	);
};

export default Cart;
