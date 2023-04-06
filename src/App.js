import { useState } from "react";
import ColorBox from "./ColorBox/ColorBox.js";

function App() {
	const [hex, setHex] = useState("F88EE3");
	return (
		<>
			<ColorBox hex={hex} />
		</>
	);
}

export default App;
