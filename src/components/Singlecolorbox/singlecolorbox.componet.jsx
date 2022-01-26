import React, { useState, useEffect } from "react";

import Navbar from "../Navbar/navbar.component";
import { withStyles } from "@material-ui/styles";
import Styles from "../styles/singlecolorbox.styles";

import { generatePalette } from "../Seed-colors/colorhelper";

import { useParams } from "react-router-dom";
import ColorBox from "../Colorbox/colorbox.component";

import { Link } from "react-router-dom";
import Footer from "../footer/footer.componet";

const SingleColorBox = ({ classes, newPalette }) => {
	const { id, colorName } = useParams();

	const [colorCode, setColorCode] = useState("hex");
	const [level, setLevel] = useState(500);
	const [singleColor, setSingleColor] = useState([]);

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
	const pal = generatePalette(findPalette(id));

	useEffect(() => {
		let colors = [];
		for (let color in pal.colors) {
			const newCol = pal.colors[color].find(el => el.id === colorName);
			colors = [...colors, newCol];
		}
		setSingleColor([...colors]);
	}, []);

	return (
		<div className={classes.root}>
			<Navbar
				isSingleBox
				level={level}
				handleColor={handleColor}
				handleChange={handleChange}
			/>
			<div className={classes.colorbox}>
				{singleColor.slice(1).map(color => {
					return (
						<ColorBox
							key={color.name}
							{...color}
							background={color[colorCode]}
							noMore
						/>
					);
				})}
				<div className={classes.colorBoxes}>
					<Link to={`/palette/${pal.id}`} className={classes.backButton}>
						Go Back
					</Link>
				</div>
			</div>
			<Footer paletteName={pal.paletteName} emoji={pal.emoji} />
		</div>
	);
};

export default withStyles(Styles)(SingleColorBox);
