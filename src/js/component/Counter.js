import React, { useState, useEffect } from "react";
import { CounterElement } from "./CounterElement";

export function Counter() {
	let [counter, setCounter] = useState(null);

	//HACERLO CON SOLO EL COUNTER (??????)
	let [hours, setHours] = useState(0);
	let [minutes, setMinutes] = useState(0);
	let [seconds, setSeconds] = useState(null);
	//
	//Para que los segundos empiecen en cero y se elimine el desface de 1 segundo entre el counter y los seconds
	// let [seconds, setSeconds] = useState(-1);

	//Para resetear el contador
	let [reset, setReset] = useState(false);

	useEffect(() => {
		timerAssignment();
		if (reset === true) resetAction();
	}, [counter]);

	function timerAssignment() {
		setTimeout(function() {
			setCounter(counter + 1);
		}, 1000);

		incrementTimer("seconds");
		if (seconds >= 59) {
			setSeconds(0);
			incrementTimer("minutes");
		}
		if (minutes >= 59) {
			setMinutes(0);
			incrementTimer("hours");
		}
	}

	function incrementTimer(time) {
		if (time === "hours") {
			setHours(hours + 1);
		}
		if (time === "minutes") {
			setMinutes(minutes + 1);
		}
		if (time === "seconds") {
			setSeconds(seconds + 1);
		}
	}

	//Al pulsar el botón de reset los segundos parece que cuentan de dos en dos pq el counter va el doble de rápido
	function resetChange() {
		setReset(true);
	}

	function resetAction() {
		setCounter(0);
		setSeconds(0);
		setMinutes(0);
		setHours(0);

		setReset(false);
	}
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
					:
				</div>
				<CounterElement time={seconds} />
			</div>

			<div className="bg-warning text-center">{counter}</div>

			<div className="d-flex justify-content-center pb-5">
				<button
					className="btn btn-outline-success mr-4"
					onClick={() => resetChange()}>
					Reset
				</button>
				{/* <button
					className="btn btn-outline-danger mr-4"
					onClick={() => stop()}>
					Stop
				</button>
				<button
					className="btn btn-outline-warning"
					onClick={() => resume()}>
					Resume
				</button> */}
			</div>
		</div>
	);
}
