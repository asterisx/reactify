(window.webpackJsonp=window.webpackJsonp||[]).push([["ead9"],{"8jUr":function(e,t,n){"use strict";n.r(t);var i=n("q1tI"),r=n.n(i),o=n("gpOY"),u=n("dORp"),a=n("rpzN"),m=n("IUY8"),p={prevLink:{text:"Top Bar",link:"".concat(m.d.componentsPath,"/top-bar")},nextLink:{text:"Typeahead",link:"".concat(m.d.componentsPath,"/typeahead")}},c=[{text:"Option 1",key:0},{text:"Option 2",key:1,sub:[{text:"Sub Option 1",key:2,sub:[{text:"Sub Option 1",key:3,sub:[{text:"Sub Option 1",key:4,sub:[{text:"Sub Option 1",key:5,sub:[{text:"Sub Option 1",key:6,sub:[{text:"Sub Option 1",key:7,sub:[{text:"Sub Option 1",key:8},{text:"Sub Option 2",key:9},{text:"Sub Option 3",key:10},{text:"Sub Option 4",key:11}]},{text:"Sub Option 2",key:12},{text:"Sub Option 3",key:13},{text:"Sub Option 4",key:14}]},{text:"Sub Option 2",key:15},{text:"Sub Option 3",key:16},{text:"Sub Option 4",key:17}]},{text:"Sub Option 2",key:18},{text:"Sub Option 3",key:19},{text:"Sub Option 4",key:20}]},{text:"Sub Option 2",key:21},{text:"Sub Option 3",key:22},{text:"Sub Option 4",key:23}]},{text:"Sub Option 2",key:24},{text:"Sub Option 3",key:25},{text:"Sub Option 4",key:26}]},{text:"Sub Option 2",key:27},{text:"Sub Option 3",key:28},{text:"Sub Option 4",key:29}]},{text:"Option 3",key:30},{text:"Option 4",key:31}];t.default=Object(m.g)(function(){return r.a.createElement(m.f,{componentName:"Tree View"},r.a.createElement(m.c,{productionReady:!0,responsive:!0,githubLink:"".concat(m.d.githubComponentsPath,"/tree-view")}),r.a.createElement(m.e,{title:"Simple Use",sourceCode:u.simpleCode,externalSampleLink:a.simpleLink},r.a.createElement(o.TreeView,{items:c})),r.a.createElement(m.e,{title:"Themes Use",sourceCode:u.customThemeCode,externalSampleLink:a.customThemeLink},r.a.createElement("h5",null,"Theming is only for the default icons"),r.a.createElement("h5",null,"Primary Theme"),r.a.createElement(o.TreeView,{items:c,primary:!0}),r.a.createElement("h5",null,"Secondary Theme"),r.a.createElement(o.TreeView,{items:c,secondary:!0}),r.a.createElement("h5",null,"Info Theme"),r.a.createElement(o.TreeView,{items:c,info:!0}),r.a.createElement("h5",null,"Light Theme"),r.a.createElement(o.TreeView,{items:c,light:!0}),r.a.createElement("h5",null,"Warning Theme"),r.a.createElement(o.TreeView,{items:c,warning:!0}),r.a.createElement("h5",null,"Danger Theme"),r.a.createElement(o.TreeView,{items:c,danger:!0}),r.a.createElement("h5",null,"Success Theme"),r.a.createElement(o.TreeView,{items:c,success:!0})),r.a.createElement(m.e,{title:"Custom Content (Declarative)",sourceCode:u.customDeclarativeCode,externalSampleLink:a.customDeclarativeLink},r.a.createElement("h5",null,"Declared Menu"),r.a.createElement(o.TreeView,null,r.a.createElement(o.TreeViewItem,{key:1,text:"Option 1"},r.a.createElement(o.TreeView,null,r.a.createElement(o.TreeViewItem,{key:1,text:"Option 1"}),r.a.createElement(o.TreeViewItem,{key:2,text:"Option 2"}))),r.a.createElement(o.TreeViewItem,{key:2,text:"Option 2"})),r.a.createElement("h5",{className:"mt-5"},"Declared Menu with custom content"),r.a.createElement(o.TreeView,null,r.a.createElement(o.TreeViewItem,{key:1,content:function(e){var t=e.isTreeOpen,n=e.toggleSubTree;return r.a.createElement(o.Button,{className:"w-100",onClick:n,danger:t,success:!t},t?"Close Sub Tree":"Open Sub Tree")}},r.a.createElement(o.TreeView,null,r.a.createElement(o.TreeViewItem,{key:1,text:"Sub Option 1"}),r.a.createElement(o.TreeViewItem,{key:2,text:"Sub Option 2"}))),r.a.createElement(o.TreeViewItem,{text:"Option 2"}))),r.a.createElement(m.a,{className:"mt-4 mb-4",prevLinkText:p.prevLink.text,prevLink:p.prevLink.link,nextLinkText:p.nextLink.text,nextLink:p.nextLink.link}))})},bmLR:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/tree-view/tree-view",function(){var e=n("8jUr");return{page:e.default||e}}])},dORp:function(e,t,n){"use strict";n.r(t),n.d(t,"customDeclarativeCode",function(){return r}),n.d(t,"customThemeCode",function(){return i}),n.d(t,"simpleCode",function(){return o});var i="\n<TreeView items={items} primary />\n<TreeView items={items} secondary />\n<TreeView items={items} info />\n<TreeView items={items} light />\n<TreeView items={items} warning />\n<TreeView items={items} danger />\n<TreeView items={items} success />\n",r='\n<TreeView>\n  <TreeViewItem\n    key={1}\n    text="Option 1"\n  >\n    <TreeView>\n      <TreeViewItem key={1} text="Option 1" />\n      <TreeViewItem key={2} text="Option 2" />\n    </TreeView>\n  </TreeViewItem>\n  <TreeViewItem\n    key={2}\n    text="Option 2"\n  />\n</TreeView>\n\n<TreeView>\n  <TreeViewItem\n    key={1}\n    content={\n      ({ isTreeOpen, toggleSubTree }) => (\n        <Button\n          className="w-100"\n          onClick={toggleSubTree}\n          danger={isTreeOpen}\n          success={!isTreeOpen}\n        >\n          {isTreeOpen ? \'Close Sub Tree\' : \'Open Sub Tree\'}\n        </Button>\n      )}\n  >\n    <TreeView>\n      <TreeViewItem\n        key={1}\n        text="Sub Option 1"\n      />\n      <TreeViewItem\n        key={2}\n        text="Sub Option 2"\n      />\n    </TreeView>\n  </TreeViewItem>\n  <TreeViewItem text="Option 2" />\n</TreeView>\n',o="\nconst items = [\n  {\n    text: 'Option 1 (Disabled)', key: 0, icon: <FaFileSignature />, disabled: true,\n  },\n  {\n    text: 'Option 2',\n    key: 1,\n    sub: [\n      {\n        text: 'Sub Option 1',\n        key: 2,\n        sub: [\n          {\n            text: 'Sub Option 1',\n            key: 3,\n            sub: [\n              {\n                text: 'Sub Option 1',\n                key: 4,\n                sub: [\n                  {\n                    text: 'Sub Option 1',\n                    key: 5,\n                    sub: [\n                      {\n                        text: 'Sub Option 1',\n                        key: 6,\n                        sub: [\n                          {\n                            text: 'Sub Option 1',\n                            key: 7,\n                            sub: [\n                              { text: 'Sub Option 1', key: 8 },\n                              { text: 'Sub Option 2', key: 9 },\n                              { text: 'Sub Option 3', key: 10 },\n                              { text: 'Sub Option 4', key: 11 },\n                            ],\n                          },\n                          { text: 'Sub Option 2', key: 12 },\n                          { text: 'Sub Option 3', key: 13 },\n                          { text: 'Sub Option 4', key: 14 },\n                        ],\n                      },\n                      { text: 'Sub Option 2', key: 15 },\n                      { text: 'Sub Option 3', key: 16 },\n                      { text: 'Sub Option 4', key: 17 },\n                    ],\n                  },\n                  { text: 'Sub Option 2', key: 18 },\n                  { text: 'Sub Option 3', key: 19 },\n                  { text: 'Sub Option 4', key: 20 },\n                ],\n              },\n              { text: 'Sub Option 2', key: 21 },\n              { text: 'Sub Option 3', key: 22 },\n              { text: 'Sub Option 4', key: 23 },\n            ],\n          },\n          { text: 'Sub Option 2', key: 24 },\n          { text: 'Sub Option 3', key: 25 },\n          { text: 'Sub Option 4', key: 26 },\n        ],\n      },\n      { text: 'Sub Option 2', key: 27 },\n      { text: 'Sub Option 3', key: 28 },\n      { text: 'Sub Option 4', key: 29 },\n    ],\n  },\n  { text: 'Option 3', key: 30 },\n  { text: 'Option 4', key: 31 },\n];\n\n<TreeView items={items} />\n"},rpzN:function(e,t,n){"use strict";n.r(t),n.d(t,"customDeclarativeLink",function(){return i}),n.d(t,"customThemeLink",function(){return r}),n.d(t,"simpleLink",function(){return o});var i="https://stackblitz.com/edit/reactify-ui-tree-view-declarative",r="https://stackblitz.com/edit/reactify-ui-tree-view-themes",o="https://stackblitz.com/edit/reactify-ui-tree-view-simple"}},[["bmLR","5d41","9da1"]]]);