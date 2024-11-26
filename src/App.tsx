import React, {useState} from 'react';
import './App.css';
import {Accordion} from "./components/Accordion";
import {Rating, RatingValueType} from "./components/Rating";
import {OnOff} from "./components/OnOff";

function App() {



    const[accordionCollapsed, setAccordionCollapsed] = useState<boolean>(false);
    const collapseAccordion = () => {
        setAccordionCollapsed(!accordionCollapsed);
    }

    const [on, setOn] = useState<boolean>(true);


    return (<div className={'wrapper'}>
            <AppTitle/>
            <Rating />
            <Accordion accordionCollapsed={accordionCollapsed} collapseAccordion={collapseAccordion}/>
            <Rating />
            <OnOff status={on} switchButton={setOn}/>
        </div>

    );
}



const AppTitle = () => {
    return <>
        This is react App
    </>
}



export default App;
