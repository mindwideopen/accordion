import React from 'react';

import './App.css';
import {Rating} from "./Rating";
import {UncontrolledAccordion} from "./Accordion";
import {PageTitle} from "./PageTitle";
import OnOff from "./OnOff";

function App() {
    return (
        <div className="App">
            <OnOff on={false}/>
            <PageTitle title={'App component'}/>

            <UncontrolledAccordion title={'---Menu---'}/>

            <Rating/>
        </div>
    );
}

export default App;






