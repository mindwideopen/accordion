import React from "react";

export const Accordion = () => {
    const [collapsed, setCollapsed] = React.useState(false);
    return (
        <div>
            <AccordionTitle collapsed={() => setCollapsed(!collapsed)}/>
            <AccordionBody collapsed={collapsed}/>

        </div>
    )
}

type AccordioTitlePropsType = {
    collapsed: () => void
}

const AccordionTitle = (props: AccordioTitlePropsType) => {

    console.log('AccordionTitle rendering');

    return <h3 onClick={props.collapsed}>
        Меню
    </h3>
}

type AccordioBodyPropsType = {
    collapsed: boolean
}

const AccordionBody = (props: AccordioBodyPropsType) => {
    console.log('AccordionBody rendering');

    return (
        props.collapsed ? null :
            <ul>
                <li>1</li>
                <li>2</li>
                <li>3</li>
            </ul>)


}
