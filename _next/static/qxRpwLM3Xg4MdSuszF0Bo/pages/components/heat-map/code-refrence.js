(window.webpackJsonp=window.webpackJsonp||[]).push([["c791"],{HrAO:function(e,a,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/heat-map/code-refrence",function(){var e=t("aTUw");return{page:e.default||e}}])},aTUw:function(e,a,t){"use strict";t.r(a),t.d(a,"customThemeCode",function(){return n}),t.d(a,"declarativeCode",function(){return H}),t.d(a,"disabledCode",function(){return p}),t.d(a,"eventsCode",function(){return l}),t.d(a,"simpleCode",function(){return M});var n='\n<HeatMap primary items={items} />\n<HeatMap secondary items={items} />\n<HeatMap dark items={items} />\n<HeatMap light items={items} />\n<HeatMap info items={items} />\n<HeatMap warning items={items} />\n<HeatMap danger items={items} />\n<HeatMap success items={items} />\n<HeatMap baseColor="violet" items={items} />\n',l="\n<HeatMap items={items} onCellClick={({ row, column }) => console.log('row: ' + row + ', column: ' + column)} />\n",p="\n<HeatMap items={items} disabled />\n",H="\n<HeatMap>\n  <HeatMap.Row key={1}>\n    <HeatMap.Cell key={10}>1</HeatMap.Cell>\n    <HeatMap.Cell key={11}>2</HeatMap.Cell>\n    <HeatMap.Cell key={12}>3</HeatMap.Cell>\n    <HeatMap.Cell key={13}>4</HeatMap.Cell>\n  </HeatMap.Row>\n  <HeatMap.Row key={2}>\n    <HeatMap.Cell key={20}>4</HeatMap.Cell>\n    <HeatMap.Cell key={21}>3</HeatMap.Cell>\n    <HeatMap.Cell key={22}>2</HeatMap.Cell>\n    <HeatMap.Cell key={23}>1</HeatMap.Cell>\n  </HeatMap.Row>\n  <HeatMap.Row key={3}>\n    <HeatMap.Cell key={30}>10</HeatMap.Cell>\n    <HeatMap.Cell key={31}>6</HeatMap.Cell>\n    <HeatMap.Cell key={32}>5</HeatMap.Cell>\n    <HeatMap.Cell key={33}>4</HeatMap.Cell>\n  </HeatMap.Row>\n  <HeatMap.Row key={4}>\n    <HeatMap.Cell key={40}>5</HeatMap.Cell>\n    <HeatMap.Cell key={41}>7</HeatMap.Cell>\n    <HeatMap.Cell key={42}>2</HeatMap.Cell>\n    <HeatMap.Cell key={43}>0</HeatMap.Cell>\n  </HeatMap.Row>\n</HeatMap>\n",M='\n.fixed-h-w {\n  height: 100px;\n  width: 350px;\n}\n\nconst items = [\n  [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],\n  [7, 8, 9, 10, 11, 12, 1, 2, 3, 4, 5, 6],\n  [13, 14, 15, 16, 17, 18, 1, 4, 5, 7, 8, 4],\n  [1, 4, 5, 7, 8, 4, 13, 14, 15, 16, 17, 18],\n];\n\n<HeatMap items={items} className="fixed-h-w" />\n<HeatMap items={items} />\n'}},[["HrAO","5d41"]]]);