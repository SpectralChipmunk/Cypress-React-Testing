import { useReducer } from "react";
import { createContext } from "react";

const CartContext = createContext();

export const ADD_ITEM = "ADD_ITEM";
export const REMOVE_ITEM = "REMOVE_ITEM";


const CartReducer = (state, action) => {
	switch (action.type) {
		case ADD_ITEM: {
			return {
				...state,
				cartItems: [...state.cartItems, action.payload],
			};
		}
		case REMOVE_ITEM: {
			return {
				...state,
				cartItems: state.cartItems.filter(
					(item) => item._id !== action.payload
				),
			};
		}
		default:
			return state;
	}
};


const CartState = ({ children }) => {
	const initalState = {
		cartItems: [],
	};

	const [state, dispatch] = useReducer(CartReducer, initalState);

	const addToCart = (item) => {
		dispatch({ type: ADD_ITEM, payload: item });
	};

	const removeItem = (id) => {
		dispatch({ type: REMOVE_ITEM, payload: id });
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
