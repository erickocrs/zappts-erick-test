import React, { Component } from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import App from './App';

configure({adapter: new Adapter()});

describe('<App/>', () => {
   

    it('should render App', () => {
        const wrapper = shallow(<App/>);
        expect(wrapper.find('.App')).toHaveLength(1);
    })

    
});