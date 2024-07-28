import React, {useState} from "react";


type AccordionPropsType = {
    title: string,
    // collapsed: boolean
}

type AccordionTitlePropsType = {
    title: string,
    onClick: () => void,

}


export const UncontrolledAccordion = (props: AccordionPropsType) => {
    const [collapsed, setCollapsed] = useState(false);

    return (
        <>
            <AccordionTitle title={props.title} onClick={() => setCollapsed(!collapsed)}/>

            {collapsed && <AccordionBody/>}
        </>


    )
}


const AccordionTitle = (props: AccordionTitlePropsType) => {
    return (
        <h3 onClick={() => {
            props.onClick()
        }}>---Menu---</h3>
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
