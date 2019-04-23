const customColorCode = `
<NumberCounter
  from={this.state.simpleCounter.from}
  to={this.state.simpleCounter.to}
  color="violet"
/>
`;

const customClassCode = `
<NumberCounter
  from={this.state.simpleCounter.from}
  to={this.state.simpleCounter.to}
  className="bg-dark p-3"
/>
`;

const customThemeCode = `
<NumberCounter
  from={this.state.simpleCounter.from}
  to={this.state.simpleCounter.to}
  theme="default"
/>

<NumberCounter
  from={this.state.simpleCounter.from}
  to={this.state.simpleCounter.to}
  theme="dark"
/>

<NumberCounter
  from={this.state.simpleCounter.from}
  to={this.state.simpleCounter.to}
  theme="light"
/>

<NumberCounter
  from={this.state.simpleCounter.from}
  to={this.state.simpleCounter.to}
  theme="info"
/>

<NumberCounter
  from={this.state.simpleCounter.from}
  to={this.state.simpleCounter.to}
  theme="warning"
/>

<NumberCounter
  from={this.state.simpleCounter.from}
  to={this.state.simpleCounter.to}
  theme="danger"
/>

<NumberCounter
  from={this.state.simpleCounter.from}
  to={this.state.simpleCounter.to}
  theme="success"
/>
`;

const closeProgramaticallyCode = `
<UserProfile
  imgPath="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
  userName="Joe"
>
{closeTray => (
  <button
    className="btn btn-dark p-5"
    onClick={() => closeTray}
    type="button"
  >
Close Tray
  </button>
)}
</UserProfile>
`;

const disabledCode = `
<NumberCounter
  from={this.state.simpleCounter.from}
  to={this.state.simpleCounter.to}
  disabled
/>
`;

const dynamicCode = `
<NumberCounter
  from={this.state.directionCounter.from}
  to={this.state.directionCounter.to}
/>

<button
  type="button"
  className="btn btn-primary d-inline"
  onClick={
    () => this.setState({ directionCounter: { to: Math.floor(Math.random() * 10000) } })
  }
>
  Random
</button>
`;

const delayCode = `
<NumberCounter
  from={this.state.simpleCounter.from}
  to={this.state.simpleCounter.to}
  delay={15000}
/>
`;

const intervalCode = `
<NumberCounter
  from={this.state.simpleCounter.from}
  to={this.state.simpleCounter.to}
  interval={1000}
/>
`;

const resetCode = `
<NumberCounter
  from={this.state.simpleCounter.from}
  to={this.state.simpleCounter.to}
  interval={100}
>
{reset => (
  <button
    type="button"
    className="btn btn-primary d-block ml-3"
    onClick={() => reset()}
  >
    Reset
  </button>
)}
</NumberCounter>
`;

const simpleCode = `
<NumberCounter
  from={1000}
  to={9876}
/>
`;

const sizeCode = `
<NumberCounter
  from={this.state.simpleCounter.from}
  to={this.state.simpleCounter.to}
  size="small"
/>

<NumberCounter
  from={this.state.simpleCounter.from}
  to={this.state.simpleCounter.to}
  size="medium"
/>

<NumberCounter
  from={this.state.simpleCounter.from}
  to={this.state.simpleCounter.to}
  size="large"
/>

<NumberCounter
  from={this.state.simpleCounter.from}
  to={this.state.simpleCounter.to}
  size="75px"
/>
`;


export {
  customColorCode,
  customClassCode,
  customThemeCode,
  closeProgramaticallyCode,
  disabledCode,
  delayCode,
  dynamicCode,
  intervalCode,
  resetCode,
  simpleCode,
  sizeCode,
};