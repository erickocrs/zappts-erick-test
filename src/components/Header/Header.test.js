import React, { Component } from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Header from './Header';

configure({adapter: new Adapter()});

describe('<Header/>', () => {
   

    it('should render header', () => {
        const wrapper = shallow(<Header/>);
        expect(wrapper.find('.App-header')).toHaveLength(1);
    })

    
});