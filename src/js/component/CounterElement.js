import React from "react";
import PropTypes from "prop-types";

export function CounterElement(props) {
	return (
		<div className="d-flex justify-content-start MyEOpacity">
			<div className="text-white display-3 bg-danger p-5 border border-light rounded mr-3">
				{props.time}
			</div>
		</div>
	);
}

CounterElement.propTypes = {
	time: PropTypes.number
};
