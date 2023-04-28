import { useState } from "react";
import ColorBox from "./ColorBox/ColorBox.jsx";
import "./App.css";
import Entry from "./Entry/Entry.jsx";

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
				<Entry update1={setHex1} update2={setHex2} />
			</div>
			<div className="link-div">
				<a
					href="https://github.com/maxcheever/yourfavoritecolor"
					target="_blank"
					rel="noreferrer"
				>
					<i className="fa fa-github"></i>
				</a>
				<a
					href="https://github.com/maxcheever/yourfavoritecolor"
					className="link"
					target="_blank"
					rel="noreferrer"
				>
					learn more about this piece
				</a>
			</div>
		</>
	);
}

export default App;
