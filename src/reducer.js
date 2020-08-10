import { Switch } from "@material-ui/core";

export const initialState = {
	basket: [],
	user: null,
};

export const getBasketTotal = basket => {
	return basket?.reduce((amount, item) => item.price + amount, 0);
};

const reducer = (state, action) => {
	// this allows you to see which action is actually getting passed
	console.log(action);
	switch (action.type) {
		case "ADD_TO_BASKET":
			// logic for adding item to basket
			return {
				...state,
				basket: [...state.basket, action.item],
			};
		case "REMOVE_FROM_BASKET":
			// logic for removing item from basket
			let newBasket = [...state.basket];

			const index = state.basket.findIndex(
				basketItem => basketItem.id === action.id
			);

			if (index >= 0) {
				// item exists in basket, remove it ...
				newBasket.splice(index, 1);
			} else {
				console.warn(
					`Can't remove product (id: ${action.id}) as it's not in basket`
				);
			}
			console.log(index);

			return { ...state, basket: newBasket };
		default:
			return state;
	}
};

export default reducer;
