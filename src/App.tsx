import React, {useState} from 'react';

import './App.css';
import {Rating} from "./Rating";
import {UncontrolledAccordion} from "./Accordion";
import {PageTitle} from "./PageTitle";
import OnOff from "./OnOff";

function App() {
    let [switchOn, setSwitchOn] = useState(true);

    return (
        <div className="App">
            <OnOff on={switchOn} onChange={setSwitchOn}/>
            <PageTitle title={'App component'}/>

            <UncontrolledAccordion title={'---Menu---'}/>

            <Rating/>
        </div>
    );
}

export default App;






