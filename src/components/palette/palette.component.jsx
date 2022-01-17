import React from "react";
import "./palette.styles.css";
import ColorBox from "../Colorbox/colorbox.component";
import Navbar from "../Navbar/navbar.component";

class Palette extends React.Component {
	constructor() {
		super();
		this.state = {
			level: 500,
		};
	}

	handleChange = level => {
		this.setState({ level });
	};

	render() {
		const { palette } = this.props;
		const { level } = this.state;
		return (
			<div className='Palette'>
				<Navbar level={level} handleChange={this.handleChange} />
				<div className='Palette-colors'>
					{palette.colors[level].map(({ hex, id, ...other }) => {
						return <ColorBox background={hex} key={id} {...other} />;
					})}
				</div>
			</div>
		);
	}
}

export default Palette;
