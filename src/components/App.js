import React from "react";
import { Route, Switch } from "react-router-dom";
import NavBar from "./NavBar";
import Home from "../pages/Home";
import Directors from "../pages/Directors";
import Actors from "../pages/Actors";
import Movie from "../pages/Movie";

function App() {
    return (
        <div>
            <NavBar />
            <Switch>
                <Route path="/movies">
                    <Movie />
                </Route>
                <Route path="/directors">
                    <Directors />
                </Route>
                <Route path="/actors">
                    <Actors />
                </Route>
                <Route exact path="/">
                    <Home />
                </Route>
            </Switch>
        </div>
    )
}

export default App;