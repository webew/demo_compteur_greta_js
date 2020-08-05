import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import BlocCompteurs from "./components/BlocCompteurs";

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            compteurs: [
                { id: 1, value: 2 },
                { id: 2, value: 3 },
                { id: 3, value: 1 },
                { id: 4, value: 20 },
            ],
        };
    }
    handleIncrementApp = () => {
        console.log("Je suis remonté dans App");
    };
    render() {
        return (
            <>
                <Navbar total={this.state.total} />
                <BlocCompteurs
                    onIncrement={this.handleIncrementApp}
                    compteurs={this.state.compteurs}
                />
            </>
        );
    }
}

export default App;
