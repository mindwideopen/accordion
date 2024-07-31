import {UncontrolledAccordion} from "./Accordion";
import {useState} from "react";
import {action} from "@storybook/addon-actions";


export default {
    component: UncontrolledAccordion,
};




const onChangeHandler = action("onChangeHandler")


export const CollapsedAccordion = () => {
    return <UncontrolledAccordion title={'CollapsedAccordion'}
                                  collapsed={true}
                                  onChange={onChangeHandler}
    />
}

export const OpenAccordion = () => {
    return <UncontrolledAccordion title={'OpenAccordion'}
                                  collapsed={false}
                                  onChange={() => {
                                  }}
    />
}

export const AccordionDemo = () => {

    const [collapsed, setCollapsed] = useState(false);
    return (<UncontrolledAccordion title={'AccordionDemo'}
                                   collapsed={collapsed}
                                   onChange={() => {
                                       setCollapsed(!collapsed);
                                   }}
        />
    )
}