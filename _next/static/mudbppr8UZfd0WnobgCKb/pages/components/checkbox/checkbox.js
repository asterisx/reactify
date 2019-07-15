(window.webpackJsonp=window.webpackJsonp||[]).push([["4df7"],{"Zc/D":function(e,c,t){"use strict";t.r(c),t.d(c,"childrenLink",function(){return n}),t.d(c,"controlledLink",function(){return o}),t.d(c,"customClassLink",function(){return a}),t.d(c,"customColorLink",function(){return i}),t.d(c,"customSizeLink",function(){return l}),t.d(c,"customThemeLink",function(){return r}),t.d(c,"disabledLink",function(){return s}),t.d(c,"labelPositionLink",function(){return h}),t.d(c,"onChangeLink",function(){return k}),t.d(c,"simpleLink",function(){return d});var n="https://stackblitz.com/edit/reactify-ui-checkbox-children",o="https://stackblitz.com/edit/reactify-ui-checkbox-controlled",a="https://stackblitz.com/edit/reactify-ui-checkbox-custom-class",i="https://stackblitz.com/edit/reactify-ui-checkbox-custom-color",l="https://stackblitz.com/edit/reactify-ui-checkbox-custom-sizes",r="https://stackblitz.com/edit/reactify-ui-checkbox-themes",s="https://stackblitz.com/edit/reactify-ui-checkbox-disabled",h="https://stackblitz.com/edit/reactify-ui-checkbox-label-position",k="https://stackblitz.com/edit/reactify-ui-checkbox-change-event",d="https://stackblitz.com/edit/reactify-ui-checkbox-simple"},rZuW:function(e,c,t){"use strict";t.r(c),t.d(c,"childrenCode",function(){return n}),t.d(c,"controlledCode",function(){return o}),t.d(c,"customClassCode",function(){return i}),t.d(c,"customColorCode",function(){return a}),t.d(c,"customSizeCode",function(){return l}),t.d(c,"customThemeCode",function(){return r}),t.d(c,"disabledCode",function(){return s}),t.d(c,"labelPositionCode",function(){return h}),t.d(c,"onChangeCode",function(){return k}),t.d(c,"simpleCode",function(){return d});var n='\n  <Checkbox checked>\n    <div className="card" style={{ width: \'18rem\' }}>\n      <div className="card-body">\n        <h5 className="card-title">Card title</h5>\n        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card\'s content.</p>\n        <a href="#" className="btn btn-primary">Go somewhere</a>\n      </div>\n    </div>\n  </Checkbox>\n',o="<Checkbox checked isControlled />",a='<Checkbox checked iconColor="violet" />',i='<Checkbox checked className="bg-dark p-5" />',l="\n<Checkbox small>Small Size</Checkbox>\n\n<Checkbox medium>Medium Size</Checkbox>\n\n<Checkbox large>Large Size</Checkbox>\n\n<Checkbox style={{ fontSize: '40px' }}>style={{ fontSize: '40px' }}</Checkbox>\n",r="\n<Checkbox primary checked>Primary Checkbox</Checkbox>\n\n<Checkbox secondary checked>Secondary Checkbox</Checkbox>\n\n<Checkbox dark checked>Dark Checkbox</Checkbox>\n\n<Checkbox light checked>Light Checkbox</Checkbox>\n\n<Checkbox info checked>Info Checkbox</Checkbox>\n\n<Checkbox warning checked>Warning Checkbox</Checkbox>\n\n<Checkbox danger checked>Danger Checkbox</Checkbox>\n\n<Checkbox success checked>Success Checkbox</Checkbox>\n",s="<Checkbox checked disabled>This checkbox is disabled</Checkbox>",h="\n<Checkbox>This is a checkbox with left position</Checkbox>\n\n<Checkbox style={{ flexDirection: 'row-reverse' }}>This is a checkbox with right position</Checkbox>\n",k="<RadioInput onChange={({ event, checked }) => console.log(event, checked)} />",d="<Checkbox />"},tUra:function(e,c,t){"use strict";t.r(c);var n=t("q1tI"),o=t.n(n),a=t("gpOY"),i=t("rZuW"),l=t("Zc/D"),r=t("IUY8"),s={prevLink:{text:"Card",link:"".concat(r.d.componentsPath,"/card")},nextLink:{text:"Chips",link:"".concat(r.d.componentsPath,"/chips")}};c.default=Object(r.g)(function(){return o.a.createElement(r.f,{componentName:"Checkbox"},o.a.createElement(r.c,{productionReady:!0,responsive:!0,githubLink:"".concat(r.d.githubComponentsPath,"/checkbox")}),o.a.createElement(r.e,{title:"Simple Use",sourceCode:i.simpleCode,externalSampleLink:l.simpleLink},o.a.createElement(a.Checkbox,{checked:!0},"This is a checkbox")),o.a.createElement(r.e,{title:"Controlled (checked)",sourceCode:i.controlledCode,externalSampleLink:l.controlledLink},o.a.createElement(a.Checkbox,{checked:!0,isControlled:!0},"This is a checked label")),o.a.createElement(r.e,{title:"Disabled",sourceCode:i.disabledCode,externalSampleLink:l.disabledLink},o.a.createElement(a.Checkbox,{checked:!0,disabled:!0},"This checkbox is disabled")),o.a.createElement(r.e,{title:"Position (left, right)",sourceCode:i.labelPositionCode,externalSampleLink:l.labelPositionLink},o.a.createElement(a.Checkbox,null,"This is a checkbox with left position"),o.a.createElement("br",null),o.a.createElement(a.Checkbox,{style:{flexDirection:"row-reverse"}},"This is a checkbox with right position")),o.a.createElement(r.e,{title:"Children",sourceCode:i.childrenCode,externalSampleLink:l.childrenLink},o.a.createElement(a.Checkbox,{checked:!0},o.a.createElement("div",{className:"card",style:{width:"18rem"}},o.a.createElement("div",{className:"card-body"},o.a.createElement("h5",{className:"card-title"},"Card title"),o.a.createElement("p",{className:"card-text"},"Some quick example text to build on the card title and make up the bulk of the card's content."),o.a.createElement("a",{href:"#",className:"btn btn-primary"},"Go somewhere"))))),o.a.createElement(r.e,{title:"Custom Color",sourceCode:i.customColorCode,externalSampleLink:l.customColorLink},o.a.createElement(a.Checkbox,{checked:!0,iconColor:"violet"},"Custom Color")),o.a.createElement(r.e,{title:"Custom Class",sourceCode:i.customClassCode,externalSampleLink:l.customClassLink},o.a.createElement(a.Checkbox,{checked:!0,className:"bg-dark p-5"},"This checkbox has custom class")),o.a.createElement(r.e,{title:"Custom Size",sourceCode:i.customSizeCode,externalSampleLink:l.customSizeLink},o.a.createElement(a.Checkbox,{small:!0},"Small Size"),o.a.createElement("br",null),o.a.createElement(a.Checkbox,{medium:!0},"Medium Size"),o.a.createElement("br",null),o.a.createElement(a.Checkbox,{large:!0},"Large Size"),o.a.createElement("br",null),o.a.createElement(a.Checkbox,{style:{fontSize:"40px"}},"style={{ fontSize: '40px' }}")),o.a.createElement(r.e,{title:"Themes",sourceCode:i.customThemeCode,externalSampleLink:l.customThemeLink},o.a.createElement(a.Checkbox,{primary:!0,className:"pb-2",checked:!0},"Primary Checkbox"),o.a.createElement("br",null),o.a.createElement(a.Checkbox,{secondary:!0,className:"pb-2",checked:!0},"Secondary Checkbox"),o.a.createElement("br",null),o.a.createElement(a.Checkbox,{dark:!0,className:"pb-2",checked:!0},"Dark Checkbox"),o.a.createElement("br",null),o.a.createElement(a.Checkbox,{light:!0,className:"pb-2",checked:!0},"Light Checkbox"),o.a.createElement("br",null),o.a.createElement(a.Checkbox,{info:!0,className:"pb-2",checked:!0},"Info Checkbox"),o.a.createElement("br",null),o.a.createElement(a.Checkbox,{warning:!0,className:"pb-2",checked:!0},"Warning Checkbox"),o.a.createElement("br",null),o.a.createElement(a.Checkbox,{danger:!0,className:"pb-2",checked:!0},"Danger Checkbox"),o.a.createElement("br",null),o.a.createElement(a.Checkbox,{success:!0,checked:!0},"Success Checkbox")),o.a.createElement(r.e,{title:"onChange Event",sourceCode:i.onChangeCode,externalSampleLink:l.onChangeLink},o.a.createElement("p",null,"Check console for events"),o.a.createElement(a.Checkbox,{onChange:function(e){var c=e.event,t=e.checked;return console.log(c,t)}})),o.a.createElement(r.a,{className:"mt-4 mb-4",prevLinkText:s.prevLink.text,prevLink:s.prevLink.link,nextLinkText:s.nextLink.text,nextLink:s.nextLink.link}))})},w0Pg:function(e,c,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/checkbox/checkbox",function(){var e=t("tUra");return{page:e.default||e}}])}},[["w0Pg","5d41","9da1"]]]);