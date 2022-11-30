import React from "react";
import "./App.scss";
import {Layout} from "components";
import {Switch, Route} from 'react-router-dom'
import {ROUTES} from "routes";
import {ButtonPage, IconPage, HomePage} from "Pages";


export const App: React.FC = () => {


    return (
        <div className="App">
            <Layout>
                <Switch>
                    <Route  path={ROUTES.BUTTON} component = {ButtonPage} />
                    <Route  path={ROUTES.ICON} component = {IconPage} />
                    <Route  path={ROUTES.HOME} component = {HomePage} />
                </Switch>
            </Layout>
        </div>
    );
};
