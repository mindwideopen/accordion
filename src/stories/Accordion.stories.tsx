import {Meta, StoryObj} from '@storybook/react';

import {Accordion} from '../components/Accordion';
import React, {useState} from "react";

const meta: Meta<typeof Accordion> = {
    component: Accordion,
};

export default meta;
type Story = StoryObj<typeof Accordion>;

export const CollapsedAccordion = () => {
    return <Accordion title={'CollapsedAccordion'}
                      accordionCollapsed={true}
                      collapseAccordion={() => {}}/>
};



export const Open = () => {
    return <Accordion title={'Accordion'}
                      accordionCollapsed={false}
                      collapseAccordion={() => {}}/>
};



export const AccordionDemo = () => {
    const[accordionCollapsed, setAccordionCollapsed] = useState<boolean>(false);
    const collapseAccordion = () => {
        setAccordionCollapsed(!accordionCollapsed);
    }

    return <div>
        <Accordion title={'Accordion'}
                   accordionCollapsed={accordionCollapsed}
                   collapseAccordion={collapseAccordion}/>
    </div>
};

export const Primary: Story = {
    args: {
        title: 'Accordion',
        accordionCollapsed: true,
        collapseAccordion: () => {}
    },
};

