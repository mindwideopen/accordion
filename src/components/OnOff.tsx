import React from 'react';

type OnOffPropsType = {
    on: boolean
}

const OnOff = (props: OnOffPropsType) => {

    return (
        <div className={'onOff'}>

            <div className={'selectButton' + ' ' + (props.on ? 'on':'')}>ON</div>

            <div className={'indicator' + ' ' + (props.on ? 'on' : 'off')}></div>

            <div className={'selectButton' + ' ' + (!props.on ? 'off' : '')}>OFF</div>


        </div>
    );
};

export default OnOff;

