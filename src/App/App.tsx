import React from 'react';
import './App.css';
import Items from "../Features/Items/Items";
import Constructor from "../Features/Constructor/Constructor";
import ToggleButton from "../Components/ToggleButton/ToggleButton";
import {useAppSelector} from "../Store/Store";
import Display from "../Components/Display/Display";
import Operators from "../Components/Operators/Operators";
import Numbers from "../Components/Numbers/Numbers";
import EqualButton from "../Components/EqualSign/EqualButton";

function App() {
    const isConstructed = useAppSelector(state => state.app.isConstructed)

    const items = [
        {component: <Display key={1}/>, order: 0, isUsed: false, isDragged: false},
        {component: <Operators key={2}/>, order: 1, isUsed: false, isDragged: false},
        {component: <Numbers key={3}/>, order: 2, isUsed: false, isDragged: false},
        {component: <EqualButton key={4}/>, order: 3, isUsed: false, isDragged: false}
    ]

    return (
        <div className="App">
            <ToggleButton/>
            <div className={"Container"}>
                {!isConstructed && <Items items={items}/>}
                <Constructor items={items}/>
            </div>
        </div>
    );
}

export default App;
