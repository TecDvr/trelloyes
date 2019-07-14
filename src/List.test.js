import React from 'react';
import ReactDOM from 'react-dom';
import List from './List';
import renderer from 'react-test-renderer';

describe('List Component', () => {

    const props = {
        id: "a",
        title: "Card One",
        content: "Just Testin"
    };

    it('renders to UI w/o crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<List key={this.props.id} title={this.props.title} content={this.props.content}/>, div);
        ReactDOM.unmountComponentAtNode(div);
    });
    
    it('renders correct UI', () => {
        const tree = renderer
            .create(<List key={props.id} title={props.title} content={props.content}/>)
            .toJSON();
        expect(tree).toMatchSnapshot();
    });
});


