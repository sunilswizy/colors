import React from "react";
import "./colorbox.styles.css";

import { CopyToClipboard } from "react-copy-to-clipboard";

const ColorBox = ({ background: { name, color } }) => {
	return (
		<CopyToClipboard text={color}>
			<div className='color-box' style={{ backgroundColor: `${color}` }}>
				<div className='copy-container'>
					<div className='box-content'>
						<span>{name}</span>
					</div>
					<button className='copy-button'>COPY</button>
					<span className='see-more'>MORE</span>
				</div>
			</div>
		</CopyToClipboard>
	);
};

export default ColorBox;
