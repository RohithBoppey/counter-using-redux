import { createStore } from "redux";

const initialState = { counter: 0, isToggled: 1 };

const reducerFunction = (state = initialState, action) => {
	if (action.type === "increment") {
		return {
			...state,
			counter: state.counter + 1,
		};
	}
	if (action.type === "decrement") {
		return {
			...state,
			counter: state.counter - 1,
		};
	}
	if (action.type === "incrementx") {
		return {
			...state,
			counter: state.counter + action.x,
		};
	}
	if (action.type === "decrementx") {
		return {
			...state,
			counter: state.counter + action.x,
		};
	}

	if (action.type === "toggle") {
		return {
			...state,
			isToggled: !state.isToggled,
		};
	}

	return state;
};

// takes in a reducer function

const store = createStore(reducerFunction);

export default store;
