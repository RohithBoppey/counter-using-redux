import React, { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";

const Counter = () => {
	const inputRef = useRef();

	const counter = useSelector((state) => state.counter);
	const isToggled = useSelector((state) => state.isToggled);

	const dispatch = useDispatch();

	const incDecHandler = (value) => {
		if (value === 1) {
			dispatch({ type: "increment" });
		} else {
			dispatch({ type: "decrement" });
		}
	};

	const incDecHandlerx = (value) => {
		if (value === 1) {
			dispatch({
				type: "incrementx",
				x: parseInt(inputRef.current.value),
			});
		} else {
			dispatch({
				type: "decrementx",
				x: parseInt(inputRef.current.value),
			});
		}
	};

	const toggleHandler = () => {
		dispatch({ type: "toggle" });
	};

	return (
		<div>
			Counter Value: {counter}
			<br />
			<button onClick={toggleHandler}>Toggle display</button>
			{isToggled && (
				<div>
					<button onClick={() => incDecHandler(1)}>increment</button>
					<button onClick={() => incDecHandler(-1)}>decrement</button>
					<input type="number" ref={inputRef} defaultValue='1'></input>
					<button onClick={() => incDecHandlerx(1)}>
						increment by x
					</button>
					<button onClick={() => incDecHandlerx(-1)}>
						decrement by x
					</button>
				</div>
			)}
		</div>
	);
};

export default Counter;
