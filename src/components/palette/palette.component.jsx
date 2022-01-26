import React, { useState } from "react";
import ColorBox from "../Colorbox/colorbox.component";
import Navbar from "../Navbar/navbar.component";

import { useParams } from "react-router-dom";

import { generatePalette } from "../Seed-colors/colorhelper";
import Footer from "../footer/footer.componet";

import { withStyles } from "@material-ui/styles";
import styles from "../styles/palette.styles";

const Palette = ({ classes, newPalette }) => {
	const [level, setLevel] = useState(500);
	const [colorCode, setColorCode] = useState("hex");
	const { id } = useParams();

	const findPalette = id1 => {
		return newPalette.find(el => {
			return el.id === id1;
		});
	};

	const handleChange = level => {
		setLevel(level);
	};

	const handleColor = colorCode => {
		setColorCode(colorCode);
	};

	const palette = generatePalette(findPalette(id));

	return (
		<div className={classes.root}>
			<Navbar
				level={level}
				handleChange={handleChange}
				handleColor={handleColor}
			/>
			<div className={classes.PaletteColors}>
				{palette.colors[level].map(color => {
					return (
						<ColorBox
							background={color[colorCode]}
							key={color.id}
							paletteId={id}
							{...color}
						/>
					);
				})}
			</div>
			<Footer paletteName={palette.paletteName} emoji={palette.emoji} />
		</div>
	);
};

export default withStyles(styles)(Palette);
