(window.webpackJsonp=window.webpackJsonp||[]).push([["1aaa"],{RdJ6:function(e,t,n){"use strict";n.r(t),n.d(t,"disabledCode",function(){return o}),n.d(t,"customColorCode",function(){return a}),n.d(t,"customThemeCode",function(){return l}),n.d(t,"customSizesCode",function(){return r}),n.d(t,"onCloseCode",function(){return i}),n.d(t,"simpleCode",function(){return s});var i="\n<Chip onCloseClick={() => alert('Close Clicked')}>Item 1</Chip>\n",a="\n<Chip style={{ backgroundColor: 'violet' }}>Custom Color</Chip>\n",r="\n<Chip small>Item 1</Chip>\n\n<Chip medium>Item 1</Chip>\n\n<Chip large>Item 1</Chip>\n\n<Chip style={{ fontSize: '40px' }}>Item 1</Chip>\n",l="\n<Chip primary>Item 1</Chip>\n\n<Chip secondary>Item 1</Chip>\n\n<Chip dark>Item 1</Chip>\n\n<Chip light>Item 1</Chip>\n\n<Chip info>Item 1</Chip>\n\n<Chip warning>Item 1</Chip>\n\n<Chip danger>Item 1</Chip>\n\n<Chip success>Item 1</Chip>\n",o="\n<Chips disabled>\n  <Chip key={1}>Item 1</Chip>\n  <Chip key={2}>Item 2</Chip>\n  <Chip key={3}>Item 3</Chip>\n</Chips>\n\n<Chips>\n  <Chip disabled key={1}>Item 1</Chip>\n  <Chip key={2}>Item 2</Chip>\n  <Chip key={3}>Item 3</Chip>\n</Chips>\n\n",s="\n<Chips>\n  {this.state.simpleItems.map((si, index) => (\n    <Chip\n      key={index}\n      onCloseClick={\n    () => this.setState(prevState => ({ simpleItems: prevState.simpleItems.filter(sit => sit !== si) }))}\n    >\n      {si}\n    </Chip>\n  ))}\n</Chips>\n"},lwpx:function(e,t,n){"use strict";n.r(t);var i=n("q1tI"),a=n.n(i),r=n("gpOY"),l=n("RdJ6"),o=n("IUY8");function s(e){return(s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function m(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function p(e){return(p=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function c(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function h(e,t){return(h=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var u=function(e){function t(){var e,n,i,a,r,l,o;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var m=arguments.length,h=new Array(m),u=0;u<m;u++)h[u]=arguments[u];return i=this,n=!(a=(e=p(t)).call.apply(e,[this].concat(h)))||"object"!==s(a)&&"function"!=typeof a?c(i):a,r=c(n),o={simpleItems:["Chip 1","Chip 2","Chip 3"]},(l="state")in r?Object.defineProperty(r,l,{value:o,enumerable:!0,configurable:!0,writable:!0}):r[l]=o,n}var n,u,C;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&h(e,t)}(t,i["Component"]),n=t,(u=[{key:"render",value:function(){var e=this;return a.a.createElement("div",{className:"w-100"},a.a.createElement(o.a,{title:"Simple Use",uniqueIdentifier:"simpleUse",sourceCode:l.simpleCode},a.a.createElement(r.Chips,null,this.state.simpleItems.map(function(t,n){return a.a.createElement(r.Chip,{key:n,onCloseClick:function(){return e.setState(function(e){return{simpleItems:e.simpleItems.filter(function(e){return e!==t})}})}},t)}))),a.a.createElement(o.a,{title:"Custom Color",uniqueIdentifier:"customColorUse",sourceCode:l.customColorCode},a.a.createElement(r.Chip,{style:{backgroundColor:"violet"}},"Custom Color")),a.a.createElement(o.a,{title:"Disabled Use",uniqueIdentifier:"disabledUse",sourceCode:l.disabledCode},a.a.createElement("h6",null,"disabled"," ",a.a.createElement("b",null,"On Whole List")),a.a.createElement(r.Chips,{disabled:!0},a.a.createElement(r.Chip,{key:1},"Item 1"),a.a.createElement(r.Chip,{key:2},"Item 2"),a.a.createElement(r.Chip,{key:3},"Item 3")),a.a.createElement("h6",{className:"mt-3"},"disabled",a.a.createElement("b",{className:"ml-2"},"On List Items")),a.a.createElement(r.Chips,null,a.a.createElement(r.Chip,{disabled:!0,key:1},"Item 1"),a.a.createElement(r.Chip,{key:2},"Item 2"),a.a.createElement(r.Chip,{key:3},"Item 3"))),a.a.createElement(o.a,{title:"Custom Sizes",uniqueIdentifier:"customSizesUse",sourceCode:l.customSizesCode},a.a.createElement("h6",{className:"pt-3 pb-3"},'size="small"'),a.a.createElement(r.Chip,{small:!0},"Item 1"),a.a.createElement("h5",{className:"pt-3 pb-3"},'size="medium"',a.a.createElement("b",{className:"ml-2"},"default")),a.a.createElement(r.Chip,{medium:!0},"Item 1"),a.a.createElement("h4",{className:"pt-3 pb-3"},'size="large"'),a.a.createElement(r.Chip,{large:!0},"Item 1"),a.a.createElement("h3",{className:"pt-3 pb-3"},'size="40px"'),a.a.createElement(r.Chip,{style:{fontSize:"40px"}},"Item 1")),a.a.createElement(o.a,{title:"Theme Use",uniqueIdentifier:"themeUse",sourceCode:l.customThemeCode},a.a.createElement("h6",{className:"pt-3 pb-3"},"Primary theme"),a.a.createElement(r.Chip,{primary:!0},"Item 1"),a.a.createElement("h6",{className:"pt-3 pb-3"},"Secondary theme"),a.a.createElement(r.Chip,{secondary:!0},"Item 1"),a.a.createElement("h6",{className:"pt-3 pb-3"},"Dark theme"),a.a.createElement(r.Chip,{dark:!0},"Item 1"),a.a.createElement("h6",{className:"pt-3 pb-3"},"Light theme"),a.a.createElement(r.Chip,{light:!0},"Item 1"),a.a.createElement("h6",{className:"pt-3 pb-3"},"Info theme"),a.a.createElement(r.Chip,{info:!0},"Item 1"),a.a.createElement("h6",{className:"pt-3 pb-3"},"Warning theme"),a.a.createElement(r.Chip,{warning:!0},"Item 1"),a.a.createElement("h6",{className:"pt-3 pb-3"},"Danger theme"),a.a.createElement(r.Chip,{danger:!0},"Item 1"),a.a.createElement("h6",{className:"pt-3 pb-3"},"Success theme"),a.a.createElement(r.Chip,{success:!0},"Item 1")),a.a.createElement(o.a,{title:"onCloseEvent",uniqueIdentifier:"onCloseChangeUse",sourceCode:l.onCloseCode},a.a.createElement(r.Chip,{onCloseClick:function(){return alert("Close Clicked")}},"Item 1")))}}])&&m(n.prototype,u),C&&m(n,C),t}();t.default=Object(o.b)(u)},mUJT:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/chips/chips",function(){var e=n("lwpx");return{page:e.default||e}}])}},[["mUJT","5d41","9da1"]]]);