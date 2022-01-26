const Styles = {
	root: {
		width: "100%",
		height: "100vh",
		overflow: "hidden",
	},
	colorbox: {
		width: "100%",
		height: "85%",
		display: "grid",
		gridTemplateColumns: "repeat(5, 1fr)",
	},
	colorBoxes: {
		cursor: "pointer",
		margin: "0 auto",
		position: "relative",
		textTransform: "uppercase",
		marginBottom: "4px",
		height: "100%",
		width: "100%",
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
		backgroundColor: "black",
	},
	backButton: {
		width: "100px",
		height: "30px",
		display: "flex",
		alignItems: "center",
		justifyContent: "center",
		outline: "none",
		background: "rgba(255, 255, 255, 0.3)",
		fontSize: "1rem",
		lineHeight: "20px",
		color: "#fff",
		border: "none",
		textDecoration: "none",
		opacity: "0.9",
		"&:hover": {
			transition: "0.6s",
			opacity: "1",
		},
	},
};

export default Styles;
