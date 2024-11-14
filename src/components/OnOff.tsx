import React from 'react';

type OnOffPropsType = {
    on?: boolean
}

const OnOff = (props: OnOffPropsType) => {
    const [on, setOn] = React.useState(true);

    console.log(on)
    return (
        <div className={'onOff'}>

            <button className={'selectButton' + ' ' + (on ? 'on':'')} onClick={() => setOn(true)}>ON</button>

            <div className={'indicator' + ' ' + (on ? 'on' : 'off')}></div>

            <button className={'selectButton' + ' ' + (!on ? 'off' : '')} onClick={() => setOn(false)}>OFF</button>


        </div>
    );
};

export default OnOff;

