import React from "react";
import "./App.scss";
import { Layout } from "components";
import {Button} from "ui-kit";

export const App: React.FC = () => {

    const handleButtonClick = (event: React.MouseEvent) =>{
        console.log("[btn click event]", event)
    }
    
    return (
        <div className="App">
            <Layout>
                <h1>React Typescript UI Library</h1>
                <hr />
                <h2>Button</h2>
                <Button onClick={handleButtonClick}>Send</Button>
                <Button isDisabled={true} onClick={handleButtonClick}>Send</Button>
            </Layout>
        </div>
    );
};
