import { PrimaryButton } from "office-ui-fabric-react/lib/Button";
import React from "react";
import { FormattedMessage } from "react-intl";
import "./index.css";

export default function Home() {
    return (
        <div className="Home-Container">
            <div className="Home-Main-Container ms-slideUpIn20">
                <img className="Home-Main-Icon" src="/logo.png" />
                <span className="Home-Main-Title ms-font-su">ShibaJS</span>
                <span className="Home-Main-Desc">
                    <FormattedMessage id="home.main.desc" />
                </span>
                <div className="Home-Main-Actions">
                    <PrimaryButton
                        iconProps={{
                            iconName: "Like",
                        }}
                    >
                    <FormattedMessage id="home.main.actions.gettingStart"/>
                </PrimaryButton>
                </div>
            </div>
            <div className="ms-Grid Home-Desc-Container ms-slideUpIn20">
                <div className="ms-Grid-row">
                    <div className="ms-Grid-col ms-sm4 ms-md4 ms-lg4 center-col">
                        <div className="ms-font-xl">
                            <FormattedMessage id="home.desc.col1.title" />
                        </div>
                        <div className="Home-Desc-Content ms-font-m">
                            <FormattedMessage id="home.desc.col1.content" />
                        </div>
                    </div>
                    <div className="ms-Grid-col ms-sm4 ms-md4 ms-lg4 center-col">
                        <div className="ms-font-xl">
                            <FormattedMessage id="home.desc.col2.title" />
                        </div>
                        <div className="Home-Desc-Content ms-font-m">
                            <FormattedMessage id="home.desc.col2.content" />
                        </div>
                    </div>
                    <div className="ms-Grid-col ms-sm4 ms-md4 ms-lg4 center-col">
                        <div className="ms-font-xl">
                            <FormattedMessage id="home.desc.col3.title" />
                        </div>
                        <div className="Home-Desc-Content ms-font-m">
                            <FormattedMessage id="home.desc.col3.content" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
