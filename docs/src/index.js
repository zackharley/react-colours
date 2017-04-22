import React from 'react';
import { render } from 'react-dom';
import Colours from '../../dist/react-colours.min';
import colours from './colours';

render(
	<Colours colours={colours}/>,
	document.getElementById('app')
)
