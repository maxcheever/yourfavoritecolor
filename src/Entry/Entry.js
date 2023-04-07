import "./Entry.css";

function Entry() {
	return (
		<>
			<input
				type="text"
				id="name"
				name="name"
				className="input"
				placeholder="Name..."
			></input>
			<button className="button">My Favorite Color</button>
		</>
	);
}

export default Entry;
