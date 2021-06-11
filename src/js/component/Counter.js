import React, { useState, useEffect } from "react";
import { CounterElement } from "./CounterElement";

export function Counter() {
	let [counter, setCounter] = useState(342255);

	//HACERLO CON SOLO EL COUNTER
	let [hours, setHours] = useState(0);
	let [minutes, setMinutes] = useState(0);
	let [segunds, setSegunds] = useState(0);

	useEffect(() => {
		counter > 0 &&
			setTimeout(() => {
				setCounter(counter + 1);
				setHours(Math.floor(counter / 3600000));
				setMinutes(Math.floor(counter / 60000));
				setSegunds(Math.floor(counter / 1000));
			}, 1000);
	}, [counter]);

	return (
		<div className="bg-dark border-top border-bottom border-light myContainer">
			<div className="container-fluid d-flex justify-content-center p-5 mt-5">
				<div className="bg-danger p-5 MyEOpacity border border-light rounded mr-3">
					<i className="far fa-clock text-white fa-5x"></i>
				</div>
				<CounterElement time={hours} />
				<div className="text-white display-3 mr-1 bg-danger p-5  border border-light rounded mr-3 MyEOpacity">
					:
				</div>
				<CounterElement time={minutes} />
				<div className="text-white display-3 mr-1 bg-danger p-5  border border-light rounded mr-3 MyEOpacity">
					.
				</div>
				<CounterElement time={segunds} />
			</div>

			<div className="bg-warning text-center">{counter}</div>

			{/* <div className="d-flex justify-content-center pb-5">
				<button
					className="btn btn-outline-success mr-4"
					onClick={() => reset()}>
					Reset
				</button>
				<button
					className="btn btn-outline-danger mr-4"
					onClick={() => stop()}>
					Stop
				</button>
				<button
					className="btn btn-outline-warning"
					onClick={() => resume()}>
					Resume
				</button>
			</div> */}
		</div>
	);
}
