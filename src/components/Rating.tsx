import React from "react";


export type RatingValueType = 0|1|2|3|4|5;

type RatingPropsType = {
    rating: RatingValueType;
    selectRating: (value: RatingValueType) => void

}



export const Rating = (props:RatingPropsType) => {

    return (
        <div>
            <Star value={1} selected={props.rating > 0} selectRating={props.selectRating}/>
            <Star value={2} selected={props.rating > 1} selectRating={props.selectRating}/>
            <Star value={3} selected={props.rating > 2} selectRating={props.selectRating}/>
            <Star value={4} selected={props.rating > 3} selectRating={ props.selectRating}/>
            <Star value={5} selected={props.rating > 4} selectRating={props.selectRating}/>

        </div>
    )
}


type StarPropsType = {
    selectRating: (value: RatingValueType) => void;
    selected: boolean,
    value: RatingValueType

}


const Star = (props: StarPropsType) => {
  return  <span onClick={() => props.selectRating(props.value)}>{props.selected?<b>star</b>:'star' }</span>
}
