// Outer project imports
import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

// Inner project imports
import Home from './Home';

// global variables
const routes = [
    { path: "/", component: <Home /> },
]

const Container = () => {


    // render
    return (
        <>
            <Router>
                <Switch>
                    {routes.map(
                        (item) => {
                            return (
                                <Route path={item.path}>
                                    {item.component}
                                </Route>
                            )
                        }
                    )}
                </Switch>
            </Router>
        </>

    )
}

export default Container