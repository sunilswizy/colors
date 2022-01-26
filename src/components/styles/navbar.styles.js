const styles = {
	navbar: {
		width: "100%",
		height: "10%",
		display: "flex",
		alignItems: "center",
		justifyContent: "flex-start",
	},
	logo: {
		width: "10%",
		height: "100%",
		display: "flex",
		alignItems: "center",
		justifyContent: "center",
		backgroundColor: "#eceff1",
		fontSize: "20px",
		"& a": {
			textDecoration: "none",
			color: "black",
		},
	},
	selectContainer: {
		margin: "0 10px",
	},
	slider: {
		width: "340px",
		margin: "0 19px",
		display: "inline-block",

		"& .rc-slider-track": {
			background: "transparent",
		},

		"& .rc-slider-rail": {
			height: "8px",
		},
		"& .rc-slider-handle, .rc-slider-handle:hover, .rc-slider-handle:focus, .rc-slider-handle:active":
			{
				backgroundColor: "purple",
				outline: "none",
				border: "2px solid purple",
				boxShadow: "none",
				width: "13px",
				height: "13px",
				marginLeft: "-7px",
				marginTop: "-3px",
			},
	},
	sliderContainer: {
		margin: "0 10px",
		position: "absolute",
		top: "0.5%",
		right: "0.5%",
	},
};

export default styles;
