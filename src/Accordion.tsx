import React, {useState} from "react";


type AccordionPropsType = {
    title: string,
    // collapsed: boolean
}

type AccordionTitlePropsType = {
    title: string
}



export const UncontrolledAccordion = (props: AccordionPropsType) => {
    const [collapsed, setCollapsed] = useState(false);


    return (
        <>
            <AccordionTitle   title={props.title}/>
            <button onClick={() => setCollapsed(!collapsed)}>TOGGLE</button>
            {collapsed && <AccordionBody/>}
        </>


    )
}


const AccordionTitle = (props: AccordionTitlePropsType) => {
    return (
        <h3 onClick={() => {}}> {props.title}</h3>
    )
}

const AccordionBody = () => {
    return (
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
            <li>4</li>
            <li>5</li>
        </ul>
    )
}
