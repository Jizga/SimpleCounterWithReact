import React, { useState } from "react";
import PropTypes from "prop-types";

export function Seconds(props) {
	let seconds = props.seconds;
	const [show, setShow] = useState(true);

	function secondsIncrement() {
		setInterval(function() {
			seconds++;
			document.querySelector("#seconds").innerText = seconds;
			//Eliminar el div del primer 0 de los segundos
			seconds > 9 ? setShow(false) : setShow(true);
		}, 1000);
	}

	window.onload = function() {
		secondsIncrement();
	};

	return (
		<div className="d-flex justify-content-start bg-danger pt-5 pb-5 pl-1 pr-5 MyEOpacity">
			{/* RENDERIZADO CONDICIONADO */}
			{show ? <div className="text-white mr-1">0</div> : ""}
			<div className="text-white" id="seconds">
				{seconds}
			</div>
		</div>
	);
}

//  render() {
//     let {isLoggedIn} = this.state;

//     return (
//       <div className="App">
//         <h1>
//           This is a Demo showing several ways to implement Conditional Rendering in React.
//         </h1>
//         {
//           if(isLoggedIn){
//             return <button>Logout</button>
//           } else{
//             return <button>Login</button>
//           }
//         }
//       </div>
//     );
//   }
// }

Seconds.propTypes = {
	seconds: PropTypes.number
};
