import React from "react";
import Palette from "./components/palette/palette.component";
import seedColors from "./components/Seed-colors/seedcolor";

const App = () => {
	return (
		<div>
			<Palette {...seedColors[1]} />
		</div>
	);
};

export default App;
