import React from 'react';
import { Spinner, Constants } from '../../../../../../reactify-ui/build';
import { mount } from 'enzyme';
import { matchers } from 'jest-emotion';

expect.extend(matchers);

describe('Spinner Bars Component', () => {
    it('renders correctly', () => {
        const mountWrapper = mount(<Spinner bars/>);
        expect(mountWrapper).toBeDefined();
    });

    describe('props', () => {
        describe('should have correct theme when theme prop is passed', () => {
            let ThemeColors = Constants.defaultThemeColors;
            Object.keys(ThemeColors).map(key => {
                it(`${key} theme`, () => {
                    const props = {};
                    props[key] = true;
                    const mountWrapper = mount(<Spinner bars {...props}></Spinner>);
                    const spinnerSpan = mountWrapper.findWhere(n => n.name() === 'span');
                    expect(spinnerSpan).toHaveStyleRule('background-color', ThemeColors[key].color);
                });
            });
        });
    });
});