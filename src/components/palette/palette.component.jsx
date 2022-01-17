import React from "react";
import "./palette.styles.css";
import ColorBox from "../Colorbox/colorbox.component";

class Palette extends React.Component {
	render() {
		const { colors } = this.props;
		return (
			<div className='Palette'>
				<div className='Palette-colors'>
					{colors.map(color => {
						return <ColorBox background={color} key={color.color} />;
					})}
				</div>
			</div>
		);
	}
}

export default Palette;
