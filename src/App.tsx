import React from 'react';
import './App.css';

function App() {
    return (<div>
            <AppTitle/>
            <Rating/>
            <Accordion/>
        </div>

    );
}

const AccordionTitle = () => {
    console.log('AccordionTitle rendering');
    return <h3>
        Меню
    </h3>
}

const AccordionBody = () => {
    console.log('AccordionBody rendering');
    return <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
    </ul>
}

const AppTitle = () => {
    return <>
        This is react App
    </>
}

const Rating = () => {
    return (
        <div>
            <Star/>
            <Star/>
            <Star/>
            <Star/>
            <Star/>
        </div>
    )
}

const Accordion = () => {
    return (
        <div>
            <AccordionTitle/>
            <AccordionBody/>

        </div>
    )
}

const Star = () => {
    return <div>star</div>
}

export default App;
