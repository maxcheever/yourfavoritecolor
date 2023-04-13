import { useState, useRef } from "react";
import "./Entry.css";
import { Keccak } from "sha3";

function Entry({ update1, update2 }) {
	const [entry, setEntry] = useState("");
	const ref = useRef(null);
	const [entrys, setEntrys] = useState([]);

	// hashes the name from the entry box
	function hashing(name) {
		var hash = new Keccak(224);
		hash.update(name);
		var hashed = hash.digest("hex");
		hashed = hashed.slice(0, 6);
		return hashed;
	}

	// converts from hexadecimal to binary or vice versa
	function BaseConverter(num, indicator) {
		var final =
			indicator === 1
				? parseInt(num, 16).toString(2)
				: parseInt(num, 2).toString(16);

		// 0 extends to 24 bits
		var extend = indicator === 1 ? 24 - final.length : 6 - final.length;
		var bit = "0";
		final = bit.repeat(extend) + final;

		return final;
	}

	function collective(collection) {
		var collectionB = [];
		for (let k = 0; k < collection.length; k++) {
			collectionB.push(BaseConverter(collection[k], 1));
		}
		var finalHash = ""; // will be 24 bit binary

		// adds most common bit at each index to finalHash
		for (var i = 0; i < 24; i++) {
			var check = 0;
			for (let j = 0; j < collectionB.length; j++) {
				collectionB[j][i] === "1" ? (check += 1) : (check -= 1);
			}
			check > 0 ? (finalHash += "1") : (finalHash += "0");
		}

		// convert final to hex
		finalHash = BaseConverter(finalHash, 0);

		return finalHash;
	}

	const onNameChange = (event) => {
		setEntry(event.target.value);
	};

	const onButtonClick = () => {
		var hash = hashing(entry);
		setEntrys([hash, ...entrys]);

		update1(hash); // setting big colorbox to 6 digit hash
		update2(collective(entrys)); // setting small colorbox to 6 digit collective hash

		setEntry("");
		ref.current.value = "";
	};

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
				maximum-scale="1"
			></input>
			<button className="button" onClick={onButtonClick}>
				My Favorite Color
			</button>
		</>
	);
}

export default Entry;
