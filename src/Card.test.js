import React from 'react';
import ReactDOM from 'react-dom';
import Card from './Card';
import renderer from 'react-test-renderer';

describe('Card component', () => {
    it('renders to DOM w/o crash', () => {
        const div = document.createElement('div');
        ReactDOM.render(<Card />, div);
        ReactDOM.unmountComponentAtNode(div);
    });
    
    it('renders correct UI', () => {
        const tree = renderer
            .create(<Card />)
            .toJSON();
        expect(tree).toMatchSnapshot();
    })
});