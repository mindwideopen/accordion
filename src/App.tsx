import React, {useState} from 'react';

import './App.css';
import {Rating} from "./Rating";
import {UncontrolledAccordion} from "./Accordion";
import {PageTitle} from "./PageTitle";
import OnOff from "./OnOff";

function App() {
    let [switchOn, setSwitchOn] = useState(true);
    let [collapsed, setCollapsed] = useState(true);

    return (
        <div className="App">
            <OnOff on={switchOn} onChange={setSwitchOn}/>
            <PageTitle title={'App component'}/>

            <UncontrolledAccordion title={'-   -      -   Menu    -   -   -'}
                                   collapsed={collapsed}
                                   onChange={() => {setCollapsed(!collapsed)}}
            />

            <Rating value={1}/>
        </div>
    );
}

export default App;






