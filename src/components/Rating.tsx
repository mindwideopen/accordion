import React, {useState} from "react";


export type RatingType = {
    value: number,
    setRating: (value: number) => void

}


export const Rating = (props: RatingType) => {



    return (
        <div>
            <Star value={1} selected={props.value > 0} setRating={props.setRating}/>
            <Star value={2} selected={props.value > 1} setRating={props.setRating}/>
            <Star value={3} selected={props.value > 2} setRating={props.setRating}/>
            <Star value={4} selected={props.value > 3} setRating={props.setRating}/>
            <Star value={5} selected={props.value > 4} setRating={props.setRating}/>

        </div>
    )
}


type StarPropsType = {
    setRating: (value: number) => void;
    selected: boolean,
    value: number

}


const Star = (props: StarPropsType) => {

    return <span style={ {
        border: '2px solid red',
        width: 'fit-content',
        cursor: 'pointer',
        marginLeft: '5px',
    }} onClick={() => {
        debugger
        props.setRating(props.value)

    }}>
      {props.selected ? <b>star</b> : 'star'}</span>
}
