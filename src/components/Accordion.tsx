import React from "react";

type AccordionPropsType = {
    accordionCollapsed: boolean;
    collapseAccordion: () => void;
}

export const Accordion = (props: AccordionPropsType) => {

    return (
        <div>
            <AccordionTitle collapseAccordion={props.collapseAccordion}/>
            <AccordionBody accordionCollapsed={props.accordionCollapsed}/>

        </div>
    )
}

type AccordionTitlePropsType = {
    collapseAccordion: () => void
}

const AccordionTitle = (props: AccordionTitlePropsType) => {

    console.log('AccordionTitle rendering');

    return <h3 onClick={() => props.collapseAccordion()}>
        Меню
    </h3>
}

type AccordioBodyPropsType = {
    accordionCollapsed: boolean
}

const AccordionBody = (props: AccordioBodyPropsType) => {
    console.log('AccordionBody rendering');

    return (
        props.accordionCollapsed ? null :
            <ul>
                <li>1</li>
                <li>2</li>
                <li>3</li>
            </ul>)


}
