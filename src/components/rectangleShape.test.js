import React from 'react';
import {configure, shallow, mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import RectangleShape from "./rectangleShape";

configure({adapter: new Adapter()});
describe('<RectangleShape />', () => {
  it('should have <button> tag', ()=>{
      const component = shallow(<RectangleShape />);
      console.log(component);
        expect(component).toHaveLength(1);
    });
    it('should render svg tag', ()=>{
        const component = shallow(<RectangleShape />);
        expect(component.find('svg')).toHaveLength(1);
    });

});

describe('<RectangleShape />', () => {
    it('should have <button> tag', ()=>{
        const component = mount(<RectangleShape />);
        const button = component.find('button');
        button.simulate('click');
      });
  });
