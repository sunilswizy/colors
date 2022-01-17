import React from "react";
import Palette from "./components/palette/palette.component";
import seedColors from "./components/Seed-colors/seedcolor";

import { generatePalette } from "./components/Seed-colors/colorhelper";

const App = () => {
	return (
		<div>
			<Palette palette={generatePalette(seedColors[1])} />
		</div>
	);
};

export default App;
