import React from "react";

class Compteur extends React.Component {
    constructor(props) {
        super(props);
        this.state = { count: 0 };
    }

    render() {
        return (
            <div className="mb-2">
                <span>{this.props.compteurProp.value}</span>
                <button
                    onClick={this.props.handleIncrement}
                    className="btn btn-secondary ml-2"
                >
                    +
                </button>
                <button
                    onClick={this.handleDecrement}
                    className="btn btn-secondary ml-2"
                >
                    -
                </button>
                <button className="btn btn-danger ml-2">x</button>
            </div>
        );
    }
}

export default Compteur;
