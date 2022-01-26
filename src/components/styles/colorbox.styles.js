import chroma from "chroma-js";

const styles = {
	root: {
		width: props => (props.noMore ? "100%" : "20%"),
		height: props => (props.noMore ? "100%" : "25%"),
		display: "inline-block",
		cursor: "pointer",
		margin: "0 auto",
		position: "relative",
		textTransform: "uppercase",
		marginBottom: "-4px",

		"&:hover button": {
			opacity: "1",
			transition: "0.5s",
		},
	},
	singleBox: {
		height: "100%",
		width: "100%",
	},
	copyText: {
		color: props =>
			chroma(props.background).luminance() >= 0.7 ? "black" : "white",
	},
	colorName: {
		color: props =>
			chroma(props.background).luminance() <= 0.09 ? "white" : "black",
	},
	seeMore: {
		color: props =>
			chroma(props.background).luminance() >= 0.6
				? "rgba(0, 0, 0, 0.6)"
				: "white",
		position: "absolute",
		bottom: "0",
		right: "0",
		padding: "10px",
		fontSize: "12px",
		background: "rgba(255, 255, 255, 0.3)",
		width: "60px",
		height: "30px",
		textAlign: "center",
		lineHeight: "30px",
	},
	copyButton: {
		color: props =>
			chroma(props.background).luminance() >= 0.6
				? "rgba(0, 0, 0, 0.6)"
				: "white",
		width: "100px",
		height: "30px",
		position: "absolute",
		display: "inline-block",
		top: "50%",
		left: "50%",
		marginLeft: "-50px",
		marginTop: "-15px",
		textAlign: "center",
		outline: "none",
		background: "rgba(255, 255, 255, 0.3)",
		fontSize: "1rem",
		lineHeight: "20px",
		border: "none",
		opacity: "0",
	},
	boxContent: {
		position: "absolute",
		color: "#000",
		width: "100%",
		bottom: "0",
		left: "0",
		padding: "10px",
		letterSpacing: "1px",
		fontSize: "12px",
	},
	copyOverley: {
		width: "100%",
		height: "100%",
		opacity: "0",
		zIndex: "0",
		position: "absolute",
		transition: "transform 0.6s ease-in-out",
		transform: "scale(0.1)",
	},
	copyMsg: {
		position: "fixed",
		top: "0",
		bottom: "0",
		left: "0",
		right: "0",
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
		flexDirection: "column",
		fontSize: "4rem",
		opacity: "0",
		transform: "scale(0.1)",

		"& h1": {
			fontWeight: "400",
			width: "100%",
			background: "rgba(255, 255, 255, 0.2)",
			textAlign: "center",
			marginBottom: "0",
			padding: "1rem",
			textShadow: "1px 2px rgba(0, 0, 0, 0.1)",
		},
		"& p": {
			fontWeight: "100",
			fontSize: "2rem",
		},
	},
	copyMsgShow: {
		opacity: "1",
		transform: "scale(1)",
		zIndex: "12",
		transition: "all 0.3s ease-in-out",
		transitionDelay: "0.4s",
	},
	copyOverlayShow: {
		opacity: "1",
		transform: "scale(50)",
		zIndex: "10",
	},
};

export default styles;
