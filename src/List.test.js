import React from 'react';
import ReactDOM from 'react-dom';
import List from './List';

it('renders to UI w/o crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<List key={} title={} content={}/>, div);
    ReactDOM.unmountComponentAtNode(div);
});