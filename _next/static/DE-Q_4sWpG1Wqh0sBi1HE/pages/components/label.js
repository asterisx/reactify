(window.webpackJsonp=window.webpackJsonp||[]).push([["10ee"],{"1Hy/":function(e,a,t){"use strict";t.r(a),t.d(a,"childrenLink",function(){return n}),t.d(a,"customClassLink",function(){return l}),t.d(a,"customColorLink",function(){return r}),t.d(a,"customSizeLink",function(){return c}),t.d(a,"customThemeLink",function(){return i}),t.d(a,"disabledLink",function(){return m}),t.d(a,"simpleLink",function(){return s});var n="https://stackblitz.com/edit/reactify-ui-label-children",l="https://stackblitz.com/edit/reactify-ui-label-custom-class",r="https://stackblitz.com/edit/reactify-ui-label-custom-color",c="https://stackblitz.com/edit/reactify-ui-label-custom-sizes",i="https://stackblitz.com/edit/reactify-ui-label-themes",m="https://stackblitz.com/edit/reactify-ui-label-disabled",s="https://stackblitz.com/edit/reactify-ui-label-simple"},MYlY:function(e,a,t){"use strict";t.r(a);var n=t("q1tI"),l=t.n(n),r=t("gpOY"),c=t("jW4q"),i=t("1Hy/"),m=t("IUY8"),s={prevLink:{text:"Input",link:"".concat(m.d.componentsPath,"/input")},nextLink:{text:"Legend",link:"".concat(m.d.componentsPath,"/legend")}};a.default=Object(m.g)(function(){return l.a.createElement(m.f,{componentName:"Label"},l.a.createElement(m.c,{productionReady:!0,responsive:!0,githubLink:"".concat(m.d.githubComponentsPath,"/label")}),l.a.createElement(m.e,{title:"Simple Use",sourceCode:c.simpleCode,externalSampleLink:i.simpleLink},l.a.createElement(r.Label,null,"Simple Label")),l.a.createElement(m.e,{title:"Disabled",sourceCode:c.disabledCode,externalSampleLink:i.disabledLink},l.a.createElement(r.Label,{disabled:!0},"Disabled Label")),l.a.createElement(m.e,{title:"Custom Sizes",sourceCode:c.customSizeCode,externalSampleLink:i.customSizeLink},l.a.createElement(r.Label,{small:!0,className:"mb-2"},"Small Label"),l.a.createElement("br",null),l.a.createElement(r.Label,{medium:!0,className:"mb-2"},"Medium Label"),l.a.createElement("br",null),l.a.createElement(r.Label,{large:!0,className:"mb-2"},"Large Label"),l.a.createElement("br",null),l.a.createElement(r.Label,{style:{fontSize:"35px"},className:"mb-2"},"Label with size 35px")),l.a.createElement(m.e,{title:"Themes",sourceCode:c.customThemeCode,externalSampleLink:i.customThemeLink},l.a.createElement(r.Label,{primary:!0,className:"mb-2"},"Primary Theme"),l.a.createElement("br",null),l.a.createElement(r.Label,{secondary:!0,className:"mb-2"},"Secondary Theme"),l.a.createElement("br",null),l.a.createElement(r.Label,{dark:!0,className:"mb-2"},"Dark Theme"),l.a.createElement("br",null),l.a.createElement(r.Label,{light:!0,className:"mb-2"},"Light Theme"),l.a.createElement("br",null),l.a.createElement(r.Label,{info:!0,className:"mb-2"},"Info Theme"),l.a.createElement("br",null),l.a.createElement(r.Label,{warning:!0,className:"mb-2"},"Warning Theme"),l.a.createElement("br",null),l.a.createElement(r.Label,{danger:!0,className:"mb-2"},"Danger Theme"),l.a.createElement("br",null),l.a.createElement(r.Label,{success:!0,className:"mb-2"},"Success Theme")),l.a.createElement(m.e,{title:"Children",sourceCode:c.childrenCode,externalSampleLink:i.childrenLink},l.a.createElement(r.Label,{medium:!0,className:"p-2"},l.a.createElement("div",{className:"card text-dark",style:{width:"18rem"}},l.a.createElement("div",{className:"card-body"},l.a.createElement("h5",{className:"card-title"},"Card title"),l.a.createElement("p",{className:"card-text"},"Some quick example text to build on the card title and make up the bulk of the card's content."),l.a.createElement("a",{href:"#",className:"btn btn-primary"},"Go somewhere"))))),l.a.createElement(m.e,{title:"Custom Color, any valid css color (hex, rgb etc...) will work.",sourceCode:c.customColorCode,externalSampleLink:i.customColorLink},l.a.createElement(r.Label,{style:{backgroundColor:"violet"}},"Simple Label")),l.a.createElement(m.e,{title:"Custom Class",sourceCode:c.customClassCode,externalSampleLink:i.customClassLink},l.a.createElement(r.Label,{className:"text-light bg-dark p-2 shadow"},"Custom Class Label")),l.a.createElement(m.a,{className:"mt-4 mb-4",prevLinkText:s.prevLink.text,prevLink:s.prevLink.link,nextLinkText:s.nextLink.text,nextLink:s.nextLink.link}))})},XRtg:function(e,a,t){"use strict";t.r(a);var n=t("MYlY");t.d(a,"default",function(){return n.default})},jW4q:function(e,a,t){"use strict";t.r(a),t.d(a,"childrenCode",function(){return n}),t.d(a,"customColorCode",function(){return r}),t.d(a,"customClassCode",function(){return l}),t.d(a,"customSizeCode",function(){return c}),t.d(a,"customThemeCode",function(){return i}),t.d(a,"disabledCode",function(){return m}),t.d(a,"simpleCode",function(){return s});var n='\n<Label medium className="p-2">\n  <div className="card text-dark" style={{ width: \'18rem\' }}>\n    <div className="card-body">\n      <h5 className="card-title">Card title</h5>\n      <p className="card-text">\n        Some quick example text to build on the card title and make up the\n        bulk of the card\'s content.\n      </p>\n      <a href="#" className="btn btn-primary">\n        Go somewhere\n      </a>\n    </div>\n  </div>\n</Label>\n',l='\n<Label className="text-light bg-dark p-2 shadow">\n  Custom Class Label\n</Label>\n',r="\n<Label style={{ backgroundColor: 'violet' }}>Simple Label</Label>\n",c="\n<Label small>\n  Small Label\n</Label>\n\n<Label medium>\n  Medium Label\n</Label>\n\n<Label large>\n  Large Label\n</Label>\n\n<Label style={{ fontSize: '35px' }}>\n  Label with size 35px\n</Label>\n",i="\n<Label primary>\n  Primary Theme\n</Label>\n\n<Label secondary>\n  Secondary Theme\n</Label>\n\n<Label dark>\n  Dark Theme\n</Label>\n\n<Label light>\n  Light Theme\n</Label>\n\n<Label info>\n  Info Theme\n</Label>\n\n<Label warning>\n  Warning Theme\n</Label>\n\n<Label danger>\n  Danger Theme\n</Label>\n\n<Label success>\n  Success Theme\n</Label>\n",m="\n  <Label disabled>\n    Disabled Label\n  </Label>\n",s="\n  <Label>\n    Simple Label\n  </Label>\n"},kIic:function(e,a,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/label",function(){var e=t("XRtg");return{page:e.default||e}}])}},[["kIic","5d41","9da1"]]]);