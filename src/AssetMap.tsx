/** @format */

import React, { Component } from "react";

declare global {
    namespace JSX {
        interface IntrinsicElements {
            "mdsp-asset-map": React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
        }
    }
}

class AssetMap extends Component {
    render() {
        return (
            <div>
                <h3>Asset Map</h3>
                <p>
                    List of assets on the map using pure HTML and <b>MindSphere Web Components</b> (see source code in
                    AssetMap.tsx)
                </p>
                <mdsp-asset-map
                    className="component-border"
                    style={{ height: "450px", width: "100%", display: "block" }}
                    error-notification="true"
                    zoom-level="2"
                    draggable="true"
                    asset-click-handler="SelectionList"
                ></mdsp-asset-map>
                <br />
                <br />
            </div>
        );
    }
}

export default AssetMap;
