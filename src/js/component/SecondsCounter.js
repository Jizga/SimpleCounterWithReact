import React from "react";
import { ClockElement } from "./ClockElement";
import { Hours } from "./Hours";
import { Minutes } from "./Minutes";
import { Seconds } from "./Seconds";

export function SecondsCounter() {
	return (
		<div className="d-flex justify-content-center bg-dark p-5 mt-5">
			<ClockElement />
			<Hours />
			<div className="bg-danger pt-5 pb-5 MyEOpacity text-white">:</div>
			<Minutes />
			<div className="bg-danger pt-5 pb-5 MyEOpacity text-white">,</div>
			<Seconds />
		</div>
	);
}
