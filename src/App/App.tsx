import React from 'react';
import './App.css';
import Items from "../Features/Items/Items";
import Constructor from "../Features/Constructor/Constructor";
import ToggleButton from "../Components/ToggleButton/ToggleButton";
import {useAppSelector} from "../Store/Store";

function App() {
    const isConstructed = useAppSelector(state => state.app.isConstructed)
    return (
        <div className="App">
            <ToggleButton/>
            <div className={"Container"}>
                {!isConstructed && <Items/>}
                <Constructor/>
            </div>
        </div>
    );
}

export default App;
