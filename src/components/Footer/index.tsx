import React from "react";
import "./index.css";

export default function Footer() {
    return (
        <div className="Footer-Container">
            <div className="Footer-Content">
                <div className="ms-font-s-plus">
                    Copyright © 2018-{new Date().getFullYear()} Tlaster
                </div>
            </div>
        </div>
    );
}
