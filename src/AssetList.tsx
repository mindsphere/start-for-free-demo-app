/** @format */

import React, { Component } from "react";
import { AssetManagementModels, MindSphereSdk } from "@mindconnect/mindconnect-nodejs";

class AssetList extends Component {
    // * The authentication for the frontend applications is done
    // * by MindSphere infrastructure, we don't have to pass here any authorization.

    // * When running locally during development the /api/* calls are redirected by react-proxy to
    // * localhost:7707 which does the authentication instead of MindSphere infrastructure.
    // * see 'proxy' entry in package.json

    // * The list is built from scratch just for demo purposes.
    // * There is a MindSphere Component <mdsp-asset-list/> which can do this out of the box.

    private _sdk = new MindSphereSdk();

    state = { assets: { _embedded: [] }, error: undefined };

    render() {
        const assets = this.state.assets as AssetManagementModels.AssetListResource;

        const items = assets._embedded?.assets?.map((item) => (
            <>
                <li className="list__item">
                    <div className="item__icon">
                        <span className="iconMdsp asset" aria-hidden="true"></span>
                    </div>
                    <div className="item__content">
                        <div className="content__column content__column--primary xs-100 sm-66 md-33 lg-20 xl-20">
                            <h4 className="item__title">{item.name}</h4>
                            <div className="item__description">{item.description}</div>
                        </div>
                        <div className="content__column xs-100 sm-33 md-33 lg-33 xl-10 xs-hide sm-hide">
                            <div className="item__meta">{item.typeId}</div>
                        </div>
                    </div>
                </li>
            </>
        ));
        return (
            <div>
                <div className="list list--compact">
                    <div className="list__header">
                        <b>Asset list</b>
                        <div className="header__description">
                            <p>
                                List of all assets in the tenant using <b>MindSphere TypeScript SDK</b> and{" "}
                                <b>MindSphere Design System.</b> (see code in AssetList.tsx)
                            </p>
                        </div>
                    </div>
                    <ul className="list__list">{items}</ul>
                </div>

                <div className="messageWrapper" style={{ display: this.state.error ? "block" : "none" }}>
                    <div className="message is-alert message--withIcon">
                        <h1 className="message__headline">Error ocurred</h1>
                        <p>{this.state.error}</p>
                    </div>
                </div>
            </div>
        );
    }

    async componentDidMount() {
        try {
            const assets = await this._sdk.GetAssetManagementClient().GetAssets({ sort: "name", size: 200 });
            this.setState({ assets: assets, error: undefined });
        } catch (err) {
            this.setState({ assets: [], error: err.message });
        }
    }
}

export default AssetList;
