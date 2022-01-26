import React from "react";
import { withStyles } from "@material-ui/styles";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";

import { SortableElement } from "react-sortable-hoc";
import styles from "../styles/draggable-box.styles";

const DraggableBox = ({ background, classes, colorName, handleDelete }) => {
	return (
		<div style={{ backgroundColor: background }} className={classes.root}>
			<div className={classes.content}>
				<span>{colorName}</span>
				<DeleteOutlinedIcon
					className={classes.deleteIcon}
					onClick={() => handleDelete(colorName)}
				/>
			</div>
		</div>
	);
};

export default SortableElement(withStyles(styles)(DraggableBox));
