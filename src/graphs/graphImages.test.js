import React from 'react';
import {configure, shallow, mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import GraphImages from './graphImages';

configure({adapter: new Adapter()});
describe('<GraphImages />', () => {
    let component;
    beforeEach(()=>{
        component = shallow(<GraphImages />)
    });

    it('should have div tag', ()=>{
        expect(component).toHaveLength(1);
    });

    it('should render h2 tags', ()=>{
        expect(component.find('h2')).toHaveLength(4);
    });
    
    it('should render <PieChart> tag', ()=>{
        expect(component.find('PieChart')).toHaveLength(1);
    })

    it('should render <BarChart> tag', ()=>{
        expect(component.find('BarChart')).toHaveLength(1);
    })

    it('should render <LineChart> tag', ()=>{
        expect(component.find('LineChart')).toHaveLength(1);
    })

    it('should render <AreaChart> tag', ()=>{
        expect(component.find('AreaChart')).toHaveLength(1);
    })
});
