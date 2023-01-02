import React from "react";
import './FooterLogo.css'

export default function FooterLogo({ logo, altImage }) {

    return (
        <a href="#">
            <img src={logo} alt={altImage} />
        </a>
    )
}