import { useState, useRef } from "react";
import "./Entry.css";
import { Keccak } from "sha3";

function Entry({ update }) {
	const [entry, setEntry] = useState("");
	const ref = useRef(null);

	// hashes the name from the entry box
	function hashing(name) {
		var hash = new Keccak(224);
		hash.update(name);
		var hashed = hash.digest("hex");
		hashed = hashed.slice(0, 6);
		return hashed;
	}

	const onNameChange = (event) => {
		setEntry(event.target.value);
	};

	const onButtonClick = () => {
		var hash = hashing(entry);
		update(hash);
		setEntry("");
		ref.current.value = "";
	};

	let last10 = {};

	return (
		<>
			<input
				type="text"
				ref={ref}
				id="name"
				name="name"
				className="input"
				placeholder="Name..."
				onChange={onNameChange}
			></input>
			<button className="button" onClick={onButtonClick}>
				My Favorite Color
			</button>
		</>
	);
}

export default Entry;
