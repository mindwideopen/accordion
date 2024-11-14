import React from 'react';

type OnOffPropsType = {
    on?: boolean
}

const OnOff = (props: OnOffPropsType) => {
    const [on, setOn] = React.useState(true);

    return (
        <div className={'onOff'}>

            <div className={'selectButton' + ' ' + (on ? 'on':'')} onClick={() => setOn(true)}>ON</div>

            <div className={'indicator' + ' ' + (on ? 'on' : 'off')}></div>

            <div className={'selectButton' + ' ' + (!on ? 'off' : '')} onClick={() => setOn(false)}>OFF</div>


        </div>
    );
};

export default OnOff;

