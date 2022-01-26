const styles = {
	root: {
		backgroundColor: "white",
		border: "1px solid black",
		borderRadius: "5px",
		padding: "0.5rem",
		position: "relative",
		"& :hover": {
			cursor: "pointer",
		},
	},
	title: {
		color: "black",
		display: "flex",
		justifyContent: "space-between",
		alignItems: "center",
		margin: "0",
		paddingTop: "0.5rem",
		fontSize: "0.7rem",
		position: "relative",
	},
	colors: {
		backgroundColor: "grey",
		width: "100%",
		height: "150px",
		display: "flex",
		flexWrap: "wrap",
		borderRadius: "5px",
		overflow: "hidden",
	},
	miniBoxes: {
		width: "20%",
		height: "25%",
	},
	emoji: {
		marginLeft: "0.5rem",
		fontSize: "1rem",
	},
};

export default styles;
