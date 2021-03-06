const customColorCode = `
<NumberCounter
  from={this.state.simpleCounter.from}
  to={this.state.simpleCounter.to}
  style={{ color: 'violet' }}
/>
`;

const customClassCode = `
<NumberCounter
  from={this.state.simpleCounter.from}
  to={this.state.simpleCounter.to}
  className="bg-dark p-3"
/>
`;

const customSizeCode = `
<NumberCounter
  from={this.state.simpleCounter.from}
  to={this.state.simpleCounter.to}
  small
/>

<NumberCounter
  from={this.state.simpleCounter.from}
  to={this.state.simpleCounter.to}
  medium
/>

<NumberCounter
  from={this.state.simpleCounter.from}
  to={this.state.simpleCounter.to}
  large
/>

<NumberCounter
  from={this.state.simpleCounter.from}
  to={this.state.simpleCounter.to}
  style={{ fontSize: '75px' }}
/>
`;

const customThemeCode = `
<NumberCounter
  from={this.state.simpleCounter.from}
  to={this.state.simpleCounter.to}
  primary
/>
<NumberCounter
  from={this.state.simpleCounter.from}
  to={this.state.simpleCounter.to}
  secondary
/>

<NumberCounter
  from={this.state.simpleCounter.from}
  to={this.state.simpleCounter.to}
  dark
/>

<NumberCounter
  from={this.state.simpleCounter.from}
  to={this.state.simpleCounter.to}
  light
/>

<NumberCounter
  from={this.state.simpleCounter.from}
  to={this.state.simpleCounter.to}
  info
/>

<NumberCounter
  from={this.state.simpleCounter.from}
  to={this.state.simpleCounter.to}
  warning
/>

<NumberCounter
  from={this.state.simpleCounter.from}
  to={this.state.simpleCounter.to}
  danger
/>

<NumberCounter
  from={this.state.simpleCounter.from}
  to={this.state.simpleCounter.to}
  success
/>
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

<Button
  onClick={
    () => this.setState({ directionCounter: { to: Math.floor(Math.random() * 10000) } })
  }
>
  Random
</Button>
`;

const delayCode = `
<NumberCounter
  from={this.state.simpleCounter.from}
  to={this.state.simpleCounter.to}
  delay={15000}
/>
`;

const eventCode = `
<NumberCounter
  from={this.state.simpleCounter.from}
  to={this.state.simpleCounter.to}
  onValueChange={value => console.log('Number Counter: Value Changed to: ' + value)}
  onComplete={value => console.log('Number Counter: Final Value: ' + value)}
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
  <Button
    className="ml-3"
    onClick={() => reset()}
  >
    Reset
  </Button>
)
</NumberCounter>
`;

const simpleCode = `
<NumberCounter
  from={1000}
  to={9876}
/>
`;

export {
  customColorCode,
  customClassCode,
  customSizeCode,
  customThemeCode,
  disabledCode,
  delayCode,
  dynamicCode,
  eventCode,
  intervalCode,
  resetCode,
  simpleCode,
};
