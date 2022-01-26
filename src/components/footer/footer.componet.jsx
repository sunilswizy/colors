import React from "react";
import { withStyles } from "@material-ui/styles";

const styles = {
	root: {
		height: "5%",
		display: "flex",
		justifyContent: "flex-end",
		paddingRight: "2%",
		fontSize: "1.2rem",
		alignItems: "center",
	},
	emoji: {
		fontSize: "1.5rem",
	},
};

const Footer = ({ paletteName, emoji, classes }) => (
	<footer className={classes.root}>
		{paletteName}
		<span className={classes.emoji}>{emoji}</span>
	</footer>
);

export default withStyles(styles)(Footer);
