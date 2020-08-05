import React from "react";
import Compteur from "./Compteur";

class BlocCompteurs extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                {this.props.compteurs.map((compteur) => {
                    return (
                        <Compteur
                            handleIncrement={this.props.onIncrement}
                            compteurProp={compteur}
                        />
                    );
                })}
            </div>
        );
    }
}

export default BlocCompteurs;
