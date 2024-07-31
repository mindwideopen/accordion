import React, {useState} from 'react';


type PropsType = {
    onChange: (on: boolean) => void,
    on: boolean
}


const OnOff = (props: PropsType) => {


    const onStyle = {
        width: '30px',
        height: '30px',
        border: '1px solid black',
        backgroundColor: props.on ? 'green' : 'white',
        display: 'inline-block',


    }
    const offStyle = {
        width: '30px',
        height: '30px',
        border: '1px solid black',
        backgroundColor: props.on ? 'white' : 'red',
        display: 'inline-block',
    }
    const indicatorStyle = {
        width: '10px',
        height: '10px',
        border: '1px solid black',
        backgroundColor: props.on ? 'green' : 'red',
        display: 'inline-block',
        marginLeft: '5px',
        borderRadius: '50%',

    }
    return (
        <div>
            <div onClick={() => {props.onChange(true)}} style={onStyle}>On </div>
            <div style={indicatorStyle}></div>
            <div onClick={() => {  props.onChange(false) }} style={offStyle}>Off  </div>

        </div>

    );
};

export default OnOff;