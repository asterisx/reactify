(window.webpackJsonp=window.webpackJsonp||[]).push([["9f1a"],{"4zl3":function(e,a,n){"use strict";n.r(a),n.d(a,"declaredCode",function(){return r}),n.d(a,"declaredVerticalCode",function(){return i}),n.d(a,"simpleCode",function(){return c});var r='\n<HeirarchyView className="font-responsive">\n  <HeirarchyView.Item content={<Paper className="p-3" large warning>L0</Paper>}>\n    <HeirarchyView.Item content={<Paper className="p-3" large warning>L1</Paper>}>\n      <HeirarchyView.Item content={<Paper className="p-3" large warning>L2</Paper>}>\n        <Paper className="p-3" large>L3</Paper>\n      </HeirarchyView.Item>\n\n      <HeirarchyView.Item content={<Paper className="p-3" large warning>L2</Paper>}>\n        <Paper className="p-3" large>L3</Paper>\n        <Paper className="p-3" large>L3</Paper>\n      </HeirarchyView.Item>\n    </HeirarchyView.Item>\n\n    <HeirarchyView.Item content={<Paper className="p-3" large warning>L1</Paper>}>\n      <Paper className="p-3" large>L2</Paper>\n    </HeirarchyView.Item>\n  </HeirarchyView.Item>\n</HeirarchyView>\n',i='\n<HeirarchyView className="font-responsive">\n   <HeirarchyView.Item vertical content={<Paper className="p-3" large warning>L0</Paper>}>\n     <HeirarchyView.Item content={<Paper className="p-3" large warning>L1</Paper>}>\n       <HeirarchyView.Item content={<Paper className="p-3" large warning>L2</Paper>}>\n         <Paper className="p-3" large>L3</Paper>\n       </HeirarchyView.Item>\n       \n       <HeirarchyView.Item content={<Paper className="p-3" large warning>L2</Paper>}>\n         <Paper className="p-3" large>L3</Paper>\n         <Paper className="p-3" large>L3</Paper>\n       </HeirarchyView.Item>\n     </HeirarchyView.Item>\n\n     <HeirarchyView.Item content={<Paper className="p-3" large warning>L1</Paper>}>\n       <Paper className="p-3" large>L2</Paper>\n     </HeirarchyView.Item>\n   </HeirarchyView.Item>\n </HeirarchyView>\n',c="\nconst item = {\n  text: 'L0',\n  key: 1,\n  sub: [\n    {\n      text: 'L1',\n      key: 2,\n      sub: {\n        text: 'L3',\n        key: 3,\n      },\n    },\n    {\n      text: 'L1',\n      key: 4,\n      sub: [\n        {\n          content: <Paper>L3</Paper>,\n          key: 5,\n        },\n        {\n          text: 'L3',\n          key: 6,\n        },\n      ],\n    },\n  ],\n};\n\n<HeirarchyView className=\"font-responsive\" item={item} />\n"},RrMr:function(e,a,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/heirarchy-view/code-refrence",function(){var e=n("4zl3");return{page:e.default||e}}])}},[["RrMr","5d41"]]]);