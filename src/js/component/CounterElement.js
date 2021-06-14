import React from "react";
import PropTypes from "prop-types";

export function CounterElement(props) {
	return (
		<div className="col-6 col-sm-6 col-md-3 col-lg-2 col-xl-2 d-flex justify-content-start MyEOpacity ">
			<div className="text-white text-center display-3 bg-danger p-5 border border-light rounded MyDigitBox">
				{props.time}
			</div>
		</div>
	);
}

CounterElement.propTypes = {
	time: PropTypes.number
};
