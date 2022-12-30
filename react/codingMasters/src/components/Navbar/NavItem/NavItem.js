import React from "react";
import './NavItem.css'

function NavItem({ title }) {

    return (
        <div className="navitem_container">
            <p className="navitem"> {title} </p>
        </div>
    )
}

export default NavItem