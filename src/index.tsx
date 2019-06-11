import { initializeIcons } from "@uifabric/icons";
import { loadTheme } from "office-ui-fabric-react";
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";
import * as serviceWorker from "./serviceWorker";

initializeIcons();

loadTheme({
  palette: {
    themePrimary: "#ff0000",
    // tslint:disable-next-line:object-literal-sort-keys
    themeLight: "#ffb3b3",
    themeLighter: "#ffd6d6",
    themeLighterAlt: "#fff5f5",
    themeTertiary: "#ff6666",
    themeSecondary: "#ff1f1f",
    themeDarkAlt: "#e60000",
    themeDark: "#c20000",
    themeDarker: "#8f0000",
    neutralLighterAlt: "#f8f8f8",
    neutralLighter: "#f4f4f4",
    neutralLight: "#eaeaea",
    neutralQuaternaryAlt: "#dadada",
    neutralQuaternary: "#d0d0d0",
    neutralTertiaryAlt: "#c8c8c8",
    neutralTertiary: "#c2c2c2",
    neutralSecondary: "#858585",
    neutralPrimaryAlt: "#4b4b4b",
    neutralPrimary: "#333333",
    neutralDark: "#272727",
    black: "#1d1d1d",
    white: "#ffffff",
  },
});

ReactDOM.render(<App/>, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
