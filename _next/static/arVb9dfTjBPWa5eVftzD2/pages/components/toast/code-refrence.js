(window.webpackJsonp=window.webpackJsonp||[]).push([["aa54"],{CWjf:function(n,o,t){"use strict";t.r(o),t.d(o,"directionCode",function(){return s}),t.d(o,"hideCode",function(){return a}),t.d(o,"pauseOnHover",function(){return e}),t.d(o,"simpleCode",function(){return i});var s="\n<ToastProvider topLeft>\n  <ToastConsumer>\n    {({ addToast }) => (\n      <Button\n        onClick={\n      () => addToast(\n        <Dismiss>\n        Top Left Toast\n        </Dismiss>,\n      )\n      }\n      >\n    Show Top Left\n      </Button>\n    )}\n  </ToastConsumer>\n</ToastProvider>\n\n<ToastProvider topCenter>\n    <ToastConsumer>\n    {({ addToast }) => (\n        <Button\n        onClick={\n        () => addToast(\n            <Dismiss>\n            Top Center Toast\n            </Dismiss>,\n        )\n        }\n        >\n        Show Top Center\n        </Button>\n    )}\n    </ToastConsumer>\n</ToastProvider>\n\n<ToastProvider topRight>\n    <ToastConsumer>\n    {({ addToast }) => (\n        <Button\n        onClick={\n        () => addToast(\n            <Dismiss>\n            Top Right Toast\n            </Dismiss>,\n        )\n        }\n        >\n        Show Top Right\n        </Button>\n    )}\n    </ToastConsumer>\n</ToastProvider>\n\n<ToastProvider bottomLeft>\n    <ToastConsumer>\n      {({ addToast }) => (\n        <Button\n          onClick={\n          () => addToast(\n            <Dismiss>\n            Bottom Left Toast\n            </Dismiss>,\n          )\n          }\n        >\n        Show Bottom Left\n        </Button>\n      )}\n    </ToastConsumer>\n</ToastProvider>\n\n<ToastProvider bottomCenter>\n    <ToastConsumer>\n    {({ addToast }) => (\n      <Button\n        onClick={\n        () => addToast(\n          <Dismiss>\n          Bottom Center Toast\n          </Dismiss>,\n        )\n        }\n      >\n      Show Bottom Center\n      </Button>\n    )}\n    </ToastConsumer>\n</ToastProvider>\n\n<ToastProvider bottomRight>\n    <ToastConsumer>\n      {({ addToast }) => (\n        <Button\n          onClick={\n          () => addToast(\n            <Dismiss>\n            Bottom Right Toast\n            </Dismiss>,\n          )\n          }\n        >\n        Show Bottom Right\n        </Button>\n      )}\n    </ToastConsumer>\n</ToastProvider>\n",a="\n<ToastProvider>\n    <ToastConsumer>\n    {({ addToast, removeToast }) => {\n        let toastId;\n        return (\n        <>\n            <Button\n            onClick={\n        () => {\n            toastId = addToast(\n            <Dismiss>\n            Lorem Ipsum is not gypsum. Did you know Toast\n            </Dismiss>,\n            );\n            this.setState({ toastId });\n        }\n        }\n            >\n        Show Toast\n            </Button>\n            <Button\n            danger\n            onClick={\n            () => removeToast(this.state.toastId)\n        }\n            >\n        Remove Toast\n            </Button>\n        </>\n        );\n    }\n    }\n    </ToastConsumer>\n</ToastProvider>\n",e="\n<ToastProvider pauseOnHover>\n    <ToastConsumer>\n      {({ addToast, removeToast }) => (\n        <Button\n          onClick={\n            () => addToast(\n              <Dismiss\n                onClose={removeToast}\n              >\n              Hover over this toast and it will pause\n              </Dismiss>,\n            )\n            }\n        >\n        Show Toast\n        </Button>\n      )}\n    </ToastConsumer>\n</ToastProvider>\n",i="\n<ToastProvider autoDismissTimeout={10000}>\n  <ToastConsumer>\n    {({ addToast }) => (\n      <Button\n        onClick={\n        () => addToast(\n          <Paper success>\n            Any content can go here, check this sample's code\n          </Paper>,\n        )\n        }\n      >\n    Show Toast\n      </Button>\n    )}\n  </ToastConsumer>\n</ToastProvider>\n"},s681:function(n,o,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/toast/code-refrence",function(){var n=t("CWjf");return{page:n.default||n}}])}},[["s681","5d41"]]]);