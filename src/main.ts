import * as React from "react";
import { render } from "react-dom";
import { createStore } from "redux";
import reducers from "./reducers";

const store = createStore(reducers);

import { App } from "./app/App";

render(React.createElement(App, { store }), document.getElementById("react"));
