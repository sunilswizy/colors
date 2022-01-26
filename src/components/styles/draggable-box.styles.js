import chroma from "chroma-js";

const styles = {
	root: {
		width: "20%",
		height: "25%",
		display: "inline-block",
		cursor: "pointer",
		margin: "0 auto",
		position: "relative",
		textTransform: "uppercase",

		"&:hover svg , &:hover span": {
			transition: "all 0.5s ease-in-out",
			transform: "scale(1.1)",
		},
	},
	content: {
		display: "flex",
		height: "100%",
		justifyContent: "space-between",
		alignItems: "flex-end",
		padding: "10px",
		fontSize: "12px",
		color: prop =>
			chroma(prop.background).luminance() >= 0.07 ? "black" : "white",
	},
	deleteIcon: {
		color: prop =>
			chroma(prop.background).luminance() >= 0.07 ? "black" : "white",
	},
};

export default styles;
