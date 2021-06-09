import React from "react";
import { ClockElement } from "./ClockElement";
import { Hours } from "./Hours";

export function SecondsCounter() {
	return (
		<div className="bg-dark p-5 mt-5">
			<ClockElement />
			<Hours />
		</div>
	);
}
