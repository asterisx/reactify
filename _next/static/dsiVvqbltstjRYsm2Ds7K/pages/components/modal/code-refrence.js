(window.webpackJsonp=window.webpackJsonp||[]).push([["4d81"],{"86Et":function(n,e,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/modal/code-refrence",function(){var n=t("rkil");return{page:n.default||n}}])},rkil:function(n,e,t){"use strict";t.r(e),t.d(e,"hideBackdropCode",function(){return o}),t.d(e,"onCloseCode",function(){return l}),t.d(e,"modalSizeCode",function(){return i}),t.d(e,"notAutoCloseCode",function(){return s}),t.d(e,"simpleCode",function(){return a});var o="\n<Button\nonClick={() => this.setState({ hideBackdropModalOpen: true })}\n>\n  Open Modal\n</Button>\n{this.state.hideBackdropModalOpen && (\n<Modal\nhideBackDrop\nonClose={() => this.setState({ hideBackdropModalOpen: false })}\n>\n{closeToggle => (\n  <div\n    style={{\n      width: '100%',\n      height: '250px',\n      display: 'flex',\n      justifyContent: 'center',\n      alignContent: 'center',\n      alignItems: 'center',\n      background: 'white',\n    }}\n  >\n    <input\n      style={{ fontSize: '20px' }}\n      type=\"button\"\n      value=\"Close\"\n      onClick={closeToggle}\n    />\n  </div>\n)}\n</Modal>\n)}\n",l="\n<Button\n  onClick={() => this.setState({ onCloseModal: true })}\n>\n    Open Modal\n</Button>\n{this.state.onCloseModal && (\n<Modal top onClose={() => { this.setState({ onCloseModal: false }); alert('Closed'); }}>\n  {closeToggle => (\n    <div\n      style={{\n        width: '100%',\n        height: '250px',\n        display: 'flex',\n        justifyContent: 'center',\n        alignContent: 'center',\n        alignItems: 'center',\n        background: 'white',\n      }}\n    >\n      <input\n        style={{ fontSize: '20px' }}\n        type=\"button\"\n        value=\"Close\"\n        onClick={closeToggle}\n      />\n    </div>\n  )}\n</Modal>\n)}\n",i="\n<Button\n  onClick={() => this.setState({ smallModalOpen: true })}\n>\n  Open Small Modal\n</Button>\n{this.state.smallModalOpen && (\n<Modal small onClose={() => this.setState({ smallModalOpen: false })}>\n  {closeToggle => (\n    <div\n      style={{\n        width: '100%',\n        height: '250px',\n        display: 'flex',\n        justifyContent: 'center',\n        alignContent: 'center',\n        alignItems: 'center',\n        background: 'white',\n      }}\n    >\n      <input\n        style={{ fontSize: '20px' }}\n        type=\"button\"\n        value=\"Close\"\n        onClick={closeToggle}\n      />\n    </div>\n  )}\n</Modal>\n)}\n\n<Button\nonClick={() => this.setState({ mediumModalOpen: true })}\n>\n  Open Medium Modal\n</Button>\n{this.state.mediumModalOpen && (\n<Modal medium onClose={() => this.setState({ mediumModalOpen: false })}>\n{closeToggle => (\n  <div\n    style={{\n      width: '100%',\n      height: '250px',\n      display: 'flex',\n      justifyContent: 'center',\n      alignContent: 'center',\n      alignItems: 'center',\n      background: 'white',\n    }}\n  >\n    <input\n      style={{ fontSize: '20px' }}\n      type=\"button\"\n      value=\"Close\"\n      onClick={closeToggle}\n    />\n  </div>\n)}\n</Modal>\n)}\n\n<Button\n  onClick={() => this.setState({ largeModalOpen: true })}\n>\n    Open Large Modal\n</Button>\n{this.state.largeModalOpen && (\n<Modal large onClose={() => this.setState({ largeModalOpen: false })}>\n  {closeToggle => (\n    <div\n      style={{\n        width: '100%',\n        height: '250px',\n        display: 'flex',\n        justifyContent: 'center',\n        alignContent: 'center',\n        alignItems: 'center',\n        background: 'white',\n      }}\n    >\n      <input\n        style={{ fontSize: '20px' }}\n        type=\"button\"\n        value=\"Close\"\n        onClick={closeToggle}\n      />\n    </div>\n  )}\n</Modal>\n)}\n\n<Button\n  onClick={() => this.setState({ customSizeModal: true })}\n>\n    Open Custom Size Modal\n</Button>\n{this.state.customSizeModal && (\n<Modal style={{ width: '90%' }} onClose={() => this.setState({ customSizeModal: false })}>\n  {closeToggle => (\n    <div\n      style={{\n        width: '100%',\n        height: '250px',\n        display: 'flex',\n        justifyContent: 'center',\n        alignContent: 'center',\n        alignItems: 'center',\n        background: 'white',\n      }}\n    >\n      <input\n        style={{ fontSize: '20px' }}\n        type=\"button\"\n        value=\"Close\"\n        onClick={closeToggle}\n      />\n    </div>\n  )}\n</Modal>\n)}\n",s="\n<Button\nonClick={() => this.setState({ autoCloseModalOpen: true })}\n>\n  Open Modal\n</Button>\n{this.state.autoCloseModalOpen && (\n<Modal autoClose={false}>\n{closeToggle => (\n  <div\n    style={{\n      width: '100%',\n      height: '250px',\n      display: 'flex',\n      justifyContent: 'center',\n      alignContent: 'center',\n      alignItems: 'center',\n      background: 'white',\n    }}\n  >\n    <input\n      style={{ fontSize: '20px' }}\n      type=\"button\"\n      value=\"Close\"\n      onClick={\n          () => {\n            this.setState({ autoCloseModalOpen: false });\n            closeToggle();\n          }}\n    />\n  </div>\n)}\n</Modal>\n)}\n",a="\n<Button onClick={() => this.setState({ simpleModalOpen: true })}>Open Modal</Button>\n{this.state.simpleModalOpen && (\n<Modal onClose={() => this.setState({ simpleModalOpen: false })}>\n  {closeToggle => (\n    <div\n      style={{\n        width: '100%',\n        height: '250px',\n        display: 'flex',\n        justifyContent: 'center',\n        alignContent: 'center',\n        alignItems: 'center',\n        background: 'white',\n      }}\n    >\n      <input\n        style={{ fontSize: '20px' }}\n        type=\"button\"\n        value=\"Close\"\n        onClick={closeToggle}\n      />\n    </div>\n  )}\n</Modal>\n)}\n"}},[["86Et","5d41"]]]);