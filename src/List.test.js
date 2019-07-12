import React from 'react';
import ReactDOM from 'react-dom';
import List from './List';
import renderer from 'react-test-renderer';
import Card from './Card';

describe('List Component', () => {
    it('renders to UI w/o crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<List key={} title={} content={}/>, div);
        ReactDOM.unmountComponentAtNode(div);
    });
    
    it('renders correct UI', () => {
        const tree = renderer
            .create(<List />)
            .toJSON();
        expect(tree).toMatchSnapshot();
    });
});

