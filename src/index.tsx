import ReactDOM from "react-dom";
import "./index.css";
import React from "react";
import { Provider } from "react-redux";
import App from "./App";

import { Router } from "react-router";
import { BrowserRouter } from "react-router-dom";
import store from "./store/store";

ReactDOM.render(
	<Provider store={store}>
		<BrowserRouter>
			<App />
		</BrowserRouter>
	</Provider>,
	document.getElementById("root"),
);
