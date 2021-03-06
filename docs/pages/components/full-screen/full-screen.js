/* eslint-disable max-len */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { FullScreen, Button } from '../../../../reactify-ui/build';
import {
  childrenCode,
  contractOnEscapeKeyCode,
  customClassCode,
  disabledCode,
  expandedDefaultCode,
  expandResetProgramaticallyCode,
  hideIconCode,
  simpleCode,
} from './code-refrence';

import {
  childrenLink,
  contractOnEscapeKeyLink,
  customClassLink,
  disabledLink,
  expandedDefaultLink,
  expandResetProgramaticallyLink,
  hideIconLink,
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
    text: 'File Upload',
    link: `${Constants.componentsPath}/file-upload`,
  },
  nextLink: {
    text: 'Group Toggle',
    link: `${Constants.componentsPath}/group-toggle`,
  },
};

const FullScreenDemo = () => (
  <DemoPage componentName="Full Screen">
    <ComponentInfo
      productionReady
      responsive
      githubLink={`${Constants.githubComponentsPath}/full-screen`}
    />
    <DemoCard
      title="Simple Use"
      sourceCode={simpleCode}
      externalSampleLink={simpleLink}
    >
      <FullScreen>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
      </FullScreen>
    </DemoCard>

    <DemoCard
      title="Expand reset programatically"
      sourceCode={expandResetProgramaticallyCode}
      externalSampleLink={expandResetProgramaticallyLink}
    >
      <FullScreen hideIcon>
        {({ expand, reset }) => (
          <div>
            <Button success onClick={expand}>Expand</Button>
            <Button danger className="ml-3" onClick={reset}>Reset</Button>
          </div>
        )}
      </FullScreen>
    </DemoCard>


    <DemoCard
      title="Expanded Default"
      sourceCode={expandedDefaultCode}
      externalSampleLink={expandedDefaultLink}
    >
      <FullScreen expanded>
        {({ reset }) => (
          <div>
            <div>This full screen component is expanded by default</div>
            <Button danger className="ml-3 align-self-center" onClick={reset}>Close</Button>
          </div>
        )}
      </FullScreen>
    </DemoCard>

    <DemoCard
      title="Hide Icon"
      sourceCode={hideIconCode}
      externalSampleLink={hideIconLink}
    >
      <FullScreen hideIcon>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
      </FullScreen>
    </DemoCard>

    <DemoCard
      title="Disabled"
      sourceCode={disabledCode}
      externalSampleLink={disabledLink}
    >
      <FullScreen disabled>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
      </FullScreen>
    </DemoCard>

    <DemoCard
      title="Children"
      sourceCode={childrenCode}
      externalSampleLink={childrenLink}
    >
      <FullScreen className="p-2">
        <div className="card text-dark" style={{ maxWidth: '18rem' }}>
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href="#" className="btn btn-primary">Go somewhere</a>
          </div>
        </div>
      </FullScreen>
    </DemoCard>

    <DemoCard
      title="Contract on Esc key"
      sourceCode={contractOnEscapeKeyCode}
      externalSampleLink={contractOnEscapeKeyLink}
    >
      <FullScreen contractOnEscapeKey>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
      </FullScreen>
    </DemoCard>

    <DemoCard
      title="Custom Class"
      sourceCode={customClassCode}
      externalSampleLink={customClassLink}
    >
      <FullScreen className="text-light bg-dark p-2 shadow">
        Custom Class FullScreen
      </FullScreen>
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

export default withHeader(FullScreenDemo);
