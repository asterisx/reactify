(window.webpackJsonp=window.webpackJsonp||[]).push([["6e9f"],{alNB:function(n,e,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/sidebar/code-refrence",function(){var n=t("mmKV");return{page:n.default||n}}])},mmKV:function(n,e,t){"use strict";t.r(e),t.d(e,"customDeclarativeCode",function(){return u}),t.d(e,"customThemeCode",function(){return o}),t.d(e,"simpleFullCode",function(){return b}),t.d(e,"simpleCode",function(){return i});var i="\nconst items = [\n  {\n    content: <Link light href=\"#\">Can be a link</Link>, key: 0,\n  },\n  {\n    text: 'Option 2',\n    key: 1,\n    sub: [\n      {\n        text: 'Sub Option 1',\n        key: 2,\n        sub: [\n          {\n            text: 'Sub Option 1',\n            key: 3,\n            sub: [\n              {\n                text: 'Sub Option 1',\n                key: 4,\n                sub: [\n                  {\n                    text: 'Sub Option 1',\n                    key: 5,\n                    sub: [\n                      {\n                        text: 'Sub Option 1',\n                        key: 6,\n                        sub: [\n                          {\n                            text: 'Sub Option 1',\n                            key: 7,\n                            sub: [\n                              { text: 'Sub Option 1', key: 8 },\n                              { text: 'Sub Option 2', key: 9 },\n                              { text: 'Sub Option 3', key: 10 },\n                              { text: 'Sub Option 4', key: 11 },\n                            ],\n                          },\n                          { text: 'Sub Option 2', key: 12 },\n                          { text: 'Sub Option 3', key: 13 },\n                          { text: 'Sub Option 4', key: 14 },\n                        ],\n                      },\n                      { text: 'Sub Option 2', key: 15 },\n                      { text: 'Sub Option 3', key: 16 },\n                      { text: 'Sub Option 4', key: 17 },\n                    ],\n                  },\n                  { text: 'Sub Option 2', key: 18 },\n                  { text: 'Sub Option 3', key: 19 },\n                  { text: 'Sub Option 4', key: 20 },\n                ],\n              },\n              { text: 'Sub Option 2', key: 21 },\n              { text: 'Sub Option 3', key: 22 },\n              { text: 'Sub Option 4', key: 23 },\n            ],\n          },\n          { text: 'Sub Option 2', key: 24 },\n          { text: 'Sub Option 3', key: 25 },\n          { text: 'Sub Option 4', key: 26 },\n        ],\n      },\n      { text: 'Sub Option 2', key: 27 },\n      { text: 'Sub Option 3', key: 28 },\n      { text: 'Sub Option 4', key: 29 },\n    ],\n  },\n  { text: 'Option 2', key: 30 },\n  { text: 'Option 4', key: 31 },\n];\n\n<Sidebar tems={items} />\n",b='<Sidebar className="400px" items={items} positionFull />',o="\n<Sidebar items={items} primary />\n<Sidebar items={items} secondary />\n<Sidebar items={items} info />\n<Sidebar items={items} light />\n<Sidebar items={items} warning />\n<Sidebar items={items} danger />\n<Sidebar items={items} success />\n",u='\n<Sidebar className="w-300px">\n  <SidebarItem\n    key={1}\n    text="Option 1"\n  >\n    <SubSidebar>\n      <SidebarItem key={1} text="Option 1" />\n      <SidebarItem key={2} text="Option 2" />\n    </SubSidebar>\n  </SidebarItem>\n  <SidebarItem\n    key={2}\n    text="Option 2"\n  />\n</Sidebar>\n\n<Sidebar className="w-300px">\n  <SidebarItem\n    key={1}\n    content={\n      ({ isSubOpen, toggleSub }) => (\n        <Button\n          className="w-100"\n          onClick={toggleSub}\n          danger={isSubOpen}\n          success={!isSubOpen}\n        >\n          {isSubOpen ? \'Close Sub Sidebar\' : \'Open Sub Sidebar\'}\n        </Button>\n      )}\n  >\n    <SubSidebar>\n      <SidebarItem\n        key={1}\n        text="Sub Option 1"\n      />\n      <SidebarItem\n        key={2}\n        text="Sub Option 2"\n      />\n    </SubSidebar>\n  </SidebarItem>\n  <SidebarItem text="Option 2" />\n</Sidebar>\n'}},[["alNB","5d41"]]]);