(window.webpackJsonp=window.webpackJsonp||[]).push([["2e26"],{"E/hE":function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/radio-group",function(){var e=t("bfvE");return{page:e.default||e}}])},Ys8d:function(e,n,t){"use strict";t.r(n);var i=t("q1tI"),o=t.n(i),a=t("gpOY"),d=t("rekI"),r=t("kWaU"),p=t("IUY8"),u={prevLink:{text:"Progress Bar",link:"".concat(p.d.componentsPath,"/progress-bar")},nextLink:{text:"Radio Input",link:"".concat(p.d.componentsPath,"/radio-input")}};n.default=Object(p.g)(function(){return o.a.createElement(p.f,{componentName:"Radio Group"},o.a.createElement(p.c,{productionReady:!0,responsive:!0,githubLink:"".concat(p.d.githubComponentsPath,"/radio-group")}),o.a.createElement(p.e,{title:"Simple Use",sourceCode:d.simpleCode,externalSampleLink:r.simpleLink},o.a.createElement(a.RadioGroup,null,o.a.createElement(a.RadioInput,{index:0},"option 1"),o.a.createElement(a.RadioInput,{index:1},"option 2"),o.a.createElement(a.RadioInput,{index:2},"option 3"))),o.a.createElement(p.e,{title:"onSelection",sourceCode:d.onSelectionCode,externalSampleLink:r.onSelectionLink},o.a.createElement(a.RadioGroup,{onSelectionChange:function(e){var n=e.index;return alert("Selected index: ".concat(n))}},o.a.createElement(a.RadioInput,{index:0},"option 1"),o.a.createElement(a.RadioInput,{index:1},"option 2"),o.a.createElement(a.RadioInput,{index:2},"option 3"))),o.a.createElement(p.e,{title:"Disabled",sourceCode:d.disabledCode,externalSampleLink:r.disabledLink},o.a.createElement(a.RadioGroup,{disabled:!0},o.a.createElement(a.RadioInput,{index:0},"option 1"),o.a.createElement(a.RadioInput,{index:1},"option 2"),o.a.createElement(a.RadioInput,{index:2},"option 3"))),o.a.createElement(p.a,{className:"mt-4 mb-4",prevLinkText:u.prevLink.text,prevLink:u.prevLink.link,nextLinkText:u.nextLink.text,nextLink:u.nextLink.link}))})},bfvE:function(e,n,t){"use strict";t.r(n);var i=t("Ys8d");t.d(n,"default",function(){return i.default})},kWaU:function(e,n,t){"use strict";t.r(n),t.d(n,"onSelectionLink",function(){return i}),t.d(n,"simpleLink",function(){return o}),t.d(n,"disabledLink",function(){return a});var i="https://stackblitz.com/edit/reactify-ui-radio-group-on-selection",o="https://stackblitz.com/edit/reactify-ui-radio-group",a="https://stackblitz.com/edit/reactify-ui-radio-group-disabled"},rekI:function(e,n,t){"use strict";t.r(n),t.d(n,"onSelectionCode",function(){return i}),t.d(n,"simpleCode",function(){return o}),t.d(n,"disabledCode",function(){return a});var i="\n<RadioGroup onSelectionChange={({ index }) => alert('Selected index: ' + index)}>\n  <RadioInput index={0}>option 1</RadioInput>\n  <RadioInput index={1}>option 1</RadioInput>\n  <RadioInput index={2}>option 1</RadioInput>\n</RadioGroup>\n",o="\n<RadioGroup>\n  <RadioInput index={0}>option 1</RadioInput>\n  <RadioInput index={1}>option 1</RadioInput>\n  <RadioInput index={2}>option 1</RadioInput>\n</RadioGroup>\n",a="\n<RadioGroup disabled>\n  <RadioInput index={0}>option 1</RadioInput>\n  <RadioInput index={1}>option 1</RadioInput>\n  <RadioInput index={2}>option 1</RadioInput>\n</RadioGroup>\n"}},[["E/hE","5d41","9da1"]]]);