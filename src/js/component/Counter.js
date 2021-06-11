import React, { useState } from "react";
import { CounterElement } from "./CounterElement";

export function Counter() {
	let [counter, setCounter] = useState(0);
	let [hours, setHours] = useState(0);
	let [minutes, setMinutes] = useState(0);
	let [seconds, setSeconds] = useState(0);

	function counterElements() {
		setInterval(function() {
			setCounter(counter++);
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

	window.onload = function() {
		counterElements();
	};

	return (
		<div className="container-fluid d-flex justify-content-center bg-dark p-5 mt-5 myContainer border-top border-bottom border-light">
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
	);
}
