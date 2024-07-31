import React from "react";


type AccordionPropsType = {
    title: string,
    collapsed: boolean,
    onChange: () => void,

}

type AccordionTitlePropsType = {
    title: string,
    onChange: () => void,



}


export const UncontrolledAccordion = (props: AccordionPropsType) => {


    return (
        <>
            <AccordionTitle title={props.title} onChange={() => {
                props.onChange()
            }}/>

            {!props.collapsed && <AccordionBody/>}
        </>


    )
}




const AccordionTitle = (props: AccordionTitlePropsType) => {
    return (
        <h3 onClick={(e: React.MouseEvent<HTMLHeadingElement>) => {
            props.onChange()
        }}>{props.title}</h3>
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
