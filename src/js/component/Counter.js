import React, { useState } from "react";
import { CounterElement } from "./CounterElement";

export function Counter() {
	let [counter, setCounter] = useState(0);
	let [hours, setHours] = useState(0);
	let [minutes, setMinutes] = useState(0);
	let [seconds, setSeconds] = useState(0);

	function counterElements() {
		setInterval(function() {
			setCounter((counter += 1));
			incrementElement("seconds");
			if (seconds > 59) {
				setSeconds((seconds = 0));
				incrementElement("minutes");
			}
			if (minutes > 59) {
				setMinutes((minutes = 0));
				incrementElement("hours");
			}
		}, 1000);
	}

	function incrementElement(time) {
		if (time === "hours") {
			setHours((hours += 1));
		}
		if (time === "minutes") {
			setMinutes((minutes += 1));
		}
		if (time === "seconds") {
			setSeconds((seconds += 1));
		}
	}

	// NO FUNCIONA !!!! >__<
	function reset() {
		setCounter((counter = 0));
		setSeconds((seconds = 0));
		setMinutes((minutes = 0));
		setHours((hours = 0));
		console.log("RESET!!", "counter --> ", counter);
		console.log("RESET!!", "seconds --> ", seconds);
	}

	function stop() {
		setCounter(counter);
		setSeconds(seconds);
		setMinutes(minutes);
		setHours(hours);

		console.log("STOP!!!!", "counter --> ", counter);
		console.log("STOP!!!!", "seconds --> ", seconds);
	}

	function resume() {
		console.log("Resume!");
	}

	window.onload = function() {
		counterElements();
	};

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
				<CounterElement time={seconds} />
			</div>

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
