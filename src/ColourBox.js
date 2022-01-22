import React from "react";

const ColourBox = ({ colourName }) => {
	return (
		<div className="box" style={{ backgroundColor: colourName }}>
			{colourName}
		</div>
	);
};

export default ColourBox;
