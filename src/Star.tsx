import React from "react";

type StartPropsType = {
    selected: boolean,
    value: 1 | 2 | 3 | 4 | 5,
    setValue: (value: number) => void,
}

export const Star = (props: StartPropsType) => {
    return <span onClick={() => props.setValue(props.value)}>
    {props.selected ? <b>star </b> : 'star'}
    </span>
}
