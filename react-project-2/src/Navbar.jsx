import React from "react";
import { NavLink } from "react-router-dom";

const linkStyles = {
    display: "inline-block",
    width: "50px",
    padding: "12px",
    margin: "0 6px 6px",
    background: "blue",
    textDecoration: "none",
    color: "white",
};

function NavBar() {
    return (
        <nav>
            <NavLink to="/"
                exact
                style={linkStyles}

            // {({ isActive }) => ({ background: isActive ? "darkblue" : "blue" })}
            >
                Home
            </NavLink>
            <NavLink to="/about"
                exact
                style={linkStyles}
                activestyle={{
                    background: "darkblue",
                }}
            >
                About
            </NavLink>
            <NavLink to="/cart"
                exact
                style={linkStyles}
                activestyle={{
                    background: "darkblue",
                }}
            >
                Cart
            </NavLink>
            <NavLink to="/users"
                exact
                style={linkStyles}
                activestyle={{
                    background: "darkblue",
                }}
            >
                Users
            </NavLink>
        </nav>
    );
}

export default NavBar;