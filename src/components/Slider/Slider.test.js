import React, { Component } from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Slider from './Slider';

configure({adapter: new Adapter()});

describe('<Slider/>', () => {
   

    it('should render slider', () => {
        const wrapper = shallow(<Slider/>);
        expect(wrapper.find('.slider')).toHaveLength(1);
    })

    
});