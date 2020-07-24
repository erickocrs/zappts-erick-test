import React, { Component } from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Register from './Register';

configure({adapter: new Adapter()});

describe('<Register/>', () => {

    it('should render register form', () => {
        const wrapper = shallow(<Register/>);
        expect(wrapper.find('.form-register')).toHaveLength(1);
    })
    
});