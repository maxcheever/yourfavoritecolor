import { useState } from "react";
import ColorBox from "./ColorBox/ColorBox.js";
import "./App.css";
import Entry from "./Entry/Entry.js";

function App() {
	const [hex1, setHex1] = useState("FFFFFF");
	const [hex2, setHex2] = useState("FFFFFF");
	return (
		<>
			<div className="top">
				<ColorBox hex={hex2} size={"20"} />
				<p className="topColor">#{hex2}</p>
				<p className="text">"Collective Identity"</p>
			</div>
			<div className="bottom">
				<ColorBox hex={hex1} size={"40"} />
				<p className="bottomColor">#{hex1}</p>
				<Entry />
			</div>
		</>
	);
}

export default App;