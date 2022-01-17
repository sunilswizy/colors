import React from "react";
import "rc-slider/assets/index.css";
import "./navbar.styles.css";
import Slider from "rc-slider";

const Navbar = ({ level, handleChange }) => {
	return (
		<div className='navbar'>
			<div className='logo'>
				<a href='/'>ColorworlD!</a>
			</div>
			<div className='slider-container'>
				<span>Level: {level}</span>
				<div className='slider'>
					<Slider
						defaultValue={level}
						min={100}
						max={900}
						step={100}
						onAfterChange={handleChange}
					/>
				</div>
			</div>
		</div>
	);
};

export default Navbar;
