import React, { Component } from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Login from './Login';

configure({adapter: new Adapter()});

describe('<Login/>', () => {
   
    const setState = jest.fn();

    it('should render login form', () => {
        const wrapper = shallow(<Login/>);
        expect(wrapper.find('.form-login')).toHaveLength(1);
    })
    
});