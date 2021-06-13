import React, { useState, useEffect } from "react";
import { CounterElement } from "./CounterElement";

export function Counter() {
	let [counter, setCounter] = useState(0);

	// **************** HACERLO CON SOLO EL COUNTER (??????) ******************
	let [hours, setHours] = useState(0);
	let [minutes, setMinutes] = useState(0);
	// let [seconds, setSeconds] = useState(0);

	// --- Para que los segundos empiecen en cero y se elimine el desface de 1 segundo entre el counter y los seconds
	let [seconds, setSeconds] = useState(-1);

	//Variable necesaria para usar ACTIVAR Y DESACTIVAR el cronómetro
	const [isPlay, setIsPlay] = useState(true);

	// ==================== con setTimeout() no funciona bien ===================
	// useEffect(() => {
	// 	setTimeout(function() {
	// 		setCounter(counter + 1);
	// 	}, 1000);
	// 	timerAssignment();
	// }, [counter]);

	useEffect(() => {
		let interval = null;

		if (isPlay) {
			interval = setInterval(() => {
				setCounter(counter + 1);
			}, 1000);

			timerAssignment();

			setIsPlay(true);
		}

		return () => clearInterval(interval);
	}, [isPlay, counter]);

	function timerAssignment() {
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

	//Al pulsar reset los segundos cuentan de dos en dos y el counter hace cosas raras ---->>>>  con setTimeout()
	// Con setInterval() va bien
	function reset() {
		setIsPlay(false);
		setCounter(0);
		setSeconds(-1);
		setMinutes(0);
		setHours(0);
		clearInterval(counter);
	}

	function stop() {
		setIsPlay(false);
		setCounter(counter);
		setSeconds(seconds);
		setMinutes(minutes);
		setHours(hours);
		clearInterval(counter);
	}

	function resume() {
		setIsPlay(true);
		setCounter(counter);
		// **** "seconds - 1" para eliminar el desface de 1 segundo entre el counter y los segundos
		setSeconds(seconds - 1);
		setMinutes(minutes);
		setHours(hours);
		clearInterval(counter);
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
			</div>
		</div>
	);
}
