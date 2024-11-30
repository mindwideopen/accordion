import {Meta} from '@storybook/react';

import React, {useState} from "react";
import {Rating} from "./Rating";


const meta: Meta<typeof Rating> = {
    title: 'Rating',
    component: Rating,
};

export default meta;

export const Rating_0 = () => {
    return <Rating value={0} setRating={()=>{}}/>
};

export const Rating_1 = () => {
    return <Rating value={1} setRating={()=>{}}/>
};

export const Rating_2 = () => {
    return <Rating value={2} setRating={()=>{}}/>
};

export const Rating_3 = () => {
    return <Rating value={3} setRating={()=>{}}/>
};

export const Rating_4 = () => {
    return <Rating value={4} setRating={()=>{}}/>
};

export const Rating_5 = () => {
    return <Rating value={5} setRating={()=>{}}/>
};

export const Rating_demo = () => {
    const[value, setValue] = useState<number>(0);
    const setRating = (value: number) => {
        setValue(value)
    }
    return <Rating value={value} setRating={setRating}/>
};



