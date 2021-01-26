import React from 'react';
import InnerLayout from './inner-page';
import Header from '../header'
import InnerFooter from '../inner-footer'
import Notification from '../notification'
import {shallow} from "enzyme";

describe('InnerLayout component <InnerLayout/>', () => {
    it('render', () => {
        const component = shallow(<InnerLayout className="some-class"/>)

        expect(component.length).toBe(1);
    });

    it('have class', () => {
        const component = shallow(<InnerLayout className="some-class"/>)
        const wrapper = component.find('div.content-wrapper--inner-page');

        expect(component.hasClass('some-class')).toBeTruthy();
        expect(wrapper.length).toBe(1);
    });

    it('have path', () => {
        const component = shallow(<InnerLayout className="some-class" path='/anywhere'/>)
        const innerFooter = component.find(InnerFooter);

        expect(innerFooter.prop('path')).toBe('/anywhere');
    });

    it('render children elements', () => {
        const component = shallow(<InnerLayout>
            <div className="some-element"/>
        </InnerLayout>)

        const children = component.find('div.some-element');

        expect(children.length).toBe(1);
    });

    it('have <Header/> component', () => {
        const component = shallow(<InnerLayout/>)
        const header = component.find(Header);

        expect(header.length).toBe(1);
    });

    it('have <InnerFooter/> component', () => {
        const component = shallow(<InnerLayout/>)
        const innerFooter = component.find(InnerFooter);

        expect(innerFooter.length).toBe(1);
    });

    it('have <Notification/> component', () => {
        const component = shallow(<InnerLayout/>)
        const notification = component.find(Notification);

        expect(notification.length).toBe(1);
    });
});
