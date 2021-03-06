/* eslint-disable no-console */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { Accordion, Paper } from '../../../../reactify-ui/build';
import {
  customHeaderCode,
  propsCode,
  simpleCode,
  singularCode,
} from './code-refrence';

import {
  customHeaderLink,
  propsLink,
  simpleUseLink,
  singularUseLink,
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
    text: undefined,
    link: undefined,
  },
  nextLink: {
    text: 'Alert',
    link: `${Constants.componentsPath}/alert`,
  },
};

const AccordionDemo = () => (
  <DemoPage componentName="Accordion">
    <ComponentInfo
      productionReady
      responsive
      githubLink={`${Constants.githubComponentsPath}/accordion`}
    />

    <DemoCard
      title="Simple Use (Themed)"
      sourceCode={simpleCode}
      externalSampleLink={simpleUseLink}
    >
      <Accordion success>
        <Accordion.Item index={1} warning>
          <Accordion.Header>
            Accordion 1
          </Accordion.Header>
          <Accordion.Body>
            A lot of things can be here.
            A paragraph or some other content, a component too and other things too...
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item index={2} danger>
          <Accordion.Header>
            Accordion 2
          </Accordion.Header>
          <Accordion.Body>
            A lot of things can be here.
            A paragraph or some other content, a component too and other things too...
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item index={3}>
          <Accordion.Header>
            Accordion 3
          </Accordion.Header>
          <Accordion.Body>
            A lot of things can be here.
            A paragraph or some other content, a component too and other things too...
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </DemoCard>

    <DemoCard
      title="Singular"
      sourceCode={singularCode}
      externalSampleLink={singularUseLink}
    >
      <Accordion multiple={false}>
        <Accordion.Item index={1}>
          <Accordion.Header>
            Accordion 1
          </Accordion.Header>
          <Accordion.Body>
            A lot of things can be here.
            A paragraph or some other content, a component too and other things too...
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item index={2}>
          <Accordion.Header>
            Accordion 2
          </Accordion.Header>
          <Accordion.Body>
            A lot of things can be here.
            A paragraph or some other content, a component too and other things too...
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item index={3}>
          <Accordion.Header>
            Accordion 3
          </Accordion.Header>
          <Accordion.Body>
            A lot of things can be here.
            A paragraph or some other content, a component too and other things too...
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </DemoCard>

    <DemoCard
      title="Props"
      sourceCode={propsCode}
      externalSampleLink={propsLink}
    >
      <Accordion onChange={({ index, opened }) => { console.log(index, opened); }}>
        <Accordion.Item index={1} open>
          <Accordion.Header>
            Accordion 1
          </Accordion.Header>
          <Accordion.Body>
            This is open by default.
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item index={2} disabled>
          <Accordion.Header>
            This is a disabled header
          </Accordion.Header>
          <Accordion.Body>
            A lot of things can be here.
            A paragraph or some other content, a component too and other things too...
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item index={3}>
          <Accordion.Header>
            Check the console for events
          </Accordion.Header>
          <Accordion.Body>
            A lot of things can be here.
            A paragraph or some other content, a component too and other things too...
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item index={4}>
          <Accordion.Header showIcon={false}>
            Without Icon
          </Accordion.Header>
          <Accordion.Body>
            A lot of things can be here.
            A paragraph or some other content, a component too and other things too...
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </DemoCard>

    <DemoCard
      title="Custom Header"
      sourceCode={customHeaderCode}
      externalSampleLink={customHeaderLink}
    >
      <Accordion onChange={({ index, opened }) => { console.log(index, opened); }}>
        <Accordion.Item index={1}>
          <Accordion.Header>
            {({ toggleItem, disabled }) => <Paper className="w-100 p-3 cursor-pointer" onClick={toggleItem} disabled={disabled}>Accordion 1</Paper>}
          </Accordion.Header>
          <Accordion.Body>
            A lot of things can be here.
            A paragraph or some other content, a component too and other things too...
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item index={2}>
          <Accordion.Header>
            {({ toggleItem, disabled }) => <Paper warning className="w-100 p-3 cursor-pointer" onClick={toggleItem} disabled={disabled}>Accordion 2</Paper>}
          </Accordion.Header>
          <Accordion.Body>
            A lot of things can be here.
            A paragraph or some other content, a component too and other things too...
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item index={3}>
          <Accordion.Header>
            {({ toggleItem, disabled }) => <Paper danger className="w-100 p-3 cursor-pointer" onClick={toggleItem} disabled={disabled}>Accordion 3</Paper>}
          </Accordion.Header>
          <Accordion.Body>
            A lot of things can be here.
            A paragraph or some other content, a component too and other things too...
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
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

export default withHeader(AccordionDemo);
