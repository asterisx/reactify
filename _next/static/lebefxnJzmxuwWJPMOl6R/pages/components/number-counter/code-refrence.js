(window.webpackJsonp=window.webpackJsonp||[]).push([["1627"],{WtgF:function(t,n,e){"use strict";e.r(n),e.d(n,"customColorCode",function(){return o}),e.d(n,"customClassCode",function(){return r}),e.d(n,"customSizeCode",function(){return s}),e.d(n,"customThemeCode",function(){return u}),e.d(n,"disabledCode",function(){return i}),e.d(n,"delayCode",function(){return C}),e.d(n,"dynamicCode",function(){return m}),e.d(n,"eventCode",function(){return a}),e.d(n,"intervalCode",function(){return l}),e.d(n,"resetCode",function(){return f}),e.d(n,"simpleCode",function(){return p});var o="\n<NumberCounter\n  from={this.state.simpleCounter.from}\n  to={this.state.simpleCounter.to}\n  style={{ color: 'violet' }}\n/>\n",r='\n<NumberCounter\n  from={this.state.simpleCounter.from}\n  to={this.state.simpleCounter.to}\n  className="bg-dark p-3"\n/>\n',s="\n<NumberCounter\n  from={this.state.simpleCounter.from}\n  to={this.state.simpleCounter.to}\n  small\n/>\n\n<NumberCounter\n  from={this.state.simpleCounter.from}\n  to={this.state.simpleCounter.to}\n  medium\n/>\n\n<NumberCounter\n  from={this.state.simpleCounter.from}\n  to={this.state.simpleCounter.to}\n  large\n/>\n\n<NumberCounter\n  from={this.state.simpleCounter.from}\n  to={this.state.simpleCounter.to}\n  style={{ fontSize: '75px' }}\n/>\n",u="\n<NumberCounter\n  from={this.state.simpleCounter.from}\n  to={this.state.simpleCounter.to}\n  primary\n/>\n<NumberCounter\n  from={this.state.simpleCounter.from}\n  to={this.state.simpleCounter.to}\n  secondary\n/>\n\n<NumberCounter\n  from={this.state.simpleCounter.from}\n  to={this.state.simpleCounter.to}\n  dark\n/>\n\n<NumberCounter\n  from={this.state.simpleCounter.from}\n  to={this.state.simpleCounter.to}\n  light\n/>\n\n<NumberCounter\n  from={this.state.simpleCounter.from}\n  to={this.state.simpleCounter.to}\n  info\n/>\n\n<NumberCounter\n  from={this.state.simpleCounter.from}\n  to={this.state.simpleCounter.to}\n  warning\n/>\n\n<NumberCounter\n  from={this.state.simpleCounter.from}\n  to={this.state.simpleCounter.to}\n  danger\n/>\n\n<NumberCounter\n  from={this.state.simpleCounter.from}\n  to={this.state.simpleCounter.to}\n  success\n/>\n",i="\n<NumberCounter\n  from={this.state.simpleCounter.from}\n  to={this.state.simpleCounter.to}\n  disabled\n/>\n",m="\n<NumberCounter\n  from={this.state.directionCounter.from}\n  to={this.state.directionCounter.to}\n/>\n\n<Button\n  onClick={\n    () => this.setState({ directionCounter: { to: Math.floor(Math.random() * 10000) } })\n  }\n>\n  Random\n</Button>\n",C="\n<NumberCounter\n  from={this.state.simpleCounter.from}\n  to={this.state.simpleCounter.to}\n  delay={15000}\n/>\n",a="\n<NumberCounter\n  from={this.state.simpleCounter.from}\n  to={this.state.simpleCounter.to}\n  onValueChange={value => console.log('Number Counter: Value Changed to: ' + value)}\n  onComplete={value => console.log('Number Counter: Final Value: ' + value)}\n/>\n",l="\n<NumberCounter\n  from={this.state.simpleCounter.from}\n  to={this.state.simpleCounter.to}\n  interval={1000}\n/>\n",f='\n<NumberCounter\n  from={this.state.simpleCounter.from}\n  to={this.state.simpleCounter.to}\n  interval={100}\n>\n{reset => (\n  <Button\n    className="ml-3"\n    onClick={() => reset()}\n  >\n    Reset\n  </Button>\n)\n</NumberCounter>\n',p="\n<NumberCounter\n  from={1000}\n  to={9876}\n/>\n"},YBe6:function(t,n,e){(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/number-counter/code-refrence",function(){var t=e("WtgF");return{page:t.default||t}}])}},[["YBe6","5d41"]]]);