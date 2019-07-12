import React from 'react';
import ReactDOM from 'react-dom';
import Card from './Card';

it('renders to DOM w/o crash', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Card />, div);
    ReactDOM.unmountComponentAtNode(div);
});

