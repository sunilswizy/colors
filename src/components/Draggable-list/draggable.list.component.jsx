import React from "react";

import { SortableContainer } from "react-sortable-hoc";

import DraggableBox from "../Draggable-box/draggable-box.component";

const DraggableList = ({ color, handleDelete }) => {
	return (
		<div style={{ height: "100%" }}>
			{color.map((el, idx) => {
				return (
					<DraggableBox
						index={idx}
						background={el.color}
						colorName={el.name}
						key={el.name}
						handleDelete={handleDelete}
					/>
				);
			})}
		</div>
	);
};

export default SortableContainer(DraggableList);
