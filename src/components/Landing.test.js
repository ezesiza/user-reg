import {configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Landing from './Landing';
import React from 'react';
import { Link } from "react-router-dom";

configure({adapter:new Adapter()});

describe('<Landing />', ()=>{
    let wrapper;
    beforeEach(()=>{
        wrapper = shallow(<Landing/>);
    });

    it('Should have a Register button', ()=>{
        wrapper = shallow(<Landing/>);
        expect(wrapper.find("Link"));
        expect(wrapper.contains(<Link to="/register"> Register
        </Link>));

    });
});