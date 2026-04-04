import React from "react";
import './Navbar.css';

export default function Navbar({ setActivePage }) {
    return (
        <nav className="soulshine-nav">
            <div className="nav-inner">
                <h2 className="nav-logo" onClick={() => setActivePage("landing")}>
                    Soulshine Mountain
                </h2>

                <ul className="nav-links">
                    <li><button onClick={() => setActivePage("restoration")}>Restoration Ecology</button></li>
                    <li><button onClick={() => setActivePage("guide")}>Wilderness Guiding</button></li>
                    <li><button onClick={() => setActivePage("contact")}>Contact</button></li>
                </ul>
            </div>
        </nav>
    );
}
