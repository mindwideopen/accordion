import React from 'react';
import './App.css';
import {Accordion} from "./components/Accordion";
import {Rating} from "./components/Rating";

function App() {
    return (<div>
            <AppTitle/>
            <Rating/>
            <Accordion/>
            <Rating/>
        </div>

    );
}



const AppTitle = () => {
    return <>
        This is react App
    </>
}



export default App;
