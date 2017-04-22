import React, { Component } from 'react';
import Colour from './Colour';

export default class Colours extends Component {

	// propTypes

	constructor(props) {
		super(props);

		this.state = {
			mainStyle: {
				display: 'flex',
				flexDirection: 'column',
				height: '100%',
				width: '100%'
			},
			wrapperStyle: {
				display: 'flex',
				flex: '1 1 auto',
				flexDirection: 'row'
			}
		}
	}

	render() {
		return (
			<section className='colours' style={this.state.mainStyle}>
				<section className='colours__wrapper' style={this.state.wrapperStyle}>
					{this.props.colours.map((colour) => {
						return (
							<Colour colour={colour}/>
						);
					})}
				</section>
			</section>
		);
	}
}
