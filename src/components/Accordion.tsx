import React from "react";

export const Accordion = () => {
    return (
        <div>
            <AccordionTitle/>
            <AccordionBody/>

        </div>
    )
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
