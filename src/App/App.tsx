import React from 'react';
import './App.css';
import Items from "../Features/Items/Items";
import Constructor from "../Features/Constructor/Constructor";
import ToggleButton from "../Components/ToggleButton/ToggleButton";

function App() {
    return (
        <div className="App">
            <ToggleButton/>
            <div className={"Container"}>
                <Items/>
                <Constructor/>
            </div>
        </div>
    );
}

export default App;
