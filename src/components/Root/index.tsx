import React from "react";
import Footer from "../Footer";
import Header from "../Header";

// @ts-ignore
export default function Root(props) {
    return (
        <div>
            <Header/>
            {props.children}
            <Footer/>
        </div>
    );
}
