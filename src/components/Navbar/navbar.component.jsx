import React, { useState } from "react";
import "rc-slider/assets/index.css";
import Slider from "rc-slider";

import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import Snackbar from "@mui/material/Snackbar";
import CloseIcon from "@mui/icons-material/Close";
import IconButton from "@mui/material/IconButton";

import { Link } from "react-router-dom";

import { withStyles } from "@material-ui/styles";
import styles from "../styles/navbar.styles";

const Navbar = ({ level, handleChange, handleColor, isSingleBox, classes }) => {
	const [format, setFormat] = useState("hex");
	const [open, setOpen] = useState(false);

	const handleformat = e => {
		setOpen(true);
		setFormat(e.target.value);
		handleColor(e.target.value);
		setTimeout(() => {
			setOpen(false);
		}, 2000);
	};

	const action = (
		<>
			<IconButton
				size='small'
				aria-label='close'
				color='inherit'
				onClick={() => setOpen(false)}>
				<CloseIcon fontSize='small' />
			</IconButton>
		</>
	);

	return (
		<div className={classes.navbar}>
			<div className={classes.logo}>
				<Link to='/'>ColorworlD!</Link>
			</div>
			<div className={classes.selectContainer}>
				{!isSingleBox && (
					<>
						<span>Level: {level}</span>

						<div className={classes.slider}>
							<Slider
								defaultValue={level}
								min={100}
								max={900}
								step={100}
								onAfterChange={handleChange}
							/>
						</div>
					</>
				)}

				<div className={classes.sliderContainer}>
					<Select placeholder='Color' onChange={handleformat} value={format}>
						<MenuItem value='hex'>HEX - #ffffff</MenuItem>
						<MenuItem value='rgb'>RGB - rgb(255,255,255)</MenuItem>
						<MenuItem value='rgba'>RGBA - rgba(255,255,255,0.1)</MenuItem>
					</Select>
				</div>
				<Snackbar
					anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
					open={open}
					autoHideDuration={3000}
					message={
						<span id='message-id'>
							Format Changed to {format.toUpperCase()}
						</span>
					}
					action={action}
					onClose={() => setOpen(false)}
					ContentProps={{
						"aria-describedby": "message-id",
					}}></Snackbar>
			</div>
		</div>
	);
};

export default withStyles(styles)(Navbar);
