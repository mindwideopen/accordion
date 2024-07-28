import React, {useState} from 'react';


type PropsType = {
    on: boolean
}




const OnOff = (props: PropsType) => {
    let [on, setOn] = useState<boolean>(true);

    const onStyle = {
        width: '30px',
        height: '30px',
        border: '1px solid black',
        backgroundColor: on ? 'green' : 'white',
        display: 'inline-block',



    }
    const offStyle = {
        width: '30px',
        height: '30px',
        border: '1px solid black',
        backgroundColor: on ? 'white' : 'red',
        display: 'inline-block',
    }
    const indicatorStyle = {
        width: '10px',
        height: '10px',
        border: '1px solid black',
        backgroundColor: on ? 'green' : 'red',
        display: 'inline-block',
        marginLeft: '5px',
        borderRadius: '50%',

    }
    return (
        <div >
            <div onClick={() => {setOn(true)}} style={onStyle}>On</div>
            <div onClick={() => {setOn(false)}} style={offStyle}>Off</div>
            <div style = {indicatorStyle}></div>
        </div>

           );
};

export default OnOff;