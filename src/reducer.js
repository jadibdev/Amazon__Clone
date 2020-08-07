import { Switch } from "@material-ui/core";

export const initialState = {
	basket: [],
	user: null,
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
			return { state };
		default:
			return state;
	}
};

export default reducer;
