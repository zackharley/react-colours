import React, {Component} from 'react';

export default class Colour extends Component {

	// PropTypes

	constructor(props) {
		super(props);
		this.state = {
			wrapperStyle: {
				alignItems: 'center',
				backgroundColor: this.props.colour,
				display: 'flex',
				flex: '1 1 auto',
				justifyContent: 'center'
			},
			labelStyle: {
				color: 'white',
				fontFamily: 'monospace',
				fontSize: '3em',
				cursor: 'pointer',
				textTransform: 'uppercase',
				userSelect: 'none'
			}
		};
	}

	copyToClipboard() {
		const { colour } = this.props;
		const textField = document.createElement('textarea');
	    textField.innerText = colour;
	    document.body.appendChild(textField);
	    textField.select();
	    document.execCommand('copy');
	    alert('Copied to clipboard');
	    textField.remove();
	}

	render() {
		return (
			<section className='colour' style={this.state.wrapperStyle}>
				<label
					className='colour-label'
					style={this.state.labelStyle}
					onClick={this.copyToClipboard.bind(this)}
				>
					{this.props.colour}
				</label>
			</section>
		);
	}
}
