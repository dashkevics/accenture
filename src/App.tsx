import React from 'react';
import {Route, Routes} from "react-router-dom";
import {MainScreen} from "./screens/MainScreen/MainScreen";
import {StartScreen} from "./screens/StartScreen/StartScreen";
import "./App.sass"
import {GameScreen} from "./screens/GameScreen/GameScreen";

function App() {
    return (
        <div className="App">
            <Routes>
                <Route path="/" element={<MainScreen/>}/>
                <Route path="/start" element={<StartScreen/>}/>
                <Route path="/game" element={<GameScreen/>}/>
            </Routes>
        </div>
    );
}

export default App;
