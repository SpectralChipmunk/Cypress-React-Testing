import { useReducer } from "react";
import CartContext from "./CartContext";
import CartReducer from "./CartReducer";
import { ADD_TO_CART, REMOVE_FROM_CART } from "./Types";

const CartState = ({ children }) => {
	const initalState = {
		cartItems: [],
	};

	const [state, dispatch] = useReducer(CartReducer, initalState);

	const addToCart = (item) => {
		dispatch({ type: ADD_TO_CART, payload: item });
	};

	const removeItem = (id) => {
		console.log(id);
		dispatch({ type: REMOVE_FROM_CART, payload: id });
	};

	return (
		<CartContext.Provider
			value={{
				cartItems: state.cartItems,
				addToCart,
				removeItem,
			}}
		>
			{children}
		</CartContext.Provider>
	);
};

export default CartState;