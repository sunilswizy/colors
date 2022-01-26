import React, { useState } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { Link } from "react-router-dom";

import styles from "../styles/colorbox.styles";
import { withStyles } from "@material-ui/styles";

const ColorBox = ({ background, name, id, paletteId, noMore, classes }) => {
	const [isCopied, setIsCopied] = useState(false);

	const changeCopyState = () => {
		setIsCopied(true);
		setTimeout(() => {
			setIsCopied(false);
		}, 1500);
	};

	return (
		<CopyToClipboard text={background} onCopy={changeCopyState}>
			<div
				className={`${classes.root} ${classes.singleBox}`}
				style={{ background }}>
				<div
					className={`${classes.copyOverley} ${
						isCopied && classes.copyOverlayShow
					}`}
					style={{ background }}
				/>

				<div
					className={`${classes.copyMsg} ${isCopied && classes.copyMsgShow}`}>
					<h1 className={classes.copyText}>Copied!</h1>
					<p className={classes.copyText}>{background}</p>
				</div>

				<div>
					<div className={classes.boxContent}>
						<span className={classes.colorName}>{name}</span>
					</div>
					<button className={classes.copyButton}>COPY</button>
					{!noMore && (
						<Link
							to={`/palette/${paletteId}/${id}`}
							onClick={e => e.stopPropagation()}>
							<span className={classes.seeMore}>MORE</span>
						</Link>
					)}
				</div>
			</div>
		</CopyToClipboard>
	);
};

export default withStyles(styles)(ColorBox);
