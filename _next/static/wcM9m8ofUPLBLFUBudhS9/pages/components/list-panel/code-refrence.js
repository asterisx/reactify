(window.webpackJsonp=window.webpackJsonp||[]).push([["8d77"],{NNgD:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/list-panel/code-refrence",function(){var e=t("V6M9");return{page:e.default||e}}])},V6M9:function(e,n,t){"use strict";t.r(n),t.d(n,"borderedCode",function(){return i}),t.d(n,"customListCode",function(){return m}),t.d(n,"customSizeCode",function(){return s}),t.d(n,"customThemeCode",function(){return l}),t.d(n,"defaultSelectionCode",function(){return a}),t.d(n,"disabledCode",function(){return I}),t.d(n,"eventsCode",function(){return P}),t.d(n,"multipleCode",function(){return L}),t.d(n,"simpleCode",function(){return d});var i="\n<ListPanel>\n  <ListPanel.Item index={1}>Item 1</ListPanel.Item>\n  <ListPanel.Item index={2} bordered={false}>Item 2</ListPanel.Item>\n  <ListPanel.Item index={3}>Item 3</ListPanel.Item>\n  <ListPanel.Item index={4} bordered={false}>Item 4</ListPanel.Item>\n  <ListPanel.Item index={5}>Item 5</ListPanel.Item>\n</ListPanel>\n",m='\n<ListPanel multiple>\n  <ListPanel.Item index={1}>\n    <div className="d-inline-flex justify-content-between align-items-center">\n      <FaApple className="mr-4" />\n      <span className="ml-4">Apple</span>\n    </div>\n  </ListPanel.Item>\n  <ListPanel.Item selected index={2}>\n    <div className="d-inline-flex justify-content-between align-items-center">\n      <FaAndroid className="mr-4" />\n      <span className="ml-4">Android</span>\n    </div>\n  </ListPanel.Item>\n  <ListPanel.Item index={3}>\n    <div className="d-inline-flex justify-content-between align-items-center">\n      <FaAmazon className="mr-4" />\n      <span className="ml-4">Amazon</span>\n    </div>\n  </ListPanel.Item>\n  <ListPanel.Item selected index={4}>\n    <div className="d-inline-flex justify-content-between align-items-center">\n      <FaAudible className="mr-4" />\n      <span className="ml-4">Audible</span>\n    </div>\n  </ListPanel.Item>\n  <ListPanel.Item index={5}>\n    <div className="d-inline-flex justify-content-between align-items-center">\n      <FaBitcoin className="mr-4" />\n      <span className="ml-4">Bitcoin</span>\n    </div>\n  </ListPanel.Item>\n</ListPanel>\n',s="\n<ListPanel small>\n  <ListPanel.Item index={1}>Item 1</ListPanel.Item>\n  <ListPanel.Item index={2}>Item 2</ListPanel.Item>\n  <ListPanel.Item index={3}>Item 3</ListPanel.Item>\n  <ListPanel.Item index={4}>Item 4</ListPanel.Item>\n  <ListPanel.Item index={5}>Item 5</ListPanel.Item>\n</ListPanel>\n\n<ListPanel medium>\n  <ListPanel.Item index={1}>Item 1</ListPanel.Item>\n  <ListPanel.Item index={2}>Item 2</ListPanel.Item>\n  <ListPanel.Item index={3}>Item 3</ListPanel.Item>\n  <ListPanel.Item index={4}>Item 4</ListPanel.Item>\n  <ListPanel.Item index={5}>Item 5</ListPanel.Item>\n</ListPanel>\n\n<ListPanel large>\n  <ListPanel.Item index={1}>Item 1</ListPanel.Item>\n  <ListPanel.Item index={2}>Item 2</ListPanel.Item>\n  <ListPanel.Item index={3}>Item 3</ListPanel.Item>\n  <ListPanel.Item index={4}>Item 4</ListPanel.Item>\n  <ListPanel.Item index={5}>Item 5</ListPanel.Item>\n</ListPanel>\n\n<ListPanel style={{ fontSize: '40px' }}>\n  <ListPanel.Item index={1}>Item 1</ListPanel.Item>\n  <ListPanel.Item index={2}>Item 2</ListPanel.Item>\n  <ListPanel.Item index={3}>Item 3</ListPanel.Item>\n  <ListPanel.Item index={4}>Item 4</ListPanel.Item>\n  <ListPanel.Item index={5}>Item 5</ListPanel.Item>\n</ListPanel>\n",l="\n<ListPanel primary>\n<ListPanel.Item index={1}>Item 1</ListPanel.Item>\n<ListPanel.Item index={2}>Item 2</ListPanel.Item>\n<ListPanel.Item index={3}>Item 3</ListPanel.Item>\n<ListPanel.Item index={4}>Item 4</ListPanel.Item>\n<ListPanel.Item index={5}>Item 5</ListPanel.Item>\n</ListPanel>\n\n<ListPanel secondary>\n<ListPanel.Item index={1}>Item 1</ListPanel.Item>\n<ListPanel.Item index={2}>Item 2</ListPanel.Item>\n<ListPanel.Item index={3}>Item 3</ListPanel.Item>\n<ListPanel.Item index={4}>Item 4</ListPanel.Item>\n<ListPanel.Item index={5}>Item 5</ListPanel.Item>\n</ListPanel>\n<h6 className=\"pt-3 pb-3\">Dark theme</h6>\n<ListPanel dark>\n<ListPanel.Item index={1}>Item 1</ListPanel.Item>\n<ListPanel.Item index={2}>Item 2</ListPanel.Item>\n<ListPanel.Item index={3}>Item 3</ListPanel.Item>\n<ListPanel.Item index={4}>Item 4</ListPanel.Item>\n<ListPanel.Item index={5}>Item 5</ListPanel.Item>\n</ListPanel>\n\n<ListPanel light>\n<ListPanel.Item index={1}>Item 1</ListPanel.Item>\n<ListPanel.Item index={2}>Item 2</ListPanel.Item>\n<ListPanel.Item index={3}>Item 3</ListPanel.Item>\n<ListPanel.Item index={4}>Item 4</ListPanel.Item>\n<ListPanel.Item index={5}>Item 5</ListPanel.Item>\n</ListPanel>\n\n<ListPanel info>\n<ListPanel.Item index={1}>Item 1</ListPanel.Item>\n<ListPanel.Item index={2}>Item 2</ListPanel.Item>\n<ListPanel.Item index={3}>Item 3</ListPanel.Item>\n<ListPanel.Item index={4}>Item 4</ListPanel.Item>\n<ListPanel.Item index={5}>Item 5</ListPanel.Item>\n</ListPanel>\n\n<ListPanel warning>\n<ListPanel.Item index={1}>Item 1</ListPanel.Item>\n<ListPanel.Item index={2}>Item 2</ListPanel.Item>\n<ListPanel.Item index={3}>Item 3</ListPanel.Item>\n<ListPanel.Item index={4}>Item 4</ListPanel.Item>\n<ListPanel.Item index={5}>Item 5</ListPanel.Item>\n</ListPanel>\n\n<ListPanel danger>\n<ListPanel.Item index={1}>Item 1</ListPanel.Item>\n<ListPanel.Item index={2}>Item 2</ListPanel.Item>\n<ListPanel.Item index={3}>Item 3</ListPanel.Item>\n<ListPanel.Item index={4}>Item 4</ListPanel.Item>\n<ListPanel.Item index={5}>Item 5</ListPanel.Item>\n</ListPanel>\n\n<ListPanel success>\n<ListPanel.Item index={1}>Item 1</ListPanel.Item>\n<ListPanel.Item index={2}>Item 2</ListPanel.Item>\n<ListPanel.Item index={3}>Item 3</ListPanel.Item>\n<ListPanel.Item index={4}>Item 4</ListPanel.Item>\n<ListPanel.Item index={5}>Item 5</ListPanel.Item>\n</ListPanel>\n\n<ListPanel>\n<ListPanel.Item primary index={1}>Item 1</ListPanel.Item>\n<ListPanel.Item secondary index={2} bordered={false}>Item 2</ListPanel.Item>\n<ListPanel.Item light index={3} bordered={false}>Item 3</ListPanel.Item>\n<ListPanel.Item dark index={4}>Item 4</ListPanel.Item>\n<ListPanel.Item info index={5}>Item 5</ListPanel.Item>\n<ListPanel.Item warning index={6}>Item 6</ListPanel.Item>\n<ListPanel.Item danger index={7}>Item 7</ListPanel.Item>\n<ListPanel.Item success index={8}>Item 8</ListPanel.Item>\n<ListPanel.Item style={{ backgroundColor: 'violet' }} index={9}>Item 9</ListPanel.Item>\n</ListPanel>\n",a="\n<ListPanel multiple onItemClicked={props => console.log(props)}>\n  <ListPanel.Item index={1}>Item 1</ListPanel.Item>\n  <ListPanel.Item selected index={2}>Item 2</ListPanel.Item>\n  <ListPanel.Item index={3}>Item 3</ListPanel.Item>\n  <ListPanel.Item selected index={4}>Item 4</ListPanel.Item>\n  <ListPanel.Item index={5}>Item 5</ListPanel.Item>\n</ListPanel>\n",I="\n<ListPanel disabled>\n  <ListPanel.Item index={1}>Item 1</ListPanel.Item>\n  <ListPanel.Item index={2}>Item 2</ListPanel.Item>\n  <ListPanel.Item index={3}>Item 3</ListPanel.Item>\n  <ListPanel.Item index={4}>Item 4</ListPanel.Item>\n  <ListPanel.Item index={5}>Item 5</ListPanel.Item>\n</ListPanel>\n\n<ListPanel>\n  <ListPanel.Item index={1}>Item 1</ListPanel.Item>\n  <ListPanel.Item disabled index={2}>Item 2</ListPanel.Item>\n  <ListPanel.Item index={3}>Item 3</ListPanel.Item>\n  <ListPanel.Item disabled index={4}>Item 4</ListPanel.Item>\n  <ListPanel.Item index={5}>Item 5</ListPanel.Item>\n</ListPanel>\n",P="\n<ListPanel onSelectionChange={({ event, index, selected }) => console.log(event, index, selected)} onItemClicked={({ event, index }) => console.log(event, index)}>\n  <ListPanel.Item index={1}>Item 1</ListPanel.Item>\n  <ListPanel.Item isSelectable={false} index={2}>Item 2</ListPanel.Item>\n  <ListPanel.Item index={3}>Item 3</ListPanel.Item>\n  <ListPanel.Item index={4}>Item 4</ListPanel.Item>\n  <ListPanel.Item index={5}>Item 5</ListPanel.Item>\n</ListPanel>\n",L="\n<ListPanel multiple>\n  <ListPanel.Item index={1}>Item 1</ListPanel.Item>\n  <ListPanel.Item index={2}>Item 2</ListPanel.Item>\n  <ListPanel.Item index={3}>Item 3</ListPanel.Item>\n  <ListPanel.Item index={4}>Item 4</ListPanel.Item>\n  <ListPanel.Item index={5}>Item 5</ListPanel.Item>\n</ListPanel>\n",d="\n<ListPanel>\n  <ListPanel.Item index={1}>Item 1</ListPanel.Item>\n  <ListPanel.Item index={2}>Item 2</ListPanel.Item>\n  <ListPanel.Item index={3}>Item 3</ListPanel.Item>\n  <ListPanel.Item index={4}>Item 4</ListPanel.Item>\n  <ListPanel.Item index={5}>Item 5</ListPanel.Item>\n</ListPanel>\n"}},[["NNgD","5d41"]]]);