/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { Text } from '../../../../reactify-ui/build';
import {
  customColorCode,
  customClassCode,
  customSizeCode,
  customThemeCode,
  simpleCode,
} from './code-refrence';

import {
  customColorLink,
  customClassLink,
  customSizeLink,
  customThemeLink,
  simpleLink,
} from './external-sample-links';

import {
  BottomNav,
  ComponentInfo,
  Constants,
  DemoPage,
  DemoCard,
  withHeader,
} from '../../../common';

const bottomNavLinks = {
  prevLink: {
    text: 'Tabs',
    link: `${Constants.componentsPath}/tabs`,
  },
  nextLink: {
    text: 'Timer',
    link: `${Constants.componentsPath}/timer`,
  },
};

const TextDemo = () => (
  <DemoPage componentName="Text">
    <ComponentInfo
      productionReady
      responsive
      githubLink={`${Constants.githubComponentsPath}/text`}
    />
    <DemoCard
      title="Simple Use"
      sourceCode={simpleCode}
      externalSampleLink={simpleLink}
    >
      <Text>A simple text</Text>
    </DemoCard>

    <DemoCard
      title="Size"
      sourceCode={customSizeCode}
      externalSampleLink={customSizeLink}
    >
      <h6>small</h6>
      <Text small>A small text</Text>

      <h6 className="pt-3">
            medium
        {' '}
        <b className="pl-3">default</b>
      </h6>
      <Text medium>A medium text</Text>

      <h6 className="pt-3">large</h6>
      <Text large>A large text</Text>

      <h6 className="pt-3">{'style={{ fontSize: \'75px\' }}'}</h6>
      <Text style={{ fontSize: '75px' }}>A custom size text</Text>
    </DemoCard>

    <DemoCard
      title="Custom Color (any valid CSS solor)"
      sourceCode={customColorCode}
      externalSampleLink={customColorLink}
    >
      <Text style={{ color: 'violet' }}>A custom color text</Text>
    </DemoCard>

    <DemoCard
      title="Themes"
      sourceCode={customThemeCode}
      externalSampleLink={customThemeLink}
    >
      <h6>Primary</h6>
      <Text primary>A primary text</Text>

      <h6>Secondary</h6>
      <Text secondary>A secondary text</Text>

      <h6 className="pt-3">Dark</h6>
      <Text dark>A dark text</Text>

      <h6 className="pt-3">Light</h6>
      <Text light>A light text</Text>

      <h6 className="pt-3">Info</h6>
      <Text info>A info text</Text>

      <h6 className="pt-3">Warning</h6>
      <Text warning>A warning text</Text>

      <h6 className="pt-3">Danger</h6>
      <Text danger>A danger text</Text>

      <h6 className="pt-3">Success</h6>
      <Text success>A success text</Text>
    </DemoCard>

    <DemoCard
      title="Custom Class"
      sourceCode={customClassCode}
      externalSampleLink={customClassLink}
    >
      <Text className="bg-dark text-light p-1">A custom class text</Text>
    </DemoCard>

    <BottomNav
      className="mt-4 mb-4"
      prevLinkText={bottomNavLinks.prevLink.text}
      prevLink={bottomNavLinks.prevLink.link}
      nextLinkText={bottomNavLinks.nextLink.text}
      nextLink={bottomNavLinks.nextLink.link}
    />
  </DemoPage>
);

export default withHeader(TextDemo);
