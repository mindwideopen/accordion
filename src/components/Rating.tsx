import React, {useState} from "react";


export type RatingValueType = 0|1|2|3|4|5;





export const Rating = () => {
    const[rating, setRating] = useState<RatingValueType>(0);

    const selectRating = (value: RatingValueType) => {

        setRating(value)
    }
    return (
        <div>
            <Star value={1} selected={rating > 0} selectRating={selectRating}/>
            <Star value={2} selected={rating > 1} selectRating={selectRating}/>
            <Star value={3} selected={rating > 2} selectRating={selectRating}/>
            <Star value={4} selected={rating > 3} selectRating={ selectRating}/>
            <Star value={5} selected={rating > 4} selectRating={selectRating}/>

        </div>
    )
}


type StarPropsType = {
    selectRating: (value: RatingValueType) => void;
    selected: boolean,
    value: RatingValueType

}


const Star = (props: StarPropsType) => {
  return  <span onClick = {() => {props.selectRating(props.value)}}>
      {props.selected?<b>star</b>:'star' }</span>
}
