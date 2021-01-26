import React from 'react';
import ErrorLayout from './error-page';
import Header from '../header'
import {shallow} from "enzyme";

describe('ErrorLayout component <ErrorLayout/>', () => {
    it('render', () => {
        const component = shallow(<ErrorLayout/>)
        const wrapper = component.find('div.content-wrapper--error-page');

        expect(wrapper.length).toBe(1);
    });

    it('have class', () => {
        const component = shallow(<ErrorLayout/>)

        const wrapper = component.find('div.content-wrapper--error-page');

        expect(component.hasClass('error-page')).toBeTruthy();
        expect(wrapper.length).toBe(1);
    });

    it('render children elements', () => {
        const component = shallow(<ErrorLayout>
            <div className="some-element"/>
        </ErrorLayout>)

        const children = component.find('div.some-element');

        expect(children.length).toBe(1);
    });

    it('have <Header/> component', () => {
        const component = shallow(<ErrorLayout/>)
        const header = component.find(Header);

        expect(header.length).toBe(1);
    });
});

/**
 * План тестирования компонента
 *
 * 1. Рендеринг без ошибок
 * 2. Содержит необходимые классы, для правильного отображения UI
 * 3. Отображает дочерние элементы
 * 4. Содержит другие компоненты
 * 4. Содержит определенные элементы DOM
 * 5. useEffect (componentDidMount)
 * 6. useState (setState)
 * 7. events (onClick, onSubmit, onInput, onHover, other)
 * ...
 */

