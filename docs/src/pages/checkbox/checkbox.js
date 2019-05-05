/* eslint-disable react/no-unescaped-entities */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { Checkbox } from '@../../../../reactify/build';
import {
  simpleCode,
  checkedCode,
  disabledCode,
  customColorCode,
  customSizeCode,
  customThemeCode,
  onChangeCode,
  labelPositionCode,
  childrenCode,
  customClassCode,
} from './code-refrence';
import './checkbox.scss';
import DemoCard from '../../components/demo-card';

const CheckboxDemo = () => (
  <div>
    <DemoCard title="Simple Use" uniqueIdentifier="simpleUse" sourceCode={simpleCode}>
      <Checkbox>This is a checkbox</Checkbox>
    </DemoCard>

    <DemoCard title="Checked" uniqueIdentifier="checkedUse" sourceCode={checkedCode}>
      <Checkbox checked>This is a checked label</Checkbox>
    </DemoCard>

    <DemoCard title="Disabled" uniqueIdentifier="disabledUse" sourceCode={disabledCode}>
      <Checkbox checked disabled>This checkbox is disabled</Checkbox>
    </DemoCard>

    <DemoCard title="Position (left, right)" uniqueIdentifier="checkboxUse" sourceCode={labelPositionCode}>
      <Checkbox>This is a checkbox with left position</Checkbox>
      <br />
      <Checkbox style={{ flexDirection: 'row-reverse' }}>This is a checkbox with right position</Checkbox>
    </DemoCard>

    <DemoCard title="Children" uniqueIdentifier="childrenUse" sourceCode={childrenCode}>
      <Checkbox checked>
        <div className="card" style={{ width: '18rem' }}>
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href="#" className="btn btn-primary">Go somewhere</a>
          </div>
        </div>
      </Checkbox>
    </DemoCard>

    <DemoCard title="Custom Color" uniqueIdentifier="customColorUse" sourceCode={customColorCode}>
      <Checkbox checked iconColor="violet">Custom Color</Checkbox>
    </DemoCard>


    <DemoCard title="Custom Class" uniqueIdentifier="customClassUse" sourceCode={customClassCode}>
      <Checkbox checked className="bg-dark p-5">This checkbox has custom class</Checkbox>
    </DemoCard>

    <DemoCard title="Custom Size" uniqueIdentifier="customSizeUse" sourceCode={customSizeCode}>
      <Checkbox small>Small Size</Checkbox>
      <br />
      <Checkbox medium>Medium Size</Checkbox>
      <br />
      <Checkbox large>Large Size</Checkbox>
      <br />
      <Checkbox style={{ fontSize: '40px' }}>{'style={{ fontSize: \'40px\' }}'}</Checkbox>
      <br />
    </DemoCard>

    <DemoCard title="Themes" uniqueIdentifier="customThemeUse" sourceCode={customThemeCode}>
      <Checkbox primary className="pb-2" checked>Primary Checkbox</Checkbox>
      <br />
      <Checkbox secondary className="pb-2" checked>Secondary Checkbox</Checkbox>
      <br />
      <Checkbox dark className="pb-2" checked>Dark Checkbox</Checkbox>
      <br />
      <Checkbox light className="pb-2" checked>Light Checkbox</Checkbox>
      <br />
      <Checkbox info className="pb-2" checked>Info Checkbox</Checkbox>
      <br />
      <Checkbox warning className="pb-2" checked>Warning Checkbox</Checkbox>
      <br />
      <Checkbox danger className="pb-2" checked>Danger Checkbox</Checkbox>
      <br />
      <Checkbox success checked>Success Checkbox</Checkbox>
      <br />
    </DemoCard>

    <DemoCard title="onChange Event" uniqueIdentifier="onChangeUse" sourceCode={onChangeCode}>
      <Checkbox onChange={val => alert(`checked: ${val}`)} />
    </DemoCard>
  </div>
);

export default CheckboxDemo;