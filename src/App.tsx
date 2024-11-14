import React, {useState} from 'react';
import './App.css';
import {Accordion} from "./components/Accordion";
import {Rating, RatingValueType} from "./components/Rating";
import OnOff from "./components/OnOff";

function App() {
    const[rating, setRating] = useState<RatingValueType>(0);
    const selectRating = (value: RatingValueType) => {

        setRating(value)
    }


    const[accordionCollapsed, setAccordionCollapsed] = useState<boolean>(false);
    const collapseAccordion = () => {
        setAccordionCollapsed(!accordionCollapsed);
    }

    const [on, setOn] = useState<boolean>(true);
    const switchButton =  () => {
        setOn(!on)
    }

    return (<div>
            <AppTitle/>
            <Rating rating={rating} selectRating={selectRating}/>
            <Accordion accordionCollapsed={accordionCollapsed} collapseAccordion={collapseAccordion}/>
            <Rating rating={rating} selectRating={selectRating}/>
            <OnOff status={on} switchButton={switchButton}/>
        </div>

    );
}



const AppTitle = () => {
    return <>
        This is react App
    </>
}



export default App;
