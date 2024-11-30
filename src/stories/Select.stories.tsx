import {Meta} from '@storybook/react';
import {action} from '@storybook/addon-actions';
import React, {useState} from "react";
import {Select} from "../components/select/Select";


const meta: Meta<typeof Select> = {
    title: 'Select',
    component: Select,
};

export default meta;

export const SelectDemo = () => {

    return <>
        <Select onChange={action('value changed')}
                value={'2'}
                items={[
                    {value: '1', title: 'Minsk'},
                    {value: '2', title: 'Moscow'},
                    {value: '3', title: 'Kiev'},
                ]}
        />
    </>


}

export const WithValue = () => {
    const [value, setValue] = useState('2');


    const onChangeHandler = (value: any) => {

        setValue(value)
    }
    return <>
        <Select onChange={onChangeHandler}
                value={value}
                items={[
                    {value: '1', title: 'Minsk'},
                    {value: '2', title: 'Moscow'},
                    {value: '3', title: 'Kiev'},
                ]}
        />
    </>

}
export const WithoutValue = () => {
    const [value, setValue] = useState(null);
    const onChangeHandler = (value: any) => {

        setValue(value)
    }
    return <>
        <Select onChange={onChangeHandler}
                value={value}
                items={[
                    {value: '1', title: 'Minsk'},
                    {value: '2', title: 'Moscow'},
                    {value: '3', title: 'Kiev'},
                ]}
        />
    </>


}