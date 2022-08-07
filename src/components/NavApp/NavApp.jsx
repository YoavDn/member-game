import * as React from "react";
import { Link } from "react-router-dom";





const NavApp = () => {
    return (
        <div className="nav-full">
            <nav className="main-nav flex">
                <div className="logo">Member </div>
                <div className="nav-links flex">
                    <Link to="/home">Home</Link>
                    <Link to="/game">Game</Link>
                    <Link to="/about">About</Link>
                </div>
            </nav>

        </div>
    )
}

export default NavApp