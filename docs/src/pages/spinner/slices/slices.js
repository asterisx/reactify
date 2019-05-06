/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { Spinner } from '@../../../../reactify/build';
import {
  customColorCode,
  customClassCode,
  customThemeCode,
  customSpeedCode,
  simpleCode,
  sizeCode,
} from './code-refrence';
import './slices.scss';
import DemoCard from '../../../components/demo-card';

const SlicesDemo = () => (
  <div>
    <DemoCard
      title="Simple Use"
      uniqueIdentifier="simpleUse"
      sourceCode={simpleCode}
    >
      <Spinner
        slices
      />
    </DemoCard>

    <DemoCard
      title="Size"
      uniqueIdentifier="sizeUse"
      sourceCode={sizeCode}
    >
      <h6>small</h6>
      <Spinner
        slices
        small
      />

      <h6 className="pt-3">
            medium
        {' '}
        <b className="pl-3">default</b>
      </h6>
      <Spinner
        slices
        medium
      />

      <h6 className="pt-3">large</h6>
      <Spinner
        slices
        large
      />

      <h6 className="pt-3">{'style={{ fontSize: \'75px\' }}'}</h6>
      <Spinner
        slices
        style={{ fontSize: '75px' }}
      />
    </DemoCard>

    <DemoCard
      title="Custom Color (any valid CSS solor)"
      uniqueIdentifier="customColorUse"
      sourceCode={customColorCode}
    >
      <Spinner
        slices
        style={{ color: 'violet' }}
      />
    </DemoCard>

    <DemoCard
      title="Themes"
      uniqueIdentifier="themeUse"
      sourceCode={customThemeCode}
    >
      <h6>Primary</h6>
      <Spinner
        slices
        primary
      />

      <h6>Secondary</h6>
      <Spinner
        slices
        secondary
      />

      <h6 className="pt-3">Dark</h6>
      <Spinner
        slices
        dark
      />

      <h6 className="pt-3">Light</h6>
      <Spinner
        slices
        light
      />

      <h6 className="pt-3">Info</h6>
      <Spinner
        slices
        info
      />

      <h6 className="pt-3">Warning</h6>
      <Spinner
        slices
        warning
      />

      <h6 className="pt-3">Danger</h6>
      <Spinner
        slices
        danger
      />

      <h6 className="pt-3">Success</h6>
      <Spinner
        slices
        success
      />
    </DemoCard>

    <DemoCard
      title="Controlling Speed"
      uniqueIdentifier="customSpeedUse"
      sourceCode={customSpeedCode}
    >
      <h6 className="mt-3 mb-3">Slow</h6>
      <Spinner
        slices
        style={{ animationDuration: '3s' }}
      />

      <h6 className="mt-3 mb-3">Fast</h6>
      <Spinner
        slices
        style={{ animationDuration: '500ms' }}
      />
    </DemoCard>

    <DemoCard
      title="Custom Class"
      uniqueIdentifier="customClassUse"
      sourceCode={customClassCode}
    >
      <Spinner
        slices
        className="bg-dark"
      />
    </DemoCard>
  </div>
);

export default SlicesDemo;
