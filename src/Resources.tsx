/**
 * /* eslint-disable jsx-a11y/anchor-is-valid
 *
 * @format
 */

import React, { Component } from "react";

class Resources extends Component {
    render() {
        return (
            <div className="card">
                <div className="card__header">
                    <h3 className="card__title">MindSphere Developer Resources</h3>
                    <p className="card__subline">
                        This application is just a small template which can show you how to quickly start developing for
                        MindSphere. Take a look at our developer resources or start using Mendix to develop your
                        applications.
                    </p>
                </div>
                <div className="card__content" style={{ marginLeft: "30px" }}>
                    Further Resources:
                    <ul>
                        <li>
                            <a href="https://developer.mindsphere.io" target="_new">
                                MindSphere Developer Documentation
                            </a>
                        </li>
                        <li>
                            <a href="https://design.mindsphere.io" target="_new">
                                MindSphere Design System
                            </a>
                        </li>
                        <li>
                            <a href="https://developer.mindsphere.io/resources/index.html" target="_new">
                                MindSphere Developer Resources
                            </a>
                        </li>
                        <li>
                            <a
                                href="https://developer.mindsphere.io/resources/mindsphere-webcomponents/index.html"
                                target="_new"
                            >
                                MindSphere Web Components
                            </a>
                        </li>
                        <li>
                            <a href="https://opensource.mindsphere.io" target="_new">
                                Open Source Tools and Components
                            </a>
                            <br />

                            <ul>
                                <li>
                                    <a
                                        href="https://opensource.mindsphere.io/docs/mindconnect-nodejs/sdk/index.html"
                                        target="_new"
                                    >
                                        TypeScript SDK
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="https://opensource.mindsphere.io/docs/mindconnect-nodejs/cli/development-proxy.html"
                                        target="_new"
                                    >
                                        Development Proxy
                                    </a>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>
                <div className="card__footer"></div>
            </div>
        );
    }
}

export default Resources;
