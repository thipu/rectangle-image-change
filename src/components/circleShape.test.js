import React from 'react';
import {configure, shallow, mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import CircleShape from './circleShape';


configure({adapter: new Adapter()});
describe('<CircleShape />', () => {
  it('should have div tag', ()=>{
      const component = shallow(<CircleShape />);
      console.log(component);
        expect(component).toHaveLength(1);
    });
    it('should render svg tag', ()=>{
        const component = shallow(<CircleShape />);
        expect(component.find('svg')).toHaveLength(1);
    });

});

describe('<CircleShape />', () => {
    it('should have <button> tag', ()=>{
        const component = mount(<CircleShape />);
        const button = component.find('button');
        button.simulate('click');
      });
  });
