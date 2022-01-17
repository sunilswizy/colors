import React, { useState } from "react";
import "./colorbox.styles.css";

import { CopyToClipboard } from "react-copy-to-clipboard";

const ColorBox = ({ background, name }) => {
	const [isCopied, setIsCopied] = useState(false);
	const changeCopyState = () => {
		setIsCopied(true);
		setTimeout(() => {
			setIsCopied(false);
		}, 1500);
	};

	return (
		<CopyToClipboard text={background} onCopy={changeCopyState}>
			<div className='color-box' style={{ background }}>
				<div
					className={`copy-overley ${isCopied && "show"}`}
					style={{ background }}
				/>

				<div className={`copy-msg  ${isCopied && "show"}`}>
					<h1>Copied!</h1>
					<p>{background}</p>
				</div>

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
