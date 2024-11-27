import React from "react";

type AccordionPropsType = {
    accordionCollapsed: boolean;
    collapseAccordion: () => void;
    title: string
}

export const Accordion = (props: AccordionPropsType) => {

    return (
        <div>
            <AccordionTitle collapseAccordion={props.collapseAccordion}
                            title={props.title}/>
            <AccordionBody accordionCollapsed={props.accordionCollapsed}/>

        </div>
    )
}

type AccordionTitlePropsType = {
    collapseAccordion: () => void,
    title: string
}

const AccordionTitle = (props: AccordionTitlePropsType) => {


    debugger
    return <h3 style={{
        border: '2px solid red',
        width: 'fit-content',
        cursor: 'pointer'
    }}
               onClick={() => props.collapseAccordion}>
        {props.title}
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
