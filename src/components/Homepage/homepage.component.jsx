import React from "react";

import MiniPalette from "../Mini-palette/mini-palette.component";

import { withStyles } from "@material-ui/styles";
import styles from "../styles/homepage.styles";
import { Link } from "react-router-dom";

const Homepage = ({ classes, palette }) => {
	return (
		<div className={classes.root}>
			<div className={classes.container}>
				<nav className={classes.nav}>
					<h1>Colorworld!</h1>
					<Link to='/palette/new'>Create Palette!</Link>
				</nav>
				<div className={classes.palettes}>
					{palette.map(el => {
						return <MiniPalette key={el.id} {...el} />;
					})}
				</div>
			</div>
		</div>
	);
};

export default withStyles(styles)(Homepage);
