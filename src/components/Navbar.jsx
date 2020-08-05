import React from "react";

class Navbar extends React.Component {
    render() {
        return (
            <nav className="navbar navbar-light bg-light">
                <span className="navbar-brand mb-0 h1">
                    <span className="badge badge-info">{this.props.total}</span>
                    compteurs actifs
                </span>
            </nav>
        );
    }
}

export default Navbar;
