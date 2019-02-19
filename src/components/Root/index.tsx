import React from "react";
import Header from "../Header";

// @ts-ignore
export default function Root(props) {
    return (
        <div>
            <Header/>
            {props.children}
        </div>
    );
}
