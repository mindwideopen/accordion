import React from "react";



export const Rating = () => {

    const [rating, setRating] = React.useState(0);
    return (
        <div>
            <Star selected={rating > 0} setRating={() => setRating(1)} ></Star>
            <Star selected={rating > 1} setRating={() => setRating(2)} ></Star>
            <Star selected={rating > 2} setRating={() => setRating(3)}  ></Star>
            <Star selected={rating > 3} setRating={() => setRating(4)} ></Star>
            <Star selected={rating > 4} setRating={() => setRating(5)} ></Star>
        </div>
    )
}

type StarPropsType = {

    selected: boolean,
    setRating: () => void

}

const Star = (props: StarPropsType) => {
  return  <span onClick={() => props.setRating()}>{props.selected?<b>star</b>:'star' }</span>
}
