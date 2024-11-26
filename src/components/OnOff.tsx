import React from 'react';

type OnOffPropsType = {
    status: boolean,
    switchButton: (status: boolean) => void
}

export const OnOff = (props: OnOffPropsType) => {

    return (
        <div className={'onOff'}>

            <button className={`selectButton ${props.status ? 'on' : ''}`} onClick={() => props.switchButton(true)}>ON</button>

            <div className={`indicator ${props.status ? 'on' : 'off'}`} onClick={(status) => props.switchButton(!props.status)}></div>

            <button className={`selectButton ${!props.status ? 'off' : ''}`} onClick={() => props.switchButton(false)}>OFF</button>


        </div>
    );
};



