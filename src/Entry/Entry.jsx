import { useState } from "react";
import "./Entry.css";
import { Keccak } from "sha3";

function Entry({ update }) {
	const [entry, setEntry] = useState("");
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

	function onButtonClick() {
		var hash = hashing(entry);
		update(hash);
	}

	return (
		<>
			<input
				type="text"
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
