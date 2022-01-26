import React, { useState } from "react";

import Palette from "./components/palette/palette.component";
import Homepage from "./components/Homepage/homepage.component";
import SingleColorBox from "./components/Singlecolorbox/singlecolorbox.componet";
import NewPaletteForm from "./components/Newpaletteform/new-palette-form";

import { Route, Routes } from "react-router-dom";
import seedColors from "./components/Seed-colors/seedcolor";

const App = () => {
	const [palette, setPalette] = useState(seedColors);

	const savePalette = newPalette => {
		setPalette([...palette, newPalette]);
	};

	return (
		<>
			<Routes>
				<Route path='/' element={<Homepage palette={palette} />} />
				<Route
					path='/palette/new'
					element={
						<NewPaletteForm savePalette={savePalette} newPalette={palette} />
					}
				/>
				<Route path='/palette/:id' element={<Palette newPalette={palette} />} />
				<Route
					path='/palette/:id/:colorName'
					element={<SingleColorBox newPalette={palette} />}
				/>
			</Routes>
		</>
	);
};

export default App;
