import { useState } from "react";
import Header from "./Header";
import ColourBox from "./ColourBox";
import InputBar from "./InputBar";

function App() {
	const [colourName, setColourName] = useState("");

	return (
		<div className="App">
			<Header title="Colour Input" />
			<ColourBox colourName={colourName} />
			<InputBar setColourName={setColourName} />
		</div>
	);
}

export default App;
