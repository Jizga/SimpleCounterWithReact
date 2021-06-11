import React from "react";
import { ClockElement } from "./ClockElement";
import { Hours } from "./Hours";
import { Minutes } from "./Minutes";
import { Seconds } from "./Seconds";

export function SecondsCounter() {
	return (
		<div className="container-fluid d-flex justify-content-center bg-dark p-5 mt-5 myContainer border-top border-bottom border-light">
			<ClockElement />
			<Hours />
			<div className="text-white display-3 mr-1 bg-danger p-5  border border-light rounded mr-3 MyEOpacity">
				:
			</div>
			<Minutes />
			<div className="text-white display-3 mr-1 bg-danger p-5  border border-light rounded mr-3 MyEOpacity">
				.
			</div>
			<Seconds seconds={0} />
		</div>
	);
}
