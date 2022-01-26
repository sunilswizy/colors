const styles = {
	root: {
		backgroundColor: "blue",
		display: "flex",
		minHeight: "120vh",
		height: "200vh",
		paddingBottom: "1rem",
		alignItems: "flex-start",
		justifyContent: "center",
	},
	container: {
		width: "50%",
		display: "flex",
		alignItems: "flex-start",
		flexDirection: "column",
		flexWrap: "wrap",
	},
	nav: {
		display: "flex",
		width: "100%",
		justifyContent: "space-between",
		color: "white",
		alignItems: "center",
		"& a": {
			color: "white",
		},
	},
	palettes: {
		boxSizing: "border-box",
		width: "100%",
		display: "grid",
		gridGap: "5%",
		gridTemplateColumns: "repeat(3, 30%)",
	},
};

export default styles;
