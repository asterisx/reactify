/* eslint-disable no-console */
/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { HeatMap } from '../../../../reactify-ui/build';
import {
  customThemeCode,
  declarativeCode,
  disabledCode,
  eventsCode,
  simpleCode,
} from './code-refrence';

import {
  customThemeLink,
  declarativeLink,
  disabledLink,
  eventsLink,
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
    text: 'Group Toggle',
    link: `${Constants.componentsPath}/group-toggle`,
  },
  nextLink: {
    text: 'Heirarchy View',
    link: `${Constants.componentsPath}/heirarchy-view`,
  },
};

const items = [
  [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
  [7, 8, 9, 10, 11, 12, 1, 2, 3, 4, 5, 6],
  [13, 14, 15, 16, 17, 18, 1, 4, 5, 7, 8, 4],
  [1, 4, 5, 7, 8, 4, 13, 14, 15, 16, 17, 18],
];

const HeatMapDemo = () => (
  <DemoPage componentName="HeatMap">
    <ComponentInfo
      productionReady
      responsive
      githubLink={`${Constants.githubComponentsPath}/heat-map`}
    />
    <DemoCard
      title="Simple Use"
      sourceCode={simpleCode}
      externalSampleLink={simpleLink}
    >
      <h6>With explicit height and width</h6>
      <HeatMap items={items} className="fixed-h-w" />

      <h6>Responsive</h6>
      <HeatMap items={items} />
    </DemoCard>

    <DemoCard
      title="Disabled"
      sourceCode={disabledCode}
      externalSampleLink={disabledLink}
    >
      <h6>When disabled, cells are not clickable</h6>
      <HeatMap items={items} disabled />
    </DemoCard>

    <DemoCard
      title="Themes"
      sourceCode={customThemeCode}
      externalSampleLink={customThemeLink}
    >
      <h6>The following are responsive</h6>
      <h6>Primary</h6>
      <HeatMap primary items={items} />

      <h6 className="pt-3">Secondary</h6>
      <HeatMap secondary items={items} />

      <h6 className="pt-3">Dark</h6>
      <HeatMap dark items={items} />

      <h6 className="pt-3">Light</h6>
      <HeatMap light items={items} />

      <h6 className="pt-3">Info</h6>
      <HeatMap info items={items} />

      <h6 className="pt-3">Warning</h6>
      <HeatMap warning items={items} />

      <h6 className="pt-3">Danger</h6>
      <HeatMap danger items={items} />

      <h6 className="pt-3">Success</h6>
      <HeatMap success items={items} />

      <h6 className="pt-3">Custom Color</h6>
      <HeatMap baseColor="violet" items={items} />
    </DemoCard>

    <DemoCard
      title="Events"
      sourceCode={eventsCode}
      externalSampleLink={eventsLink}
    >
      <h6>Check console for event log</h6>
      <HeatMap items={items} onCellClick={({ row, column }) => console.log(`row: ${row}, column: ${column}`)} />
    </DemoCard>

    <DemoCard
      title="Declaration Code"
      sourceCode={declarativeCode}
      externalSampleLink={declarativeLink}
    >
      <h6>
        Declarative code does not add any background to the heat map.
        Its upto you to add that
      </h6>
      <HeatMap>
        <HeatMap.Row key={1}>
          <HeatMap.Cell key={10}>1</HeatMap.Cell>
          <HeatMap.Cell key={11}>2</HeatMap.Cell>
          <HeatMap.Cell key={12}>3</HeatMap.Cell>
          <HeatMap.Cell key={13}>4</HeatMap.Cell>
        </HeatMap.Row>
        <HeatMap.Row key={2}>
          <HeatMap.Cell key={20}>4</HeatMap.Cell>
          <HeatMap.Cell key={21}>3</HeatMap.Cell>
          <HeatMap.Cell key={22}>2</HeatMap.Cell>
          <HeatMap.Cell key={23}>1</HeatMap.Cell>
        </HeatMap.Row>
        <HeatMap.Row key={3}>
          <HeatMap.Cell key={30}>10</HeatMap.Cell>
          <HeatMap.Cell key={31}>6</HeatMap.Cell>
          <HeatMap.Cell key={32}>5</HeatMap.Cell>
          <HeatMap.Cell key={33}>4</HeatMap.Cell>
        </HeatMap.Row>
        <HeatMap.Row key={4}>
          <HeatMap.Cell key={40}>5</HeatMap.Cell>
          <HeatMap.Cell key={41}>7</HeatMap.Cell>
          <HeatMap.Cell key={42}>2</HeatMap.Cell>
          <HeatMap.Cell key={43}>0</HeatMap.Cell>
        </HeatMap.Row>
      </HeatMap>
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

export default withHeader(HeatMapDemo);
