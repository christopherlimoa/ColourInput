import React from "react";

const InputBar = ({ setColourName }) => {
	return (
		<input
			type="text"
			placeholder="Type Colour"
			autoFocus
			onChange={(e) => setColourName(e.target.value)}
		/>
	);
};

export default InputBar;
