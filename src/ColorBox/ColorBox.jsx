import "./ColorBox.css";
function ColorBox({ hex, size }) {
	return (
		<div
			className="ColorBox"
			style={{
				backgroundColor: `#${hex}`,
				width: `${size}vmin`,
				height: `${size}vmin`,
			}}
		></div>
	);
}

export default ColorBox;
