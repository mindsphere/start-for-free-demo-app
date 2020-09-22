/** @format */

import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Resources from "./Resources";
import * as serviceWorker from "./serviceWorker";
import AssetList from "./AssetList";
import AssetMap from "./AssetMap";

ReactDOM.render(
    <React.StrictMode>
        <AssetList />
    </React.StrictMode>,
    document.getElementById("lead")
);

ReactDOM.render(
    <React.StrictMode>
        <AssetMap />
        <Resources />
    </React.StrictMode>,
    document.getElementById("main")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
