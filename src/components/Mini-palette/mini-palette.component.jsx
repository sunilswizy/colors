import React from "react";

import { withStyles } from "@material-ui/styles";
import styles from "../styles/mini-palette.styles";

import { useNavigate } from "react-router-dom";

const MiniPalette = ({ classes, paletteName, emoji, colors, id }) => {
	const miniBoxes = colors.map(({ color, name }) => {
		return (
			<div
				className={classes.miniBoxes}
				style={{ backgroundColor: `${color}` }}
				key={name}
			/>
		);
	});
	const navigate = useNavigate();
	return (
		<div className={classes.root} onClick={() => navigate(`palette/${id}`)}>
			<div className={classes.colors}>{miniBoxes}</div>
			<h5 className={classes.title}>
				{paletteName}
				<span className={classes.emoji}>{emoji}</span>
			</h5>
		</div>
	);
};

export default withStyles(styles)(MiniPalette);
