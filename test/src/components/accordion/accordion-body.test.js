import React from 'react';
import { Accordion } from '@../../../../reactify/build';
import { mount } from 'enzyme';
import { matchers } from 'jest-emotion';
import sinon from 'sinon';
import { displaysChildren } from '../../common';

expect.extend(matchers);

describe('Accordion.Body Component', () => {
    it('renders correctly', () => {
        const mountWrapper = mount(<Accordion.Body />);
        expect(mountWrapper).toBeDefined();
    });

    displaysChildren(<Accordion.Body></Accordion.Body>);
});