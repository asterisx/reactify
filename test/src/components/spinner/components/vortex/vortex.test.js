import React from 'react';
import { Spinner, Constants } from '../../../../../../reactify-ui/build';
import { mount } from 'enzyme';
import { matchers } from 'jest-emotion';

expect.extend(matchers);

describe('Spinner Slices Component', () => {
    it('renders correctly', () => {
        const mountWrapper = mount(<Spinner vortex/>);
        expect(mountWrapper).toBeDefined();
    });

    describe('props', () => {
        it('should have animation duration prop', () => {
            const animationDuration = "1s";
            const mountWrapper = mount(<Spinner wave style={{animationDuration}} />);
            const spinnerSpan = mountWrapper.findWhere(n => n.name() === 'span');
            expect(spinnerSpan).toHaveStyleRule('animation', expect.stringContaining(animationDuration), { target: ':before'});
            expect(spinnerSpan).toHaveStyleRule('animation', expect.stringContaining(animationDuration), { target: ':after'});
        })

        describe('should have correct theme when theme prop is passed', () => {
            let ThemeColors = Constants.defaultThemeColors;
            Object.keys(ThemeColors).map(key => {
                it(`${key} theme`, () => {
                    const props = {};
                    props[key] = true;
                    const mountWrapper = mount(<Spinner vortex {...props}></Spinner>);
                    const spinnerSpan = mountWrapper.findWhere(n => n.name() === 'span');
                    expect(spinnerSpan).toHaveStyleRule('border', expect.stringContaining(ThemeColors[key].color));
                });
            });
        });
    });
});