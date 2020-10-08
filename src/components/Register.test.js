import {configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Register from './Register';
import React from 'react';
import TextFieldGroup from './TextFieldGroup';
import Landing from './Landing';

configure({adapter:new Adapter()});

describe('<Register />', ()=>{
    let wrapper;
    beforeEach(()=>{
        wrapper = shallow(<Register/>);
    })

    it('Should render 5 <Input/> Items', ()=>{
        wrapper = shallow(<Register/>);
        expect(wrapper.find(TextFieldGroup)).toHaveLength(5)
    });

    it('Should have a submit button', ()=>{
        wrapper = shallow(<Register/>);
        expect(wrapper.find("submit"));
        
    })
    it('Should have a username input', ()=>{
        wrapper = shallow(<Register/>);
        expect(wrapper.find("username"))
    })
    it('Should have an email input', ()=>{
        wrapper = shallow(<Register/>);
        expect(wrapper.find("input"))
    })
    it('Should have a password input', ()=>{
        wrapper = shallow(<Register/>);
        expect(wrapper.find("password"))
    })
    it('Should have a username input', ()=>{
        wrapper = shallow(<Register/>);
        expect(wrapper.find("username"))
    })
    it('Should have a password2 input', ()=>{
        wrapper = shallow(<Register/>);
        expect(wrapper.find("password2"))
    });
    it("should render a <Landing />", () => {
        expect(wrapper.find(<Landing/>));   // SUCCESS
      });
});