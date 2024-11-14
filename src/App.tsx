import React from 'react';
import './App.css';
import {Accordion} from "./components/Accordion";
import {Rating} from "./components/Rating";
import OnOff from "./components/OnOff";

function App() {
    return (<div>
            <AppTitle/>
            <Rating value={2}/>
            <Accordion/>
            <Rating value={2}/>
            <OnOff on={true}/>
        </div>

    );
}



const AppTitle = () => {
    return <>
        This is react App
    </>
}



export default App;
