import React from "react";
import "../css/Header.css";

function Header(props) {
    return (
        <header className="en-lang">
            <nav>
                <div className="logo-container">
                    <a href="#"><img src={props.logo} /></a>
                </div>
                <ul className="header-nav-list">
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Services</a></li>
                    <li><a href="#">Contact Us</a></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;