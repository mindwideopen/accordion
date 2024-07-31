import React, {useState} from 'react';
import Select from "./Select";


export default {
    component: Select,
    title: 'Select'
};


export const WithValue = () => {
const [value, setValue] = useState('2');

    return <>
        <Select onClick={setValue}
        value={value}
        items={[
            {value:"1", title: 'Moscow'},
            {value:"2", title: 'Minsk'},
            {value:"3", title: 'Kld'}
        ]}/>


    </>

}

export const WithoutValue = () => {
    const [value, setValue] = useState('');


    return <>
        <Select onClick={setValue}
                value={value}

                items={[
                    {value:"1", title: 'Moscow'},
                    {value:"2", title: 'Minsk'},
                    {value:"3", title: 'Kld'}
                ]}/>


    </>

}


