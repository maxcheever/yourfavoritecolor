import "./ColorBox.css";
function ColorBox({ hex }) {
	return (
		<div
			className="ColorBox"
			style={{
				backgroundColor: `#${hex}`,
			}}
		></div>
	);
}

export default ColorBox;
